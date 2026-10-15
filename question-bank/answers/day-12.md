---
title: "Day 12 teaching explanations"
parent: "Day 12 practice bank"
grand_parent: "Revise, Test, and Learn"
nav_order: 1
---

# Day 12: Explanations

<details class="qb-answer" id="q01">
<summary>Q01. Join, move, leave</summary>
<p class="qb-question"><strong>Question:</strong> An identity team receives three approved events: Maya starts employment, Daniel changes responsibilities while remaining employed, and Jordan leaves. How do joiner, mover, and leaver describe the different access goals for these events?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A joiner starts work, a mover changes responsibilities, and a leaver departs. Together these are often called JML. Start with the approved business outcome rather than choosing the same account action for all three.</p>
<p>The joiner needs the access required to begin work. The mover may keep some access, gain another capability, and lose obsolete paths. The leaver needs access to end across the agreed scope. Each goal requires evidence from the affected systems.</p>
</div>
<p><a href="../day-12.md#q01">Return to Q01</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#name-the-state-and-its-system">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q02">
<summary>Q02. Inactive where?</summary>
<p class="qb-question"><strong>Question:</strong> A departure ticket includes only the note “Jordan is inactive.” His employment record, Okta identity, Projects application account, and application sessions may each have separate states. What must support clarify before treating this as access-removal evidence?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Ask which system, record, and observation the writer means. An HR departure, an Okta status, a target application's enabled flag, and a session accepting requests are different findings.</p>
<p>Use precise wording such as “the checked Okta identity is DEPROVISIONED.” That names the actual account state without claiming every application is inactive. Different states can coexist while a departure is being processed, so the remaining outcomes still need their own checks.</p>
</div>
<p><a href="../day-12.md#q02">Return to Q02</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#name-the-state-and-its-system">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q03">
<summary>Q03. The effective point</summary>
<p class="qb-question"><strong>Question:</strong> HR records a future employee start today, while a departure event arrives before downstream applications finish removing access. How does an approved event’s effective point differ from its arrival time and the completion of target changes?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The effective point is when the approved business change takes effect. Arrival tells you when the process received the information. Downstream completion tells you when the required target outcomes were achieved.</p>
<p>Receiving a future start today does not itself authorize access today. Likewise, an on-time departure event does not establish completed application removal. Keep all three observations so preparation, permitted use, and verified completion are not confused with one another.</p>
</div>
<p><a href="../day-12.md#q03">Return to Q03</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#name-the-state-and-its-system">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q04">
<summary>Q04. Data change versus lifecycle action</summary>
<p class="qb-question"><strong>Question:</strong> A Workday employment field changes for a correctly associated employee. The company has configured lifecycle processing in Okta, but no account action or downstream result has been inspected. Does the changed field establish that the required lifecycle action occurred?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The field is profile data. The configured process must interpret the relevant event, act on the correct identity, and produce the intended account and access results.</p>
<p>Follow the source relationship, processing evidence, and resulting operations. A changed value is a meaningful observation, but it does not supply a missing action or a target outcome. The intended lifecycle change can remain pending even when the source information is correct.</p>
</div>
<p><a href="../day-12.md#q04">Return to Q04</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#name-the-state-and-its-system">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q05">
<summary>Q05. Active is a scoped state</summary>
<p class="qb-question"><strong>Question:</strong> A read of Maya’s Okta user returns status ACTIVE. Her current employment approval, application accounts, actual sign-in, and business permissions have not been reviewed. What does this account status establish, and which conclusions need separate evidence?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>ACTIVE establishes that the checked Okta account is enabled. It does not independently establish ongoing employment, successful application entry, or the permissions needed for Maya's work.</p>
<p>Authentication requirements may still apply, and each application has its own records and access conditions. Use the status as one finding, then follow the approved requirement to the missing checks. An enabled identity is useful context, rather than proof of every business outcome.</p>
</div>
<p><a href="../day-12.md#q05">Return to Q05</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q06">
<summary>Q06. PROVISIONED does not mean Projects created</summary>
<p class="qb-question"><strong>Question:</strong> An Okta user-list response shows API status PROVISIONED, whose Admin Console label is Pending user action. No create request or read of the person’s Projects application account is supplied. Does the Okta status verify that Projects was provisioned?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Here PROVISIONED is an Okta account-status label indicating that activation-related user action remains. It is not the result of creating an account in Projects.</p>
<p>For Projects, inspect the relevant account-management request, response, and intended target record. The same word can describe different things at different boundaries. Read the status in the system where it was observed instead of allowing a familiar label to stand in for application evidence.</p>
</div>
<p><a href="../day-12.md#q06">Return to Q06</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q07">
<summary>Q07. Staged is not a fixed route</summary>
<p class="qb-question"><strong>Question:</strong> A newly created Okta identity is STAGED, meaning activation has not been initiated or administrative action remains. The organization has different creation and authentication arrangements for different users. Must every identity pass through all available statuses in one fixed sequence?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The status names describe distinct account conditions, not mandatory stations in a universal route. Creation, authentication arrangements, and configured lifecycle behavior affect which states occur.</p>
<p>Inspect the actual process and the approved start before deciding what should happen next. STAGED identifies this account's current condition, but it does not establish readiness for work. A memorized sequence cannot replace evidence of the intended activation and application outcomes.</p>
</div>
<p><a href="../day-12.md#q07">Return to Q07</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q08">
<summary>Q08. Different problems, different states</summary>
<p class="qb-question"><strong>Question:</strong> Three employed users have Okta statuses RECOVERY, PASSWORD_EXPIRED, and LOCKED_OUT. A fourth person has an approved effective HR departure. Why should support distinguish these conditions instead of treating each as the same lifecycle event?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>RECOVERY concerns password recovery, PASSWORD_EXPIRED requires a password update, and LOCKED_OUT indicates a lockout condition. These describe account conditions rather than an employment decision.</p>
<p>The departure supplies a different business requirement: access must end across its agreed scope. Read the account state alongside the source relationship and approved event before choosing an action. Password recovery does not renew employment approval, and a lockout does not prove the person has left.</p>
</div>
<p><a href="../day-12.md#q08">Return to Q08</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q09">
<summary>Q09. What suspension retains</summary>
<p class="qb-question"><strong>Question:</strong> A company approves a temporary suspension of Maya’s Okta access. Support needs to understand what suspension retains before planning a later return. How do application assignments and group memberships behave, and what still requires target-specific evidence?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Suspension blocks Okta access while retaining application assignments and group memberships. Unsuspending that account is therefore a different decision from reconstructing access removed by deactivation.</p>
<p>Check the approved situation and the relevant target accounts and sessions where required. The known Okta action has a specific scope; it should not be reported as verified removal everywhere. Retaining relationships helps explain the later decision, but it does not settle every application's observed access.</p>
</div>
<p><a href="../day-12.md#q09">Return to Q09</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q10">
<summary>Q10. Read deactivation’s result</summary>
<p class="qb-question"><strong>Question:</strong> An approved departure triggers Okta deactivation, which removes app assignments, invokes applicable configured deprovisioning, and retains group memberships. The action is requested, but background completion and target results are unchecked. Can support report the departure complete?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Not yet. Requesting the action is different from verifying completion. Check the completed Okta result and the relevant account read, then follow each required downstream operation and access outcome.</p>
<p>Deactivation is also distinct from deleting the identity. Even a completed Okta deactivation does not supply every application's result. Keep the initiating action and its target effects separate so a requested operation does not become an unsupported claim of complete departure.</p>
</div>
<p><a href="../day-12.md#q10">Return to Q10</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q11">
<summary>Q11. Deactivated and deleted</summary>
<p class="qb-question"><strong>Question:</strong> Jordan has departed and his Okta identity is deactivated. A target deactivation request failed, and an application session still retrieves protected data. A colleague proposes deleting the Okta user to close the ticket. Why does deletion not resolve the missing evidence?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Deleting the Okta user is a separate, irreversible action. It does not supply a successful target correction or prove that the application stopped accepting the session.</p>
<p>Preserve the ability to identify the correct records while completing the access-removal requirement. The target account and session need their own verification. Removing an identity record cannot replace evidence that the specific exposure ended, so it should not become a shortcut around an unresolved departure.</p>
</div>
<p><a href="../day-12.md#q11">Return to Q11</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q12">
<summary>Q12. Suspension and SCIM</summary>
<p class="qb-question"><strong>Question:</strong> Support suspends a person’s Okta account. Projects uses an outbound SCIM integration, which manages application accounts separately, with deactivation implemented as active false. No target request is supplied. Does suspension alone establish that SCIM deprovisioning was sent?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Okta suspension alone does not send the outbound SCIM deprovisioning event. Inspect the supported lifecycle action and actual target request before reporting an application-account change.</p>
<p>SCIM is an account-management interface, and the target state needs its own read. Here Projects deactivation would set active false and retain the resource. An Okta suspension cannot substitute for that operation or its result when the approved requirement calls for downstream access removal.</p>
</div>
<p><a href="../day-12.md#q12">Return to Q12</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#recognize-the-relevant-okta-account-states">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q13">
<summary>Q13. Connect the joiner chain</summary>
<p class="qb-question"><strong>Question:</strong> A company approves Maya’s employment and the point when her work access may begin. It must establish her identity and prepare the applications needed for her job. Which outcomes belong in a reasoned statement that this joiner is ready?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Start with approved employment and the effective access point. Verify the correct source record, matching and identity, intended activation and authentication readiness, groups and assignments, and required target accounts, sign-in, and permissions.</p>
<p>These are connected dependencies, not a guaranteed connector execution order. The evidence should show that Maya can perform her intended work. A successful early step helps locate progress, but it cannot supply the later results that readiness still depends on.</p>
</div>
<p><a href="../day-12.md#q13">Return to Q13</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#joiner-connect-the-initial-decisions">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q14">
<summary>Q14. HR arrived and Okta Active</summary>
<p class="qb-question"><strong>Question:</strong> A new employee’s HR record has arrived and their Okta identity is ACTIVE. Their approved access-start time, application assignments, target accounts, sign-in, and required work permissions remain unchecked. Is “ready to work” established by the two supplied observations?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Not yet. The observations establish the received HR record and enabled Okta account. They leave the approved effective access point and required application outcomes unverified.</p>
<p>Report those completed findings, then ask for the missing assignment, account, sign-in, and permission evidence. Readiness is a business outcome across the required scope. A person can be prepared in one system while still being unable, or not yet authorized, to perform the intended work.</p>
</div>
<p><a href="../day-12.md#q14">Return to Q14</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#joiner-connect-the-initial-decisions">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q15">
<summary>Q15. Preparation before a future start</summary>
<p class="qb-question"><strong>Question:</strong> An employee is approved to begin work next Monday, and HR records that future-dated start today. Preparation may occur before Monday, but no separate approval for earlier working access is supplied. Does today’s record arrival authorize immediate use?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Preparation and permission to use access are separate decisions. The supplied approval makes Monday the effective access point; today's data entry does not change it.</p>
<p>Check that the configured process respects that distinction, then verify the required outcomes at the appropriate time. Having the record available can support preparation without establishing immediate authorization. Always read the approved timing rather than assuming the arrival timestamp determines when working access should begin.</p>
</div>
<p><a href="../day-12.md#q15">Return to Q15</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#joiner-connect-the-initial-decisions">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q16">
<summary>Q16. Existing account at joining</summary>
<p class="qb-question"><strong>Question:</strong> A company approves a new employee’s start. An application already contains a plausible account with their name, but ownership and any existing Okta identity relationship are unknown. Should support immediately create another identity or account to finish preparation?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>First investigate ownership and matching. The plausible account may belong to the person, to someone else with the same name, or contain data that needs review before a relationship is accepted.</p>
<p>Creating another identity or account without checking can leave duplicate or unmanaged paths. The approved start defines the goal, but it does not identify every existing record. Establish the intended association before choosing the account operation, then verify the resulting preparation.</p>
</div>
<p><a href="../day-12.md#q16">Return to Q16</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#joiner-connect-the-initial-decisions">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q17">
<summary>Q17. Priya’s joiner and end condition</summary>
<p class="qb-question"><strong>Question:</strong> Priya is a contractor under a sponsor-approved process that manages her profile in Okta and specifies an access end condition. Employee profiles use Workday and AD, but Priya is excluded from those imports. Must she acquire those source associations to be prepared correctly?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Use Priya's approved contractor process, information, maintenance responsibilities, and agreed end condition. Adding employee-source associations merely to copy another population's journey would conflict with the stated model.</p>
<p>Her application assignments, target accounts, and actual access still need verification. A different maintenance path changes how preparation is governed, rather than removing the need to check its outcomes. Start with the intended population and approved responsibility, then follow the appropriate records.</p>
</div>
<p><a href="../day-12.md#q17">Return to Q17</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#joiner-connect-the-initial-decisions">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q18">
<summary>Q18. Read the approved move</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved move from Sales to Finance is effective. She remains employed as NB-1042. Sales-group membership and Salesforce access must end with no transition exception, while her existing Projects account and access must continue with department code FIN instead of SAL. Which outcomes should support remove, update, and preserve when evaluating this mover?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Remove obsolete Sales membership and Salesforce access, update the governed department to Finance and Projects' code to FIN, and preserve Maya's existing identity and continuing Projects account and access.</p>
<p>Read those outcomes together. A move is not simply adding new access, nor is it disabling everything the person already has. The business requirement defines both what no longer belongs and what Maya still needs to do her work.</p>
</div>
<p><a href="../day-12.md#q18">Return to Q18</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#mover-state-what-should-change-and-what-should-remain">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q19">
<summary>Q19. Finance does not mean manager</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved move changes her department to Finance and preserves Projects access. Daniel, another Finance employee, is a manager with Expense approval permissions. No manager role or approval requirement is supplied for Maya. Does her department change establish Daniel’s capabilities for her?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A department value does not establish every role held by people in that department. Maya's approved responsibilities determine which capabilities she should receive or retain.</p>
<p>If expense approval is required, obtain that business authorization and relevant application permission evidence. Daniel's access is an example of another person's role, not an authorization rule for Maya. Correct profile data is useful, but it cannot supply an unstated manager entitlement.</p>
</div>
<p><a href="../day-12.md#q19">Return to Q19</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#mover-state-what-should-change-and-what-should-remain">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q20">
<summary>Q20. Preserve completed mover outcomes</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved move from Sales to Finance is effective. She remains employed as NB-1042. Sales-group membership and Salesforce access must end with no transition exception, while her existing Projects account and access must continue with department code FIN instead of SAL. Workday HR shows Maya’s effective department as Finance. The correct Workday association is checked, Okta shows Finance and Employee, and the active Sales AND Employee rule has removed its rule-managed Sales membership. Salesforce access remains unresolved. Does the evidence demonstrate a failed department update or Sales-group rule?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The supplied observations show the intended source and profile change and the processed Sales membership removal. They do not demonstrate a defect in those completed steps.</p>
<p>Keep those successes while investigating the remaining Salesforce relationship. Reverting Finance to Sales or weakening the rule would address a different problem. A later access discrepancy can coexist with correct earlier processing, so follow the surviving path instead of assuming every previous step must have failed.</p>
</div>
<p><a href="../day-12.md#q20">Return to Q20</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#follow-mayas-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q21">
<summary>Q21. The remaining assignment path</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved move from Sales to Finance is effective. She remains employed as NB-1042. Sales-group membership and Salesforce access must end with no transition exception, while her existing Projects account and access must continue with department code FIN instead of SAL. Workday HR shows Maya’s effective department as Finance. The correct Workday association is checked, Okta shows Finance and Employee, and the active Sales AND Employee rule has removed its rule-managed Sales membership. Salesforce remains individually assigned to Maya. Review confirms no group assignment remains and the individual exception ended with her move. What remaining relationship conflicts with the approved move?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The individual Salesforce assignment remains after its exception approval ended. It is a separate path from the rule-managed Sales membership that was successfully removed.</p>
<p>Address that individual assignment through the approved removal process. The supplied evidence gives no reason to change the correct Finance input or the working rule. Ending one relationship does not automatically end another, which explains how the old assignment can survive otherwise successful mover processing.</p>
</div>
<p><a href="../day-12.md#q21">Return to Q21</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#follow-mayas-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q22">
<summary>Q22. Assignment versus demonstrated entry</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved move from Sales to Finance is effective. She remains employed as NB-1042. Sales-group membership and Salesforce access must end with no transition exception, while her existing Projects account and access must continue with department code FIN instead of SAL. Salesforce remains individually assigned to Maya. Review confirms no group assignment remains and the individual exception ended with her move. Salesforce also confirms a new application session for Maya after the move. What does that session observation add beyond a recorded assignment or visible tile?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It establishes actual retained Salesforce access through the checked new session. That is stronger than a tile being visible or an assignment appearing in a list.</p>
<p>Together the findings show an unjustified surviving assignment and application entry contrary to the approved move. No corrective follow-up is supplied, so removal is not yet verified. A demonstrated discrepancy and a supported next action are useful findings, but they do not mean the correction has already occurred.</p>
</div>
<p><a href="../day-12.md#q22">Return to Q22</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#follow-mayas-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q23">
<summary>Q23. Projects continues: how far verified?</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved move from Sales to Finance is effective. She remains employed as NB-1042. Sales-group membership and Salesforce access must end with no transition exception, while her existing Projects account and access must continue with department code FIN instead of SAL. Her Projects app profile contains FIN, the supported update to linked account prj-1042 succeeds, and a later target read shows FIN and active true. No Projects sign-in or permission check is supplied. How far is continuation verified?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The evidence verifies the supplied department update on the intended Projects account and its enabled state at the time of the read. Those are completed account-management outcomes.</p>
<p>Actual entry and the permissions needed for Maya's work remain unverified. Keep those checks separate while recognizing that the correct target code was stored. The requirement calls for continued Projects access, and reading a correct value is one part of establishing that broader business result.</p>
</div>
<p><a href="../day-12.md#q23">Return to Q23</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#follow-mayas-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q24">
<summary>Q24. Choose the Salesforce correction scope</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved move from Sales to Finance is effective. She remains employed as NB-1042. Sales-group membership and Salesforce access must end with no transition exception, while her existing Projects account and access must continue with department code FIN instead of SAL. Salesforce remains individually assigned to Maya. Review confirms no group assignment remains and the individual exception ended with her move. Salesforce accepts a new session after the move. Its connector behavior and any corrective results are unknown. What should support address and verify without borrowing another application’s deactivation contract?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Address the surviving individual Salesforce assignment under the approved removal requirement. Then check the resulting Okta assignment state, applicable Salesforce account-management action, target access, and relevant sessions.</p>
<p>Salesforce needs its own integration and outcome evidence. Another application's active-false contract cannot establish its behavior. Keep the application instance and operation explicit: a justified removal action becomes a completed correction only when the required follow-up findings support it.</p>
</div>
<p><a href="../day-12.md#q24">Return to Q24</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#follow-mayas-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q25">
<summary>Q25. Why not deactivate everything?</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved move from Sales to Finance is effective. She remains employed as NB-1042. Sales-group membership and Salesforce access must end with no transition exception, while her existing Projects account and access must continue with department code FIN instead of SAL. A colleague suggests deactivating all of Maya’s accounts so that none of her previous access survives. Would this meet the approved mover requirement?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It would violate the requirement to preserve Projects and her continuing work. Maya remains employed and keeps her identity and intended account.</p>
<p>The approved move removes obsolete Salesforce access while updating and preserving Projects. Apply the action to the relationship that no longer has justification. Removing more access is not automatically a better outcome; the requirement includes keeping the access that her new responsibilities still need.</p>
</div>
<p><a href="../day-12.md#q25">Return to Q25</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#follow-mayas-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q26">
<summary>Q26. Decide whether the move is complete</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved move from Sales to Finance is effective. She remains employed as NB-1042. Sales-group membership and Salesforce access must end with no transition exception, while her existing Projects account and access must continue with department code FIN instead of SAL. Workday HR shows Maya’s effective department as Finance. The correct Workday association is checked, Okta shows Finance and Employee, and the active Sales AND Employee rule has removed its rule-managed Sales membership. Salesforce remains individually assigned to Maya. Review confirms no group assignment remains and the individual exception ended with her move. Projects has verified FIN and active true, while Salesforce accepts a new session. No corrective Salesforce action is supplied. Can the mover ticket be closed?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Not yet. Finance and Sales-group removal are verified, and Projects has the checked updated code and active account. Salesforce still has the unjustified assignment and demonstrated entry.</p>
<p>Report those separate outcomes and request the required Salesforce correction and verification. A successful profile or group change cannot erase the remaining application finding. Closing the mover ticket requires the agreed removal and continuation evidence, rather than one successful step in the chain.</p>
</div>
<p><a href="../day-12.md#q26">Return to Q26</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#follow-mayas-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q27">
<summary>Q27. Completed and outstanding departure outcomes</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s approved employment departure is effective. Okta deactivation is complete, a later read shows DEPROVISIONED with app assignments absent, and his linked Active Directory (AD) account is confirmed disabled. Projects, a separate application, supports enabled account deactivation by setting active false while retaining its resource. A request to Jordan’s verified linked account returns HTTP 503 Service Unavailable; a later target read still shows active true. After Jordan’s Okta deactivation, a checked pre-existing session in Expense, a separate business application, retrieves protected expense data through a new authenticated response. Expense’s account-removal method and the session’s persistence mechanism are unknown. Which supplied findings are completed, and which departure outcomes remain outstanding?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The supplied Okta deactivation and assignment removal are complete, and the linked AD account's disablement is independently verified. Those successes remain valid.</p>
<p>Projects still reports an active account after its failed request, and Expense still accepts the checked session. Both need separate application follow-up. A completed initiating-system action does not supply every target result, so the broader departure remains open despite the meaningful work already verified.</p>
</div>
<p><a href="../day-12.md#q27">Return to Q27</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q28">
<summary>Q28. Fresh Okta sign-in blocked</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s approved employment departure is effective. Okta deactivation is complete, a later read shows DEPROVISIONED with app assignments absent, and his linked Active Directory (AD) account is confirmed disabled. A controlled fresh Okta sign-in is blocked. After Jordan’s Okta deactivation, a checked pre-existing session in Expense, a separate business application, retrieves protected expense data through a new authenticated response. Expense’s account-removal method and the session’s persistence mechanism are unknown. Does the blocked Okta test disprove the observed Expense access?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. These are different results at different services. A fresh Okta sign-in can be blocked while an application continues accepting a session it previously established.</p>
<p>Preserve both findings. The Okta test verifies the checked sign-in outcome; Expense supplies its own application-side evidence. Repeating the blocked Okta test cannot erase that protected response. The departure needs the application issue addressed as well as the completed Okta result.</p>
</div>
<p><a href="../day-12.md#q28">Return to Q28</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q29">
<summary>Q29. Read Projects’ failed removal</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s approved employment departure is effective. Okta deactivation is complete, a later read shows DEPROVISIONED with app assignments absent, and his linked Active Directory (AD) account is confirmed disabled. Projects, a separate application, supports enabled account deactivation by setting active false while retaining its resource. A request to Jordan’s verified linked account returns HTTP 503 Service Unavailable; a later target read still shows active true. Is the required Projects account deactivation verified, and what should support investigate next?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The request asked for the inactive state, but its response and the later active read do not establish that state. The intended target account still reports active true.</p>
<p>Investigate the connector and target result, coordinate an approved way to complete removal, and verify the identified account afterward. Sending an operation is different from observing its effect. This remains an application departure issue even though the upstream Okta deactivation completed.</p>
</div>
<p><a href="../day-12.md#q29">Return to Q29</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q30">
<summary>Q30. 503 does not name the outage cause</summary>
<p class="qb-question"><strong>Question:</strong> Projects, a separate application, supports enabled account deactivation by setting active false while retaining its resource. A request to Jordan’s verified linked account returns HTTP 503 Service Unavailable; a later target read still shows active true. No target-service logs or detailed investigation findings are supplied. Does HTTP 503 establish the exact underlying reason, or does that require more evidence?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>HTTP 503 reports service unavailability. It does not identify the underlying cause from the facts supplied here.</p>
<p>Obtain the relevant service and operation evidence before deciding on a correction or supported retry. The later active read verifies the remaining account-state discrepancy, but it does not explain why the service was unavailable. The failure boundary can be clear while its detailed cause still needs investigation.</p>
</div>
<p><a href="../day-12.md#q30">Return to Q30</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q31">
<summary>Q31. Do not reactivate Jordan to retry</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s approved employment departure is effective. Okta deactivation is complete, a later read shows DEPROVISIONED with app assignments absent, and his linked Active Directory (AD) account is confirmed disabled. Projects, a separate application, supports enabled account deactivation by setting active false while retaining its resource. A request to Jordan’s verified linked account returns HTTP 503 Service Unavailable; a later target read still shows active true. A colleague proposes reactivating Jordan in Okta to make a downstream retry easier. Why would that conflict with the current requirement?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Jordan's departure is effective, so restoring his Okta access would conflict with the approved outcome. It would not demonstrate that the Projects service problem was repaired.</p>
<p>Coordinate a supported, authorized way to complete the downstream removal while preserving the verified departure state. The target operation has its own issue and evidence. Reversing a correct upstream result does not establish the intended target state or justify renewed access for a departed employee.</p>
</div>
<p><a href="../day-12.md#q31">Return to Q31</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q32">
<summary>Q32. A fresh protected response</summary>
<p class="qb-question"><strong>Question:</strong> After Jordan’s Okta deactivation, a checked pre-existing session in Expense, a separate business application, retrieves protected expense data through a new authenticated response. Expense’s account-removal method and the session’s persistence mechanism are unknown. His departure requires access to end. What does the protected response establish, and what remains unknown before choosing and verifying a correction?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It demonstrates continuing authenticated Expense access through that checked session. A newly retrieved protected response is stronger evidence than an old page remaining visible.</p>
<p>It does not explain why the session persists or identify the supported removal method. Ask the application owner to confirm the account and session, required termination behavior, supported action, and a fresh protected-request result afterward. You can recognize the retained access without inventing its persistence mechanism.</p>
</div>
<p><a href="../day-12.md#q32">Return to Q32</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q33">
<summary>Q33. An old page is different evidence</summary>
<p class="qb-question"><strong>Question:</strong> Jordan has departed and Okta deactivation is verified. His browser still displays an old Expense page, but no fresh protected request or authenticated response has been checked. Does the visible page establish either continued application access or successful termination?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It establishes neither outcome by itself. A previously displayed page can remain visible without demonstrating that the application will accept another protected request.</p>
<p>Obtain a relevant application-side access check for the intended account and session. Avoid turning the old display into either a confirmed exposure or verified termination. The useful distinction is between content already on screen and a new protected response showing what the application currently permits.</p>
</div>
<p><a href="../day-12.md#q33">Return to Q33</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q34">
<summary>Q34. Separate session states</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s effective departure leads to verified Okta deactivation and termination of his Okta sessions. No Expense session check is supplied; Expense is a separate application that established its own sessions. Why does the Okta result not prove all Expense sessions ended?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Different services can maintain separate session state. Okta's verified action establishes its own outcome, while Expense needs application-specific evidence.</p>
<p>Ask for the required termination behavior, supported action, and relevant protected-request checks afterward. Without those observations, neither continuing Expense access nor successful termination is established here. Keep the valid Okta result while identifying the separate application outcome that remains to be verified.</p>
</div>
<p><a href="../day-12.md#q34">Return to Q34</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q35">
<summary>Q35. Two outstanding issues</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s effective departure requires both Projects and Expense access to end. A later supported correction verifies his Projects account inactive, but a checked Expense session still returns protected data. Does the Projects result close both issues?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Projects account state and Expense session access are separate outcomes. The verified Projects correction does not show that Expense stopped accepting its session.</p>
<p>Record the completed Projects result and keep the Expense exposure open for its owner. The reverse would also apply: ending an Expense session would not prove Projects inactive. A departure spanning multiple targets needs evidence for each required outcome, rather than one extra success label.</p>
</div>
<p><a href="../day-12.md#q35">Return to Q35</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#leaver-verify-each-outcome">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q36">
<summary>Q36. Checked scope is not the entire inventory</summary>
<p class="qb-question"><strong>Question:</strong> A departure requirement includes several applications and credentials. Support verifies removal in Okta and AD, but checks only Projects and Expense afterward; other agreed paths remain uninspected. What limit should be placed on the closure claim?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The supplied findings support only the checked scope. Include the remaining applications, credentials, and paths in the inventory and obtain their required outcome evidence.</p>
<p>Do not report all workforce access removed from a subset of checks. Name the completed results, unresolved observations, and uninspected paths so the responsible owners can finish the work. Scope is part of what closure means, not a detail that disappears when a few systems report success.</p>
</div>
<p><a href="../day-12.md#q36">Return to Q36</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#decide-what-evidence-closes-the-ticket">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q37">
<summary>Q37. Different closure tests</summary>
<p class="qb-question"><strong>Question:</strong> After Jordan’s effective departure, Projects still reports active true following a failed deactivation request, and Expense accepts a checked existing session for protected data. Why do the two outstanding issues need different closure evidence?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>For Projects, verify the intended resource's account state after the supported removal action. For Expense, obtain a new protected-request result after the required access-removal action.</p>
<p>The failures concern different outcomes: stored account state and demonstrated session access. Keep the correct account and session context while coordinating the owners. Another successful Okta action cannot supply either missing target finding, and account-state evidence alone does not settle the observed session issue.</p>
</div>
<p><a href="../day-12.md#q37">Return to Q37</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#decide-what-evidence-closes-the-ticket">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q38">
<summary>Q38. Deletion is not target evidence</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s departure remains unresolved because Projects reports an active account after a failed removal and Expense accepts a protected request through his old session. Could deleting his deactivated Okta identity prove that either target issue was corrected?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Deletion removes the identity record; it does not supply the missing target operation or access result. It is also a separate irreversible decision.</p>
<p>Preserve the ability to identify the correct linked accounts while completing the required departure outcomes. Choose actions for their approved business effect, then verify that effect. Removing a record at another boundary cannot stand in for evidence that these specific application exposures ended.</p>
</div>
<p><a href="../day-12.md#q38">Return to Q38</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#decide-what-evidence-closes-the-ticket">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q39">
<summary>Q39. A later return to work</summary>
<p class="qb-question"><strong>Question:</strong> Jordan returns to employment after a completed departure. Some group memberships were retained during Okta deactivation, and he once had individually approved access exceptions. Current role and access approvals have not been reviewed. Should those historical relationships automatically define his restored access?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Re-evaluate current employment, identity matching, assignments, and activation requirements. Retained memberships and old exceptions do not independently establish current business approval.</p>
<p>A return is a new decision about permitted access. Preserve correct identity relationships while checking what the person now needs. The fact that a capability existed before departure is useful history, but it is not authorization to reconstruct every old path without reviewing the present requirement.</p>
</div>
<p><a href="../day-12.md#q39">Return to Q39</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#decide-what-evidence-closes-the-ticket">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q40">
<summary>Q40. Unlocking has a purpose</summary>
<p class="qb-question"><strong>Question:</strong> A user’s Okta account is LOCKED_OUT, while password details and current employment authorization require separate review. Support performs an authorized unlock. Does that action establish a new password or restore any withdrawn employment approval?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Unlocking addresses the lockout condition. Password maintenance and business authorization answer separate questions.</p>
<p>Read the account state, source relationship, and approved event before choosing further actions. A temporary authentication problem differs from an effective departure. Describe the unlock for the condition it addresses rather than reporting an unverified password change or renewed employment approval. Those outcomes need their own authorized process and supporting evidence.</p>
</div>
<p><a href="../day-12.md#q40">Return to Q40</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#choose-the-action-for-the-state-you-actually-found">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q41">
<summary>Q41. Password, authenticator, lifecycle</summary>
<p class="qb-question"><strong>Question:</strong> Support receives three requests: recover a password, replace an enrolled authenticator used for identity verification, and remove access after an effective departure. Why must it distinguish these actions, especially when the identity follows a source-driven lifecycle process?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Password recovery concerns the password. Authenticator replacement concerns enrollment. A departure requires the approved account and access outcomes across the affected systems.</p>
<p>These are different corrections, even if a person describes each as a sign-in issue. Establish the actual condition and business event first. For a sourced identity, check whether authoritative lifecycle processing would repeat or reverse a manual change so the chosen action remains consistent with the approved source relationship.</p>
</div>
<p><a href="../day-12.md#q41">Return to Q41</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#choose-the-action-for-the-state-you-actually-found">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q42">
<summary>Q42. Report partial completion clearly</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s departure is effective. Okta deactivation and the linked AD disablement are verified, and a later Projects correction verifies the intended account inactive. Expense’s session-removal result is still awaiting its owner. Write an accurate handoff without hiding the remaining gap.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Okta deactivation and the checked AD disablement are confirmed. The Projects account correction is verified. Expense's session outcome still awaits application-owner verification, so all required access removal is not yet established.”</p>
<p>That preserves completed work and identifies the remaining responsibility. A separate outcome for each target is more useful than “user disabled, ticket closed.” The departure requirement spans those boundaries, so partial success should be reported precisely rather than becoming a complete closure claim.</p>
</div>
<p><a href="../day-12.md#q42">Return to Q42</a> · <a href="../../lessons/day-12-joiners-movers-leavers.md#choose-the-action-for-the-state-you-actually-found">Revisit the lesson</a></p>
</details>

[All Day 12 questions](../day-12.md) · [Question bank](../index.md) · [Course home](../../index.md)
