---
title: "Day 7: Authenticators and MFA"
parent: Revision Guide
nav_order: 7
---

# Day 7 revision: Authenticators and MFA

“Okta Verify is enabled” and “Daniel completed verification” describe different things. Keep the steps between them visible, and many confusing MFA tickets become easier to explain.

## The concepts to keep with you

**Authenticator.** An authenticator provides a way to prove identity. Okta Verify is one example. A supported method describes how it is used, such as Push, a one-time code, or FastPass. Those methods do not all work in the same way.

**Factor type and MFA.** Factor types describe kinds of evidence, such as something you know, something you possess, or a biometric characteristic. Multifactor authentication uses more than one factor type. Two passwords are still knowledge evidence. Counting screens or prompts is not a reliable way to count factors; a supported interaction can satisfy multiple requirements.

**Availability, installation, and enrollment.** Availability means the organization allows the authenticator. Installation puts the software on a device. Enrollment registers it for the relevant user and organization. None of those alone proves it was successfully used in the current attempt.

**Challenge and accepted proof.** Sending a Push challenge is a request for verification. You still need its result. A notification might not arrive, might expire, or might be denied. Do not record successful verification merely because a challenge was issued.

**Enrollment requirements and sign-in requirements.** These answer different questions: what must the user register, and what proof must this attempt supply? Optional enrollment does not mean a method can never be required in a particular access situation.

**FastPass.** FastPass uses cryptographic proof through Okta Verify and can support passwordless, phishing-resistant authentication in the supported configuration and context. It is not another name for Push. Read the actual method and verification result rather than assuming which device interaction occurred.

## Return to Daniel's three situations

In D-1, Daniel's password is accepted, but he has not enrolled Okta Verify for Northbridge. An enrollment step is consistent with that state.

In D-2, he is enrolled and a Push challenge is issued, but there is no accepted proof. Investigate that challenge's outcome. Re-enrollment is not automatically the answer.

Exercise 7 supplies a separate synthetic follow-up, D-3, with accepted password and Push results and a recorded decision that the requirement was satisfied. You can say the stated authentication requirement was met. You still cannot infer successful application entry or an approval permission. The D-3 result does not establish the cause of D-2's missing accepted response.

Also remember that a FastPass attempt does not establish that an AD password was checked. Follow the method actually used, rather than borrowing evidence from another sign-in path.

## When a request reaches you

Inspect the enrolled organization and method before resetting anything. Replacement requires the approved recovery checks, a new enrollment, and a permitted sign-in. An issued challenge alone does not establish successful proof.

## Check your understanding

From memory, explain the different evidence in D-1, D-2, and the exercise's D-3 packet. For each, separate enrollment, accepted proof for the attempt, and application access. Then name the next check where a result is still missing.

- What is missing between “enrolled” and “successfully authenticated”?
- Why do two prompts not necessarily mean two factor types?
- What can you conclude when the required proof is accepted, and what remains separate?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. Enrollment registers the authenticator. You still need accepted proof from the current attempt that satisfies the applicable requirement.

2. Prompts are interactions, while factors are types of evidence. Two knowledge prompts do not become two factor types just because there are two screens.

3. You can say the stated authentication requirement was met. Application entry and permissions still require their own evidence.

</details>

[Full lesson](../lessons/day-07-authenticators-enrollment-mfa.md) · [Exercises](../exercises/day-07.md) · [Lesson exercise answers](../self-checks/day-07.md) · [All recaps](index.md)

[Previous recap: Day 6](day-06.md) · [Next recap: Day 8](day-08.md)

[Practice questions with explanations](../question-bank/day-07.md)
