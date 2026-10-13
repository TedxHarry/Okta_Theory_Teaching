---
title: "Day 9: self-check answers"
parent: Self-Checks
nav_order: 9
---

# Day 9: Self-check answers

Attempt the [exercises](../exercises/day-09.md) first. Keep the server-side web-client model consistent.

## 1. OAuth and identity

OAuth concerns authorized resource access. OIDC adds defined user-authentication information and ID token validation. An access token is intended for a resource server under its authorization contract; an ID token is intended for the client to validate authentication information. Readable user data does not make the two interchangeable.

Revisit **OAuth and OIDC answer related questions**.

## 2. Trace the participants

Expense's backend exchanges the code at the token endpoint, using its configured client authentication and PKCE verifier. Confidential client material stays protected on the backend, not embedded in a browser request. The public client ID is a different value.

Code receipt precedes exchange, validation, account association, and session establishment. It does not establish application entry. Revisit **Follow one successful journey**.

## 3. Read the request

The request asks for a code, includes the openid scope for OIDC and profile for supported profile information, and specifies the return location. Requested scopes are not proof of granted permissions or the presence of every claim in every response.

Revisit **Read the request's purpose** if scope and claim became synonyms.

## 4. Distinguish the checks

State links the returned browser response to the client's transaction. Nonce links the ID token to the authentication request in this flow. PKCE uses the verifier to demonstrate the relationship to the challenge sent when the code was requested.

Here PKCE complements backend client authentication. None of these checks replaces all token validation or application authorization. Revisit **What PKCE adds**.

## 5. Correct the return address

The application's emitted URI differs from the approved registered callback. Correct the stale request configuration, then verify the new request, callback correlation, exchange, ID token validation, and actual entry as appropriate.

No code was issued in the failing attempt. A token from another attempt cannot explain its nonexistent token-processing stage. Resetting a password does not repair the wrong return URI. The identity service must not redirect to the unregistered address even to deliver an error; it can display the error instead. The approved callback and registration already agree, so the application's stale request configuration is the demonstrated discrepancy. Revisit **Find the redirect mismatch**.

## 6. Interpret a decoded excerpt

The excerpt supplies claimed issuer, subject, and audience values that can be compared with expectations. It cannot establish complete validity. The actual token, applicable cryptographic checks, validity claims, transaction nonce, and validation outcome still matter.

The subject is interpreted within its issuer. The same subject text from another issuer is not automatically the same identity. Revisit **Read claims without claiming validation**.

## 7. State the successful outcome precisely

O-2 completed the stated OIDC sign-in and reached Maya's intended Expense account. It does not establish an expense-approval permission or account-provisioning operation.

The SAML example carried an assertion inside a browser-delivered response. This OIDC example carries a code through the browser and returns tokens to the backend in a separate exchange. Both require application-side validation and account interpretation. In O-2, the successful exchange is one recorded step; the supplied ID token validation, account association, and actual entry support the broader sign-in conclusion. Without those later observations, a successful exchange alone would be insufficient.

Revisit **Compare with SAML** and Day 1's authentication/authorization distinction.

## Optional comparison: a later failure

In a separate attempt O-3, request validation and token exchange succeeded, but the ID token audience names another client. Expense's validation report rejects it on that basis. How does this differ from O-1?

<details>
<summary>Check the comparison</summary>

O-1 failed before code issuance because of the redirect mismatch. O-3 reached token validation and has a demonstrated ID-token audience mismatch. Compare the intended client, issuer, token, and correlated transaction; do not disable audience checks. Investigate why that token was delivered or selected for this client rather than assuming the old callback defect returned. A successful exchange alone did not establish an acceptable ID token.

</details>

[Return to Day 9](../lessons/day-09-oidc.md) · [Course home](../index.md)

[Revise Day 9](../revision/day-09.md): revisit the concepts, example, and questions without rereading the full lesson.
