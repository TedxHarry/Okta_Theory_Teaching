---
title: "Day 9: OIDC"
parent: Revision Guide
nav_order: 9
---

# Day 9 revision: OIDC

Keep one picture in mind: the browser brings a code back to Expense, and Expense's backend exchanges that code before validating the identity information. The code itself is not the completed sign-in.

## The concepts to keep with you

**OAuth and OpenID Connect.** OAuth concerns authorized access to resources. OpenID Connect, or OIDC, adds identity information for sign-in, including an ID token. Northbridge's Expense example uses a confidential backend client and the Authorization Code flow with PKCE.

**Client.** Expense is the OIDC client. Its backend can protect client credentials. The browser is an HTTP client while carrying requests, but that does not make it the OIDC client in this design.

**Authorization code.** This is a short-lived, single-use value returned through the browser to the configured callback. It is exchanged at the token endpoint. It is neither an MFA code nor an access token.

**Request parameters.** `client_id` identifies the client and is not a secret. `response_type=code` requests this flow. `scope=openid` requests OIDC behavior; requesting `profile` does not guarantee every conceivable profile claim. The redirect URI must match an approved registration.

**State, PKCE, and nonce.** State helps the client connect the browser response to the attempt it started. PKCE, Proof Key for Code Exchange, uses a secret random verifier kept by Expense. Expense sends a derived challenge first, then supplies the verifier during code exchange so Okta can check the relationship. Nonce connects the ID token to the client's authentication request. These checks have different jobs and do not replace each other or the backend's client authentication.

**ID token and access token.** The ID token provides authentication information for the client. The access token is for authorized access to a resource. Neither should be substituted casually for the other.

**Claims and validation.** Claims are statements in a token, such as issuer (`iss`), subject (`sub`), and audience (`aud`). A subject is interpreted within its issuer. A JSON Web Token (JWT) is a format for representing claims. Decoding one exposes its contents; it does not establish the signature, expected issuer and audience, validity, or other required checks.

## Follow the actual boundary

The browser visits the authorization endpoint and returns a code to Expense's callback. Expense's backend exchanges it with the required client authentication and PKCE verifier. Expense validates the ID token and handles its account and local session.

In the first lesson packet, O-1, the request uses an old callback instead of the registered callback. It is rejected before a code or tokens are issued. Fix the request against the approved design rather than resetting the user's password or casually registering the old address. The identity service must not send even an error response to that unregistered callback.

In the linked successful follow-up O-2, the approved request, correlated code return, backend exchange, ID token validation, and application entry are confirmed. Approval permissions and provisioning are still separate. An accepted sign-in does not prove that a new account was created by this flow.

The self-check's optional O-3 packet is separate: its exchange succeeds, but Expense rejects the ID token because its audience names another client. That is a later validation failure, not evidence that O-1's callback problem returned.

## When a request reaches you

Compare the actual request with the approved client registration. Fix an obsolete callback request rather than casually adding it. An exchange failure needs backend evidence; preserve secrets when collecting it.

## Check your understanding

From memory, trace what the browser carries and what the backend exchanges and validates. Then compare where O-1 stops, how far O-2 is verified, and where the optional O-3 fails. Name the evidence for each boundary.

- Which part travels through the browser, and which exchange happens at the backend?
- Why are state, PKCE, and nonce complementary?
- Why would token debugging be premature for the rejected callback request?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. The browser carries the authorization request and returned code. Expense's backend exchanges the code using its client authentication and PKCE verifier, then validates the ID token.

2. State connects the browser response to the attempt, PKCE binds code exchange to the verifier, and nonce connects the ID token to the authentication request. Each checks a different relationship.

3. The callback mismatch stops the request before code or token issuance. First correct the request against the approved registration; there is no issued token from this attempt to debug.

</details>

[Full lesson](../lessons/day-09-oidc.md) · [Exercises](../exercises/day-09.md) · [Lesson exercise answers](../self-checks/day-09.md) · [All recaps](index.md)

[Previous recap: Day 8](day-08.md) · [Next recap: Day 10](day-10.md)
