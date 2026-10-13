---
title: "Day 6: exercises"
parent: Exercises
nav_order: 6
---

# Day 6: Reasoning exercises

The packets are fictional and independent unless explicitly linked. Jordan is still employed and Active in Okta. Use the [lesson](../lessons/day-06-active-directory.md) when needed.

## 1. Place the components

An investigator calls the Okta AD agent “the server that holds the AD directory.” Explain what the agent does, what a domain controller does, and why the two are not interchangeable.

## 2. A successful scoped import

An import includes an employee user OU but excludes a separate group OU. Jordan's user is processed; an expected group is absent from the imported results.

Does this prove the group is absent from AD? Does being inside an OU establish membership in a same-named group? What evidence would you request?

## 3. Name the operation

Classify these observations as import, delegated authentication, or password synchronization:

- Selected directory attributes were read into Okta.
- AD returned a credential-validation result through the agent for a sign-in attempt.
- A configured process propagated a password change to a supported destination.

Explain why success in the first operation does not establish success in either of the others.

## 4. No credential result

Jordan's earlier import succeeded. For attempt J-1, the handling agent received Okta's request, but its connection attempt to the selected DC timed out. No AD acceptance or rejection result was obtained.

State the demonstrated failure and one unsupported conclusion. Choose a specific next evidence request and explain what it could distinguish. Is an immediate password reset supported as the correction?

## 5. A different response

In separate attempt J-2, AD explicitly rejects credential validation. No detailed reason is supplied. A colleague concludes Jordan mistyped his password.

What is established? What additional evidence distinguishes possible causes? Why should an email-like username not automatically be treated as the correct work email or sign-in identifier?

## 6. A narrower successful outcome

The network team identifies and corrects a route problem from the handling agent to the DC. In J-3, AD accepts Jordan's credentials. Remaining Okta checks, Salesforce assignment, and Salesforce acceptance have not been inspected.

Write a precise incident update. Which recovery can you report, and which broader claim would exceed the evidence? Does J-3 establish why the separate J-2 attempt was rejected?

## 7. Explain two architectures

In Northbridge, Workday controls Jordan's employee profile and AD validates his password on the configured path. In a separate company, AD controls both the profile and password validation. Priya has no AD account in Northbridge.

Draw each employee's profile and authentication paths. Explain why neither company's successful import proves password acceptance and why Jordan's AD result does not establish Priya's sign-in outcome.

[Self-check answers](../self-checks/day-06.md) · [Course home](../index.md)
