---
title: "Day 13 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 13
---

# Day 13: Questions

## Policy responsibilities and required assurance

<a id="q01"></a>

### Q01. Policy and rule

<p class="qb-question"><strong>Question:</strong> A company groups Expense application authentication requirements into a policy and configures rules using group and request conditions. Daniel receives a challenge during one sign-in. How do the policy and its selected rule play different parts in explaining that result?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A policy groups requirements. A rule states when particular conditions apply and what decision or authentication requirement follows. To explain Daniel's challenge, identify both the policy's job and the rule actually selected.</p>
<p>The policy's descriptive name cannot supply the evaluated conditions. Read those conditions, the resulting requirement, and the attempt evidence together. That turns “a security policy applied” into a concrete explanation of why this request needed this proof.</p>
</div>
</details>

<a id="q02"></a>

### Q02. Give the controls their jobs

<p class="qb-question"><strong>Question:</strong> A company uses Okta Identity Engine for identity checks and Expense for business work. It must govern authenticator enrollment, the Okta session, authentication for Expense entry, and expense-approval permissions. Which controls answer these separate questions?</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The authenticator enrollment policy governs which authenticators the person may or must enroll. The global session policy governs the Okta session. The application authentication policy, also called an app sign-in policy, sets the authentication required for the application's access request.</p>
<p>Expense's own permissions govern what the person may do after entry. Setup, accepted proof, session use, and expense approval are separate outcomes. Keeping their controls distinct helps you find the right evidence and responsible system.</p>
</div>
</details>

<a id="q03"></a>

### Q03. One policy cancels another?

<p class="qb-question"><strong>Question:</strong> Daniel has satisfied Okta’s global session requirements and his session remains valid. Expense’s application authentication rule separately requires newer possession-factor proof for its current sign-in request. Does the global-session result cancel that additional requirement?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The applicable global-session and application authentication requirements must be satisfied. One does not simply cancel the other.</p>
<p>A valid Okta session can coexist with a need for newer proof at Expense entry. Compare existing evidence with the actual application requirement before interpreting the challenge. That explains why the dashboard can work while another check appears, without assuming the previous authentication was ignored or the whole session expired.</p>
</div>
</details>

<a id="q04"></a>

### Q04. What assurance asks

<p class="qb-question"><strong>Question:</strong> An application requires authentication evidence with specified characteristics, such as acceptable factor types or phishing resistance. Support records only “MFA happened,” meaning multiple factors were used, without identifying the methods. Why is that note insufficient to establish the required assurance?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Authentication assurance concerns the confidence supported by the evidence and its characteristics. The application may require a particular method or security property, not merely a general multiple-factor result.</p>
<p>Identify the actual proof and compare it with the selected requirement. Two successful interactions are not automatically interchangeable with every required factor combination or phishing-resistant method. A useful note names what was accepted and how it meets this application's requirement.</p>
</div>
</details>

## Session limits and renewed proof

<a id="q05"></a>

### Q05. Cookie present, session accepted?

<p class="qb-question"><strong>Question:</strong> After a session-ending action, Daniel’s browser still stores a cookie associated with Expense. No fresh protected request or server-side session result is supplied. Does the stored cookie alone establish that Expense continues accepting the session?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The cookie helps the browser present session information; Expense decides whether it still accepts that information as an authorized session.</p>
<p>Obtain a relevant service-side session result or protected-request outcome. Browser storage and server acceptance are different findings. A cookie can remain visible without proving either continuing access or successful termination, so check the receiving service rather than treating stored browser data as a complete access test.</p>
</div>
</details>

<a id="q06"></a>

### Q06. Two time limits

<p class="qb-question"><strong>Question:</strong> Okta’s global session policy has a maximum lifetime and an idle limit. Expense maintains its own application session with separately defined behavior. How do the two Okta time limits differ, and what should not be inferred about Expense?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Maximum lifetime limits overall session duration. An idle limit concerns inactivity as evaluated by the service. Read which session and policy each limit belongs to.</p>
<p>Neither Okta value establishes Expense's local-session lifetime. Session continuation and a current request's need for renewed authentication are also separate questions. Keeping those boundaries clear prevents an Okta time limit from becoming an unsupported claim about when an application must stop accepting its session.</p>
</div>
</details>

<a id="q07"></a>

### Q07. Valid session, new proof

<p class="qb-question"><strong>Question:</strong> Daniel’s Okta session is valid, but an application sign-in rule requires renewed proof for the current request. Another request might reuse previous proof if it meets its requirements. Can reauthentication occur without the Okta session expiring?</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Yes. Reauthentication is another required authentication check for an access request. A valid Okta session does not make all previous evidence sufficient for every application rule.</p>
<p>Inspect the selected rule and evaluated context. Existing proof can be reusable when it satisfies the applicable requirements, but there is no universal one-prompt-per-session rule. A new challenge is therefore not, by itself, evidence that the earlier sign-in was ignored or the session ended.</p>
</div>
</details>

<a id="q08"></a>

### Q08. Every application click?

<p class="qb-question"><strong>Question:</strong> Expense establishes its own session after sign-in. Its owner confirms that ordinary protected-page requests check that local session rather than initiating a fresh Okta exchange. Does an Okta app sign-in rule require every click inside this established Expense session to return to Okta?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The app sign-in rule acts when the application's sign-in flow reaches Okta. In this supplied implementation, ordinary protected requests instead use Expense's local session.</p>
<p>That behavior must come from the application, not an assumption about every product. Identify whether the current request initiated a new sign-in or reused an established application session. The route tells you which service's evidence can explain the observed access decision.</p>
</div>
</details>

## Actual policy and rule selection

<a id="q09"></a>

### Q09. Name versus applied rule

<p class="qb-question"><strong>Question:</strong> An authentication policy is named “Expense security,” and Daniel receives a challenge. The application’s policy association, ordered rules, and actual evaluated group and device context have not been inspected. Does the policy title establish which rule matched?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The title is descriptive, not selection evidence. Check the application's actual policy association, rule order, evaluated conditions, and matching result for the attempt.</p>
<p>Daniel's usual location or expected group cannot replace the values evaluated during this request. Use the policy name to locate the configuration, then use the attempt evidence to explain its requirement. Intended protection and actual rule application are separate facts that need to agree.</p>
</div>
</details>

<a id="q10"></a>

### Q10. Which rule wins?

<p class="qb-question"><strong>Question:</strong> An application authentication policy evaluates rules in priority order. A broad rule matches Daniel above a stricter sensitive-population rule that would also describe him. Does the stricter lower rule automatically override or add its requirement to the selected broad rule?</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. In this ordered evaluation, the matching rule supplies the action. A stricter rule placed lower is not automatically added afterward.</p>
<p>Inspect the actual order and evaluated context before claiming the intended protection applied. Rule priority here selects authentication behavior; profile-source priority instead concerns data ownership. Familiar wording should not obscure the different job. If the observed selection conflicts with the approved design, that discrepancy needs an appropriately scoped correction.</p>
</div>
</details>

<a id="q11"></a>

### Q11. Shared policy scope

<p class="qb-question"><strong>Question:</strong> Expense and another application share one authentication policy. Support proposes changing an Expense-related rule, but has reviewed only Daniel’s request. Why must the other application and affected populations be considered before and after the change?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A shared policy change can alter more than the application named in the ticket. Check its application associations and affected populations before deciding the correction's scope.</p>
<p>Afterward, verify the other intended paths as well as Daniel's. One successful test cannot show that all applications sharing the policy retained their approved behavior. Define the expected selection and proof for each relevant case, then compare those expectations with fresh attempt evidence.</p>
</div>
</details>

## Explain a correctly selected challenge

<a id="q12"></a>

### Q12. Explain an expected challenge

<p class="qb-question"><strong>Question:</strong> Daniel has a valid Okta session and a confirmed Expense assignment and account. Expense’s intended authentication rule correctly matches his observed group and context. It requires password plus allowed possession proof, with separately configured freshness requirements. His password proof remains acceptable, but possession proof is insufficiently recent. Eligible Okta Verify enrollment is present and Push is allowed; a new challenge is issued with no accepted response yet. Why is another challenge consistent with the supplied requirement?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The existing possession evidence does not meet the selected freshness requirement. Daniel's valid session and acceptable password proof do not supply the missing newer possession proof.</p>
<p>Eligible enrollment makes an allowed method available, but it is not an accepted response to this challenge. The issued Push request fits the supplied rule. Explain what proof is needed, then inspect its current outcome instead of diagnosing a policy defect merely because another prompt appeared.</p>
</div>
</details>

<a id="q13"></a>

### Q13. Use the supplied freshness evaluation

<p class="qb-question"><strong>Question:</strong> Daniel has a valid Okta session and a confirmed Expense assignment and account. Expense’s intended authentication rule correctly matches his observed group and context. It requires password plus allowed possession proof, with separately configured freshness requirements. His password proof remains acceptable, but possession proof is insufficiently recent. Eligible Okta Verify enrollment is present and Push is allowed; a new challenge is issued with no accepted response yet. Must a reviewer invent a universal factor interval or assume password and possession proof share the same freshness period to explain the challenge?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Freshness asks whether previous proof is recent enough under the applicable requirement. The supplied evaluation already says password evidence is acceptable and possession freshness is not.</p>
<p>Reason from those findings and the separately configured requirements. Another rule or context could evaluate prior proof differently. The useful comparison is this evidence against this requirement, rather than a generic belief about how recently someone must have authenticated.</p>
</div>
</details>

<a id="q14"></a>

### Q14. Enrollment is not current proof

<p class="qb-question"><strong>Question:</strong> Daniel has a valid Okta session and a confirmed Expense assignment and account. Expense’s intended authentication rule correctly matches his observed group and context. It requires password plus allowed possession proof, with separately configured freshness requirements. His password proof remains acceptable, but possession proof is insufficiently recent. Eligible Okta Verify enrollment is present and Push is allowed; a new challenge is issued with no accepted response yet. Does completed enrollment answer the current Push challenge, and does issuance prove delivery or acceptance?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Enrollment establishes registration and an eligible method. It does not perform the current challenge on Daniel's behalf. Issuance also does not establish delivery, his response, or acceptance.</p>
<p>If he cannot complete the interaction, inspect the selected device, user experience, and recorded outcome. Setup prepares a person to use a method; current proof shows what happened in this attempt. Keep both observations rather than treating successful registration as every later authentication result.</p>
</div>
</details>

<a id="q15"></a>

### Q15. An expected prompt is not a defect

<p class="qb-question"><strong>Question:</strong> Daniel has a valid Okta session and a confirmed Expense assignment and account. Expense’s intended authentication rule correctly matches his observed group and context. It requires password plus allowed possession proof, with separately configured freshness requirements. His password proof remains acceptable, but possession proof is insufficiently recent. Eligible Okta Verify enrollment is present and Push is allowed; a new challenge is issued with no accepted response yet. Would removing the freshness requirement simply to eliminate the prompt repair a demonstrated policy defect?</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The supplied facts show correct selection of the intended rule, not a policy defect. The challenge follows from the missing fresh possession evidence.</p>
<p>Removing that requirement would change the approved access decision. Guide the current interaction or investigate its actual failure instead. The goal is accepted proof under the requirement, not merely fewer prompts. Any change to the requirement needs its own justified business and security decision.</p>
</div>
</details>

<a id="q16"></a>

### Q16. Keep confirmed account facts

<p class="qb-question"><strong>Question:</strong> Daniel has a valid Okta session and a confirmed Expense assignment and account. Expense’s intended authentication rule correctly matches his observed group and context. It requires password plus allowed possession proof, with separately configured freshness requirements. His password proof remains acceptable, but possession proof is insufficiently recent. Eligible Okta Verify enrollment is present and Push is allowed; a new challenge is issued with no accepted response yet. Could the reviewer explain this challenge as a missing assignment or a need to create another Expense account?</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The prompt explicitly verifies Daniel's assignment and existing account. The supplied gap concerns possession-proof freshness for the current authentication request.</p>
<p>Preserve those account findings while following the challenge and its response. Creating another account or changing assignment would address a different problem. Choose the next check from the facts of this attempt, rather than importing a familiar explanation that contradicts the verified relationships.</p>
</div>
</details>

<a id="q17"></a>

### Q17. What verified entry establishes

<p class="qb-question"><strong>Question:</strong> For one Daniel sign-in, current Push is accepted and Okta’s applicable requirements are satisfied. Expense’s backend completes its OpenID Connect (OIDC) exchange and validation, selects his intended account, establishes a local session, and returns a protected page. What outcome is verified, and what permission remains unchecked?</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>This verifies application entry for the correlated attempt. The evidence covers accepted authentication, the sign-in exchange and validation, intended account selection, session establishment, and a protected response.</p>
<p>OIDC supplies identity information through the sign-in exchange; Expense's business permissions still answer what Daniel may do afterward. No particular expense-approval action is checked here. Report the verified entry precisely without extending it to every capability or an unrelated earlier attempt.</p>
</div>
</details>

## Investigate a selection defect

<a id="q18"></a>

### Q18. Find the selection discrepancy

<p class="qb-question"><strong>Question:</strong> Expense’s approved design puts a restrictive rule for a sensitive population above a general rule. The observed configuration instead places a broad matching rule first. Daniel belongs to the sensitive population, but evaluation selects the broad rule without the intended additional proof. What demonstrated discrepancy should support investigate and correct?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The actual rule selection conflicts with the approved order. The broad rule supplies its decision before the intended restrictive rule is reached.</p>
<p>Inspect application associations, conditions, priority, and affected populations, then propose restoring the approved selection behavior. Verify both the sensitive path and other expected paths afterward. The diagnosis comes from the requirement and actual evaluation together, rather than simply from whether Daniel encountered a prompt.</p>
</div>
</details>

<a id="q19"></a>

### Q19. Getting in can still be wrong

<p class="qb-question"><strong>Question:</strong> Expense’s approved design puts a restrictive rule for a sensitive population above a general rule. The observed configuration instead places a broad matching rule first. Daniel belongs to the sensitive population, but evaluation selects the broad rule without the intended additional proof. Daniel receives a protected Expense page. Does successful entry establish that the approved authentication protection was met?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The supplied evaluation shows the intended additional proof was not required. Entry succeeded, but the approved protection was not established.</p>
<p>Judge success against the required behavior as well as the functional result. A page return cannot undo evidence of an inappropriate rule selection. Report both findings so the reviewer sees what worked and why the authentication configuration still needs correction.</p>
</div>
</details>

<a id="q20"></a>

### Q20. Verify both paths after correction

<p class="qb-question"><strong>Question:</strong> Expense’s approved design puts a restrictive rule for a sensitive population above a general rule. The observed configuration instead places a broad matching rule first. Daniel belongs to the sensitive population, but evaluation selects the broad rule without the intended additional proof. After an approved ordering correction, why verify a sensitive-population request and another request expected to select a different rule?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The sensitive request checks that the intended restrictive rule is now reached. The other request checks that users meant to follow a different path retain their approved behavior.</p>
<p>Also consider other applications sharing the policy. Predict each selection and required proof before evaluating the results. One person's successful entry leaves broader consequences unchecked, while clear predictions make each test about a specific requirement rather than a general wish to get in.</p>
</div>
</details>

<a id="q21"></a>

### Q21. Keep independent rule evaluations separate

<p class="qb-question"><strong>Question:</strong> In independent case A, the intended Expense rule selects correctly and issues a challenge because possession proof is too old. In case B, a broad rule wrongly precedes the approved restrictive rule and omits intended proof. Should case B’s ordering defect explain case A?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Case A supplies correct rule selection and an expected need for newer proof. Case B supplies different configuration and evaluation evidence that demonstrates a defect.</p>
<p>Compare them to understand what changes the conclusion, but keep each rule, context, and result with its own attempt. Borrowing the defect would rewrite case A's facts, just as case A's correct selection could not establish that case B met its protection requirement.</p>
</div>
</details>

## Correlate events and application evidence

<a id="q22"></a>

### Q22. Event, transaction, session

<p class="qb-question"><strong>Question:</strong> During a browser sign-in journey, Okta records multiple events, some sharing a transaction identifier, while the user session continues across later operations. How do an event, a transaction, and a session describe different parts of this evidence?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>An event is one recorded occurrence. A transaction groups events within an operation. A session can span several operations over the user's continuing interaction.</p>
<p>Different event identifiers can therefore belong to the same transaction, and a later transaction can relate to the same session. Use each identifier for its actual job. Do not force the whole browser journey into one transaction or assume different event IDs mean completely unrelated interactions.</p>
</div>
</details>

<a id="q23"></a>

### Q23. Choose correlation fields

<p class="qb-question"><strong>Question:</strong> A reviewer correlates Okta System Log records using event uuid, transaction.id, authenticationContext.externalSessionId, and authenticationContext.rootSessionId where available. The records concern several operations in a sign-in journey. What relationship does each field help establish?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Event UUID identifies one event; transaction ID connects events within an operation. External session ID supplies Okta user-session context, while root session ID supplies related-session context where available.</p>
<p>These fields are not interchangeable, and usable context may be absent from some records. Begin with the actor, application instance, sequence, and observed behavior, then use the identifiers to support correlation. A field's name cannot establish a relationship that the evidence does not actually supply.</p>
</div>
</details>

<a id="q24"></a>

### Q24. Okta and application session identifiers

<p class="qb-question"><strong>Question:</strong> An Okta event contains authenticationContext.externalSessionId K. Expense independently creates local session E after sign-in. No evidence equates the identifiers. Does the word “external” make K the identifier of Expense’s own application session?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. That field supplies Okta user-session context. Its name does not turn it into Expense's local-session identifier.</p>
<p>Use supported correlation between the Okta and application records for validation, account association, and session outcomes. Cross-system identifiers need not be identical. Keeping K and E distinct helps you ask which service owns each decision, without inventing equality or treating one session's result as the other's.</p>
</div>
</details>

<a id="q25"></a>

### Q25. A missing session field

<p class="qb-question"><strong>Question:</strong> An Okta event matches the relevant actor, application target, action, and investigation time, but has no usable session identifier. Other operation evidence is available. Should the reviewer discard it solely because that session field is missing?</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Evaluate the actor, target, action, outcome, timing, sequence, and other available identifiers. A missing session field limits correlation but does not automatically make the event irrelevant.</p>
<p>Do not invent a session link either. State which relationships are supported and which remain uncertain. Correlation uses the evidence actually available, so a useful occurrence can contribute to an investigation without proving every connection in the browser journey.</p>
</div>
</details>

<a id="q26"></a>

### Q26. An empty log search

<p class="qb-question"><strong>Question:</strong> A System Log search returns no event for Daniel’s Expense attempt. Its filters, application instance, time range, and coverage have not been validated. Does the empty result establish that the relevant action never occurred?</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Not by itself. The search may have unsuitable filters or incomplete coverage. Check the person, application instance, time range, sequence, and query scope before making an absence claim.</p>
<p>An empty search is a finding about that search, not automatically the entire incident. A nearby success for another person or an earlier attempt cannot fill the missing evidence either. Obtain records that actually cover the operation being investigated.</p>
</div>
</details>

<a id="q27"></a>

### Q27. Okta success and application evidence

<p class="qb-question"><strong>Question:</strong> Okta records authentication or single-sign-on success for Daniel’s Expense attempt. Expense uses OpenID Connect (OIDC) and maintains its own account association and local session. Which application records would support verified entry beyond the single Okta-side success?</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Obtain correlated Expense evidence for its OIDC exchange and validation, selection of Daniel's intended account, local-session establishment, and an accepted protected request.</p>
<p>Those answer application-side questions the Okta event alone cannot supply. Correlation should connect the same person, instance, and attempt without assuming both services use identical identifiers. Keep each success attached to its action and receiving system so one authentication result does not become every later application outcome.</p>
</div>
</details>

## Separate service-owned sessions

<a id="q28"></a>

### Q28. One browser, two destinations

<p class="qb-question"><strong>Question:</strong> One browser sends requests to Okta using session information K and to Expense using separate local-session information E. Each service validates the information intended for it. Does this require two users or devices, and does one session’s acceptance establish the other’s?</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The same browser can interact with two destinations and present the relevant session information to each. Okta checks K; Expense checks E.</p>
<p>Each receiving service owns its session decision. Separate labels describe separate relationships, not necessarily separate people or devices. Acceptance or termination at one destination does not supply the other's result, so use the corresponding service evidence when explaining a protected request.</p>
</div>
</details>

<a id="q29"></a>

### Q29. The ID token is not the local session

<p class="qb-question"><strong>Question:</strong> Expense validates an OpenID Connect ID token during sign-in and then establishes its own local session. Later the token expires, but no application session result is supplied. Does token expiration alone demonstrate termination of the previously created local session?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The ID token supplies identity information in the sign-in exchange, while the application session is a different object created under Expense's behavior.</p>
<p>Inspect that behavior and the actual session outcome to establish termination. Token expiration alone does not supply it. Similarly, an account-management active-false result is not a session-termination receipt. Verify the outcome the requirement names instead of substituting a related object's state.</p>
</div>
</details>

<a id="q30"></a>

### Q30. Read the two session outcomes

<p class="qb-question"><strong>Question:</strong> An approved action ends Daniel’s Okta session K. A later request cannot reuse K. Expense, a separate application, still accepts a new protected request through its local session E. Its owner verifies that E remains valid and the request initiated no new Okta sign-in. Employment and assignment are unchanged; no account deactivation occurred. What separate session outcomes are established?</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The checked Okta session ended and cannot be reused. The checked Expense session remains valid and supplies protected access. The owner's evidence rules out a new Okta sign-in for that request.</p>
<p>Keep the successful Okta outcome and the separate Expense finding. Completion depends on which sessions the requirement targeted. If Expense also needed to end, its supported termination action and verification remain outstanding despite the completed action at Okta.</p>
</div>
</details>

<a id="q31"></a>

### Q31. Session termination is not deactivation

<p class="qb-question"><strong>Question:</strong> An approved action ends Daniel’s Okta session K. A later request cannot reuse K. Expense, a separate application, still accepts a new protected request through its local session E. Its owner verifies that E remains valid and the request initiated no new Okta sign-in. Employment and assignment are unchanged; no account deactivation occurred. Does the working Expense session demonstrate a failed Okta account deactivation?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No account deactivation occurred here. The action targeted a session, while employment and assignment remained unchanged. Adding a deactivation conclusion would change the incident.</p>
<p>Describe the verified operation: K ended, while E remained valid. Account state, application assignment, and session authority are different observations. Use the action actually supplied rather than allowing a session investigation to become an account-lifecycle event that the evidence never established.</p>
</div>
</details>

<a id="q32"></a>

### Q32. Scope determines completion

<p class="qb-question"><strong>Question:</strong> An approved action ends Daniel’s Okta session K. A later request cannot reuse K. Expense, a separate application, still accepts a new protected request through its local session E. Its owner verifies that E remains valid and the request initiated no new Okta sign-in. Employment and assignment are unchanged; no account deactivation occurred. How does completion differ if the approved requirement targeted only K versus both K and E?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>For K alone, ended-session confirmation and failed reuse support the scoped outcome. For both services, Expense's accepted request shows that the wider requirement remains unfinished.</p>
<p>The application owner needs to complete and verify its supported termination action. A request using the terminated E should no longer succeed; distinguish that test from a new session established later. The same findings can support narrow completion and wider unfinished work because the required scope differs.</p>
</div>
</details>

## Define and verify logout scope

<a id="q33"></a>

### Q33. Local logout’s scope

<p class="qb-question"><strong>Question:</strong> Expense verifies that its local logout ended Daniel’s application session E. No coordinated logout or termination evidence is supplied for Okta or other applications. Does this local result establish that every session in the browser has ended?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Local logout ends the application's session under its implementation. Other services retain their own session state and need separate outcome evidence where required.</p>
<p>Identify the sessions targeted by the approved requirement and verify each. If an Okta session remains, a later app sign-in may reuse acceptable proof. The local logout result is meaningful, but its label does not establish coordinated termination across services that were never checked.</p>
</div>
</details>

<a id="q34"></a>

### Q34. Prompt-free return after logout

<p class="qb-question"><strong>Question:</strong> After verified Expense local logout, Daniel returns without a visible authentication prompt. An Okta session remains, but the new sign-in flow and Expense session identifiers are unchecked. Does the prompt-free return necessarily prove reuse of the old Expense session?</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Not necessarily. A remaining Okta session may provide acceptable evidence for a new application sign-in, leading Expense to establish a different local session.</p>
<p>Inspect correlated sign-in and session records to distinguish new creation from reuse. The visible prompt count cannot decide between them. A termination test concerns the old session's continuing authority, not simply whether the browser displays a password screen during a later return.</p>
</div>
</details>

<a id="q35"></a>

### Q35. Single Logout is bounded

<p class="qb-question"><strong>Question:</strong> A company plans Single Logout (SLO) across several applications. Some support and participate in the configured integration, while others are unchecked. What does SLO coordinate, and why does the feature name not establish successful termination of all sessions?</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Single Logout coordinates logout across participating integrations when supported and configured. Its reach depends on those participants and their actual results.</p>
<p>Identify the required sessions, supported actions, delivery, and termination evidence. Do not infer participation or success from the capability's name. It can serve a shared logout requirement, but it is not a universal instruction covering every service. Unchecked applications still need their own decisions and outcome verification.</p>
</div>
</details>

<a id="q36"></a>

### Q36. Choose a useful termination test

<p class="qb-question"><strong>Question:</strong> Expense’s owner performs an approved action intended to terminate local session E. A later protected request can either present old E or follow a new sign-in that establishes another session. What distinction makes the termination test meaningful?</p>

<details class="qb-answer" id="q36-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check whether the old E still authorizes the protected request. A successful new sign-in creating a different session answers a separate question and should not be mistaken for old-session reuse.</p>
<p>Keep the account, session, termination action, and request correlated. A fresh protected response using old E would show the intended termination was not established. Session evidence is more useful than prompt visibility because the requirement concerns that session's continuing authority.</p>
</div>
</details>

<a id="q37"></a>

### Q37. One incident does not prove another’s cause

<p class="qb-question"><strong>Question:</strong> In Daniel’s case, an application owner verifies protected access through a separate local session after his Okta session ends. In independent Jordan’s case, protected access persists after departure, but the mechanism is unknown. Does Daniel’s finding establish Jordan’s cause?</p>

<details class="qb-answer" id="q37-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It illustrates a possible way access can persist, but it does not prove Jordan's cause. Obtain Jordan's actual account, session, operation, and removal-requirement evidence.</p>
<p>Verify his outcome independently rather than borrowing Daniel's owner findings. A useful example can teach a mechanism without supplying another incident's missing facts. Keep that distinction so the investigation benefits from the session concept while remaining grounded in the person and request actually being reviewed.</p>
</div>
</details>

## Predict changes and explain the result

<a id="q38"></a>

### Q38. Predict before changing

<p class="qb-question"><strong>Question:</strong> Support proposes an approved change to an application authentication rule in a policy that may be shared. Rule order, conditions, required proof, and affected populations need review. What should be recorded and predicted before evaluating the change?</p>

<details class="qb-answer" id="q38-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Record the policy, application associations, rule order, conditions, and required proof. Identify an eligible user, an excluded user, and an existing-session situation, then predict selection and expected authentication for each.</p>
<p>Those predictions give follow-up checks clear targets. Include other applications sharing the policy so their approved behavior is preserved. The aim is the required selection and proof, rather than simply reducing prompts or making one user's test succeed.</p>
</div>
</details>

<a id="q39"></a>

### Q39. Condition versus required proof

<p class="qb-question"><strong>Question:</strong> An Expense authentication rule has a Finance-group condition and a requirement for specified proof with a freshness limit. How does the group condition differ from the authentication requirement, and why must a reviewer inspect both?</p>

<details class="qb-answer" id="q39-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The group condition helps decide who matches the rule. The requirement determines what proof the matching request must provide. Selection and authentication are related, but they answer different questions.</p>
<p>Changing rule order may change which requirement is reached; changing freshness changes acceptable proof age. Neither creates enrollment or grants an Expense business permission. Check both condition and requirement so the right population is asked for the approved proof.</p>
</div>
</details>

<a id="q40"></a>

### Q40. Changing freshness does not enroll

<p class="qb-question"><strong>Question:</strong> A user needs an enrolled possession authenticator for application authentication, but the required registration is absent. A colleague suggests changing the rule’s proof-freshness requirement instead of addressing setup. Would a change in acceptable proof age create the missing enrollment?</p>

<details class="qb-answer" id="q40-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Freshness evaluates how recent previous proof must be. Enrollment establishes the registration or device relationship needed to use the method.</p>
<p>Investigate the missing setup through the approved process. Changing when proof may be reused cannot create a registration that does not exist. Identify the actual gap before changing policy, so a configuration adjustment is not mistaken for completion of a different authentication step.</p>
</div>
</details>

<a id="q41"></a>

### Q41. Repair a misleading update

<p class="qb-question"><strong>Question:</strong> An approved action ends Daniel’s Okta session K. A later request cannot reuse K. Expense, a separate application, still accepts a new protected request through its local session E. Its owner verifies that E remains valid and the request initiated no new Okta sign-in. Employment and assignment are unchanged; no account deactivation occurred. Improve this update: “Daniel was signed out everywhere because Okta succeeded.”</p>

<details class="qb-answer" id="q41-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Okta confirmed K ended, and a subsequent request could not reuse it. Expense still accepted the checked local session E without a new Okta sign-in. If the requirement includes Expense, its supported termination and verification remain outstanding.”</p>
<p>That preserves the completed Okta action while naming the separate unfinished outcome. No account deactivation or universal logout result is supplied. Precise scope makes the handoff useful to the owner who must address the remaining session.</p>
</div>
</details>

<a id="q42"></a>

### Q42. Explain the expected challenge kindly

<p class="qb-question"><strong>Question:</strong> Daniel has a valid Okta session and a confirmed Expense assignment and account. Expense’s intended authentication rule correctly matches his observed group and context. It requires password plus allowed possession proof, with separately configured freshness requirements. His password proof remains acceptable, but possession proof is insufficiently recent. Eligible Okta Verify enrollment is present and Push is allowed; a new challenge is issued with no accepted response yet. Give a friendly answer to Daniel’s question: “I’m already signed in; why do I need to do this again?”</p>

<details class="qb-answer" id="q42-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>You could say: “Your Okta session is still valid. Expense's current rule also needs possession proof recent enough for this request. Your password proof is acceptable, but the earlier device proof does not meet that freshness requirement, so a new Push check is expected.”</p>
<p>Then explain that enrollment makes the method available while this response still needs acceptance. That identifies the missing proof without claiming his assignment, account, or session disappeared.</p>
</div>
</details>

[Day 13 lesson](../lessons/day-13-policies-and-sessions.md) · [Day 13 recap](../revision/day-13.md) · [Question bank](index.md)
