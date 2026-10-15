---
title: "Day 4: self-check answers"
parent: Self-Checks
nav_order: 4
---

# Day 4: Self-check answers

Compare the reasoning, not exact wording. Return to the [exercises](../exercises/day-04.md) if you have not attempted them.

## 1. Apply the order to a person

Workday is Maya's effective profile source because both associations apply and Workday has higher priority. Priya is Okta-managed in the supplied configuration because neither external source applies.

Check whether your explanation follows the associations before the priority list. The claim about Priya skips source applicability. An integration's presence and priority do not establish her association with it.

Revisit [First ask which sources apply to this person](../lessons/day-04-sources-and-ownership.md#first-ask-which-sources-apply-to-this-person) if you applied the list to everyone without checking their links.

## 2. Separate profile and attribute authority

The difference alone is not proof of an error. Maya's work email has an explicit AD source, so the AD value is expected in Okta under the stated configuration.

Check the approved address requirement, the correct linked AD account, the field's source configuration, and the relevant mapping and update evidence. A designated source can itself contain a business error; authority is not proof that every value is correct.

Revisit [Then check the particular attribute](../lessons/day-04-sources-and-ownership.md#then-check-the-particular-attribute) if you assumed Workday must supply all fields because it controls the profile.

## 3. Investigate the wrong department

Confirm the linked records, incoming department mapping, and applicable import or update result. Establish whether the observation is current and whether another event explains the discrepancy.

Workday already contains the approved Sales value. Changing it to Finance would contradict the requirement. Repeated local edits would not explain why the intended source value is missing; configuration may restrict those edits or later source updates may replace them.

The packet establishes a mismatch, not a particular failed operation. A mapping defect, stale import, or incorrect association remains a hypothesis until supporting evidence is found.

Revisit [What if Maya's Okta department were wrong?](../lessons/day-04-sources-and-ownership.md#what-if-mayas-okta-department-were-wrong) if your answer names a root cause without evidence.

## 4. Explain contractor maintenance

Priya has no Workday association or AD account assignment, is outside employee imports, and has an Okta-managed profile under the sponsor-approved maintenance process. Department inherits from each user's profile source: Workday for Maya and Okta for Priya. It is not a field universally fixed to Workday. The administrator's authority to perform the approved edit is separate from the sponsor's business approval.

An unexpected Workday association calls the actual source configuration into question. Review how the link arose, which source now applies, and what data or lifecycle effects occurred. Do not assume the contractor label prevents matching or immediately remove links without understanding their effects.

Revisit [Why Priya can be maintained in Okta](../lessons/day-04-sources-and-ownership.md#why-priya-can-be-maintained-in-okta) if “contractor” was your entire explanation.

## 5. Challenge a fallback assumption

First, omission from an excerpt does not establish that the source field is empty. Second, even a confirmed empty value does not by itself establish automatic selection of AD's value.

Obtain the actual source value, the applicable association and attribute-sourcing configuration, and the mapping/update behavior for the missing-value condition. Also check the observed destination and operation result. No fallback rule was supplied in this example.

Revisit [First ask which sources apply to this person](../lessons/day-04-sources-and-ownership.md#first-ask-which-sources-apply-to-this-person) and [Then check the particular attribute](../lessons/day-04-sources-and-ownership.md#then-check-the-particular-attribute) if you treated lower priority as automatic failover.

## 6. Keep architectures distinct

The applicable sources differ. The AD-led employee has AD as their profile source without an applicable Workday source. Maya has both associations with Workday first, and her department follows Workday.

The variation does not justify reordering Northbridge's sources. That would change an ownership decision for potentially many users, while a stale record might concern a mapping or update operation instead.

Revisit [Keep the AD-led variation separate](../lessons/day-04-sources-and-ownership.md#keep-the-ad-led-variation-separate) if you carried a conclusion between architectures without checking the associations.

## 7. Tell the complete story

Workday controls Maya's profile and her inherited department field. Sales is the approved value; SAL is its intended Projects representation. The Okta user and app user profile agree with that requirement. The Projects account is the first demonstrated discrepancy on the specified path: it contains FIN instead of SAL. AD's Finance department is a separate disagreement, not the authoritative input for that path.

The explicit AD work-email source applies to that field. It does not make AD the department source. Moving AD above Workday would change source authority instead of explaining the current target discrepancy. Resetting a password is also unsupported: password validation succeeded and is separate from a department update.

A useful next request is the relevant Projects account-update record, including whether the operation occurred, the value sent, and the target response for this linked account.

- If the configuration shows department updates are disabled and the relevant history confirms no update occurred, investigate whether updates should be enabled under the approved requirement. That differs from troubleshooting a target rejection.
- If a recorded operation sent SAL and Projects rejected it, inspect the stated rejection and target requirements. Do not change the correct HR department to work around the rejection.

A concise handoff could say: “Maya's Workday department and Okta user profile contain Sales; the saved Projects mapping evaluates to SAL and the app user profile contains SAL. Her linked Projects account contains FIN. Please provide the relevant department-update record, including the value sent and the target response.” This identifies the discrepancy without inventing a failed operation.

Neither finding is supplied by the initial packet. Other evidence requests are acceptable if you explain what competing explanations they distinguish. A success response would still need comparison with target state, sequence, and possible later writes, as Day 3 shows.

Revisit Day 3's **A preview is a calculation, not delivery evidence** for the data boundary; Day 4's [Then check the particular attribute](../lessons/day-04-sources-and-ownership.md#then-check-the-particular-attribute) for authority; or Day 2's **Match the evidence to the right attempt** if you treated the password result as an account-update result.

## Ready to continue

You should be able to identify a person's applicable sources, read the priority order, and check field-level ownership before judging conflicting values. You should also be able to leave delivery and password-path conclusions unproven when the evidence only concerns profile data. If your answer recommends changing source order, name the ownership requirement that justifies it; a stale value alone is insufficient.

[Return to the lesson](../lessons/day-04-sources-and-ownership.md) · [Course home](../index.md)

[Revise Day 4](../revision/day-04.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-04.md) · [Day 4 recap](../revision/day-04.md) · [Reasoning exercises](../exercises/day-04.md)
