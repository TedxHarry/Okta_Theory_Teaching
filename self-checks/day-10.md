---
title: "Day 10: self-check answers"
parent: Self-Checks
nav_order: 10
---

# Day 10: Self-check answers

Attempt the [exercises](../exercises/day-10.md) before reading these explanations.

## 1. Locate the missing boundary

The assignment and prepared app-profile value are established. Check the relevant provisioning capability and configuration, whether an operation was generated and sent, its correlated result, and the correct target record. Neither assignment nor SAL in Okta proves a Projects account exists.

Revisit [Follow the account-management path](../lessons/day-10-scim.md#follow-the-account-management-path).

## 2. Read the create result

Projects assigned prj-1042. That identifier lets Alex connect the response to the specific record read afterward. The response reports creation; the follow-up confirms Devi's user name, SAL and enabled state in that record. Neither establishes actual application entry or all project permissions. Keep the target resource id distinct from the Okta id and employee number.

Revisit [Read a create operation](../lessons/day-10-scim.md#read-a-create-operation).

## 3. Investigate the conflict

The target reports a conflicting unique value. Ownership and the reason for the lookup/create discrepancy remain unknown. Deleting a possibly valid account is not justified.

Compare the exact lookup filter, instance, result, and operation sequence. Request the conflicting record's identifiers and ownership evidence. A creation by another process between the operations would support a concurrency explanation; a lookup against a different instance would support a destination discrepancy. These are hypotheses, not supplied facts. Existing-account handling depends on verified ownership and approval.

Revisit [A conflict requires an ownership decision](../lessons/day-10-scim.md#a-conflict-requires-an-ownership-decision).

## 4. Correct the representation

Daniel's department is still Finance. Projects needs that same business fact represented as FIN. The current mapping passes the full name instead, and the detailed rejection identifies why Projects cannot accept it.

Correct the conversion while preserving the approved source department. Then follow FIN through the stored app profile, sent enterprise department, new response and intended target record. Assess other users sharing the mapping. The supplied rejected operation demonstrates the defect; a successful correction still needs its own new, correlated operation and target evidence. The status code alone would not identify this field, but the combined packet does.

Revisit [A rejected value points to a different correction](../lessons/day-10-scim.md#a-rejected-value-points-to-a-different-correction).

## 5. Separate an update from a new account

The operation updates an existing linked resource. It does not create a new identity. PUT is a replacement operation under the supported schema, so an incomplete body can affect omitted values; use the actual connector contract and complete expected representation when reasoning about the update.

The separate successful PUT verifies the checked update to prj-1020. It is not supplied as a retest of Question 4's C-3 rejection, so do not use it to close that investigation.

Revisit [Updating is not creating again](../lessons/day-10-scim.md#updating-is-not-creating-again). This course asks you to interpret the operation, not send a replacement request.

## 6. Explain deactivation

204 is an answer reporting success without a body. A timeout would leave the operation's result unknown; this response does not. The separate read confirms that the intended account remains present with active false. Projects' stated contract disables new access, but there is no evidence about termination of existing sessions. Flag that for a separate check without inventing the mechanism.

Removing one group membership answers only the question about that membership. Another assignment path may remain. Check the remaining paths, generated operation, response and target state before reporting account deactivation.

**Revisit:** [Deactivation is an account-state change](../lessons/day-10-scim.md#deactivation-is-an-account-state-change)

## 7. Distinguish the connections

Devi's authentication and the connector's service authorization belong to different exchanges. Inspect the receiving Projects instance, configured authorization mechanism, credential validity, and required permission, using the actual rejection detail. Do not infer which one failed from “authorization rejection” alone.

The Expense ID token answers a sign-in question for Expense. It does not supply the connector's configured authority to manage Projects accounts. Devi's successful MFA can remain a valid result while the separate service request is rejected.

**Revisit:** [Follow the account-management path](../lessons/day-10-scim.md#follow-the-account-management-path)

## Optional comparison

Suppose C-3 instead has FIN in both the app profile and sent request, but Projects still reports an invalid department. Does the supplied mapping defect remain demonstrated?

<details markdown="1">
<summary>Check your reasoning</summary>

No. The current evidence no longer shows the full-name conversion defect. Compare the exact destination, deployed contract, request field placement, and correlated error details. A correct prepared value does not rule out all request or target problems, but it changes the next investigation.

</details>

[Integration checkpoint](../assessments/integration.md) · [Return to Day 10](../lessons/day-10-scim.md) · [Course home](../index.md)

[Revise Day 10](../revision/day-10.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-10.md) · [Day 10 recap](../revision/day-10.md) · [Reasoning exercises](../exercises/day-10.md)
