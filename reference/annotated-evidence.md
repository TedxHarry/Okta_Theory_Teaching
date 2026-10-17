# Read identity evidence with purpose

Start with the operation, the system and the question. A profile value, SAML assertion, OIDC token and SCIM resource can all contain a username, but they establish different facts. These independent fictional packets show how to read those differences. They do not extend Northbridge's main story or represent real vendor logs.

Use the profile example after Day 3 and the protocol examples after Days 8 to 10. Each selected extract is incomplete teaching evidence, not an executable request or a production validation recipe. Preserve original messages securely when cryptographic investigation requires them; editing a signed object prevents the edited copy from proving the original signature.

## A profile value travels through several boundaries

The app contract requires department code `FIN`. The authoritative employee record says Finance. This packet describes an employee whose department is owned by that source.

```text
HR employee E1042: department = Finance
Okta user 00u-example: department = Finance
Mapping direction: Okta user -> Projects app user
Effective Projects app-user profile: departmentCode = FIN
Outbound target update: queued; no completion result supplied
Target resource prj-1042: current value not inspected
```

| Observation | What it establishes | What remains open |
| --- | --- | --- |
| HR and Okta both say Finance | The observed central representation agrees with this source | Whether every other field is correct |
| App profile says FIN | This intermediate representation fits the target code contract | Whether an update was delivered and accepted |
| Update is queued | Work has been requested | Execution and current target state |

Explain why changing the correct HR value would be the wrong first correction here.

<details><summary>Reveal the reasoning</summary>

The source, central profile and app profile agree with their stated responsibilities. The first unverified boundary is outbound completion and target state. Inspect the correlated operation result and read the intended resource before changing correct upstream data. A queued task is neither a successful update nor proof of failure.

</details>

Continue with [mapping direction and target verification](../lessons/day-03-profiles-and-mappings.md#a-preview-is-a-calculation-not-delivery-evidence).

## SAML: read subject and receiver separately

Atlas test expects audience `urn:atlas:test`, an approved provider, and employee-ID account matching. These are selected fields from an assertion; the enclosing response, subject confirmation and signature are omitted.

```xml
<saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion">
  <saml:Issuer>urn:example:approved-idp</saml:Issuer>
  <saml:Subject>
    <saml:NameID>E1042</saml:NameID>
  </saml:Subject>
  <saml:Conditions NotOnOrAfter="2026-10-17T10:05:00Z">
    <saml:AudienceRestriction>
      <saml:Audience>urn:atlas:test</saml:Audience>
    </saml:AudienceRestriction>
  </saml:Conditions>
</saml:Assertion>
```

`Issuer` reports who issued the assertion. `NameID` reports the subject identifier. `Audience` restricts which relying party may consume it. `NotOnOrAfter` is an exclusive upper time bound for those Conditions. None of those strings proves that a signature verified or an account was selected.

Suppose a preserved original reaches Atlas at 10:01 UTC. A correlated receiver record reports that required signature, target, time, request and replay checks passed, but `account_match=none`. What can you conclude?

<details><summary>Reveal the reasoning</summary>

The supplied receiver record establishes acceptance for that original attempt, while account resolution stopped entry. Investigate the exact consumed subject, approved lookup rule and intended local account. The sanitized extract alone would not establish acceptance. It also cannot prove that every displayed field was inside the verified protection scope.

</details>

See [SAML receiving requirements](../lessons/day-08-saml.md#what-the-application-must-validate) and the [OASIS browser SSO profile](https://docs.oasis-open.org/security/saml/v2.0/saml-profiles-2.0-os.pdf).

## OIDC: distinguish a returned code from verified identity

Expense is a confidential backend client using authorization code flow with PKCE. The backend retained the transaction's state, nonce and verifier. Its decoded authorization request includes:

```text
client_id = expense-test
response_type = code
scope = openid profile
redirect_uri = https://expense.example/callback
state = opaque-transaction-handle
nonce = request-specific-nonce
code_challenge_method = S256
code_challenge = derived-challenge-value
```

The callback identifies Expense's receiving endpoint. State associates the return with the initiating context. Nonce connects the ID token to the relevant request when used. The PKCE challenge is derived from the verifier retained for the later code exchange; it is not the user's password.

The browser returns a code and state. The backend exchanges the code using the required verifier and client authentication. The following is an unverified, selected ID-token claim view, not a complete token:

```json
{
  "iss": "https://identity.example",
  "aud": "expense-test",
  "sub": "subject-4821",
  "nonce": "request-specific-nonce",
  "exp": 1792231800
}
```

| Claim | Read it as | Do not assume |
| --- | --- | --- |
| iss | Reported issuer | That any familiar URL is trusted |
| aud | Intended token recipient | That this ID token is an API credential for every resource |
| sub | Subject within the issuer relationship | That it equals email or an unrelated target resource ID |
| nonce | Request association value | That a match replaces signature and other token checks |
| exp | Expiration as a NumericDate in seconds | That it defines every app session's lifetime |

Readable claims do not establish verification. The client still applies its flow's required checks and local account rules. An access token serves the resource-server authorization relationship; it is not interchangeable with the ID token. See [Day 9's artifact comparison](../lessons/day-09-oidc.md#three-artifacts-three-purposes) and [OIDC ID-token validation](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation).

## SCIM: read the operation and target result together

Projects requires department code `FIN`. A supported SCIM PATCH targets its existing resource `prj-1042`. Authentication credentials and unrelated fields are omitted.

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [{
    "op": "replace",
    "path": "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department",
    "value": "Finance"
  }]
}
```

A correlated target result is HTTP 400, with `scimType=invalidValue` and detail saying that department must be `FIN` or `SAL`. This packet demonstrates a representation mismatch: the actual sent value is Finance. A generic 400 without the payload and detail would not establish that cause.

Before proposing a repair, distinguish this from a 409 uniqueness conflict, which calls for inspecting the conflicting field and account ownership. Do not create another account to repair an invalid department value. After correcting the authorized transformation, verify the new operation and the stored field on `prj-1042`; a mapping preview alone does not show delivery. See [Day 10's rejected-value example](../lessons/day-10-scim.md#a-rejected-value-points-to-a-different-correction) and [SCIM protocol operations](https://www.rfc-editor.org/rfc/rfc7644.html).

## Bring the evidence into an investigation

For each packet, finish four sentences: “This source establishes ___. The next unverified boundary is ___. I would inspect ___. A verified correction would show ___.” Compare your choices with [similar symptoms and different causes](troubleshooting-comparisons.md). Use the existing [final case](../assessments/final-case.md) to combine the distinctions independently.
