---
title: "Day 5: Groups and assignments"
parent: Revision Guide
nav_order: 5
---

# Day 5 revision: Groups and assignments

A group called “Sales Employees” sounds clear, but its name does not enforce anything. Look at how people enter the group and what access that membership actually gives them.

## The concepts to keep with you

**Group.** A group collects users so they can be managed together. Membership may come from a rule, a manual decision, or an external source. Find the membership owner before trying to change it.

**Group rule.** A rule evaluates conditions to determine membership. Northbridge's normal Sales rule checks the Okta profile for both `department = Sales` and `workerType = Employee`. The word **AND** matters: both must be true. OR needs at least one true condition, so it would also admit people who meet only one. Someone meeting both qualifies under either condition.

**Rule state and user state.** An active rule is enabled to operate. That is different from a user having an Active status. Neither observation replaces checking the user's actual membership and any applicable exclusion.

**Application assignment.** Assignment establishes a user's relationship to an application in Okta. It may come through a group or directly. This **assignment source** identifies the access path, not the system that owns the user's profile. It remains separate from creating a target account, completing sign-in, and receiving permissions inside the target.

**Multiple assignment paths.** A user can retain an assignment through another group or a direct assignment after leaving one group. To understand removal, inspect every remaining path and its approval.

**Group Push.** Group Push manages supported downstream group objects and memberships. It serves a different purpose from application assignment. Use separate groups for assignment and Group Push as taught in the course; do not assume the Salesforce example has Group Push configured.

## Walk through the people

Devi is a Sales employee, so she meets the normal rule. Priya is a Sales contractor, so she fails the employee condition. Daniel is a Finance employee, so he fails the Sales condition. An OR rule would include all three for different reasons. A hypothetical Finance contractor meets neither condition and would be excluded by both versions. These are predictions about the condition; actual membership also needs rule-state, processing, and exclusion evidence.

If Priya nevertheless has a direct application assignment, that does not prove the rule included her. It tells you to inspect a separate access path and its approval. If approval evidence is missing, authorization remains unresolved; the assignment alone does not settle it. Do not change her worker type just to make the normal rule include her.

In the later department-move variation, Devi moves to Finance. Losing Sales-group membership does not by itself prove she lost Salesforce assignment. A direct assignment may remain. Follow membership to assignment and then to the target outcome rather than stopping at the first change.

## When a request reaches you

When membership exists but assignment is absent, inspect the actual group-to-application relationship. A direct exception can hide that defect and later survive removal from the normal group.

## Check your understanding

From memory, follow Devi from her current Okta profile through the rule, actual membership, and Salesforce assignment. Name the separate target evidence still needed. Then explain how Priya could have an individual assignment while the employee-only rule remains correct.

- Which profile supplies the values for the normal Sales rule?
- Why might Salesforce assignment remain after Sales-group removal?
- How is Group Push different from using a group to assign an application?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. The rule reads the Okta user profile. A different value in Workday or an app user profile is not the rule's current input.

2. Another group or a direct assignment may still provide access. Check all paths and their approval before claiming assignment removal.

3. Group Push manages supported groups and memberships in the target. Group-based assignment establishes application assignment in Okta. These responsibilities use separate groups in the taught design.

</details>

[Full lesson](../lessons/day-05-groups-and-assignments.md) · [Exercises](../exercises/day-05.md) · [Lesson exercise answers](../self-checks/day-05.md) · [All recaps](index.md)

[Previous recap: Day 4](day-04.md) · [Next recap: Day 6](day-06.md)

[Practice questions with explanations](../question-bank/day-05.md)
