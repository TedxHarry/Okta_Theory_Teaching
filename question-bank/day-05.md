---
title: "Day 5 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 5
has_children: true
---

# Day 5: Questions

## Groups and application relationships

<a id="q01"></a>

### Q01. A shared need

<p class="qb-question"><strong>Question:</strong> A company approves Salesforce, a business application, for Sales employees. It uses Okta to manage identities and assignments. Instead of assigning the application to each employee separately, it connects Salesforce to a managed Sales employee group. What shared need does the group help maintain?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A group is a collection of users managed together. It gives the company one relationship through which members can receive the shared application assignment.</p>
<p>Who belongs in the group still needs an accurate maintenance mechanism. The group's connection to Salesforce is another relationship to configure and verify.</p>
<p>The benefit is managing the common assignment without repeating the normal decision independently for each user. It does not replace eligibility checks or prove usable application access.</p>
</div>
</details>

<a id="q02"></a>

### Q02. A name is only a label

<p class="qb-question"><strong>Question:</strong> An administrator creates an Okta group named Sales-Employees for a planned Salesforce access process. No membership rule, members, or application connection is supplied. Does the name itself define who belongs and connect Salesforce?</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The name is a label describing intent, not an instruction that configures membership or assignments.</p>
<p>The group could be empty, contain unexpected users, or have no application connected. Inspect and configure the actual relationships according to the approved requirement.</p>
<p>A useful name helps locate an object. It cannot establish what that object does or whether a person's application assignment was produced through it.</p>
</div>
</details>

<a id="q03"></a>

### Q03. Two relationships

<p class="qb-question"><strong>Question:</strong> Okta manages a group called Sales-Employees. Maya’s membership is recorded, and a separate configuration assigns the Salesforce application to that group. How do those two relationships differ, and why inspect both?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Membership places Maya in the collection. The group-to-application relationship gives that membership its Salesforce assignment purpose.</p>
<p>Either fact alone leaves part of the path unanswered. Maya could belong to a group that has no Salesforce connection, or Salesforce could be connected to a group she does not belong to.</p>
<p>Check both relationships and the resulting user assignment for the intended application instance. They are connected responsibilities with separate evidence.</p>
</div>
</details>

<a id="q04"></a>

### Q04. Membership without the application

<p class="qb-question"><strong>Question:</strong> Maya is a verified member of an Okta group intended to provide Salesforce, but the group has no Salesforce application assignment. No other path is supplied. Does this membership alone establish the expected group-based application assignment?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The user-to-group relationship is present, but the group-to-Salesforce connection is missing.</p>
<p>Compare that gap with the approved requirement and inspect the intended application instance. A membership rule that already placed Maya correctly is not the demonstrated problem.</p>
<p>Other paths and target outcomes need their own evidence if relevant. This question establishes one absent connection rather than every possible access result.</p>
</div>
</details>

## Rule inputs and purpose

<a id="q05"></a>

### Q05. Explain the rule’s job

<p class="qb-question"><strong>Question:</strong> A company’s Okta rule evaluates department Sales AND workerType Employee to manage a designated group. Salesforce is separately assigned to that group. Which relationship does the rule manage, and which does the application assignment manage?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The group rule manages membership for qualifying users. The application assignment connects that group to Salesforce.</p>
<p>The rule is not itself a command to create an account inside Salesforce. Its membership result supplies an assignment path only because the separate application connection exists.</p>
<p>Follow the responsibilities: profile inputs, rule processing and membership, assignment, then the supported target account and sign-in work. Each outcome requires evidence rather than being assumed from the preceding step.</p>
</div>
</details>

<a id="q06"></a>

### Q06. Workforce classification is a separate field

<p class="qb-question"><strong>Question:</strong> A company defines workerType as a custom text attribute in its Okta user profiles, with Employee and Contractor as approved values. A user’s workerType is Employee. Does that mean the account is Active or identify its profile schema type?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither. WorkerType records the workforce classification defined by this company. Account status describes a different condition, and profile schema type concerns a different definition.</p>
<p>An Active user can be a Contractor. A stored Employee value does not independently establish that the account is enabled.</p>
<p>Read each field according to its purpose. Confusing classification with status could change who qualifies for a rule or hide a processing condition that still needs checking.</p>
</div>
</details>

<a id="q07"></a>

### Q07. Who supplies classification?

<p class="qb-question"><strong>Question:</strong> Salesforce eligibility depends on approved workerType values in Okta. Employees receive their classification from Workday HR; contractor data follows sponsor-approved maintenance by an authorized administrator. Why should users not set workerType themselves merely to gain an assignment?</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The field represents the approved business classification, not a user-selected access option. The supplied maintenance paths govern its accurate value.</p>
<p>If information is wrong, correct it through the legitimate source or process. Changing Contractor to Employee simply to qualify would misrepresent the person and undermine the access requirement.</p>
<p>Eligibility relies on governed data. A desired application outcome should not become a reason to invent the identity facts feeding the rule.</p>
</div>
</details>

<a id="q08"></a>

### Q08. AND in ordinary language

<p class="qb-question"><strong>Question:</strong> An Okta group rule tests department equals Sales AND workerType equals Employee. A Boolean result is true or false. What does a true result mean, and does it by itself prove stored membership or usable application access?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Both conditions must be true for the supplied profile. The result establishes qualification for that input, not the completion of every later relationship.</p>
<p>Rule state, exclusions, and processing matter to actual membership. Application assignment and target use have additional checks.</p>
<p>Explain the condition in ordinary language: Sales and Employee must both be present. Then compare the prediction with the observed membership and relevant downstream results.</p>
</div>
</details>

## Predict the qualifying population

<a id="q09"></a>

### Q09. Predict three people

<p class="qb-question"><strong>Question:</strong> An active Okta rule uses Sales AND Employee. Maya is Sales/Employee, Priya Sales/Contractor, and Daniel Finance/Employee. All three accounts are Active, processing is complete, no exclusion applies, and no other membership mechanism exists. Who qualifies for this rule-managed group?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Only Maya meets both conditions. Priya meets Sales but not Employee. Daniel meets Employee but not Sales.</p>
<p>The supplied processing conditions let the example connect those inputs to the expected rule-managed membership. Sharing one detail is not enough when AND requires both.</p>
<p>Those results implement the employee-only Sales population. Application assignment and actual use remain separate outcomes unless their evidence is also supplied.</p>
</div>
</details>

<a id="q10"></a>

### Q10. Change AND to OR

<p class="qb-question"><strong>Question:</strong> The approved population is Sales employees only. Maya’s profile is Sales/Employee, Priya’s Sales/Contractor, and Daniel’s Finance/Employee. If a proposed condition changes Sales AND Employee to Sales OR Employee, who qualifies and how does the requirement change?</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>All three would qualify. OR needs at least one true condition: Priya meets Sales, Daniel meets Employee, and Maya meets both.</p>
<p>That broadens eligibility beyond the approved Sales employees. The changed condition would include a contractor and a Finance employee in this set.</p>
<p>Compare logic with the actual business decision before applying it. A small wording change can create additional access paths for a much larger population.</p>
</div>
</details>

<a id="q11"></a>

### Q11. Two meanings of Active

<p class="qb-question"><strong>Question:</strong> In Okta, Maya’s user account is Active and a group rule is also active. The rule’s inputs, exclusions, processing result, and actual membership have not been inspected. How do those two uses of active differ, and is membership proven?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Active user describes account state. Active rule means the rule is enabled to operate. Neither alone establishes membership for Maya.</p>
<p>Read the relevant inputs, any exclusion, and processing and membership evidence. Account state is also a meaningful condition for rule behavior, not a synonym for qualification.</p>
<p>Keep the two facts separate. The same word appears in their labels while describing different objects and leaving the intended relationship unverified.</p>
</div>
</details>

<a id="q12"></a>

### Q12. Unknown does not mean Employee

<p class="qb-question"><strong>Question:</strong> A company’s normal Salesforce group requires Sales AND Employee. A user’s central Okta department is Sales, but workerType—the workforce classification—is missing. Can “not known to be Contractor” be treated as confirmed Employee?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Missing classification does not establish Employee. The user has not been shown to meet both required conditions.</p>
<p>Investigate the legitimate source, mapping, or approved maintenance process for the field. Do not supply the classification that would make access convenient.</p>
<p>Accurate data supports the approved population. An unknown input needs resolution, not a broader rule or an invented fact about the person.</p>
</div>
</details>

## Read the correct profile

<a id="q13"></a>

### Q13. Which profile is read?

<p class="qb-question"><strong>Question:</strong> Workday HR supplies employee data to Okta. A configured attribute-based group rule reads the department and workerType fields in the central Okta user profile. Does the rule inspect Workday directly whenever support reads its condition?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The supplied rule evaluates the central Okta attributes. External information must first reach those fields through the applicable process.</p>
<p>Workday can be correct while the current input in Okta differs. Compare the approved source and actual rule input before changing the condition.</p>
<p>That can reveal a data-arrival discrepancy rather than a logic defect. The source you expect and the value the rule actually receives are different evidence questions.</p>
</div>
</details>

<a id="q14"></a>

### Q14. Correct rule, stale input

<p class="qb-question"><strong>Question:</strong> Maya’s approved Workday HR department is Sales, but her central Okta profile says Finance/Employee. The configured group condition correctly tests Sales AND Employee against that Okta input. Can its false result be logically correct while the business outcome is unwanted?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Yes. Finance/Employee fails the Sales part of the condition. The rule can evaluate its actual input correctly while that input disagrees with the approved source.</p>
<p>Investigate source associations, mappings, and the import or update results explaining the discrepancy. The two values alone do not establish which operation failed.</p>
<p>Repair the intended data path instead of assuming the access condition must be wrong. Correct logic cannot make inaccurate input represent the approved person.</p>
</div>
</details>

<a id="q15"></a>

### Q15. Do not broaden around stale data

<p class="qb-question"><strong>Question:</strong> The approved normal group is Sales AND Employee. Maya is legitimately Sales in Workday HR but stale as Finance in Okta, which the rule reads. No change allowing Finance users is approved. Why not add Finance to the group condition to include Maya?</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It would change the qualifying population and could include other Finance employees. That exceeds correcting Maya's stale input.</p>
<p>Investigate why the approved Sales value is not represented in the central profile and preserve the employee-only Sales requirement.</p>
<p>A workaround can remove one symptom while creating unrelated assignments. Choose the correction at the demonstrated data discrepancy instead of changing the business access decision to accommodate it.</p>
</div>
</details>

<a id="q16"></a>

### Q16. A target value is another layer

<p class="qb-question"><strong>Question:</strong> A group rule reads Maya’s central department in Okta. Salesforce, a separate business application, displays Sales, but the central field has not been inspected. Does the application display establish the rule’s actual input?</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The display concerns Salesforce's representation, not the central Okta field evaluated by the rule.</p>
<p>An app user profile is another layer: application-specific information prepared in Okta, distinct from the central profile and target account. Name the exact object and field being checked.</p>
<p>A correct-looking downstream value cannot certify an uninspected upstream input. Read the rule's actual source before explaining its result.</p>
</div>
</details>

## Condition, rule state, and membership

<a id="q17"></a>

### Q17. Saved is not activated

<p class="qb-question"><strong>Question:</strong> An administrator saves a valid Okta group condition, department Sales AND workerType Employee, targeting a designated group. Activation and processing evidence are absent. Is a saved rule enough to report that it has managed membership?</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A saved rule can remain inactive. The condition describes who should qualify, not whether the mechanism operated.</p>
<p>Check the rule state, target group, applicable exclusions, relevant account context, and actual processing and membership results.</p>
<p>The expression can be correct while the intended automatic path has not acted. Saving configuration and verifying its outcome are different observations.</p>
</div>
</details>

<a id="q18"></a>

### Q18. A demonstrated inactive-rule gap

<p class="qb-question"><strong>Question:</strong> Maya is Sales/Employee with an Active Okta account. The approved rule tests Sales AND Employee, targets the intended group, and has never been activated. Maya is absent and no other membership mechanism exists. Salesforce is assigned to the group. What gap is demonstrated?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The intended automatic membership mechanism is inactive. The condition matches and the application connection exists, but this rule has never operated.</p>
<p>The supported proposal is to activate the approved rule after reviewing its population and exclusions. Then verify membership and the resulting application assignment, followed by required target outcomes.</p>
<p>Changing correct HR data would address the wrong boundary. The configuration gap explains the demonstrated missing normal path without supplying a completed correction.</p>
</div>
</details>

<a id="q19"></a>

### Q19. Review before activation

<p class="qb-question"><strong>Question:</strong> A company proposes activating an approved but inactive Okta rule for all Sales employees. Maya’s missing membership led to the investigation, but the rule can affect other users. What should be reviewed before activation, and why?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Review the actual condition, designated group, affected population, and exclusions against the approved requirement. The shared rule is not private to Maya's account.</p>
<p>Activation is a configuration change with wider consequences. A single matching profile does not establish that every included user is intended.</p>
<p>After the appropriate change, compare actual membership and assignments with the predicted population. The investigation's initiating ticket and the change's scope can differ.</p>
</div>
</details>

<a id="q20"></a>

### Q20. Matching but excluded

<p class="qb-question"><strong>Question:</strong> Maya’s Active Okta profile is Sales/Employee. A rule requiring Sales AND Employee has an explicit exclusion for her, preventing this rule from adding her. The exclusion’s business justification is unknown. Does matching input prove the rule will include her?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Her profile meets the condition, but the supplied exclusion prevents this rule from adding her.</p>
<p>Review the exclusion and intended requirement before proposing a change. The mechanism is known; its authorization is not established.</p>
<p>Other membership or assignment paths still need separate checks if relevant. An exclusion from one rule does not describe every possible way the person could receive application access.</p>
</div>
</details>

<a id="q21"></a>

### Q21. Enabled but absent

<p class="qb-question"><strong>Question:</strong> Maya’s central Okta profile is Sales/Employee, which matches an enabled Sales AND Employee rule. She is absent from the expected group. Her account-state context, applicable exclusions, and processing result are not supplied. Is a specific cause established?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The cause remains unresolved. Matching inputs and an enabled rule do not establish completed membership for this person.</p>
<p>Inspect the intended target group, account state, exclusions, and processing evidence. Those facts can distinguish why the expected relationship is absent.</p>
<p>Report the observed gap and next checks rather than declare a failed rule or deliberate exception without evidence. The missing result is clear even before its explanation is known.</p>
</div>
</details>

<a id="q22"></a>

### Q22. A preview is not membership

<p class="qb-question"><strong>Question:</strong> Maya’s Sales/Employee input produces true in a preview of an Okta group rule. A preview evaluates the condition, but stored membership and relevant processing have not been checked. What evidence is still required before reporting she belongs to the group?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Actual membership in the intended group is still needed. The preview establishes qualification for the selected input, not the stored relationship.</p>
<p>Rule state, exclusions, and processing can matter between that calculation and the result. Check them when membership is absent.</p>
<p>This is a useful distinction wherever systems calculate a proposed outcome: the calculation and the completed action are separate evidence. Keep the successful preview while requesting the actual membership result.</p>
</div>
</details>

<a id="q23"></a>

### Q23. Manual removal as a test

<p class="qb-question"><strong>Question:</strong> An Okta group rule manages a user’s membership. An administrator proposes manually removing that user and waiting for the rule to add them again. What possible effect makes removal an unreliable neutral test?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Manually removing a rule-managed user can add them to the rule's exclusion list. The test can therefore change a condition governing later membership.</p>
<p>Inspect the resulting exclusion and management mechanism instead of assuming the original processing context stayed unchanged.</p>
<p>A test needs understood effects and scope. Repeating removal or waiting for re-addition can miss the very exception introduced by the test action.</p>
</div>
</details>

## What a confirmed assignment proves

<a id="q24"></a>

### Q24. Read the successful follow-up

<p class="qb-question"><strong>Question:</strong> Support verifies Maya was added by the intended Okta group rule and has Salesforce assigned through that group. No Salesforce account state, account-management result, sign-in, or permission evidence is supplied. Which outcomes are established?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The rule-managed membership and group-based application assignment are established. Those are real successes in the normal path.</p>
<p>The target account, accepted application sign-in, and required permissions remain unverified. An assignment can initiate configured work, but it is not the target's completion receipt.</p>
<p>Report the verified relationships and follow the missing outcomes separately. Do not minimize the progress or stretch it into a claim that the whole application is usable.</p>
</div>
</details>

<a id="q25"></a>

### Q25. Expected absence

<p class="qb-question"><strong>Question:</strong> The normal Salesforce group rule is Sales AND Employee. Priya is Sales/Contractor and Daniel Finance/Employee; an active rule processed both without exclusions, and neither is a member. The checked snapshot confirms no other Salesforce assignment paths. Is their absence a malfunction?</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Their exclusion is expected because neither meets both conditions. Priya fails Employee; Daniel fails Sales.</p>
<p>The supplied absence of other assignment paths also supports their Salesforce-assignment absence in this snapshot. That wider conclusion depends on the explicit path check.</p>
<p>A correct requirement can intentionally produce different outcomes for people sharing one attribute. Do not broaden the condition merely to make every profile qualify.</p>
</div>
</details>

<a id="q26"></a>

### Q26. Assignment and usable access

<p class="qb-question"><strong>Question:</strong> Maya’s Salesforce assignment is confirmed in Okta, the company identity service. Her requirement is entering the intended application account and performing an approved business action. No target-use evidence is supplied. Which separate outcomes still need verification?</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check the intended target account and relevant preparation result, accepted application sign-in, and permission for the approved action.</p>
<p>An assignment is a relationship in Okta. It does not demonstrate those separate results inside Salesforce.</p>
<p>State where the evidence stops so the next owner can inspect the actual missing boundary rather than repeat already verified assignment checks. The business requirement gives each verification a specific purpose.</p>
</div>
</details>

## Individual paths and approval

<a id="q27"></a>

### Q27. Priya’s individual assignment

<p class="qb-question"><strong>Question:</strong> The normal Okta group includes Sales employees only. Priya is a Sales contractor, correctly absent from that group, but Salesforce is individually assigned to her. No exception approval is supplied. Does the direct assignment prove the employee group rule wrongly included her?</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The individual assignment supplies a separate relationship between Priya and Salesforce. The employee-only rule can remain correct while this path exists.</p>
<p>Trace the actual assignment source and request its business justification. The unresolved issue is the exception decision, not an instruction to include all contractors in the normal group.</p>
<p>The path is observed; its approval is not. Keep those facts separate before proposing a correction.</p>
</div>
</details>

<a id="q28"></a>

### Q28. Missing approval evidence

<p class="qb-question"><strong>Question:</strong> Priya’s Salesforce assignment is recorded as individual in Okta. The company requires contractor exceptions to be approved, but this review supplies no approval record or finding that approval does not exist. Is the observed path proven authorized or unauthorized?</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither authorization conclusion is established. An observed assignment and its approval are separate questions.</p>
<p>Request the applicable requirement, accountable approver, current decision, scope, owner, and removal or review condition. Missing evidence in this review is not confirmed lack of approval in reality.</p>
<p>Describe the open decision precisely. That gives the responsible owner a useful action without inventing a permitted exception or a demonstrated violation.</p>
</div>
</details>

<a id="q29"></a>

### Q29. Assignment source versus profile source

<p class="qb-question"><strong>Question:</strong> Priya’s profile is maintained in Okta through an approved process. Her Salesforce assignment source is listed as Individual. Does this application-assignment label show a changed profile source, and what do the two meanings of source describe?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Assignment source describes the relationship supplying an application assignment, such as a group or individual path. Profile source describes which system controls the user's profile.</p>
<p>Priya can remain Okta-managed while having an individual Salesforce assignment. The facts concern different responsibilities.</p>
<p>Name the relationship when saying source. Otherwise an application-access detail can be mistaken for a new data owner that the evidence never supplied.</p>
</div>
</details>

<a id="q30"></a>

### Q30. Do not rewrite the person

<p class="qb-question"><strong>Question:</strong> Priya is correctly classified as Contractor in Okta. Normal Salesforce eligibility requires Sales AND Employee, and contractor access may follow a separately approved exception. Why should support not change her workerType to Employee just to make her fit the normal rule?</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It would make the profile misrepresent her workforce classification and undermine the approved eligibility condition.</p>
<p>Investigate the legitimate exception decision and path instead. The normal rule can correctly exclude contractors while a justified individual or separate group assignment exists.</p>
<p>Preserve accurate identity data. The desired access outcome should be implemented through its approved model, not by rewriting the person until a rule accepts them.</p>
</div>
</details>

## Moves and remaining paths

<a id="q31"></a>

### Q31. A future department move

<p class="qb-question"><strong>Question:</strong> Maya moves from Sales to Finance under an approved change. The new Finance/Employee values reach her Active Okta profile, and an active Sales AND Employee rule processes them. In the stated group, that rule is the only membership mechanism and no exclusion issue applies. What membership is expected?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>She no longer meets the Sales condition, so the simple rule-managed membership should be removed under the supplied conditions.</p>
<p>That is the predicted result; inspect actual membership and processing evidence to verify it. Then check application assignment paths separately.</p>
<p>A department change can end one qualifying relationship without establishing every target outcome. Keep the new input, rule result, remaining assignments, and application state as distinct observations.</p>
</div>
</details>

<a id="q32"></a>

### Q32. Another group still assigns

<p class="qb-question"><strong>Question:</strong> Maya’s membership in an Okta Sales group is confirmed removed. A different group still assigns Salesforce to her. No finding about removing that other path is supplied. Has the Sales-group removal ended every Okta Salesforce assignment path?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It ended that group's contribution while the other group's path remains.</p>
<p>Inspect all relevant assignment sources before claiming the final assignment has ended. Individual assignments can also be separate paths when present.</p>
<p>Ask which relationship stopped and which remain. A removed membership is useful evidence but cannot describe an independent relationship that still supplies the application.</p>
</div>
</details>

<a id="q33"></a>

### Q33. Final assignment removed

<p class="qb-question"><strong>Question:</strong> Support confirms the last Salesforce assignment path was removed from a user in Okta. No Salesforce account-state operation, target read, or existing-session test is supplied. Does the assignment result prove the target account is disabled and every session ended?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It verifies the relationship change in Okta, not those separate application outcomes.</p>
<p>Follow the supported account-management behavior and inspect the intended target record. If the requirement includes ending existing sessions, obtain the relevant application-side session result too.</p>
<p>The assignment can be removed while downstream work remains unknown or incomplete. Keep each required result open until the receiving system's evidence establishes it.</p>
</div>
</details>

<a id="q34"></a>

### Q34. Order the move evidence

<p class="qb-question"><strong>Question:</strong> An approved Sales-to-Finance move should end a user’s normal Sales group path. The rule reads the central Okta profile. Put these evidence checks in a useful sequence: target outcomes, updated profile, remaining assignment paths, rule processing and membership.</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check the updated profile, then rule processing and actual membership, then remaining assignments, and finally the relevant target outcomes.</p>
<p>That follows the dependency flow and helps locate whether the gap is data arrival, membership action, another surviving assignment, or downstream account/access behavior.</p>
<p>The sequence organizes investigation, not proof that the steps already occurred. Keep the identity and application instance consistent when joining their results.</p>
</div>
</details>

## Group ownership and Group Push

<a id="q35"></a>

### Q35. Who controls the group?

<p class="qb-question"><strong>Question:</strong> Support can see several groups in Okta. Some may come from an external directory, some from authorized manual administration, and some from rules. A group’s management mechanism has not been inspected. Does visibility prove an Okta rule controls its membership?</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Visibility identifies where the group can be inspected, not which process owns membership.</p>
<p>Determine the specific group's management mechanism before proposing an edit. A directory-sourced group follows a different path from a rule-managed or manually maintained group.</p>
<p>The name cannot establish the owner either. Actual configuration and relationship evidence explain how the current members were maintained.</p>
</div>
</details>

<a id="q36"></a>

### Q36. Same name, different object

<p class="qb-question"><strong>Question:</strong> Maya belongs to an Okta group that has Salesforce assigned. No configuration or target evidence establishes a group inside Salesforce. Does her Okta membership prove a same-named Salesforce group exists?</p>

<details class="qb-answer" id="q36-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A group stored in Okta and a group stored in an application are separate objects.</p>
<p>The application assignment provides a relationship through which Okta members receive Salesforce. It does not automatically create the group inside Salesforce.</p>
<p>If target-group management is required, inspect supported configuration and actual destination evidence. Sharing a name cannot establish an object or link nobody has verified.</p>
</div>
</details>

<a id="q37"></a>

### Q37. Assignment versus Group Push

<p class="qb-question"><strong>Question:</strong> A company wants both group-based application assignment and target-group maintenance through Okta. Group Push is the capability for managing groups and memberships in supported applications. How do the two purposes differ, and can one result verify the other?</p>

<details class="qb-answer" id="q37-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Assignment identifies which users receive the application through an Okta group. Group Push manages group objects and memberships at a supported target.</p>
<p>They are different relationships. Where Group Push is used, separate groups are required for application assignment and Group Push. Inspect the actual supported integration rather than assume the target capability exists.</p>
<p>An assignment result cannot prove target-group creation. Define the desired outcome and verify the relationship that actually implements it.</p>
</div>
</details>

## Investigate and explain

<a id="q38"></a>

### Q38. A tile appears after a workaround

<p class="qb-question"><strong>Question:</strong> Maya should receive an application through a normal rule-managed group, but that membership remains absent. An approved urgent individual assignment now makes her dashboard shortcut appear. No normal-path repair or target-use test is supplied. Is the membership problem resolved?</p>

<details class="qb-answer" id="q38-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The direct path can provide an assignment without repairing the missing normal membership. The shortcut does not establish the target account, accepted sign-in, or permissions either.</p>
<p>Investigate the original gap and record the exception's owner and removal condition. Once the normal path is corrected, review whether the exception is still needed.</p>
<p>Keep workaround and repair as separate results. One visible improvement should not hide the unresolved relationship or verification.</p>
</div>
</details>

<a id="q39"></a>

### Q39. Ask for the missing evidence

<p class="qb-question"><strong>Question:</strong> Maya’s central Okta profile is Sales/Employee and the enabled rule tests Sales AND Employee. Expected membership is absent, but account-state context, exclusions, processing details, and other assignment paths are unknown. What focused evidence should support request before choosing a workaround?</p>

<details class="qb-answer" id="q39-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Request the intended group's actual members, the rule's target and exclusions, Maya's account state, and relevant processing results. Inspect the intended application instance and assignment sources too.</p>
<p>Those facts distinguish possible explanations instead of assuming a failed rule or total assignment absence.</p>
<p>If an urgent exception is approved, track it separately with its end condition. Its existence does not supply the missing normal-path result or application verification.</p>
</div>
</details>

<a id="q40"></a>

### Q40. Explain both access stories

<p class="qb-question"><strong>Question:</strong> A company’s active Okta rule manages a group using Sales AND Employee. Maya is Sales/Employee and verified as a rule-managed member with Salesforce assigned through the group. Priya is Sales/Contractor, correctly excluded, and no other assignment path is supplied. Explain the different normal outcomes and what application-use evidence is still missing.</p>

<details class="qb-answer" id="q40-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Maya meets both conditions, and the verified group relationship supplies her normal Salesforce assignment. Priya does not meet Employee, so she does not qualify for that normal path.</p>
<p>A separately approved exception could use another path if supplied; the rule alone does not describe every possible assignment. Here no such path is established for Priya.</p>
<p>The relationships explain normal assignments, not target-account readiness, completed sign-in, or business permissions. Those outcomes still need their own checks.</p>
</div>
</details>

[Teaching explanations](answers/day-05.md) · [Day 5 lesson](../lessons/day-05-groups-and-assignments.md) · [Day 5 recap](../revision/day-05.md) · [Question bank](index.md)
