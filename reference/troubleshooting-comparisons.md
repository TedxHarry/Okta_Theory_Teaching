# Similar symptoms, different investigations

The same user-facing message can hide different failures. Identify the intended outcome, the last confirmed success and the first confirmed mismatch. These independent fictional packets demonstrate different boundaries; their abbreviated records are teaching summaries, not literal event names to search for.

## “The department is wrong”

| Supplied evidence | Demonstrated gap | Next discriminating check |
| --- | --- | --- |
| HR says Sales, but the approved employee change requires Finance | Authoritative business data disagrees with the approved requirement | Source-owner correction and its effective timing |
| HR and Okta say Finance; app profile says Sales | First wrong representation is app-specific | Actual mapping source, direction, transformation and application behavior |
| App profile says FIN; target still stores SAL; no update completion result exists | Intermediate state is correct but destination is stale | Actual outbound request, response and target resource association |

Do not apply one universal mapping edit to all three. A correct transformation cannot repair an incorrect business fact, and a correct intermediate value does not prove delivery. Compare with [annotated profile evidence](annotated-evidence.md#a-profile-value-travels-through-several-boundaries).

## “The application is missing”

| Supplied evidence | Interpretation | What remains unknown |
| --- | --- | --- |
| The rule requires Sales AND Employee; the correct user classification is Sales Contractor | Nonmembership fits the stated rule | Whether the business owner approves an exception |
| The user qualifies and belongs to A; the app is assigned only to B | The intended grant path is not established | Which relationship the approved design requires changing |
| App assignment exists; target create returns a uniqueness conflict | Account provisioning has a conflict to resolve | The conflicting field and rightful account association |

Eligibility, assignment and target account readiness are different questions. A direct grant could bypass one visible gap while creating another access path that survives later group removal. Inspect the actual approved design before adding an exception.

## “Sign-in failed”

| Packet | Last confirmed success | First confirmed failure | Useful next evidence |
| --- | --- | --- | --- |
| Directory A | Request routed to the intended agent path | Required directory communication does not complete | Agent/service connectivity and the actual missing response |
| Directory B | Agent reaches the intended AD account | AD rejects the submitted credential | The correlated directory account/credential result |
| SAML C | Provider issues and browser delivers a response | Receiver rejects the audience | Expected versus emitted audience and exact app/environment |
| OIDC D | Browser reaches callback with a code | Backend token exchange fails | Actual exchange request, response and applicable PKCE/client-authentication requirements |
| Local E | Federation accepted for the intended subject | No unique eligible app account can be selected | The actual lookup rule, consumed identifier and candidate accounts |

Directory A does not prove a wrong password, and OIDC D does not prove that the browser never returned. A provider-side success cannot close SAML C or Local E. See [the troubleshooting playbook](troubleshooting-playbook.md) for the corresponding investigation paths.

## “MFA is broken”

In one packet, an authenticator is available but the user has no required enrollment. In a second, enrollment exists but the particular challenge is rejected. In a third, accepted proof exists but does not satisfy the selected app rule's stronger requirement. Those facts call for different checks: enrollment readiness, actual method/challenge context, or policy/assurance interpretation.

Before choosing a reset, explain what the reset would change and why the evidence supports it. Resetting an enrollment does not by itself correct an unrelated shared-policy association. Revisit [availability, enrollment and use](../lessons/day-07-authenticators-enrollment-mfa.md#separate-availability-enrollment-and-use).

## “SCIM returned an error”

| Supplied response and context | What is supported | What is not established |
| --- | --- | --- |
| 400 invalidValue; actual department is Finance; target requires FIN | Sent representation violates this target contract | Every 400 has the same cause |
| 409 uniqueness conflict; no ownership investigation supplied | Creation conflicts with a uniqueness constraint | Which existing account may safely be linked or changed |
| Update is queued; no target response | Requested work is pending | Either completion or definite failure |

SCIM account operations are separate from browser SSO. An API error does not automatically invalidate a separately established app session, and an existing session does not prove that a pending profile update succeeded. Review [Day 10](../lessons/day-10-scim.md).

## “The user is still signed in after removal”

First distinguish the old session from a new one. In packet A, the old app session ended and a new exchange reused a surviving provider session. Later access used replacement state. In packet B, the old target session continues to authorize requests after its required termination time. That observed continuing access needs an owned response even if its cause is not yet established.

In packet C, a target received a logout request but no result is available. The target's termination is unconfirmed. Silence proves neither survival nor completion. Check the supported mechanism, actual participant processing and the next relevant protected request.

Use [Day 12's removal requirements](../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome) and [Day 13's session distinctions](../lessons/day-13-policies-and-sessions.md#explain-why-two-sessions-matter).

## Test your conclusion against changed evidence

Choose one row and replace its last confirmed result with an unknown. Explain how your next check changes. Then replace the failed audience with a correct one and a rejected local account. If your diagnosis stays unchanged despite those different facts, revisit the boundary it depends on.

For an independent assessment, attempt [Northbridge's final case](../assessments/final-case.md) before opening its [model investigation](../self-checks/day-15.md). Assess the reasoning using the existing [skills rubric](../assessments/self-checks/final-case.md), rather than counting how confidently you named a cause.
