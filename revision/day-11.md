---
title: "Day 11: Imports and matching"
parent: Revision Guide
nav_order: 11
---

# Day 11 revision: Imports and matching

Finding a record that looks like Devi is the start of a decision. Before connecting it to her Okta user, establish that it really belongs to her. A confident-looking match can still connect the wrong people.

## The concepts to keep with you

**Discovery and matching.** Discovery finds records within the configured scope. Matching compares identifying information to propose a relationship. A displayed proposal is not yet a confirmed association, and a matching name alone is weak evidence.

**Confirmation and association.** Confirmation accepts the proposed relationship through the applicable process. The resulting association links the records. Account activation and successful sign-in remain separate outcomes.

**Identifiers.** A field such as employee number can be useful for matching, but an exact comparison only proves that the values agree. A number copied onto the wrong account can agree exactly with the intended person's number while proposing the wrong relationship. Duplicated, reused, or incorrect identifiers still need investigation. A missing match does not automatically mean a new person or account should be created.

**Import direction and profile ownership.** Reading records from an application does not automatically make it a profile source. Projects remains a downstream account-management target in Northbridge's design, even when the lesson's configured inbound discovery reads its records. "Which account belongs to Devi?" and "Which system governs her employee profile?" are separate questions.

**Reconciliation.** Reconciliation compares expected identities and account states with what you actually find. Equal totals are not enough. One hundred discovered accounts might still contain the wrong people or incorrect access states.

**Pagination.** An API can return only part of a collection. Follow the supplied next-page link to continue the read. Its opaque cursor is a service-supplied position value to use as provided, rather than a page number to calculate. A person absent from page one is not proven absent from the complete result. A denied read, such as `403`, is also not an empty collection.

## Work through Devi's candidates

In M-1, two records look like Devi. The evidence confirms that candidate A, with employee number `NB-1042`, belongs to her; candidate B belongs to another person. That supports the proposed choice, but the pending proposal still needs confirmation before you describe it as linked.

The explicit follow-up M-2 confirms the association. Its Projects record showing `SAL` and `active: true` tells you its observed account state. It does not establish that Devi can sign in.

In the separate duplicate-identifier packet M-3, ownership is unresolved. M-2's confirmed relationship does not supply ownership evidence for this independent case. Keep it unresolved while obtaining evidence. Choosing the first result would turn uncertainty into an unsupported identity decision. These matching packets also do not establish the history behind Day 10's separate create conflict.

An accidental association can also change which source rules apply. For example, linking Priya to an AD record deserves an impact review; changing global source priority is not a substitute for correcting the relationship.

Just-in-time creation is another distinct process. It occurs during a supported, configured sign-in path, rather than being the same operation as this import and matching review.

## When a request reaches you

An unexpected import-removal count deserves investigation before processing continues. Check source scope and business changes. Import safeguards have specific coverage and do not protect every group-rule or assignment change.

## Check your understanding

From memory, explain what M-1 supports, what M-2 adds, and why M-3 remains unresolved. Then contrast a successful partial read with a denied read. State what evidence you would request before claiming an association or an account's absence.

- What changes between a proposed match and a confirmed association?
- Why do matching employee numbers still need trustworthy ownership evidence?
- What can you conclude if Priya is absent from a single API page?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. A proposal is a candidate relationship. After the applicable confirmation and association succeed, the records are linked. Neither stage proves successful sign-in.

2. Values can be duplicated, reused, or entered incorrectly. Exact equality is a comparison result, so trustworthy person and account evidence still matters.

3. Only that she is absent from that returned page. Follow the supplied next-page links and preserve the search scope before drawing a collection-wide conclusion.

</details>

[Full lesson](../lessons/day-11-imports-and-matching.md) · [Exercises](../exercises/day-11.md) · [Lesson exercise answers](../self-checks/day-11.md) · [All recaps](index.md)

[Previous recap: Day 10](day-10.md) · [Next recap: Day 12](day-12.md)

[Practice questions with explanations](../question-bank/day-11.md)
