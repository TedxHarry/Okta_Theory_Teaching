---
title: "Day 5: self-check answers"
parent: Self-Checks
nav_order: 5
---

# Day 5: Self-check answers

Try the [exercises](../exercises/day-05.md) first. Equivalent explanations are welcome when they preserve the evidence boundaries.

## 1. Predict the population

Ask two questions for each person: 'Sales?' and 'Employee?' Maya answers yes to both. Priya answers yes only to Sales, and Daniel answers yes only to Employee. AND requires both answers, so only Maya qualifies.

Changing the condition to OR makes one yes enough. All three would qualify, including a contractor and a Finance employee. The logic change would therefore change the approved access population; it would not merely fix one person's assignment.

The additional Finance/Contractor user meets neither condition, so neither AND nor OR includes that user. Together, these examples check both conditions true, each condition true on its own, and neither condition true. Predicting the result still does not replace observing the actual membership.

An unknown classification does not establish employment. Request the approved classification and its source/mapping evidence rather than granting access through a guessed default.

Revisit [Predict who matches](../lessons/day-05-groups-and-assignments.md#predict-who-matches) if you evaluated only department.

## 2. A group without an application connection

The group-to-Salesforce assignment is missing. Membership alone does not define which applications the group supplies. Renaming changes the label, not that relationship.

A justified proposal is to establish the approved group assignment after checking its affected members and required application settings. Verify Maya's resulting assignment separately from target account creation or sign-in.

Revisit [Manage a shared need through a group](../lessons/day-05-groups-and-assignments.md#manage-a-shared-need-through-a-group) if you treated the group name as configuration.

## 3. Right source, wrong rule input

The rule reads Finance/Employee from Okta, so its Sales AND Employee test returns false. That calculation is consistent with the input it received. The first demonstrated discrepancy is earlier: Maya's approved Workday department is Sales, while her Okta department says Finance.

Inspect Maya's source association, incoming department mapping, and import/update results. A mapping error or an unapplied update is possible; the packet does not select between them. Broadening the rule to include Finance would change who receives access and conceal the data problem.

Revisit [Read the current profile, not just the source record](../lessons/day-05-groups-and-assignments.md#read-the-current-profile-not-just-the-source-record), then Day 3's mapping discussion.

## 4. A match without membership

Packet A demonstrates a rule that has not been activated. Review the approved logic, target group, and affected population before proposing activation. Then verify processing, membership, and assignment.

Packet B supplies a different explanation: an explicit user exclusion. Investigate why it exists and whether it remains approved before proposing removal. A previous manual removal can create such an exclusion, but that history is not established by this packet.

Neither case justifies changing correct HR data. The difference is between an unactivated membership mechanism and an explicit exception for Maya, not between two different department values.

**Revisit:** [A matching condition is not observed membership](../lessons/day-05-groups-and-assignments.md#a-matching-condition-is-not-observed-membership)

## 5. Contractor assignment

The employee rule did not include Priya; her Salesforce assignment comes through the individual path instead. Those two facts can coexist without a rule failure.

Now ask whether that separate path has the required approval. The review has not supplied it, so we cannot call the exception approved or declare that no approval exists. Obtain the relevant decision before making that judgment.

Ask for the approved need, accountable owner, and review/removal condition. Keep Priya's true classification. Changing it to Employee would corrupt data to fit an access decision rather than document a legitimate exception.

Revisit [An individual assignment is a separate path](../lessons/day-05-groups-and-assignments.md#an-individual-assignment-is-a-separate-path) if you assumed nonmembership means no possible assignment.

## 6. One group path is gone

The checked second group still provides a Salesforce assignment. Removing the Sales-group path does not remove that other path.

Compare the second group's purpose and Maya's membership with the approved post-move access requirement. Then check target account state, relevant account-management results, sign-in, and application permissions as needed. The packet does not establish those outcomes.

Revisit [Removing one path does not settle every path](../lessons/day-05-groups-and-assignments.md#removing-one-path-does-not-settle-every-path) if you inferred complete removal from one membership change.

## 7. Assignment, provisioning, and Group Push

The packet proves group membership and an Okta-side Salesforce assignment. It does not prove a usable target account, successful sign-in, or the required application permissions. Obtain the relevant target and operation evidence.

A matching target group is another claim. Group Push, where supported and configured, manages downstream groups and memberships. It is separate from assigning an application to an Okta group. Okta requires separate groups for assignment and Group Push; the packet does not establish that Group Push is configured for Salesforce.

Revisit [Group membership has an owner too](../lessons/day-05-groups-and-assignments.md#group-membership-has-an-owner-too) and Day 1's five distinct access statements.

## Before-moving-on guide

If you can predict the population but cannot explain where the input came from, revisit Day 4. If you can explain membership but assume the application account exists, revisit Day 1. If you rely on a successful unrelated event, revisit Day 2. If the wrong value appears between systems, revisit Day 3.

[Return to Day 5](../lessons/day-05-groups-and-assignments.md) · [Foundation checkpoint](../assessments/foundation.md)

[Revise Day 5](../revision/day-05.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-05.md) · [Day 5 recap](../revision/day-05.md) · [Reasoning exercises](../exercises/day-05.md)
