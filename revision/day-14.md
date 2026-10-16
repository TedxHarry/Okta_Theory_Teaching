---
title: "Day 14: Requirements and responsibilities"
parent: Revision Guide
nav_order: 14
---

# Day 14 revision: Requirements and responsibilities

Before turning “give Finance access” into a group rule, make the request precise enough to check. You need to know who should receive which capability, who approves exceptions, and when access should end.

## The concepts to keep with you

**Requirement and design.** A requirement states the approved outcome. A design explains how the system will deliver it. “Finance employees may submit expenses” is an outcome; a rule combining department and worker type is one part of its implementation. Correct group membership alone does not establish the submission capability inside Expense.

**Business approval and technical authority.** The person authorized to approve access is not necessarily the administrator authorized to configure it. A sponsor's approval does not grant the sponsor an Okta administrative role, and an administrator's technical ability does not supply missing business approval.

**Least privilege.** Give administrators the permissions and resource scope needed for their responsibility. Read-only visibility, help-desk recovery, application management, and organization administration are different capabilities. Check the role's actual permissions rather than guessing from its name, especially for group rules or shared policies.

**Exceptions.** An exception needs a defined person or population, capability, owner, approval, and end condition. Recording an expiry date does not automatically implement removal. Someone or something must act on that condition and verify the result.

**Acceptance evidence.** Check an eligible user, an ineligible user, and a change that should end access. One successful sign-in tests only part of the requirement. Existing direct assignments and application permissions can leave unintended access in place.

**Rollback.** Restoring configuration does not necessarily undo created accounts, changed permissions, or active sessions. Ask whether the configuration is correct again and whether its unintended effects have ended. Those need separate evidence.

## Make the Expense request concrete

R-14 is an approved proposed model, not a verified deployment. Northbridge's approved normal population is Finance employees. Submission access does not automatically confer approval authority; Daniel's approval capability is a separate decision. Executives receive no unstated extra capability.

Contractors need the defined sponsor and Expense-owner exception approval. Priya's Okta-managed profile remains distinct from Workday-led employees. The normal Finance-and-Employee rule is not, by itself, a complete employment-state or departure control. R-14 leaves Priya's specific exception undecided; the separate lost-phone scenario supplies its own access approval.

Expense's account process belongs to the application owner in this model. Do not invent SCIM support because another application has it. Likewise, Microsoft 365 awareness in this course includes the documented Office 365 methods: Secure Web Authentication (SWA), which uses stored application credentials, and WS-Federation, which exchanges identity information for federated sign-in. That guidance recommends WS-Federation when possible. Do not relabel that connector OIDC or assume its provisioning is SCIM; Entra identity, licensing, and permissions need their own consideration.

Test both sides of the eligibility condition: a Finance contractor without an exception and a Sales employee without another approved path should not receive the normal assignment. Testing only a Finance employee would not reveal an OR mistake.

## Keep recovery deliberate

For Priya's lost-phone situation, verify the caller through the approved process, use an authorized recovery action, and confirm enrollment and sign-in afterward. “Priya may have access” and “this caller is Priya” are different findings. The approved exception supplies the first; the recovery process must establish the second. A password reset also does not repair an unrelated protocol mismatch. Administrative recovery needs a protected route of its own.

## When a request reaches you

Name the owner of each business decision, configuration change, target permission, and remaining check. Recovering configuration does not automatically undo accounts, permissions, or sessions.

## Check your understanding

From memory, explain who decides eligibility, who may configure the change, and what verifies the caller in an authenticator-recovery request. Then name one positive eligibility test, two tests that distinguish AND from OR, and an outcome that restoring configuration alone cannot verify.

- What must be settled before implementing a contractor exception?
- Why does a successful eligible-user test leave important requirements untested?
- What might remain changed after a configuration rollback?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. Settle the person, permitted capability, sponsor and application-owner approval, responsible owner, end condition, and removal process. Do not alter contractor classification just to fit the normal employee rule.

2. You still need evidence that an ineligible user is excluded and that a move or departure removes the intended access. Existing exceptions and application permissions need attention too.

3. Accounts, permissions, and sessions can survive the configuration change. Identify and verify those effects separately instead of assuming rollback reverses them.

</details>

[Full lesson](../lessons/day-14-requirements-and-responsibilities.md) · [Exercises](../exercises/day-14.md) · [Lesson exercise answers](../self-checks/day-14.md) · [All recaps](index.md)

[Previous recap: Day 13](day-13.md) · [Next recap: Day 15](day-15.md)

[Practice questions with explanations](../question-bank/day-14.md)
