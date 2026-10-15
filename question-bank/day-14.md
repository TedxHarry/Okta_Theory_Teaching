---
title: "Day 14 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 14
---

# Day 14: Questions

## Clarify outcomes before mechanisms

<a id="q01"></a>

### Q01. Outcome or implementation?

<p class="qb-question"><strong>Question:</strong> A Finance owner asks for eligible employees to submit their own expenses in a named Expense application. An administrator proposes an Okta group rule. How does the requested business outcome differ from this proposed implementation mechanism?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The outcome describes what eligible people should be able to do. The group rule proposes a way to implement part of that outcome. A requirement states the outcome and constraints; a design explains how systems will deliver them.</p>
<p>A group can select an assignment population without establishing submission permission inside Expense. Agree on the intended capability first, then trace the design through the required relationships and application evidence.</p>
</div>
</details>

<a id="q02"></a>

### Q02. An ambiguous exception

<p class="qb-question"><strong>Question:</strong> A request says only “Finance access, except contractors and executives.” It does not name the application instance, permitted actions, or whether executives are excluded or use a different path. Why is it not ready to translate into an automated rule?</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The sentence leaves important business decisions unresolved. Access might mean entry, submission, or approval, and the exception wording has more than one possible meaning.</p>
<p>Ask the responsible owner to specify the application, capabilities, eligibility, timing, and exception terms. Writing logic now would turn assumptions into access decisions. Record the unresolved questions and their owners so the rule implements an approved meaning rather than inventing one.</p>
</div>
</details>

<a id="q03"></a>

### Q03. Unknown is a decision to resolve

<p class="qb-question"><strong>Question:</strong> A proposed Expense access model has approved employee eligibility, but contractor eligibility remains undecided. The administrator wants to include all contractors temporarily to keep implementation moving. Is that a justified substitute for the missing approval?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Including them would create an access decision rather than resolve the missing one. Name the approver and keep that decision open until the authorized answer is supplied.</p>
<p>Work on agreed parts can continue independently, but the contractor path must follow its approval. Distinguish approved outcomes from assumptions in the requirement record. A temporary interpretation can otherwise become an unintended permanent assignment path.</p>
</div>
</details>

<a id="q04"></a>

### Q04. Name the intended instance

<p class="qb-question"><strong>Question:</strong> A company has production and test instances of Expense, plus Projects and Salesforce. A request asks for “Finance access” without specifying a destination or action. Why must the administrator identify the intended application instance before choosing groups and acceptance tests?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Different applications and instances can have different connections, account handling, and permissions. A capability in one destination is not an outcome in another.</p>
<p>Name the system and intended action together before selecting a group, account operation, or acceptance check. That makes the requirement observable. It also prevents a familiar integration's design from being copied into the wrong environment without verifying whether its responsibilities and supported behavior fit.</p>
</div>
</details>

## Read approved eligibility and exceptions

<a id="q05"></a>

### Q05. Normal eligibility and its end conditions

<p class="qb-question"><strong>Question:</strong> The approved Expense model gives effective Finance employees ordinary expense-submission access. Approval rights require separate named Finance-owner approval. Moving out of Finance ends normal eligibility; exceptions need independent review, and departure requires access removal. This is an approved proposed model with no rollout results supplied. Who qualifies normally, and which business changes end that normal path?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Effective Finance employees qualify for ordinary submission access. Moving out of Finance ends normal eligibility; departure requires access removal under the agreed scope. Exceptions must be reviewed separately.</p>
<p>These approved outcomes guide implementation and verification. They do not establish that processing or target removal already happened. Follow the business change through the relevant assignments, accounts, and access checks before reporting the model's result as complete.</p>
</div>
</details>

<a id="q06"></a>

### Q06. Separate submission from approval

<p class="qb-question"><strong>Question:</strong> The approved Expense model gives effective Finance employees ordinary expense-submission access. Approval rights require separate named Finance-owner approval. Moving out of Finance ends normal eligibility; exceptions need independent review, and departure requires access removal. Maya is a Finance employee with no approver approval. Daniel has a separately approved approver role. Should normal Finance membership give Maya Daniel’s approval capability?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Submitting an expense and approving one are different business capabilities. Maya's normal membership supports submission, while approval requires the separate decision explicitly supplied for Daniel.</p>
<p>Verify the distinction in Expense's local permissions. A group assignment or successful login checks only part of the requirement. Neither Maya's department nor Daniel's title can supply an absent approval decision for her.</p>
</div>
</details>

<a id="q07"></a>

### Q07. Executive status and approved eligibility

<p class="qb-question"><strong>Question:</strong> The Expense owner explicitly approves executives following the ordinary eligibility rule, with no automatic permission or authentication bypass. An executive requests special access based only on their title. What does the supplied decision authorize?</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It authorizes the ordinary eligibility path, not a privileged exception. The owner's explicit decision governs this model; an impressive title does not add an unstated capability.</p>
<p>Preserve that meaning in conditions and acceptance checks. If different access is requested, route the new decision to its responsible approver rather than silently extending the current design. Business approval must precede the implementation of the additional path.</p>
</div>
</details>

<a id="q08"></a>

### Q08. A justified contractor path

<p class="qb-question"><strong>Question:</strong> Contractors are outside Expense’s normal employee path. Access requires a documented exception approved by the sponsor and Expense owner, with defined scope, an end condition, and a responsible maintenance owner. A dedicated exception group is proposed. What evidence and responsibilities make an individual contractor’s path justified?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Obtain the documented sponsor and Expense-owner approval, scope, end condition, and maintenance responsibility. The group can implement an assignment relationship, but its name does not create approval or remove membership automatically.</p>
<p>Follow the approved path to the intended account and business capability, then verify removal when the condition ends. A first successful entry is one result; it does not establish the whole exception lifecycle.</p>
</div>
</details>

<a id="q09"></a>

### Q09. Framework versus individual approval

<p class="qb-question"><strong>Question:</strong> Contractors are outside Expense’s normal employee path. Access requires a documented exception approved by the sponsor and Expense owner, with defined scope, an end condition, and a responsible maintenance owner. Priya is a Sales contractor, and no approval for her is supplied in this proposed model. Does having an exception framework establish that she already qualifies?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The framework explains how an exception could be approved. It does not supply Priya's missing decision.</p>
<p>Request the sponsor and Expense owner's answer for her scope and end condition. Keep her outside the normal employee path and do not infer permission from the existence of an exception design. Approval and implementation are separate findings, so both need evidence before reporting justified access.</p>
</div>
</details>

<a id="q10"></a>

### Q10. Access exception and authentication

<p class="qb-question"><strong>Question:</strong> Priya has a documented contractor assignment exception for Expense. Its approved terms retain the existing application authentication policy, which requires specified proof for sign-in. Does the assignment exception also authorize reducing that proof requirement?</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The exception identifies business access Priya may receive; it does not change the separate authentication agreement. Her permitted sign-in must still satisfy the applicable policy.</p>
<p>Do not reduce proof merely because she uses an exception path or needs recovery assistance. Check the scope actually approved. Assignment eligibility and authentication evidence are related parts of access, but one decision cannot silently replace the other.</p>
</div>
</details>

<a id="q11"></a>

### Q11. No invented provisioning

<p class="qb-question"><strong>Question:</strong> The approved Expense model assigns the application to eligible users, while its owner handles target-account readiness and removal through an agreed process. No SCIM or other automated account-management support is supplied. May assignment be described as automatic target-account creation?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The stated account responsibility belongs to the Expense owner. Assignment can be designed without inventing a connector operation.</p>
<p>If automation is proposed later, investigate its supported capabilities, configuration, and ownership separately. For now, verify the intended account and usable submission access through the agreed process. A known responsibility is more accurate than claiming an assignment creates a target account when no such capability has been established.</p>
</div>
</details>

## Translate the access model

<a id="q12"></a>

### Q12. What the normal group implements

<p class="qb-question"><strong>Question:</strong> A proposed normal Expense path uses an Okta group populated by department equals Finance AND workerType equals Employee, with Expense assigned to the group. The application owner handles accounts and submission roles. What part of the access model does this group implement?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It selects the normal assignment population from governed attributes. Connecting Expense to the group then relates membership to application assignment.</p>
<p>The owner's account preparation and local-role work remain separate. Follow eligibility through membership and assignment to actual business capability. A correct condition is useful for this design, but it does not implement every requirement or prove that the person can submit an expense.</p>
</div>
</details>

<a id="q13"></a>

### Q13. Attributes are not full employment control

<p class="qb-question"><strong>Question:</strong> A proposed group selects department Finance AND workerType Employee. The company separately governs effective employee starts and departures through lifecycle processing, and profile values may remain after a departure. Why should those two attributes not be treated as complete employment control?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They describe eligibility data, not every current employment decision. The effective start and departure still need their configured processing and verified outcomes.</p>
<p>Check the business event, account state, assignments, and relevant target results rather than inferring current approval solely from retained text. The group works within the wider access model. It cannot replace the process that determines when working access may begin or must end.</p>
</div>
</details>

<a id="q14"></a>

### Q14. An exception group does not expire itself

<p class="qb-question"><strong>Question:</strong> A contractor assignment group is named “Approved Contractors Until End Date.” No approval workflow or timed-removal process is supplied. Does the group name establish that every member is approved and will be removed at the agreed end condition?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A label describes intent; it does not enforce the decision record or execute removal. Inspect actual approval and the responsible maintenance process.</p>
<p>An owner must arrange and verify the end-condition action, including the relevant application relationship. The group can help implement the model, but its name cannot supply missing governance or results. Treat labels as ways to find objects, rather than evidence that all their promised behavior occurs.</p>
</div>
</details>

<a id="q15"></a>

### Q15. Jordan’s retained membership

<p class="qb-question"><strong>Question:</strong> Jordan has an effective departure and verified Okta deactivation, which retains group memberships. A later report still lists his Finance membership, but no renewed employment approval is supplied. Does that retained relationship reverse deactivation or authorize restoring access?</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Retained membership is a historical relationship, not a new business approval or a reversal of the account action.</p>
<p>Verify the required account and session outcomes under the effective departure scope. A membership report alone does not establish usable access, and a later return would need fresh decisions. Keep account state, membership, actual access, and current authorization separate when interpreting the report.</p>
</div>
</details>

<a id="q16"></a>

### Q16. Existing paths before rollout

<p class="qb-question"><strong>Question:</strong> A company proposes replacing ad hoc Expense access with a governed Finance group path. Existing direct assignments and application-local roles have not been reviewed. Why reconcile those current relationships before treating the new group model as the whole access picture?</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A direct assignment can survive removal from the new group, while an existing local role can provide more capability than the intended model allows.</p>
<p>Review assignment sources, establish correct account ownership and matching, and ask the application owner to evaluate roles. The new group may work while obsolete access remains. Compare the desired outcome with the whole relevant current state, rather than checking only the relationship being added.</p>
</div>
</details>

## Business approval and technical authority

<a id="q17"></a>

### Q17. Business authority and admin ability

<p class="qb-question"><strong>Question:</strong> An Okta administrator can assign Expense, while the Finance owner decides who may approve expenses. Daniel has an application approver role but no Okta administrative role. Can either person infer the other’s decision or technical authority from their own permission?</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Technical ability to assign an application does not authorize inventing the business approval decision. Likewise, an Expense approver role does not make Daniel an Okta administrator.</p>
<p>Identify the approved capability and an appropriately authorized operator for implementation. The two responsibilities can cooperate without becoming interchangeable. Naming both prevents a configuration permission from being mistaken for business authority, or a business role from granting administrative control.</p>
</div>
</details>

<a id="q18"></a>

### Q18. Least privilege in practice

<p class="qb-question"><strong>Question:</strong> An operator is assigned a defined Expense maintenance task, but the proposed change may affect a shared policy used by Projects too. How does least privilege guide permission selection and the review of resource scope?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Least privilege means providing the permissions and scope needed for the defined responsibility. Scope identifies which resources or users those permissions cover.</p>
<p>Check the exact operation and all affected resources. Expense authority does not automatically cover Projects or a shared-policy change. If the task exceeds available authority, route it to the appropriate operator or revise the design. Convenience is not a reason to replace a scoped responsibility with broad control.</p>
</div>
</details>

<a id="q19"></a>

### Q19. Compare task and role scope

<p class="qb-question"><strong>Question:</strong> An Okta support plan separates evidence inspection, restricted password or MFA assistance, assigned application management, and group-rule creation. Which standard-role directions should be evaluated for these tasks, and what must still be checked beyond the title?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Evaluate Read-only Admin for relevant evidence, Help Desk Admin for supported assistance, App Admin for assigned integration work, and Org Admin for group-rule management.</p>
<p>These are directions for comparison, not grants or guarantees. Check the current permission matrix, footnotes, operation, and resource scope before assigning authority. A task can exceed a familiar role's limits. Start from the responsibility and find an authorized operator, rather than assuming a title covers every related activity.</p>
</div>
</details>

<a id="q20"></a>

### Q20. Read-only is not every setting

<p class="qb-question"><strong>Question:</strong> A reviewer needs Okta app sign-in policy and global session policy evidence. The standard-role comparison permits Read-only Admin to view app sign-in policies but does not grant global-session-policy visibility. How should the evidence retrieval be arranged?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Name the missing information and obtain it through an operator whose permissions cover it. Read-only is not a promise of universal visibility.</p>
<p>Keep evidence retrieval within the actual role boundary instead of treating a title as sufficient authority. Sharing the retrieved material is another responsibility: include relevant findings without copying credentials or unnecessary personal information. The case needs usable evidence, not a broader grant or an unrestricted data dump.</p>
</div>
</details>

<a id="q21"></a>

### Q21. Group Admin is not interchangeable

<p class="qb-question"><strong>Question:</strong> An operator has Group Admin duties and is asked to change an Okta group rule. The standard-role comparison identifies Org Admin as supporting group-rule management, while Group Admin is not interchangeable for that task. What should be checked before proceeding?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check the exact operation, permission, and scope. A responsibility involving a group does not automatically fall within every permission of a role named Group Admin.</p>
<p>Route an uncovered task to the appropriately authorized operator or escalate the design. The aim is legitimate authority for this change, not broadening privileges based on a descriptive title. Keep group membership work and group-rule management distinct when evaluating who can perform the operation.</p>
</div>
</details>

<a id="q22"></a>

### Q22. Delegating privileges is another task

<p class="qb-question"><strong>Question:</strong> An administrator manages an assigned application and is asked to assign Okta administrative privileges to another person. The standard-role matrix identifies Super Admin for administrative delegation. Does the existing application-management authority establish permission for this separate task?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Administrative delegation is a different operation from managing the assigned integration. Route the specific request through the appropriate decision and authorized operator.</p>
<p>The role comparison is not a reason to give everyone broad authority. Keep application business roles, integration management, and administrative privilege assignment separate. Each concerns a different resource and consequence, so authority for one cannot silently stand in for the others.</p>
</div>
</details>

<a id="q23"></a>

### Q23. Permission-denied read

<p class="qb-question"><strong>Question:</strong> An identity API read is rejected, and investigation confirms that the caller lacks authority for that operation and resource. No successful list is supplied. Does this establish a missing identity or justify giving all reviewers broad administrator privileges?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither follows. Obtain an appropriately authorized read for the actual operation and resource. A failed read is not a successful empty result.</p>
<p>Human approval, assigned administrative permissions, and the API caller's effective authority are separate facts. Resolve the focused retrieval problem through the right operator rather than turning it into an unrestricted privilege grant. Only a relevant successful read can support the identity findings the investigation needs.</p>
</div>
</details>

## Define acceptance evidence

<a id="q24"></a>

### Q24. Test the eligible outcome

<p class="qb-question"><strong>Question:</strong> The approved Expense model gives effective Finance employees ordinary expense-submission access. Approval rights require separate named Finance-owner approval. Moving out of Finance ends normal eligibility; exceptions need independent review, and departure requires access removal. Maya meets the approved normal eligibility. No implementation or test results are supplied. What evidence would establish her intended submission outcome beyond a successful login?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check the correct source and profile, rule membership, assignment, intended target account, and actual submission capability in Expense.</p>
<p>Login tests entry; it does not necessarily test submitting an expense. The application owner needs to verify that local capability. Define these checks before rollout so “works” has an agreed meaning. An acceptance plan specifies what success would look like, rather than reporting results that have not yet been obtained.</p>
</div>
</details>

<a id="q25"></a>

### Q25. Test the unapproved capability

<p class="qb-question"><strong>Question:</strong> The approved Expense model gives effective Finance employees ordinary expense-submission access. Approval rights require separate named Finance-owner approval. Moving out of Finance ends normal eligibility; exceptions need independent review, and departure requires access removal. Maya can enter and submit an expense, but has no approver approval. Why also test that she cannot approve another person’s expense?</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The requirement deliberately separates submission from approval. Positive entry and submission tests do not establish that an unapproved capability is absent.</p>
<p>Verify the permission boundary inside Expense, rather than inferring it from the group rule. This negative case tests a meaningful part of the model: intended capability should be present and unapproved capability should not be supplied. Both findings are needed to evaluate the stated outcome.</p>
</div>
</details>

<a id="q26"></a>

### Q26. An unapproved contractor

<p class="qb-question"><strong>Question:</strong> Contractors are outside Expense’s normal employee path. Access requires a documented exception approved by the sponsor and Expense owner, with defined scope, an end condition, and a responsible maintenance owner. A contractor has no exception approval and is absent from the proposed normal group. Direct assignments, other groups, target roles, and sessions remain unchecked. Is total Expense access absence established?</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Only absence from the checked group path is supplied. Inspect the other relevant relationships before claiming total access absence.</p>
<p>The proposed model should supply no unapproved contractor access, but the current environment also needs reconciliation. A correct rule result is one finding within that broader picture. Negative membership cannot describe every independent assignment, target role, or session the person may still have.</p>
</div>
</details>

<a id="q27"></a>

### Q27. Test an exception’s ending

<p class="qb-question"><strong>Question:</strong> Contractors are outside Expense’s normal employee path. Access requires a documented exception approved by the sponsor and Expense owner, with defined scope, an end condition, and a responsible maintenance owner. A contractor’s exception is approved and their first entry succeeds. What else must be verified to evaluate its scope and eventual ending?</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Verify the right business capability, recorded owner, end condition, and removal process. Then check the relevant assignment, target, and session outcomes when the condition ends.</p>
<p>Initial entry establishes access at one point. It does not establish that the model can later remove it as agreed. Include continuation and termination responsibilities in the acceptance plan so an exception remains governed throughout its approved lifetime.</p>
</div>
</details>

<a id="q28"></a>

### Q28. Positive, negative, and change cases

<p class="qb-question"><strong>Question:</strong> The approved Expense model gives effective Finance employees ordinary expense-submission access. Approval rights require separate named Finance-owner approval. Moving out of Finance ends normal eligibility; exceptions need independent review, and departure requires access removal. A test plan includes eligible submission, absence of unapproved approval rights, and removal of the normal path after moving out of Finance. How do these positive, negative, and change cases test different requirements?</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Eligible submission tests who should succeed. Absence of unapproved approval rights tests a capability that should not be supplied. Moving out of Finance tests what happens when eligibility changes.</p>
<p>Review surviving exceptions and direct assignments during the move. Departure has its own account and session outcomes. One successful login cannot cover all these questions; separate cases make the requirement's boundaries and changes observable.</p>
</div>
</details>

## Recover configuration and access effects

<a id="q29"></a>

### Q29. AND becomes OR

<p class="qb-question"><strong>Question:</strong> The approved normal group requires department Finance AND workerType Employee. A proposed change mistakenly uses Finance OR Employee instead, with no actual effect history supplied. How does the logic broaden eligibility, and what needs investigation before cleanup?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>OR allows either condition to qualify the person. An employee outside Finance could match through Employee alone, and a Finance person could match without Employee. AND requires both.</p>
<p>Assess the population, resulting assignments, and target consequences before choosing recovery actions. The logic demonstrates a broader condition, but it does not tell us which operations actually occurred. Obtain that history instead of assuming every possible unintended account was created.</p>
</div>
</details>

<a id="q30"></a>

### Q30. Rollback is not all cleanup

<p class="qb-question"><strong>Question:</strong> A mistaken Finance OR Employee rule produced a broader assignment population. Support restores the approved Finance AND Employee configuration, but account, role, and session effects from the mistaken period remain unchecked. Does rollback establish full cleanup?</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Rollback restores the earlier configuration. Effects already produced need their own investigation and corrective operations.</p>
<p>Identify the users and paths that actually changed, involve the appropriate owners, and verify cleanup afterward. The rule can be correct again while unintended access remains. Report configuration recovery and access cleanup separately so a restored condition is not mistaken for every target outcome.</p>
</div>
</details>

<a id="q31"></a>

### Q31. Preserve legitimate access during cleanup

<p class="qb-question"><strong>Question:</strong> After a group-rule mistake, several application accounts were created during the affected time period. Their ownership, approved access, and record-retention requirements remain unchecked. Should support delete all accounts from that period as the recovery action?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Timing alone does not establish that every account was incorrect. Identify legitimate ownership, intended access, and required retained records before selecting cleanup.</p>
<p>Record the prior approved configuration, stopping point, affected identities, owners, corrective operations, and verification. Preserve legitimate work while removing unintended effects. A broad date range is a starting scope for investigation, not an instruction to delete every record it contains.</p>
</div>
</details>

<a id="q32"></a>

### Q32. Protected administrative recovery

<p class="qb-question"><strong>Question:</strong> A team plans a shared authentication-policy change that could lock authorized administrators out. Its proposed recovery route depends entirely on the same control being changed. Why must the approved recovery design address that dependency before rollout?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>If that control fails, the operators may be unable to use the route needed to regain control. Plan a protected, approved recovery capability that does not depend entirely on it.</p>
<p>Define ownership, protection, and verification alongside the affected population and acceptance checks. The operational design should provide authorized recovery, rather than improvised bypass instructions. Planning beforehand makes restoration a reviewable responsibility instead of a guess made after access is lost.</p>
</div>
</details>

## Verify authentication recovery

<a id="q33"></a>

### Q33. Two different recovery problems

<p class="qb-question"><strong>Question:</strong> In case A, a mistaken group rule broadened access and needs configuration restoration plus cleanup. In independent case B, Priya has approved Expense access but lost use of her old phone authenticator. How do these two meanings of recovery require different actions?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Case A concerns intended system behavior and its access effects. Case B concerns verifying the requester and replacing unavailable authentication enrollment.</p>
<p>The shared word recovery does not make rollback and authenticator reset equivalent. Priya's access approval is supplied for B, but authentication recovery remains unresolved. Identify the demonstrated problem and its responsible process before choosing an action, then verify the corresponding outcome.</p>
</div>
</details>

<a id="q34"></a>

### Q34. Identify the requester

<p class="qb-question"><strong>Question:</strong> Priya has replaced her phone and cannot use its old Okta Verify enrollment, the registration used for authentication. Her Expense access exception is confirmed, but requester verification and authenticator recovery are unresolved. What should the help desk establish before an authorized reset of the unavailable enrollment?</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Identify the correct account, verify the requester through the organization's approved process, and determine which authenticator is unavailable. Check the operator's authority and scope as well.</p>
<p>A name or sponsor's access approval does not establish that the caller is Priya. Changing enrollment affects a means of proving identity, so the recovery decision needs its own evidence. Keep the approved business access while resolving the separate requester-verification question.</p>
</div>
</details>

<a id="q35"></a>

### Q35. Access approval is not requester proof

<p class="qb-question"><strong>Question:</strong> Priya has replaced her phone and cannot use its old Okta Verify enrollment, the registration used for authentication. Her Expense access exception is confirmed, but requester verification and authenticator recovery are unresolved. Why does the confirmed access exception not authorize a reset for anyone claiming her name?</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The exception approves a business capability for Priya. It does not prove that the current requester is Priya or controls the correct identity.</p>
<p>Use the approved verification process before changing enrollment. The access approver and the recovery operator have different responsibilities. Preserve the access decision while verifying the caller: the facts are related, but one cannot replace the other at this authentication boundary.</p>
</div>
</details>

<a id="q36"></a>

### Q36. Reset action and recovery outcome

<p class="qb-question"><strong>Question:</strong> After requester verification and authorization, support resets the selected unavailable Okta authenticator enrollment. Replacement setup and a subsequent permitted sign-in have not been checked. What does the reset accomplish, and what recovery outcomes remain?</p>

<details class="qb-answer" id="q36-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The reset cancels the selected enrollment and requires setup again. It does not establish successful replacement registration or application entry.</p>
<p>Preserve the intended authentication requirements and verify the new enrollment and permitted sign-in. Obtain application evidence when entry is part of the recovery goal. The completed administrative action is progress, but it is different from the restored user outcome that the acceptance checks must demonstrate.</p>
</div>
</details>

<a id="q37"></a>

### Q37. Choose the related correction

<p class="qb-question"><strong>Question:</strong> One application rejects a SAML sign-in because its audience identifies the wrong intended recipient. In another case, a user cannot use their enrolled authenticator. Would a password reset fix the first defect, or broader business permissions fix the second?</p>

<details class="qb-answer" id="q37-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Those actions address different boundaries. The SAML audience defect concerns the sign-in connection's intended recipient; unavailable authentication enrollment concerns registration and proof.</p>
<p>Choose the supported correction for the demonstrated issue and verify its result. An unrelated password change or broader permission does not supply either missing outcome. Restored access should remain within the approved requirements, rather than compensating for an unresolved problem with another kind of access.</p>
</div>
</details>

<a id="q38"></a>

### Q38. Self-service is configured

<p class="qb-question"><strong>Question:</strong> A user loses the phone holding an enrolled authenticator. Self-service recovery exists as a product capability, but the organization’s configured policy and the user’s available recovery methods are unknown. Can support assume that self-service will work for this case?</p>

<details class="qb-answer" id="q38-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Availability depends on the configured process and usable recovery methods. Compare the actual loss with those requirements instead of assuming a capability is ready for every person.</p>
<p>If assistance is needed, follow the approved verification and recovery path through an authorized operator. Completion still needs correct replacement enrollment and a permitted subsequent sign-in. Suggesting self-service is not evidence that either outcome was achieved.</p>
</div>
</details>

<a id="q39"></a>

### Q39. Loss may involve compromise

<p class="qb-question"><strong>Question:</strong> A user’s lost phone may have been compromised. An authorized recovery process restores authenticator enrollment, but prior account and session exposure remains uninvestigated. Does replacement setup alone close the wider incident questions?</p>

<details class="qb-answer" id="q39-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Follow the incident process for the account and session investigation as well. Replacement can restore authentication while other exposure remains unresolved.</p>
<p>Coordinate the relevant owners and verify each required outcome. Suspected compromise changes the investigation's scope; it is not proof of a particular cause or event. Keep restored setup and unresolved exposure as separate findings instead of treating one successful recovery step as complete incident closure.</p>
</div>
</details>

## Respect integration-specific responsibilities

<a id="q40"></a>

### Q40. The Microsoft-side identity

<p class="qb-question"><strong>Question:</strong> A company connects Okta to Microsoft 365. Microsoft Entra ID remains the Microsoft-side cloud identity service, and licenses and service permissions must be managed. Does establishing the Okta connection eliminate those destination-side responsibilities?</p>

<details class="qb-answer" id="q40-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The Microsoft-side identity, license, and service responsibilities remain part of the requirement. A sign-in connection is only one piece of the access model.</p>
<p>Name the tenant, population, source ownership, connection, account-management model, and removal evidence. Investigate the actual integration rather than copying another application's authentication or provisioning contract. The destination still needs its own account and capability results.</p>
</div>
</details>

<a id="q41"></a>

### Q41. Do not rename the connector protocol

<p class="qb-question"><strong>Question:</strong> An Office 365 integration reference describes Secure Web Authentication (SWA) and WS-Federation for its supported sign-in paths. Another Microsoft application uses OpenID Connect (OIDC). Should the first connector’s WS-Federation path be relabeled OIDC because both applications come from Microsoft?</p>

<details class="qb-answer" id="q41-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Describe the named connector according to its actual supported path and configuration. SWA uses stored application credentials; WS-Federation exchanges identity information for federated sign-in.</p>
<p>Another application's protocol cannot rename this connection. Follow each integration's documentation and evidence rather than extending a familiar label to every product from the same vendor. The comparison helps select the right questions, not substitute one deployment model for another.</p>
</div>
</details>

<a id="q42"></a>

### Q42. Federation is not licensing

<p class="qb-question"><strong>Question:</strong> A Microsoft 365 federated sign-in succeeds. No account-management result, license check, or test of a particular service capability is supplied. Does that sign-in result establish account creation, the necessary license, and permission for the intended business task?</p>

<details class="qb-answer" id="q42-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Not by itself. The successful sign-in is evidence at the authentication boundary. Account-management, licensing, and the intended service capability need their own relevant findings.</p>
<p>Follow the actual connector and Microsoft-side responsibilities. Another application's provisioning contract cannot supply these missing results. Report the verified sign-in while keeping the account, license, and task checks visible so the business outcome is assessed across its required scope.</p>
</div>
</details>

## Name the owner and record the decision

<a id="q43"></a>

### Q43. Route the unresolved result

<p class="qb-question"><strong>Question:</strong> A proposed Expense model assigns contractor-exception approval to the sponsor and Expense owner, local-account and role management to the Expense owner, and Okta configuration to an authorized operator. Priya’s exception, a local role, and a configuration change remain unresolved. How should they be routed?</p>

<details class="qb-answer" id="q43-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Route the exception to its named approvers, the local account or role result to the Expense owner, and the configuration task to an operator with the required authority and scope.</p>
<p>Follow each unresolved outcome to the person who can decide or verify it. A vague assignment to “identity” hides these distinct jobs. The Finance owner separately decides approval capability; no single administrator should be assumed to authorize every business and technical result.</p>
</div>
</details>

<a id="q44"></a>

### Q44. Record a proposed decision accurately

<p class="qb-question"><strong>Question:</strong> The approved Expense model gives effective Finance employees ordinary expense-submission access. Approval rights require separate named Finance-owner approval. Moving out of Finance ends normal eligibility; exceptions need independent review, and departure requires access removal. Contractors are outside Expense’s normal employee path. Access requires a documented exception approved by the sponsor and Expense owner, with defined scope, an end condition, and a responsible maintenance owner. Workday owns employee eligibility data, Expense’s owner handles accounts and roles, and existing authentication requirements remain. The design has not been deployed. What should a compact decision record connect, and how should it state implementation status?</p>

<details class="qb-answer" id="q44-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Connect approved eligibility and capabilities with source ownership, normal and exception paths, account handling, authentication, administrative responsibility, acceptance evidence, and recovery.</p>
<p>Describe the record as the proposed design and acceptance plan. It is not a completed rollout or supplied set of successful tests. Keep unresolved decisions visible with their owners, so absent approval or intended removal is not accidentally reported as an achieved result.</p>
</div>
</details>

[Day 14 lesson](../lessons/day-14-requirements-and-responsibilities.md) · [Day 14 recap](../revision/day-14.md) · [Question bank](index.md)
