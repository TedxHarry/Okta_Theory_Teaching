---
title: "Foundation checkpoint: Debrief and rubric (debrief)"
parent: Assessments
nav_order: 11
---

# Foundation checkpoint: Debrief and rubric

Attempt the [checkpoint](../foundation.md) before reading this explanation. Judge the reasoning, not exact wording.

## Task 1: Expected access

Devi's applicable sources are Workday and AD, with Workday first. Her department and workerType inherit from that effective source. The correct Sales/Employee values reach Okta, meet both rule conditions, and result in the observed NB-Sales-Employees membership. The group's Salesforce assignment supplies her assignment.

Priya has no applicable external association and her profile is maintained in Okta. Sales/Contractor is correct for her, but it does not meet the Employee condition. Her absence from the group and lack of assignment are consistent with the normal requirement.

Neither person's packet establishes the target account or application sign-in outcome. In particular, no assignment for Priya is not proof that no Salesforce account exists; an application account might exist from another process or earlier state.

## Task 2: Demonstrated defect and verification

The incoming mapping always produces Finance despite the approved Sales input. Its preview demonstrates the current defect. The observed Okta value and rule result are consistent with that wrong output.

Propose correcting the department mapping to represent the approved source value. Review other users affected by the mapping. Do not change correct HR data or broaden the Sales rule to include Finance.

Verification should establish the saved mapping's correct output, Devi's updated Okta profile, actual rule processing and membership, and resulting Salesforce assignment. Any claim of usable Salesforce access then requires the relevant account, sign-in, and permission evidence.

The packet demonstrates a current defect, not a complete history of all writes. Do not invent the original operation that put Finance into the profile.

## Task 3: Exception and event boundaries

Priya's individual assignment supplies a different path. Her failure to qualify for the normal group remains expected. Request the approved exception, owner, scope, and review/removal condition; a missing record in the packet is not proof of either authorization or unauthorized access.

An approved exception would support keeping the assignment within its documented conditions. An explicit decision that no exception is authorized would support planning appropriate access removal and verification. If approval remains unknown, explain who must resolve it instead of inventing a business decision.

The SUCCESS event records an Okta-side SSO result for the stated attempt. It does not prove Salesforce accepted the exchange, granted required permissions, or completed provisioning. Application-side evidence and account-management evidence answer those questions separately.

Acceptable next requests can focus on approval or technical outcome, provided the answer names the unresolved question and the result it could establish.

## Task 4: Future move

With Finance in the processed Okta profile, Devi no longer meets Sales AND Employee. Under the stated sole-rule assumptions, her Sales-group membership should be removed. Verify the observed removal before treating the prediction as a completed event.

If there is no other assignment path, the Salesforce assignment through that group should cease once the membership change is applied; confirm the resulting assignment state. If another checked group still assigns Salesforce, that path remains and needs evaluation against the post-move requirement.

Neither outcome alone proves the target account is disabled or an application session has ended. Check the configured account-management behavior, operation results, target state, and application-session observations. Detailed session mechanisms are not required here.

## Task 5: Architecture explanation

A sound manager-facing explanation might be:

> We use approved identity data to decide normal access. Workday controls Devi's employee data; an authorized process maintains Priya's contractor data in Okta. Mappings represent those values in the profiles that rules use. The Sales employee rule manages a group, and Salesforce is assigned to that group. An individual exception can create another assignment path. We verify the application account and sign-in separately, because neither a group membership nor an Okta success event establishes all application outcomes.

For B, add that the current mapping is demonstrably wrong and needs correction and verification. For C, add that the individual assignment's business approval remains unknown.

## Assess your explanation

For each row, choose **independent**, **with guidance**, or **needs review**. Independent means you explained that point without consulting an explanation or reference for it. With guidance means a reference helped you reconstruct it. Needs review means a distinction is still unclear or your explanation depends on an unsupported assumption.

| Criterion | Evidence of understanding | Revisit if needed |
|---|---|---|
| Flow | Connects data, rule, membership, assignment, and target checks. | Day 5: A rule decides membership |
| Ownership | Explains why Workday controls Devi and Okta controls Priya. | Day 4: applicable associations and inheritance |
| Prediction | Evaluates AND and changes the outcome when department changes. | Day 5: Predict who matches |
| Evidence | Separates preview, observed profile, membership, assignment, and event results. | Days 2 to 3 |
| Investigation | Requests evidence that distinguishes explanations or resolves approval. | Notebook: Choose evidence that separates explanations |
| Correction | Fixes the demonstrated mapping defect without changing correct source data. | Day 3: first wrong representation |
| Transfer | Recognizes another assignment path and independent target/session states. | Day 1 access distinctions; Day 5 assignment paths |

Revisit the relevant section if you equated SSO with provisioning, treated a contractor label as source scoping, assumed all group members have working target accounts, or claimed all access ended with one membership change. You do not need to reread every lesson for one missed distinction.

## Try a changed condition

Return to Packet B. This time the incoming mapping and preview produce Sales, but the stored Okta department is still Finance. What changes in your conclusion?

Write your explanation before expanding the answer.

<details markdown="1">
<summary>Check the changed-condition reasoning</summary>

The current preview no longer demonstrates the constant-value mapping defect. Investigate whether that configuration was applied to the user, the relevant import/update result, and the sequence of subsequent changes. A correct preview is not proof of a corrected stored profile. Keep the correct HR value and intended access rule unchanged while finding the actual discrepancy.

</details>

## Review the action, not just the diagnosis

For your proposed action, mark each point as explained independently, explained with a reference, or still unclear. Revisit the specific missing explanation before trying a changed situation.

| Point | What your response should establish |
|---|---|
| Record selection | Names the intended identity, source association, group, and application instance instead of relying on display names. |
| Action | Corrects the demonstrated mapping in B or obtains the missing exception decision in C. Does not treat an unknown as a confirmed failure. |
| Shared effect | Checks other users of a shared mapping or assignment before proposing its replacement. |
| Verification | Distinguishes stored profile, membership, assignment, target account, and accepted access. Leaves uninspected outcomes open. |


[Checkpoint](../foundation.md) · [Day 5](../../lessons/day-05-groups-and-assignments.md) · [Course home](../../index.md)
