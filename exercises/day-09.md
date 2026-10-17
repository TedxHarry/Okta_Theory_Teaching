---
title: "Day 9: exercises"
parent: Exercises
nav_order: 9
---

# Day 9: Reasoning exercises

Use the [lesson's](../lessons/day-09-oidc.md) confidential web-client architecture throughout. All observations are synthetic.

Locate the last completed stage before choosing the next evidence: request validation, code return, backend exchange, ID token validation, or application entry. A result from one stage does not establish the next.

## 1. OAuth and identity

A colleague says an access token is all Expense needs to establish an OIDC sign-in. Explain OAuth's purpose, OIDC's addition, and why ID and access tokens are not interchangeable.

## 2. Trace the participants

The browser has returned a code to Expense's callback. Which participant performs the next exchange in this architecture? Where should confidential client credentials be kept, and whose identity do they help the backend prove: Expense's or Devi's? Does receiving the code establish application entry?

## 3. Read the request

A request contains response_type code, scope openid profile, and Expense's registered callback. Explain each field. Does profile guarantee every user attribute in the ID token?

## 4. Distinguish the checks

Explain the purpose of state, nonce, and the PKCE verifier/challenge relationship. Does PKCE replace backend client authentication in Northbridge's chosen configuration?

## 5. Correct the return address

The approved and registered URI ends in /oidc/callback. The application sends /oidc/callback-old. Request validation rejects it and issues no code.

Locate the defect, propose a correction, and name the next verification steps. Why would a token from another attempt or a password reset be irrelevant to this demonstrated failure? Should the identity service redirect to the unregistered callback-old address just to deliver the error?

## 6. Interpret a decoded excerpt

An excerpt shows the expected iss, sub, and aud values, but contains no signature material, time claims, nonce, or validation result. What can you read, and what cannot you conclude? Why is sub interpreted with its issuer?

## 7. State the successful outcome precisely

O-2 has accepted request validation, a correlated code, successful backend exchange, valid ID token, correct account association, and actual Expense entry. No expense-approval permission or provisioning record is supplied.

Write a short supported conclusion and explain what remains unknown. Compare the message route with Day 8's SAML flow.

[Self-check answers](../self-checks/day-09.md) · [Course home](../index.md)

[Practice questions with explanations](../question-bank/day-09.md) · [Day 9 recap](../revision/day-09.md)
