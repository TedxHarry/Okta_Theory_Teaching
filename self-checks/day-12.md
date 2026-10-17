---
title: "Day 12: self-check answers"
parent: Self-Checks
nav_order: 12
---

# Day 12: Self-check answers

Attempt the [exercises](../exercises/day-12.md) first. Separate the business requirement from the observed result in each system.

## 1. Interpret the state

Start with "Whose status did we read?" PROVISIONED describes the Okta user, where it corresponds to Pending user action. It supplies no Projects create response or target-account check.

The other observations also belong to different records. HR departure states the employment change. DEPROVISIONED describes the deactivated Okta account. Projects active false describes that target account's administrative state under its contract. Naming the person, system and record keeps one result from being mistaken for all three.

Revisit [Name the state and its system](../lessons/day-12-joiners-movers-leavers.md#name-the-state-and-its-system) and [Recognize the relevant Okta account states](../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states).

## 2. Compare lifecycle actions

Suspension blocks Okta access while retaining app assignments and group memberships. Deactivation removes Okta app assignments and invokes applicable configured deprovisioning, but retains group memberships. Deletion removes the Okta user and is irreversible; it is separate from deactivation.

Suspension alone does not send the documented outbound SCIM deprovisioning event. A target operation and target state must be checked. Deleting the Okta record would not show that Projects accepted its own account change or that another application ended its session. Verify the required target outcomes through their supported processes.

**Revisit:** [Recognize the relevant Okta account states](../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states)

## 3. Reason about a joiner

Establish the approved effective start and access requirement, the correct source record, reliable ownership and matching for any existing account, and the intended Okta identity. Then verify the applicable activation, authentication readiness, assignments, target accounts, actual entry, and required permissions.

A similar name is insufficient for a link. A future HR record is insufficient for immediate access. Establish who owns the discovered account and whether it should link to the intended identity before choosing another create. The employment approval supplies the access goal; the similar name cannot supply the missing account relationship.

**Revisit:** [Joiner: connect the initial decisions](../lessons/day-12-joiners-movers-leavers.md#joiner-connect-the-initial-decisions)

## 4. Investigate Devi's old access

M1 to M3 demonstrate the intended department and Sales-group changes. M4 shows the remaining individual Salesforce assignment whose approval has ended; M6 confirms actual retained entry. The group route ended as intended, but the separate individual assignment survived. That is the demonstrated access discrepancy; the supplied evidence gives no reason to repair the Sales rule.

Address that remaining assignment under the approved removal requirement, check other paths as appropriate, and verify the relevant Salesforce account-management and access outcomes. Do not assume Salesforce uses SCIM. Preserve Devi's employee identity and continuing Projects access, whose department update is confirmed. Being in Finance does not automatically grant management permissions.

M5 confirms FIN and an active Projects account. It does not show a Projects sign-in or the required application permissions. Continuing access is the approved requirement; actual entry still needs separate evidence.

Revisit [Follow Devi's evidence](../lessons/day-12-joiners-movers-leavers.md#follow-devis-evidence). No supplied follow-up proves the Salesforce correction is complete. A complete Devi handoff therefore keeps two goals visible: end the obsolete Salesforce access and preserve her approved Projects access. Do not turn an unresolved Projects entry check into a reason to deactivate its correctly retained account.

## 5. Separate Jordan's completed and failed outcomes

Okta deactivation, absent Okta app assignments, and blocked fresh Okta sign-in are confirmed. The checked AD account is disabled. Projects returned 503 to the active-false operation, and the later read still shows active true. The required Projects state has not been achieved in this packet.

503 does not identify the root cause of service unavailability. Investigate the target and connector evidence, coordinate approved access removal, and verify the intended resource after a correction or supported retry. Reactivating Jordan would conflict with the effective departure requirement and would not establish a repair of the unavailable service.

Revisit [Leaver: verify each outcome](../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome).

## 6. Interpret the lingering session

The checked Expense session still supports authenticated access after Okta deactivation. Because a fresh protected response is supplied, this is more than a previously rendered page. You can report what Expense still permits without knowing why its session persists. The packet supplies no explanation of that mechanism and no result for every other session.

Ask the Expense owner to correlate the session and account, identify the supported termination action and required behavior, and verify that a subsequent protected request no longer succeeds through the checked session. Include other sessions or access paths if the removal requirement covers them. Do not claim that another Okta event alone supplies this evidence.

Revisit [Leaver: verify each outcome](../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome). Recognizing the separate unresolved session is sufficient; Day 13 covers the mechanism.

## 7. Write the handoff

An acceptable Devi handoff:

> Her Finance profile and Sales-group removal are confirmed. Projects has FIN and an active account; actual Projects entry is not supplied. The individual Salesforce assignment remains after its exception approval expired, and Salesforce accepted a new session. The IAM and application owners must remove the remaining Salesforce access, preserve the approved Projects access, and verify the relevant account, sign-in, permission, and session outcomes.

An acceptable Jordan handoff:

> His departure is effective, Okta is deactivated, and the checked AD account is disabled. Projects remains active after a failed deactivation request, and Expense accepts the checked existing session. Resolve those application outcomes with their owners and verify target state and protected-access results before reporting the departure requirement complete.

A successful Projects deactivation resolves only that account-state issue. Expense's observed session and any other required access paths need separate evidence. Keep separate closure findings for Okta, AD, Projects, and Expense, with each unresolved result assigned to its responsible owner. “Okta deactivated” accurately reports one completed finding. The remaining owners still need to verify the specific application outcomes assigned to them.

**Revisit:** [Decide what evidence closes the ticket](../lessons/day-12-joiners-movers-leavers.md#decide-what-evidence-closes-the-ticket)

## Optional changed condition

Suppose Devi's individual Salesforce assignment has a newly supplied, valid transition approval that explicitly permits continued access at the checked point. Her Finance profile and removed Sales-group membership are unchanged. How does your conclusion change?

<details markdown="1">
<summary>Check the reasoning</summary>

The technical assignment path remains the same, but continued access is no longer shown to violate the revised approved requirement. Verify the exception's owner, scope, and end condition, and arrange its required later removal. Do not change correct employee data or the Sales rule to represent the exception. This is a changed hypothetical condition, not a retroactive approval for M-12.

</details>

[Return to Day 12](../lessons/day-12-joiners-movers-leavers.md) · [Course home](../index.md)

[Revise Day 12](../revision/day-12.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-12.md) · [Day 12 recap](../revision/day-12.md) · [Reasoning exercises](../exercises/day-12.md)
