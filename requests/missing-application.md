---
title: The application is missing
parent: Working through requests
nav_order: 2
---

# The application is missing

Read after Day 5.

Lena works in Purchasing at Cedar Lane. She says, “I can sign in, but the supplier application is missing.” Her manager asks for a direct assignment so she can get started.

## What you know

- The approved normal population is Purchasing employees. Lena is an employee with approved Purchasing access.
- The HR and Okta records agree on Purchasing and Employee for her verified identity.
- The rule requires both values. It has processed her profile, and she is a member of `Purchasing-Employees`.
- Her intended production Supplier Portal assignment is absent. Other assignment paths have been checked.
- The portal's target account and sign-in have not been inspected.

Before reading further, decide what you would inspect next. Does the evidence support changing the group rule, adding a direct assignment, or checking another relationship?

<details markdown="1">
<summary>Compare your first checks</summary>

The supplied evidence supports the normal membership path through the group. The next useful check is whether that actual group assigns the intended application instance. Confirm the group's identity and the application relationship, not just similar labels.

A direct assignment might change the visible symptom, but it would introduce an exception before explaining why the normal path stops. The manager's request still needs to be interpreted against the approved access process and the possible effect on other group members.

No target-account conclusion follows yet. Assignment absence does not prove a target account is absent, disabled, or incorrectly named.

</details>

## The next observation

The production integration is assigned to an old, empty group called `Purchasing-Employees-Legacy`. The approved access design names the current `Purchasing-Employees` group. The current group's membership review finds 18 people, all approved for this application. There is no approved reason to retain the legacy assignment.

Explain the correction, who else it affects, and the evidence you would need before closing Lena's request.

<details markdown="1">
<summary>Work through the correction</summary>

The demonstrated discrepancy is the group-to-application relationship. The authorized change should restore the approved relationship to the current group and address the obsolete one through the change process. The supplied population review matters because this change can affect all 18 members, not just Lena.

Check the resulting assignment for the intended population and confirm that unapproved users have not gained a new path. For Lena, verify the target account, application acceptance, and required capability through the relevant owners. Do not create a second target account merely because the original request mentioned a missing tile.

If an urgent direct exception had already been granted, review its removal once the normal path is verified. Otherwise it may survive a future group change.

</details>

## Evidence after the change

The follow-up confirms the corrected group assignment, Lena's link to her existing target account, accepted entry into the production portal, and her ability to view the approved supplier records. The reviewed nonmember has no assignment through the changed group. No direct exception was added.

A useful closure note reads:

> Lena's approved Purchasing access was missing because the production portal was assigned to the legacy group. The approved current-group relationship is restored. Her existing target account, production entry, and supplier-record access are verified. The reviewed excluded user remains outside this assignment path.

The excluded-user finding covers the reviewed nonmember and that changed assignment path. It does not establish the state of every ineligible person or every other access path. Keep any broader verification tied to its required scope.

Now change one fact: suppose a contractor appears among the 18 group members. What should happen before the group assignment is changed?

<details markdown="1">
<summary>Check the changed situation</summary>

The population review no longer supports assigning the entire group under the stated employee-only requirement. Investigate the contractor's membership mechanism and approval. Resolve the population discrepancy before applying the shared assignment; do not silently broaden the business requirement to make the change convenient.

</details>

[Previous: Reading records and settings](reading-records-and-settings.md) · [Working through requests](index.md) · [Day 5](../lessons/day-05-groups-and-assignments.md)
