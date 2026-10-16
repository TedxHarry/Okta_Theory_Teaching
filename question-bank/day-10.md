---
title: "Day 10 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 10
---

# Day 10: Questions

## Assignment and account-management roles

<a id="q01"></a>

### Q01. Assigned, but what exists?

<p class="qb-question"><strong>Question:</strong> Maya is approved for Projects, a business application, and its assignment is present in Okta, her company’s identity service. No account-management result or record inside Projects has been checked. Does the assignment establish a usable target account?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Assignment establishes an access relationship in Okta. The application's account preparation and actual use need their own evidence.</p>
<p>Follow the prepared values, relevant operation, response, and intended target record. An existing account may also need ownership and association checks.</p>
<p>Report the assignment as progress without making it a creation or sign-in result. The target is a separate system, so its outcome cannot be supplied by the relationship alone.</p>
</div>
</details>

<a id="q02"></a>

### Q02. Explain SCIM’s purpose

<p class="qb-question"><strong>Question:</strong> A fictional Projects application offers a SCIM interface for finding, creating, updating, and deactivating user resources. Its sign-in protocol is not supplied. What purpose does SCIM serve, and does that capability identify how a person authenticates to Projects?</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>SCIM, System for Cross-domain Identity Management, standardizes exchanges for managing identity resources. Here a user resource is an application account managed through that interface.</p>
<p>It does not identify the sign-in protocol. Account management and authentication serve different purposes, even when both contribute to usable access.</p>
<p>First name the account operation and its result. Then obtain separate entry or permission evidence if the requirement includes using the application.</p>
</div>
</details>

<a id="q03"></a>

### Q03. Who calls whom?

<p class="qb-question"><strong>Question:</strong> Okta sends a SCIM account-management request to Projects at its configured service endpoint. Projects receives it and returns an HTTP response. Which system is the client, which is the service provider, and is this a request to Okta’s management API?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Okta is the SCIM client making the request; Projects is the receiving service provider. The destination is Projects' interface, not an Okta management endpoint.</p>
<p>An API is an interface through which software requests information or operations. The caller and receiver give its response context.</p>
<p>Name those participants and the operation before judging the status. Roles belong to this exchange, not every interaction either product can have.</p>
</div>
</details>

<a id="q04"></a>

### Q04. MFA and connector access

<p class="qb-question"><strong>Question:</strong> Maya completes multifactor authentication (MFA) at her company identity service. Separately, an Okta connector needs service authorization to create her account through Projects’ SCIM interface. No connector result is supplied. Does her authentication prove that backend operation is permitted or successful?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Maya has completed a check about her own identity. The connector needs a different result: permission to perform the account-management operation at Projects through its configured service connection.</p>
<p>Those are separate exchanges. Her MFA result does not show that Projects accepted the connector's authorization or created an account. Inspect the actual connection and operation result rather than repeat her sign-in checks to explain a backend failure.</p>
<p>No connector result is supplied here, so keep its outcome unknown. A token issued for a different application's sign-in is not automatically a credential for this service connection either.</p>
</div>
</details>

<a id="q05"></a>

### Q05. Preparation and transmission

<p class="qb-question"><strong>Question:</strong> Projects is a separate business application. Okta holds the app user profile, meaning the information prepared for Maya’s Projects assignment. Its values appear correct, but no SCIM request has been inspected. Has correct transmission been shown?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The prepared profile and actual wire request are different observations. Wire means the fields and values transmitted to the receiver.</p>
<p>Inspect what the connector generated, where it placed the data, and the relevant response and target record. Correct preparation alone does not establish sending or acceptance.</p>
<p>Follow the boundaries to locate the first discrepancy. That keeps a correct-looking source from replacing evidence of the message the application actually received.</p>
</div>
</details>

## Read the application contract

<a id="q06"></a>

### Q06. Why a contract matters

<p class="qb-question"><strong>Question:</strong> A Projects SCIM integration contract defines supported user operations, unique userName, accepted department codes, provider-assigned id, and retained accounts on deactivation. How does that agreement help judge a request, beyond recognizing the SCIM protocol?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It supplies the particular application's expected fields, operations, and behavior. Compare the actual request and response with those expectations.</p>
<p>Protocol familiarity alone does not tell you every application's department codes or which actions are enabled in a connector.</p>
<p>The contract provides a concrete acceptance reference. Use it to identify what should happen, then inspect actual results before reporting that the operation achieved it.</p>
</div>
</details>

<a id="q07"></a>

### Q07. Application values versus protocol rules

<p class="qb-question"><strong>Question:</strong> The fictional Projects application accepts only SAL for Sales, FIN for Finance, and IT for IT in its enterprise department field. It uses SCIM for account management. Are those three codes universal SCIM requirements or this application’s contract?</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They are this application's accepted values. The standard enterprise User extension provides a place for organizational information, not this particular department-code policy for every application.</p>
<p>Preserve the approved business department while preparing the destination's required representation. Finance can be correct source text while FIN is required in this target field.</p>
<p>The protocol's structure and the application's value rules both matter. Inspect the relevant agreement instead of assuming one example applies everywhere.</p>
</div>
</details>

<a id="q08"></a>

### Q08. Field names on the wire

<p class="qb-question"><strong>Question:</strong> Okta prepares departmentCode FIN for Daniel’s Projects assignment. This integration’s contract sends it as department inside SCIM’s enterprise User extension. No actual request has been read. What field-name and location comparison is needed to verify the wire representation?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Look for FIN in the enterprise extension's department field in the actual request. That is the destination field named by this integration's contract. The prepared app-profile field is called departmentCode, so copying its name into another location would not establish the required wire representation.</p>
<p>There are two questions: 'What value did Okta prepare?' and 'What value and structure did the connector send?' The first is supplied; the second still needs the request.</p>
<p>Then inspect the receiving result and intended target record. Correct preparation cannot establish transmission, acceptance or stored state by itself.</p>
</div>
</details>

<a id="q09"></a>

### Q09. A schema identifier is not a website

<p class="qb-question"><strong>Question:</strong> A SCIM user request includes <code>urn:ietf:params:scim:schemas:extension:enterprise:2.0:User</code> in its schemas list and as a nested object containing department. What job does that long identifier serve, and is it a web address the employee should visit?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The long identifier names the enterprise extension's data definition. It tells the reader which defined set of attributes is being used; it is not a page the employee needs to open.</p>
<p>In the schemas list, it declares that the resource uses that extension. When the same identifier appears as a field name, the nested object beneath it holds the enterprise attributes, including department. Find that object and read the department value; you do not need to memorize the whole identifier.</p>
<p>The request's destination address is separate. One value identifies the structure of the data, while the HTTP address identifies where the account-management request goes.</p>
</div>
</details>

<a id="q10"></a>

### Q10. Do all updates use PATCH?

<p class="qb-question"><strong>Question:</strong> One fictional Okta SCIM connector uses POST for create, PUT for ordinary profile replacement, and PATCH for deactivation. Is that supplied method choice proof every Okta SCIM integration uses PATCH for all updates?</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The connector's supported contract matters. The supplied example has particular choices, while custom integrations created through the App Integration Wizard use PUT for user updates, including deactivation.</p>
<p>Inspect the actual integration and enabled behavior rather than generalize from one operation.</p>
<p>The HTTP method helps interpret work only with its endpoint and semantics. A familiar method name does not establish another connector's capabilities or outcome.</p>
</div>
</details>

## Create and verify the intended resource

<a id="q11"></a>

### Q11. The lookup’s purpose

<p class="qb-question"><strong>Question:</strong> Before creating Maya’s Projects account, a configured connector searches the intended instance for her approved userName. A match can follow supported existing-account handling; no match can lead to create. Why perform this lookup, and can its result guarantee no later conflict?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The lookup helps avoid creating another account where an appropriate one already exists. Its result is still evidence for that particular search.</p>
<p>It cannot guarantee a later create will never conflict. If the results disagree, inspect the exact search, record, and operation sequence.</p>
<p>Preserve both observations. The lookup identifies a decision point, not a complete ownership history or promise about every later operation.</p>
</div>
</details>

<a id="q12"></a>

### Q12. Read a create request

<p class="qb-question"><strong>Question:</strong> Projects is a fictional SCIM application where SAL means Sales and active true requests an enabled user account. A create request carries userName maya.rao@app.example, active true, and enterprise department SAL. Projects assigns id, so none is supplied. What is requested and what is not yet proven?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The request asks for Maya's intended account with that username, enabled state, and Sales code. It does not establish creation until the receiver supplies its result.</p>
<p>No target id is included because this application assigns it. Inspect the response and intended record afterward.</p>
<p>Read the business information within the structure first. A valid-looking body is a request for work, not evidence the destination completed that work.</p>
</div>
</details>

<a id="q13"></a>

### Q13. Two different active fields

<p class="qb-question"><strong>Question:</strong> Maya has an Okta user account. A separate SCIM create request to Projects includes JSON <code>"active": true</code> for the application resource; no target response is supplied. Is this the same field as the Okta account status, and is the target state verified?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They are separate fields in separate systems. The JSON Boolean requests Projects' enabled state under its contract; it does not describe the Okta account status.</p>
<p>The request also does not establish the resulting target state. Obtain the response and relevant record read.</p>
<p>Keep true as a Boolean distinct from the text string "true" when reading data. Meaning, record location, and actual outcome all need the appropriate context.</p>
</div>
</details>

<a id="q14"></a>

### Q14. Read the create result

<p class="qb-question"><strong>Question:</strong> Projects receives a SCIM user-create request and returns HTTP 201 Created with id prj-1042 and account values. No later record check or sign-in is supplied. What does the response report, and what would a subsequent read add?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It reports creation of resource prj-1042 and its returned information. That is stronger than the original request alone.</p>
<p>A read of that same account checks its stored values and state against the intention. Together they can support creation and the checked destination condition.</p>
<p>Sign-in and business permissions are still other outcomes. A creation response should not be reported as successful application work without those relevant results.</p>
</div>
</details>

<a id="q15"></a>

### Q15. Location in context

<p class="qb-question"><strong>Question:</strong> Compare two HTTP responses: a SCIM create returns 201 Created with Location naming the new account resource; a browser page returns 302 with Location directing the next visit. Does the shared header mean both operations are browser redirects?</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Location in the 201 result identifies the created resource's address. A later GET can read it as a separate request.</p>
<p>The 302 directs the browser to another destination. Interpret the header together with status, sender, receiver, and operation.</p>
<p>One field name does not have a complete meaning outside its exchange. Backend account creation and browser movement need their own result interpretation.</p>
</div>
</details>

<a id="q16"></a>

### Q16. User name and target id

<p class="qb-question"><strong>Question:</strong> Projects requires a unique userName per application instance and assigns each SCIM user its own id for later operations. Okta has a separate object ID, and the employee may also have an email and employee number. Can those identifiers be substituted freely?</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Give the two Projects identifiers different jobs. UserName is the account name, which must be unique within the stated instance. The provider-assigned id identifies the resource the connector should address for later operations.</p>
<p>An Okta object ID, email address or employee number has its own meaning. Even when two values look alike, you cannot substitute one for another without the established association between the records.</p>
<p>For an update, follow the verified link to the intended Projects resource and use its target ID. That keeps the change attached to the known account instead of selecting a different record by a familiar-looking value.</p>
</div>
</details>

<a id="q17"></a>

### Q17. Why read the same resource?

<p class="qb-question"><strong>Question:</strong> Projects returns id prj-1042 after creating Maya’s requested account. Support also sees another account with a similar display name. Why verify prj-1042 rather than assume the similarly named record is the create result?</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The returned identifier ties the read to the resource the operation reported. A similar name can describe a different account.</p>
<p>Compare that resource's username, expected attributes, and state. This preserves the relationship between the operation and destination evidence.</p>
<p>The read verifies its checked state, not actual sign-in or every permission. Correct resource selection makes the account finding reliable while keeping its scope clear.</p>
</div>
</details>

<a id="q18"></a>

### Q18. Scope of verified account creation

<p class="qb-question"><strong>Question:</strong> A correlated Projects SCIM create returns 201 for Maya, and a later read of the same resource confirms the expected username, department code, and enabled state. No sign-in or project-permission test is supplied. Is “All her Projects work is ready” established?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Creation and the checked account state are established. Application entry and permissions still need their own evidence.</p>
<p>Report the intended account and values as completed work, then test the particular business outcome if it is required.</p>
<p>The account can be prepared correctly while later use remains unknown. Preserve that real success without turning it into an unlimited claim about the application.</p>
</div>
</details>

## Investigate a username conflict

<a id="q19"></a>

### Q19. Interpret a uniqueness conflict

<p class="qb-question"><strong>Question:</strong> A connector tries to create Maya’s SCIM account in Projects. The prior username lookup reports no match, but the create returns 409 Conflict with scimType uniqueness and detail that userName is already in use. The conflicting record’s owner is unknown. What finding is established, and does it identify whose account conflicts?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The target reports a uniqueness conflict. It does not identify the owner or establish whether the record should be linked to Maya.</p>
<p>Request the existing resource and reliable ownership evidence, along with the lookup details. A familiar username cannot justify deleting or adopting the record.</p>
<p>The refusal locates the failed operation. The correct business resolution still depends on the missing identity relationship and search history.</p>
</div>
</details>

<a id="q20"></a>

### Q20. No match, then conflict

<p class="qb-question"><strong>Question:</strong> A connector tries to create Maya’s SCIM account in Projects. The prior username lookup reports no match, but the create returns 409 Conflict with scimType uniqueness and detail that userName is already in use. The conflicting record’s owner is unknown. Does the difference prove another process created the account between the search and create?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It could have happened that way, but the two results do not prove it. Someone else might have created the account after the search. The search might also have missed a record that was already there.</p>
<p>Compare the exact lookup and response, the Projects instance queried, and the timing and sequence of operations. Relevant account history can help distinguish those possibilities. Keep both observations while their explanation remains unresolved.</p>
<p>The conflict also leaves ownership unknown. Even if you establish why the search and create disagreed, you still need to establish whose account it is before deciding whether to associate it with Maya.</p>
</div>
</details>

<a id="q21"></a>

### Q21. Request conflict evidence

<p class="qb-question"><strong>Question:</strong> A connector tries to create Maya’s SCIM account in Projects. The prior username lookup reports no match, but the create returns 409 Conflict with scimType uniqueness and detail that userName is already in use. The conflicting record’s owner is unknown. Which evidence would address account ownership separately from why the lookup and create disagreed?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The target resource's identifier and ownership record address whose account it is. The exact lookup, response, instance, and operation sequence help explain the discrepancy.</p>
<p>Request both rather than a general retry. They answer different uncertainties and can lead to different approved actions.</p>
<p>The desired result is a correct account relationship. A successful request without reliable ownership would not satisfy that requirement.</p>
</div>
</details>

<a id="q22"></a>

### Q22. Do not clear the error blindly

<p class="qb-question"><strong>Question:</strong> A connector tries to create Maya’s SCIM account in Projects. The prior username lookup reports no match, but the create returns 409 Conflict with scimType uniqueness and detail that userName is already in use. The conflicting record’s owner is unknown. Why not delete the existing record, invent a different username, or link it to Maya merely to clear the error?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Those changes could hide the error while leaving ownership wrong. Deletion could affect someone else's account; a new username could introduce a duplicate; linking could adopt the wrong resource.</p>
<p>Resolve the identity relationship and lookup discrepancy first, then follow the approved account or naming process.</p>
<p>The goal is the intended person and record, not simply removal of a visible conflict. An error-free create is not a substitute for justified association.</p>
</div>
</details>

<a id="q23"></a>

### Q23. Two possible owners

<p class="qb-question"><strong>Question:</strong> A connector tries to create Maya’s SCIM account in Projects. The prior username lookup reports no match, but the create returns 409 Conflict with scimType uniqueness and detail that userName is already in use. The conflicting record’s owner is unknown. If later review verifies Maya ownership versus ownership by another person, how would the next decision differ?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>For Maya's own account, evaluate approved supported existing-account handling. For another person's record, route the naming or identity-data problem through its responsible owner.</p>
<p>These are conditional paths, not results already provided by the conflict. Do not select either before the ownership evidence arrives.</p>
<p>The status identifies an operation problem, while business and record evidence justify its resolution. Keep those responsibilities separate.</p>
</div>
</details>

<a id="q24"></a>

### Q24. Retrying the same create

<p class="qb-question"><strong>Question:</strong> A connector tries to create Maya’s SCIM account in Projects. The prior username lookup reports no match, but the create returns 409 Conflict with scimType uniqueness and detail that userName is already in use. The conflicting record’s owner is unknown. Would repeatedly submitting the unchanged create resolve the unknown owner and lookup discrepancy?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Repetition does not supply ownership or explain why the earlier search missed the conflict.</p>
<p>Obtain those facts before selecting a supported next operation. The create has an explicit rejection, so the missing evidence concerns the existing record and sequence.</p>
<p>Keep the intended account outcome in view. Forcing another create through could make the relationship harder to manage instead of resolving it.</p>
</div>
</details>

## Investigate a rejected department value

<a id="q25"></a>

### Q25. Locate a rejected representation

<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance in Workday HR and Okta. Projects accepts only SAL for Sales, FIN for Finance, and IT for IT. The mapping passes Finance unchanged into the app profile and sent enterprise department; Projects returns 400 invalidValue requiring an accepted code. Which representation needs correction rather than the approved department itself?</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Daniel's approved department is Finance. Projects requires that same department expressed as FIN in its enterprise department field. The outgoing mapping currently passes the full name, so the representation sent to Projects violates this application's accepted-value rule.</p>
<p>Preserve Finance in the correct business source and repair the conversion. Making Daniel a Sales employee just to obtain an accepted value would change the business fact rather than express it correctly.</p>
<p>After the change, verify the stored app profile, actual request, new response and intended target record. The supplied rejection establishes this defect; it does not supply a successful correction or retest.</p>
</div>
</details>

<a id="q26"></a>

### Q26. 400 and the detailed cause

<p class="qb-question"><strong>Question:</strong> A SCIM application returns HTTP 400 Bad Request. One case supplies a sent Finance value and detailed invalidValue message requiring department codes; another supplies only the status. Does 400 by itself always diagnose a department mapping problem?</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The status classifies the rejected request but does not supply every cause. The detailed case identifies the department defect through its body, actual value, and contract.</p>
<p>Read the request and error detail in context before choosing a correction. A different 400 could concern different information.</p>
<p>The same principle applies to conflicts: a status and a confirmed ownership finding have different scopes. Do not attach one memorized cause to every number.</p>
</div>
</details>

<a id="q27"></a>

### Q27. Preserve correct HR information

<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance in Workday HR and Okta. Projects accepts only SAL for Sales, FIN for Finance, and IT for IT. The mapping passes Finance unchanged into the app profile and sent enterprise department; Projects returns 400 invalidValue requiring an accepted code. Why would changing Daniel’s HR department to Sales be an inappropriate correction?</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Finance is the approved business fact and is correctly stored upstream. Changing it would introduce an error rather than repair the outgoing format.</p>
<p>Projects needs FIN to express Finance under its table. Correct the conversion and delivery while preserving the person's real department.</p>
<p>Acceptability and truth must be satisfied together. Making a required field pass by changing the legitimate source meaning would not achieve the intended account outcome.</p>
</div>
</details>

<a id="q28"></a>

### Q28. Verify a proposed code correction

<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance in Workday HR and Okta. Projects accepts only SAL for Sales, FIN for Finance, and IT for IT. The mapping passes Finance unchanged into the app profile and sent enterprise department; Projects returns 400 invalidValue requiring an accepted code. A proposed mapping preview now returns FIN, but no stored-profile update, sent request, response, or target read is supplied. What verification still remains?</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check the stored app user value, transmitted enterprise department, new operation response, and intended target account. The preview establishes a calculation only.</p>
<p>Review other assigned users sharing the mapping and their approved conversions too. The correction is not necessarily private to Daniel.</p>
<p>No successful retest is supplied. Specify those results as needed evidence rather than borrow a successful example to close this unresolved case.</p>
</div>
</details>

## Update the linked account

<a id="q29"></a>

### Q29. Address the known resource

<p class="qb-question"><strong>Question:</strong> Daniel already has a verified linked Projects resource id prj-1020. The approved change is updating its department to FIN, not creating another account. Why should the operation address that identifier, and what would distinguish update from creation?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It targets the known account while changing its information. Creation would be another operation and could introduce an unnecessary duplicate.</p>
<p>Inspect the supported update to prj-1020, its response, and the account afterward. A changed attribute with preserved intended association supports an update finding.</p>
<p>Name the operation and target id in the record. A successful profile update should not be described as a new-user result.</p>
</div>
</details>

<a id="q30"></a>

### Q30. PUT and PATCH

<p class="qb-question"><strong>Question:</strong> A SCIM service supports PUT to replace a user resource’s writable representation and PATCH for selected changes. How do those purposes differ, and why should a small body not casually be treated as interchangeable between them?</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Read PUT as replacing the resource's writable information under the service's supported rules. Read PATCH as applying the changes described in its operation structure.</p>
<p>The difference matters when only one attribute needs correction. A small PUT body does not automatically mean 'change this field and leave everything else alone.' Omitted writable fields can be cleared or defaulted according to the service's rules. A PATCH describes selected changes, but still needs the required structure and supported behavior.</p>
<p>Inspect the actual connector contract and full intended representation before judging either request. Knowing the correct department value is only part of understanding whether the operation preserves the rest of the intended account information.</p>
</div>
</details>

<a id="q31"></a>

### Q31. The one-field PUT shortcut

<p class="qb-question"><strong>Question:</strong> Support proposes a SCIM PUT replacement containing only Daniel’s department FIN. The service’s treatment of omitted writable fields has not been reviewed. Is every other account field guaranteed to remain unchanged?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Under replacement behavior, omitted writable fields can be cleared or receive defaults according to the supported service rules.</p>
<p>Read the contract and full intended representation before submitting or judging the change. A one-field update cannot simply be assumed to have PATCH semantics.</p>
<p>Preserve the intended account information while correcting the department. The right value in one field does not make every request shape appropriate.</p>
</div>
</details>

<a id="q32"></a>

### Q32. Prepared FIN, no request

<p class="qb-question"><strong>Question:</strong> Projects requires FIN for Daniel’s Finance department. His application-specific profile held in Okta contains FIN, but no target update request or response is supplied. Which boundary should support investigate before declaring an application rejection?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Check whether the update was eligible, generated, and sent under the supported and enabled configuration. The prepared value does not establish an operation result.</p>
<p>Then obtain the actual request and receiver response if the operation occurred. No refusal can be claimed without its evidence.</p>
<p>Start at the missing boundary. A correct prepared profile can coexist with unverified delivery without selecting the cause of that uncertainty.</p>
</div>
</details>

<a id="q33"></a>

### Q33. Success report, different target read

<p class="qb-question"><strong>Question:</strong> A SCIM update reports success sending FIN to a linked Projects account. A later read shows SAL instead, but record identity, timing, and intervening writes have not been reviewed. Does this alone prove the receiving application gave a false response?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Investigate the same-resource relationship, sequence, sent values, and any other writers before naming the cause.</p>
<p>The reported result and later state can both be real observations while the full history remains incomplete. Ensure the read and response concern the intended account.</p>
<p>The disagreement is useful evidence requiring explanation. It does not authorize inventing a particular target defect from two snapshots alone.</p>
</div>
</details>

## Deactivation and retained records

<a id="q34"></a>

### Q34. Read the selected state change

<p class="qb-question"><strong>Question:</strong> An approved Projects removal targets Maya’s correctly linked SCIM resource prj-1042. Under its contract, active false disables new access while retaining the account. A PATCH contains op replace, path active, value false. No response is supplied. What is requested and what is not yet established?</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It requests a selected state change on the linked account: replace active with false.</p>
<p>The body does not establish acceptance or the stored state. Obtain the response and relevant resource read afterward.</p>
<p>An authorized intention and a transmitted operation are useful facts, but the receiving application supplies its outcome. Keep existing-session evidence separate if ending sessions is also required.</p>
</div>
</details>

<a id="q35"></a>

### Q35. Empty 204 response

<p class="qb-question"><strong>Question:</strong> After a SCIM deactivation request, Projects returns HTTP 204 No Content with an empty response body. No later account read is yet supplied. Is the empty body itself evidence that the request received no answer or failed?</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Projects has answered. HTTP 204 reports success and deliberately has no response body, so there is no returned resource document to read in this response.</p>
<p>That differs from a timeout where no result reaches the caller. An empty successful response and an unknown operation result are different findings; the absence of JSON does not make them equivalent.</p>
<p>Next, read the linked account to check the required state. This question supplies no later read, so report the successful operation response without inventing the stored-account or existing-session outcome.</p>
</div>
</details>

<a id="q36"></a>

### Q36. Inactive is not deleted

<p class="qb-question"><strong>Question:</strong> Projects’ supplied contract says active false disables new access, retains the account, and leaves existing sessions for a separate check. A read confirms Maya’s account exists with active false. What result is supported, and what is not?</p>

<details class="qb-answer" id="q36-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The checked account is retained and inactive for new access under this contract. It is not deleted, and the session result remains unverified.</p>
<p>Account-state maintenance and ending an established application session are different outcomes. Obtain the relevant access evidence if the removal requirement includes that path.</p>
<p>Report the confirmed inactive record clearly. A successful deactivation does not need to be exaggerated into deletion or universal session termination.</p>
</div>
</details>

<a id="q37"></a>

### Q37. SCIM deletion and Okta deprovisioning

<p class="qb-question"><strong>Question:</strong> SCIM includes a DELETE operation, but Okta’s documented outbound SCIM user deprovisioning sets active false. A connector’s actual supported and enabled behavior still matters. Does the protocol’s deletion capability mean every deprovisioning event deletes the resource?</p>

<details class="qb-answer" id="q37-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A protocol capability and a particular connector's use are different facts. The stated outbound deprovisioning behavior changes active state rather than issuing DELETE.</p>
<p>Inspect the actual operation and target result. The chosen method can differ across integrations while the resource is retained.</p>
<p>Use deprovisioning to describe removal or disabling through the supported process, not as an automatic synonym for deleting every account record.</p>
</div>
</details>

<a id="q38"></a>

### Q38. One group removed

<p class="qb-question"><strong>Question:</strong> Maya is removed from one Okta group that supplies a Projects assignment. Other assignment paths and the generated account operation have not been inspected. Does that one membership removal prove a SCIM deactivation was sent?</p>

<details class="qb-answer" id="q38-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Another path may retain the assignment, and the relevant deactivation behavior must be supported and enabled.</p>
<p>Inspect remaining assignments and actual operation evidence before claiming a request or target change. Group removal describes a relationship, not the destination state.</p>
<p>The removal requirement should guide the wider check. Ending one path is progress, while account and session outcomes still require their own records.</p>
</div>
</details>

<a id="q39"></a>

### Q39. Account off, session unknown

<p class="qb-question"><strong>Question:</strong> Projects accepts Maya’s deactivation and a linked read confirms active false with the record retained. Its contract disables new access but requires separate session verification. No session result is supplied. Improve: “Everything is deleted and every session ended.”</p>

<details class="qb-answer" id="q39-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Projects accepted the deactivation, and the linked account read confirms active false while retaining the record. Under its contract, the account is disabled for new access. Existing sessions remain unverified.”</p>
<p>That connects the response and checked state without inventing deletion or session results.</p>
<p>The completed account action is useful. Keep the additional required outcome open rather than hide it behind a broad closure.</p>
</div>
</details>

## Choose the next evidence

<a id="q40"></a>

### Q40. Connection success has a scope

<p class="qb-question"><strong>Question:</strong> A connection test for an Okta-to-application provisioning service passes. Later requests may use different operations, account values, and relevant authorization checks. No result for Maya’s update is supplied. Does the connection success prove that update is accepted and valid?</p>

<details class="qb-answer" id="q40-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It establishes the connection test's own result, not every later account operation.</p>
<p>Inspect the supported and enabled action, assignment, mappings, linked target, actual request, and response. SSO configuration, the separate sign-in relationship, does not verify provisioning either.</p>
<p>Keep general connectivity and the specific operation separate. One accepted test cannot certify all possible messages or business outcomes.</p>
</div>
</details>

<a id="q41"></a>

### Q41. A create timeout

<p class="qb-question"><strong>Question:</strong> A connector sends a SCIM account-create request to Projects, but times out without a returned result. Target state is uninspected, so whether creation occurred is unknown. Why check the destination before submitting another create?</p>

<details class="qb-answer" id="q41-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The connector knows it sent a create request, but the timeout does not establish what Projects did with it. The account might have been created even though the response did not reach the caller. It might also not have been created; the supplied evidence leaves that open.</p>
<p>Check the intended destination and operation evidence before submitting another create. If a record exists, establish its identity and association rather than assume it belongs to the person just because the user name looks familiar.</p>
<p>This is different from receiving an explicit rejection. With a timeout, the missing result is the reason to investigate before choosing the next operation. Another create could encounter an existing account and make the history harder to resolve.</p>
</div>
</details>

<a id="q42"></a>

### Q42. Compare three evidence boundaries

<p class="qb-question"><strong>Question:</strong> For independent SCIM department updates, choose the next check: A has only a prepared value with no operation supplied; B has a transmitted request and explicit rejection; C reports success but a later target read differs. No further cause is given.</p>

<details class="qb-answer" id="q42-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>For A, inspect eligibility, generation, and transmission. For B, compare the actual request and detailed error with the contract. For C, inspect the linked resource, sequence, timing, and other writers.</p>
<p>Each stops at a different evidence boundary. Applying one retry or formula change to all would ignore those differences.</p>
<p>Locate what is demonstrated and request the fact that can distinguish the relevant explanations.</p>
</div>
</details>

<a id="q43"></a>

### Q43. The task disappears

<p class="qb-question"><strong>Question:</strong> A support task for creating Maya’s application account disappears from Okta’s display. No final operation response or intended target-account verification is supplied. Does the changed task display establish the required account outcome?</p>

<details class="qb-answer" id="q43-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The interface observation does not supply the missing receiver result or target state.</p>
<p>Record the operation, linked identifier, relevant sanitized response, proposed or performed correction, and verification. Those facts make the conclusion traceable beyond the last visible status.</p>
<p>An absent task and a confirmed account are different findings. Keep the intended outcome open until actual evidence supports it.</p>
</div>
</details>

## Explain the whole investigation

<a id="q44"></a>

### Q44. Compare independent account investigations

<p class="qb-question"><strong>Question:</strong> Compare four independent Projects investigations: A has 201 create and a read confirming the expected enabled account; B has 409 uniqueness with unknown owner and inconsistent lookup; C sends Finance where FIN is required and receives invalidValue; D verifies retained active false but no session result. How do their supported outcomes differ?</p>

<details class="qb-answer" id="q44-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A verifies creation and the checked account state. B needs ownership and lookup evidence. C demonstrates a representation defect but still needs a verified correction. D verifies account deactivation while leaving existing sessions unknown.</p>
<p>Keep each request, contract, response, identifier, and read together. A success in one case cannot fill another's missing outcome.</p>
<p>That comparison gives different next actions rather than one generic provisioning fix.</p>
</div>
</details>

[Day 10 lesson](../lessons/day-10-scim.md) · [Reasoning exercises](../exercises/day-10.md) · [Day 10 recap](../revision/day-10.md) · [Question bank](index.md)
