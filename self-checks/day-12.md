---
title: "Day 12: self-check answers"
parent: Self-Checks
nav_order: 12
---

# Day 12: Self-check answers

Attempt the [exercises](../exercises/day-12.md) first. Separate the business requirement from the observed result in each system.

## 1. Interpret the state

PROVISIONED corresponds to Pending user action for the Okta account; it does not certify downstream application provisioning. HR departure is employment data, DEPROVISIONED is the deactivated Okta account state, and active false describes a SCIM target account's administrative state. Each needs its own identity and system context.

Revisit [Name the state and its system](../lessons/day-12-joiners-movers-leavers.md#name-the-state-and-its-system) and [Recognize the relevant Okta account states](../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states).

## 2. Compare lifecycle actions

Suspension blocks Okta access while retaining app assignments and group memberships. Deactivation removes Okta app assignments and invokes applicable configured deprovisioning, but retains group memberships. Deletion removes the Okta user and is irreversible; it is separate from deactivation.

Suspension alone does not send the documented outbound SCIM deprovisioning event. A target operation and target state must be checked. Deleting an Okta record is not evidence that an application account or session was disabled. Revisit **Recognize the relevant Okta account states**.

**Revisit:** [Recognize the relevant Okta account states](../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states)

## 3. Reason about a joiner

Establish the approved effective start and access requirement, the correct source record, reliable ownership and matching for any existing account, and the intended Okta identity. Then verify the applicable activation, authentication readiness, assignments, target accounts, actual entry, and required permissions.

A similar name is insufficient for a link. A future HR record is insufficient for immediate access. Avoid creating a duplicate to bypass the missing ownership evidence. Revisit **Joiner: connect the initial decisions** and Day 11's matching policy.

**Revisit:** [Joiner: connect the initial decisions](../lessons/day-12-joiners-movers-leavers.md#joiner-connect-the-initial-decisions)

## 4. Investigate Maya's old access

M1 to M3 demonstrate the intended department and Sales-group changes. M4 shows the remaining individual Salesforce assignment whose approval has ended; M6 confirms actual retained entry. This is the demonstrated access discrepancy, not a broken Sales rule.

Address that remaining assignment under the approved removal requirement, check other paths as appropriate, and verify the relevant Salesforce account-management and access outcomes. Do not assume Salesforce uses SCIM. Preserve Maya's employee identity and continuing Projects access, whose department update is confirmed. Being in Finance does not automatically grant management permissions.

M5 confirms FIN and an active Projects account. It does not show a Projects sign-in or the required application permissions. Continuing access is the approved requirement; actual entry still needs separate evidence.

Revisit [Follow Maya's evidence](../lessons/day-12-joiners-movers-leavers.md#follow-mayas-evidence). No supplied follow-up proves the Salesforce correction is complete. A complete Maya handoff therefore keeps two goals visible: end the obsolete Salesforce access and preserve her approved Projects access. Do not turn an unresolved Projects entry check into a reason to deactivate its correctly retained account.

## 5. Separate Jordan's completed and failed outcomes

Okta deactivation, absent Okta app assignments, and blocked fresh Okta sign-in are confirmed. The checked AD account is disabled. Projects returned 503 to the active-false operation, and the later read still shows active true. The required Projects state has not been achieved in this packet.

503 does not identify the root cause of service unavailability. Investigate the target and connector evidence, coordinate approved access removal, and verify the intended resource after a correction or supported retry. Reactivating Jordan would conflict with the effective departure requirement and would not establish a repair of the unavailable service.

Revisit [Leaver: verify each outcome](../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome).

## 6. Interpret the lingering session

The checked Expense session still supports authenticated access after Okta deactivation. Because a fresh protected response is supplied, this is more than a previously rendered page. The evidence does not explain the session's persistence or establish the state of every other session.

Ask the Expense owner to correlate the session and account, identify the supported termination action and required behavior, and verify that a subsequent protected request no longer succeeds through the checked session. Include other sessions or access paths if the removal requirement covers them. Do not claim that another Okta event alone supplies this evidence.

Revisit [Leaver: verify each outcome](../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome). Recognizing the separate unresolved session is sufficient; Day 13 covers the mechanism.

## 7. Write the handoff

An acceptable Maya handoff:

> Her Finance profile and Sales-group removal are confirmed. Projects has FIN and an active account; actual Projects entry is not supplied. The individual Salesforce assignment remains after its exception approval expired, and Salesforce accepted a new session. The IAM and application owners must remove the remaining Salesforce access, preserve the approved Projects access, and verify the relevant account, sign-in, permission, and session outcomes.

An acceptable Jordan handoff:

> His departure is effective, Okta is deactivated, and the checked AD account is disabled. Projects remains active after a failed deactivation request, and Expense accepts the checked existing session. Resolve those application outcomes with their owners and verify target state and protected-access results before reporting the departure requirement complete.

A successful Projects deactivation resolves only that account-state issue. Expense's observed session and any other required access paths need separate evidence. Keep separate closure findings for Okta, AD, Projects, and Expense, with each unresolved result assigned to its responsible owner. “Okta deactivated” is a completed finding, not a substitute for those remaining outcomes. Revisit **Decide what evidence closes the ticket**.

**Revisit:** [Decide what evidence closes the ticket](../lessons/day-12-joiners-movers-leavers.md#decide-what-evidence-closes-the-ticket)

## Optional changed condition

Suppose Maya's individual Salesforce assignment has a newly supplied, valid transition approval that explicitly permits continued access at the checked point. Her Finance profile and removed Sales-group membership are unchanged. How does your conclusion change?

<details>
<summary>Check the reasoning</summary>

The technical assignment path remains the same, but continued access is no longer shown to violate the revised approved requirement. Verify the exception's owner, scope, and end condition, and arrange its required later removal. Do not change correct employee data or the Sales rule to represent the exception. This is a changed hypothetical condition, not a retroactive approval for M-12.

</details>

[Return to Day 12](../lessons/day-12-joiners-movers-leavers.md) · [Course home](../index.md)

[Revise Day 12](../revision/day-12.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-12.md) · [Day 12 recap](../revision/day-12.md) · [Reasoning exercises](../exercises/day-12.md)
