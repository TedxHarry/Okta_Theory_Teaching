---
title: "Day 14: self-check answers"
parent: Self-Checks
nav_order: 14
---

# Day 14: Self-check answers

Attempt the [exercises](../exercises/day-14.md) first. Distinguish a proposed design from a verified deployment.

## 1. Clarify before designing

Establish the application and instance, eligible population and effective point, permitted business actions, data owners, meaning and approval of exceptions, existing-account handling, and removal requirements. The business and application owners decide eligibility, business permissions, exception authority, and intended access outcomes. IAM translates approved decisions into supported technical behavior.

Revisit [Turn the request into observable outcomes](../lessons/day-14-requirements-and-responsibilities.md#turn-the-request-into-observable-outcomes). A reasonable alternative question is acceptable if it resolves a material ambiguity.

## 2. Explain the approved model

Maya qualifies for the normal Finance path but does not gain approval permission merely from department. Daniel uses that path and has separately approved application authority. Priya does not meet the employee condition; an exception requires its own supplied approval and maintenance. Jordan's departure requires access removal regardless of retained attributes or memberships. R-14 does not supply Priya's exception approval. The separate lost-phone scenario supplies approval for that scenario; do not carry it backward as proof that the proposed R-14 exception was decided.

The group rule answers which records meet the normal population condition. It does not, by itself, establish what the user can do inside Expense. Effective lifecycle processing, exceptions, app assignment, target readiness, business roles, and sessions require their own controls and evidence.

**Revisit:** [Use the owner's answers](../lessons/day-14-requirements-and-responsibilities.md#use-the-owners-answers)

## 3. Inspect surviving paths

The old individual assignment survives a different path's removal. Establish whether it has a current approved exception, inspect other paths, and apply the actual removal requirement. Do not falsify the employee's governed department to make the assignment look consistent.

Verify the assignment result and the application's supported account, role, and session outcomes. R-14 assigns target-account handling to the Expense owner and supplies no provisioning automation. Follow that agreed process; Projects' SCIM behavior cannot supply Expense's missing operation or result.

**Revisit:** [Translate the requirement without changing its meaning](../lessons/day-14-requirements-and-responsibilities.md#translate-the-requirement-without-changing-its-meaning)

## 4. Use the permission reference

No. Managing Expense alone does not establish permission to manage a policy shared with Projects; the supplied footnote requires authority over all apps assigned to it. Group Admin also does not supply group-rule management permission in the stated standard-role matrix.

Refer the operations to an administrator with the required existing authority, or have the administrative owner evaluate appropriate delegation. The matrix describes product permissions and restrictions, not business approval, the caller's actual assigned roles, or the tenant's complete configuration. Check those separately. It also does not justify granting Super Admin as a default workaround.

Revisit [Separate approval from technical authority](../lessons/day-14-requirements-and-responsibilities.md#separate-approval-from-technical-authority). Reading the supplied excerpt is sufficient; no tenant access is required.

## 5. Define acceptance and change recovery

A positive case is a current eligible Finance employee gaining intended submission access. Negative cases include a contractor without approval and an ordinary Finance user attempting an unapproved approval action. Change cases include an employee leaving Finance, an exception ending, and a departure requiring account and session removal.

Test the two conditions separately: a Finance contractor without an exception meets only Finance, and a Sales employee with no other approved path meets only Employee. Neither should receive the normal Finance-employee assignment through the AND rule. OR would include both. An eligible Finance employee meets both conditions and would qualify under either version, so that positive test alone cannot distinguish the mistake.

Restoring AND repairs the population condition but does not prove unintended effects were reversed. Identify affected users and remaining assignments, target accounts, roles, and sessions. Remove only the access that violates the approved requirement, preserving legitimate records and access, then verify the results.

Revisit [Plan recovery from an incorrect change](../lessons/day-14-requirements-and-responsibilities.md#plan-recovery-from-an-incorrect-change).

## 6. Reason about account recovery

Access approval says Priya may receive the business capability. It does not establish that the person asking for a reset is Priya. Establish the correct account and requester through the approved identity-verification process, identify the unavailable enrollment, and confirm the administrator's authorized scope. Follow the supported recovery route and verify replacement enrollment and a permitted sign-in afterward.

A reset cancels selected enrollment; it is not itself recovered access. Extra permissions neither establish identity nor repair the lost authenticator. If compromise is suspected, involve the incident process and investigate relevant sessions. Restoring enrollment and resolving possible exposure are separate outcomes.

**Revisit:** [Account recovery is a different problem](../lessons/day-14-requirements-and-responsibilities.md#account-recovery-is-a-different-problem)

## 7. Compare Microsoft 365

The documented Office 365 connector lists SWA and WS-Federation; Expense's OIDC configuration is not its WS-Federation configuration. Projects' SCIM contract also does not establish the Microsoft connector's provisioning behavior.

Identify Microsoft-side tenant and identity responsibilities, configured sign-in, supported account-management/deprovisioning, licensing, and service permissions. A successful sign-in alone does not establish the required license or access to a service. The lesson's references support the architectural distinctions, not a completed deployment or a particular tenant's configuration.

Revisit [Recognize Microsoft 365's separate responsibilities](../lessons/day-14-requirements-and-responsibilities.md#recognize-microsoft-365s-separate-responsibilities).

## Optional changed condition

The Expense owner later confirms a supported automated provisioning connection. Does the original access requirement need to become “all Finance users are approvers”?

<details markdown="1">
<summary>Check the reasoning</summary>

No. A new implementation capability does not change the approved permission model. Evaluate its mapping, matching, operations, and removal behavior against the same requirements, and replace the manual account-management step only when the new design and its outcomes are established. Approval permission remains a separate business decision.

</details>

## Optional onboarding framework: model reasoning

The successful employee case does not establish the other cases. Under this variant, an ordinary Finance employee should lack the Sales entitlement; inspect assignments and any surviving target account or session. Priya needs a separately approved exception with limited permissions and an end condition; inspect its approval and actual assignment without inventing a Workday association. Maya's Finance move ends ordinary Projects access in this variant; inspect all surviving group and direct assignments, the target account and relevant sessions. This differs explicitly from Day 12's requirement to retain her Projects account.

The supplied facts do not establish any of those target outcomes. A rejected integration credential concerns the service connection; Maya's password reset does not correct that evidence. Identify the caller, endpoint, exact rejection and credential owner. Different evidence may support different hypotheses, but an answer must preserve the approved eligibility and distinguish unknown outcomes from confirmed failures.

[Return to Day 14](../lessons/day-14-requirements-and-responsibilities.md) · [Course home](../index.md)

[Revise Day 14](../revision/day-14.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-14.md) · [Day 14 recap](../revision/day-14.md) · [Reasoning exercises](../exercises/day-14.md)
