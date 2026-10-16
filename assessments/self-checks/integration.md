---
title: "Integration checkpoint: Debrief and rubric (debrief)"
parent: Assessments
nav_order: 12
---

# Integration checkpoint: Debrief and rubric

Attempt the [checkpoint](../integration.md) first. Equivalent reasoning is acceptable; judge whether the conclusion follows from the packet.

## Task 1: Salesforce

This is SAML sign-in. Response issuance succeeded on Okta's side; Salesforce rejected the supplied test audience against its production expectation. Signature acceptance is separately supplied and does not make the audience acceptable. Daniel's account exists and is active, but this attempt did not establish a session.

Review the production connection's emitted audience configuration against its approved identifier, correct the demonstrated mismatch, and verify a new response and Salesforce acceptance. Keep account matching, session establishment, and required permissions as distinct checks. No evidence supports an authenticator reset or a new account as the correction.

## Task 2: Expense

This is OIDC sign-in through Authorization Code with PKCE. The browser returns a code; the backend exchanges it for tokens. Decoded claims provide readable values, while the supplied validation report establishes the stated checks for this attempt.

The intended account already exists, and actual entry and an application session are demonstrated. Creation is not: the packet explicitly describes a pre-existing account. Expense-approval permission remains untested.

## Task 3: Projects

This is a SCIM account-create exchange. The request reached Projects and received a reported uniqueness conflict. No successful create is established. Projects reports a value already in use, but the packet does not identify its owner or establish a correctly associated Maya account.

Request the conflicting resource and reliable ownership identifiers, the matching/lookup evidence, and the correlated operation history. Use those to decide approved existing-account handling or a data correction. Do not automatically delete, rename, or link a record. Successful Expense sign-in concerns a different application and operation.

## Task 4: Proposed shortcut

The Expense ID token supplies authentication information for Expense's client validation. It is not a service credential granting the Projects connector account-management authority. Projects' uniqueness constraint also protects its account model; bypassing it would not resolve the identity question.

The supplied create reached the target through an authorized connector. The next justified action is the ownership/matching investigation from Task 3, not substituting credentials or disabling validation.

## Task 5: Handoff

| Application | Supported outcome | Next action and resolution evidence |
|---|---|---|
| Salesforce | Daniel's account exists; A-1 failed audience validation and did not establish a session. | Correct the emitted audience for the approved production connection, then verify a new correlated exchange and application entry. |
| Expense | Maya's pre-existing account and B-1 entry are confirmed. | No sign-in defect is shown. Check approval permission separately if the business requirement includes approving expenses. |
| Projects | Create rejected; ownership and correct association of the conflicting record are unknown. | Establish record ownership and lookup history, choose the approved correction, then verify association, applicable operation result, and target state. Entry requires separate evidence. |

A good handoff distinguishes observed facts from proposed actions. “All provisioning works because SSO succeeded” would cross both a protocol boundary and an application boundary.

## Task 6: Jordan's remaining authentication requirement

The AD credential result for E-1 establishes password acceptance. The earlier import establishes a different data operation; it cannot supply that authentication result. Enrollment establishes the account/device registration, while an issued challenge establishes that Push was requested.

The first unverified requirement is an accepted Push response. A notification that did not reach the device and a delivered notification that Jordan denied are two possible explanations. Request the selected-device delivery evidence and challenge response/outcome for E-1 to distinguish them. Neither explanation is established by the supplied packet.

No evidence supports changing a working password or a federation setting as the correction. After the required authentication evidence is accepted, application-side acceptance, account state and permissions still need their own evidence. Packet B concerns Maya's different attempt and cannot fill those gaps. Revisit Day 6's operation distinction and Day 7's enrollment/challenge distinction if your answer treats import or enrollment as a completed sign-in.

## Assess your reasoning

For each criterion, mark **independent**, **with guidance**, or **needs review**. Independent means you explained that point without consulting an explanation or reference for it; with guidance means a reference helped; needs review means the distinction remains unclear.

| Criterion | Evidence of understanding | Revisit |
|---|---|---|
| AD operation | Uses the current credential result, rather than import success, as password evidence. | Day 6 |
| Authenticator evidence | Separates enrollment, challenge issuance and an accepted response. | Day 7 |
| Protocol purpose | Separates SAML/OIDC sign-in from SCIM account management. | Days 8 to 10 |
| Message route | Separates browser delivery from backend exchanges. | Days 2 and 9 |
| Validation | Does not equate readable claims or issuance with target acceptance. | Days 8 to 9 |
| Account evidence | Distinguishes a confirmed account from an unowned conflict report. | Days 1 and 10 |
| Correction | Fixes the audience defect but investigates ownership before resolving the conflict. | Day 10 conflict example |
| Scope | Keeps people, instances, attempts, permissions, and outcomes separate. | Day 2 evidence boundaries |

## Try a changed condition

Replace Packet C's conflict with a 201 response containing the new resource id and a subsequent target read confirming Maya, SAL, and active true. No Projects sign-in is supplied. What changes?

<details markdown="1">
<summary>Check the changed-condition reasoning</summary>

Creation and the checked account state are now supported, so the uniqueness investigation no longer follows from this packet. Projects sign-in and project permissions remain unverified. Expense success still cannot establish those outcomes for Projects.

</details>

## Review the action, not just the diagnosis

For your proposed action, mark each point as explained independently, explained with a reference, or still unclear. Revisit the specific missing explanation before trying a changed situation.

| Point | What your response should establish |
|---|---|
| Boundary | Chooses the SAML, OIDC, authenticator, or SCIM evidence relevant to the supplied failure. |
| Action | Connects the proposed correction to that evidence, with no unrelated resets or account creation. |
| Owner and effect | Identifies the application or directory owner needed for the next check and considers other users of the connection. |
| Verification | Requires a new relevant attempt or target read. A saved setting, issued challenge, or connection test does not settle later outcomes. |


[Checkpoint](../integration.md) · [Day 10](../../lessons/day-10-scim.md) · [Course home](../../index.md)
