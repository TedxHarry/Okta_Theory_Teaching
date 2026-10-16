---
title: "Day 15: self-check answers"
parent: Self-Checks
nav_order: 15
---

# Day 15: Model investigation

Attempt the [tasks](../exercises/day-15.md) before reading. Equivalent reasoning is acceptable when it follows the packet. A missing approval or cause should remain missing in the answer.

Compare one ticket at a time with your recorded attempt. Mark a conclusion as supported only when you can name its evidence label. If your correction differs from the model, check whether it addresses the demonstrated gap, preserves approved access, and includes a way to verify the result. Rewrite any unsupported conclusion in your own words before consulting the debrief.

## 1. Explain the environment and priorities

Workday controls the employee profile through the user's applicable association and the configured source order. AD is second, but it explicitly controls designated employee work email. That field exception does not transfer employee lifecycle ownership to AD. AD also validates passwords on the delegated path through the agent; importing data and validating a password are separate operations.

Priya's profile remains Okta-managed because she has no applicable Workday or AD association and employee imports exclude her population. Sponsor approval is a business process, not a technical profile-source integration. An accidental association could affect this model and would require investigation.

Assignments establish Okta access relationships. SAML and OIDC carry different authentication information for application validation. SCIM manages target identity resources. Application sessions and permissions require application-side evidence. B5 establishes Expense entry, not another application's approval or provisioning result.

Ticket D merits first attention: the departure is effective and protected access is demonstrably still available. The Projects owner must resolve the active target after a failed operation, while the Expense owner investigates and terminates the relevant retained access. IAM coordinates the evidence and required scope.

B also warrants prompt approval review because contractor access is working without supplied authorization evidence; the packet does not prove that approval is absent in reality. C blocks Daniel's Finance work. A affects an allocation report, and E blocks the required correct Projects-account outcome. Their owners can investigate concurrently. F is an archived review rather than a current restoration request.

Other orderings among B, C, A, and E are defensible if tied to stated impact and unresolved risk. Do not invent a financial deadline, active attack, or discovered approval to justify the ranking. A useful handoff says which outcomes are confirmed, which access remains, and which decisions or technical fixes are outstanding.

**Case evidence:** [Environment and ownership](../assessments/final-case.md#environment-and-ownership)

## 2. Investigate Maya's move

A1 and A2 agree on the correct Finance value. A3 is the first demonstrated wrong representation: the fixed outbound mapping produces SAL. A4 confirms that Projects accepted and stored the SAL it was sent. The operation succeeded, but the value is wrong for Maya's approved Finance requirement. A5 adds working entry and a report that places her in Sales. Those findings can coexist; successful sign-in does not make the report correct.

Replace the fixed value with the approved department-to-code conversion. Keep correct HR and Okta data unchanged. Verify the saved mapping with Finance and other supported inputs, Maya's app profile, the actual update to prj-1042, the target FIN value, and the corrected report outcome. Preserve her intended existing account and approved access.

Review the other users sharing the mapping and identify which actually received incorrect values. Recovery needs a known approved configuration and a plan to correct affected target values; reverting configuration alone would not establish that previous writes were reversed. A functioning login neither validates department data nor proves the required reporting result.

**Case evidence:** [Ticket A: Maya's department differs in Projects](../assessments/final-case.md#ticket-a-mayas-department-differs-in-projects)

## 3. Investigate Priya's Salesforce access

B1 to B2 show the expected employee-only rule result: Sales AND Employee excludes a Sales contractor. B3 supplies a separate individual assignment. B4 proves actual entry through the checked Salesforce account, but not its business authorization.

Request the named approver, current exception decision, eligible contractor population, allowed application actions, owner, and end condition. Clarify whether executives are excluded, included normally, or given specific different permissions. Do not interpret the phrase as permission to bypass authentication requirements.

If a valid scoped exception is confirmed, check that the observed access fits it and that removal is managed. If the responsible owner confirms no authorization, arrange approved removal and verify all applicable assignment, target, and session outcomes. If approval remains unresolved, state the open decision and accountable owner. "The packet does not contain the approval" is different from "the responsible owner confirms no approval exists." Neither a valid exception nor a confirmed violation should be invented to complete the answer.

B5 proves its supplied Expense authentication, validation, account association, and entry outcome. It does not authorize Salesforce, prove Projects account creation, or establish all internal permissions. A valid approval for one application is not a transferable approval for another.

**Case evidence:** [Ticket B: Priya's individual Salesforce assignment](../assessments/final-case.md#ticket-b-priyas-individual-salesforce-assignment)

## 4. Investigate Daniel's SAML failure

C1 establishes the applicable Okta authentication requirements were met. C2 establishes response issuance. C3 to C4 identify the audience mismatch and Salesforce's rejection: test was sent where production was expected. The signature and time checks are independently reported as accepted. C5 supplies a matching configured user identifier, but the attempt still fails validation before a Salesforce session is established.

Review and correct the emitted audience configuration for the intended production integration against the approved expected value. Check shared impact, then verify a new correlated response, target acceptance, correct account association, actual entry, and the required reporting permission.

The packet does not demonstrate bad credentials or a missing target account. Resetting Daniel's password or creating a second account would not fix the audience mismatch. Decoded assertion fields alone would not prove signature validity; here the separate validation report supplies that result.

**Case evidence:** [Ticket C: Daniel's Salesforce sign-in fails](../assessments/final-case.md#ticket-c-daniels-salesforce-sign-in-fails)

## 5. Investigate Jordan's departure

D1 establishes the effective source event reached the correct lifecycle path. D2 confirms completed Okta deactivation, removed app assignments, and blocked fresh Okta sign-in. D3 confirms the checked AD account is disabled. These are completed parts of the requirement.

D4 shows a failed Projects operation and a still-active target. Ask the connector and application owners for the correlated service failure and current resource state, establish an approved correction or supported retry, and verify the intended account reaches inactive state and the required access outcome. Do not infer a particular outage cause from 503.

D5 shows retained authenticated Expense access after deactivation. D6 leaves its removal and session mechanics unresolved. The Expense owner should identify the precise account/session, inspect the supported account and session controls, complete the authorized removal, and verify that the checked old session no longer serves protected data. Include other sessions and routes if the departure requirement covers them. Daniel's Day 13 example is not proof of Jordan's specific cause.

Deleting the Okta identity is a separate irreversible action and does not prove either target issue is fixed. Reactivating Jordan would conflict with the effective departure and would not establish a repair of Projects' service failure. A later successful Projects operation would still leave Expense unresolved without its own evidence.

A suitable leaver explanation follows the source event, Okta state, assignments, linked target states, failed operation, and observed session. It ends with the actual remaining work, not a claim that all access ended.

**Case evidence:** [Ticket D: Jordan's departure is not fully resolved](../assessments/final-case.md#ticket-d-jordans-departure-is-not-fully-resolved)

## 6. Investigate the Projects conflict

E3 establishes that Projects reported a uniqueness conflict for the create. It does not identify the conflicting account's owner or prove a correctly linked Priya account exists. E2's earlier no-match result does not explain the discrepancy by itself.

Request the full lookup filter/result, exact instance and sequence, competing creation history, and the conflicting resource with reliable ownership evidence. A creation record showing the account appeared between the lookup and create would support the competing-process explanation. The exact search and response could instead show why an already-existing record was missed. Those are evidence requests to distinguish hypotheses, not findings already supplied by E.

The proposed numbered username is not an approved correction. It might create a duplicate for the same person or conceal another person's conflicting record. If the record belongs to Priya, evaluate supported existing-account handling. If it belongs to someone else, correct the approved naming or data problem through its owner. Confirm the association, applicable operation result, target state, and eventual access before closing the ticket.

Priya's approved Projects exception establishes an access requirement, not permission to take over an unverified account or evidence of a Salesforce exception.

**Case evidence:** [Ticket E: Projects reports a username conflict](../assessments/final-case.md#ticket-e-projects-reports-a-username-conflict)

## 7. Interpret the historical AD incident

F1 confirms only the earlier scoped import. F2 establishes that the handling agent reached the domain controller for this attempt. F3 establishes a credential-validation rejection, but leaves its reason unspecified. Request the correlated directory result and relevant account/credential conditions at that historical point. The controller answered, so this packet reached credential validation. Its general rejection still cannot distinguish a submitted-password problem from the other stated directory conditions. F4 supplies no application entry.

In the changed connectivity packet, there is no credential result because the request did not reach a successful directory validation outcome. Investigate the demonstrated connectivity boundary before proposing a credential correction. Neither a successful import nor a connection failure proves that the password is correct.

Both are historical reasoning exercises. Jordan is now departed; resolving an earlier cause does not authorize restoring current access.

Use the [final debrief and skills checklist](../assessments/self-checks/final-case.md) to identify specific concepts to revisit.

[Case evidence](../assessments/final-case.md) · [Day 15](../lessons/day-15-integrated-case.md) · [Course home](../index.md)

[Revise Day 15](../revision/day-15.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-15.md) · [Day 15 recap](../revision/day-15.md) · [Reasoning exercises](../exercises/day-15.md)

**Case evidence:** [Ticket F: Archived AD password incident](../assessments/final-case.md#ticket-f-archived-ad-password-incident)
