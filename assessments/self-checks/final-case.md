---
title: "Final case: Debrief and skills checklist (debrief)"
parent: Assessments
nav_order: 13
---

# Final case: Debrief and skills checklist

Use this after attempting the [case tasks](../../exercises/day-15.md) and comparing your reasoning with the [model investigation](../../self-checks/day-15.md). No numerical score is needed. A confident unsupported claim is a reason to revisit a concept, not evidence of mastery.

## Assess the reasoning you used

Mark each row **independent**, **with guidance**, or **needs review**. Independent means you explained that point without consulting an explanation or reference for it; with guidance means a reference helped you reconstruct it; needs review means a distinction remains unclear.

| Criterion | Evidence in your response | Targeted review |
|---|---|---|
| Flow | Names the person, objects, direction, and affected systems in sequence. | Days 1 to 3; notebook investigation entry. |
| Ownership | Applies source priority to actual associations and distinguishes the AD email exception from password validation. | Days 4 and 6. |
| Prediction | Uses the approved population, exception, and lifecycle requirements without inventing permissions. | Days 5, 12, and 14. |
| Evidence | Cites packet labels and keeps attempts, instances, and current/historical states separate. | Days 2, 11, and 13. |
| Authentication and sessions | Separates enrollment, accepted proof, the applicable requirement, protocol validation, and each system's session result. | Days 7 to 9 and 13; Variation 4 below. |
| Investigation | Distinguishes a demonstrated cause from unresolved ownership or approval and requests discriminating evidence. | Days 10 to 11. |
| Correction | Fixes the demonstrated representation or validation defect and names target verification and shared impact. | Days 3, 8, and 14. |
| Transfer | Changes the diagnosis when the evidence changes instead of repeating a memorized fix. | Changed-condition questions below. |

## Check the essential distinctions

- Can you distinguish a person, an Okta identity, an application account, and an application session?
- Can you explain why a source association, a profile source, a mapping, and a group rule are different?
- Can you explain why Workday ownership and AD password validation can coexist?
- Can you separate authenticator enrollment, a challenge, accepted proof, and an application policy requirement?
- Can you trace SAML browser delivery and OIDC code/backend exchange without interchanging their messages or tokens?
- Can you explain why decoding is not validation and why Okta-side success does not establish all application outcomes?
- Can you distinguish SCIM create, update, deactivate, and delete, including response and target-state evidence?
- Can you leave a username conflict unresolved until ownership evidence supports a decision?
- Can you explain why group removal, deactivation, and session termination need different evidence?
- Can you distinguish approved business access from the administrator's permission to make a change?
- Can you use a supplied official reference while recognizing its scope and limitations?
- Can you name what you would verify after a correction rather than assuming a proposed action succeeded?

If a distinction is unclear, revisit its focused lesson and explain the relevant packet again. You do not need to restart the entire course for one missed boundary.

## Try different evidence

Write a new conclusion for each variation before expanding the reasoning. These variations replace the stated evidence; they do not alter the main case retroactively.

### Variation 1: A correct mapping, unknown delivery

In A, the mapping preview and app profile now contain FIN, but the target contains SAL. No transmitted operation or response is supplied. Is the original fixed-value cause still demonstrated?

<details markdown="1">
<summary>Compare the reasoning</summary>

No. Request the eligible update, sent value, response, linked target identity, and sequence. Current preview and app-profile values do not prove delivery. The original fixed-SAL mapping defect is no longer supported by this changed packet.

</details>

### Variation 2: Approval arrives

In B, the authorized owner supplies a current Salesforce exception with matching scope and a defined end condition. Does the contractor rule need to be broadened?

<details markdown="1">
<summary>Compare the reasoning</summary>

No. The normal rule still correctly excludes contractors. The exception explains the separate approved path. Verify its observed access, ownership, and removal condition without rewriting the normal employee classification.

</details>

### Variation 3: One target is corrected

In D, a supported Projects retry succeeds and a target read confirms active false. Expense has no new evidence. Can the departure ticket close?

<details markdown="1">
<summary>Compare the reasoning</summary>

Only the Projects account-state issue has new confirming evidence. The observed Expense access and any other required paths still need their own resolution and verification. Do not transfer one application's successful correction to another.

</details>

### Variation 4: The authentication requirement is not yet satisfied

Replace C1: Daniel has the required enrollment and a valid Okta session, but the applied app rule requires fresh possession proof. A challenge is issued with no accepted response. C2 to C5 have not occurred in this changed attempt. Is the original SAML audience diagnosis established for this attempt?

<details markdown="1">
<summary>Compare the reasoning</summary>

No. The current attempt has not yet satisfied the supplied authentication requirement, and no SAML response or target validation result is supplied. Enrollment and challenge issuance do not establish accepted proof. Investigate challenge delivery, the response, and the correlated result without inventing a password failure or policy defect. After authentication succeeds, obtain the new SAML and application evidence; success at that earlier boundary would not prove that the audience is correct or that Salesforce entry works. Revisit Days 7, 8, and 13 if you carried the original audience finding into this changed attempt.

</details>

## Build a reusable final record

Keep three pieces in [your notebook](../../notebook/guide.md):

1. An architecture explanation naming data ownership, credential validation, assignment, federation, provisioning, and sessions.
2. One complete incident entry with evidence, limits, next action, ownership, verification, and remaining unknowns.
3. One access-decision record defining population, permissions, exceptions, removal, administrative authority, and recovery considerations.

Keep untested assumptions explicit when applying the reasoning to another environment. Confirm its ownership, capabilities, and evidence rather than carrying Northbridge's configuration across unchanged.

## Review the action, not just the diagnosis

For your proposed action, mark each point as explained independently, explained with a reference, or still unclear. Revisit the specific missing explanation before trying a changed situation.

| Point | What your response should establish |
|---|---|
| Explain | Describes the relationship and approved outcome without relying on a product label as the explanation. |
| Locate | Names the record, setting, or event needed next and explains how its result would change the conclusion. |
| Decide | Chooses a justified action or escalation with the necessary owner and approval. |
| Consider impact | Identifies other affected users, applications, assignment paths, or sessions. |
| Verify | Supplies evidence of the intended outcome and keeps unresolved checks assigned to an owner. |

Try the [independent requests](../../requests/index.md) without opening their reasoning first. Explain both the correction and what would make you keep the request open.

When you are ready to plan a training activity, the optional [Day 16 practice bridge](../../lessons/day-16-safe-practice-plan.md) turns these distinctions into predictions and an evidence record. Completing the theory assessment does not make that practice activity tested or verify a deployment.


[Case evidence](../final-case.md) · [Day 15](../../lessons/day-15-integrated-case.md) · [Course home](../../index.md)
