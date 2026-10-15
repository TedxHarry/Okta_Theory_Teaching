---
title: "Day 15 teaching explanations"
parent: "Day 15 practice bank"
grand_parent: "Revise, Test, and Learn"
nav_order: 1
---

# Day 15: Explanations

<details class="qb-answer" id="q01">
<summary>Q01. Connect responsibilities</summary>
<p class="qb-question"><strong>Question:</strong> A company sources employee profiles from Workday into Okta. Its AD directory supplies designated work email and validates passwords on a configured delegated path. Applications separately manage accounts, sign-in checks, permissions, and sessions. How would you explain these responsibilities as a connected journey?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Start with the employee information governed by Workday and its correct association with the Okta identity. Okta connects that identity to approved groups and assignments. AD supplies the designated email and checks passwords on the stated delegated path.</p>
<p>Applications then evaluate their sign-in information, account state, permissions, and sessions. Naming each job explains why one successful system result cannot establish every later outcome. Follow the person's requirement through those boundaries instead of merely listing product names.</p>
</div>
<p><a href="../day-15.md#q01">Return to Q01</a> · <a href="../../lessons/day-15-integrated-case.md#explain-the-architecture-in-ordinary-language">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q02">
<summary>Q02. Contractors in an HR-led environment</summary>
<p class="qb-question"><strong>Question:</strong> A company uses Workday-led employee sourcing. Priya’s sponsor-approved contractor information is maintained in Okta; checks show no Workday association or AD assignment, and employee imports exclude her population. How can this contractor model coexist with the employee architecture?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Source priority applies to actual source associations; it does not connect every person to every source. Priya follows the stated Okta-managed process without an invented HR relationship.</p>
<p>Her population label alone would not enforce that separation. Here the checked links and import scope support it. Explain the maintenance mechanism and its responsibility so an HR-led environment is not mistaken for a requirement that every identity must follow the employee path.</p>
</div>
<p><a href="../day-15.md#q02">Return to Q02</a> · <a href="../../lessons/day-15-integrated-case.md#explain-the-architecture-in-ordinary-language">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q03">
<summary>Q03. Different protocols, different outcomes</summary>
<p class="qb-question"><strong>Question:</strong> In one company, Salesforce uses SAML for sign-in, Expense uses OpenID Connect authorization code with a backend exchange and ID token validation, and Projects uses SCIM for account management. What different outcomes do these connections support, and what do they not prove for each other?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>SAML supplies sign-in information Salesforce must validate. OpenID Connect supplies Expense's identity exchange, which its backend must validate before associating the intended account. SCIM supports Projects account-management requests.</p>
<p>These purposes differ. Salesforce's sign-in protocol does not establish its provisioning behavior, and Expense entry cannot verify a Projects create. Follow each operation to its receiver, then check account, permission, and session outcomes relevant to that application's requirement.</p>
</div>
<p><a href="../day-15.md#q03">Return to Q03</a> · <a href="../../lessons/day-15-integrated-case.md#explain-the-architecture-in-ordinary-language">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q04">
<summary>Q04. Current and archived context</summary>
<p class="qb-question"><strong>Question:</strong> Jordan has departed in current access-removal tickets. An archived password incident explicitly concerns a separate time when he was employed. Maya is now Finance, although older examples describe Sales. How should an investigator use these current and historical facts?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Keep the attempt or effective point beside each conclusion. Current tickets use current requirements; the archive supplies the state for its historical investigation.</p>
<p>Diagnosing an old password incident does not authorize restoring Jordan's present access. Likewise, an earlier independent example cannot replace a current observation. The same person can appear in different states without those records becoming one shared incident or supplying each other's missing results.</p>
</div>
<p><a href="../day-15.md#q04">Return to Q04</a> · <a href="../../lessons/day-15-integrated-case.md#explain-the-architecture-in-ordinary-language">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q05">
<summary>Q05. Locate the wrong outgoing representation</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved Finance department must reach her existing Projects application account as FIN, while access continues. Workday HR and correctly sourced Okta data show Finance. The outgoing departmentCode mapping is fixed at SAL, preview and app profile show SAL, and a correlated successful update stores SAL on linked account prj-1042. Projects uses this value for allocation reporting. Where is the first demonstrated wrong representation, and did the target reject the transmitted value?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The outgoing fixed-SAL mapping is the first demonstrated wrong representation. It produces Sales' code from Finance when the requirement calls for FIN. The successful update and later read show that SAL was transmitted and stored.</p>
<p>The target did not reject that value, and the incoming HR and Okta information is correct. Follow the prepared value through request and destination. Those correlated findings identify the conversion boundary rather than blaming an unrelated source or rejected update.</p>
</div>
<p><a href="../day-15.md#q05">Return to Q05</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q06">
<summary>Q06. A functioning login, wrong report</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved Finance department must reach her existing Projects application account as FIN, while access continues. Workday HR and correctly sourced Okta data show Finance. The outgoing departmentCode mapping is fixed at SAL, preview and app profile show SAL, and a correlated successful update stores SAL on linked account prj-1042. Projects uses this value for allocation reporting. Maya can enter Projects, but the allocation report places her in Sales. No failed sign-in or approval-role issue is supplied. What problem is demonstrated despite the successful entry?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The wrong stored department representation agrees with the allocation-report discrepancy. Application entry is verified as working, so this is not a demonstrated sign-in failure.</p>
<p>Preserve that success while correcting the representation and checking the requested report. A successful login does not certify all account data or business outputs. The requirement identifies the remaining outcome, and no evidence supports adding a separate approval-role diagnosis.</p>
</div>
<p><a href="../day-15.md#q06">Return to Q06</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q07">
<summary>Q07. Preserve the approved move</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved Finance department must reach her existing Projects application account as FIN, while access continues. Workday HR and correctly sourced Okta data show Finance. The outgoing departmentCode mapping is fixed at SAL, preview and app profile show SAL, and a correlated successful update stores SAL on linked account prj-1042. Projects uses this value for allocation reporting. A colleague suggests changing Maya’s source department back to Sales or deactivating Projects. Why would these shortcuts conflict with the approved outcome?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Finance is the approved department, and Projects must continue on Maya's existing account. Changing HR back or removing required access would violate those requirements.</p>
<p>Repair the conversion from Finance to FIN instead. The correction must preserve both legitimate work and correct allocation data. Eliminating the visible mismatch by changing a correct business fact is different from fixing the demonstrated outgoing representation defect.</p>
</div>
<p><a href="../day-15.md#q07">Return to Q07</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q08">
<summary>Q08. Verify a proposed mapping correction</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved Finance department must reach her existing Projects application account as FIN, while access continues. Workday HR and correctly sourced Okta data show Finance. The outgoing departmentCode mapping is fixed at SAL, preview and app profile show SAL, and a correlated successful update stores SAL on linked account prj-1042. Projects uses this value for allocation reporting. No correction has been performed. What evidence would verify a proposed mapping repair through to Maya’s allocation-report outcome?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check the saved conversion with Finance and other supported inputs, Maya's app profile, the actual update to linked prj-1042, the target FIN value, and the corrected allocation report.</p>
<p>Preview verifies calculation, the request and target read verify delivery, and the report tests the business result. These are needed follow-up findings, not outcomes already supplied. Keep the proposed repair separate from completed and verified correction.</p>
</div>
<p><a href="../day-15.md#q08">Return to Q08</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q09">
<summary>Q09. A shared rule’s wider effects</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s approved Finance department must reach her existing Projects application account as FIN, while access continues. Workday HR and correctly sourced Okta data show Finance. The outgoing departmentCode mapping is fixed at SAL, preview and app profile show SAL, and a correlated successful update stores SAL on linked account prj-1042. Projects uses this value for allocation reporting. Other users share the same fixed-SAL mapping, but their target effects have not been inspected. Why does a future successful Maya retest not complete the wider recovery?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A shared mapping can affect other users. Identify the relevant population and which target records actually received incorrect values.</p>
<p>Restoring the approved conversion does not automatically reverse previous writes. Verify configuration recovery and appropriate target cleanup separately. Maya's test can establish her outcome, but it cannot certify every account using the mapping. The shared configuration's scope determines the wider review needed.</p>
</div>
<p><a href="../day-15.md#q09">Return to Q09</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q10">
<summary>Q10. Make the evidence request specific</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s Projects allocation report needs FIN, but the preview, app profile, transmitted update, and later target read all show SAL. The investigator must distinguish calculation, delivery, and storage before and after correction. Replace the vague request “Check the logs” with a specific evidence request.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Compare the prepared departmentCode with the transmitted department, operation response, and later read of Maya's linked account. After the mapping correction, verify FIN at those boundaries and check the allocation report.”</p>
<p>That names which records answer which questions. A useful request explains the result it would distinguish instead of asking for an unspecified pile of events. Keep the intended account and operation correlated throughout the comparison.</p>
</div>
<p><a href="../day-15.md#q10">Return to Q10</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q11">
<summary>Q11. Normal rule and independent assignment</summary>
<p class="qb-question"><strong>Question:</strong> Priya is correctly classified as Sales/Contractor. Salesforce’s normal rule requires Sales AND Employee, processes her profile, and excludes her from its group. Salesforce nevertheless remains individually assigned; its exception approval, owner, scope, and end condition are not supplied. Is a defect in the normal employee-only rule demonstrated, and which separate path needs investigation?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The rule's supplied result is correct: a Contractor does not meet Sales AND Employee. The application assignment comes through a separate individual relationship.</p>
<p>Trace that relationship and request its business justification. Broadening the normal rule would change the requirement rather than explain the existing assignment. Nonmembership in one group does not deny every other path, so inspect assignment sources before deciding where a defect or approval gap exists.</p>
</div>
<p><a href="../day-15.md#q11">Return to Q11</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q12">
<summary>Q12. Working access and missing approval</summary>
<p class="qb-question"><strong>Question:</strong> Priya is correctly classified as Sales/Contractor. Salesforce’s normal rule requires Sales AND Employee, processes her profile, and excludes her from its group. Salesforce nevertheless remains individually assigned; its exception approval, owner, scope, and end condition are not supplied. Her active Salesforce account returns a protected page after accepted sign-in. Is working access proved authorized or proved unauthorized by the missing approval record?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither authorization conclusion is established. Access is demonstrated, while its approval evidence is unresolved.</p>
<p>Request the accountable approver, current decision, scope, owner, and end condition. Missing evidence in this investigation is different from an owner confirming that no approval exists. Keep the observed access and decision gap together: they justify review without inventing either a valid exception or a confirmed violation.</p>
</div>
<p><a href="../day-15.md#q12">Return to Q12</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q13">
<summary>Q13. Clarify the business wording</summary>
<p class="qb-question"><strong>Question:</strong> A Salesforce request says “Keep useful contractor access; executives should be different.” Normal access is employee-only, and exceptions need approval. Contractor eligibility, actions, end conditions, and executive treatment are unspecified. Which decisions should the business owner clarify before automation?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Ask which contractors qualify, which actions they may perform, who approves and maintains their exception, and when it ends. Ask what different executive treatment actually means.</p>
<p>It could describe exclusion or a specific capability; it does not automatically authorize an authentication bypass. Record these questions with their owners. Technical configuration can implement an agreed decision, but it cannot supply the missing business meaning.</p>
</div>
<p><a href="../day-15.md#q13">Return to Q13</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q14">
<summary>Q14. Keep application approvals separate</summary>
<p class="qb-question"><strong>Question:</strong> Priya’s Expense exception is approved, and correlated OpenID Connect evidence verifies her entry to the intended Expense account. Her separate Salesforce assignment approval is absent, and no Projects create result is supplied. What conclusions can the Expense success support elsewhere?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It supports the Expense approval and checked entry only. It cannot authorize Salesforce access or supply a Projects account-management result.</p>
<p>Preserve the success within its scope while requesting each application's missing evidence. The same contractor can have different approved paths and unresolved outcomes across services. Name the application and purpose so an approval or login for one destination does not become a person-wide access claim.</p>
</div>
<p><a href="../day-15.md#q14">Return to Q14</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q15">
<summary>Q15. Conditional next paths for B</summary>
<p class="qb-question"><strong>Question:</strong> Priya is correctly classified as Sales/Contractor. Salesforce’s normal rule requires Sales AND Employee, processes her profile, and excludes her from its group. Salesforce nevertheless remains individually assigned; its exception approval, owner, scope, and end condition are not supplied. Actual Salesforce entry works. How should the next path differ if the owner confirms a valid exception, confirms no authorization, or cannot yet decide?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>For a valid exception, verify that access fits its scope and removal terms. For confirmed lack of authorization, coordinate approved removal and check assignment, target, and relevant session outcomes.</p>
<p>If the decision stays unresolved, name the missing evidence and accountable owner. These are conditional paths, not supplied approval or correction results. Do not choose a conclusion simply to close the ticket when its business decision remains open.</p>
</div>
<p><a href="../day-15.md#q15">Return to Q15</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q16">
<summary>Q16. Locate the rejected audience</summary>
<p class="qb-question"><strong>Question:</strong> Daniel has approved Salesforce reporting access, a confirmed assignment and account, and accepted current Okta authentication. Production Salesforce receives a SAML sign-in response: its validation report accepts signature and validity but rejects audience test where prod is required. The NameID identifier matches his intended account; no application session is established. What sign-in defect is demonstrated, and which accepted facts should be preserved?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The response audience disagrees with the intended production connection, and the correlated application report ties that mismatch to rejection. Audience identifies the intended recipient of the assertion.</p>
<p>Preserve the accepted current authentication, signature, validity, and matching identifier. They do not override the failed audience requirement. Review the emitted connection value against the production agreement instead of diagnosing a bad password or missing target account.</p>
</div>
<p><a href="../day-15.md#q16">Return to Q16</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q17">
<summary>Q17. The separate validation report</summary>
<p class="qb-question"><strong>Question:</strong> A selected decoded SAML excerpt shows Daniel’s audience and NameID, but is not a complete message. A separate correlated Salesforce validation report explicitly accepts signature and validity checks and rejects the audience. Which evidence supports signature acceptance, and why does the excerpt alone not do so?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The separate validation report supplies the signature result. Reading selected decoded fields tells you their contents; it does not independently establish successful signature verification.</p>
<p>Keep content inspection and validation evidence distinct. The excerpt helps locate the audience mismatch, while the receiving application's report explains what it checked and rejected. That division makes the diagnosis defensible without treating readable data as proof of authenticity or complete acceptance.</p>
</div>
<p><a href="../day-15.md#q17">Return to Q17</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q18">
<summary>Q18. Do not reset C’s password</summary>
<p class="qb-question"><strong>Question:</strong> Daniel has approved Salesforce reporting access, a confirmed assignment and account, and accepted current Okta authentication. Production Salesforce receives a SAML sign-in response: its validation report accepts signature and validity but rejects audience test where prod is required. The NameID identifier matches his intended account; no application session is established. Would resetting the password, creating another account, or disabling audience validation repair the connection while preserving the requirement?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Those changes do not bring the emitted audience into agreement with production. Authentication and the intended account are already established.</p>
<p>Correct the responsible connection value and review its shared scope. Disabling validation removes the check that found the discrepancy rather than repairing the value. Follow the demonstrated defect while preserving correct facts, then obtain a fresh accepted sign-in and the relevant business verification.</p>
</div>
<p><a href="../day-15.md#q18">Return to Q18</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q19">
<summary>Q19. Verify the reporting requirement</summary>
<p class="qb-question"><strong>Question:</strong> Daniel has approved Salesforce reporting access, a confirmed assignment and account, and accepted current Okta authentication. Production Salesforce receives a SAML sign-in response: its validation report accepts signature and validity but rejects audience test where prod is required. The NameID identifier matches his intended account; no application session is established. Daniel needs reporting for Finance work. After a proposed audience correction, why check reporting capability as well as fresh response acceptance and correct-account entry?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Fresh response acceptance and entry establish sign-in. Daniel's approved business requirement also needs the reporting capability, which must be verified inside Salesforce.</p>
<p>Check the corrected audience, target validation, account association, actual entry, and report access. No successful retest is supplied yet. Verification should reach the requested outcome instead of stopping at the first protocol status that turns green.</p>
</div>
<p><a href="../day-15.md#q19">Return to Q19</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q20">
<summary>Q20. Which ticket needs first attention?</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s approved departure is effective. Okta deactivation, absent app assignments, and blocked fresh Okta sign-in are verified; the correct AD directory account is disabled. Enabled Projects deactivation sends active false to his linked resource, receives HTTP 503, and a later read shows active true. Expense still returns new protected data through his checked pre-existing session. Its removal action and session configuration are unknown. Why does this current departure require prompt attention without inventing an attack or financial deadline?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The approved departure requires access to end, yet a fresh protected response demonstrates continued access. Projects also retains the active account after failed removal.</p>
<p>Prioritize those supplied findings and coordinate the separate application owners while identity management tracks the required scope. Current retained access is enough to justify prompt attention. The investigator does not need an imagined attack, outage cause, or deadline to explain the priority.</p>
</div>
<p><a href="../day-15.md#q20">Return to Q20</a> · <a href="../../lessons/day-15-integrated-case.md#prioritize-by-the-supplied-impact">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q21">
<summary>Q21. Rank without inventing impact</summary>
<p class="qb-question"><strong>Question:</strong> Open tickets show contractor access with unresolved approval, blocked Finance reporting, incorrect allocation data, and an account-create conflict with unknown ownership. A fifth ticket is an archived pre-departure password review. How should priorities be justified without inventing unstated impact?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Use those observed business effects and distinguish current work from historical review. Several orderings among the current tickets can be defensible when their reasoning is explicit.</p>
<p>Owners can investigate independently, so ranking does not require every other ticket to wait. The archived incident is not a current restoration request. Avoid adding unsupported deadlines or approval conclusions simply to make one ordering look more certain than the evidence allows.</p>
</div>
<p><a href="../day-15.md#q21">Return to Q21</a> · <a href="../../lessons/day-15-integrated-case.md#prioritize-by-the-supplied-impact">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q22">
<summary>Q22. Preserve completed departure work</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s approved departure is effective. Okta deactivation, absent app assignments, and blocked fresh Okta sign-in are verified; the correct AD directory account is disabled. Enabled Projects deactivation sends active false to his linked resource, receives HTTP 503, and a later read shows active true. Expense still returns new protected data through his checked pre-existing session. Its removal action and session configuration are unknown. Do the Projects and Expense findings invalidate the verified Okta and AD work, or show separate unfinished outcomes?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They show separate unfinished outcomes. The supplied Okta deactivation and AD disablement remain verified successes.</p>
<p>Report those completed parts while following the active Projects account and accepted Expense session. Each receiving system needs its own result and closure evidence. The wider departure remains incomplete, but accurate investigation can preserve successful actions while identifying serious remaining exposure.</p>
</div>
<p><a href="../day-15.md#q22">Return to Q22</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q23">
<summary>Q23. Investigate failed target removal</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s departure is effective. Projects supports enabled deactivation; the connector sends active false to his verified linked account, receives HTTP 503 Service Unavailable, and later reads active true. What is established, and what should the connector and application owners investigate?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The intended inactive state is not established. The later target read verifies the remaining state discrepancy, while 503 reports service unavailability without its detailed cause.</p>
<p>Obtain correlated service and operation evidence, coordinate an approved correction or supported retry, and verify the intended resource afterward. Sending the request is not storing its result. A completed upstream deactivation cannot replace the missing target outcome.</p>
</div>
<p><a href="../day-15.md#q23">Return to Q23</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q24">
<summary>Q24. Recognize retained session access</summary>
<p class="qb-question"><strong>Question:</strong> After Jordan’s effective departure and verified Okta deactivation, Expense returns a new protected response through his checked pre-existing session. No account-management method, logout configuration, or termination result is supplied. What can be concluded without inventing the persistence mechanism?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The checked session still supplies authenticated access. This is a new protected response rather than merely an old page on screen.</p>
<p>Its exact persistence mechanism and supported removal action remain unknown. Ask Expense's owner to identify the account and session, inspect the applicable controls, perform the authorized action, and verify termination. Recognizing the retained access does not require inventing why it persists.</p>
</div>
<p><a href="../day-15.md#q24">Return to Q24</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q25">
<summary>Q25. Fresh sign-in versus old session</summary>
<p class="qb-question"><strong>Question:</strong> A controlled fresh Okta sign-in for departed Jordan is blocked. Separately, Expense returns newly requested protected data through his existing local session. Why does the blocked identity-service attempt not contradict the accepted application request?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They use different access paths and receiving services. A fresh Okta attempt can be blocked while an application still accepts a session it established earlier.</p>
<p>Preserve both findings and verify the application's required session outcome separately. Another blocked Okta test cannot answer whether the Expense session ended. The broader departure concerns retained access as well as new sign-in, so one result at the identity service does not settle both.</p>
</div>
<p><a href="../day-15.md#q25">Return to Q25</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q26">
<summary>Q26. Do not reactivate or delete as a shortcut</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s approved departure is effective. Okta deactivation, absent app assignments, and blocked fresh Okta sign-in are verified; the correct AD directory account is disabled. Enabled Projects deactivation sends active false to his linked resource, receives HTTP 503, and a later read shows active true. Expense still returns new protected data through his checked pre-existing session. Its removal action and session configuration are unknown. Would reactivating Jordan or deleting his Okta identity establish resolution of the two application issues?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Reactivation would conflict with the effective departure and would not demonstrate repair of Projects. Deletion is a separate irreversible action that supplies neither missing target result.</p>
<p>Preserve the correct record relationships while coordinating approved account and session removal. A lifecycle shortcut is not verification. The relevant owners need evidence that their actual application outcomes meet the departure requirement.</p>
</div>
<p><a href="../day-15.md#q26">Return to Q26</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q27">
<summary>Q27. Separate application closure checks</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s approved departure is effective. Okta deactivation, absent app assignments, and blocked fresh Okta sign-in are verified; the correct AD directory account is disabled. Enabled Projects deactivation sends active false to his linked resource, receives HTTP 503, and a later read shows active true. Expense still returns new protected data through his checked pre-existing session. Its removal action and session configuration are unknown. No successful correction is supplied. What distinct follow-up checks would establish the required Projects and Expense outcomes?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>For Projects, verify the linked account's intended inactive state and required access result after a supported action. For Expense, verify that the checked old session no longer serves protected data after authorized removal.</p>
<p>Include other sessions and paths if the departure scope requires them. A Projects success would still leave Expense unresolved without its own evidence. Name each target and test rather than treating one additional green event as complete closure.</p>
</div>
<p><a href="../day-15.md#q27">Return to Q27</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q28">
<summary>Q28. Write a defensible departure handoff</summary>
<p class="qb-question"><strong>Question:</strong> Jordan’s approved departure is effective. Okta deactivation, absent app assignments, and blocked fresh Okta sign-in are verified; the correct AD directory account is disabled. Enabled Projects deactivation sends active false to his linked resource, receives HTTP 503, and a later read shows active true. Expense still returns new protected data through his checked pre-existing session. Its removal action and session configuration are unknown. Write a concise handoff that preserves completed work and does not invent a retry or universal removal.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Jordan's departure reached the correct lifecycle path. Okta deactivation, assignment removal, blocked fresh sign-in, and checked AD disablement are confirmed. Projects remains active after failed deactivation, and Expense still accepts the checked old session. The application owners must complete and verify those outcomes.”</p>
<p>That identifies each remaining boundary. Keep detailed causes and follow-up results open until evidence establishes them, rather than adding an unsupported successful ending.</p>
</div>
<p><a href="../day-15.md#q28">Return to Q28</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q29">
<summary>Q29. Read an unresolved username conflict</summary>
<p class="qb-question"><strong>Question:</strong> Priya has an approved Projects application exception and assignment. A username lookup in the intended instance reports no match; a subsequent create sends her expected username, SAL department code, and active true. Projects’ SCIM account-management response is HTTP 409 with uniqueness and “userName is already in use.” The conflicting resource, ownership, and exact lookup details are absent; no successful create or confirmed association is supplied. What findings are established and what evidence is still needed for the correct-account decision?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The create failed with a reported username conflict. Ownership of the conflicting record and the lookup discrepancy remain unresolved; no successful create or association is established.</p>
<p>Request exact lookup details, operation sequence, visibility context, the conflicting resource, and reliable ownership evidence. Projects approval defines the access need. It does not identify the account causing the conflict or authorize taking over an unverified resource.</p>
</div>
<p><a href="../day-15.md#q29">Return to Q29</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q30">
<summary>Q30. The numbered username suggestion</summary>
<p class="qb-question"><strong>Question:</strong> Priya has an approved Projects application exception and assignment. A username lookup in the intended instance reports no match; a subsequent create sends her expected username, SAL department code, and active true. Projects’ SCIM account-management response is HTTP 409 with uniqueness and “userName is already in use.” The conflicting resource, ownership, and exact lookup details are absent; no successful create or confirmed association is supplied. A colleague proposes adding a number to Priya’s username and retrying, without approved naming correction. Why is that not yet supported?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The existing record's owner remains unknown. A new username could create a duplicate for Priya or conceal a conflict with someone else's account.</p>
<p>Investigate ownership and why lookup and create disagreed before choosing the correction. The desired result is the correct account relationship, not merely an error-free create. Making the symptom disappear does not establish that the approved work assignment was implemented appropriately.</p>
</div>
<p><a href="../day-15.md#q30">Return to Q30</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q31">
<summary>Q31. Conflict hypotheses versus findings</summary>
<p class="qb-question"><strong>Question:</strong> Priya has an approved Projects application exception and assignment. A username lookup in the intended instance reports no match; a subsequent create sends her expected username, SAL department code, and active true. Projects’ SCIM account-management response is HTTP 409 with uniqueness and “userName is already in use.” The conflicting resource, ownership, and exact lookup details are absent; no successful create or confirmed association is supplied. Does the evidence prove that another process created the account between lookup and create, or that the lookup filter was wrong?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It proves neither specific cause. Those are hypotheses needing lookup details, sequence, visibility context, and creation history to distinguish them.</p>
<p>Name the evidence that would test each explanation instead of choosing the familiar one. The reported conflict is a finding; its history and ownership are separate questions. A precise open investigation is more useful than a plausible narrative that replaces missing records.</p>
</div>
<p><a href="../day-15.md#q31">Return to Q31</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q32">
<summary>Q32. Ownership changes the next action</summary>
<p class="qb-question"><strong>Question:</strong> Priya has an approved Projects application exception and assignment. A username lookup in the intended instance reports no match; a subsequent create sends her expected username, SAL department code, and active true. Projects’ SCIM account-management response is HTTP 409 with uniqueness and “userName is already in use.” The conflicting resource, ownership, and exact lookup details are absent; no successful create or confirmed association is supplied. How would later verified Priya ownership versus verified other-person ownership change the supported next path?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>If the record belongs to Priya, evaluate approved supported handling of her existing account. If it belongs to someone else, route the naming or identity-data correction through its responsible owner.</p>
<p>Neither ownership result is supplied yet. Later verification needs the correct association, applicable operation, target state, and eventual access. Business approval and resource ownership are distinct decisions, so establish both before claiming the correct-account outcome.</p>
</div>
<p><a href="../day-15.md#q32">Return to Q32</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q33">
<summary>Q33. Keep Priya’s approvals separate</summary>
<p class="qb-question"><strong>Question:</strong> Priya has a documented Projects work exception and a separately approved Expense exception. Her individual Salesforce assignment has working access but no supplied approval record. Can either approved exception resolve the missing Salesforce authorization decision?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Those approvals concern different applications and purposes. Preserve their valid scope while requesting the Salesforce decision separately.</p>
<p>A person-wide label such as approved contractor access hides the important boundary. For each path, name the application, permitted actions, owner, and end condition. An approved Projects requirement can coexist with an unresolved Salesforce decision, and neither should be rewritten to make the overall story simpler.</p>
</div>
<p><a href="../day-15.md#q33">Return to Q33</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q34">
<summary>Q34. Returned rejection versus timeout</summary>
<p class="qb-question"><strong>Question:</strong> In a separate archived attempt before Jordan’s departure, he was employed with an Active Okta account and correct AD association. A prior AD import succeeded. During delegated password authentication, the handling agent reached the domain controller, which returned a credential-validation rejection without a detailed cause. The attempt did not complete authentication. Compare this with an independent historical attempt where the agent timed out without a domain-controller result. Should both receive the same failure diagnosis?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The supplied rejection shows that the controller was reached and returned a credential result. Investigate its detailed directory outcome and account or credential conditions at that historical point.</p>
<p>The independent timeout lacks a credential result and needs connection evidence instead. Similar people and concepts do not make separate attempts share one failure. Choose the next check at the boundary each attempt actually demonstrates.</p>
</div>
<p><a href="../day-15.md#q34">Return to Q34</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q35">
<summary>Q35. Do not diagnose a mistyped password</summary>
<p class="qb-question"><strong>Question:</strong> In a separate archived attempt before Jordan’s departure, he was employed with an Active Okta account and correct AD association. A prior AD import succeeded. During delegated password authentication, the handling agent reached the domain controller, which returned a credential-validation rejection without a detailed cause. The attempt did not complete authentication. Can the reviewer diagnose a mistyped password from the general rejection or infer accepted credentials from the earlier import success?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither conclusion is supported. A password issue, account restriction, or another directory condition needs the correlated detailed result to distinguish it.</p>
<p>Import processed directory data; it did not validate the submitted password. The supported finding is returned credential rejection with unresolved cause. Request historical evidence for that attempt rather than converting a general status or another operation's success into a specific diagnosis.</p>
</div>
<p><a href="../day-15.md#q35">Return to Q35</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q36">
<summary>Q36. Changed connectivity condition</summary>
<p class="qb-question"><strong>Question:</strong> In an archived sign-in before Jordan departed, the agent cannot obtain a domain-controller result because its connection fails. Jordan is departed now. What boundary should be investigated historically, and would resolving it authorize restoration of current access?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Investigate the demonstrated connection failure before proposing a credential correction. With no credential result, neither acceptance nor rejection is established.</p>
<p>Resolving the old technical issue would not change Jordan's current departure requirement. Historical diagnosis and current business approval are separate decisions. Keep the incident time beside the findings so a successful review does not become an unsupported authorization to restore present access.</p>
</div>
<p><a href="../day-15.md#q36">Return to Q36</a> · <a href="../../lessons/day-15-integrated-case.md#write-a-defensible-investigation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q37">
<summary>Q37. Five statements in a useful update</summary>
<p class="qb-question"><strong>Question:</strong> An investigator must hand off an identity ticket involving a business requirement, several observed system results, and a proposed correction that has not been performed. What five statements would make the update understandable to someone who did not watch the investigation?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>State what was expected, what was observed, what explains the demonstrated discrepancy, what was changed or handed off, and what was verified.</p>
<p>Include the person, application instance, and attempt or effective point. If no change or verification occurred, state the proposal and the outcome awaiting its owner. Clear evidence boundaries make the update useful; a polished closure that hides missing results does not.</p>
</div>
<p><a href="../day-15.md#q37">Return to Q37</a> · <a href="../../lessons/day-15-integrated-case.md#close-the-request-without-hiding-an-unknown">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q38">
<summary>Q38. Unresolved can be the right result</summary>
<p class="qb-question"><strong>Question:</strong> One identity ticket has working contractor access but no supplied approval decision. Another has a create conflict with unknown resource ownership. Why can unresolved be the right conclusion, and how can each open result still guide useful work?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The first needs an accountable approval decision; the second needs ownership and operation-history evidence. Neither gap is solved by choosing a familiar technical fix.</p>
<p>Name the missing evidence and the person who can decide or verify it. Uncertainty does not mean nothing was learned. A precise open question establishes the next step while preserving the findings already supported, without inventing approval, cause, or a completed correction.</p>
</div>
<p><a href="../day-15.md#q38">Return to Q38</a> · <a href="../../lessons/day-15-integrated-case.md#close-the-request-without-hiding-an-unknown">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q39">
<summary>Q39. A recommendation is not a retest</summary>
<p class="qb-question"><strong>Question:</strong> A handoff recommends repairing a department mapping, resolving an absent Salesforce approval, retrying failed Projects removal, and terminating an Expense session. No corrective action or retest is supplied. May the report describe these recommendations as verified resolutions?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Recommendations identify proposed work and needed verification. They do not establish that an action occurred or met its requirement.</p>
<p>Existing successes at other boundaries remain useful, but cannot become later fixes for these issues. Use verbs carefully: propose, request, confirm, and verify describe different evidence states. A defensible handoff names the responsible owner and acceptance result still needed before reporting resolution.</p>
</div>
<p><a href="../day-15.md#q39">Return to Q39</a> · <a href="../../lessons/day-15-integrated-case.md#close-the-request-without-hiding-an-unknown">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q40">
<summary>Q40. Update when evidence changes</summary>
<p class="qb-question"><strong>Question:</strong> An investigator initially records a target-create conflict with unknown ownership. Later the application owner supplies verified account history that changes the supported explanation. How should the record be updated without hiding the earlier uncertainty or preserving an obsolete diagnosis?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Keep the earlier observation and add what the new evidence establishes. Revisit conclusions that depended on the missing or changed facts instead of silently carrying the old explanation forward.</p>
<p>Record the remaining uncertainties, responsible owners, and next verification. The investigation should show how the conclusion was reached. That makes the method reusable for another ticket without transferring unsupported incident facts into a new situation.</p>
</div>
<p><a href="../day-15.md#q40">Return to Q40</a> · <a href="../../lessons/day-15-integrated-case.md#keep-the-explanations-you-can-reuse">Revisit the lesson</a></p>
</details>

[All Day 15 questions](../day-15.md) · [Question bank](../index.md) · [Course home](../../index.md)
