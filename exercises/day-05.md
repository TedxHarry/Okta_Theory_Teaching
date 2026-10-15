---
title: "Day 5: exercises"
parent: Exercises
nav_order: 5
---

# Day 5: Reasoning exercises

Use the [lesson](../lessons/day-05-groups-and-assignments.md) when needed. State assumptions separately from observations.

## 1. Predict the population

The active rule requires department Sales AND workerType Employee. Here, workerType is the company's workforce-classification field. Maya is Sales/Employee, Priya Sales/Contractor, and Daniel Finance/Employee. All three accounts are Active, the rule has processed their profiles, and none is individually excluded.

Who qualifies? How would replacing AND with OR change these results? Why should an unknown worker type not be treated as Employee?

Now consider an additional hypothetical Finance/Contractor user with the same Active, processed, nonexcluded conditions. Does either rule include this user? Explain which conditions are true or false rather than relying on a group name.

## 2. A group without an application connection

Maya belongs to NB-Sales-Employees. Salesforce is not assigned to that group. There is no other Salesforce assignment path for her.

What is missing from the intended group-based access flow? Does renaming the group to Salesforce-Users create the missing relationship?

## 3. Right source, wrong rule input

Workday and the approved requirement say Maya is Sales/Employee. Her Okta profile says Finance/Employee. The active rule correctly implements Sales AND Employee and does not include her.

Identify the first observed discrepancy and the next evidence to request. Should the rule be broadened to include Finance as the correction?

## 4. A match without membership

Maya has the right attributes and an Active account, but no group membership. Packet A shows a rule that has never been activated. In separate Packet B, the rule is active and Maya appears on its excluded-users list.

Explain how these findings lead to different investigations. Why should Alex review the population or exception reason before changing either setting?

## 5. Contractor assignment

Priya does not qualify for NB-Sales-Employees. Nevertheless, Salesforce is assigned to her individually. No exception approval is included.

Does this prove the group rule malfunctioned? What business evidence is missing? Explain why changing her worker type is an inappropriate way to justify the assignment.

## 6. One group path is gone

In a separate future variation, Maya's move has been processed and she is no longer in NB-Sales-Employees. A checked second group still assigns Salesforce to her.

What can you conclude about her Okta assignment? What remains to be checked about whether that access is intended and what exists in Salesforce?

## 7. Assignment, provisioning, and Group Push

Maya's group membership and Salesforce assignment are confirmed. A colleague says: “Her Salesforce account and its permissions must be ready, and there must be a matching group inside Salesforce.”

Separate the claims. Name the evidence or capability needed for each, and explain the group-design distinction if Group Push is used.

## Your understanding check

Explain the full chain once without the lesson: authoritative values → Okta profile → rule → membership → assignment → separate target checks. Add where a direct assignment could give a different path.

[Self-check answers](../self-checks/day-05.md) · [Foundation checkpoint](../assessments/foundation.md) · [Course home](../index.md)

[Practice questions with explanations](../question-bank/day-05.md) · [Day 5 recap](../revision/day-05.md)
