---
title: "Day 9 teaching explanations"
parent: "Day 9 practice bank"
grand_parent: "Revise, Test, and Learn"
nav_order: 1
---

# Day 9: Explanations

<details class="qb-answer" id="q01">
<summary>Q01. Two related purposes</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application that needs to identify the person signing in and may separately need permission to call a protected API, an interface used by software. How do OAuth 2.0 and OpenID Connect (OIDC) address these related purposes?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>OAuth provides a framework for authorizing access to protected resources. OIDC adds an identity layer, including an ID token and rules for validating user-authentication information.</p>
<p>Expense needs validated identity information for sign-in. A resource service separately evaluates the access token presented for a permitted resource request.</p>
<p>Follow the purpose to the receiver. The related protocols do not make their artifacts interchangeable or grant every application permission.</p>
</div>
<p><a href="../day-09.html#q01">Return to Q01</a> · <a href="../../lessons/day-09-oidc.html#oauth-and-oidc-answer-related-questions">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q02">
<summary>Q02. Which receiver checks it?</summary>
<p class="qb-question"><strong>Question:</strong> A business application uses OIDC for sign-in and receives an ID token and an access token. It can also call an intended protected resource service. Which receiver checks each artifact, and do readable user details make the access token a substitute for the ID token?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The OIDC client application validates the ID token for authentication information. The access token is presented to its intended resource server, often an API, which evaluates it under its own rules.</p>
<p>Readable user content does not change those purposes. Both tokens can arrive together while serving different receivers.</p>
<p>Name the artifact and receiving operation before selecting evidence. A resource-access value is not automatically the client's sign-in proof.</p>
</div>
<p><a href="../day-09.html#q02">Return to Q02</a> · <a href="../../lessons/day-09-oidc.html#oauth-and-oidc-answer-related-questions">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q03">
<summary>Q03. A token is not every outcome</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s Expense sign-in receives OIDC identity and access tokens from the company identity service. No account-management operation or expense-approval role is supplied. Does receiving those tokens automatically create an application account or grant approval rights?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The tokens have defined sign-in and resource-access purposes. Account preparation and business authorization are separate outcomes.</p>
<p>Expense still needs the intended account association and permissions for Maya's task. A token response is not a creation receipt or approval-role record.</p>
<p>Report the completed protocol stage accurately. If the request concerns usable access or a particular action, obtain the corresponding application evidence rather than extend the token result beyond its purpose.</p>
</div>
<p><a href="../day-09.html#q03">Return to Q03</a> · <a href="../../lessons/day-09-oidc.html#oauth-and-oidc-answer-related-questions">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q04">
<summary>Q04. Which client do you mean?</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s browser makes HTTP web requests, while Expense’s server-side backend acts as the OIDC application, exchanges a code, and validates identity information. Why can both be called a client in different contexts without referring to Maya’s user account?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Client names a participant's role in a particular exchange. The browser is an HTTP client; Expense is the OIDC client application in the sign-in protocol.</p>
<p>Its backend performs the code exchange and validation while the browser carries the redirects. The application registration is different from the person's account.</p>
<p>Name the exchange when using client. That keeps software responsibilities and user identity separate during investigation.</p>
</div>
<p><a href="../day-09.html#q04">Return to Q04</a> · <a href="../../lessons/day-09-oidc.html#fix-the-client-type-before-tracing-the-flow">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q05">
<summary>Q05. Why confidential?</summary>
<p class="qb-question"><strong>Question:</strong> Expense is an OIDC web application with a backend running on its servers. The backend can protect a configured credential or key and performs the code exchange. Why is this design a confidential client, and which work belongs outside the browser?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A confidential client can protect its client authentication material in this server-side design. The backend performs the exchange and identity validation without putting its confidential credential in a browser redirect.</p>
<p>The browser carries messages for the user journey, not every secret or backend operation.</p>
<p>Keep those participants distinct. A result from one stage cannot verify another, and other application designs should not be silently substituted for the supplied backend architecture.</p>
</div>
<p><a href="../day-09.html#q05">Return to Q05</a> · <a href="../../lessons/day-09-oidc.html#fix-the-client-type-before-tracing-the-flow">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q06">
<summary>Q06. Client ID is not a secret password</summary>
<p class="qb-question"><strong>Question:</strong> Expense’s OIDC registration has client ID nb-expense-web. Its backend separately authenticates at code exchange using its configured credential or key. What does the ID identify, and is the visible ID itself a password or proof that the exchange succeeded?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The ID names the application registration. It is not Maya's identity, a password, or an accepted client-authentication result.</p>
<p>The backend's configured authentication separately proves the client during exchange. Its confidential material should stay protected on the server side.</p>
<p>Identifying and authenticating the application are different facts. Inspect the actual exchange result rather than infer success from a familiar client identifier in the request.</p>
</div>
<p><a href="../day-09.html#q06">Return to Q06</a> · <a href="../../lessons/day-09-oidc.html#fix-the-client-type-before-tracing-the-flow">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q07">
<summary>Q07. Okta’s roles</summary>
<p class="qb-question"><strong>Question:</strong> In a stated OIDC connection, Expense is the client application and Okta applies the relevant requirements and issues responses and tokens. What does Okta’s authorization-server and OpenID-Provider role contribute, and what must Expense still do?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>As authorization server, Okta issues OAuth responses and tokens under the configured requirements. In OIDC it also acts as OpenID Provider supplying authentication information.</p>
<p>Expense still validates its returned ID token, associates the user with the intended local account, and establishes its application outcome.</p>
<p>These roles describe this connection. They do not make the provider's result evidence that every client-side validation or business permission succeeded.</p>
</div>
<p><a href="../day-09.html#q07">Return to Q07</a> · <a href="../../lessons/day-09-oidc.html#fix-the-client-type-before-tracing-the-flow">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q08">
<summary>Q08. Trace the intended journey</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. Describe the intended browser return, backend exchange, and application decision in order, without treating the design as proof of a completed attempt.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The browser carries code and state to Expense's registered callback. Expense checks the returned transaction, and its backend exchanges the code under the required client-authentication and PKCE checks.</p>
<p>The token response returns to the backend. Expense validates the ID token, selects the intended account, and establishes a session.</p>
<p>Those are intended stages, each needing actual result evidence. A route explains who acts next; it does not establish that every stage completed.</p>
</div>
<p><a href="../day-09.html#q08">Return to Q08</a> · <a href="../../lessons/day-09-oidc.html#follow-one-successful-journey">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q09">
<summary>Q09. Three locations</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. How do the authorization endpoint, token endpoint, and callback describe different addresses and operations?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The authorization endpoint receives the authorization request. The token endpoint receives the backend's code exchange. The callback is the registered application return location for the browser response.</p>
<p>An endpoint is an address for an operation. Reaching one does not establish the result at another.</p>
<p>Locate the completed stage and next participant. That prevents a browser-return observation from becoming proof that the backend obtained or validated tokens.</p>
</div>
<p><a href="../day-09.html#q09">Return to Q09</a> · <a href="../../lessons/day-09-oidc.html#follow-one-successful-journey">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q10">
<summary>Q10. The code is an intermediate artifact</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. The browser returns a code, but no exchange response, token validation, or session result is supplied. Why is code receipt an intermediate result rather than completed application sign-in?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>An authorization code is a temporary, single-use value exchanged for tokens. It is not the ID token the client validates for authentication information.</p>
<p>The backend exchange still has requirements and a result. The returned identity information then needs validation and an intended account association.</p>
<p>Report the code return as progress. Do not call a session established until its relevant application evidence exists.</p>
</div>
<p><a href="../day-09.html#q10">Return to Q10</a> · <a href="../../lessons/day-09-oidc.html#follow-one-successful-journey">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q11">
<summary>Q11. Not an MFA code or API credential</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. Is the returned authorization code something Maya types like an MFA code, or a value Expense should use directly to call a protected API?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither describes this architecture. The browser delivers the code to the callback, and the backend presents it to the token endpoint for exchange.</p>
<p>An MFA code is a different user authentication interaction. A resource call instead uses an appropriately issued access token under the receiver's rules.</p>
<p>The shared word code does not make the artifacts equivalent. Follow the actual purpose and recipient before interpreting what one result establishes.</p>
</div>
<p><a href="../day-09.html#q11">Return to Q11</a> · <a href="../../lessons/day-09-oidc.html#follow-one-successful-journey">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q12">
<summary>Q12. Session, code, and token</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. After successful validation the application establishes a session for continued use. Is that session another name for the authorization code or ID token?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The code enables the exchange, the ID token supplies authentication information for validation, and the session is the application's outcome for continuing interaction.</p>
<p>They are related but different objects. Check actual entry and session evidence rather than infer it from an intermediate artifact.</p>
<p>This also matters when testing a change: an old session may continue without exercising a new request, code exchange, or token-validation path.</p>
</div>
<p><a href="../day-09.html#q12">Return to Q12</a> · <a href="../../lessons/day-09-oidc.html#follow-one-successful-journey">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q13">
<summary>Q13. Must every prompt appear?</summary>
<p class="qb-question"><strong>Question:</strong> An OIDC application starts an authorization request through the company identity service. The applicable policies and existing authentication context determine the interaction. No screen trace is supplied. Must every request show a new password prompt and consent screen?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The actual interaction depends on the requirements and existing context. A simplified flow does not guarantee the same screens every time.</p>
<p>Inspect the identified attempt's records rather than invent prompts. The core stages still need their own request, return, exchange, and validation results.</p>
<p>Visible interaction is useful evidence, but the protocol journey cannot be reconstructed solely from an assumed standard screen sequence.</p>
</div>
<p><a href="../day-09.html#q13">Return to Q13</a> · <a href="../../lessons/day-09-oidc.html#follow-one-successful-journey">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q14">
<summary>Q14. Read the selected parameters</summary>
<p class="qb-question"><strong>Question:</strong> A fictional OIDC authorization request includes client_id nb-expense-web, response_type code, and redirect_uri https://expenses.example/callback. No request acceptance result is supplied. What purpose does each field describe, and what outcome remains unverified?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Client ID names the application's registration. Response type code asks for an authorization code. Redirect URI gives the requested browser return location.</p>
<p>They describe what the client asks for, not proof the server accepted it or issued a code. Compare the emitted values with the approved registration.</p>
<p>Configuration and the actual request can disagree. Reading these fields helps locate that comparison without turning the requested behavior into a completed result.</p>
</div>
<p><a href="../day-09.html#q14">Return to Q14</a> · <a href="../../lessons/day-09-oidc.html#read-the-requests-purpose">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q15">
<summary>Q15. Scope and claim</summary>
<p class="qb-question"><strong>Question:</strong> An OIDC request asks for scope openid profile. Returned information may contain named statements called claims, such as a subject identifier. How does the requested scope differ from the content actually returned, and is every imaginable profile field guaranteed?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Scope names requested access or information categories. Openid makes the request OIDC; profile requests the supported profile-claim category. A claim is information actually returned.</p>
<p>The request does not guarantee every possible profile field in every token. Inspect the returned content and its required validation.</p>
<p>Requested category and observed statement are different evidence. Neither by itself proves a business role such as expense approval.</p>
</div>
<p><a href="../day-09.html#q15">Return to Q15</a> · <a href="../../lessons/day-09-oidc.html#read-the-requests-purpose">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q16">
<summary>Q16. Profile is not an approval role</summary>
<p class="qb-question"><strong>Question:</strong> Expense uses OIDC sign-in. Maya’s request includes the profile scope and the returned identity information contains her name. No application approval decision or role is supplied. Does that identity detail prove she can approve another person’s expenses?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The name concerns identity information, not a business permission. Authentication and application authorization answer different questions.</p>
<p>If approval is required, establish the authorized capability and actual role or action result inside Expense. A sign-in protocol can identify someone without granting every function.</p>
<p>Keep the claim's purpose narrow. Readable profile data does not become authority simply because the application receives it.</p>
</div>
<p><a href="../day-09.html#q16">Return to Q16</a> · <a href="../../lessons/day-09-oidc.html#read-the-requests-purpose">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q17">
<summary>Q17. State’s return check</summary>
<p class="qb-question"><strong>Question:</strong> Expense starts an OIDC browser sign-in and sends a fresh state value with its authorization request. The browser response returns a state value with the code. Where is state checked, and what relationship does the comparison establish?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Expense compares the returned state with the transaction it started. This helps connect the browser response to the expected request.</p>
<p>The field's mere presence does not establish a matching result. Inspect the actual comparison outcome for the attempt.</p>
<p>Passing this check also does not verify code redemption or ID token validity. It belongs to one boundary in the larger journey, with separate results needed afterward.</p>
</div>
<p><a href="../day-09.html#q17">Return to Q17</a> · <a href="../../lessons/day-09-oidc.html#read-the-requests-purpose">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q18">
<summary>Q18. Nonce’s later check</summary>
<p class="qb-question"><strong>Question:</strong> Expense’s OIDC request sends both state and nonce. State returns with the browser response; nonce is later compared within the returned ID token. How do their check locations differ, and can matching state replace nonce validation?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Expense checks state at the browser-return stage. It checks nonce in the ID token against the value sent for this authentication request.</p>
<p>Matching one cannot replace the other. They relate messages at different points, even though both help connect evidence to the transaction.</p>
<p>Because nonce is sent in this scenario, its relevant comparison is required. Keep each field, check, and actual result attached to its stage.</p>
</div>
<p><a href="../day-09.html#q18">Return to Q18</a> · <a href="../../lessons/day-09-oidc.html#read-the-requests-purpose">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q19">
<summary>Q19. Verifier and challenge</summary>
<p class="qb-question"><strong>Question:</strong> Expense uses Proof Key for Code Exchange (PKCE) during OIDC code flow. Its backend creates a secret code verifier and sends a derived challenge with the authorization request. What does it retain, and what is supplied and checked during redemption?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It retains the verifier for the transaction, then supplies it at code exchange. The authorization server checks it against the earlier challenge associated with that code.</p>
<p>This ties redemption to the client's transaction proof. The verifier is not the user's password.</p>
<p>The first request sends the derived value, while the later operation presents the retained secret. Recognize both stages and inspect their outcomes rather than treat code arrival as complete authentication.</p>
</div>
<p><a href="../day-09.html#q19">Return to Q19</a> · <a href="../../lessons/day-09-oidc.html#what-pkce-adds">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q20">
<summary>Q20. A code without its verifier</summary>
<p class="qb-question"><strong>Question:</strong> An OIDC code exchange requires PKCE: the client first registers a challenge derived from a secret verifier, then must present the matching verifier when redeeming the code. Someone obtains the code without that verifier. What required proof is missing?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The person lacks the matching verifier checked against the earlier challenge. Code possession alone does not supply that required redemption proof.</p>
<p>PKCE helps protect against code interception or injection. The server still needs to perform the check for the relevant code and transaction.</p>
<p>This is one exchange requirement, not a replacement for every other validation. Identify which proof is required at each stage and obtain its actual result.</p>
</div>
<p><a href="../day-09.html#q20">Return to Q20</a> · <a href="../../lessons/day-09-oidc.html#what-pkce-adds">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q21">
<summary>Q21. What S256 names</summary>
<p class="qb-question"><strong>Question:</strong> An OIDC request uses code_challenge_method S256 for PKCE, which checks code redemption against a transaction verifier. Does S256 identify the user or an application permission, and what calculation role does it name?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It names the challenge method. A SHA-256 one-way cryptographic calculation and URL-safe encoding derive the challenge from the verifier.</p>
<p>The authorization request sends that derived challenge; the backend retains the verifier for redemption. The label is not a user account or role.</p>
<p>You need not calculate it to investigate the flow. Recognize the expected fields and check the actual exchange evidence when a result is missing or rejected.</p>
</div>
<p><a href="../day-09.html#q21">Return to Q21</a> · <a href="../../lessons/day-09-oidc.html#what-pkce-adds">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q22">
<summary>Q22. PKCE and client authentication</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a confidential OIDC client with a server-side backend that protects its credential or key. The supplied design requires both PKCE proof for code redemption and configured client authentication. Does using PKCE remove the client-authentication requirement?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The stated architecture uses both for different relationships. PKCE links the verifier to the code's earlier challenge; client authentication proves the backend client using its configured material.</p>
<p>Inspect the relevant results when the exchange fails. Neither check is the user's password validation.</p>
<p>Do not silently remove a requirement because another check exists. Interpret the attempted operation against the architecture and configuration actually supplied.</p>
</div>
<p><a href="../day-09.html#q22">Return to Q22</a> · <a href="../../lessons/day-09-oidc.html#what-pkce-adds">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q23">
<summary>Q23. Locate three checks</summary>
<p class="qb-question"><strong>Question:</strong> Expense starts OIDC requests with state, nonce, and a PKCE challenge. Its browser returns code and state; its backend exchanges the code with a verifier; an ID token is returned. Where are the three relationship checks performed?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Expense checks returned state at the browser response. The authorization server checks the PKCE verifier during code exchange. Expense compares nonce within the returned ID token.</p>
<p>They answer different transaction questions at different stages. Passing one does not establish the other two or remaining token validation.</p>
<p>Place the checks on the journey instead of treating them as interchangeable security words. The last completed stage helps identify which result to request next.</p>
</div>
<p><a href="../day-09.html#q23">Return to Q23</a> · <a href="../../lessons/day-09-oidc.html#what-pkce-adds">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q24">
<summary>Q24. Code, ID token, access token</summary>
<p class="qb-question"><strong>Question:</strong> In a server-side OIDC flow, a browser delivers an authorization code; the backend exchanges it for an ID token and access token. Match each artifact to code exchange, authentication-information validation by the client, or a protected-resource request.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The code is presented to the token endpoint to obtain the token response. The client validates the ID token for authentication information. The access token is presented to its intended resource server for resource access.</p>
<p>Each has a receiver and purpose. They are not interchangeable because they belong to one sign-in journey.</p>
<p>Name the artifact and operation before claiming a result. The appropriate receiver supplies the validation evidence for its boundary.</p>
</div>
<p><a href="../day-09.html#q24">Return to Q24</a> · <a href="../../lessons/day-09-oidc.html#three-artifacts-three-purposes">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q25">
<summary>Q25. Token received versus API used</summary>
<p class="qb-question"><strong>Question:</strong> Expense’s OIDC backend receives a token response containing an access token, which may be presented to an intended protected API. No API request or resource-server response is supplied. Has a successful resource call been established?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The response establishes receipt of the token, not that it was used or accepted by a resource service.</p>
<p>If a permitted call is part of the requirement, inspect its actual request and the intended receiver's result. The token needs to be suitable for that resource under its rules.</p>
<p>Receiving material for a possible later operation is not evidence the operation occurred. Keep the artifact and subsequent action distinct.</p>
</div>
<p><a href="../day-09.html#q25">Return to Q25</a> · <a href="../../lessons/day-09-oidc.html#three-artifacts-three-purposes">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q26">
<summary>Q26. Bearer’s meaning</summary>
<p class="qb-question"><strong>Question:</strong> A token response labels an access token Bearer. A bearer token may be presented to its intended resource service subject to validation. No resource request is supplied. What does the label mean, and does it establish successful use?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Possession is sufficient to present the token for use, subject to the receiver's validation. Treat a usable bearer value as sensitive.</p>
<p>The label does not establish receipt or acceptance by the resource service. That operation needs its own result.</p>
<p>Request relevant errors and identifiers without copying complete usable tokens into a ticket. The investigation needs evidence about the operation, not redistribution of its credential.</p>
</div>
<p><a href="../day-09.html#q26">Return to Q26</a> · <a href="../../lessons/day-09-oidc.html#three-artifacts-three-purposes">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q27">
<summary>Q27. Not valid for every API</summary>
<p class="qb-question"><strong>Question:</strong> Okta issues an access token for a configured client. Support wants to use it at another API whose intended audience, issuer agreement, scopes, and validation rules are unknown. Is issuance by the familiar identity service enough to establish that API will accept it?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The intended resource and validation contract determine where the token can be used. Issuer familiarity does not provide universal authorization.</p>
<p>Identify the actual receiving API and its requirements before interpreting the token's suitability. No successful call to the other service is supplied here.</p>
<p>Keep the issued artifact's purpose attached to its configuration. A token is not automatically valid everywhere a client wishes to send it.</p>
</div>
<p><a href="../day-09.html#q27">Return to Q27</a> · <a href="../../lessons/day-09-oidc.html#three-artifacts-three-purposes">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q28">
<summary>Q28. Read iss, sub, and aud</summary>
<p class="qb-question"><strong>Question:</strong> A fictional single-audience OIDC ID token has selected claims <code>iss = https://identity.example</code>, <code>sub = subject-maya</code>, and <code>aud = expense-web</code>. Claims are named statements in returned information. What do these three fields describe, and does reading them establish validity?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Iss names the issuer. Sub identifies the subject within that issuer. Aud names the intended audience, here the client registration expense-web.</p>
<p>They help compare the payload with expected settings. Reading them does not verify signature, validity, nonce, or the complete token.</p>
<p>Use content inspection for what the message says, and validation evidence for whether the client may rely on it. Correct-looking fields are not a complete acceptance result.</p>
</div>
<p><a href="../day-09.html#q28">Return to Q28</a> · <a href="../../lessons/day-09-oidc.html#read-claims-without-claiming-validation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q29">
<summary>Q29. Issuer and subject together</summary>
<p class="qb-question"><strong>Question:</strong> Expense associates a validated OIDC identity using the issuer and subject pair, iss and sub. An email-like attribute may also be returned. Why keep issuer context with sub instead of assuming email is an immutable identifier for everyone?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Sub identifies the subject within its issuer, so that context is part of the identity. The stated client uses the validated pair for its local account association.</p>
<p>Do not assume an email value is an immutable global key or automatically the configured matching field.</p>
<p>Validate the identity information and inspect the chosen association rule. Familiar formatting cannot replace the meaning supplied by the connection.</p>
</div>
<p><a href="../day-09.html#q29">Return to Q29</a> · <a href="../../lessons/day-09-oidc.html#read-claims-without-claiming-validation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q30">
<summary>Q30. Decoded JSON is not verification</summary>
<p class="qb-question"><strong>Question:</strong> Support decodes an OIDC ID token represented as a JSON Web Token (JWT) and sees the expected audience. Signature verification, issuer, time validity, and the nonce sent for the request have not been checked. Is complete ID token validation established?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Decoding reveals claims; it does not establish authenticity or every acceptance condition.</p>
<p>Use the actual token and trusted provider information for the required cryptographic validation, then the other applicable checks. The expected audience is one useful comparison, not the whole result.</p>
<p>Keep reading and validating separate. A selected JSON view cannot supply omitted signature or transaction evidence.</p>
</div>
<p><a href="../day-09.html#q30">Return to Q30</a> · <a href="../../lessons/day-09-oidc.html#read-claims-without-claiming-validation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q31">
<summary>Q31. JWT shape does not decide purpose</summary>
<p class="qb-question"><strong>Question:</strong> A data string has the familiar format of a JSON Web Token (JWT). Its issuer, purpose, audience, signature, and receiving contract are unknown. Does that shape automatically make it an acceptable ID token or access token?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Format is not enough to establish purpose or trust. The issued artifact and the receiver's requirements determine how it may be used.</p>
<p>Check who issued it, its intended recipient and transaction, validity, and required cryptographic verification. Reading its content is not acceptance evidence.</p>
<p>A token-shaped value can be inspected without being suitable proof. Attach conclusions to actual validation rather than to a recognizable appearance.</p>
</div>
<p><a href="../day-09.html#q31">Return to Q31</a> · <a href="../../lessons/day-09-oidc.html#read-claims-without-claiming-validation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q32">
<summary>Q32. A correct audience, wrong nonce</summary>
<p class="qb-question"><strong>Question:</strong> Expense sends a nonce in its OIDC request and requires the returned ID token to match it. The token’s audience agrees with the client ID, but nonce differs from the original value. Can audience matching substitute for that transaction check?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Audience names the intended client. Nonce connects the returned identity information to the authentication request in this scenario.</p>
<p>Read the actual validation result and transaction context before choosing a correction. The audience success does not erase the separate nonce discrepancy.</p>
<p>The checks protect different relationships. Preserve a passed condition while investigating the one that disagrees with the supplied requirement.</p>
</div>
<p><a href="../day-09.html#q32">Return to Q32</a> · <a href="../../lessons/day-09-oidc.html#read-claims-without-claiming-validation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q33">
<summary>Q33. Locate a demonstrated callback defect</summary>
<p class="qb-question"><strong>Question:</strong> Expense is an OIDC web application using Okta. The approved and registered callback is https://expenses.example/oidc/callback, but the actual request uses https://expenses.example/oidc/callback-old. Okta rejects it as unregistered; no code is issued or exchanged. Which side differs from the approved agreement, and where is the first demonstrated defect?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The application request emits the obsolete address. The registration already agrees with the approved callback, so the discrepancy is in the requested return location.</p>
<p>The correlated rejection identifies that as the failed request condition. The attempt stops before a code or token exchange.</p>
<p>Investigate why Expense produces that address. A later token defect cannot explain this attempt without inventing a stage it never reached.</p>
</div>
<p><a href="../day-09.html#q33">Return to Q33</a> · <a href="../../lessons/day-09-oidc.html#find-the-redirect-mismatch">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q34">
<summary>Q34. No error redirect to the bad address</summary>
<p class="qb-question"><strong>Question:</strong> Expense is an OIDC web application using Okta. The approved and registered callback is https://expenses.example/oidc/callback, but the actual request uses https://expenses.example/oidc/callback-old. Okta rejects it as unregistered; no code is issued or exchanged. Why must the provider not redirect the browser to that unregistered address merely to report the error?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Redirecting there would still use an unapproved destination. Request validation protects where the browser response may go.</p>
<p>The provider can display an error instead of returning to that address. No code exchange is established for this refused request.</p>
<p>The stopped journey is consistent with the supplied rejection. It is not evidence that a token response was lost later or that the application received a code.</p>
</div>
<p><a href="../day-09.html#q34">Return to Q34</a> · <a href="../../lessons/day-09-oidc.html#find-the-redirect-mismatch">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q35">
<summary>Q35. Choose the focused correction</summary>
<p class="qb-question"><strong>Question:</strong> Expense is an OIDC web application using Okta. The approved and registered callback is https://expenses.example/oidc/callback, but the actual request uses https://expenses.example/oidc/callback-old. Okta rejects it as unregistered; no code is issued or exchanged. Why correct Expense’s emitted address rather than register the obsolete address or reset the user’s authenticator?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The approved design and registration agree. Correct the application-side value that emits the wrong request, then verify a fresh attempt.</p>
<p>Adding the obsolete address would broaden the agreement to accommodate the error. Resetting an authenticator changes another stage without repairing the return destination.</p>
<p>Choose the action that follows the demonstrated discrepancy. A setting change is still a proposal or action until new request and outcome evidence verifies it.</p>
</div>
<p><a href="../day-09.html#q35">Return to Q35</a> · <a href="../../lessons/day-09-oidc.html#find-the-redirect-mismatch">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q36">
<summary>Q36. Do not borrow another attempt’s token</summary>
<p class="qb-question"><strong>Question:</strong> Expense is an OIDC web application using Okta. The approved and registered callback is https://expenses.example/oidc/callback, but the actual request uses https://expenses.example/oidc/callback-old. Okta rejects it as unregistered; no code is issued or exchanged. Support also finds an ID token from a different attempt with a suspicious audience. Can that separate token establish a token-audience cause for this rejected request?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. This request issued no code and had no exchange, so it did not reach token processing.</p>
<p>The other token has its own scope and attempt. It may deserve inspection there, but it cannot provide a message this request never obtained.</p>
<p>Locate the last demonstrated stage. The request rejection already supplies the relevant return-address defect and focused next investigation.</p>
</div>
<p><a href="../day-09.html#q36">Return to Q36</a> · <a href="../../lessons/day-09-oidc.html#find-the-redirect-mismatch">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q37">
<summary>Q37. Follow linked application-entry evidence</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. A new correlated attempt uses the approved callback, verifies returned state, completes authenticated exchange with matching PKCE verifier, validates ID token including nonce, selects Maya’s account, and records Expense entry. No approval-role or provisioning result is supplied. What outcome is verified?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The linked results verify application entry for the checked attempt. They cover the request, browser return, backend exchange, identity validation, account association, and session outcome.</p>
<p>Expense-approval permission and account-management operations remain unestablished. They need separate evidence if part of the business request.</p>
<p>This supports more than a saved configuration action because actual results span the journey. Its conclusion still stops at the outcomes supplied.</p>
</div>
<p><a href="../day-09.html#q37">Return to Q37</a> · <a href="../../lessons/day-09-oidc.html#verify-the-correction-through-the-remaining-stages">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q38">
<summary>Q38. Callback corrected, follow-up incomplete</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. After a proposed correction, the request uses the approved registered callback and is accepted. No returned code, backend exchange, token validation, or session evidence is supplied. Is full sign-in verified?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Only the request stage is verified. The accepted address is useful progress, not a result for every later operation.</p>
<p>Ask for the next missing code return and then the relevant exchange and application evidence. Do not treat the intended flow as observed completion.</p>
<p>A corrected request can coexist with an unknown final outcome. Keep the success scoped and the verification plan clear.</p>
</div>
<p><a href="../day-09.html#q38">Return to Q38</a> · <a href="../../lessons/day-09-oidc.html#verify-the-correction-through-the-remaining-stages">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q39">
<summary>Q39. Code returned, exchange failed</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. This flow requires PKCE and backend client authentication. Code and state return correctly, but the exchange fails with no detailed cause supplied. What result should support inspect next?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Inspect the exchange error, client-authentication result, and PKCE check for the relevant transaction. The earlier browser return does not establish those backend requirements passed.</p>
<p>Request useful identifiers and outcomes without distributing client secrets or complete usable tokens.</p>
<p>The failed boundary is known while its cause remains unresolved. Detail from that operation distinguishes the appropriate correction instead of reopening an already successful return-address step.</p>
</div>
<p><a href="../day-09.html#q39">Return to Q39</a> · <a href="../../lessons/day-09-oidc.html#verify-the-correction-through-the-remaining-stages">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q40">
<summary>Q40. Compare the browser’s return</summary>
<p class="qb-question"><strong>Question:</strong> Compare two supplied browser sign-in designs: SAML delivers a response containing identity assertions to an application receiving service; server-side OIDC returns a code to a callback and then exchanges it at the backend for tokens. What happens after each return, and are the messages interchangeable?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The SAML receiver validates the assertion under its connection agreement. The OIDC backend first exchanges the code and then validates the ID token and transaction.</p>
<p>Both need the intended account association and actual application outcome. Their artifacts and checks are different, so the browser returns cannot be substituted for one another.</p>
<p>Neither design by itself proves account creation or every business permission. Follow the protocol actually supplied.</p>
</div>
<p><a href="../day-09.html#q40">Return to Q40</a> · <a href="../../lessons/day-09-oidc.html#compare-with-saml">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q41">
<summary>Q41. Compare agreement and request</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. The application owner and identity-service administrator have registration settings and an actual request. What should they compare before changing a shared connection?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Compare client identifier, approved sign-in redirect URI, intended grant or flow, and configured client-authentication method with the actual application values and exchange.</p>
<p>First identify the deployment and shared scope. One registration may serve more than the user or instance named in a ticket.</p>
<p>Saved configuration does not prove what running software emitted. Keep agreement, actual message, and relevant result together before selecting and verifying a change.</p>
</div>
<p><a href="../day-09.html#q41">Return to Q41</a> · <a href="../../lessons/day-09-oidc.html#read-the-registration-as-an-agreement">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q42">
<summary>Q42. An old session after a fix</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. A callback-setting change is saved, and Maya continues using an older Expense session. No fresh code-flow attempt is recorded. Does the old session’s working page prove the new request and exchange configuration?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The old session may not exercise the changed sign-in path. It does not supply a new request, code return, exchange, or validation result.</p>
<p>Verify a fresh attempt through the stages affected by the change and the intended application entry. Keep that separate from continuing use through an established session.</p>
<p>Both observations can be valid while answering different questions. Test the changed relationship rather than a path that avoids it.</p>
</div>
<p><a href="../day-09.html#q42">Return to Q42</a> · <a href="../../lessons/day-09-oidc.html#read-the-registration-as-an-agreement">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q43">
<summary>Q43. Repair an overbroad closure</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. A correlated attempt completes the code exchange and ID token validation, identifies Maya’s account, and records entry. No provisioning operation or expense-approval capability is supplied. Improve: “She signed in, so provisioning and approval rights are fixed.”</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “The checked OIDC flow completed and Maya entered her intended Expense account. A provisioning operation and expense-approval permission were not established by this follow-up.”</p>
<p>That preserves the sign-in success without adding unrelated account-management or authorization results.</p>
<p>If those outcomes belong to the request, obtain their relevant evidence separately. One protocol journey can work while another business requirement remains unverified.</p>
</div>
<p><a href="../day-09.html#q43">Return to Q43</a> · <a href="../../lessons/day-09-oidc.html#read-the-registration-as-an-agreement">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q44">
<summary>Q44. Explain Maya’s journey</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application using OIDC with Okta. Its server-side backend exchanges authorization codes and validates ID tokens; Maya’s browser carries redirects. First attempt: an obsolete unregistered callback is rejected before code issuance. New follow-up: the approved address, state, authenticated PKCE exchange, ID token checks, intended account, and entry all succeed. Permission results are not supplied. Explain both outcomes to Maya in friendly language.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>You could say: “Expense first asked the identity service to return you to an old address that was not approved, so that request stopped before a code was issued. The checked follow-up used the approved address, completed the exchange, validated your identity information, and let you enter your intended account.”</p>
<p>Keep the permission question separate if it still needs checking.</p>
<p>The two explanations follow their own evidence without treating the later success as what happened in the first attempt.</p>
</div>
<p><a href="../day-09.html#q44">Return to Q44</a> · <a href="../../lessons/day-09-oidc.html#read-the-registration-as-an-agreement">Revisit the lesson</a></p>
</details>

[All Day 9 questions](../day-09.md) · [Question bank](../index.md) · [Course home](../../index.md)
