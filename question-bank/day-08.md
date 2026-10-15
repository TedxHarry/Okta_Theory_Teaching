---
title: "Day 8 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 8
---

# Day 8: Questions

## Federation and participant roles

<a id="q01"></a>

### Q01. Explain federation

<p class="qb-question"><strong>Question:</strong> Maya signs in to Salesforce, a business application, through Okta, her company’s identity service. Their configured SAML connection exchanges identity information under agreed validation rules. Why can Salesforce rely on that information without receiving Maya’s password?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>This is federated sign-in: the application relies on identity information from another service under a configured trust relationship. SAML, Security Assertion Markup Language, supplies a standard for that exchange.</p>
<p>Okta performs the applicable checks and issues information Salesforce must validate. Trust does not mean accepting any message claiming to be from Okta.</p>
<p>Keep both jobs in view. The identity-service result and the application's acceptance are separate outcomes.</p>
</div>
</details>

<a id="q02"></a>

### Q02. Assign the roles

<p class="qb-question"><strong>Question:</strong> In a SAML connection, Okta checks Maya’s identity and issues sign-in information; Salesforce validates it and decides application entry; Maya’s browser carries messages between them. Which system is the identity provider (IdP), which is the service provider (SP), and what authority does the browser have?</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Okta is the IdP supplying identity information. Salesforce is the SP receiving and validating it. The browser carries the exchange; it does not decide whether Maya should be admitted.</p>
<p>The application still identifies its account and controls entry and permissions. These roles describe the stated connection rather than permanent labels for every product.</p>
<p>Name each participant's responsibility before interpreting its result. Delivery by the browser cannot replace the SP's acceptance evidence.</p>
</div>
</details>

<a id="q03"></a>

### Q03. What is not sent?

<p class="qb-question"><strong>Question:</strong> Active Directory (AD) accepts Maya’s password during an earlier credential check. Okta then provides SAML identity information to Salesforce through her browser. In this configured federation flow, does Salesforce receive that AD password?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It receives an assertion about identity and authentication, not Maya's directory password.</p>
<p>An assertion is a set of statements the application evaluates under its trusted connection. The earlier credential check and the later message exchange are different steps.</p>
<p>Knowing AD accepted a password does not show Salesforce accepted the assertion. Follow the received information and validation result instead of treating the federation message as another copy of the password.</p>
</div>
</details>

## Requests, responses, and assertions

<a id="q04"></a>

### Q04. Three objects, three jobs

<p class="qb-question"><strong>Question:</strong> Salesforce starts a SAML sign-in by sending an AuthnRequest through the browser to Okta. After applicable checks, Okta returns a successful SAML response containing an assertion. How do these three objects differ in purpose?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The AuthnRequest asks the identity provider to authenticate under the connection's requirements. The response is the enclosing reply. The assertion inside it carries statements about the user and authentication, with conditions on use.</p>
<p>Those objects are related, not interchangeable. A request is not the proof it asks for, and the enclosing reply is not identical to its contents.</p>
<p>Salesforce still validates what arrives before using the identity information.</p>
</div>
</details>

<a id="q05"></a>

### Q05. Protocol success and SP rejection

<p class="qb-question"><strong>Question:</strong> Okta returns a SAML response with protocol-level success, but Salesforce reports that the contained assertion fails an application validation requirement. Can both results be correct, and does the success force Salesforce to admit Maya?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Both can be correct. The response status does not require the receiving application to accept information that fails its checks.</p>
<p>Salesforce compares the message with the trusted connection, intended audience, validity, and identity requirements. A plausible username cannot override another failed condition.</p>
<p>Keep the response result and receiving decision separate. The reply gives the application material to evaluate, not permission to ignore its validation contract.</p>
</div>
</details>

<a id="q06"></a>

### Q06. A readable claim

<p class="qb-question"><strong>Question:</strong> A support analyst reads Maya’s name in a SAML assertion, a statement supplied for federated sign-in. No signature verification, intended-audience, time, or acceptance result is supplied. What remains unknown before the application can trust that statement?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It still needs to establish the required signed content's origin and integrity, intended use, and applicable conditions. Reading a claim does not prove those properties.</p>
<p>Use the connection's trusted configuration and actual validation evidence. The visible name helps locate content, but it cannot show who produced it or whether this attempt may use it.</p>
<p>Distinguish readable information from acceptable proof. The receiving system must make its own validation decision.</p>
</div>
</details>

## Follow the browser delivery

<a id="q07"></a>

### Q07. Trace an SP-initiated flow

<p class="qb-question"><strong>Question:</strong> Maya begins at Salesforce, a business application configured to use Okta for SAML identity checks. Salesforce starts by sending an authentication request through her browser. Describe the simplified service-provider-initiated journey and where the application decides entry.</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The browser carries Salesforce's request to Okta. After the applicable checks, Okta supplies a response that the browser delivers back to Salesforce.</p>
<p>Salesforce validates the information, matches the intended account, and decides access. It is SP-initiated because the service provider began the exchange.</p>
<p>That describes the intended route, not a completed incident trace. Actual evidence is needed to establish which stages occurred for the identified attempt.</p>
</div>
</details>

<a id="q08"></a>

### Q08. Who carries the final message?

<p class="qb-question"><strong>Question:</strong> Maya’s SAML sign-in uses browser HTTP POST delivery from Okta to Salesforce. Okta can return an HTML form containing the encoded response in a hidden SAMLResponse field. How does the message travel, and must Maya type the assertion herself?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The browser submits the form to the application's configured receiving service, often automatically. Maya normally does not manually enter the assertion.</p>
<p>SAMLResponse is the field carrying the encoded message in this example. Readable XML used for inspection is the message content, not a user form to fill in.</p>
<p>Form submission establishes a delivery operation to investigate. Salesforce's validation result still determines whether that information is accepted.</p>
</div>
</details>

<a id="q09"></a>

### Q09. What the ACS does

<p class="qb-question"><strong>Question:</strong> Salesforce receives a SAML sign-in response at its Assertion Consumer Service (ACS), whose configured endpoint is the receiving address. Delivery is confirmed, but application validation and account matching are not supplied. What does reaching the ACS establish?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It establishes where the response arrived. The ACS receives it for the application's sign-in processing.</p>
<p>Arrival does not establish validation or identification of the intended account. The message can reach the right address while failing a different acceptance requirement.</p>
<p>Keep receiving and accepting separate. Obtain the relevant application results before reporting entry, rather than make a delivery observation supply every later outcome.</p>
</div>
</details>

<a id="q10"></a>

### Q10. POST is not account creation

<p class="qb-question"><strong>Question:</strong> Maya already has an active Salesforce account. In her configured SAML sign-in, the browser POSTs a response to the application’s ACS receiving endpoint; no account creation occurs in this stated example. Does the HTTP POST itself prove a new account was created?</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. POST describes a message operation. Here its purpose is delivering sign-in information for validation, not a creation result.</p>
<p>The question supplies an existing account and no creation in the journey. Preserve those facts instead of inferring another operation from the method.</p>
<p>Some applications have separately supported sign-in-time account behavior, but that needs configuration and evidence. The delivery method alone cannot establish it.</p>
</div>
</details>

<a id="q11"></a>

### Q11. Where the flow starts

<p class="qb-question"><strong>Question:</strong> A SAML application can support launching from the identity provider, such as Okta, or starting at the service provider, such as Salesforce. How do IdP-initiated and SP-initiated starts differ, and does either remove application validation?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>An IdP-initiated launch starts at the identity provider, rather than with the same authentication request from the application. An SP-initiated journey starts at the service provider.</p>
<p>Support and validation details depend on the integration. A different starting point does not remove the application's obligation to check the response.</p>
<p>Identify the actual launch before interpreting the exchange. Neither route is a reason to ignore audience, signing trust, or account matching.</p>
</div>
</details>

<a id="q12"></a>

### Q12. Every prompt every time?

<p class="qb-question"><strong>Question:</strong> A simplified SAML flow includes the stage “Okta performs applicable authentication checks.” No prompt-by-prompt trace or existing-session context is supplied. Does that description prove every application launch repeats a password and every additional factor?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The interaction depends on the applicable requirements and existing context. A logical stage does not prescribe the same screens for every launch.</p>
<p>Read the evidence for the actual attempt rather than invent repeated proof requests. Existing authentication may affect which interactions occur.</p>
<p>The receiving application still validates the returned information. The absence of a particular prompt is not, by itself, an acceptance result or a policy defect.</p>
</div>
</details>

## Configuration and identifiers

<a id="q13"></a>

### Q13. What metadata communicates

<p class="qb-question"><strong>Question:</strong> Okta and a business application use SAML metadata to communicate identifiers, endpoints, and signing certificates for their connection. A metadata document is present, but no actual sign-in message or acceptance result is supplied. What does metadata contribute?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It communicates connection details forming the intended agreement. Some integrations exchange a document; others configure the relevant values separately.</p>
<p>The actual message still has to satisfy that agreement. Metadata presence does not show what a response contained or whether the application accepted it.</p>
<p>Keep expected configuration beside observed values. That comparison gives the document practical meaning without turning it into proof of a successful attempt.</p>
</div>
</details>

<a id="q14"></a>

### Q14. Identifier or receiving address?

<p class="qb-question"><strong>Question:</strong> A SAML connection has an entity ID that looks like a web URL and a separate ACS receiving URL. No rule says they are the same address. Must the entity ID be the endpoint to which the browser delivers the response?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Entity ID identifies a SAML participant. Its URL-like shape does not automatically make it a receiving endpoint.</p>
<p>The ACS URL answers where the response is delivered. For the stated single-connection model, the service-provider identifier supplies the expected audience, which describes the intended service.</p>
<p>Read each value by its job. Similar-looking strings can identify different relationships in the same exchange.</p>
</div>
</details>

<a id="q15"></a>

### Q15. Four values with different jobs

<p class="qb-question"><strong>Question:</strong> A SAML sign-in connection records issuer, audience, ACS, and NameID. Match them to these questions: who claims to issue the information, which service may use it, where the response is received, and which user it describes under the chosen matching rule.</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Issuer names the issuing party. Audience names the intended service. ACS is the receiving service and its address. NameID supplies the user identifier interpreted under the connection's matching rule.</p>
<p>Each field answers a different question. A correct user value cannot compensate for the wrong intended application.</p>
<p>Compare the actual message with the approved settings field by field. That locates a discrepancy without changing unrelated correct information.</p>
</div>
</details>

<a id="q16"></a>

### Q16. Right address, wrong audience

<p class="qb-question"><strong>Question:</strong> Maya’s SAML response reaches Salesforce’s production ACS. Its assertion instead names the test service as audience, where production is expected. Audience identifies which service may use the assertion. Can delivery be correct while that separate acceptance condition is wrong?</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Yes. The receiving address and intended audience are different concepts. Arrival at production does not automatically make the assertion appropriate for production.</p>
<p>Compare the actual audience with the intended connection and obtain the application's validation report to establish its result.</p>
<p>Keep correct delivery and the visible mismatch together. One successful boundary does not replace another requirement, and the mismatch alone does not supply every other validation outcome.</p>
</div>
</details>

<a id="q17"></a>

### Q17. The chosen matching rule

<p class="qb-question"><strong>Question:</strong> A company configures Salesforce to match a SAML NameID against the application username. Another deployment may choose a separate Federation ID. Is username matching universal, and what should be checked before comparing a user value?</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It is not universal. Inspect the chosen rule for the actual connection. Federation ID is a separate user identifier the application can use for federated matching.</p>
<p>NameID carries a value, but the application's configuration determines which record field it must match. Email-like text is not automatically the correct identifier.</p>
<p>Keep the intended matching rule beside the observed values. Otherwise a comparison can answer the wrong identity question.</p>
</div>
</details>

<a id="q18"></a>

### Q18. Keep test and production separate

<p class="qb-question"><strong>Question:</strong> Support investigates a production SAML failure but has expected settings from a test application and a response whose originating connection is unverified. Why confirm the instance before comparing issuer, audience, receiving address, or user mapping?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A value correct for test can be wrong for production. The expected agreement and observed message must belong to the intended connection.</p>
<p>First establish the instance and relevant attempt. Then compare the fields according to their purposes and use validation evidence.</p>
<p>Mixing environments can create a misleading diagnosis even when individual settings are valid somewhere. Configuration context is part of the evidence, not a detail to add after choosing the cause.</p>
</div>
</details>

## Read the XML evidence

<a id="q19"></a>

### Q19. Read a named element

<p class="qb-question"><strong>Question:</strong> A selected fictional SAML XML element is <code>&lt;saml:NameID&gt;maya.rao@northbridge.example&lt;/saml:NameID&gt;</code>. XML uses opening and closing tags to surround values. What user identifier does this element claim, and what does reading it leave unverified?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Its value is maya.rao@northbridge.example. The tags name the element as NameID in the declared SAML vocabulary.</p>
<p>Compare that claim with the connection's chosen account-matching rule and approved identifier. Reading the text does not establish that the full message was authentic or accepted.</p>
<p>Content inspection is useful for locating values. It is not the same job as application validation.</p>
</div>
</details>

<a id="q20"></a>

### Q20. What the prefix means

<p class="qb-question"><strong>Question:</strong> A SAML XML excerpt declares xmlns:saml and uses a tag named saml:NameID with a user value inside it. Does the saml: prefix identify the user, or what vocabulary role does it serve?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It refers to the declared namespace, the vocabulary to which the element name belongs. The NameID value, not the prefix, supplies the user identifier.</p>
<p>You do not need to memorize the namespace address to read the selected field. Identify the named element and the text it contains.</p>
<p>Structure helps interpret the message, while the actual matching and validation evidence establish whether the application can use it.</p>
</div>
</details>

<a id="q21"></a>

### Q21. Find a visible audience discrepancy

<p class="qb-question"><strong>Question:</strong> For a production SAML connection, expected audience is <code>https://app.example/entity/prod</code>. A selected assertion shows <code>https://app.example/entity/test</code>, while issuer and NameID match their expected text. No validation report is supplied. What visible discrepancy exists, and is its causal role already proven?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The audience names test where production is expected. That is a visible mismatch worthy of investigation.</p>
<p>The excerpt does not establish the application's rejection reason or all other checks. Obtain the correlated validation report before making that causal claim.</p>
<p>Inspection and confirmed diagnosis are distinct steps. The selected fields can locate a problem to check without supplying the complete outcome of the attempt.</p>
</div>
</details>

<a id="q22"></a>

### Q22. An excerpt is not a full assertion

<p class="qb-question"><strong>Question:</strong> Support receives an intentionally shortened SAML assertion excerpt containing only issuer, NameID, and audience. Signature material and validity fields are omitted from the excerpt, and the full message is not shown. Does this prove the full response lacked them?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Omission from selected evidence is not confirmed absence from the complete message. The excerpt intentionally limits what can be inspected.</p>
<p>Signature and time conclusions need the full relevant content and validation result. Do not declare a missing signature merely because the shortened view leaves it out.</p>
<p>State what the excerpt establishes and request the evidence required for the remaining checks. That preserves its value without expanding its scope.</p>
</div>
</details>

## Validation and trust

<a id="q23"></a>

### Q23. Readable versus validated

<p class="qb-question"><strong>Question:</strong> A support analyst decodes a SAML assertion and sees readable identity fields plus a signature element. No trusted-key verification result is supplied. Does seeing those contents establish that the application successfully verified the signature?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Decoding reveals content. Seeing signature material is not the cryptographic verification result.</p>
<p>The application must check the required signed content using its configured trusted signing information. Then it evaluates the other acceptance conditions too.</p>
<p>Do not turn visible text into a completed validation claim. It helps locate fields, while actual verification evidence establishes whether the receiver may rely on them.</p>
</div>
</details>

<a id="q24"></a>

### Q24. Private key and certificate

<p class="qb-question"><strong>Question:</strong> A SAML identity provider signs information using a private signing key. The application is configured with trusted certificate information for verification. What different jobs do the private key and signing certificate perform, and is either the user’s password?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The private key creates the signature. The certificate supplies public-key information the recipient uses for verification under its trusted configuration.</p>
<p>Neither is the user's password. Seeing a certificate also does not prove the application trusts the active key or verified a particular message.</p>
<p>Check the active signing choice, receiving trust, and actual result. These are connection properties rather than another credential entered by the person signing in.</p>
</div>
</details>

<a id="q25"></a>

### Q25. Signing versus encryption

<p class="qb-question"><strong>Question:</strong> A SAML assertion is signed but readable when inspected. Encryption is not assumed. Does readability make signing ineffective, and how do signature verification and encryption address different concerns?</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A signed message can be readable. Signing supports checking origin and integrity of the signed content; encryption restricts reading without the required decryption key.</p>
<p>They have different purposes. Readable content is not automatically unsigned or invalid, and encryption alone would not settle every acceptance requirement.</p>
<p>Inspect the supported connection rules and actual verification results. The visible form of the message does not establish either its trust or intended use.</p>
</div>
</details>

<a id="q26"></a>

### Q26. A valid signature is not every check

<p class="qb-question"><strong>Question:</strong> The receiving SAML application reports that required signature verification passed. No audience or identity-matching result is supplied. Must the assertion also be intended for this application and match the right account?</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Those results are not established by the signature alone. Authentic signed content can still name another audience or identify a user differently from the application's chosen rule.</p>
<p>Inspect the separate checks against the approved connection. Audience identifies intended use; matching identifies the local account.</p>
<p>Passing one important condition is progress, not a substitute for the rest. Keep each validation outcome attached to the question it answers.</p>
</div>
</details>

<a id="q27"></a>

### Q27. Time conditions

<p class="qb-question"><strong>Question:</strong> A SAML application evaluates assertion conditions such as NotBefore and NotOnOrAfter. A report names a validity rejection but gives no detailed clock or setting analysis. What do those fields constrain, and does the rejection alone identify the exact time defect?</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They constrain when the assertion may be used. The receiver must determine whether it is usable at the checked point under the applicable conditions.</p>
<p>A generic time rejection does not identify which clock or setting is wrong. Obtain the relevant full message and validation evidence before choosing a correction.</p>
<p>Understand the purpose without inventing a precise cause. Time is one acceptance boundary, not the entire sign-in decision.</p>
</div>
</details>

<a id="q28"></a>

### Q28. Correlation and replay

<p class="qb-question"><strong>Question:</strong> A SAML service provider receives identity information for a request-based sign-in. The flow requires checking that the response belongs to the expected request and was not improperly reused. Why are these checks needed in addition to a plausible user identifier?</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They connect the message to the relevant interaction and help prevent improper replay, use of proof again where that reuse is not permitted.</p>
<p>A plausible name alone cannot establish those relationships. Inspect the actual request, response, and applicable validation evidence.</p>
<p>The details depend on the supported flow. Do not assume a universal validation order or borrow a response from another attempt to replace the current result.</p>
</div>
</details>

## Investigate an audience rejection

<a id="q29"></a>

### Q29. What establishes the audience cause?

<p class="qb-question"><strong>Question:</strong> Maya uses Okta, an identity service, for SAML sign-in to Salesforce, a separate business application. Production expects the audience /entity/prod, but the full assertion names /entity/test; the correlated application report rejects that mismatch. How does the expected configuration, full-message value, and rejection report establish more than a selected field difference alone?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>All three concern the same connection and attempt and point to the same failed audience requirement. The report connects the mismatch to the actual refusal.</p>
<p>A shortened excerpt alone would only locate a discrepancy to investigate. The correlated application evidence now establishes its causal role.</p>
<p>Focus correction on the emitted audience for the intended agreement. Preserve any other accepted results instead of replacing the diagnosis with an unrelated credential explanation.</p>
</div>
</details>

<a id="q30"></a>

### Q30. Keep accepted checks

<p class="qb-question"><strong>Question:</strong> Maya uses Okta, an identity service, for SAML sign-in to Salesforce, a separate business application. Production expects the audience /entity/prod, but the full assertion names /entity/test; the correlated application report rejects that mismatch. Issuer, required signature, and validity pass; her active target account has the correct username matching NameID. Would changing that username repair the failed audience requirement?</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The identifier already agrees with the supplied matching requirement. The defect concerns which service the assertion is intended for.</p>
<p>Inspect the connection value producing the test audience for this production attempt. Changing a correct user field would add another change without repairing the mismatch.</p>
<p>The accepted results come from validation evidence, not mere readable fields. Keep those findings while addressing the specific failed condition.</p>
</div>
</details>

<a id="q31"></a>

### Q31. Do not bypass the failed check

<p class="qb-question"><strong>Question:</strong> Maya uses Okta, an identity service, for SAML sign-in to Salesforce, a separate business application. Production expects the audience /entity/prod, but the full assertion names /entity/test; the correlated application report rejects that mismatch. Would turning off audience validation be a correction that satisfies the intended production agreement?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It would remove the check that caught the mismatch, not bring the message into agreement. The intended result requires the appropriate production audience.</p>
<p>Compare approved settings on both sides and identify why the wrong value was emitted. Review shared integration scope before applying the justified change.</p>
<p>Correct the defective relationship and verify a fresh attempt. Accepting inappropriate proof is not the same outcome as producing correct proof.</p>
</div>
</details>

<a id="q32"></a>

### Q32. A shared connection change

<p class="qb-question"><strong>Question:</strong> Maya uses Okta, an identity service, for SAML sign-in to Salesforce, a separate business application. An audience-setting correction is proposed after a production/test mismatch, and other users share that integration. Why review more than Maya’s account before applying the change?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The configuration can affect everyone using the shared connection. One person's report does not make the audience setting private to them.</p>
<p>Review the intended instance, approved value, affected users, and verification plan. Then check fresh messages and acceptance under the corrected agreement.</p>
<p>The ticket identifies where the problem was noticed; the configuration identifies the wider change scope. Both belong in the recommendation.</p>
</div>
</details>

<a id="q33"></a>

### Q33. Saved is not verified

<p class="qb-question"><strong>Question:</strong> Maya uses Okta, an identity service, for SAML sign-in to Salesforce, a separate business application. After a confirmed test-versus-production audience defect, support saves a proposed setting correction. No new message or application result is supplied. What evidence would verify the fix rather than just the action?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A fresh attempt should emit the expected production audience, receive application acceptance, and identify Maya's intended account.</p>
<p>Saving a setting establishes an action, not what the next message contained or how Salesforce treated it. An old identity-service success cannot verify a new attempt.</p>
<p>Specify those follow-up checks and leave them unverified until supplied. The proposal becomes a demonstrated correction only through its actual result.</p>
</div>
</details>

<a id="q34"></a>

### Q34. Repair a closure note

<p class="qb-question"><strong>Question:</strong> Maya uses Okta, an identity service, for SAML sign-in to Salesforce, a separate business application. Production expects the audience /entity/prod, but the full assertion names /entity/test; the correlated application report rejects that mismatch. Okta records success, and Maya’s active account exists with NameID matching the approved username. No correction is supplied. Improve: “Okta succeeded, so Salesforce worked; her account must be missing.”</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Okta recorded success for the checked attempt, but Salesforce rejected the assertion because its audience named test rather than production. Maya's intended account exists and has the expected identifier. The responsible connection settings need correction and fresh verification.”</p>
<p>That preserves both services' outcomes and the known account facts.</p>
<p>Do not invent a missing record or completed fix. The supplied discrepancy is the rejected audience, not failed credentials or absence of the application account.</p>
</div>
</details>

## Investigate account matching

<a id="q35"></a>

### Q35. A demonstrated user-matching discrepancy

<p class="qb-question"><strong>Question:</strong> Maya uses Okta, an identity service, for SAML sign-in to Salesforce, a separate business application. This connection matches NameID against username. The approved account username is maya.rao@app.example, but the assertion carries maya.old@app.example. Audience and required validation pass; the application reports no matching user. Where should support investigate?</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Follow the NameID-producing mapping and linked target record under the chosen username rule. The presented identifier differs from the approved one.</p>
<p>Inspect the actual emitted value as well as intended configuration. A correct formula alone would not prove what this attempt delivered.</p>
<p>Do not change the accepted audience to fix a user-matching discrepancy. The current evidence locates the next investigation at identity representation and association.</p>
</div>
</details>

<a id="q36"></a>

### Q36. Do not create another account first

<p class="qb-question"><strong>Question:</strong> Maya uses Okta, an identity service, for SAML sign-in to Salesforce, a separate business application. Her intended account exists as maya.rao@app.example, but NameID sends maya.old@app.example under username matching. The receiver rejects the match and other required checks pass. Why investigate the identifier and association before creating another account?</p>

<details class="qb-answer" id="q36-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The supplied defect concerns the value used to find the intended existing account. Another creation could introduce a duplicate instead of repairing that relationship.</p>
<p>Compare the target, chosen matching rule, and configured versus delivered NameID. Establish the approved correction from that evidence.</p>
<p>The goal is the right account association, not a new record that accommodates an inaccurate identifier. No new-account requirement is supplied here.</p>
</div>
</details>

<a id="q37"></a>

### Q37. Federation ID variation

<p class="qb-question"><strong>Question:</strong> A Salesforce SAML connection explicitly matches NameID to Federation ID, a separate federated user identifier. Support compares the assertion only with the target username and has not read Federation ID. Does that comparison establish a correct account match?</p>

<details class="qb-answer" id="q37-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Username is not the chosen matching field in this scenario. Inspect the configured Federation ID and actual NameID for the intended record.</p>
<p>The connection supplies the meaning of the value. Familiar names or email-like appearance cannot replace that agreement.</p>
<p>Keep expected identity configuration beside the observed message. A comparison against the wrong field can look reassuring while leaving the relevant match unanswered.</p>
</div>
</details>

## Account lifecycle and permissions

<a id="q38"></a>

### Q38. SAML and JIT

<p class="qb-question"><strong>Question:</strong> A business application receives a SAML assertion for sign-in. Its account-management capabilities and just-in-time provisioning settings are unknown. Does receiving the assertion guarantee account creation, and what would JIT require?</p>

<details class="qb-answer" id="q38-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. SAML supplies sign-in information, not an automatic creation guarantee. Just-in-time provisioning is separately supported and configured behavior that can create or update an account during sign-in.</p>
<p>Inspect the particular application and operation evidence before making an account claim. A target account may already exist or need another preparation process.</p>
<p>Authentication and account management remain separate concerns even when a configured journey connects them.</p>
</div>
</details>

<a id="q39"></a>

### Q39. Accepted sign-in, denied action

<p class="qb-question"><strong>Question:</strong> Maya uses Okta, an identity service, for SAML sign-in to Salesforce, a separate business application. The application accepts the response and selects her intended account. A later business action is denied, but its approval and role requirements are unknown. Does that denial automatically demonstrate an audience defect?</p>

<details class="qb-answer" id="q39-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Entry is supplied as successful. Investigate whether the business action is approved and what permission the application actually grants.</p>
<p>Authentication and account identification do not make every action available. Preserve the accepted sign-in instead of reopening an audience defect without evidence.</p>
<p>Locate the new problem at the action boundary. The required role and denial evidence will distinguish an intended restriction from a permission discrepancy.</p>
</div>
</details>

<a id="q40"></a>

### Q40. Keep independent attempts separate

<p class="qb-question"><strong>Question:</strong> Support reviews two independent Salesforce attempts for Maya. The earlier report leaves assignment and account existence uninspected. A separate later case supplies an assignment and active account but no evidence linking those facts to the earlier point. Do they retroactively resolve the earlier unknowns?</p>

<details class="qb-answer" id="q40-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The later facts belong to their stated case and time. They do not reconstruct the earlier record state or supply its missing outcomes.</p>
<p>Use supported correlation and relevant historical evidence before extending a finding to another attempt. A familiar person and application do not make every incident one record.</p>
<p>The independent case can support its own investigation while the earlier questions remain open. Preserve both scopes rather than borrow later certainty.</p>
</div>
</details>

## Compare, verify, and explain

<a id="q41"></a>

### Q41. Three things to compare

<p class="qb-question"><strong>Question:</strong> Support investigates a SAML connection between Okta and a business application. It has provider settings, receiver settings, and a captured message, but their production/test context has not been confirmed. What should be compared and in what context?</p>

<details class="qb-answer" id="q41-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>First establish that the three sources describe the intended connection and attempt. Then compare issuer, intended audience, ACS receiving address, and user identifier according to their jobs.</p>
<p>The provider setting does not prove the actual message value, and receiver configuration supplies what it expects to validate.</p>
<p>Keep all three together. That connects approved behavior to the emitted information and avoids explaining one instance with settings from another.</p>
</div>
</details>

<a id="q42"></a>

### Q42. A new certificate is not new trust

<p class="qb-question"><strong>Question:</strong> Okta creates a new SAML signing certificate for a Salesforce integration. The active signing choice, receiver’s trusted certificate, and supported transition process have not been checked. Does generation alone prove Salesforce trusts the new relationship?</p>

<details class="qb-answer" id="q42-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Creating public-key information does not itself update or verify receiving trust. Inspect which signing key is active and which information Salesforce trusts.</p>
<p>Coordinate the supported transition before activation, then verify a fresh response and acceptance. The certificate is connection trust information, not the user's password.</p>
<p>Generation is a configuration step. The agreement and actual verification result establish whether the changed signing relationship works.</p>
</div>
</details>

<a id="q43"></a>

### Q43. An old session after a signing change

<p class="qb-question"><strong>Question:</strong> Maya continues using an existing Salesforce session after a proposed SAML certificate change. No fresh sign-in response under the new signing choice is supplied. Does continued use of that old session verify the changed signing relationship?</p>

<details class="qb-answer" id="q43-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The established application session may continue without exercising a new SAML exchange. Its accepted request does not supply a fresh signature-validation result.</p>
<p>Verify a new response and application acceptance under the intended connection. Distinguish that test from continued use through an old session.</p>
<p>The session observation remains valid evidence, but it answers a different question. A trust change needs verification that actually uses the changed path.</p>
</div>
</details>

<a id="q44"></a>

### Q44. Explain the investigation to Maya

<p class="qb-question"><strong>Question:</strong> Maya uses Okta, an identity service, for SAML sign-in to Salesforce, a separate business application. Production expects the audience /entity/prod, but the full assertion names /entity/test; the correlated application report rejects that mismatch. Her applicable Okta checks succeed and her active Salesforce account exists. No corrected attempt is supplied. Explain the failure and required follow-up to Maya in friendly language.</p>

<details class="qb-answer" id="q44-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>You could say: “You completed the identity-service checks, and your Salesforce account is present. Salesforce still had to inspect the message it received. That message named the test connection where production was expected, so the application rejected it.”</p>
<p>Then add: “We need to correct the responsible value and check a fresh attempt for the expected audience, application acceptance, and your intended account.”</p>
<p>That explains the boundary without claiming the proposed repair has already worked.</p>
</div>
</details>

[Day 8 lesson](../lessons/day-08-saml.md) · [Reasoning exercises](../exercises/day-08.md) · [Day 8 recap](../revision/day-08.md) · [Question bank](index.md)
