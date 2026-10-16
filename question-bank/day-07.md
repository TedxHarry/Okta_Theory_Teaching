---
title: "Day 7 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 7
---

# Day 7: Questions

## Authenticators, methods, and factors

<a id="q01"></a>

### Q01. Why another kind of proof?

<p class="qb-question"><strong>Question:</strong> Daniel signs in with an accepted password. His company wants evidence beyond knowing that password. Why would entering the same password again add less reassurance than a successfully validated interaction with his registered device?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Someone who knows the password could repeat it. Both entries ask for knowledge, rather than a different kind of proof.</p>
<p>A supported registered-device interaction can establish possession evidence that password knowledge alone does not supply. The proof must actually be accepted; owning a phone is not the same result.</p>
<p>Count the kinds of validated evidence rather than the number of screens. The additional check should answer a different identity question, not simply repeat the first one.</p>
</div>
</details>

<a id="q02"></a>

### Q02. Authenticator, method, factor

<p class="qb-question"><strong>Question:</strong> Daniel uses Okta Verify, an authentication app, to respond to a Push notification on his registered phone. The interaction is successfully validated. Identify the authenticator, method, and factor type this device-based proof can supply.</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Ask what Daniel uses, how he uses it, and what evidence the interaction supplies. He uses Okta Verify, so that is the authenticator. He responds to a Push notification, so Push is the method. The successfully validated registered-device interaction can supply possession evidence.</p>
<p>These are different descriptions of one check, not three checks to count. The same authenticator can support another method, so naming the app alone would leave part of the story out.</p>
<p>When reporting the result, name the actual method and accepted proof. 'He used Verify' does not tell us whether this was a Push response, a changing code, or another supported interaction.</p>
</div>
</details>

<a id="q03"></a>

### Q03. Knowledge, possession, biometric

<p class="qb-question"><strong>Question:</strong> A company compares three accepted authentication checks: a password, a supported registered-device proof, and a supported fingerprint check. How do these illustrate knowledge, possession, and biometric factor types rather than just different screens?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A password supplies knowledge, something the person knows. Validated device proof can supply possession, something they control. Fingerprint verification supplies biometric evidence, something they are.</p>
<p>The method and accepted result matter. A fingerprint feature existing or a device being nearby does not show the required check occurred.</p>
<p>Use factor names to classify the actual evidence. They explain what makes a check different, while the configured flow determines which proofs are required.</p>
</div>
</details>

<a id="q04"></a>

### Q04. Two screens, two factors?

<p class="qb-question"><strong>Question:</strong> Daniel completes two password-entry screens. No evidence of a different factor type is supplied. Does the two-screen count alone demonstrate multifactor authentication (MFA), which combines different kinds of identity proof?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Password entries both concern knowledge. More prompts do not automatically mean different factor types.</p>
<p>Read the methods and validated evidence instead of counting the interface. A supported interaction can also establish more than one factor without two separate screens.</p>
<p>The MFA question is about what proof the system obtained. Screen layout is only the visible experience and cannot independently establish the assurance supplied by the flow.</p>
</div>
</details>

<a id="q05"></a>

### Q05. One interaction can carry more proof

<p class="qb-question"><strong>Question:</strong> A supported authentication interaction validates both possession of a registered device and a required biometric check. The interface shows one interaction rather than two separate prompts. Can it establish more than one factor, and what must be inspected?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It can, under the supplied supported method and validated results. Possession and biometric proof are different factor types.</p>
<p>Inspect what the flow required, the relevant device and configuration, and the evidence actually accepted. Do not infer factor count from the visible prompt count.</p>
<p>This does not mean every device interaction includes biometric verification. The conclusion belongs to the specific proof established in this interaction.</p>
</div>
</details>

<a id="q06"></a>

### Q06. MFA and an approval role

<p class="qb-question"><strong>Question:</strong> Expense is a business application for submitting and approving expenses. Daniel successfully completes the required multifactor authentication (MFA) at the company identity service. No target-account creation or approval-role result is supplied. Does stronger authentication establish those application outcomes?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Authentication establishes identity evidence. Authorization determines which actions the identity may perform, and account creation is another operation.</p>
<p>The MFA result does not supply an Expense approval role or creation receipt. A job title also would not replace the application's permission evidence.</p>
<p>Report the completed authentication step, then inspect the account and required capability where relevant. Stronger proof of who a person is does not automatically grant more rights.</p>
</div>
</details>

## Availability, enrollment, and use

<a id="q07"></a>

### Q07. Installed but not registered

<p class="qb-question"><strong>Question:</strong> Daniel installs Okta Verify, an authentication app, on his phone. He has not completed account-specific registration for his employer. Does installation alone establish enrollment, and which association needs checking?</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Installation tells us the software is on Daniel's phone. Enrollment tells us that it has been registered for the company identity he is using.</p>
<p>An app icon cannot answer which account is registered. The app might have no company account yet, or it might hold an account for a different organization. Check the registration for Daniel's intended employer account and the relevant device.</p>
<p>That is why a setup request can still make sense after installation. Complete and verify the approved account-specific setup instead of treating the presence of the app as successful enrollment or authentication.</p>
</div>
</details>

<a id="q08"></a>

### Q08. Four separate checks

<p class="qb-question"><strong>Question:</strong> Support reviews Daniel’s authentication app for a business sign-in. The organization’s settings, his account registration, the allowed method for the attempt, and its accepted response are separate evidence sources. What do available, enrolled, acceptable, and completed describe?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Available concerns the applicable configuration. Enrolled means the relevant registration exists. Acceptable means the method meets the current requirement. Completed means the identified attempt has an accepted result.</p>
<p>Do not compress them into “the app is ready.” An enrolled person may still lack required proof for the current request.</p>
<p>Read each evidence source for its own question. That locates the missing step without assuming setup and actual use are one outcome.</p>
</div>
</details>

<a id="q09"></a>

### Q09. Another organization

<p class="qb-question"><strong>Question:</strong> Daniel’s phone has an Okta Verify enrollment for Organization A. His current sign-in belongs to his employer, Organization B, whose account registration has not been checked. Does the existing app account establish enrollment for B?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Registration needs to belong to the relevant organization and identity. An enrollment for A establishes a different association.</p>
<p>Inspect which account and device the current sign-in expects. Seeing any account in the app cannot settle that relationship.</p>
<p>The next check is specific registration evidence, not merely whether the software is installed. Correct context is part of a useful enrollment finding.</p>
</div>
</details>

<a id="q10"></a>

### Q10. A replacement phone

<p class="qb-question"><strong>Question:</strong> Daniel registered an old phone with Okta Verify for his employer. He now wants to authenticate using a replacement phone, but its enrollment has not been inspected and the old phone is unavailable. Is replacement readiness established?</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The old registration does not verify the replacement device's account association or supported method readiness.</p>
<p>Check the selected enrollment and the approved recovery process for this situation. Do not assume registration migrated merely because Daniel still has the same identity.</p>
<p>Keep device context alongside enrollment. “He is enrolled” can be too broad when the current request depends on a different device.</p>
</div>
</details>

<a id="q11"></a>

### Q11. Earlier successful use

<p class="qb-question"><strong>Question:</strong> Daniel successfully used Okta Verify yesterday. Today’s fresh business sign-in requires an accepted Push response, with no earlier verification permitted for reuse. No current response result is supplied. Does yesterday’s success satisfy today’s requirement?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The earlier event establishes its own result. The supplied current requirement needs accepted proof for this fresh attempt.</p>
<p>Enrollment or historical use makes a method available to investigate, not a permanent answer to future challenges. Inspect the current response and its connection to the attempt.</p>
<p>Reuse can be permitted under other stated conditions, but it is explicitly absent here. Keep the applicable requirement attached to the evidence.</p>
</div>
</details>

## Setup requirements and attempt requirements

<a id="q12"></a>

### Q12. Set up versus prove now

<p class="qb-question"><strong>Question:</strong> A company defines which authenticators employees must register, then separately defines what proof a particular business-application request must supply. How does an enrollment policy differ from that request’s authentication requirement?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The setup policy asks, 'Which authenticators must this person register, and when?' The access requirement asks, 'What proof does this particular attempt need?'</p>
<p>Registration prepares a method for use. It does not respond to a challenge or decide how often every application must ask for proof. A person can have finished setup while the current sign-in still needs a response.</p>
<p>Read both sets of requirements and the actual attempt results. That explains what is ready to use and what has been successfully used, without turning enrollment into a permanent answer to future sign-ins.</p>
</div>
</details>

<a id="q13"></a>

### Q13. Optional enrollment

<p class="qb-question"><strong>Question:</strong> An organization makes enrollment of a supported authentication method optional under one setup policy. The application-specific sign-in requirements have not been inspected. Does optional setup prove the method can never be needed for an application request?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Setup policy and the request's required proof answer different questions. Inspect what that access attempt actually needs.</p>
<p>Optional enrollment alone does not prove every application permits password-only entry. Required enrollment also does not specify every application's challenge frequency.</p>
<p>Read the method, configuration, and current context together. A broad enrollment label cannot replace the requirement for a particular request.</p>
</div>
</details>

<a id="q14"></a>

### Q14. Interpret a fresh-attempt requirement

<p class="qb-question"><strong>Question:</strong> Expense is a business application using Okta sign-in. For Daniel, Verify registration is required now with no postponement; the fresh attempt needs accepted password and Push; Push is supported and enabled; no older proof is reused. Can support assume setup or the current Push check may be skipped?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The supplied conditions require both completed registration and the stated current proof. They leave no postponement or reused Push result to substitute.</p>
<p>These are the particular example's requirements, not universal defaults for every Okta application.</p>
<p>Keep the conditions intact when reasoning. Removing one would change the question. Registration prepares the method, while the accepted response establishes proof for this attempt.</p>
</div>
</details>

## Investigate required enrollment

<a id="q15"></a>

### Q15. Explain a required setup prompt

<p class="qb-question"><strong>Question:</strong> Daniel opens Expense through Okta. His password is accepted, Verify is enabled and allowed, enrollment is required now, but no completed employer-account Verify registration is found. He sees a setup prompt. Why can the prompt be expected even though the app is enabled?</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Enabled describes organizational availability. Daniel's missing registration describes a separate user-specific setup gap.</p>
<p>Because enrollment is required now, the prompt fits the evidence. Guide him through the approved registration and verify the correct company account and supported device association.</p>
<p>There is no contradiction between an offered method and unfinished setup. Availability does not register every user automatically.</p>
</div>
</details>

<a id="q16"></a>

### Q16. Choose the action for missing enrollment

<p class="qb-question"><strong>Question:</strong> Daniel’s Expense sign-in accepts his password, but required Okta Verify enrollment for his company account is missing. The method is allowed and supported. Would resetting the accepted password or changing his department establish the missing registration?</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither action addresses that gap. The password result is already accepted, and department maintenance concerns another kind of data.</p>
<p>Use the approved enrollment process and verify the resulting identity and device association. If setup fails, investigate its actual result rather than introduce unrelated changes.</p>
<p>Choose the action from the step that lacks evidence. An unfinished overall journey does not make every identity setting a candidate correction.</p>
</div>
</details>

<a id="q17"></a>

### Q17. Setup fails in a variation

<p class="qb-question"><strong>Question:</strong> Daniel must register Okta Verify for his employer before using a permitted business sign-in. He cannot complete setup, and no detailed enrollment failure or approval to remove the requirement is supplied. Should support remove the rule simply to make the prompt disappear?</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The next investigation concerns the actual setup failure and approved assistance process. The supplied facts do not justify removing the requirement.</p>
<p>Enrollment establishes a means of proving identity. Making a screen disappear is not the same as completing that registration appropriately.</p>
<p>Obtain the relevant setup evidence and authority before selecting recovery. The requested outcome is a correct permitted authentication path, not merely fewer prompts.</p>
</div>
</details>

## Follow the current challenge

<a id="q18"></a>

### Q18. Registration completed, response still missing

<p class="qb-question"><strong>Question:</strong> For Expense, Daniel first lacked required employer Verify enrollment. He then completes it. In a new fresh attempt, password is accepted and Push is issued, but no accepted Push response is recorded. Both proofs are required with no reuse. Which missing fact has changed?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The earlier setup gap is resolved: Daniel has completed the employer enrollment. Now we need a different result, an accepted Push response for this fresh attempt.</p>
<p>His accepted password, enrollment and issued Push request are useful progress. But the supplied requirement needs both password and Push proof, and the second accepted result is still missing.</p>
<p>Ask what he saw, which registered device was selected, and what happened to the response. Repeating registration would ignore the setup already completed. Enrollment makes this interaction possible; it does not perform the response for Daniel.</p>
</div>
</details>

<a id="q19"></a>

### Q19. Explain a challenge

<p class="qb-question"><strong>Question:</strong> Daniel’s business sign-in requires a Push response through Okta Verify on his registered phone. The system issues that request but supplies no response result. What is the authentication challenge, and which result still needs verification?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The challenge is a request for identity proof during the interaction. For Push, the registered-device response must be received and accepted.</p>
<p>Issuing it is not that accepted result. The notification might not have reached Daniel, or an outcome might still need inspection.</p>
<p>Follow request to response. That distinguishes a started interaction from a requirement actually satisfied for this sign-in.</p>
</div>
</details>

<a id="q20"></a>

### Q20. Issued is not proven received

<p class="qb-question"><strong>Question:</strong> Okta records Push issued for Daniel’s current attempt to enter Expense. Push is the notification method of the Verify authentication app. No device-delivery evidence or user response is supplied. Is receipt on his intended phone proven?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Issuance establishes that the system sent or started the challenge, not the user experience at the intended device.</p>
<p>Ask what Daniel saw and inspect the enrollment and phone selected for this attempt. Then read its response outcome.</p>
<p>Sending, receiving, and acceptance are separate facts. Keeping them distinct avoids inventing progress while still recognising that the challenge was initiated.</p>
</div>
</details>

<a id="q21"></a>

### Q21. Do not choose a cause yet

<p class="qb-question"><strong>Question:</strong> Daniel is enrolled in Okta Verify. For a required Push sign-in check, the system records issuance but no accepted response. No detail shows expiration, denial, or failed delivery. Are those explanations interchangeable findings, and what evidence distinguishes them?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They are different possible outcomes, not established causes in this question. Inspect the actual attempt result, selected device, and user experience.</p>
<p>A denial on the intended phone points to a different question from an unavailable old phone or an expired challenge. The broad label MFA failed hides those distinctions.</p>
<p>Keep accepted proof unverified until the result arrives. Choose a correction from the observed outcome rather than from a general symptom.</p>
</div>
</details>

<a id="q22"></a>

### Q22. A notification to approve?

<p class="qb-question"><strong>Question:</strong> Daniel receives an Okta Verify Push notification asking him to approve authentication, but he is not intentionally completing a sign-in request. Should the mere arrival of the notification be enough reason to approve it?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Approve only a request that belongs to a sign-in he is intentionally completing. Arrival does not establish that it is his intended interaction.</p>
<p>A response supplies authentication evidence, so the relationship to the person's actual request matters. The goal is legitimate proof, not automatically approving whatever appears.</p>
<p>Keep that user decision separate from delivery. A received notification can still be inappropriate to approve.</p>
</div>
</details>

<a id="q23"></a>

### Q23. A denial is an answer

<p class="qb-question"><strong>Question:</strong> For Daniel’s identified Verify Push attempt, the registered intended device returns a recorded denial. No reason for the user’s decision is supplied. Is this the same finding as having no evidence of delivery or any response?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The question supplies a returned denial for the relevant interaction. That is different from an unanswered or unverified delivery.</p>
<p>Read the outcome and Daniel's experience before selecting an action. The result does not explain why he denied it or justify resetting enrollment automatically.</p>
<p>A returned decision narrows the next question. It still needs enough context to choose a correction rather than repeat a generic retry.</p>
</div>
</details>

<a id="q24"></a>

### Q24. Verify the authentication follow-up

<p class="qb-question"><strong>Question:</strong> A fresh business sign-in requires accepted password and Verify Push evidence. Both accepted results are correlated to the current attempt, and the identity service confirms its stated requirements satisfied. No application entry or permissions are supplied. Which outcome can be reported complete?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The checked authentication requirement is satisfied for that attempt. The identity proof has its necessary accepted results.</p>
<p>Application entry and permissions remain separate outcomes. Inspect them if the requested business task needs those results.</p>
<p>Report the real success without extending it. Completed authentication is meaningful progress, but it is not a receipt for every account or application action.</p>
</div>
</details>

## Choose the actual Verify method

<a id="q25"></a>

### Q25. Recognize the interaction

<p class="qb-question"><strong>Question:</strong> Okta Verify supports methods subject to configuration and platform support. Match TOTP, Push, and FastPass to these interactions: entering a changing app code, responding to a registered-phone notification, and using device-based cryptographic proof.</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>TOTP, a time-based one-time password, is the changing app code. Push is the notification-response interaction. FastPass is the device-based cryptographic flow.</p>
<p>The app name alone does not say which method occurred. Configuration and supported platform determine what is available and acceptable.</p>
<p>Identify the actual method and its result. The matching exercise describes interactions, not proof that any one was enabled or accepted for a particular user.</p>
</div>
</details>

<a id="q26"></a>

### Q26. A code result for a Push question

<p class="qb-question"><strong>Question:</strong> Daniel’s fresh Expense attempt explicitly requires accepted Verify Push with no earlier proof reused. Support finds an unrelated successful TOTP event, involving a changing code from the same app. Can it settle the missing Push result?</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A changing TOTP code and a Push response are different methods, even when they come from the same app. The event also belongs to an unrelated attempt.</p>
<p>Keep the stated question in view: this fresh Expense attempt requires accepted Push, with no earlier proof reused. The TOTP success answers another question and cannot fill in the missing response here.</p>
<p>Find the actual Push result for this user and attempt, and whether the requirement was satisfied. Do not change the requirement merely because a convenient success record is available.</p>
</div>
</details>

<a id="q27"></a>

### Q27. Two methods from one app

<p class="qb-question"><strong>Question:</strong> Daniel uses two Okta Verify methods: TOTP, entering an app-generated changing code, and Push, responding to a phone notification. No factor-evidence analysis is supplied. Does the method count alone prove two different factor types for MFA?</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Distinct methods do not automatically establish distinct kinds of evidence. Inspect what each supported interaction actually validates.</p>
<p>Multifactor authentication combines different factor types. The authenticator name, number of methods, number of prompts, and kinds of proof are related but different facts.</p>
<p>Count the validated evidence instead of interface options. Two experiences in one app do not themselves answer the assurance question.</p>
</div>
</details>

## Understand FastPass

<a id="q28"></a>

### Q28. FastPass in plain language

<p class="qb-question"><strong>Question:</strong> A company permits a supported Okta FastPass sign-in without a typed password. Daniel uses Verify on the enrolled device to respond to Okta’s challenge. Conceptually, what proof is evaluated instead of a password entry?</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The enrolled device responds to Okta's challenge using a cryptographic key associated with its registration. It creates a signed response; Okta checks the signature and whether the response matches this challenge.</p>
<p>Think of the three stages rather than the mathematics: Okta asks for proof, the device produces a response, and Okta verifies it. If accepted, that is evidence through the enrolled key for this attempt, rather than a typed password entry.</p>
<p>Merely enabling FastPass would not show those stages completed. Inspect the actual method, device and validation result before reporting successful authentication.</p>
</div>
</details>

<a id="q29"></a>

### Q29. Why the challenge matters

<p class="qb-question"><strong>Question:</strong> In a supported FastPass flow, Okta challenges an enrolled device, Verify creates a signed response using its private key, and Okta checks that response. Why is “The device has a key” alone insufficient evidence of completed authentication?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Registration associates the key with a device, but this attempt needs proof that it was used for the relevant challenge and accepted.</p>
<p>The private key is a cryptographic secret used to create the signature. Verification checks the response and its relationship to the challenge.</p>
<p>Stored registration and current authentication are distinct facts. Following the interaction explains how the enrolled key supplies evidence for a particular request.</p>
</div>
</details>

<a id="q30"></a>

### Q30. Which device needs setup?

<p class="qb-question"><strong>Question:</strong> Daniel signs in on a computer using Verify Push on his registered phone. Separately, he wants FastPass on the computer. FastPass uses Verify on the supported access device. Does phone enrollment alone establish the computer’s FastPass readiness?</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Push can let Daniel respond on a phone while accessing the application on a computer. FastPass needs Verify setup on the supported device being used for that access.</p>
<p>Check the actual method, device, and relevant enrollment. A valid registration on one device does not automatically prepare another.</p>
<p>“He has Verify” leaves this context missing. The interaction determines which association and result must be inspected.</p>
</div>
</details>

<a id="q31"></a>

### Q31. FastPass is not Push

<p class="qb-question"><strong>Question:</strong> Okta Verify offers a phone-notification response called Push and a device-based cryptographic flow called FastPass. Both names appear in an application’s authentication settings. Are they two names for approving the same notification, and how should support identify the actual method?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They are different methods. Push uses the notification-response interaction; FastPass uses cryptographic proof tied to the enrolled device and challenge.</p>
<p>Read the attempt's actual method and result rather than infer it from the common app. Each also has its own relevant device context.</p>
<p>A setting naming FastPass does not establish a Push response, and a Push result cannot simply be relabeled FastPass. Preserve the interaction that was observed.</p>
</div>
</details>

<a id="q32"></a>

### Q32. Phishing resistance has a scope

<p class="qb-question"><strong>Question:</strong> A supported, correctly configured FastPass flow can provide phishing-resistant authentication. Phishing involves an impostor site seeking identity proof. Does that capability imply every Verify method has identical protection or that all account compromise is impossible?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Phishing resistance helps prevent proof being used through an impostor site in the supported configured flow. It is not unlimited protection against every kind of compromise.</p>
<p>Inspect the method, device, configuration, and result. The whole product name does not supply the same properties for every interaction.</p>
<p>Keep a security claim attached to the flow that establishes it. Capability, applicable conditions, and verified use are separate questions.</p>
</div>
</details>

<a id="q33"></a>

### Q33. Possession and local verification

<p class="qb-question"><strong>Question:</strong> A supported device-authentication flow requires both the enrolled-device proof and local user verification, such as a biometric or device passcode check. The device is registered, but no local-check result is supplied. Are those requirements both established?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Registration establishes the device association. Required user verification checks the person using that device and needs its own result.</p>
<p>Read the applicable method, device, configured requirement, and accepted evidence. Enabled or enrolled alone does not establish every required proof.</p>
<p>Keep possession and local verification distinct. The actual flow determines their role, while its results show whether the current interaction completed them.</p>
</div>
</details>

<a id="q34"></a>

### Q34. Passwordless and factor count

<p class="qb-question"><strong>Question:</strong> A permitted authentication flow uses device proof and may require local user verification, but presents no password field. Is passwordless the same as no authentication, or enough evidence by itself to classify the flow as single-factor?</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither conclusion follows. Passwordless tells us a password is not required in this flow. It does not tell us that the person supplied no identity proof.</p>
<p>The device can provide proof, and the flow may also require local user verification. To determine factor types, look at what was required and successfully validated. The missing password field cannot answer that by itself.</p>
<p>Describe the actual method and results instead of counting visible prompts. That lets you explain passwordless authentication without assuming either one factor or multiple factors from the screen alone.</p>
</div>
</details>

<a id="q35"></a>

### Q35. Do not invent an AD result

<p class="qb-question"><strong>Question:</strong> Daniel’s company has an Active Directory (AD) password-validation path through an agent, but this attempt instead uses a separately permitted FastPass flow without a typed password. Its device proof succeeds; no directory credential result is supplied. Was AD password acceptance established?</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The supplied FastPass result concerns device-based proof, not an unobserved directory-password check.</p>
<p>A successful authentication can use different methods in permitted flows. Identify the actual path before assigning a result to another system.</p>
<p>Keep the accepted method as a success without inventing AD validation. Comparing incidents does not justify silently replacing one proof path with another.</p>
</div>
</details>

## Choose the evidence boundary

<a id="q36"></a>

### Q36. Choose the next boundary

<p class="qb-question"><strong>Question:</strong> Compare three independent reports about Verify, an authentication app: A has installation but no company-account enrollment; B has enrollment and issued Push but no accepted response; C has accepted required proof but unverified business-application entry. What boundary should each investigation examine next?</p>

<details class="qb-answer" id="q36-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>For A, inspect the correct registration and approved setup. For B, inspect the selected device, user experience, and current response result. For C, inspect application validation, account entry, and the relevant permission outcome.</p>
<p>Each stops at a different stage. The same reset action would ignore the progress and missing evidence.</p>
<p>Select the next question from what is established. The app name alone cannot identify the correction.</p>
</div>
</details>

<a id="q37"></a>

### Q37. Repair a misleading update

<p class="qb-question"><strong>Question:</strong> Daniel is registered with Verify for his employer. His current Expense attempt needs accepted password and Push; password is accepted and Push issued, but no response, application entry, or permission result is supplied. Improve: “He enrolled, so MFA worked and access is fixed.”</p>

<details class="qb-answer" id="q37-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Daniel's company enrollment is complete. The current password result is accepted and Push was issued, but an accepted Push response is not established. Application entry and permissions also remain unverified.”</p>
<p>That preserves completed setup and progress without turning them into the missing current proof.</p>
<p>The next owner can investigate the attempt rather than repeat registration or assume the whole business goal succeeded.</p>
</div>
</details>

## Enrollment, recovery, and verification

<a id="q38"></a>

### Q38. Two views to inspect

<p class="qb-question"><strong>Question:</strong> Daniel says Verify is installed but does not work. Support can inspect his account’s authenticator records and the organization’s authenticator settings, but has not yet checked the current response. What different questions do these evidence sources answer?</p>

<details class="qb-answer" id="q38-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>User records identify enrollments associated with that identity. Organization settings describe methods available under the applicable configuration. The current attempt result shows whether required proof was accepted.</p>
<p>An installation may lack the relevant account association or belong to another organization. Neither settings nor registration supplies an unobserved response outcome.</p>
<p>Use each view for its own question. A single broad status cannot establish setup, acceptable method, and actual completion together.</p>
</div>
</details>

<a id="q39"></a>

### Q39. Why reset is not diagnosis

<p class="qb-question"><strong>Question:</strong> Daniel is enrolled in Verify but reports an unsuccessful Push interaction. The selected phone, denial or expiry result, and user experience have not been checked. Why investigate those facts before removing his enrollment?</p>

<details class="qb-answer" id="q39-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A reset changes registration and can create a new setup task. It does not explain the original interaction's failure.</p>
<p>First identify the selected enrollment and inspect the attempt outcome and user experience. That can distinguish an unavailable device from a denial or another missing result.</p>
<p>Choose an approved action from the evidence. Removing enrollment early can leave the cause unknown while changing what the next attempt requires.</p>
</div>
</details>

<a id="q40"></a>

### Q40. An old unavailable phone

<p class="qb-question"><strong>Question:</strong> Daniel’s required Verify Push is sent to an old phone he cannot use. No approved reset, replacement enrollment, or new sign-in result is supplied. What should support inspect before choosing recovery?</p>

<details class="qb-answer" id="q40-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Inspect the selected account enrollment, unavailable device, attempt result, and approved identity-verification and recovery process. Confirm the operator's authority for the intended action.</p>
<p>The old phone is a relevant finding, but it does not establish that a replacement is ready or any unreviewed reset is justified.</p>
<p>Follow the supported process while preserving authentication requirements. The outcome needs appropriate new setup and permitted use, not merely removal of a registration.</p>
</div>
</details>

<a id="q41"></a>

### Q41. Replacement completion evidence

<p class="qb-question"><strong>Question:</strong> An authorized recovery process resets Daniel’s unavailable Verify enrollment and requires replacement setup. Only the reset action is recorded; no new registration or permitted sign-in is supplied. What further evidence would demonstrate recovery of the intended authentication path?</p>

<details class="qb-answer" id="q41-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Verify the replacement enrollment for the correct identity and device, then a permitted subsequent sign-in under the applicable requirements.</p>
<p>The reset is a state change, not successful re-enrollment or proof that the new method worked. Application entry needs its own evidence if included in the request.</p>
<p>Keep the administrative action and recovered user outcome separate. That makes completion measurable rather than equating it with the last operator action.</p>
</div>
</details>

<a id="q42"></a>

### Q42. Explain the whole authentication story

<p class="qb-question"><strong>Question:</strong> Daniel’s employer enables Verify and requires registration now. He initially lacks it, then completes approved setup. A fresh Expense attempt needs accepted password and Push; both are correlated and accepted. No application-entry or permission evidence is supplied. Explain his authentication progress in friendly language.</p>

<details class="qb-answer" id="q42-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>You could say: 'Your company made Okta Verify available, but your account still needed its own setup. Once you completed that registration, the fresh Expense sign-in needed both your password and a Push response. Both checks were accepted for the attempt we reviewed.'</p>
<p>Then explain the next question: 'We still need to establish whether Expense let you in and whether your account has the permissions for the work you need to do.'</p>
<p>This recognizes the setup and authentication that really succeeded. It does not tell Daniel that registration granted an approval role or that authentication alone proved every application outcome.</p>
</div>
</details>

[Day 7 lesson](../lessons/day-07-authenticators-enrollment-mfa.md) · [Reasoning exercises](../exercises/day-07.md) · [Day 7 recap](../revision/day-07.md) · [Question bank](index.md)
