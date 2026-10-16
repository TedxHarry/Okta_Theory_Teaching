---
title: "Day 11 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 11
---

# Day 11: Questions

## Discovery, comparison, and accepted relationships

<a id="q01"></a>

### Q01. Found is not linked

<p class="qb-question"><strong>Question:</strong> An import into Okta, the company’s identity service, finds a Projects application account named Maya Rao. No matching decision, ownership review, or accepted link is supplied. Has discovery established which Okta identity owns this account?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Not yet. Discovery tells us that the import found an account within the population it read. It does not tell us which person that account represents.</p>
<p>Matching compares its data with existing Okta identities. Confirmation accepts the proposed outcome through the configured process, and an association records the link. Before accepting it, check the required ownership evidence. A familiar name is a useful starting clue, but another person can share it.</p>
</div>
</details>

<a id="q02"></a>

### Q02. Matching and confirmation

<p class="qb-question"><strong>Question:</strong> A Projects account imported into Okta meets the configured employee-number comparison for an existing identity. This integration requires manual confirmation, which remains pending. How does that proposed match differ from an accepted association?</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Think of the match as a proposal: these records meet the configured comparison. Confirmation is the step that accepts the proposed outcome. With confirmation pending here, the proposal is not evidence of a completed link.</p>
<p>After acceptance, inspect the resulting association between the intended records. Other integrations may automate confirmation, so manual review is a fact of this scenario rather than a universal requirement. Report the stage actually completed.</p>
</div>
</details>

<a id="q03"></a>

### Q03. Association and activation

<p class="qb-question"><strong>Question:</strong> Support verifies that Maya’s Okta identity is linked to account prj-1042 in Projects, a business application. The Projects account’s enabled state and Maya’s application sign-in have not been checked. What do association and activation answer separately?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Association answers which records are linked: here, Maya's Okta identity and prj-1042. Activation or an enabled-state check asks whether the relevant account is enabled. Always name the system whose state you checked.</p>
<p>A correct association does not supply that state, and an enabled account does not prove successful sign-in or the permission for Maya's work. Keep the relationship, account state, and actual use as separate findings rather than stretching one into all three.</p>
</div>
</details>

<a id="q04"></a>

### Q04. Import succeeded: ask what?

<p class="qb-question"><strong>Question:</strong> A company imports existing application accounts into Okta for matching to its identities. A colleague reports only “Import succeeded,” without naming the searched population, proposed matches, confirmations, or resulting links. What would you ask next?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Start with what succeeded: which integration, population, and read operation? Then ask which records were discovered, what matches were proposed, which outcomes were confirmed, and which resulting associations were checked.</p>
<p>These questions give the success label a useful boundary. A successful read with pending confirmation is real progress, but it differs from a verified link. The next action depends on where processing actually stopped, not simply on the presence of a green status.</p>
</div>
</details>

## Scope and direction

<a id="q05"></a>

### Q05. Read direction versus write direction

<p class="qb-question"><strong>Question:</strong> In one operation, Okta reads existing Projects application accounts for matching. In another, Okta sends Projects a request to create or update an account. How do the direction and purpose differ, even when both involve the same person?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The import reads from Projects into Okta for processing. The create or update sends an account-management instruction from Okta to Projects. Name that direction before interpreting the result.</p>
<p>Reading an existing account does not create it again. It may reveal a record that still needs a justified association with an Okta identity. Likewise, a successful outbound request is not evidence that an inbound comparison or confirmation occurred. Each operation has its own result to inspect.</p>
</div>
</details>

<a id="q06"></a>

### Q06. Read does not establish ownership

<p class="qb-question"><strong>Question:</strong> A company configures Workday as the employee profile source and Projects as a downstream application, not a profile source. Projects supports importing accounts into Okta for discovery and matching. Does that read capability transfer employee-profile ownership to Projects?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Reading a Projects account helps Okta discover what exists and compare it with an identity. Giving Projects authority over employee-profile values would be a separate sourcing decision.</p>
<p>Ask two questions: 'Which account belongs to this person?' and 'Which system governs this person's employee profile?' The import can help answer the first while Workday remains responsible for the second under the supplied design.</p>
<p>Check the actual integration role and attribute settings before predicting a change in ownership. Import capability alone does not transfer that responsibility to Projects.</p>
</div>
</details>

<a id="q07"></a>

### Q07. Missing from an AD import

<p class="qb-question"><strong>Question:</strong> An Okta import from Active Directory (AD) does not return an expected employee record. Selected organizational units define the import population, but the employee’s location and the read’s completeness are unknown. What should be checked before declaring directory absence?</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check the intended domain and integration instance, the employee's actual location, selected organizational units, read permissions, and the operation result. An organizational unit is a directory container that can help define import scope.</p>
<p>A record outside that scope can exist in AD while being absent from the import. First compare the searched population with the approved population. That helps distinguish a deliberate exclusion from a missing result that needs investigation.</p>
</div>
</details>

<a id="q08"></a>

### Q08. Scope is a business boundary

<p class="qb-question"><strong>Question:</strong> The approved employee-import design deliberately excludes Priya’s contractor identity and Alex’s separate administrative identity. Both are missing from the latest employee import. A colleague proposes widening scope until they appear. Is their absence sufficient reason for that change?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Their absence agrees with the stated design. Import scope is a boundary around the intended population, not a challenge to return the largest possible list.</p>
<p>Before changing it, establish whether an approved employee is missing and why. Widening scope can introduce unrelated records and unintended associations or maintenance responsibilities. Keep the contractor and administrative identities within their approved processes instead of treating every excluded record as an import defect.</p>
</div>
</details>

## Matching criteria and evidence quality

<a id="q09"></a>

### Q09. What exact means

<p class="qb-question"><strong>Question:</strong> An imported Projects account and an existing Okta identity carry equal employeeNumber values, satisfying the integration’s configured exact-match criterion. The accuracy of those values and account ownership have not been checked. What does “exact match” establish here?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Here, exact means the two employeeNumber values satisfy the configured comparison. It does not mean the system has independently established who owns the account.</p>
<p>Suppose a number was copied incorrectly onto another person's record. The comparison could still find equal text and propose the wrong relationship. That is why the accuracy of the input and the required ownership evidence matter. This is an illustration of what could happen, not a copying error established in this question.</p>
<p>Check the authoritative identifier information and the organization's required account-ownership evidence before accepting the link. Keep the useful comparison result separate from the person-and-account decision it helps inform.</p>
</div>
</details>

<a id="q10"></a>

### Q10. A partial candidate

<p class="qb-question"><strong>Question:</strong> A company’s application import proposes a partial match because names agree, while employee numbers differ. Its review policy prohibits accepting name-only candidates and requires verified identifier and ownership evidence. Can this partial candidate be approved on the supplied facts?</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Keep it pending. A partial match is a candidate under the configured weaker comparison; here it does not meet the company's acceptance policy.</p>
<p>Use the candidate to guide a request for authoritative identifier information and account ownership. Shared names do not explain the differing employee numbers. A proposal can be helpful without being ready for confirmation, and leaving it open is the appropriate outcome when the required evidence is missing.</p>
</div>
</details>

<a id="q11"></a>

### Q11. Northbridge’s review conditions

<p class="qb-question"><strong>Question:</strong> A company compares employeeNumber on imported Projects application accounts with existing Okta identities. Its review requires a present value, uniqueness among relevant checked candidates, authoritative employee evidence, and verified account ownership before manual confirmation. An import proposes a match because two employeeNumber values agree, but no review evidence is supplied. What additional findings are needed before accepting the link?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check that the identifier is present and unique among the relevant candidates, agrees with the authoritative employee record, and is supported by account-ownership evidence. Then follow the stated manual-confirmation process.</p>
<p>The configured comparison supplies the proposal; the business review justifies acceptance. Choosing an exact criterion does not automatically perform every one of these additional checks. Keep both responsibilities visible so a successful comparison is not mistaken for a completed ownership review.</p>
</div>
</details>

<a id="q12"></a>

### Q12. A governed identifier, not a universal guarantee

<p class="qb-question"><strong>Question:</strong> A company uses employeeNumber for import matching after reviewing its identifier governance, candidate uniqueness, and account ownership. Another company also has a field named employeeNumber. Does the shared field name guarantee equally reliable, immutable, never-reused identifiers there?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The field's name does not guarantee its quality or lifecycle rules. Each organization needs to understand how its identifiers are assigned, corrected, changed, or reused.</p>
<p>Review the actual values and history for the population being matched. Even a well-governed number can be entered incorrectly on an account. A useful identifier supports a comparison because of its governed meaning and checked data, not simply because the attribute has a familiar name.</p>
</div>
</details>

<a id="q13"></a>

### Q13. Email and name shortcuts

<p class="qb-question"><strong>Question:</strong> A company compares employeeNumber on imported Projects application accounts with existing Okta identities. Its review requires a present value, uniqueness among relevant checked candidates, authoritative employee evidence, and verified account ownership before manual confirmation. An imported account shares Maya’s display name and email, but its employee number and ownership remain unchecked. Why are those familiar fields insufficient to approve the association?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They do not satisfy this review policy. Names can be shared, and email can change or be reused. Equal text does not supply the required employee-number and ownership findings.</p>
<p>Follow the governed identifier comparison and supporting records before confirmation. A wrong association could direct later updates or access decisions at another person's account. Treat the familiar fields as clues for investigation, rather than permission to attach the discovered record to Maya.</p>
</div>
</details>

## Investigate the intended account

<a id="q14"></a>

### Q14. Choose the supported candidate

<p class="qb-question"><strong>Question:</strong> A company compares employeeNumber on imported Projects application accounts with existing Okta identities. Its review requires a present value, uniqueness among relevant checked candidates, authoritative employee evidence, and verified account ownership before manual confirmation. HR and Okta identify Maya as NB-1042. Projects account A, prj-1042, has NB-1042 and verified Maya ownership; B, prj-7788, has NB-7788 and verified other ownership. Relevant candidates and uniqueness have been checked. Confirmation is pending. Which candidate is supported for confirmation, and what outcome remains unverified?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A is supported for confirmation to Maya's existing Okta identity. Its employee number agrees with HR and Okta, relevant uniqueness is checked, and the application owner's evidence identifies Maya as its owner.</p>
<p>B belongs to a different person despite the similar name. Confirmation is still pending, so the resulting association is not yet verified. Explain the supported proposal without reporting a completed link or a successful application visit.</p>
</div>
</details>

<a id="q15"></a>

### Q15. Do not delete the other Maya

<p class="qb-question"><strong>Question:</strong> Projects contains two accounts named Maya Rao. Account A is verified as employee NB-1042’s account; B is verified as employee NB-7788’s account, owned by a different person. Does the shared display name justify deleting B as a duplicate?</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The ownership evidence distinguishes two people. A shared display name does not make B a duplicate of A.</p>
<p>Keep each resource identifier and ownership finding attached to its own account. Removing B merely to make names unique would ignore that evidence and could affect another person's access. Matching establishes the intended relationship; it is not an instruction to clean up every record that looks similar in a list.</p>
</div>
</details>

<a id="q16"></a>

### Q16. Report a pending confirmation

<p class="qb-question"><strong>Question:</strong> A company compares employeeNumber on imported Projects application accounts with existing Okta identities. Its review requires a present value, uniqueness among relevant checked candidates, authoritative employee evidence, and verified account ownership before manual confirmation. HR and Okta identify Maya as NB-1042. Projects account A, prj-1042, has NB-1042 and verified Maya ownership; B, prj-7788, has NB-7788 and verified other ownership. Relevant candidates and uniqueness have been checked. Confirmation is pending. Rewrite this support update: “Maya is already linked to Projects.”</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Account A, prj-1042, is supported for confirmation to Maya's existing Okta identity by the checked employee number and ownership evidence. Confirmation remains pending, so the resulting association is not yet verified.”</p>
<p>That wording tells the next owner what is justified and what remains to be done. A proposal and an accepted link are different outcomes. Clear reporting prevents later work from assuming an association already exists when it has not been checked.</p>
</div>
</details>

<a id="q17"></a>

### Q17. What confirmation and a read add

<p class="qb-question"><strong>Question:</strong> Manual confirmation succeeds for Maya’s imported Projects account. A separate association check links her existing Okta identity to prj-1042, and a target read shows employeeNumber NB-1042, department code SAL for Sales, and active true. No sign-in was observed. What is verified?</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The evidence verifies accepted confirmation, the intended association, and the listed Projects values and enabled state at the time of the read. These are meaningful completed outcomes.</p>
<p>It does not verify Maya's application entry or the permissions for her work. Report the checked account and association precisely, then identify sign-in as an unverified outcome. Reading active true on a target resource is different from watching the person successfully use that application.</p>
</div>
</details>

<a id="q18"></a>

### Q18. Association versus profile ownership

<p class="qb-question"><strong>Question:</strong> Maya’s employee profile is sourced from Workday, with a designated AD-owned email exception. Projects is configured only as a downstream application. Her Projects account is now correctly associated with her Okta identity. Does that link replace the stated profile ownership?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The association identifies Maya's application account. Profile sourcing determines which system governs the relevant employee values, and Projects has no configured sourcing role here.</p>
<p>Workday ownership and the designated AD email exception remain the stated model. A new link can have different consequences when it belongs to a configured profile source, so always inspect the integration's role. Do not infer a transfer of authority merely from the presence of an application association.</p>
</div>
</details>

<a id="q19"></a>

### Q19. Keep independent investigations separate

<p class="qb-question"><strong>Question:</strong> In case A, a Projects account is correctly linked after a completed ownership review. In independent case B, a lookup returned no match before a create request encountered a username conflict; its operation history remains unknown. Does case A resolve case B’s discrepancy?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Case A supplies evidence for its own association. It does not reconstruct case B's lookup, timing, scope, request, or conflicting account ownership.</p>
<p>For B, obtain the exact lookup and response, relevant operation history, and the target record involved in the conflict. Related concepts can help you ask better questions, but another case's success cannot fill a missing historical fact. Keep each operation's evidence with the decision it actually supports.</p>
</div>
</details>

## Missing or ambiguous evidence

<a id="q20"></a>

### Q20. An ambiguous comparison

<p class="qb-question"><strong>Question:</strong> A company compares employeeNumber on imported Projects application accounts with existing Okta identities. Its review requires a present value, uniqueness among relevant checked candidates, authoritative employee evidence, and verified account ownership before manual confirmation. HR and Okta identify Maya as NB-1042, but Projects accounts A and B both carry NB-1042 and neither has verified ownership. Should the reviewer confirm the first exact result returned by the import?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Both records carry NB-1042, so both can satisfy the same equality test. Neither has verified ownership. Choosing whichever appears first would let list order stand in for the evidence the review requires.</p>
<p>Request account-creation records, the application owner's ownership evidence and authoritative identifier history. These can help explain whether a value was copied incorrectly or there is another account arrangement to resolve. Neither explanation is supplied yet.</p>
<p>Keep the decision pending. Repeating the comparison on unchanged values would not make one identifier unique or establish an owner. The missing facts must come from the investigation.</p>
</div>
</details>

<a id="q21"></a>

### Q21. Compare the acceptance evidence

<p class="qb-question"><strong>Question:</strong> A company compares employeeNumber on imported Projects application accounts with existing Okta identities. Its review requires a present value, uniqueness among relevant checked candidates, authoritative employee evidence, and verified account ownership before manual confirmation. Case A has one matching candidate with verified ownership and checked uniqueness. Independent case B has two candidates with the employee’s number and no verified ownership. Why do these cases support different decisions?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Case A supports a confirmation proposal because the supplied findings satisfy the stated acceptance conditions. Case B needs more investigation because uniqueness and ownership are unresolved.</p>
<p>The matching field is the same, but the evidence is different. Do not carry case A's ownership finding into case B. A sound decision follows the actual candidates and checked facts, so a familiar identifier or account name cannot override ambiguity in the current investigation.</p>
</div>
</details>

<a id="q22"></a>

### Q22. A copied identifier

<p class="qb-question"><strong>Question:</strong> An application ownership review confirms that a different employee’s number was copied incorrectly onto a Projects account. The correct owner and authoritative identifier are verified, and import matching uses this field. What should happen before repeating the comparison?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Correct the erroneous value through the responsible process using the verified owner and authoritative identifier. Check the correction, then repeat the comparison on the corrected data.</p>
<p>A rule can compare inaccurate inputs exactly and still propose an inappropriate relationship. Repeating it without repairing the confirmed data defect leaves that problem in place. Here the copying error is an established finding; without such evidence, it would remain a possibility to investigate rather than a cause to assume.</p>
</div>
</details>

<a id="q23"></a>

### Q23. Missing number is not a new person

<p class="qb-question"><strong>Question:</strong> A company matches imported application accounts using employeeNumber. One discovered account has an empty employeeNumber, while its owner and any existing Okta identity remain unknown. Does the empty field establish a new person who needs another identity?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The account was discovered, but the field needed for the comparison is empty. That tells us why this comparison cannot identify a match; it does not show that the person lacks an existing Okta identity.</p>
<p>Find out who owns the account, what authoritative employee number applies, and how that value should reach the imported field. The source, mapping or delivery may need investigation before the comparison can be useful.</p>
<p>Creating another identity would not fill in those missing facts and could give one person duplicate records. Establish the person and intended relationship before deciding that a new identity is needed.</p>
</div>
</details>

<a id="q24"></a>

### Q24. Two kinds of no match

<p class="qb-question"><strong>Question:</strong> An import uses employeeNumber to match application accounts. In case A, an expected account is never discovered. In case B, the account is discovered but the comparison field is empty. Why should the next evidence requests differ?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Case A stops at discovery. Check the intended instance, search scope, permissions, and read completeness. Case B has reached a record, so inspect the required identifier's source and mapping, along with ownership.</p>
<p>Both cases may be described as no match, but that label hides different gaps. Locate the stage and missing evidence before choosing a correction. Neither finding, by itself, proves a new person or justifies creating an additional account.</p>
</div>
</details>

<a id="q25"></a>

### Q25. Duplicate accounts need a decision

<p class="qb-question"><strong>Question:</strong> Ownership evidence confirms that one employee has two Projects application accounts. Their approved purposes, business dependencies, and any consolidation decision have not been checked. Does confirming the common owner automatically authorize deleting one account?</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Common ownership identifies the issue; it does not supply the full cleanup decision. Ask the responsible business owner about intended use, dependencies, and any approved consolidation.</p>
<p>Two accounts may serve different purposes or have consequences that a matching comparison cannot reveal. Follow the responsible process for any agreed change and verify its effect. The goal is the approved account arrangement, not simply reducing a list to one record per familiar name.</p>
</div>
</details>

## Association and profile sourcing

<a id="q26"></a>

### Q26. Ask two questions about a link

<p class="qb-question"><strong>Question:</strong> A reviewer is about to accept a link between an external account and an Okta identity. The external integration’s profile-sourcing role has not been inspected. What two questions help predict the link’s possible effect on profile values?</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>First ask, 'Which external record will be connected to which Okta identity?' That establishes the proposed account relationship. Then ask, 'Is this integration configured to govern profile information?' That establishes whether source rules may apply through the link.</p>
<p>A downstream application account can be linked without becoming the employee profile's source. A record from an applicable configured profile source can have a different effect. The presence of a link alone cannot tell you which situation applies.</p>
<p>Inspect the integration's source role, applicable priority and attribute settings before predicting changes. The relationship and the authority to govern data are connected decisions, but they answer different questions.</p>
</div>
</details>

<a id="q27"></a>

### Q27. A mistaken profile-source link

<p class="qb-question"><strong>Question:</strong> Priya is a contractor whose profile is intended to remain managed in Okta, outside employee imports. An Active Directory (AD) record was mistakenly confirmed against her identity. AD is a configured profile source; the resulting source settings and writes have not been inspected. Does calling her a contractor prevent the mistaken association from affecting governed profile values?</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The label does not enforce the intended separation. AD has a configured sourcing role, so the mistaken relationship may make source settings applicable in ways that need investigation.</p>
<p>Inspect the resulting source, attribute configuration, and actual writes. Do not assume every value changed, or that another source applies without its own association. Priya's intended management model tells us the link is wrong; the observed settings and operations tell us what consequences actually occurred.</p>
</div>
</details>

<a id="q28"></a>

### Q28. Trace the impact before repair

<p class="qb-question"><strong>Question:</strong> Priya is a contractor whose profile is intended to remain managed in Okta, outside employee imports. An Active Directory (AD) record was mistakenly confirmed against her identity. AD is a configured profile source; the resulting source settings and writes have not been inspected. What evidence is needed to investigate both how the wrong relationship arose and what it affected?</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Start with the confirmation history and the exact external and Okta record identifiers. Then inspect resulting source applicability, attribute settings, and relevant write history or value checks.</p>
<p>The first evidence explains the relationship; the second explains its effects. Use both to plan restoration through the supported process and verify the outcome. Correcting one visible field without understanding the wrong association can leave the cause in place, while the link alone cannot reconstruct every changed value.</p>
</div>
</details>

<a id="q29"></a>

### Q29. Why not reorder everyone?

<p class="qb-question"><strong>Question:</strong> Priya is a contractor whose profile is intended to remain managed in Okta, outside employee imports. An Active Directory (AD) record was mistakenly confirmed against her identity. AD is a configured profile source; the resulting source settings and writes have not been inspected. A colleague proposes changing global source priority for everyone instead of investigating her link. Why is that an incomplete response?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Global source priority changes a broader ownership decision. It does not establish that Priya's mistaken association was repaired, and it may affect other identities with applicable source links.</p>
<p>Investigate the wrong confirmation and its actual impact, then restore the intended relationship and data through the supported process. Source order and record association answer different questions. A broad workaround should not replace evidence that this specific relationship and its consequences have been corrected.</p>
</div>
</details>

## Reconcile expected and observed records

<a id="q30"></a>

### Q30. Explain reconciliation

<p class="qb-question"><strong>Question:</strong> A support team compares the application accounts and identity associations required by its approved design with the records it actually observes, then investigates differences. It calls this work reconciliation. Does that term, by itself, promise automatic repair?</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Here reconciliation means comparing expected records and relationships with observed ones and explaining differences. The term does not supply an automatic repair capability.</p>
<p>For example, an expected association that is missing becomes a question about discovery, comparison, and confirmation. The comparison guides the investigation; ownership and any corrective action still need evidence. An identified gap that remains open can be a useful result when the facts do not yet justify a change.</p>
</div>
</details>

<a id="q31"></a>

### Q31. One hundred is not the right hundred

<p class="qb-question"><strong>Question:</strong> A company expects application accounts for 100 named employees. Its import returns 100 accounts, but the account identifiers and associations have not been compared with the approved roster. Why can the equal total still hide a problem?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The result might contain 99 expected employees and one unexpected account. The total agrees even though an intended person is missing and a different record is present.</p>
<p>Compare actual identifiers, ownership, and associations with the approved roster. A count is useful for spotting differences, but it does not establish who each account represents. Reconciliation aims to verify the intended population and relationships, not merely to make two totals equal.</p>
</div>
</details>

<a id="q32"></a>

### Q32. Reconcile the missing relationship

<p class="qb-question"><strong>Question:</strong> An approved design requires one Projects account correctly associated with Maya’s existing Okta identity. A target account exists, but no confirmed association is observed. Import discovery, comparison, and confirmation results have not been inspected. Which stages should support investigate?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Ask whether the account was discovered, what match was proposed, and whether the outcome was confirmed. When a link is reported, check that it joins the intended records in the correct integration.</p>
<p>Those findings distinguish a read gap from a pending comparison or acceptance decision. The account already exists, so immediately creating another one may miss the actual problem. Use the expected relationship as the goal and the stage evidence to locate what remains unfinished.</p>
</div>
</details>

## Read completeness and response boundaries

<a id="q33"></a>

### Q33. Read the next-page signal

<p class="qb-question"><strong>Question:</strong> A synthetic Okta management API user-list read returns HTTP 200, two user objects, and a Link header marked rel="next". Priya is absent from that page. The later pages and query coverage are unchecked. Is her absence from the intended population established?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. HTTP 200 shows this read succeeded, but the next link indicates more of the result remains. Priya's absence from this page is not absence from the complete query.</p>
<p>Follow the service's supplied next link and check that the endpoint and query cover the intended population. Page success and complete discovery are separate findings. Two returned users describe this page, not necessarily the entire list of users relevant to the investigation.</p>
</div>
</details>

<a id="q34"></a>

### Q34. Opaque cursor

<p class="qb-question"><strong>Question:</strong> A paginated identity API response supplies a next-page link containing an opaque cursor. The caller needs the remaining results, but the cursor’s internal meaning is undocumented. How should the caller use it, and why avoid guessing a page number?</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Use the next-page link as the service supplied it. The cursor identifies a position in the result sequence; opaque means the caller does not need to understand its internal characters to use it.</p>
<p>Guessing a page number or constructing a new cursor would replace the continuation the service actually provided. Follow that continuation to obtain the next portion of this result.</p>
<p>Completing the sequence still covers only the endpoint and query being read. It does not search a different system or an excluded population. Check that scope before describing the result as complete for the investigation.</p>
</div>
</details>

<a id="q35"></a>

### Q35. All pages, wrong scope

<p class="qb-question"><strong>Question:</strong> Support reads every page of an Okta management API query for employee users. It makes no request to Projects, a separate application, and does not query contractor identities. Does completing pagination establish that every account in both systems was checked?</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It completes the result sequence for that employee query in Okta. It does not inspect excluded contractor identities or enumerate Projects accounts.</p>
<p>Name the endpoint, filters, and population when making a completeness statement. Finishing all pages is necessary for this query, but it cannot repair a mismatch between the query and the investigation's goal. A complete read of one population is still a scoped finding, not a search of every system.</p>
</div>
</details>

<a id="q36"></a>

### Q36. A user list is not association evidence

<p class="qb-question"><strong>Question:</strong> An Okta management API excerpt lists Maya’s user ID and login. It contains no application-association fields, and no separate relationship check was supplied. Can those selected user fields establish that she is linked to Projects account prj-1042?</p>

<details class="qb-answer" id="q36-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They establish the selected Okta user information, not the Projects relationship. A user existing in Okta and a user being associated with a particular external account are different observations.</p>
<p>Request the relevant association evidence for the intended Projects integration and target resource. Read the fields actually returned rather than assuming a successful response contains every fact about the user. That keeps an identity-list result from becoming an unsupported application-account claim.</p>
</div>
</details>

<a id="q37"></a>

### Q37. Forbidden is not empty

<p class="qb-question"><strong>Question:</strong> A user-list request returns HTTP 403 Forbidden. An investigator confirms that the caller lacks the required read permission; no successful list is supplied. Should support report that no users exist, and what evidence should it obtain next?</p>

<details class="qb-answer" id="q37-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Report a denied read, not an empty user list. The caller was not allowed to obtain the requested information, so this attempt cannot tell support whether users are present or absent.</p>
<p>In this question, the investigator has established insufficient read permission as the cause. Request an appropriately authorized read through the responsible administrator, with the right endpoint and population. A bare 403 without that investigation would need its rejection examined before naming the cause.</p>
<p>Creating another identity would not resolve the missing read evidence. First obtain the successful, appropriately scoped result needed to investigate the existing records.</p>
</div>
</details>

## Import and sign-in-time creation

<a id="q38"></a>

### Q38. Import and JIT timing

<p class="qb-question"><strong>Question:</strong> Projects account A already exists and is read into Okta by import for matching. A separate application is configured to create or update an account during a supported sign-in journey using just-in-time provisioning (JIT). How do timing and purpose differ?</p>

<details class="qb-answer" id="q38-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Import discovers an existing record through a read for processing. JIT performs configured account creation or updating during the supported sign-in journey in the named destination.</p>
<p>Reading account A does not create it again. Likewise, successful federation does not guarantee that another application's JIT is enabled or supported. Always name the receiving system and its configuration: an application creating its account differs from a supported path that creates an Okta profile.</p>
</div>
</details>

<a id="q39"></a>

### Q39. JIT does not remove identity decisions

<p class="qb-question"><strong>Question:</strong> An application supports and enables just-in-time provisioning (JIT), creating or updating accounts during sign-in. Its account ownership, identity association, and later access-removal responsibilities still need review. Does sign-in-time creation eliminate those decisions?</p>

<details class="qb-answer" id="q39-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. JIT changes when the configured account operation happens. It still concerns a particular person and destination account whose relationship must be correct.</p>
<p>Check the named system, supported configuration, ownership, and the responsibility for later access removal. Sign-in-time creation does not explain what happens when the person leaves or which account belongs to them. Treat the timing as one part of the account journey, rather than a replacement for those decisions.</p>
</div>
</details>

## Safeguards and unexpected removals

<a id="q40"></a>

### Q40. Safeguard scope

<p class="qb-question"><strong>Question:</strong> An integration has an import safeguard configured to stop covered imports at a specified proposed-unassignment threshold. A separate profile-attribute change may affect an attribute-driven group rule. Does having this safeguard establish protection against every possible access removal?</p>

<details class="qb-answer" id="q40-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Its threshold, eligibility, and operation coverage matter. A covered import proposing unassignments is different from an attribute change altering the result of a group rule.</p>
<p>Inspect the actual safeguard configuration and the path causing the proposed change. Its name cannot establish that an unrelated operation is covered. Understanding the boundary helps you retain the safeguard's useful protection while avoiding an unsupported claim that every access change will be stopped.</p>
</div>
</details>

<a id="q41"></a>

### Q41. Unexpected removals after scope change

<p class="qb-question"><strong>Question:</strong> After an employee directory import’s selected scope changes, it proposes unusually many removals and triggers a configured safeguard. Business departures, source availability, and affected identities remain unchecked. Should support assume all are departures or disable the safeguard to finish?</p>

<details class="qb-answer" id="q41-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither action follows from the supplied facts. Compare the approved population with the new scope, check source availability and affected records, and ask the source owner to confirm actual business changes.</p>
<p>A scope change can alter what the import sees. Treat the unusual removal count as evidence to investigate. Once the cause is established, review corrected results and remaining associations and assignments. A normal total alone does not prove the right identities were preserved.</p>
</div>
</details>

<a id="q42"></a>

### Q42. Explain two matching decisions

<p class="qb-question"><strong>Question:</strong> A company compares employeeNumber on imported Projects application accounts with existing Okta identities. Its review requires a present value, uniqueness among relevant checked candidates, authoritative employee evidence, and verified account ownership before manual confirmation. In case A, Maya’s NB-1042 matches one candidate with checked uniqueness and verified ownership; confirmation is pending. In independent case B, two candidates carry NB-1042 and ownership is unknown. Explain both decisions to someone saying, “Just link the first Maya.”</p>

<details class="qb-answer" id="q42-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>You could say: 'The name alone does not tell us which account belongs to Maya. In case A, the employee number, checked uniqueness and ownership evidence support the proposed account. Confirmation is still pending, so we cannot yet say the link is complete.'</p>
<p>Then explain case B: 'Here the same number appears on two accounts, and their ownership has not been verified. We need that evidence before choosing. The first result in the list is not automatically Maya's account.'</p>
<p>A wrong link could direct later updates or access decisions at another person's record. Case A supports a proposal awaiting confirmation; case B remains an ownership investigation. Keeping those outcomes separate explains why 'just link the first Maya' cannot resolve either decision properly.</p>
</div>
</details>

[Day 11 lesson](../lessons/day-11-imports-and-matching.md) · [Reasoning exercises](../exercises/day-11.md) · [Day 11 recap](../revision/day-11.md) · [Question bank](index.md)
