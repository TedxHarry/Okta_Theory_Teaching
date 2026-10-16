---
title: "Day 13: exercises"
parent: Exercises
nav_order: 13
---

# Day 13: Reasoning exercises

Use the [lesson's](../lessons/day-13-policies-and-sessions.md) synthetic packets. P-3 is independent of P-1/P-2; S-13 concerns a session-ending action, not deactivation.

## 1. Separate the requirements

Daniel has an eligible Okta Verify enrollment, a valid Okta session, and an Expense assignment. What does each fact establish? Why do they not collectively prove that the current app authentication requirement or an expense-approval permission is satisfied?

## 2. Explain the expected challenge

In P-1, the correct rule matched, password evidence remains acceptable, and possession-factor freshness is insufficient. Push is issued but no response is accepted yet. Explain why another challenge is expected and what to investigate if Daniel cannot complete it.

## 3. Judge the successful follow-up

P-2 supplies accepted current proof, satisfied Okta requirements, completed OIDC validation, the correct account, and actual entry. State the outcome and two claims this evidence still does not justify.

## 4. Locate the configuration problem

In P-3, a broad matching rule appears above the approved restrictive rule and is recorded as the applied rule. What is wrong? What must be checked before changing it, and how should the intended selection be verified? Is this profile-source priority? If Daniel enters Expense through the broad rule, does that establish compliance with the approved authentication design?

## 5. Correlate the evidence

An investigator finds a success for Daniel in another transaction and a different application. They also find a current policy event without a usable session identifier. Explain why the first event cannot replace current evidence and why the second should not automatically be discarded. Distinguish event uuid, transaction.id, and externalSessionId. Must every operation within one Okta session have the same transaction identifier?

## 6. Explain the two sessions

In S-13, Okta session K-13 ends and cannot be reused, but Expense accepts a new protected request through E-LOCAL-13. Its owner confirms no new Okta sign-in occurred. What does this establish? Why is an expired ID token or an active-false account response not sufficient session-termination evidence?

## 7. Define the sign-out outcome

The requirement is to end both checked sessions. Name the unresolved work in S-13 and the evidence needed to close it. Contrast local logout with configured SLO. Explain why Daniel's session behavior cannot be presented as Jordan's proven root cause from Day 12.

[Self-check answers](../self-checks/day-13.md) · [Course home](../index.md)

[Practice questions with explanations](../question-bank/day-13.md) · [Day 13 recap](../revision/day-13.md)
