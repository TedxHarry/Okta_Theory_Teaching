---
title: "Day 11: self-check answers"
parent: Self-Checks
nav_order: 11
---

# Day 11: Self-check answers

Attempt the [exercises](../exercises/day-11.md) first. Use the supplied evidence rather than a familiar name alone.

## 1. Separate the outcomes

Discovery and a proposed comparison have occurred. Confirmation is pending, so this packet does not establish the proposed association was accepted. It also provides no activation or application-entry result. Some configurations automate these stages, but this packet explicitly has not completed confirmation.

Revisit [Separate the stages](../lessons/day-11-imports-and-matching.md#separate-the-stages).

## 2. Choose from evidence

A meets the selected employeeNumber comparison and Northbridge's additional ownership and uniqueness checks. B is a different person's record. The supported proposal is to confirm A against Devi's existing identity through the approved process; M-1 alone does not prove that confirmation happened.

M-2 supplies successful confirmation, the checked association, and the target's current account state. It still supplies no sign-in. M-2 is an explicit follow-up to M-1. Its confirmed link is useful evidence for that investigation; it does not supply ownership for M-3's separate candidates or reconstruct Day 10's create-conflict history.

**Revisit:** [Work through Devi's existing account](../lessons/day-11-imports-and-matching.md#work-through-devis-existing-account)

## 3. Handle conflicting identifiers

Both records carry the number being compared, so both can meet that equality test. The test cannot choose between them or establish either owner. Repeating it on the same values would leave those questions unanswered. Request authoritative identifier history, account-creation evidence, and the application owner's ownership evidence. Decide whether there is an incorrect value, two legitimate records for different purposes, or an actual duplicate only after investigating.

Keep the association decision open while obtaining that evidence. Selecting the first candidate, adding a third record or deleting a candidate would change the records without resolving whose account each one is.

**Revisit:** [Recognize when the evidence is insufficient](../lessons/day-11-imports-and-matching.md#recognize-when-the-evidence-is-insufficient)

## 4. Explain a missing result

An out-of-scope account can be absent by design. Compare its location and the approved population before proposing a scope change. No agent defect follows from this observation alone.

The second record was found, but the employee-number comparison lacks a value to use. Investigate the authoritative identifier and how it reached the imported field. A missing value does not establish that no existing Okta identity represents that person.

**Revisit:** [Start with scope and direction](../lessons/day-11-imports-and-matching.md#start-with-scope-and-direction)

## 5. Revisit profile ownership

Devi's Projects association identifies a downstream account. Projects is not a configured profile source, so the association does not replace Workday ownership. Workday and AD associations, priority, and the AD email exception retain their stated roles.

An erroneous Priya-to-AD association is different because AD is a configured source and Priya is meant to be excluded. Inspect the resulting effective source, attribute ownership, actual writes, and the confirmation history. Do not invent a Workday association or assume the contractor label blocks sourcing.

Changing priority for everyone does not show that Priya's mistaken link has been repaired. It can also affect other identities with applicable source associations. Investigate her confirmation and its effects, restore the intended relationship and data through the supported process, then verify the resulting values and affected access.

**Revisit:** [Association can affect sourcing](../lessons/day-11-imports-and-matching.md#association-can-affect-sourcing)

## 6. Read incomplete and denied evidence

The first result is one page of Okta users with another page available. It does not establish Priya is absent. Follow the service's next link and consider the query's scope before a completeness claim. You need the complete returned sequence for the relevant successful read, together with the intended endpoint and query scope. Even a complete Okta Users result does not become a Projects account inventory.

The second attempt is a denied read with a supplied permission cause, not a successful empty list. Request an appropriately authorized read. The first attempt says "more of this Okta result remains to be read." The second says "this caller could not perform the read." Neither says "Priya has no account," and neither supplies a Projects account inventory or her association.

**Revisit:** [Read the whole result, not just its first page](../lessons/day-11-imports-and-matching.md#read-the-whole-result-not-just-its-first-page)

## 7. Compare import, JIT, and reconciliation

The Projects import reads existing target records and proposes or confirms their relationship with Okta identities. A configured JIT flow creates or updates an account during sign-in: application-side JIT acts in the application, whereas an enabled AD-to-Okta JIT path acts on an Okta profile. These are distinct destinations and capabilities.

SSO success alone does not prove account creation or which mechanism produced an account. Reconciliation compares intended identities and associations with observed records, checks missing or duplicate relationships, verifies current values and relevant states, and leaves unresolved ownership explicit. Confirmation alone is not proof that every related application now works.

Revisit [Reconcile expected and observed records](../lessons/day-11-imports-and-matching.md#reconcile-expected-and-observed-records) and [Compare import with just-in-time creation](../lessons/day-11-imports-and-matching.md#compare-import-with-just-in-time-creation).

## Optional changed condition

In M-1, candidate A's email now differs from Devi's current email. The employee number, authoritative ownership history, and uniqueness checks remain valid. Must Alex create a new account?

<details markdown="1">
<summary>Check the reasoning</summary>

No. The configured comparison is employeeNumber, not email. Investigate the email difference and its intended owner, but a changed address does not by itself overturn the verified identity relationship. If email participates in another sign-in or mapping rule, check that consequence separately. Do not assume the discrepancy is harmless for every operation or that it proves another person.

</details>

[Return to Day 11](../lessons/day-11-imports-and-matching.md) · [Course home](../index.md)

[Revise Day 11](../revision/day-11.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-11.md) · [Day 11 recap](../revision/day-11.md) · [Reasoning exercises](../exercises/day-11.md)
