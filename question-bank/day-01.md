---
title: "Day 1 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 1
has_children: true
---

# Day 1: Questions

## People, records, and the right account

<a id="q01"></a>

### Q01. One person, several records

<p class="qb-question"><strong>Question:</strong> Maya is an employee. Her company uses Workday for HR information, Active Directory (AD) for directory accounts, Okta for identity and access management, and Salesforce for customer-management work. Each system has a record representing her. Why can one person need several records?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Each system has a different job. Workday records Maya's employment information. Active Directory holds her directory account. Okta represents her for identity and access decisions. Salesforce needs its own account for her work there.</p>
<p>These records represent the same person in different places. They do not create four different people, and finding one record does not establish what is stored in another.</p>
<p>When investigating a problem, start by naming the system and record you checked. “Her Workday employment record exists” answers a different question from “her Salesforce account is ready.”</p>
</div>
</details>

<a id="q02"></a>

### Q02. Identity and account

<p class="qb-question"><strong>Question:</strong> Maya is an employee identified by her name and employee number. She also has a Salesforce account for using that business application. The account is later disabled, but Maya remains employed. How does this illustrate the difference between an identity and an account?</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>An identity represents who someone is. An account is a record in a particular system through which that person may sign in or receive access.</p>
<p>Maya's name and employee number help represent her identity. Her Salesforce account represents her in Salesforce and has its own state and permissions. Disabling it changes that application's account state, not the existence of Maya as a person.</p>
<p>This is why an account investigation should name the system. A problem with one representation does not automatically mean every other record or access path changed.</p>
</div>
</details>

<a id="q03"></a>

### Q03. An account exists

<p class="qb-question"><strong>Question:</strong> Salesforce is a business application that keeps a separate account for each user. A support analyst finds an account belonging to employee Maya but does not inspect its state, test sign-in, or check permissions. Which conclusion is supported: the account exists, it is enabled, or Maya can perform her required work?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Only existence is established. Finding the account tells us the record is there; it does not tell us whether it is enabled or usable.</p>
<p>Imagine a disabled account. It can still appear in a search while refusing access. Even an enabled account needs a successful sign-in and the permissions for Maya's particular work.</p>
<p>Treat existence, state, and usable access as separate checks. That lets you describe progress accurately instead of asking one successful lookup to prove several outcomes.</p>
</div>
</details>

<a id="q04"></a>

### Q04. Two different account states

<p class="qb-question"><strong>Question:</strong> A company uses Okta to manage identities and Salesforce as a separate business application. Maya’s Okta user is Active, but her Salesforce account is disabled. Are those states contradictory, and what should support clarify before changing either?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They can both be true because they describe different records. Active concerns Maya's Okta account; disabled concerns her account inside Salesforce.</p>
<p>Next, establish whether Maya is approved to use Salesforce now and which owner or process manages that account state. A disabled account may need a justified correction, but the two labels alone do not explain why it was disabled.</p>
<p>The goal is the appropriate state in each system. Changing a correct Okta record just to make the labels agree would not answer the Salesforce requirement.</p>
</div>
</details>

<a id="q05"></a>

### Q05. Do the identifiers have to match?

<p class="qb-question"><strong>Question:</strong> Maya’s company identifies her employment record with employee number NB-1042, her Okta identity with a login, and her Salesforce account with an application username. Must those three identifiers contain identical text to represent the same person?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. An employee number, Okta login, and application username serve different purposes. Different systems can use different identifiers for the same person.</p>
<p>What matters is the approved value for each operation and reliable evidence that the records belong to Maya. Similar text alone does not establish that link, and different text alone does not disprove it.</p>
<p>Before searching or changing an account, identify the intended system and its matching value. Do not substitute a familiar email address or employee number without checking how that system identifies its users.</p>
</div>
</details>

<a id="q06"></a>

### Q06. A familiar display name

<p class="qb-question"><strong>Question:</strong> A support analyst must find employee Maya Rao’s account in a business application. The search returns two records displaying “Maya Rao,” but account ownership has not been verified. Is it appropriate to select the first result? What evidence is needed?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A display name is a useful search clue, not a verified account association. People can share a name, and records in different environments can look alike.</p>
<p>Establish the intended application environment, its approved user identifier, and evidence of who owns each candidate record. Those facts should support the relationship before a state or permission change is made.</p>
<p>Choosing the first familiar-looking result could affect another person's account. The next useful step is to identify the right record, not to guess which result the ticket meant.</p>
</div>
</details>

<a id="q07"></a>

### Q07. The wrong environment

<p class="qb-question"><strong>Question:</strong> Maya needs access to the company’s live Salesforce environment, called production. Support searches a separate Salesforce test environment and finds no account under her expected test identifier. What does that result establish about production?</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It does not establish whether Maya has an account in production. It establishes only what that test-environment search found under its identifier and scope.</p>
<p>The next check belongs in the intended production environment using the approved production identifier. If Okta is connected to Salesforce, verify that you are inspecting the integration for that same instance.</p>
<p>“No match in test” is a useful scoped finding. Expanding it to “no Salesforce account exists” would discard the context needed to make the next search accurate.</p>
</div>
</details>

## Directory information and data flow

<a id="q08"></a>

### Q08. What a directory contributes

<p class="qb-question"><strong>Question:</strong> A company stores employee identity records in a directory: an organized collection of user information such as names and departments. An employee’s record is present there. What does a directory contribute, and does that record alone make every business application usable?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The directory gives systems an organized place to hold and use identity information. That data can support decisions about who should receive particular access.</p>
<p>Storing the record does not complete every access outcome. An application assignment connects a user to an application, account management prepares the target account, authentication checks sign-in, and permissions govern actions.</p>
<p>Those jobs can use directory data, but their results still need verification. A record being present is the starting point for following the relationships, not proof that every application works.</p>
</div>
</details>

<a id="q09"></a>

### Q09. Attribute or profile?

<p class="qb-question"><strong>Question:</strong> Maya’s Okta profile contains firstName Maya, employeeNumber NB-1042, department Sales, and workerType Employee. A profile is a collection of user details. Which named details are attributes, and which parts are their values?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Each named detail is an attribute. Department is an attribute, and Sales is its value; workerType is another attribute, with Employee as its value. The collection of those details is Maya's profile.</p>
<p>This vocabulary helps you make a precise observation. “Her profile is wrong” leaves the affected field unclear. “Her Okta department is Sales” identifies the record, field, and observed value.</p>
<p>That statement is easier to compare with another system and avoids changing unrelated information when only one detail needs attention.</p>
</div>
</details>

<a id="q10"></a>

### Q10. A correct value at the source

<p class="qb-question"><strong>Question:</strong> Workday is the company’s HR system, and Salesforce is a separate business application with its own user records. Support confirms that Maya’s approved department is Sales and Workday stores Sales. No Salesforce department check has been made. Can support report that Salesforce also stores Sales?</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The Workday observation establishes the HR value, not the Salesforce value. To report what Salesforce stores, inspect the intended Salesforce account.</p>
<p>Its department might be correct, stale, or maintained through a different process. Those are possibilities, not findings supplied by this question.</p>
<p>Compare the relevant records first. If a discrepancy appears, investigate how the information reaches the destination. A correct source is useful evidence, but it cannot provide a result from a record nobody has checked.</p>
</div>
</details>

<a id="q11"></a>

### Q11. A system changes roles

<p class="qb-question"><strong>Question:</strong> A company sends HR information from Workday into Okta, then sends application-specific information from Okta toward a business application. In each relationship, which system is the source and which is the target?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Source means where this information comes from; target means where it is intended to arrive. In Workday-to-Okta, Workday is the source and Okta the target. In Okta-to-application, Okta is the source and the application the target.</p>
<p>These labels describe a particular direction, not a permanent identity for a product. Okta can receive data in one relationship and supply it in another.</p>
<p>Name both sides before comparing results. That helps you investigate the correct boundary.</p>
</div>
</details>

<a id="q12"></a>

### Q12. A configured connection

<p class="qb-question"><strong>Question:</strong> An integration—a configured connection for supported tasks—links the company’s Workday HR system to Okta. It is enabled. Maya’s department recently changed in Workday, but support has not checked the update result or her current Okta profile. Is the enabled integration proof the latest value arrived?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The connection identifies a way the information can move. This person's latest update is a separate result to verify.</p>
<p>Check Maya's current destination value and the relevant update evidence if it differs from the approved source. The integration's existence does not show that this particular change was processed.</p>
<p>Keep two questions apart: how is information intended to move, and what happened to this update? The first locates the investigation; the second needs actual observations.</p>
</div>
</details>

<a id="q13"></a>

### Q13. The contractor’s record

<p class="qb-question"><strong>Question:</strong> At a company, employee Maya’s HR information comes from Workday. Contractor Priya’s profile is instead maintained in Okta by an authorized administrator after her sponsor approves it. Both work with Sales. Must Priya also have a Workday record just because Maya does?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. This question supplies different maintenance processes for employees and contractors. Sharing a department does not make their source relationships identical.</p>
<p>For Priya, follow her approved Okta-maintenance process and the records relevant to her request. Her sponsor's approval is a business decision, not another software integration.</p>
<p>That approval also does not automatically authorize every application. Identify the person, applicable maintenance model, and particular access requirement rather than copying Maya's employee path.</p>
</div>
</details>

## Identity checks and action permissions

<a id="q14"></a>

### Q14. Recognized, but not permitted

<p class="qb-question"><strong>Question:</strong> A user successfully signs in to a business application and reaches their account. When they try to approve another person’s expense, the application refuses. The approval requirement and role have not been checked. How does this illustrate authentication versus authorization?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Authentication concerns who is signing in. Authorization concerns what that person is allowed to do. Here, entry succeeded but an action was refused.</p>
<p>Check whether the person is approved to perform that action and what permission the application actually grants. The refusal alone does not tell you whether a role is incorrectly missing or the restriction is intended.</p>
<p>Sign-in success is useful because it locates the problem beyond entry. Recognizing a person does not automatically permit every action.</p>
</div>
</details>

<a id="q15"></a>

### Q15. Daniel’s job title

<p class="qb-question"><strong>Question:</strong> Expense is a company application for submitting and approving expenses. Daniel, a Finance manager, can sign in but receives a denial when approving an expense. No approval decision or configured approval role has been supplied. Does his job title alone justify granting the role?</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The title is relevant business information, but it is not proof of an approved application capability. Confirm the Finance owner's requirement and Daniel's actual Expense permissions before proposing a grant.</p>
<p>This question establishes successful entry and a denied action. A password reset addresses sign-in credentials, not the permission needed for approval.</p>
<p>Do not invent authority from the title or grant a broad role just to remove the denial. The appropriate correction depends on the approved capability and application evidence.</p>
</div>
</details>

<a id="q16"></a>

### Q16. Two access complaints

<p class="qb-question"><strong>Question:</strong> Maya signs in to Okta, the company’s identity service, but cannot enter Salesforce; her Salesforce assignment and account have not been checked. Daniel enters a separate Expense application but cannot approve an item; his approval requirement is unknown. Why do these reports need different next checks?</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Maya's report leaves application entry and account facts unresolved. Daniel's report already establishes entry and places the problem at a specific action.</p>
<p>For Maya, inspect the intended Salesforce assignment and target account, then the relevant sign-in result. For Daniel, establish the approval requirement and inspect his application permission and denial.</p>
<p>Both are access complaints, but that phrase does not name one universal failure. Locate what worked and where the requested outcome remains unverified before choosing a correction.</p>
</div>
</details>

<a id="q17"></a>

### Q17. Clarify the requested outcome

<p class="qb-question"><strong>Question:</strong> A support ticket says only “Give Maya access.” It names no application instance, action, or approval. What should support clarify before changing an account or permission?</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Ask which application and environment Maya needs, what she must do there, and who approves that capability. Entering an application, viewing records, and performing a restricted action are different outcomes.</p>
<p>She may already have the intended account and need only an approved permission, or an account may still need preparation. The vague request does not choose between those conditions.</p>
<p>A clear requirement supplies a test for success. It also keeps a configuration change from becoming an access decision nobody actually authorized.</p>
</div>
</details>

## Sign-in and account management

<a id="q18"></a>

### Q18. SSO and provisioning

<p class="qb-question"><strong>Question:</strong> Maya needs a Salesforce account and a way to sign in to it through the company’s Okta identity service. How do provisioning and single sign-on (SSO) address those different needs?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Provisioning concerns creating or maintaining the application account through a supported, configured process. SSO connects the application's sign-in to the established identity relationship so Maya need not treat each connected application as an entirely separate sign-in.</p>
<p>The application still validates the information it receives. A prepared account does not prove accepted sign-in, and sign-in setup does not prove account creation.</p>
<p>Follow both questions separately: is the intended account ready, and did the application accept the actual sign-in?</p>
</div>
</details>

<a id="q19"></a>

### Q19. SSO with manually prepared accounts

<p class="qb-question"><strong>Question:</strong> A business application uses single sign-on through Okta, but its owner creates user accounts manually rather than through an automated connector. Is that design necessarily broken, and where would support investigate a missing account?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It can be a valid design. Single sign-on supports the sign-in relationship; the owner supplies accounts through a separate manual process.</p>
<p>For a missing account, request the owner's preparation result and inspect the intended target record. Do not diagnose a failed automated provisioning operation when no such mechanism is supplied.</p>
<p>Judge the arrangement against its requirement and results. The user needs the right account through the expected process and an accepted sign-in, even though those tasks use different mechanisms.</p>
</div>
</details>

<a id="q20"></a>

### Q20. An update to an existing account

<p class="qb-question"><strong>Question:</strong> A configured account-management process updates department on an existing business-application account. It creates no new account. Can this still be provisioning, and what result should be checked?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Yes. Provisioning includes maintaining an existing account, not only creating one. Here the intended work is an information update.</p>
<p>Check the relevant update response and the intended account's stored department. Those observations establish what was attempted and what the destination holds.</p>
<p>The account may exist and even allow sign-in while the update remains incomplete. Each result belongs to its operation, so successful entry cannot substitute for evidence that the department change arrived.</p>
</div>
</details>

<a id="q21"></a>

### Q21. Disabling is not always deleting

<p class="qb-question"><strong>Question:</strong> A company must remove a user’s access to a business application. The application supports retaining accounts in a disabled state. Must deprovisioning delete the record?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Deprovisioning removes or disables access through the supported process. In this stated design, a retained disabled account can be the intended outcome.</p>
<p>Deletion removes the record; disabling changes its state. Confirm the approved requirement and verify the actual destination result rather than assuming the two actions are equivalent.</p>
<p>Account state also needs to be interpreted under the application's behavior. A removal request alone does not establish its completion or every access outcome.</p>
</div>
</details>

<a id="q22"></a>

### Q22. Does SSO remove every future check?

<p class="qb-question"><strong>Question:</strong> Maya’s company uses single sign-on (SSO) to connect application sign-ins with Okta. A colleague promises that this means she will never face another authentication check. Is that a reliable promise?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. SSO supports the connected sign-in relationship; it does not remove every future requirement for proving identity.</p>
<p>The actual experience depends on the application's connection, applicable requirements, and current context. Another authentication check can be appropriate even after an earlier successful sign-in.</p>
<p>Explain the benefit without an unlimited guarantee: connected applications can use the established identity relationship, while each relevant interaction still has requirements and an outcome to verify.</p>
</div>
</details>

## Assignments and visible shortcuts

<a id="q23"></a>

### Q23. Assignment without a target result

<p class="qb-question"><strong>Question:</strong> Maya is assigned to the intended Salesforce integration in Okta, meaning an application-access relationship is recorded there. No target-account creation, state, or sign-in evidence has been checked. Can support report that her Salesforce account is ready?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Support can report the recorded assignment, not a ready Salesforce account. The target record and its usable state remain unverified.</p>
<p>An assignment may initiate configured account-management work, but initiating and completing that work are different findings. Some designs also prepare accounts through a separate owner.</p>
<p>Follow the actual process and inspect the intended Salesforce record. The Okta relationship answers the assignment question; it cannot supply a destination result that has not been observed.</p>
</div>
</details>

<a id="q24"></a>

### Q24. A visible tile

<p class="qb-question"><strong>Question:</strong> Maya sees a Salesforce tile—a clickable shortcut—on her Okta dashboard. No Salesforce account, entry, or permission checks are supplied. Does the visible shortcut prove any of those three outcomes?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The tile alone proves none of them. It helps locate and launch the application, but it is not a receipt for target-account existence, accepted entry, or permissions.</p>
<p>Inspect the actual application relationship and relevant destination evidence. Maya could click the shortcut and still be refused by Salesforce.</p>
<p>A visible interface element is useful context, not the complete access result. Name what the observation shows and keep the untested application outcomes separate.</p>
</div>
</details>

<a id="q25"></a>

### Q25. No visible tile

<p class="qb-question"><strong>Question:</strong> Maya’s Okta dashboard shows no Salesforce shortcut. The application connection can hide tiles, and nobody has inspected her actual Salesforce assignment. Is assignment absence established?</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A hidden shortcut can coexist with an assignment. The question explicitly supplies that visibility option and leaves the relationship uninspected.</p>
<p>Check Maya's actual assignment to the intended Salesforce integration. If it is absent, compare that finding with the approved requirement. If it is present, investigate the visible shortcut and reported application outcome separately.</p>
<p>The missing tile is a symptom. It cannot answer the relationship question merely because it is the first thing Maya notices.</p>
</div>
</details>

<a id="q26"></a>

### Q26. Select the supported findings

<p class="qb-question"><strong>Question:</strong> Okta is the company’s identity service and Salesforce its business application. Support confirms Maya’s Okta account is Active and Salesforce is assigned in Okta. Nothing is supplied about her Salesforce account or use. Select every supported claim: A. Okta account Active. B. Salesforce assigned. C. Salesforce account enabled. D. Salesforce sign-in succeeded. E. Required Salesforce permissions ready.</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A and B are supported. C, D, and E need evidence from the application account, sign-in, and relevant permission checks.</p>
<p>The expected process may continue from assignment, but expectation is not completion. Each claim must match an observation actually supplied.</p>
<p>A useful update says the Okta state and assignment are confirmed while the target outcomes remain unverified. That describes real progress without turning two checked facts into five assumed successes.</p>
</div>
</details>

## Read the evidence carefully

<a id="q27"></a>

### Q27. Finding, hypothesis, or missing evidence?

<p class="qb-question"><strong>Question:</strong> Maya’s checked Okta sign-in succeeded. In the intended Salesforce environment, support found no account matching her approved identifier. Her Salesforce assignment and account-management history have not been inspected. Classify these statements: A. The checked Okta sign-in succeeded. B. Salesforce assignment is missing. C. An account under another identifier may exist. D. Account-management history is uninspected.</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A is a confirmed finding. D identifies missing evidence. C is a hypothesis, a possible explanation that needs checking. B is not established because the assignment was not inspected.</p>
<p>Notice the difference between an unanswered question and an observed absence. They call for different next steps.</p>
<p>Keep those categories in your notes: findings support conclusions, hypotheses guide distinguishing checks, and missing evidence identifies what to request. Mixing them can make an unjustified correction look necessary.</p>
</div>
</details>

<a id="q28"></a>

### Q28. What a no-match result means

<p class="qb-question"><strong>Question:</strong> Support searches the intended Salesforce environment using employee Maya’s approved application identifier and finds no matching account. No other identifier or environment has been searched. Is the precise finding “no match within this check” or “no Salesforce account exists anywhere”?</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The precise finding is no match within this check. Its environment and identifier scope are part of the result.</p>
<p>An account might exist under another identifier or elsewhere, but neither possibility is confirmed. Obtain evidence of the intended record relationship before claiming more.</p>
<p>The scoped result is still useful. It tells the next investigator exactly which expected match was not found. Narrow evidence can justify another check without proving an unlimited absence.</p>
</div>
</details>

<a id="q29"></a>

### Q29. A possible identifier mismatch

<p class="qb-question"><strong>Question:</strong> A search of the intended Salesforce environment finds no account under Maya’s approved identifier. Account ownership and other identifiers have not been checked. Does the search prove an identifier mismatch, and what evidence would support that explanation?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It makes a mismatch one possible explanation, not a confirmed cause. A missing account or incomplete preparation could also fit the supplied result.</p>
<p>To support a mismatch, find a record reliably shown to belong to Maya, establish its actual identifier, and compare it with the approved value for the intended relationship. A similar display name is not enough.</p>
<p>The comparison could demonstrate a specific discrepancy. Until then, keep it as a hypothesis and request evidence that distinguishes alternatives.</p>
</div>
</details>

<a id="q30"></a>

### Q30. Choose the next evidence

<p class="qb-question"><strong>Question:</strong> Maya is approved to use production Salesforce. Her checked Okta sign-in works, but Salesforce entry is not established. The production search finds no account under her approved identifier; assignment and account-management history are unknown. Name two focused evidence requests and what each would answer.</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>First, request Maya's actual assignment to the production Salesforce integration. That answers whether the intended Okta access relationship is present or absent.</p>
<p>Second, identify how that Salesforce instance prepares accounts and request the relevant process result. Automated operations and a separate owner's manual preparation need different records.</p>
<p>Then inspect the intended target account. These checks distinguish an absent assignment from a present relationship with unfinished account preparation, rather than asking vaguely for more logs.</p>
</div>
</details>

<a id="q31"></a>

### Q31. Evaluate the password reset

<p class="qb-question"><strong>Question:</strong> Maya’s checked Okta sign-in succeeded. In the intended Salesforce environment, support found no account matching her approved identifier. Her Salesforce assignment and account-management history have not been inspected. A colleague proposes resetting her Okta password to fix the Salesforce complaint. Does the evidence justify that correction?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The checked Okta sign-in already succeeded. The unanswered questions concern the Salesforce relationship and account, not a demonstrated Okta credential failure.</p>
<p>A password reset changes credentials without explaining the scoped no-match result or establishing account preparation. Follow the assignment and account-management evidence first.</p>
<p>A later separate credential finding could call for another action. It is not supplied here. Choose a correction that follows the observed gap rather than use the same reset for every access complaint.</p>
</div>
</details>

<a id="q32"></a>

### Q32. Should Alex create another account?

<p class="qb-question"><strong>Question:</strong> Maya’s checked Okta sign-in succeeded. In the intended Salesforce environment, support found no account matching her approved identifier. Her Salesforce assignment and account-management history have not been inspected. Why is creating a new Salesforce account immediately premature?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The search did not find the expected match, but it did not establish that no existing account belongs to Maya. The intended preparation process and assignment are still unknown.</p>
<p>Creating another account could duplicate an existing record or bypass the approved process. First identify the correct relationship, account-management approach, and ownership evidence.</p>
<p>Creation can become appropriate when the requirement and findings support it. The aim is the correct account outcome, not simply an additional record that makes one search succeed.</p>
</div>
</details>

## Choose the check for the stated situation

<a id="q33"></a>

### Q33. The account exists but is disabled

<p class="qb-question"><strong>Question:</strong> Maya is an employee requesting Salesforce use. Support has verified the intended account belongs to her and is disabled. Her current access approval, the reason for disabling it, and the supported re-enabling process are not supplied. What is known, and what should be checked before enabling or creating an account?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Existence and the disabled state are established. The investigation now concerns whether access is approved and how that account's state should be maintained.</p>
<p>Ask why it was disabled and which owner or process can appropriately change it. Assignment and sign-in results may also need checks.</p>
<p>Do not assume disabled means broken. It may reflect an intended decision. A second account would also address the wrong question when the correct existing record is already identified.</p>
</div>
</details>

<a id="q34"></a>

### Q34. An absent assignment is now confirmed

<p class="qb-question"><strong>Question:</strong> The approved requirement says Maya should receive production Salesforce. Support confirms her assignment to that integration is absent, but no Salesforce target-account evidence is supplied. What discrepancy is established, and what remains unverified?</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The assignment is missing against the stated requirement. That supports a proposal to establish the approved relationship through its applicable process.</p>
<p>It does not establish whether an account exists or is enabled in Salesforce. Check expected account handling, the resulting assignment, any operation it triggers, and the intended destination record.</p>
<p>The unknown relationship has become a confirmed discrepancy. That makes the next action more specific while leaving the uninspected target outcome open.</p>
</div>
</details>

<a id="q35"></a>

### Q35. An existing assignment, a manual process

<p class="qb-question"><strong>Question:</strong> Maya is assigned Salesforce in Okta. The Salesforce owner confirms accounts are created manually, but neither a creation record nor Maya’s target account has been checked. Can support diagnose failed automated provisioning?</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No automated operation is supplied in this design. The stated account-preparation mechanism is manual.</p>
<p>Ask the responsible owner whether Maya's approved account request was received and completed, then inspect the intended Salesforce account. That follows the process actually used.</p>
<p>Assignment is useful evidence but not the owner's preparation result. A precise update says the relationship is present and the manual target-account outcome remains unverified, instead of inventing a failed automation.</p>
</div>
</details>

<a id="q36"></a>

### Q36. Account creation is verified

<p class="qb-question"><strong>Question:</strong> Support verifies Maya’s intended Salesforce account was created and is enabled. No attempt to enter Salesforce or perform her required business action has been checked. What can be reported as complete, and what needs further evidence?</p>

<details class="qb-answer" id="q36-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Report the confirmed account creation and enabled state. Those are meaningful completed account-management outcomes.</p>
<p>Application sign-in and the permissions for her required work remain unverified. A correctly prepared account can still encounter another condition when the person uses it.</p>
<p>Tell Maya the account preparation is confirmed and the next check concerns actual use. Keep the successful work without stretching it into a claim that every business capability is ready.</p>
</div>
</details>

<a id="q37"></a>

### Q37. A narrowly verified success

<p class="qb-question"><strong>Question:</strong> Maya’s approved task is reading Sales records in Salesforce. Support verifies the intended assignment and enabled account, then observes a new sign-in to that account and successful reading of the approved records. Does this verify her task, and does it establish every Salesforce action?</p>

<details class="qb-answer" id="q37-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It verifies the checked record-reading requirement for this person, account, and attempt. The evidence covers assignment, account state, entry, and the requested action.</p>
<p>It does not establish unrelated capabilities, such as administrative changes or a restricted approval. Those would have their own requirements and permission evidence.</p>
<p>A good closure states the successful task precisely. That is more useful than either refusing to recognize any progress or claiming unlimited access from one verified action.</p>
</div>
</details>

## Explain the journey and outcome

<a id="q38"></a>

### Q38. Explain the employee journey

<p class="qb-question"><strong>Question:</strong> A company uses Workday for employee HR data, Okta for identity and access management, and Salesforce for business work. Describe the intended journey for employee Maya and the separate outcomes to verify, allowing that her Salesforce account may already exist.</p>

<details class="qb-answer" id="q38-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Start with her approved employee information in Workday and its relevant representation in Okta. Verify the intended application assignment, the appropriate Salesforce account through its actual maintenance process, accepted application sign-in, and the permission for her work.</p>
<p>Those are connected responsibilities, not a mandatory account-creation order. The target might have been prepared earlier.</p>
<p>Explain who does what and check each relevant record or operation. The same reasoning works with automated preparation or a separate application owner.</p>
</div>
</details>

<a id="q39"></a>

### Q39. Repair an unsupported closure

<p class="qb-question"><strong>Question:</strong> Maya’s checked Okta sign-in succeeded. In the intended Salesforce environment, support found no account matching her approved identifier. Her Salesforce assignment and account-management history have not been inspected. No correction or follow-up is supplied. Rewrite this note: “Maya has no Salesforce account anywhere. Provisioning failed, so we reset her password and closed the ticket.”</p>

<details class="qb-answer" id="q39-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The note invents an unlimited absence, a cause, an action, and a successful closure. The facts support a scoped search result and unanswered process questions.</p>
<p>Try: “Maya's checked Okta sign-in succeeded. No Salesforce account matched her approved identifier in the intended environment. Assignment and account-management history remain uninspected. Support will obtain those records and the relevant target-account evidence before proposing a correction.”</p>
<p>That update leaves the case open for a concrete reason. It provides the next owner with findings and evidence requests rather than unsupported certainty.</p>
</div>
</details>

<a id="q40"></a>

### Q40. Explain the issue to Maya

<p class="qb-question"><strong>Question:</strong> Maya’s checked Okta sign-in succeeded. In the intended Salesforce environment, support found no account matching her approved identifier. Her Salesforce assignment and account-management history have not been inspected. Maya asks why support is not simply resetting her password again. Give her a friendly update explaining what works and the next justified checks.</p>

<details class="qb-answer" id="q40-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>You could say: “Your Okta sign-in worked in the attempt we checked. We still need to confirm your Salesforce assignment and how its account is prepared. The account search did not find a match under the expected identifier in the environment checked, so we will investigate that before choosing a fix.”</p>
<p>Then explain that changing the password would not answer those relationship and account questions.</p>
<p>The update acknowledges her experience and gives a concrete next step, without claiming an unknown cause or a result nobody verified.</p>
</div>
</details>

[Teaching explanations](answers/day-01.md) · [Day 1 lesson](../lessons/day-01-people-identities-access.md) · [Day 1 recap](../revision/day-01.md) · [Question bank](index.md)
