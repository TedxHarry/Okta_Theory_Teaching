---
title: "Day 9: self-check answers"
parent: Self-Checks
nav_order: 9
---

# Day 9: Self-check answers

Attempt the [exercises](../exercises/day-09.md) first. Keep the server-side web-client model consistent.

## 1. OAuth and identity

OAuth concerns authorized resource access. OIDC adds defined user-authentication information and ID token validation. An access token is intended for a resource server under its authorization contract; an ID token is intended for the client to validate authentication information. Readable user data does not make the two interchangeable.

Revisit [OAuth and OIDC answer related questions](../lessons/day-09-oidc.md#oauth-and-oidc-answer-related-questions).

## 2. Trace the participants

Expense's backend exchanges the code at the token endpoint, using its configured client authentication and PKCE verifier. Confidential client material stays protected on the backend, not embedded in a browser request. The public client ID names the application registration. The protected credential or key helps the backend prove Expense's application identity; it is not Devi's password or the ID token describing her authentication.

When the browser returns the code, it hands the next step to Expense's backend. The backend still needs a successful exchange, and Expense must validate the identity information, associate the intended account and establish its session. Receiving the code is progress through the journey; it does not show Devi has entered Expense.

**Revisit:** [Fix the client type before tracing the flow](../lessons/day-09-oidc.md#fix-the-client-type-before-tracing-the-flow)

## 3. Read the request

The request asks for a code, includes the openid scope for OIDC and profile for supported profile information, and specifies the return location. Requested scopes are not proof of granted permissions or the presence of every claim in every response.

Revisit [Read the request's purpose](../lessons/day-09-oidc.md#read-the-requests-purpose) if scope and claim became synonyms.

## 4. Distinguish the checks

State links the returned browser response to the client's transaction. Nonce links the ID token to the authentication request in this flow. PKCE uses the verifier to demonstrate the relationship to the challenge sent when the code was requested.

Ask which relationship each check establishes. State concerns the browser return, nonce the returned ID token, and PKCE the code exchange. Backend client authentication separately proves the registered application. This design requires both that authentication and PKCE; passing one does not excuse a missing result for the other. Application permissions still need their own evidence.

**Revisit:** [Three artifacts, three purposes](../lessons/day-09-oidc.md#three-artifacts-three-purposes)

## 5. Correct the return address

The application's emitted URI differs from the approved registered callback. Correct the stale request configuration, then verify the new request, callback correlation, exchange, ID token validation, and actual entry as appropriate.

No code was issued in the failing attempt. A token from another attempt cannot explain its nonexistent token-processing stage. Resetting a password does not repair the wrong return URI. The identity service must not redirect to the unregistered address even to deliver an error; it can display the error instead. The approved callback and registration already agree. Expense needs to stop asking for the obsolete address; adding that address to the registration would accommodate the wrong request instead of correcting it.

**Revisit:** [Find the redirect mismatch](../lessons/day-09-oidc.md#find-the-redirect-mismatch)

## 6. Interpret a decoded excerpt

The excerpt supplies claimed issuer, subject, and audience values that can be compared with expectations. It cannot establish complete validity. The actual token, applicable cryptographic checks, validity claims, transaction nonce, and validation outcome still matter.

Read issuer and subject together: "this subject, as identified by this issuer." A matching subject string from a different issuer does not automatically identify the same person. Compare the validated pair with Expense's intended account association.

**Revisit:** [Read claims without claiming validation](../lessons/day-09-oidc.md#read-claims-without-claiming-validation)

## 7. State the successful outcome precisely

O-2 completed the stated OIDC sign-in and reached Devi's intended Expense account. It does not establish an expense-approval permission or account-provisioning operation.

The SAML example carried an assertion inside a browser-delivered response. This OIDC example carries a code through the browser and returns tokens to the backend in a separate exchange. Both require application-side validation and account interpretation. In O-2, the successful exchange is one recorded step; the supplied ID token validation, account association, and actual entry support the broader sign-in conclusion. Without those later observations, a successful exchange alone would be insufficient.

Revisit [Compare with SAML](../lessons/day-09-oidc.md#compare-with-saml) and Day 1's authentication/authorization distinction.

## Optional comparison: a later failure

In a separate attempt O-3, request validation and token exchange succeeded, but the ID token audience names another client. Expense's validation report rejects it on that basis. How does this differ from O-1?

<details markdown="1">
<summary>Check the comparison</summary>

O-1 failed before code issuance because of the redirect mismatch. O-3 reached token validation and has a demonstrated ID-token audience mismatch. Compare the intended client, issuer, token, and correlated transaction; do not disable audience checks. Investigate why that token was delivered or selected for this client rather than assuming the old callback defect returned. A successful exchange alone did not establish an acceptable ID token.

</details>

[Return to Day 9](../lessons/day-09-oidc.md) · [Course home](../index.md)

[Revise Day 9](../revision/day-09.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-09.md) · [Day 9 recap](../revision/day-09.md) · [Reasoning exercises](../exercises/day-09.md)
