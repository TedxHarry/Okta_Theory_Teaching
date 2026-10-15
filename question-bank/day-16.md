---
title: "Day 16 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 16
---

# Day 16: Questions

## Choose a question and useful boundary cases

<a id="q01"></a>

### Q01. A small first experiment

<p class="qb-question"><strong>Question:</strong> A learner plans an authorized identity training exercise. They can ask whether Finance AND Employee selects the intended group members, or attempt to “make all access work” across accounts, sign-in, and permissions. Why is the narrower first question easier to investigate?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It identifies one relationship and a result you can predict. Membership can be checked against inputs and rule processing without changing several account and access boundaries at once.</p>
<p>A small experiment is useful when its conclusion stays small. Correct membership teaches something concrete even though it does not establish account creation, application entry, or permissions. Start with the defined comparison, then add another relationship as a separate question.</p>
</div>
</details>

<a id="q02"></a>

### Q02. Predict the four profiles

<p class="qb-question"><strong>Question:</strong> Four synthetic training profiles are Casey Finance/Employee, Morgan Sales/Contractor, Riley Finance/Contractor, and Taylor Sales/Employee. The intended group condition is department Finance AND workerType Employee, with no contractor exception. Before observing rule processing, who should satisfy the intended logical condition, and how should this prediction be labeled?</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Only Casey meets both conditions. Morgan meets neither, Riley meets Finance only, and Taylor meets Employee only. AND requires both parts to be true.</p>
<p>These are predicted results, not observed memberships. Actual testing still needs the intended fields, applicable user states, active rule, exclusions, and processing evidence. Write the expectation first so later results can be compared with the requirement instead of deciding what should happen after seeing the screen.</p>
</div>
</details>

<a id="q03"></a>

### Q03. Predict the broader mistake

<p class="qb-question"><strong>Question:</strong> Four synthetic training profiles are Casey Finance/Employee, Morgan Sales/Contractor, Riley Finance/Contractor, and Taylor Sales/Employee. The intended group condition is department Finance AND workerType Employee, with no contractor exception. For a paper comparison only, which profiles would satisfy Finance OR Employee instead, and what does that reveal?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Casey, Riley, and Taylor satisfy OR; Morgan does not. OR requires at least one condition, while AND requires both.</p>
<p>Riley and Taylor expose the broader population because each meets just one part. Casey and Morgan have the same predictions under both expressions. This is a hypothetical comparison, not a direction to activate the wrong rule. It helps explain which profiles can reveal an error in the intended logic.</p>
</div>
</details>

<a id="q04"></a>

### Q04. Why Casey and Morgan are insufficient

<p class="qb-question"><strong>Question:</strong> Four synthetic training profiles are Casey Finance/Employee, Morgan Sales/Contractor, Riley Finance/Contractor, and Taylor Sales/Employee. The intended group condition is department Finance AND workerType Employee, with no contractor exception. The learner checks only Casey included and Morgan excluded. Why could those two results fail to detect a mistaken Finance OR Employee condition?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Both results are predicted under AND and OR. Neither tests a profile that meets exactly one part of the expression.</p>
<p>Riley tests Finance without Employee, and Taylor tests Employee without Finance. Their intended exclusions distinguish the approved condition from the broader mistake. Choose negative cases that challenge the boundary, not merely easy exclusions. A limited test can pass even when the population logic is wrong.</p>
</div>
</details>

<a id="q05"></a>

### Q05. Do not rewrite a contractor

<p class="qb-question"><strong>Question:</strong> A training rule requires Finance AND Employee, and Riley is deliberately a Finance contractor with no approved exception. A learner proposes changing workerType to Employee so Riley appears in the group. Why would that undermine the intended test?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Riley should fail the normal condition. Changing the classification would misrepresent the training requirement and remove a useful boundary case.</p>
<p>If an exception exercise is wanted later, define its own approval, scope, owner, and end condition. Classification and access exceptions answer different questions. Test the agreed condition against the supplied person rather than changing the person until the rule produces the desired membership.</p>
</div>
</details>

## Identify environment, inputs, and processing

<a id="q06"></a>

### Q06. A familiar browser tab

<p class="qb-question"><strong>Question:</strong> A learner is ready to make an approved training change and sees an Okta browser tab with a familiar application name. The organization and integration instance have not been verified. What environment facts are needed before treating it as the intended destination?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Identify the training organization, application integration instance, and target environment if one is involved. Confirm who may change them and who can restore the prior state.</p>
<p>A familiar tab or name is not environment evidence. The written plan can be completed without a tenant; execution needs the authorized training destination and synthetic identities. Naming those facts keeps the experiment's observations tied to the place where its actions are actually permitted.</p>
</div>
</details>

<a id="q07"></a>

### Q07. Synthetic data versus an HR import

<p class="qb-question"><strong>Question:</strong> In an authorized training organization, a learner enters synthetic department and workerType values directly into Okta. A group evaluation produces the predicted membership. No Workday HR import occurs. Does the experiment verify Workday sourcing as well as membership?</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It tests the central-profile input and membership relationship using entered training data. It does not supply an HR source operation or import result.</p>
<p>Label that boundary clearly. If the environment has an existing source connection, check field ownership and supported update behavior before editing sourced values. Success from one setup should not be described as verification of a different architecture that the experiment never exercised.</p>
</div>
</details>

<a id="q08"></a>

### Q08. Check the actual fields

<p class="qb-question"><strong>Question:</strong> An approved group experiment uses department Finance AND workerType Employee. The written plan lists those fields, but the training schema, stored profiles, and expression references are unchecked. Why inspect all three before interpreting membership?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The intended attributes must exist, contain the supplied values, and be the fields actually referenced by the rule. A field written in a plan is not evidence of its definition or data in the organization.</p>
<p>Inspect the schema, central profiles, and rule references. Then a mismatch can be traced to its demonstrated boundary. Otherwise missing input or a wrong field reference might be mistaken for faulty comparison logic.</p>
</div>
</details>

<a id="q09"></a>

### Q09. Active-user context

<p class="qb-question"><strong>Question:</strong> Four synthetic training profiles are Casey Finance/Employee, Morgan Sales/Contractor, Riley Finance/Contractor, and Taylor Sales/Employee. The intended group condition is department Finance AND workerType Employee, with no contractor exception. The exercise uses attribute-rule behavior applicable to Active users and specifies no different status condition. Why record all four users’ actual account states before attributing missing membership to department logic?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>An inactive profile can make absence misleading when the evaluation is scoped to Active users. Record state so the department and classification comparison is tested within the intended processing context.</p>
<p>Still check rule state, exclusions, evaluation, and stored membership. Matching profile values alone do not establish the result. Holding the relevant conditions clear helps the learner isolate the comparison instead of diagnosing a logic defect from an unexplained absence.</p>
</div>
</details>

<a id="q10"></a>

### Q10. Saved rule, unchanged members

<p class="qb-question"><strong>Question:</strong> A learner saves the intended Finance AND Employee group rule. It is initially Inactive, and no evaluation result is supplied. Membership has not changed. What should be checked before diagnosing an incorrect expression?</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check activation and the relevant evaluation. Saving the rule does not establish that the mechanism operated under its intended conditions.</p>
<p>Keep expression, rule state, processing, and stored membership separate. No change after saving can reflect an inactive mechanism rather than a bad comparison. Only once the applicable execution conditions are established can the observed membership meaningfully test the condition.</p>
</div>
</details>

<a id="q11"></a>

### Q11. Four planned people, wider rule scope

<p class="qb-question"><strong>Question:</strong> Four synthetic training profiles are Casey Finance/Employee, Morgan Sales/Contractor, Riley Finance/Contractor, and Taylor Sales/Employee. The intended group condition is department Finance AND workerType Employee, with no contractor exception. Activating the rule can evaluate matching profiles across the training organization, and the dedicated group has no app assignments. Does naming four people in the plan limit actual evaluation to only them?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The written population and actual configuration scope are different. Review other profiles the condition could include and preview the planned cases before activation.</p>
<p>The group has no application assignments here, keeping the outcome focused on membership. That does not make its evaluation scope four named users. Understand both the test cases and wider condition so observations and possible effects are interpreted within the actual organization.</p>
</div>
</details>

<a id="q12"></a>

### Q12. The starting state

<p class="qb-question"><strong>Question:</strong> An authorized experiment will add a group-based application assignment for a synthetic user. Existing profiles, memberships, direct assignments, and target associations are unknown. What starting evidence would help distinguish the new experiment’s effects from relationships already present?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Record relevant profile values, group memberships, assignment sources, and target-account associations before the intended change. This is the baseline for comparison.</p>
<p>An existing direct assignment could make an application available even if the new group did nothing. The starting state is evidence for explaining cause, not setup for its own sake. Keep it beside the later result so a pre-existing relationship is not credited to the new action.</p>
</div>
</details>

## Compare predictions with observed results

<a id="q13"></a>

### Q13. Prediction before action

<p class="qb-question"><strong>Question:</strong> Four synthetic training profiles are Casey Finance/Employee, Morgan Sales/Contractor, Riley Finance/Contractor, and Taylor Sales/Employee. The intended group condition is department Finance AND workerType Employee, with no contractor exception. The authorized membership experiment has not run. What should the learner write before acting so predictions, required evidence, and later observations remain distinct?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Record each profile's inputs, the intended Finance AND Employee condition, and the expected membership. Identify the rule-state and processing evidence needed to interpret actual results.</p>
<p>That gives the experiment a clear question before the interface supplies an answer. Keep the action as planned until it occurs, and record real results afterward, including mismatches. Predictions should not quietly become success claims because they seem obvious on paper.</p>
</div>
</details>

<a id="q14"></a>

### Q14. A completed negative test

<p class="qb-question"><strong>Question:</strong> Morgan is a synthetic Sales contractor and should not match Finance AND Employee. The group screen shows Morgan absent, but rule activation and relevant evaluation are unchecked. Does the unchanged display establish a completed negative test?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Not yet. Establish that Morgan had the relevant opportunity to be evaluated under the intended rule and context. Absence could otherwise reflect a mechanism that never ran.</p>
<p>Record the inputs, active state, applicable processing, and membership observation. Those findings make exclusion meaningful. A negative result needs evidence of the tested operation, not merely a screen that already looked unchanged.</p>
</div>
</details>

<a id="q15"></a>

### Q15. One changed condition

<p class="qb-question"><strong>Question:</strong> A later approved training exercise changes Casey’s department to study membership removal. The learner also considers changing the rule logic and application assignment at the same time. Why should the department comparison be observed separately first?</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Simultaneous changes make it harder to explain which one produced the result. Preserve a clear before-and-after comparison around the intended input.</p>
<p>State the changed training requirement, predict membership, change that input, and observe the relevant processing and membership. Add another relationship as its own question later. One changed condition makes an unexpected result easier to trace without filling missing evidence with a guessed cause.</p>
</div>
</details>

<a id="q16"></a>

### Q16. A mismatch is useful evidence

<p class="qb-question"><strong>Question:</strong> An authorized training rule should include only profiles meeting Finance AND Employee. Observed membership differs from the recorded prediction, but the actual fields, exclusions, active state, and evaluation details are unchecked. Should the learner change the prediction to fit the display?</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Keep the approved expectation and locate the earliest demonstrated discrepancy. Inspect actual inputs, condition, exclusions, state, processing, and membership evidence.</p>
<p>A mismatch can teach where the relationship differs from the plan. Rewriting the prediction hides that learning. Record the finding and next evidence needed rather than forcing a tidy success. The purpose is an explainable comparison, which remains useful even when its initial result is unexpected.</p>
</div>
</details>

<a id="q17"></a>

### Q17. A membership result’s limits

<p class="qb-question"><strong>Question:</strong> Four synthetic training profiles are Casey Finance/Employee, Morgan Sales/Contractor, Riley Finance/Contractor, and Taylor Sales/Employee. The intended group condition is department Finance AND workerType Employee, with no contractor exception. All four observed memberships match the AND predictions with relevant evaluation evidence. The dedicated group has no application assignment. What result is verified, and what remains outside this experiment?</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The checked profiles produced the intended membership in this rule context. That is a verified result for the defined question.</p>
<p>Application assignment, target accounts, entry, and business permissions were not tested. The narrow setup helps isolate membership without pretending it covers every access boundary. Report the scoped success precisely, then plan another relationship with its own prediction and evidence when the learner is ready.</p>
</div>
</details>

## Add assignment and account boundaries

<a id="q18"></a>

### Q18. A new question to test

<p class="qb-question"><strong>Question:</strong> A learner has verified a synthetic user’s membership in the intended training group. A separately approved next experiment connects that group to an application. What new relationship must be predicted and checked rather than inferred from the earlier membership success?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The new question is whether the group supplies the intended user's application assignment. User-to-group membership and group-to-application assignment are separate relationships.</p>
<p>Record the connection and verify the actual user assignment in the intended instance. Add that boundary deliberately with its own prediction and evidence. The earlier membership result remains useful, but cannot establish a relationship the first experiment never tested.</p>
</div>
</details>

<a id="q19"></a>

### Q19. Other assignment paths

<p class="qb-question"><strong>Question:</strong> A group-based assignment experiment makes a training application visible to Casey. Direct assignments and other group paths have not been checked. Why inspect those sources before attributing the observed application relationship to the new group?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Another path could provide the assignment independently. Inspect the actual assignment source and starting state for the intended instance.</p>
<p>A visible tile helps locate the application but does not establish which relationship caused it. Removing one path also does not show every path ended. The experiment should explain the source of the observed result rather than crediting a pre-existing assignment to the connection it just added.</p>
</div>
</details>

<a id="q20"></a>

### Q20. Do not assume SCIM

<p class="qb-question"><strong>Question:</strong> A course example uses SCIM, an interface for managing application accounts. A new authorized training application has a known owner, but its connector capabilities and account-preparation method are unchecked. May the learner assume identical automated account creation or deactivation?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Inspect the actual connector's supported and enabled behavior. The owner may prepare the target account through a separate process.</p>
<p>The example's contract belongs to that application; federation also does not automatically establish account creation. Decide whether account management is part of this exercise and name its supported process. A known manual responsibility is better evidence than an invented automation based on another integration.</p>
</div>
</details>

<a id="q21"></a>

### Q21. If account management is included

<p class="qb-question"><strong>Question:</strong> An approved training experiment includes updating an application account through a supported connector. The learner has prepared values in the app profile, but has not inspected the operation or target. Which evidence should the plan follow to establish the account result?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Identify the intended linked record and instance, prepared values, generated request, response, and checked target state. Interpret the response against the actual contract.</p>
<p>Preparation and transmission are separate observations, as are the requested state and stored result. Follow the evidence through those boundaries. Membership, assignment, or accepted user authentication cannot supply the missing account-management outcome for an operation that has not been verified.</p>
</div>
</details>

<a id="q22"></a>

### Q22. Outside the experiment

<p class="qb-question"><strong>Question:</strong> A written training plan explicitly tests only the group-to-application assignment relationship. Target-account management and application entry will be separate exercises, with no claims about them in this plan. Is excluding those boundaries necessarily an incomplete experiment?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A limited question can have a complete answer when its conclusion remains within the stated scope. Verify the assignment relationship it actually tests.</p>
<p>Do not claim target creation or usable entry from that result. A later exercise can add those outcomes with appropriate owners and evidence. Completeness means answering the defined question; it does not require adding every capability to the first experiment.</p>
</div>
</details>

## Test entry and business permissions

<a id="q23"></a>

### Q23. Evidence for application entry

<p class="qb-question"><strong>Question:</strong> A training sign-in exercise records an Okta success event. The application’s protocol validation, intended account selection, and protected response remain unchecked. What should the learner follow beyond the identity-service event to establish actual entry?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Start with the expected authentication requirement and evidence for this attempt. Then follow the actual protocol exchange, application validation, intended account selection, and receiving application response.</p>
<p>The connection determines which checks matter. One Okta event cannot stand in for the target's acceptance. Record entry separately from account state and business permissions so a later failure can be located at the boundary its evidence actually demonstrates.</p>
</div>
</details>

<a id="q24"></a>

### Q24. Entered, but can submit?

<p class="qb-question"><strong>Question:</strong> A synthetic user completes an accepted visit to a training application. The approved business goal is submitting an ordinary request, but no submission action is checked. Does verified entry establish that capability, and what test should the owner define?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Entry does not establish submission. Ask the application owner to define the appropriate action and evidence for the intended account under its approved capability.</p>
<p>Keep the accepted login as a success while testing the business result. A denial after entry is not automatically a password problem. The experiment's acceptance evidence must reach the action it was meant to enable rather than stopping when the first page opens.</p>
</div>
</details>

<a id="q25"></a>

### Q25. Test the forbidden action too

<p class="qb-question"><strong>Question:</strong> A training requirement allows ordinary submission but excludes approval of another person’s request. Submission works for the intended account. Why include a separate negative approval test, defined by the application owner, instead of treating the positive result as sufficient?</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The negative test checks that the unapproved capability is not supplied. Successful submission would not reveal excessive approval permissions.</p>
<p>The owner defines the exact action and evidence for this application's implementation. Both findings matter: intended work should succeed and excluded work should not be allowed. This is a clearer acceptance test than merely asking whether the user got in or one business action worked.</p>
</div>
</details>

<a id="q26"></a>

### Q26. No invented target test

<p class="qb-question"><strong>Question:</strong> A learner plans to test a new application’s business permission using an endpoint and role copied from fictional examples in another system. The new application’s actual contract is unknown. Why should its owner supply the operation and expected result first?</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The examples do not establish the new application's supported operations or permission model. Ask its owner to identify the intended capability and observable result.</p>
<p>Keep account state, authentication proof, and business permission evidence separate. Apply the investigation method to the actual environment rather than assuming copied request shapes work everywhere. A familiar example helps form questions; it does not supply another application's implementation contract.</p>
</div>
</details>

## Define the required end state

<a id="q27"></a>

### Q27. Plan how access ends

<p class="qb-question"><strong>Question:</strong> An approved training exercise may introduce group membership, application assignments, a target account, and a local session. The learner is planning before execution. What should the end-condition section name so cleanup can be verified within the actual scope?</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Name the paths to remove, required target-account state where applicable, sessions that must end, responsible owners, and observations demonstrating each outcome.</p>
<p>Match the cleanup scope to what the exercise introduces. A membership-only test differs from an application-access experiment. Planning the end condition beforehand makes removal an agreed, verifiable requirement rather than a vague instruction to undo everything after results have already changed.</p>
</div>
</details>

<a id="q28"></a>

### Q28. Restore configuration versus clean effects

<p class="qb-question"><strong>Question:</strong> After an approved training experiment, the learner restores the original group rule. Assignments, account operations, roles, and sessions produced during the exercise have not been inspected. Does restored configuration demonstrate that all effects were cleaned up?</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Configuration recovery restores settings. Effects already produced need their own evidence and corrective operations where required.</p>
<p>Identify the changed relationships and target outcomes included in the exercise, then involve their responsible owners and verify the required end state. A correct-looking rule cannot certify all downstream access ended. Report restoration and cleanup separately so the configuration result does not replace missing application findings.</p>
</div>
</details>

<a id="q29"></a>

### Q29. Test the old session

<p class="qb-question"><strong>Question:</strong> An approved cleanup requires ending application session E. A later protected request might reuse E or follow a new sign-in creating another session. What evidence should the learner distinguish to verify termination rather than infer it from a prompt or old page?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check whether old E still authorizes the new protected request. Distinguish that from a later sign-in establishing a different session.</p>
<p>A displayed prompt or previously visible page cannot alone decide the old session's authority. Use the receiving application's relevant request and session evidence. Keep identity, session, termination action, and result correlated so the cleanup conclusion answers the requirement instead of a different later access question.</p>
</div>
</details>

<a id="q30"></a>

### Q30. Evidence and retention

<p class="qb-question"><strong>Question:</strong> Several accounts and records were involved in a training experiment. Ownership or retention requirements for some are unresolved, and evidence must be kept for review. Is deleting every training-related object the default way to demonstrate cleanup?</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Establish which records are involved and what the approved retention and cleanup requirement permits. Deletion cannot replace a missing ownership decision.</p>
<p>Keep the evidence needed to explain the exercise while excluding credentials and unnecessary personal data. Synthetic data still needs a clear record of what happened. Verify the agreed end state rather than treating cleanup as disappearance of every visible object regardless of its purpose.</p>
</div>
</details>

## Write plans and scoped conclusions

<a id="q31"></a>

### Q31. What the written record connects

<p class="qb-question"><strong>Question:</strong> A learner wants an owner to review a proposed identity training experiment before execution. No configuration or target outcome has been tested yet. What should the written plan connect so its purpose, expected results, and cleanup responsibilities are clear?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Connect the question, authorized environment, synthetic population, approved outcome, starting state, predictions, intended actions, evidence, owners, and recovery or cleanup requirements.</p>
<p>Keep planned actions distinct from performed ones. The owner should understand what counts as success and what must happen afterward. This record gives the experiment reviewable boundaries without claiming any configuration or target result before observations establish it.</p>
</div>
</details>

<a id="q32"></a>

### Q32. No tenant available

<p class="qb-question"><strong>Question:</strong> A learner has no training tenant but can analyze synthetic profiles and a proposed group condition. Can they still create useful predictions and evidence requests, and how should the actual-result column describe work that has not been executed?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Yes. Write the predictions, evidence requests, responsibilities, and cleanup plan on paper. Label the artifact as a plan, with actual results Not tested.</p>
<p>Reasoning about expected boundaries is useful practice even without execution. If the exercise runs later, add real observations, mismatches, and unfinished outcomes. Do not replace that evidence with the original predictions simply because the planned logic seems correct.</p>
</div>
</details>

<a id="q33"></a>

### Q33. Separate training from Northbridge tickets

<p class="qb-question"><strong>Question:</strong> Casey’s group membership succeeds in a separate synthetic training environment. In an independent business environment, Maya has an uncorrected department mapping and Jordan has retained application access. Does the training success resolve either business incident?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The people, environments, and questions are separate. The training exercise supplies no corrective outcome for those business incidents.</p>
<p>Apply the same evidence habits without borrowing results across cases. Casey's successful membership concerns its own inputs and observed relationship. Keep purpose and environment beside every conclusion so familiar concepts do not make independent experiments appear to share a production history.</p>
</div>
</details>

<a id="q34"></a>

### Q34. An OR prediction is not an action

<p class="qb-question"><strong>Question:</strong> Four synthetic training profiles are Casey Finance/Employee, Morgan Sales/Contractor, Riley Finance/Contractor, and Taylor Sales/Employee. The intended group condition is department Finance AND workerType Employee, with no contractor exception. A written table also includes hypothetical Finance OR Employee predictions to illustrate an error. No incorrect-rule activation is approved. Must the learner activate OR to complete this planned comparison?</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The OR column illustrates why Riley and Taylor are useful boundary cases. It is a prediction comparison rather than an instruction to activate an inappropriate condition.</p>
<p>The intended authorized experiment uses AND. Actual results remain Not tested until observations are obtained. Keeping predictions distinct from actions allows the logic example to teach the difference without turning a hypothetical mistake into a configuration requirement.</p>
</div>
</details>

<a id="q35"></a>

### Q35. A useful outcome report

<p class="qb-question"><strong>Question:</strong> The active training rule and relevant evaluation produce the predicted memberships for four checked synthetic profiles in LAB-Finance-Employees. Application assignment, target accounts, entry, and permissions are explicitly outside the exercise. Write a useful outcome report without overstating the result.</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “The checked profiles produced the predicted membership under the active rule and relevant evaluation. This exercise verified LAB-Finance-Employees membership only. Application assignment, target accounts, entry, and permissions were not tested.”</p>
<p>That is a complete conclusion for the defined experiment. It names the evidence and scope. A next exercise can add one relationship with its own prediction, responsible owner, and verification plan.</p>
</div>
</details>

[Day 16 lesson](../lessons/day-16-safe-practice-plan.md) · [Question bank](index.md)
