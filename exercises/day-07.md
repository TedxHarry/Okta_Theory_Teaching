---
title: "Day 7: exercises"
parent: Exercises
nav_order: 7
---

# Day 7: Reasoning exercises

Use the [lesson](../lessons/day-07-authenticators-enrollment-mfa.md) as needed. These are synthetic observations, not instructions to operate a tenant.

## 1. Count proof, not prompts

A user enters two different passwords. Another uses a password and a registered-device possession method. Explain which factor types are represented and why counting two screens is insufficient to establish MFA.

## 2. Installed but not enrolled

Okta Verify is enabled for Daniel, and the app is installed on his phone. The checked Northbridge account has no completed enrollment. Enrollment is required now.

Why is a setup prompt expected? Would seeing another organization's account in the app establish Northbridge enrollment?

## 3. Required enrollment

Daniel has completed a required enrollment. A colleague concludes that every application must now challenge him with that authenticator on every visit.

What two decisions have been combined? What evidence would explain an actual attempt without assuming that enrollment specifies all challenge behavior?

## 4. Issued is not accepted

For D-2, the stated requirement is accepted password evidence plus accepted Push. The password is accepted, enrollment is present, and a Push request is issued. No accepted response is recorded.

What is established? Name two possible explanations and one evidence request that helps distinguish them. Is “Daniel's password is wrong” supported?

## 5. Same app, different method

For the same kind of Push-required attempt, someone supplies an unrelated successful TOTP event. They argue that it proves the Push requirement was met because both methods use Okta Verify.

Explain the method and attempt mismatches. What evidence would actually support their conclusion?

## 6. FastPass without a password

A separate, permitted flow uses FastPass. The user did not type a password. No detailed authentication result or user-verification evidence is included.

Can you infer that no authentication occurred, that only one factor was used, or that AD accepted a password? Explain what must be inspected instead. Is FastPass the same as Push?

## 7. Write a precise update

A new correlated attempt D-3 has completed enrollment, accepted password and Push results, and a recorded decision that the stated authentication requirement is satisfied. Expense account state, application acceptance, and approval permissions are not supplied.

Write an update to Daniel. State what has succeeded and what evidence is needed if he still cannot approve an expense. Do not claim the application outcome from the authentication results alone. Does this successful new attempt establish why D-2 had no accepted Push response?

[Self-check answers](../self-checks/day-07.md) · [Course home](../index.md)
