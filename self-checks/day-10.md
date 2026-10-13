---
title: "Day 10: self-check answers"
parent: Self-Checks
nav_order: 10
---

# Day 10: Self-check answers

Attempt the [exercises](../exercises/day-10.md) before reading these explanations.

## 1. Locate the missing boundary

The assignment and prepared app-profile value are established. Check the relevant provisioning capability and configuration, whether an operation was generated and sent, its correlated result, and the correct target record. Neither assignment nor SAL in Okta proves a Projects account exists.

Revisit **Follow the account-management path**.

## 2. Read the create result

Projects assigned prj-1042. The response reports creation and the follow-up confirms the stated target values. Neither establishes actual application entry or all project permissions. Keep the target resource id distinct from the Okta id and employee number.

Revisit **Read a create operation**.

## 3. Investigate the conflict

The target reports a conflicting unique value. Ownership and the reason for the lookup/create discrepancy remain unknown. Deleting a possibly valid account is not justified.

Compare the exact lookup filter, instance, result, and operation sequence. Request the conflicting record's identifiers and ownership evidence. A creation by another process between the operations would support a concurrency explanation; a lookup against a different instance would support a destination discrepancy. These are hypotheses, not supplied facts. Existing-account handling depends on verified ownership and approval.

Revisit **A conflict requires an ownership decision**.

## 4. Correct the representation

The current outbound mapping sends a full name where the contract requires a code. Preserve the correct Finance source value; correct the conversion to FIN. Verify the app profile, actual request, accepted response, and intended target record. Assess other users sharing the mapping. The supplied rejected operation demonstrates the defect; a successful correction still needs its own new, correlated operation and target evidence. The status code alone would not identify this field, but the combined packet does.

Revisit **A rejected value points to a different correction**.

## 5. Separate an update from a new account

The operation updates an existing linked resource. It does not create a new identity. PUT is a replacement operation under the supported schema, so an incomplete body can affect omitted values; use the actual connector contract and complete expected representation when reasoning about the update.

The separate successful PUT verifies the checked update to prj-1020. It is not supplied as a retest of Question 4's C-3 rejection, so do not use it to close that investigation.

Revisit **Updating is not creating again**. This course asks you to interpret the operation, not send a replacement request.

## 6. Explain deactivation

204 reports success without a body. The separate read establishes the retained inactive account. Projects' stated contract disables new access, but there is no evidence about termination of existing sessions. Flag that for a separate check without inventing the mechanism.

A removed group membership does not establish all assignment paths ended, that deactivation was generated, or that it succeeded. Revisit **Deactivation is an account-state change** and Day 5's assignment paths.

## 7. Distinguish the connections

Maya's authentication and the connector's service authorization belong to different exchanges. Inspect the receiving Projects instance, configured authorization mechanism, credential validity, and required permission, using the actual rejection detail. Do not infer which one failed from “authorization rejection” alone.

The Expense ID token is for Expense to validate authentication information, not for authorizing a Projects SCIM operation. Revisit **Follow the account-management path** and Day 9's token purposes.

## Optional comparison

Suppose C-3 instead has FIN in both the app profile and sent request, but Projects still reports an invalid department. Does the supplied mapping defect remain demonstrated?

<details>
<summary>Check your reasoning</summary>

No. The current evidence no longer shows the full-name conversion defect. Compare the exact destination, deployed contract, request field placement, and correlated error details. A correct prepared value does not rule out all request or target problems, but it changes the next investigation.

</details>

[Integration checkpoint](../assessments/integration.md) · [Return to Day 10](../lessons/day-10-scim.md) · [Course home](../index.md)

[Revise Day 10](../revision/day-10.md): revisit the concepts, example, and questions without rereading the full lesson.
