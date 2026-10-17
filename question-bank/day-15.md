---
title: "Day 15 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 15
---

# Day 15: Questions

## Connected responsibilities and incident context

<a id="q01"></a>

### Q01. Connect responsibilities

<p class="qb-question"><strong>Question:</strong> A company sources employee profiles from Workday into Okta. Its AD directory supplies designated work email and validates passwords on a configured delegated path. Applications separately manage accounts, sign-in checks, permissions, and sessions. How would you explain these responsibilities as a connected journey?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Start with the employee information governed by Workday and its correct association with the Okta identity. Okta connects that identity to approved groups and assignments. AD supplies the designated email and checks passwords on the stated delegated path.</p>
<p>Applications then evaluate their sign-in information, account state, permissions, and sessions. Naming each job explains why one successful system result cannot establish every later outcome. Follow the person's requirement through those boundaries instead of merely listing product names.</p>
</div>
</details>

<a id="q02"></a>

### Q02. Contractors in an HR-led environment

<p class="qb-question"><strong>Question:</strong> A company uses Workday-led employee sourcing. Priya’s sponsor-approved contractor information is maintained in Okta; checks show no Workday association or AD assignment, and employee imports exclude her population. How can this contractor model coexist with the employee architecture?</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Source priority applies to actual source associations; it does not connect every person to every source. Priya follows the stated Okta-managed process without an invented HR relationship.</p>
<p>Her population label alone would not enforce that separation. Here the checked links and import scope support it. Explain the maintenance mechanism and its responsibility so an HR-led environment is not mistaken for a requirement that every identity must follow the employee path.</p>
</div>
</details>

<a id="q03"></a>

### Q03. Different protocols, different outcomes

<p class="qb-question"><strong>Question:</strong> In one company, Salesforce uses SAML for sign-in, Expense uses OpenID Connect authorization code with a backend exchange and ID token validation, and Projects uses SCIM for account management. What different outcomes do these connections support, and what do they not prove for each other?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>SAML supplies sign-in information Salesforce must validate. OpenID Connect supplies Expense's identity exchange, which its backend must validate before associating the intended account. SCIM supports Projects account-management requests.</p>
<p>These purposes differ. Salesforce's sign-in protocol does not establish its provisioning behavior, and Expense entry cannot verify a Projects create. Follow each operation to its receiver, then check account, permission, and session outcomes relevant to that application's requirement.</p>
</div>
</details>

<a id="q04"></a>

### Q04. Current and archived context

<p class="qb-question"><strong>Question:</strong> Jordan has departed in current access-removal tickets. An archived password incident explicitly concerns a separate time when he was employed. Devi is now Finance, although older examples describe Sales. How should an investigator use these current and historical facts?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Keep the attempt or effective point beside each conclusion. Current tickets use current requirements; the archive supplies the state for its historical investigation.</p>
<p>Diagnosing an old password incident does not authorize restoring Jordan's present access. Likewise, an earlier independent example cannot replace a current observation. The same person can appear in different states without those records becoming one shared incident or supplying each other's missing results.</p>
</div>
</details>

## Trace a representation defect

<a id="q05"></a>

### Q05. Locate the wrong outgoing representation

<p class="qb-question"><strong>Question:</strong> Devi’s approved Finance department must reach her existing Projects application account as FIN, while access continues. Workday HR and correctly sourced Okta data show Finance. The outgoing departmentCode mapping is fixed at SAL, preview and app profile show SAL, and a correlated successful update stores SAL on linked account prj-1042. Projects uses this value for allocation reporting. Where is the first demonstrated wrong representation, and did the target reject the transmitted value?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Start with the approved meaning: Devi is in Finance, so Projects needs FIN. Workday and Okta already hold the correct department. The fixed-SAL outgoing mapping is the first supplied step that turns it into the wrong representation.</p>
<p>The preview and app profile show that result, and the correlated update and later read show SAL was sent and stored. Projects accepted the request; it did not reject the value.</p>
<p>The operation can therefore succeed while the business outcome is wrong. Correct the conversion rather than change the correct source data or invent a failed target update. Verification must follow the corrected value through to the intended account and reporting result.</p>
</div>
</details>

<a id="q06"></a>

### Q06. A functioning login, wrong report

<p class="qb-question"><strong>Question:</strong> Devi’s approved Finance department must reach her existing Projects application account as FIN, while access continues. Workday HR and correctly sourced Okta data show Finance. The outgoing departmentCode mapping is fixed at SAL, preview and app profile show SAL, and a correlated successful update stores SAL on linked account prj-1042. Projects uses this value for allocation reporting. Devi can enter Projects, but the allocation report places her in Sales. No failed sign-in or approval-role issue is supplied. What problem is demonstrated despite the successful entry?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The wrong stored department representation agrees with the allocation-report discrepancy. Application entry is verified as working, so this is not a demonstrated sign-in failure.</p>
<p>Preserve that success while correcting the representation and checking the requested report. A successful login does not certify all account data or business outputs. The requirement identifies the remaining outcome, and no evidence supports adding a separate approval-role diagnosis.</p>
</div>
</details>

<a id="q07"></a>

### Q07. Preserve the approved move

<p class="qb-question"><strong>Question:</strong> Devi’s approved Finance department must reach her existing Projects application account as FIN, while access continues. Workday HR and correctly sourced Okta data show Finance. The outgoing departmentCode mapping is fixed at SAL, preview and app profile show SAL, and a correlated successful update stores SAL on linked account prj-1042. Projects uses this value for allocation reporting. A colleague suggests changing Devi’s source department back to Sales or deactivating Projects. Why would these shortcuts conflict with the approved outcome?</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Finance is the approved department, and Projects must continue on Devi's existing account. Changing HR back or removing required access would violate those requirements.</p>
<p>Repair the conversion from Finance to FIN instead. The correction must preserve both legitimate work and correct allocation data. Eliminating the visible mismatch by changing a correct business fact is different from fixing the demonstrated outgoing representation defect.</p>
</div>
</details>

<a id="q08"></a>

### Q08. Verify a proposed mapping correction

<p class="qb-question"><strong>Question:</strong> Devi’s approved Finance department must reach her existing Projects application account as FIN, while access continues. Workday HR and correctly sourced Okta data show Finance. The outgoing departmentCode mapping is fixed at SAL, preview and app profile show SAL, and a correlated successful update stores SAL on linked account prj-1042. Projects uses this value for allocation reporting. No correction has been performed. What evidence would verify a proposed mapping repair through to Devi’s allocation-report outcome?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Follow the proposed correction through several questions. Does the saved conversion produce FIN for Finance and the correct codes for other supported inputs? Does Devi's stored app profile contain the intended value? What does the actual update send to prj-1042, and what does Projects store afterward?</p>
<p>Then check the allocation report. That is the business result the ticket asks to correct; a preview or successful update alone cannot supply it.</p>
<p>No correction or retest is supplied here. Describe these as required follow-up findings, preserve Devi's intended account and continuing access, and report the repair as verified only when its relevant results are available.</p>
</div>
</details>

<a id="q09"></a>

### Q09. A shared rule’s wider effects

<p class="qb-question"><strong>Question:</strong> Devi’s approved Finance department must reach her existing Projects application account as FIN, while access continues. Workday HR and correctly sourced Okta data show Finance. The outgoing departmentCode mapping is fixed at SAL, preview and app profile show SAL, and a correlated successful update stores SAL on linked account prj-1042. Projects uses this value for allocation reporting. Other users share the same fixed-SAL mapping, but their target effects have not been inspected. Why does a future successful Devi retest not complete the wider recovery?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A shared mapping can affect other users. Identify the relevant population and which target records actually received incorrect values.</p>
<p>Restoring the approved conversion does not automatically reverse previous writes. Verify configuration recovery and appropriate target cleanup separately. Devi's test can establish her outcome, but it cannot certify every account using the mapping. The shared configuration's scope determines the wider review needed.</p>
</div>
</details>

<a id="q10"></a>

### Q10. Make the evidence request specific

<p class="qb-question"><strong>Question:</strong> Devi’s Projects allocation report needs FIN, but the preview, app profile, transmitted update, and later target read all show SAL. The investigator must distinguish calculation, delivery, and storage before and after correction. Replace the vague request “Check the logs” with a specific evidence request.</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Compare the prepared departmentCode with the transmitted department, operation response, and later read of Devi's linked account. After the mapping correction, verify FIN at those boundaries and check the allocation report.”</p>
<p>That names which records answer which questions. A useful request explains the result it would distinguish instead of asking for an unspecified pile of events. Keep the intended account and operation correlated throughout the comparison.</p>
</div>
</details>

## Separate access paths and approvals

<a id="q11"></a>

### Q11. Normal rule and independent assignment

<p class="qb-question"><strong>Question:</strong> Priya is correctly classified as Sales/Contractor. Salesforce’s normal rule requires Sales AND Employee, processes her profile, and excludes her from its group. Salesforce nevertheless remains individually assigned; its exception approval, owner, scope, and end condition are not supplied. Is a defect in the normal employee-only rule demonstrated, and which separate path needs investigation?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The rule's supplied result is correct: a Contractor does not meet Sales AND Employee. The application assignment comes through a separate individual relationship.</p>
<p>Trace that relationship and request its business justification. Broadening the normal rule would change the requirement rather than explain the existing assignment. Nonmembership in one group does not deny every other path, so inspect assignment sources before deciding where a defect or approval gap exists.</p>
</div>
</details>

<a id="q12"></a>

### Q12. Working access and missing approval

<p class="qb-question"><strong>Question:</strong> Priya is correctly classified as Sales/Contractor. Salesforce’s normal rule requires Sales AND Employee, processes her profile, and excludes her from its group. Salesforce nevertheless remains individually assigned; its exception approval, owner, scope, and end condition are not supplied. Her active Salesforce account returns a protected page after accepted sign-in. Is working access proved authorized or proved unauthorized by the missing approval record?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Working access is established: Priya entered Salesforce and received a protected page. Its authorization is still unresolved because the packet supplies no exception decision, owner, scope or end condition.</p>
<p>Missing evidence is not the same as an authorized owner confirming that no approval exists. It also cannot be treated as approval. Ask that owner for the current decision and its terms.</p>
<p>Keep both findings in the handoff: access works, and the approval question needs prompt review. The next action depends on that decision rather than on a guessed rule defect or an invented exception.</p>
</div>
</details>

<a id="q13"></a>

### Q13. Clarify the business wording

<p class="qb-question"><strong>Question:</strong> A Salesforce request says “Keep useful contractor access; executives should be different.” Normal access is employee-only, and exceptions need approval. Contractor eligibility, actions, end conditions, and executive treatment are unspecified. Which decisions should the business owner clarify before automation?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Ask which contractors qualify, which actions they may perform, who approves and maintains their exception, and when it ends. Ask what different executive treatment actually means.</p>
<p>It could describe exclusion or a specific capability; it does not automatically authorize an authentication bypass. Record these questions with their owners. Technical configuration can implement an agreed decision, but it cannot supply the missing business meaning.</p>
</div>
</details>

<a id="q14"></a>

### Q14. Keep application approvals separate

<p class="qb-question"><strong>Question:</strong> Priya’s Expense exception is approved, and correlated OpenID Connect evidence verifies her entry to the intended Expense account. Her separate Salesforce assignment approval is absent, and no Projects create result is supplied. What conclusions can the Expense success support elsewhere?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It supports the Expense approval and checked entry only. It cannot authorize Salesforce access or supply a Projects account-management result.</p>
<p>Preserve the success within its scope while requesting each application's missing evidence. The same contractor can have different approved paths and unresolved outcomes across services. Name the application and purpose so an approval or login for one destination does not become a person-wide access claim.</p>
</div>
</details>

<a id="q15"></a>

### Q15. Conditional next paths for B

<p class="qb-question"><strong>Question:</strong> Priya is correctly classified as Sales/Contractor. Salesforce’s normal rule requires Sales AND Employee, processes her profile, and excludes her from its group. Salesforce nevertheless remains individually assigned; its exception approval, owner, scope, and end condition are not supplied. Actual Salesforce entry works. How should the next path differ if the owner confirms a valid exception, confirms no authorization, or cannot yet decide?</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>For a valid exception, verify that access fits its scope and removal terms. For confirmed lack of authorization, coordinate approved removal and check assignment, target, and relevant session outcomes.</p>
<p>If the decision stays unresolved, name the missing evidence and accountable owner. These are conditional paths, not supplied approval or correction results. Do not choose a conclusion simply to close the ticket when its business decision remains open.</p>
</div>
</details>

## Investigate a sign-in rejection

<a id="q16"></a>

### Q16. Locate the rejected audience

<p class="qb-question"><strong>Question:</strong> Daniel has approved Salesforce reporting access, a confirmed assignment and account, and accepted current Okta authentication. Production Salesforce receives a SAML sign-in response: its validation report accepts signature and validity but rejects audience test where prod is required. The NameID identifier matches his intended account; no application session is established. What sign-in defect is demonstrated, and which accepted facts should be preserved?</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The response audience disagrees with the intended production connection, and the correlated application report ties that mismatch to rejection. Audience identifies the intended recipient of the assertion.</p>
<p>Preserve the accepted current authentication, signature, validity, and matching identifier. They do not override the failed audience requirement. Review the emitted connection value against the production agreement instead of diagnosing a bad password or missing target account.</p>
</div>
</details>

<a id="q17"></a>

### Q17. The separate validation report

<p class="qb-question"><strong>Question:</strong> A selected decoded SAML excerpt shows Daniel’s audience and NameID, but is not a complete message. A separate correlated Salesforce validation report explicitly accepts signature and validity checks and rejects the audience. Which evidence supports signature acceptance, and why does the excerpt alone not do so?</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The separate validation report supplies the signature result. Reading selected decoded fields tells you their contents; it does not independently establish successful signature verification.</p>
<p>Keep content inspection and validation evidence distinct. The excerpt helps locate the audience mismatch, while the receiving application's report explains what it checked and rejected. That division makes the diagnosis defensible without treating readable data as proof of authenticity or complete acceptance.</p>
</div>
</details>

<a id="q18"></a>

### Q18. Do not reset C’s password

<p class="qb-question"><strong>Question:</strong> Daniel has approved Salesforce reporting access, a confirmed assignment and account, and accepted current Okta authentication. Production Salesforce receives a SAML sign-in response: its validation report accepts signature and validity but rejects audience test where prod is required. The NameID identifier matches his intended account; no application session is established. Would resetting the password, creating another account, or disabling audience validation repair the connection while preserving the requirement?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Those changes do not bring the emitted audience into agreement with production. Authentication and the intended account are already established.</p>
<p>Correct the responsible connection value and review its shared scope. Disabling validation removes the check that found the discrepancy rather than repairing the value. Follow the demonstrated defect while preserving correct facts, then obtain a fresh accepted sign-in and the relevant business verification.</p>
</div>
</details>

<a id="q19"></a>

### Q19. Verify the reporting requirement

<p class="qb-question"><strong>Question:</strong> Daniel has approved Salesforce reporting access, a confirmed assignment and account, and accepted current Okta authentication. Production Salesforce receives a SAML sign-in response: its validation report accepts signature and validity but rejects audience test where prod is required. The NameID identifier matches his intended account; no application session is established. Daniel needs reporting for Finance work. After a proposed audience correction, why check reporting capability as well as fresh response acceptance and correct-account entry?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Fresh response acceptance and entry establish sign-in. Daniel's approved business requirement also needs the reporting capability, which must be verified inside Salesforce.</p>
<p>Check the corrected audience, target validation, account association, actual entry, and report access. No successful retest is supplied yet. Verification should reach the requested outcome instead of stopping at the first protocol status that turns green.</p>
</div>
</details>

## Prioritize the observed impact

<a id="q20"></a>

### Q20. Which ticket needs first attention?

<p class="qb-question"><strong>Question:</strong> Jordan’s approved departure is effective. Okta deactivation, absent app assignments, and blocked fresh Okta sign-in are verified; the correct AD directory account is disabled. Enabled Projects deactivation sends active false to his linked resource, receives HTTP 503, and a later read shows active true. Expense still returns new protected data through his checked pre-existing session. Its removal action and session configuration are unknown. Why does this current departure require prompt attention without inventing an attack or financial deadline?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The requirement says Jordan's access must end, but Expense has returned new protected data through his existing session. Projects also still shows an active account after the failed removal request. Those current findings justify prompt attention.</p>
<p>Coordinate the Projects and Expense owners on their separate unresolved outcomes while identity management tracks the departure scope. Their investigations can proceed alongside other ticket work; priority does not require every owner to wait in one queue.</p>
<p>There is no need to invent an attack, financial deadline or detailed outage cause. State the observed retained access and the approved end requirement, then explain which results the owners must verify.</p>
</div>
</details>

<a id="q21"></a>

### Q21. Rank without inventing impact

<p class="qb-question"><strong>Question:</strong> Open tickets show contractor access with unresolved approval, blocked Finance reporting, incorrect allocation data, and an account-create conflict with unknown ownership. A fifth ticket is an archived pre-departure password review. How should priorities be justified without inventing unstated impact?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Use those observed business effects and distinguish current work from historical review. Several orderings among the current tickets can be defensible when their reasoning is explicit.</p>
<p>Owners can investigate independently, so ranking does not require every other ticket to wait. The archived incident is not a current restoration request. Avoid adding unsupported deadlines or approval conclusions simply to make one ordering look more certain than the evidence allows.</p>
</div>
</details>

## Follow a departure to each target

<a id="q22"></a>

### Q22. Preserve completed departure work

<p class="qb-question"><strong>Question:</strong> Jordan’s approved departure is effective. Okta deactivation, absent app assignments, and blocked fresh Okta sign-in are verified; the correct AD directory account is disabled. Enabled Projects deactivation sends active false to his linked resource, receives HTTP 503, and a later read shows active true. Expense still returns new protected data through his checked pre-existing session. Its removal action and session configuration are unknown. Do the Projects and Expense findings invalidate the verified Okta and AD work, or show separate unfinished outcomes?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They show separate unfinished outcomes. The supplied Okta deactivation and AD disablement remain verified successes.</p>
<p>Report those completed parts while following the active Projects account and accepted Expense session. Each receiving system needs its own result and closure evidence. The wider departure remains incomplete, but accurate investigation can preserve successful actions while identifying serious remaining exposure.</p>
</div>
</details>

<a id="q23"></a>

### Q23. Investigate failed target removal

<p class="qb-question"><strong>Question:</strong> Jordan’s departure is effective. Projects supports enabled deactivation; the connector sends active false to his verified linked account, receives HTTP 503 Service Unavailable, and later reads active true. What is established, and what should the connector and application owners investigate?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The intended inactive state is not established. The later target read verifies the remaining state discrepancy, while 503 reports service unavailability without its detailed cause.</p>
<p>Obtain correlated service and operation evidence, coordinate an approved correction or supported retry, and verify the intended resource afterward. Sending the request is not storing its result. A completed upstream deactivation cannot replace the missing target outcome.</p>
</div>
</details>

<a id="q24"></a>

### Q24. Recognize retained session access

<p class="qb-question"><strong>Question:</strong> After Jordan’s effective departure and verified Okta deactivation, Expense returns a new protected response through his checked pre-existing session. No account-management method, logout configuration, or termination result is supplied. What can be concluded without inventing the persistence mechanism?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The checked session still supplies authenticated access. This is a new protected response rather than merely an old page on screen.</p>
<p>Its exact persistence mechanism and supported removal action remain unknown. Ask Expense's owner to identify the account and session, inspect the applicable controls, perform the authorized action, and verify termination. Recognizing the retained access does not require inventing why it persists.</p>
</div>
</details>

<a id="q25"></a>

### Q25. Fresh sign-in versus old session

<p class="qb-question"><strong>Question:</strong> A controlled fresh Okta sign-in for departed Jordan is blocked. Separately, Expense returns newly requested protected data through his existing local session. Why does the blocked identity-service attempt not contradict the accepted application request?</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They use different access paths and receiving services. A fresh Okta attempt can be blocked while an application still accepts a session it established earlier.</p>
<p>Preserve both findings and verify the application's required session outcome separately. Another blocked Okta test cannot answer whether the Expense session ended. The broader departure concerns retained access as well as new sign-in, so one result at the identity service does not settle both.</p>
</div>
</details>

<a id="q26"></a>

### Q26. Do not reactivate or delete as a shortcut

<p class="qb-question"><strong>Question:</strong> Jordan’s approved departure is effective. Okta deactivation, absent app assignments, and blocked fresh Okta sign-in are verified; the correct AD directory account is disabled. Enabled Projects deactivation sends active false to his linked resource, receives HTTP 503, and a later read shows active true. Expense still returns new protected data through his checked pre-existing session. Its removal action and session configuration are unknown. Would reactivating Jordan or deleting his Okta identity establish resolution of the two application issues?</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Reactivation would conflict with the effective departure and would not demonstrate repair of Projects. Deletion is a separate irreversible action that supplies neither missing target result.</p>
<p>Preserve the correct record relationships while coordinating approved account and session removal. A lifecycle shortcut is not verification. The relevant owners need evidence that their actual application outcomes meet the departure requirement.</p>
</div>
</details>

<a id="q27"></a>

### Q27. Separate application closure checks

<p class="qb-question"><strong>Question:</strong> Jordan’s approved departure is effective. Okta deactivation, absent app assignments, and blocked fresh Okta sign-in are verified; the correct AD directory account is disabled. Enabled Projects deactivation sends active false to his linked resource, receives HTTP 503, and a later read shows active true. Expense still returns new protected data through his checked pre-existing session. Its removal action and session configuration are unknown. No successful correction is supplied. What distinct follow-up checks would establish the required Projects and Expense outcomes?</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>For Projects, verify the linked account's intended inactive state and required access result after a supported action. For Expense, verify that the checked old session no longer serves protected data after authorized removal.</p>
<p>Include other sessions and paths if the departure scope requires them. A Projects success would still leave Expense unresolved without its own evidence. Name each target and test rather than treating one additional green event as complete closure.</p>
</div>
</details>

<a id="q28"></a>

### Q28. Write a defensible departure handoff

<p class="qb-question"><strong>Question:</strong> Jordan’s approved departure is effective. Okta deactivation, absent app assignments, and blocked fresh Okta sign-in are verified; the correct AD directory account is disabled. Enabled Projects deactivation sends active false to his linked resource, receives HTTP 503, and a later read shows active true. Expense still returns new protected data through his checked pre-existing session. Its removal action and session configuration are unknown. Write a concise handoff that preserves completed work and does not invent a retry or universal removal.</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Jordan's departure reached the correct lifecycle path. Okta deactivation, assignment removal, blocked fresh sign-in, and checked AD disablement are confirmed. Projects remains active after failed deactivation, and Expense still accepts the checked old session. The application owners must complete and verify those outcomes.”</p>
<p>That identifies each remaining boundary. Keep detailed causes and follow-up results open until evidence establishes them, rather than adding an unsupported successful ending.</p>
</div>
</details>

## Resolve account ownership before creation

<a id="q29"></a>

### Q29. Read an unresolved username conflict

<p class="qb-question"><strong>Question:</strong> Priya has an approved Projects application exception and assignment. A username lookup in the intended instance reports no match; a subsequent create sends her expected username, SAL department code, and active true. Projects’ SCIM account-management response is HTTP 409 with uniqueness and “userName is already in use.” The conflicting resource, ownership, and exact lookup details are absent; no successful create or confirmed association is supplied. What findings are established and what evidence is still needed for the correct-account decision?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The create received a username-uniqueness conflict after the earlier lookup reported no match. No successful create or confirmed association is supplied. The conflicting account's owner and the reason for the two results remain unknown.</p>
<p>Ask for the exact lookup and response, operation sequence, relevant visibility context, and the conflicting resource with reliable ownership evidence. Those records answer different questions: why was it missed, and whose account is it?</p>
<p>Priya's Projects exception establishes that she needs the approved work access. It does not identify the conflicting record or authorize taking it over. Resolve the account relationship before choosing the supported next operation.</p>
</div>
</details>

<a id="q30"></a>

### Q30. The numbered username suggestion

<p class="qb-question"><strong>Question:</strong> Priya has an approved Projects application exception and assignment. A username lookup in the intended instance reports no match; a subsequent create sends her expected username, SAL department code, and active true. Projects’ SCIM account-management response is HTTP 409 with uniqueness and “userName is already in use.” The conflicting resource, ownership, and exact lookup details are absent; no successful create or confirmed association is supplied. A colleague proposes adding a number to Priya’s username and retrying, without approved naming correction. Why is that not yet supported?</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The existing record's owner remains unknown. A new username could create a duplicate for Priya or conceal a conflict with someone else's account.</p>
<p>Investigate ownership and why lookup and create disagreed before choosing the correction. The desired result is the correct account relationship, not merely an error-free create. Making the symptom disappear does not establish that the approved work assignment was implemented appropriately.</p>
</div>
</details>

<a id="q31"></a>

### Q31. Conflict hypotheses versus findings

<p class="qb-question"><strong>Question:</strong> Priya has an approved Projects application exception and assignment. A username lookup in the intended instance reports no match; a subsequent create sends her expected username, SAL department code, and active true. Projects’ SCIM account-management response is HTTP 409 with uniqueness and “userName is already in use.” The conflicting resource, ownership, and exact lookup details are absent; no successful create or confirmed association is supplied. Does the evidence prove that another process created the account between lookup and create, or that the lookup filter was wrong?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither cause is established. The packet gives the earlier no-match result and the later conflict, but not the history needed to explain their disagreement.</p>
<p>A creation record showing the account appeared between the two operations would support the competing-process hypothesis. The exact lookup filter, response and visibility context could instead explain why an existing record was missed. Request evidence that can distinguish those possibilities.</p>
<p>Ownership remains another question to resolve. Knowing how the conflict arose would not, by itself, establish that the account belongs to Priya. Keep each missing fact attached to the decision it needs to support.</p>
</div>
</details>

<a id="q32"></a>

### Q32. Ownership changes the next action

<p class="qb-question"><strong>Question:</strong> Priya has an approved Projects application exception and assignment. A username lookup in the intended instance reports no match; a subsequent create sends her expected username, SAL department code, and active true. Projects’ SCIM account-management response is HTTP 409 with uniqueness and “userName is already in use.” The conflicting resource, ownership, and exact lookup details are absent; no successful create or confirmed association is supplied. How would later verified Priya ownership versus verified other-person ownership change the supported next path?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>If the record belongs to Priya, evaluate approved supported handling of her existing account. If it belongs to someone else, route the naming or identity-data correction through its responsible owner.</p>
<p>Neither ownership result is supplied yet. Later verification needs the correct association, applicable operation, target state, and eventual access. Business approval and resource ownership are distinct decisions, so establish both before claiming the correct-account outcome.</p>
</div>
</details>

<a id="q33"></a>

### Q33. Keep Priya’s approvals separate

<p class="qb-question"><strong>Question:</strong> Priya has a documented Projects work exception and a separately approved Expense exception. Her individual Salesforce assignment has working access but no supplied approval record. Can either approved exception resolve the missing Salesforce authorization decision?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Those approvals concern different applications and purposes. Preserve their valid scope while requesting the Salesforce decision separately.</p>
<p>A person-wide label such as approved contractor access hides the important boundary. For each path, name the application, permitted actions, owner, and end condition. An approved Projects requirement can coexist with an unresolved Salesforce decision, and neither should be rewritten to make the overall story simpler.</p>
</div>
</details>

## Use historical authentication evidence

<a id="q34"></a>

### Q34. Returned rejection versus timeout

<p class="qb-question"><strong>Question:</strong> In a separate archived attempt before Jordan’s departure, he was employed with an Active Okta account and correct AD association. A prior AD import succeeded. During delegated password authentication, the handling agent reached the domain controller, which returned a credential-validation rejection without a detailed cause. The attempt did not complete authentication. Compare this with an independent historical attempt where the agent timed out without a domain-controller result. Should both receive the same failure diagnosis?</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The supplied rejection shows that the controller was reached and returned a credential result. Investigate its detailed directory outcome and account or credential conditions at that historical point.</p>
<p>The independent timeout lacks a credential result and needs connection evidence instead. Similar people and concepts do not make separate attempts share one failure. Choose the next check at the boundary each attempt actually demonstrates.</p>
</div>
</details>

<a id="q35"></a>

### Q35. Do not diagnose a mistyped password

<p class="qb-question"><strong>Question:</strong> In a separate archived attempt before Jordan’s departure, he was employed with an Active Okta account and correct AD association. A prior AD import succeeded. During delegated password authentication, the handling agent reached the domain controller, which returned a credential-validation rejection without a detailed cause. The attempt did not complete authentication. Can the reviewer diagnose a mistyped password from the general rejection or infer accepted credentials from the earlier import success?</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither conclusion is supported. A password issue, account restriction, or another directory condition needs the correlated detailed result to distinguish it.</p>
<p>Import processed directory data; it did not validate the submitted password. The supported finding is returned credential rejection with unresolved cause. Request historical evidence for that attempt rather than converting a general status or another operation's success into a specific diagnosis.</p>
</div>
</details>

<a id="q36"></a>

### Q36. Changed connectivity condition

<p class="qb-question"><strong>Question:</strong> In an archived sign-in before Jordan departed, the agent cannot obtain a domain-controller result because its connection fails. Jordan is departed now. What boundary should be investigated historically, and would resolving it authorize restoration of current access?</p>

<details class="qb-answer" id="q36-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Investigate the demonstrated connection failure before proposing a credential correction. With no credential result, neither acceptance nor rejection is established.</p>
<p>Resolving the old technical issue would not change Jordan's current departure requirement. Historical diagnosis and current business approval are separate decisions. Keep the incident time beside the findings so a successful review does not become an unsupported authorization to restore present access.</p>
</div>
</details>

## Record findings, proposals, and outcomes

<a id="q37"></a>

### Q37. Five statements in a useful update

<p class="qb-question"><strong>Question:</strong> An investigator must hand off an identity ticket involving a business requirement, several observed system results, and a proposed correction that has not been performed. What five statements would make the update understandable to someone who did not watch the investigation?</p>

<details class="qb-answer" id="q37-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Give the next reader five answers: what should have happened, what was observed, what explains any demonstrated discrepancy, what was done or handed off, and what result was verified.</p>
<p>For this question, the correction is only proposed. Say so, identify the responsible owner, and name the evidence still needed. Do not turn 'we know the next step' into 'the problem is fixed.'</p>
<p>Include the person, application instance and relevant attempt or effective point. That makes the update understandable without the investigation history and keeps unresolved work visible to whoever must finish it.</p>
</div>
</details>

<a id="q38"></a>

### Q38. Unresolved can be the right result

<p class="qb-question"><strong>Question:</strong> One identity ticket has working contractor access but no supplied approval decision. Another has a create conflict with unknown resource ownership. Why can unresolved be the right conclusion, and how can each open result still guide useful work?</p>

<details class="qb-answer" id="q38-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The first needs an accountable approval decision; the second needs ownership and operation-history evidence. Neither gap is solved by choosing a familiar technical fix.</p>
<p>Name the missing evidence and the person who can decide or verify it. Uncertainty does not mean nothing was learned. A precise open question establishes the next step while preserving the findings already supported, without inventing approval, cause, or a completed correction.</p>
</div>
</details>

<a id="q39"></a>

### Q39. A recommendation is not a retest

<p class="qb-question"><strong>Question:</strong> A handoff recommends repairing a department mapping, resolving an absent Salesforce approval, retrying failed Projects removal, and terminating an Expense session. No corrective action or retest is supplied. May the report describe these recommendations as verified resolutions?</p>

<details class="qb-answer" id="q39-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Recommendations identify proposed work and needed verification. They do not establish that an action occurred or met its requirement.</p>
<p>Existing successes at other boundaries remain useful, but cannot become later fixes for these issues. Use verbs carefully: propose, request, confirm, and verify describe different evidence states. A defensible handoff names the responsible owner and acceptance result still needed before reporting resolution.</p>
</div>
</details>

<a id="q40"></a>

### Q40. Update when evidence changes

<p class="qb-question"><strong>Question:</strong> An investigator initially records a target-create conflict with unknown ownership. Later the application owner supplies verified account history that changes the supported explanation. How should the record be updated without hiding the earlier uncertainty or preserving an obsolete diagnosis?</p>

<details class="qb-answer" id="q40-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Keep the original observation and add the new evidence beside it. Then reconsider the conclusions that depended on the earlier unknown ownership or history.</p>
<p>Explain what the application owner's verified account history now supports and what it still leaves open. A changed conclusion is appropriate when the evidence changes; preserving a diagnosis after its basis disappears would make the record misleading.</p>
<p>Update the next action, responsible owner and verification still required. The record should show why the explanation changed, without rewriting an earlier uncertainty as though it had always been known.</p>
</div>
</details>

[Day 15 lesson](../lessons/day-15-integrated-case.md) · [Reasoning exercises](../exercises/day-15.md) · [Day 15 recap](../revision/day-15.md) · [Question bank](index.md)
