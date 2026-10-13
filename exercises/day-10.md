---
title: "Day 10: exercises"
parent: Exercises
nav_order: 10
---

# Day 10: Reasoning exercises

Use the [lesson's Projects contract](../lessons/day-10-scim.md). All packets are synthetic and independent unless a follow-up is stated.

Try the questions before opening the answers. Name the operation, linked target resource, response, and subsequent target observation where supplied. If one is missing, explain what that limits rather than borrowing a result from another packet.

## 1. Locate the missing boundary

Maya is assigned and her Projects app profile contains SAL. No request, response, or target record is supplied. What is established? What would you inspect next before declaring successful provisioning?

## 2. Read the create result

A POST to Projects /Users receives 201 Created with id prj-1042. A subsequent read confirms Maya's user name, SAL, and active true. Explain who assigned the id, what the result supports, and what remains unknown about access.

## 3. Investigate the conflict

An earlier lookup finds no match; the create receives 409 uniqueness. A colleague proposes deleting the existing account and retrying. Explain why the evidence does not justify that proposal. Name evidence that distinguishes at least two possible explanations.

## 4. Correct the representation

Daniel's Workday and Okta values are Finance. The current outbound mapping copies Finance into departmentCode, and the sent enterprise department is Finance. Projects returns 400 invalidValue and states that SAL, FIN, and IT are accepted. Locate the defect and describe correction and verification.

## 5. Separate an update from a new account

The connector addresses Daniel's linked prj-1020 resource with a supported full PUT representation containing FIN. The response and subsequent target read confirm FIN. Is this a create? Why should an investigator avoid suggesting an arbitrary one-field replacement body? This is a separate successful update example: does it establish that Question 4's rejected operation was corrected and retested?

## 6. Explain deactivation

An approved hypothetical removal generates active false. Projects returns 204; a later read shows the retained resource with active false. Explain the empty response, account outcome, and remaining session question. Would one removed group membership alone establish this chain?

## 7. Distinguish the connections

Maya completed MFA for a sign-in attempt, but the Projects SCIM request receives an authorization rejection from Projects. Explain why successful user authentication does not repair or prove the connector's authorization. Does an Expense ID token belong in that SCIM request?

[Self-check answers](../self-checks/day-10.md) · [Course home](../index.md)
