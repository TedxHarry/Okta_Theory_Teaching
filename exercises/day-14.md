---
title: "Day 14: exercises"
parent: Exercises
nav_order: 14
---

# Day 14: Reasoning exercises

Use the [lesson's](../lessons/day-14-requirements-and-responsibilities.md) approved R-14 decisions. The access model is proposed; implementation outcomes are not supplied.

## 1. Clarify before designing

“Give Finance access, except contractors and executives.” Name the missing decisions needed to make this request reviewable. Which answers belong to the business or application owner rather than being invented by the IAM administrator?

## 2. Explain the approved model

Under R-14, explain the expected outcomes for Maya, Daniel, Priya, and Jordan. Distinguish the ordinary assignment path, application approval permission, contractor exception, and effective departure. Does the proposed group rule alone implement every outcome?

## 3. Inspect surviving paths

An employee moves out of Finance and leaves NB-Finance-Employees, but retains an old individual Expense assignment. What remains to investigate? Why is changing the employee's department back to Finance not an appropriate correction? What additional target evidence is required?

## 4. Use the permission reference

Consult the [standard-role matrix](https://help.okta.com/oie/en-us/content/topics/security/administrators-admin-comparison.htm), or use this supplied paraphrase of the relevant rows: Org Admin and Super Admin can manage group rules; Group Admin cannot. App Admin permissions are limited to permitted applications. Managing a shared app sign-in policy requires permission to manage all apps assigned to that policy.

An administrator manages Expense but not Projects. Both apps use the same authentication policy. Can you conclude that this administrator may edit that shared policy? Can a Group Admin be assumed to edit R-14's group rule? Explain the limits of the supplied reference and the appropriate next step.

## 5. Define acceptance and change recovery

A mistaken Finance OR Employee rule grants unintended assignments. Describe positive, negative, and lifecycle acceptance cases for the intended AND rule. If the prior configuration is restored, what consequences still need investigation and correction? Include a Finance contractor without an exception and a Sales employee with no other approved path. Why do these cases expose an OR mistake more effectively than testing only an eligible Finance employee?

## 6. Reason about account recovery

Priya reports an unavailable old phone. Her access exception is approved, but the caller's identity and replacement enrollment are unverified. Does the approval justify an immediate authenticator reset? Explain the necessary identity, authority, recovery, and outcome checks. Would extra app permissions fix the issue?

## 7. Compare Microsoft 365

A colleague proposes copying Expense's OIDC settings and Projects' SCIM contract into the Office 365 integration, then treating successful sign-in as proof of licensing. Using the lesson's supplied documentation summary, identify the unsupported assumptions and the separate responsibilities that must be established.

## Optional: apply the onboarding framework

Use the explicitly labelled Projects design variant in [Onboarding a new application](../reference/onboarding-an-application.md). One eligible Sales employee has a working account and sign-in. Does that establish the design for an ineligible Finance employee, Priya's contractor exception, and Maya's move to Finance? For each, name the expected outcome, a separate piece of evidence, and an unknown. Why must Maya's move check both group and direct assignment paths? If an API rejects the integration credential, would resetting Maya's password address the evidence?

[Self-check answers](../self-checks/day-14.md) · [Course home](../index.md)
