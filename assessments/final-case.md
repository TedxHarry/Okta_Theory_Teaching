---
title: "Final case: Northbridge's open identity tickets"
parent: Assessments
nav_order: 3
---

# Final case: Northbridge's open identity tickets

All records, identifiers, and operation summaries are synthetic. These are investigation snapshots, not raw product logs or executable requests. No corrective results are supplied unless explicitly stated.

Record your investigation before opening the model answers or recap. For each ticket, use its evidence labels to distinguish confirmed findings, possible explanations, proposed actions, and outcomes still awaiting verification.

Use this packet with the [Day 15 tasks](../exercises/day-15.md). The current case follows Maya's effective move to Finance and Jordan's departure. Each ticket supplies its own observations; it does not claim that every earlier example occurred in one production history. Ticket F is an archived incident before Jordan departed.

## Environment and ownership

| Item | Supplied architecture |
|---|---|
| Employee flow | Workday → Okta → AD and configured applications. |
| Source priority | Workday first, AD second, applied to each user's actual source associations. |
| Employee fields | Department and workerType inherit the effective profile source; employee department is Workday-owned here. |
| Work email | Explicitly sourced from AD for AD-linked employees; no competing outbound write to that field. |
| Maya and Daniel | Correct Workday and AD associations. Maya is Finance, NB-1042; Daniel is a Finance manager, NB-1020. |
| Priya | Sales contractor, maintained in Okta after sponsor approval; no Workday association or AD assignment and excluded from employee imports. |
| Alex | IAM administrator; administrative identity is Okta-managed and excluded from employee imports. Actual role authority must be checked for each change. |
| Jordan | Departed employee in current tickets; correctly linked accounts. F supplies an earlier employed state. |
| Salesforce | SAML sign-in. Do not assume SCIM provisioning. |
| Expense | OIDC confidential web client using Authorization Code, PKCE, and backend client authentication. Local application sessions are separately managed. |
| Projects | SCIM 2.0 create/update/deactivate contract from Day 10; required department codes SAL, FIN, IT. Projects is not a profile source. |

For current sign-in tickets, use the supplied policy and authentication findings; do not invent another MFA requirement. Application permissions and account-management results remain separate checks.

## Ticket A: Maya's department differs in Projects

**Requirement:** Maya's effective Finance department must reach her existing Projects account as FIN. Projects access continues. The application uses this department value in an internal allocation report; approval permission is controlled separately.

| Evidence | Observation |
|---|---|
| A1 | Workday department Finance; employeeNumber NB-1042. |
| A2 | Okta department Finance and workerType Employee; correct Workday association and ownership confirmed. |
| A3 | Current outgoing departmentCode mapping is a fixed SAL value. Preview with Maya's Finance input produces SAL. Projects app profile contains SAL. |
| A4 | A correlated update sends SAL to linked Projects id prj-1042; target reports success. A subsequent read of that account shows SAL and active true. |
| A5 | Maya can enter Projects, but the allocation report places her in Sales. No failed sign-in or approval-role problem is supplied. |

No evidence says that HR should be changed or that the target rejected the value.

## Ticket B: Priya's individual Salesforce assignment

**Normal requirement:** Salesforce is assigned through NB-Sales-Employees, whose rule is Sales AND Employee. Contractor access needs a separate approved exception.

| Evidence | Observation |
|---|---|
| B1 | Priya's approved and stored classification is Sales / Contractor. Her source associations remain as stated above. |
| B2 | The active rule processes her profile. She is absent from NB-Sales-Employees. |
| B3 | Salesforce is individually assigned to Priya. The exception approval, owner, scope, and end condition are not supplied. |
| B4 | Her existing Salesforce account is active; a correlated SAML sign-in is accepted and a protected page is returned. |
| B5 | Separate Expense evidence: her Expense exception is approved, the registered callback is used, state and PKCE exchange checks succeed, ID token validation including issuer/audience/nonce succeeds, and Expense confirms entry to her intended account. |

The business request on the Salesforce ticket says, “Keep useful contractor access; executives should be different.” It does not define which contractors, which actions, or what “different” means. B5 concerns another application.

## Ticket C: Daniel's Salesforce sign-in fails

**Requirement and impact:** Daniel has an approved Salesforce reporting exception and needs its reports for Finance work. His assignment and intended existing target account are confirmed. Salesforce received the sign-in response but rejected it; this attempt did not establish an application session.

| Evidence | Observation |
|---|---|
| C1 | Okta account Active; required authenticators enrolled. Correlated current results satisfy the applicable global-session and app-authentication requirements. |
| C2 | Okta issues the SAML response for this Salesforce production attempt. |
| C3 | Selected assertion audience is `https://salesforce.northbridge.example/entity/test`. |
| C4 | Production Salesforce expects `https://salesforce.northbridge.example/entity/prod`. Its correlated validation report accepts signature and validity checks but rejects the audience. |
| C5 | The response carries NameID `daniel.brooks@northbridge.example`; the configured matching value on the intended Salesforce account is the same. No Salesforce session is established. |

These are selected decoded assertion fields with a separate supplied validation report, not a complete SAML message.

## Ticket D: Jordan's departure is not fully resolved

**Requirement and impact:** Jordan's departure is effective. Workforce access must end. The existing Expense session below still retrieves protected information.

| Sequence | Evidence |
|---|---|
| D1 | Workday departure event is received for the correctly associated Okta identity. |
| D2 | Okta deactivation completes; a later read shows DEPROVISIONED and absent app assignments. Fresh Okta sign-in is blocked. |
| D3 | Directory owner confirms the correct AD account is disabled. |
| D4 | Projects deactivation is enabled. The operation targets Jordan's linked resource with active false, receives HTTP 503, and a later account read still shows active true. |
| D5 | A new protected Expense request succeeds using his pre-existing local session after D2. It is not merely cached page content. No correlated new Okta sign-in is shown. |
| D6 | Expense's account-management action, logout configuration, and session-termination result have not been supplied. |

Do not infer the service-unavailability cause or the exact reason the Expense session persists. No successful retry is supplied.

## Ticket E: Projects reports a username conflict

**Requirement:** Priya has a separately approved Projects exception for a specified work assignment. This approval is independent of the missing Salesforce approval in B. Projects should provide the correct account without creating or taking over someone else's account.

| Evidence | Observation |
|---|---|
| E1 | Projects assignment is present. App profile userName is `priya.shah@northbridge.example`, departmentCode SAL. |
| E2 | The recorded username lookup against the intended Projects instance reports no match. A subsequent create sends the expected userName, SAL enterprise department, and active true. |
| E3 | The create receives HTTP 409 and the SCIM body below. |
| E4 | The conflicting resource, ownership record, and exact lookup details are not supplied. No confirmed Projects association or successful create is shown. |

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:Error"],
  "status": "409",
  "scimType": "uniqueness",
  "detail": "userName is already in use in this Projects instance."
}
```

A colleague suggests adding a number to the username and retrying. No approved naming correction is supplied.

## Ticket F: Archived AD password incident

**Historical context:** This is a separate attempt before Jordan's departure. He was employed, his Okta account was Active, and his correct AD association was confirmed. This is not evidence that he can sign in now.

| Evidence | Observation |
|---|---|
| F1 | A prior AD import successfully processed his scoped directory data. |
| F2 | AD delegated password authentication applies to the archived sign-in attempt. The handling agent receives the request and reaches the domain controller. |
| F3 | The domain controller returns a credential-validation rejection. The supplied packet does not specify whether the submitted password, an account restriction, or another directory condition explains it. |
| F4 | That attempt does not complete authentication. No application entry is supplied. |

The ticket is retained for investigation review; it is not a request to restore access after departure.

## Your response

Complete the [seven tasks](../exercises/day-15.md), including a prioritized handoff and one complete mover or leaver explanation. Use evidence labels and leave unresolved findings explicit.

[Day 15](../lessons/day-15-integrated-case.md) · [Course home](../index.md)
