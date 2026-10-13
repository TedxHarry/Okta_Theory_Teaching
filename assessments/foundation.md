---
title: "Foundation checkpoint: From identity data to access"
parent: Assessments
nav_order: 1
---

# Foundation checkpoint: From identity data to access

Explain Northbridge's access decisions using Days 1 to 5. Write your reasoning before opening the [separate debrief](self-checks/foundation.md). You may use your notebook and references; record where you needed help. When a task asks you to predict a result, label it as expected until the packet supplies an observation. Support findings with the packet and evidence row rather than an earlier lesson's outcome.

All packets are synthetic. B, C, and D are independent variations on A, not consecutive incidents. Maya remains a Sales employee except in D's explicitly hypothetical move.

Treat a **packet** as a small set of supplied case facts. For B, start with A and replace only the stated facts. For C, start from A again, without carrying over B's error. For D, start from A again and apply the hypothetical move. This keeps separate questions from accidentally becoming one changing story.

## Packet A: Expected access

Northbridge assigns Salesforce automatically to Sales employees through NB-Sales-Employees. Contractors require a separately approved exception. The rule is active, both users are Active and processed, neither is excluded, and no other membership mechanism supplies this group.

| Evidence | Maya | Priya |
|---|---|---|
| Source associations | Workday and AD | Neither |
| Effective profile source | Workday; above AD in priority | Okta |
| Department and workerType sourcing | Inherit from profile source | Inherit from profile source |
| Approved classification | Sales / Employee | Sales / Contractor |
| Okta user profile | Sales / Employee | Sales / Contractor |
| Rule | Sales AND Employee → NB-Sales-Employees | Same rule |
| Observed membership | Present | Absent |
| Salesforce assignment | Through NB-Sales-Employees | None; other paths checked |
| Target-account and Salesforce sign-in evidence | Not supplied | Not supplied |

**Task 1:** Tell each person's source-to-assignment story. Explain the different result and what remains unknown beyond assignment.

## Packet B: A correct rule receives the wrong value

Replace only Maya's data and result observations with these:

| Evidence | Observation |
|---|---|
| Workday department | Sales, confirmed as the approved value |
| Checked source association and department owner | Correct Maya record; Workday controls department |
| Current incoming department mapping | Always returns Finance |
| Preview for the Sales input | Finance |
| Okta department / workerType | Finance / Employee |
| Rule processing and membership | Rule processed that profile; Maya absent |
| Salesforce assignment | Absent; other paths checked |

**Task 2:** Identify the demonstrated defect. Propose a correction consistent with the business requirement and specify how to verify it. Does the packet establish the complete history of every field write?

## Packet C: Priya has a different assignment path

Keep Priya's correct Packet A profile and nonmembership, but replace her assignment state with an individual Salesforce assignment. Its approval record and target-account evidence are not supplied.

An Okta SSO event concerning Priya and Salesforce records SUCCESS for a specified attempt. No application-side acceptance or permission evidence is included.

**Task 3:** Explain why her assignment does not demonstrate a rule failure. Identify the missing business decision and the limits of the event. Name a specific next evidence request and explain how different findings would change your conclusion.

## Packet D: Predict a future change

Starting from A, suppose Maya later has an approved move to Finance. Workday and Okta both receive Finance, and the active rule processes her updated profile. Assume this rule is the sole membership mechanism for NB-Sales-Employees and there is no individual exclusion.

**Task 4:** Predict her Sales-group membership. Contrast two assignment states: no other Salesforce path exists, or another checked group still assigns Salesforce. What target and session evidence would you need before claiming the end of all Salesforce access? Identify the separate checks using Day 2's account/session distinction; you do not need to explain session-expiry mechanisms.

## Explain the architecture

**Task 5:** Explain why none of these are interchangeable: profile source, mapping, group rule, application assignment, provisioning result, and SSO event. Use at least one observation above for each relevant boundary. Explain your next action to a manager without relying on menu names.

Use the [debrief and rubric](self-checks/foundation.md) to assess your reasoning. Keep the corrected flow in [your notebook](../notebook/guide.md).

## Explain the proposed action

Before opening the debrief, choose Packet B or C and write a short handoff. Name the user and application record you would inspect, the setting or approval that matters, who else a change could affect, and what evidence would establish the requested result. Separate a proposed correction from a correction already verified.

After the debrief, try [the missing-application request](../requests/missing-application.md) with a different person and application.


[Return to Day 5](../lessons/day-05-groups-and-assignments.md) · [Course home](../index.md)
