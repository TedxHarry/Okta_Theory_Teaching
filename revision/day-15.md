---
title: "Day 15: Bringing it together"
parent: Revision Guide
nav_order: 15
---

# Day 15 revision: Bringing it together

You now have several ways to explain an access problem. The skill is choosing the explanation the evidence supports, rather than trying to use every concept at once.

## Keep this investigation method close

**Expected state.** Start with the approved outcome for this person, application, and point in time. Without it, you can see a difference but cannot reliably call it a defect.

**Observed state.** Record what a particular source actually shows. Name the system, record, attempt, and time where relevant. “The request contained `FIN`” and “Projects stored `FIN`” are different observations.

**Hypothesis.** A hypothesis is a possible explanation to investigate. Ask which observation would support it and which would point elsewhere. A plausible explanation is not yet a confirmed finding. Missing approval evidence is not proof that approval never existed, and a conflicting username is not proof of account ownership.

**Failure boundary.** Find the last confirmed successful step and the first demonstrated problem. This narrows the next evidence request and helps avoid irrelevant fixes, such as resetting a password for an audience mismatch.

**Correction and verification.** Correct the demonstrated defect with attention to shared impact. Then verify the required result, not merely that the change was saved. Keep unresolved outcomes open in the handoff.

## Revisit the six cases

Use this recap after attempting the case. The tickets supply separate investigation snapshots; their proposed corrections are not completed results. Keep the remaining approval, ownership, failure-cause, and verification questions open where the packet leaves them open.

**Maya's Projects department.** Workday and Okta show Finance, but a fixed mapping sends `SAL`, which Projects stores. The update stored the value it was sent, and entry works, while the report is wrong. Those successes do not establish that the supplied value met Maya's requirement. Correct the mapping, check who else it affects, and verify the target value and reporting outcome. If the mapping were already correct, the investigation would instead need delivery and target evidence.

**Priya's Salesforce access.** The normal employee rule excludes her, but a direct assignment permits entry. The packet does not supply its exception approval. Review that path promptly without declaring it unauthorized solely because the approval is missing from the packet. Her separately approved Expense access does not approve Salesforce or Projects. Ticket E supplies its own Projects exception; that approval does not resolve Ticket B's missing Salesforce decision.

**Daniel's Salesforce rejection.** His stated authentication checks succeed, but the SAML assertion has the test audience for a production connection. Correct the connection mismatch and verify a fresh attempt. A matching NameID does not repair the audience. If an earlier authentication requirement had failed instead, later SAML evidence could not be assumed.

**Jordan's departure.** Okta deactivation and AD disablement are confirmed, but Projects remains active after a failed request and Expense still serves a new protected response to an existing session. Prioritize this continuing access. Correct and verify both targets separately. A Projects correction alone leaves Expense unresolved.

**Priya's Projects conflict.** The approved account request encounters a uniqueness conflict after a lookup finds no match. Resource ownership and the full sequence need investigation. Do not append a number to the username, delete a record, or associate an unknown account just to make the request succeed.

**Jordan's archived AD incident.** This evidence comes from before departure. The DC rejected the credential, but the exact reason is unresolved. Keep the historical investigation separate from his current removal requirements; it does not authorize restoring access.

## When a request reaches you

A closure note connects the expected outcome, observed discrepancy, justified action, and verified result. If only a proposed correction is supplied, name who must perform it and what result is still needed. Knowing the next step is progress; it is not a verified resolution.

## Check your understanding

Close the model answers and choose one current ticket and the archived AD ticket. Explain each from memory using its evidence labels, then check whether you accidentally carried an outcome or approval from another case. For a current ticket, name the owner and evidence needed for the next unresolved result.

- Which current case demonstrates continuing access after departure, and why does it deserve priority?
- What evidence would close each target issue rather than merely show that a correction was attempted?
- Can you explain one case as expected state, observed state, supported conclusion, next check, and verification?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. Jordan's departure case demonstrates continuing access after its approved end. Projects remains active, and Expense serves a new protected response. These current outcomes need priority over the archived sign-in incident.

2. For Jordan, verify the corrected Projects account state and the end of Expense protected access separately. For other cases, verify the approved outcome at the affected boundary, such as the corrected department and report or a newly accepted SAML attempt.

3. For Maya: expected department FIN; observed fixed mapping sends SAL and Projects stores it; the mapping defect is supported. Check its shared impact, correct it, and verify the target value and report. Successful entry does not close the reporting problem.

</details>

Your notebook's architecture explanation, incident investigation, and access decision should now tell a connected story. If one part still feels uncertain, use the relevant recap and lesson to revisit that boundary.

[Full lesson](../lessons/day-15-integrated-case.md) · [Exercises](../exercises/day-15.md) · [Lesson exercise answers](../self-checks/day-15.md) · [All recaps](index.md)

[Previous recap: Day 14](day-14.md)

[Practice questions with explanations](../question-bank/day-15.md)
