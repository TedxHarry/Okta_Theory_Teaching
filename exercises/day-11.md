---
title: "Day 11: exercises"
parent: Exercises
nav_order: 11
---

# Day 11: Reasoning exercises

Use the [lesson's](../lessons/day-11-imports-and-matching.md) stated integration and review policy. The packets are synthetic.

Name the discovered record, the proposed relationship, the ownership evidence, and the confirmation result separately. Only carry a result between packets when the scenario explicitly supplies that connection.

## 1. Separate the outcomes

An import finds an external account and proposes an existing Okta user as its match. Confirmation is pending. What has happened, and what must not yet be claimed about association, activation, or application entry?

## 2. Choose from evidence

In M-1, Projects candidate A has NB-1042 and verified ownership by Maya. Candidate B has NB-7788 and verified different ownership, despite sharing her name. Explain the supported decision, what the pending confirmation means, and what M-2 adds.

## 3. Handle conflicting identifiers

In M-3, both candidates contain NB-1042, and ownership is unknown. Why does the exact comparison not settle the decision? Name evidence needed before linking, creating, or consolidating records.

## 4. Explain a missing result

An AD account exists outside the selected employee OU scope. It is absent from the import. Does this prove an agent failure or require widening scope? Then consider a record inside scope with a missing employeeNumber: does no match prove a new person?

## 5. Revisit profile ownership

Contrast two cases: Maya's confirmed Projects association when Projects is not a profile source, and a hypothetical mistaken AD association against Priya. What source and attribute checks matter? Why is reordering sources for everyone not a justified first correction?

## 6. Read incomplete and denied evidence

The first Okta Users API page contains Maya and Daniel and a next link. Priya is absent from that page. A separate attempt receives 403, with confirmed insufficient caller permission. State a supported conclusion for each. Do either of these results show which Projects account belongs to Priya? What would you need before making a complete-result claim about the Okta read?

## 7. Compare import, JIT, and reconciliation

Explain how an import-based association differs from supported JIT account creation during sign-in. For each, name the system in which an account or association would be created. Why does successful SSO not settle this? Describe what reconciliation would check after a confirmed match.

[Self-check answers](../self-checks/day-11.md) · [Course home](../index.md)

[Practice questions with explanations](../question-bank/day-11.md) · [Day 11 recap](../revision/day-11.md)
