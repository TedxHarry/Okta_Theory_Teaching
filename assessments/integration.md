---
title: "Integration checkpoint: Sign-in and account management"
parent: Assessments
nav_order: 2
---

# Integration checkpoint: Sign-in and account management

Use Days 1 to 10 to explain the following independent synthetic packets. Write your conclusions before opening the [debrief](self-checks/integration.md). Each packet names its own application, attempt, and target evidence. Do not transfer success from one application to another.

For each conclusion, name the packet, person, operation, and receiving system. If the packet supplies no result for a later stage, leave that stage unverified. Record the first attempt before using the debrief to revise it.

## Packet A: Salesforce rejects a SAML audience

Daniel has an approved Salesforce assignment and an existing active Salesforce account. For attempt A-1, Okta's record reports a successful SAML response issuance. These are selected fields from that response, not a complete assertion:

| Field | Value |
|---|---|
| Issuer | `https://identity.northbridge.example/saml/idp` |
| Audience | `https://salesforce.northbridge.example/entity/test` |
| NameID | `daniel.brooks@northbridge.example` |

The checked production Salesforce connection expects audience `https://salesforce.northbridge.example/entity/prod`. Its correlated validation report accepts the signature and validity window but rejects the audience. No Salesforce session is established for A-1.

**Task 1:** Categorize the exchange, trace the successful boundary followed by failure, and identify the demonstrated mismatch. Does an existing account or successful Okta response prove application entry? Propose a correction and verification.

## Packet B: Expense accepts OIDC

For Devi's attempt B-1, Expense uses Day 9's confidential backend client. Selected authorization-request fields are:

| Field | Value |
|---|---|
| client_id | nb-expense-web |
| response_type | code |
| scope | openid profile |
| redirect_uri | `https://expenses.northbridge.example/oidc/callback` |

The callback is registered. The backend verifies state, completes the authenticated PKCE code exchange, and validates the ID token, including nonce and the required time and cryptographic checks. These are selected decoded claims, not independent validation evidence:

```json
{
  "iss": "https://identity.northbridge.example",
  "sub": "subject-devi-1042",
  "aud": "nb-expense-web"
}
```

The application confirms Devi's intended pre-existing Expense account, establishes its session, and displays her expense page. Expense-approval permission has not been tested.

**Task 2:** Categorize the exchange. Explain the browser/backend distinction and why the supplied validation report matters beyond the readable claims. State the precise successful outcome. Did this prove account creation?

## Packet C: Projects rejects a create

Devi is also assigned to Projects. Her app profile contains the correct userName and SAL department code. The authorized connector sends a POST to the checked Projects `/scim/v2/Users` endpoint with those values and active true. Projects replies HTTP 409 with:

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:Error"],
  "status": "409",
  "scimType": "uniqueness",
  "detail": "userName is already in use in this Projects instance."
}
```

No conflicting record, ownership confirmation, successful association, or follow-up account read is supplied.

**Task 3:** Categorize the exchange and locate its failure. What does the response report, and what remains unknown about Devi's target account? Explain why Packet B does not settle this incident. Request specific evidence before choosing a correction.

## Packet D: Same user, different identity evidence

A colleague suggests using Devi's Expense ID token to authorize the Projects connector, then removing the uniqueness check if the create still fails.

**Task 4:** Explain both errors in that proposal. Name a justified next action using Packet C, without writing a configuration procedure.

## Give a useful handoff

**Task 5:** Using Packets A–C, write a short handoff for each application's owner: demonstrated outcome, first proven failure if any, next evidence or action, and what would confirm resolution. For every application, state whether the supplied evidence establishes the intended account's existence and actual entry.

## Packet E: Password accepted, another requirement unresolved

This is an independent Expense attempt E-1 for Jordan, who is still employed. Do not carry Devi's successful Packet B outcome into it.

| Evidence | Observation |
|---|---|
| Earlier directory operation | Jordan's selected AD data was imported and associated with his correct Okta user. |
| Password result for E-1 | AD accepted his credentials through the handling agent. |
| Applicable authentication requirement | Accepted password evidence plus accepted Okta Verify Push; no prior verification is reused. |
| Enrollment | Completed for Jordan's Northbridge account and the selected device. |
| Push result | Challenge issued; no accepted response recorded in the supplied evidence. |
| Expense outcome | No application-side acceptance or account-state evidence supplied. |

**Task 6:** Which observation establishes password acceptance, and why is the import insufficient for that claim? Distinguish enrollment from successful Push. Name the first unverified requirement, two possible explanations, and evidence that would separate them. Does this packet justify a password reset, a SAML/OIDC configuration change, or a claim that Expense access succeeded?

Use the [debrief and rubric](self-checks/integration.md) after attempting all tasks. Record one corrected distinction in [your notebook](../notebook/guide.md).

## Explain the proposed action

Choose one failed attempt. Identify the connection setting or operation you would inspect, the owner of the next evidence, and the outcome needed after a correction. Explain why one tempting action, such as resetting a password or retrying a create, is not justified by this packet.

Use [Reading records and settings](../requests/reading-records-and-settings.md) if you need to connect the question to a configuration view. Keep later policy and recovery questions open until their lessons.


[Day 10](../lessons/day-10-scim.md) · [Course home](../index.md)
