---
title: "Day 6 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 6
---

# Day 6: Questions

## Directory components and connections

<a id="q01"></a>

### Q01. Where the account remains

<p class="qb-question"><strong>Question:</strong> Jordan’s company uses Active Directory (AD) for directory accounts and Okta for identity management. An import reads his selected AD information into Okta, and the correct account association is confirmed. Did the AD account itself move into Okta?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Jordan's directory account remains in AD. Okta holds information associated with that account so it can represent and process the selected data.</p>
<p>One person can have linked records in different systems without those records becoming one object. Reading a source does not relocate its database.</p>
<p>Name the record being checked. The imported information and confirmed link are useful results, but they do not prove that every other operation involving Jordan's directory account succeeded.</p>
</div>
</details>

<a id="q02"></a>

### Q02. AD and a domain controller

<p class="qb-question"><strong>Question:</strong> Jordan signs in using his company’s Active Directory (AD) credentials. The request is handled by a selected domain controller (DC). How does the directory service differ from that server, and why identify the particular DC in an investigation?</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>AD is the directory service; the domain controller is a server running it. The controller can answer requests for directory information and evaluate the submitted domain credentials.</p>
<p>There may be more than one controller. 'AD did not answer' leaves out which server the agent tried to contact. Naming that controller helps the directory and network owners check the path used by Jordan's actual attempt.</p>
<p>Evidence for another controller or an earlier connection does not fill in this result. Keep the selected server, attempt and time together when asking what happened.</p>
</div>
</details>

<a id="q03"></a>

### Q03. The agent’s role

<p class="qb-question"><strong>Question:</strong> Okta receives Jordan’s sign-in information and sends a delegated password check through an Okta AD agent to Active Directory (AD). A domain controller runs the directory service. Is the agent that database or controller, and what does it do?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It is neither. The agent is separate software in the company's environment connecting Okta and AD for supported operations. It can run on a separate server.</p>
<p>In this path, it handles work from Okta, communicates with the controller, and returns the result. The controller evaluates the credentials.</p>
<p>Keep those jobs separate. A request reaching the agent does not prove its directory connection completed or that a credential answer was obtained.</p>
</div>
</details>

<a id="q04"></a>

### Q04. Domain, OU, and group

<p class="qb-question"><strong>Question:</strong> A company’s Active Directory stores Jordan’s user object within a domain, places it in an organizational unit (OU), and maintains group memberships separately. How do domain, OU, and group describe different organizational relationships?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Think of these as three different questions. The domain identifies the managed directory area. The OU tells us where Jordan's user object is organized inside it. The group tells us about a separate membership relationship used for access or administration.</p>
<p>Jordan can have an OU location and belong to groups at the same time. Being stored under an OU does not add him to a group, even if the names look alike.</p>
<p>If you are checking import scope, inspect the relevant directory location and selection. If you are checking group membership, inspect the group's members. One kind of evidence cannot answer both questions by itself.</p>
</div>
</details>

<a id="q05"></a>

### Q05. An OU name is not membership

<p class="qb-question"><strong>Question:</strong> Jordan’s user object in Active Directory is stored in an organizational unit (OU) named Sales. A separate directory group is also named Sales, but nobody has inspected its members. Does Jordan’s OU location prove he belongs to that group?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The OU organizes where the user object sits. Group membership is another relationship requiring its own evidence.</p>
<p>The shared name can make them look equivalent, but the name does not add Jordan as a member. Inspect the actual group if membership matters.</p>
<p>His OU can help explain whether an import selected his record. It cannot independently establish the access or administration relationship provided by the group.</p>
</div>
</details>

<a id="q06"></a>

### Q06. Read the communication direction

<p class="qb-question"><strong>Question:</strong> An Okta AD agent in the company environment exchanges work and results with Okta and separately communicates with Active Directory controllers. A diagram shows two-way information arrows. Must that diagram mean Okta opens a new inbound firewall connection to the agent?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Two-way information arrows do not mean that both sides must start new connections. The AD agent starts communication outward from the company environment to Okta, then receives work and returns results through that path.</p>
<p>The firewall question concerns how that communication starts. The diagram does not require Okta to open a new inbound connection through the company's firewall to the agent.</p>
<p>Now trace the other side: the agent separately needs to communicate with the relevant domain controller. That connection needs its own evidence. A request reaching the agent is not proof that AD received it or returned a credential result.</p>
</div>
</details>

<a id="q07"></a>

### Q07. One connection works

<p class="qb-question"><strong>Question:</strong> The company’s Okta AD agent is able to receive work from Okta. It also needs to contact a domain controller (DC), a server running Active Directory, but no result for that second connection is supplied. Is the agent-to-DC path verified?</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The supplied success concerns communication with Okta. The directory-side connection is another part of the route.</p>
<p>An agent can receive work while failing to complete its request to a controller. Obtain evidence for that actual path and attempt.</p>
<p>Follow each connection separately. General availability or progress to an intermediate component is useful context, but it cannot fill in an unobserved response from the next system.</p>
</div>
</details>

## Profile ownership and sign-in paths

<a id="q08"></a>

### Q08. Profile owner and password validator

<p class="qb-question"><strong>Question:</strong> Workday HR controls employee Jordan’s department. His configured Okta password path asks Active Directory (AD) to validate credentials through an agent. How can those responsibilities coexist, and does the password validator thereby own his HR department?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They answer different questions. Workday governs employee data; AD checks submitted credentials on the stated sign-in path.</p>
<p>The agent connects the identity service to the directory for that operation. Its password result does not change who controls department.</p>
<p>Keep maintenance and authentication separate. A correct department does not prove accepted credentials, and successful password validation does not establish that a current HR update reached the profile.</p>
</div>
</details>

<a id="q09"></a>

### Q09. Reading back from AD

<p class="qb-question"><strong>Question:</strong> A company designates Workday HR as Jordan’s profile source, with separately designated directory-owned fields supplied by Active Directory (AD). An AD import successfully reads his account information into Okta. Does reading it make every imported value authoritative?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Reading information does not replace the company's ownership settings. Workday remains the stated profile source, with the specified field-level exceptions.</p>
<p>Inspect the owner of the particular attribute before deciding which value should control it. A successful read and authority over a field are different facts.</p>
<p>Use the import result for what it establishes: data was read and processed under its scope. It does not transfer every maintenance responsibility to the directory.</p>
</div>
</details>

<a id="q10"></a>

### Q10. Priya’s path

<p class="qb-question"><strong>Question:</strong> Jordan’s Okta identity is associated with an Active Directory (AD) account and uses delegated directory-password validation. Priya’s approved contractor model is Okta-managed with no AD assignment. Does their shared use of Okta prove Priya uses Jordan’s password path?</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The actual account relationship and configured sign-in method determine the path. Shared use of the same identity service is not enough.</p>
<p>Inspect Priya's own configuration and attempt evidence before asking for directory results. Jordan's delegation facts belong to his stated model.</p>
<p>Do not turn one architecture example into a universal rule for all users. Different populations can coexist while using different maintenance and authentication arrangements.</p>
</div>
</details>

## Imports, scope, and associations

<a id="q11"></a>

### Q11. What succeeded?

<p class="qb-question"><strong>Question:</strong> An import from Active Directory (AD) into Okta completes and processes Jordan’s selected directory information. No submitted-password check or authentication response is supplied. What work succeeded, and is credential acceptance established?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The directory-data import succeeded under the supplied scope. It read and processed information so Okta could represent it.</p>
<p>That is not a password-validation result. Credentials are the information used to prove identity, and testing them asks the directory to do different work from reading account data.</p>
<p>Report the import precisely. A later sign-in needs its own attempt and returned result before acceptance can be claimed.</p>
</div>
</details>

<a id="q12"></a>

### Q12. The whole directory?

<p class="qb-question"><strong>Question:</strong> An Active Directory integration imports selected user and group organizational units (OUs) into Okta. The selected-population operation succeeds, but other directory locations are excluded. Does success establish that every directory object was imported?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Import scope identifies the population chosen for that operation. Success does not expand it to excluded locations.</p>
<p>Compare an expected record's actual location with the selected scope and processed results. A missing object could be outside the read population rather than absent from the directory.</p>
<p>Carry scope with the result. The operation can succeed while leaving other directory records completely uninspected.</p>
</div>
</details>

<a id="q13"></a>

### Q13. A user arrives, a group does not

<p class="qb-question"><strong>Question:</strong> An Active Directory import selects Jordan’s employee-user organizational unit but excludes a separate group OU. His user record appears in Okta; a group expected by support does not. Its actual directory location has not been checked. Is the group proven absent from AD?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The result establishes that this import did not supply the group. It does not establish directory absence.</p>
<p>Find the group in the correct directory and compare its location with the selected group OUs. Scope can explain an excluded record without a failed read or deleted object.</p>
<p>A missing imported result and a missing source record are different findings. Inspect the relevant source before treating them as the same outcome.</p>
</div>
</details>

<a id="q14"></a>

### Q14. Found versus correctly linked

<p class="qb-question"><strong>Question:</strong> An Okta import discovers an Active Directory record displaying Jordan Lee. Matching and confirmation evidence have not been reviewed. Does discovery alone establish that it is correctly associated with Jordan’s intended Okta identity?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Discovery says the operation found a record. Matching compares it with identities, and confirmation accepts an outcome through the applicable process.</p>
<p>The resulting association still needs evidence of the correct relationship. Similar display names do not independently establish ownership.</p>
<p>Do not treat a found record as a verified link. Obtain the identifier and relationship evidence before relying on that association for maintenance or authentication work.</p>
</div>
</details>

<a id="q15"></a>

### Q15. Import did not test the password

<p class="qb-question"><strong>Question:</strong> Jordan’s selected Active Directory data was imported successfully into Okta and correctly linked. In a later attempt, his configured directory-password sign-in fails. No credential result is yet supplied. Why does the completed import not resolve that complaint?</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The two operations asked different questions. The import asked for Jordan's directory information. The later sign-in asks AD whether the submitted credentials are acceptable for that attempt.</p>
<p>Reading his record successfully does not mean his password was tested or copied into Okta. It also does not guarantee that a connection used later is still working.</p>
<p>Keep the earlier success in the investigation, but follow the later password request separately. Identify the handling agent, selected controller and returned result, if any. That is the evidence needed to explain this sign-in complaint.</p>
</div>
</details>

## Follow delegated authentication

<a id="q16"></a>

### Q16. Explain delegation

<p class="qb-question"><strong>Question:</strong> Jordan enters his directory account name and password at Okta. For this configured path, Okta asks Active Directory (AD), through an agent, to check them and return a result. What does delegated authentication mean here?</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It means one system asks another to validate the user's credentials. AD performs this directory credential check, and Okta uses the returned result within its sign-in process.</p>
<p>The account name matters alongside the password. Delegation identifies who checks the proof; it does not establish that the request arrived or was accepted.</p>
<p>Follow the actual attempt and remaining requirements. A configured validation path is not itself a successful authentication outcome.</p>
</div>
</details>

<a id="q17"></a>

### Q17. Follow the logical sequence

<p class="qb-question"><strong>Question:</strong> Jordan’s password sign-in uses Okta, an AD agent, and an Active Directory domain controller (DC). Put these logical steps in order: DC evaluates credentials, Jordan submits information, result returns to Okta, agent receives and passes work, Okta continues or refuses under its requirements.</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Jordan submits information to Okta. Okta sends the delegated request to the agent, which passes it to the controller. AD evaluates the credentials, and the result returns through the agent to Okta. Okta then uses it under the applicable requirements.</p>
<p>That describes the intended logical sequence. Actual records establish which stages occurred in a particular attempt.</p>
<p>An arrow or predicted next step is not a completion result.</p>
</div>
</details>

<a id="q18"></a>

### Q18. Password acceptance and application use

<p class="qb-question"><strong>Question:</strong> For Jordan’s identified Okta sign-in attempt, Active Directory (AD) returns an accepted credential result through the agent. No remaining authentication, Salesforce entry, or business-permission evidence is supplied. Does that acceptance prove he completed his Salesforce work?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It verifies the credential-validation step for the checked attempt, not the entire application journey.</p>
<p>Remaining Okta requirements may apply. Assignment, target acceptance, and the application's permissions also need evidence where relevant to the task.</p>
<p>The narrow success is useful progress. Report it clearly, then continue to the outcomes required for the business goal rather than make password acceptance stand in for every later result.</p>
</div>
</details>

<a id="q19"></a>

### Q19. Another person’s success

<p class="qb-question"><strong>Question:</strong> Jordan reports a failed Active Directory password attempt through Okta. A colleague successfully uses a directory-password path during the same period. The user, handling agent, selected controller, and result for Jordan have not been compared. Does the colleague’s success resolve his attempt?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It establishes the colleague's result. It does not supply Jordan's credential decision or disprove his reported failure.</p>
<p>The event can become comparison evidence once the paths and context are understood. Jordan still needs records tied to his identity, directory association, attempt, and relevant components.</p>
<p>Keep people and operations separate even when timestamps look close. Success elsewhere is not confirmation that the affected request completed.</p>
</div>
</details>

## Import, validation, and synchronization

<a id="q20"></a>

### Q20. Classify the work

<p class="qb-question"><strong>Question:</strong> A company can read selected Active Directory data into Okta, ask AD to validate credentials during sign-in, or propagate a password change through supported configured software. Which work is import, delegated password authentication, and password synchronization?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Read the work as three ordinary requests. 'Read these directory records' is import. 'Check the credentials submitted for this sign-in' is delegated authentication. 'Carry this password change to the supported destination' is password synchronization.</p>
<p>All three can involve the same person's directory account, which is why saying 'the AD integration worked' is too broad. Ask which operation completed and what result was recorded.</p>
<p>A successful import does not supply a credential decision or a password-change result. A deployment can use several capabilities, but each needs its own configured path and evidence.</p>
</div>
</details>

<a id="q21"></a>

### Q21. Validation is not synchronization

<p class="qb-question"><strong>Question:</strong> Okta sends Jordan’s submitted directory credentials through an agent to Active Directory for validation. No password-change event or synchronization result is supplied. Does the request prove his password was copied or changed at another destination?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It asks for a decision about the submitted credentials, not a propagated change.</p>
<p>Password synchronization needs its own supported process, direction, destination, and result. Those facts are absent here.</p>
<p>Both activities involve passwords, but they do different work. Keep validation of an attempted sign-in separate from maintaining a changed credential elsewhere.</p>
</div>
</details>

<a id="q22"></a>

### Q22. Two agent names

<p class="qb-question"><strong>Question:</strong> An Okta deployment uses an AD agent for supported directory operations and documents a separate AD Password Sync Agent for relevant synchronization scenarios. Does the second name simply mean the same component, and what should an investigation identify?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The Password Sync Agent is a separate component for the relevant use cases. The needed components and direction depend on the actual synchronization design.</p>
<p>Identify the configured operation and responsible component rather than infer behavior from similar names. An ordinary import success does not show synchronization occurred.</p>
<p>You do not need every installation procedure to make this distinction. You need the purpose, configuration, and result for the work being investigated.</p>
</div>
</details>

<a id="q23"></a>

### Q23. Make a synchronization claim inspectable

<p class="qb-question"><strong>Question:</strong> A colleague says “Jordan’s passwords are synchronized,” but names no operation, direction, destination, configuration, or result. Jordan’s current sign-in question remains unresolved. What focused questions would make that claim useful?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Ask which password change was propagated, from where to where, through which supported configured process, and what result establishes it.</p>
<p>A verified synchronization can show a change traveled while a later authentication attempt still needs its own credential decision. The broad statement supplies neither result by itself.</p>
<p>Turn the assurance into an inspectable operation. That prevents an undefined integration claim from replacing the evidence needed for the current sign-in.</p>
</div>
</details>

## Investigate an unanswered request

<a id="q24"></a>

### Q24. Locate J-1’s failure

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). In attempt J-1, the agent receives the request but its connection to the selected DC times out before any credential result is obtained. Where is the first demonstrated failure, and is its underlying cause already established?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The demonstrated failure is the timed-out agent-to-controller connection. Receipt at the agent is supplied; an AD credential response is not.</p>
<p>Investigate that path for the identified attempt. A timeout means the expected result was not obtained within the allowed wait, not that a particular network cause is already confirmed.</p>
<p>The boundary is precise enough to request useful evidence without calling Jordan's password wrong or declaring a specific service defect.</p>
</div>
</details>

<a id="q25"></a>

### Q25. No result is not rejection

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). In attempt J-1, the agent receives the request but its connection to the selected DC times out before any credential result is obtained. Does this establish that the password is wrong, or that it is correct?</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither conclusion is established. The agent did not obtain an acceptance or rejection from the domain controller in this attempt.</p>
<p>Think about the difference between getting no answer to a question and getting an answer that says no. J-1 supplied no credential answer. Jordan's inability to sign in is real, but it does not tell us whether AD would have accepted the submitted password.</p>
<p>Investigate the timed-out agent-to-controller connection. Leave password validity unresolved until an actual credential result answers it; do not turn an unanswered check into either success or rejection.</p>
</div>
</details>

<a id="q26"></a>

### Q26. Earlier import I-1

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). Earlier import I-1 successfully processed his selected directory data. Later J-1 receives no credential answer because the agent-to-DC connection times out. Can I-1 fill in J-1’s missing result?</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. I-1 establishes an earlier data-read result, while J-1 concerns credential validation at another time.</p>
<p>The successful import does not remove the later timeout or provide a password decision. Keep operation labels and times beside their observations.</p>
<p>That lets both facts remain useful. Progress in one path cannot become an unobserved reply to another request.</p>
</div>
</details>

<a id="q27"></a>

### Q27. Choose the next evidence

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). In attempt J-1, the agent receives the request but its connection to the selected DC times out before any credential result is obtained. Which next request addresses the evidence: a password reset, or checks of the selected DC, network reachability, name resolution, and service availability?</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The focused connection evidence addresses the demonstrated boundary. Request the relevant agent, directory, and network observations for the path and time.</p>
<p>A password reset changes a credential while leaving the failed connection unexplained. The question does not establish a credential problem.</p>
<p>The proposed checks do not select a network correction in advance. They should distinguish the possible reasons that this request obtained no directory result.</p>
</div>
</details>

<a id="q28"></a>

### Q28. A timeout and its possible causes

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). In attempt J-1, the agent receives the request but its connection to the selected DC times out before any credential result is obtained. Does that alone prove a firewall blocked the request or a route was missing?</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A network control, routing problem, or unavailable service could explain a timeout, but the supplied result does not choose among them.</p>
<p>Obtain component and path evidence for this time and attempt. That narrows the next investigation without turning a plausible explanation into a finding.</p>
<p>The failure boundary can be clear while its cause remains open. The next check should help resolve that specific uncertainty.</p>
</div>
</details>

<a id="q29"></a>

### Q29. Resolution versus connection

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). In attempt J-1, the agent receives the request but its connection to the selected DC times out before any credential result is obtained. Is failed DNS name resolution already proven by the connection timeout?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. DNS name resolution is the lookup connecting a host name to a network address. A connection timeout is a different observation.</p>
<p>Resolution evidence can be requested as part of investigating the path, but it should not be reported as failed until the evidence supplies that result.</p>
<p>Likewise, a lookup failure is not a returned credential rejection. Describe the actual operation first, then select the check appropriate to its observed boundary.</p>
</div>
</details>

## Interpret a returned rejection

<a id="q30"></a>

### Q30. J-2 changes the next check

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). J-1 times out without a credential answer. A separate attempt J-2 reaches the DC and receives an explicit validation rejection, without a detailed reason. How do their next investigations differ?</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>For J-1, start with the connection that timed out. The agent received the work, but no directory credential answer came back. Request evidence for the selected agent-to-controller path at that time.</p>
<p>For J-2, AD did answer and rejected validation. Now inspect the detailed directory result, the intended account and submitted identifier, and the relevant credential or account conditions. A rejection is not automatically a mistyped password.</p>
<p>Both attempts leave Jordan unable to sign in, but they give us different next questions. Keep each result with its own attempt rather than use J-2's refusal as the answer J-1 never received.</p>
</div>
</details>

<a id="q31"></a>

### Q31. Rejection is not necessarily a typo

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). In J-2, the agent reaches the DC and gets a generic credential rejection. No detailed identifier, password, or account-condition finding is supplied. Does this prove Jordan mistyped the password?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The generic result may not distinguish an identifier issue, password issue, or account restriction.</p>
<p>Inspect the detailed directory decision and confirm the account involved before choosing a correction. There is a returned refusal, but its specific reason remains unknown.</p>
<p>Keep that distinction useful: the request reached a credential decision, so the next evidence concerns that decision rather than assuming an unanswered connection or a particular typo.</p>
</div>
</details>

<a id="q32"></a>

### Q32. An email-shaped sign-in name

<p class="qb-question"><strong>Question:</strong> Jordan’s Active Directory sign-in name is called a user principal name (UPN) and looks like an email address. His mailbox address and configured login mapping have not been compared. Does the UPN’s appearance establish they are identical or that a mismatch exists?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither follows from appearance alone. A UPN is a directory sign-in name often written in an email-like form, not automatic evidence of the mailbox address.</p>
<p>Compare the configured identifier with the intended directory account and approved values. Similar shapes do not make fields interchangeable.</p>
<p>No mismatch is supplied here. The useful action is a supported comparison, not declaring the identifier defective before its actual relationship is known.</p>
</div>
</details>

<a id="q33"></a>

### Q33. Do not rewrite the earlier attempt

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). J-1 obtains no credential result after a connection timeout; separate J-2 returns a credential rejection. Can support use J-2 to report that AD rejected J-1 too?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. J-2's refusal belongs to that attempt. It does not retroactively supply J-1's missing answer.</p>
<p>Report both precisely: the earlier request obtained no credential result, while the separate later request received a rejection. Their next checks can differ.</p>
<p>Compare attempts when useful without rewriting their observations. New evidence may advance an investigation, but it should not change what another request actually returned.</p>
</div>
</details>

## Verify the follow-up

<a id="q34"></a>

### Q34. The new routing finding

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). J-1 initially supplies only a connection timeout with no credential answer. Later, the network team establishes and corrects a missing route preventing reachability. Was the route cause already proven by the original timeout?</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It was a possibility until the new network evidence established it. The follow-up makes the cause more specific and supplies a correction action.</p>
<p>Preserve that progression: first the demonstrated connection boundary, then the verified route finding. The original timeout alone did not choose the cause.</p>
<p>A later confirmation is useful new evidence, not a reason to claim the initial packet contained more than it did.</p>
</div>
</details>

<a id="q35"></a>

### Q35. Read J-3’s success

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). The network team establishes and fixes a route issue. A new correlated attempt J-3 reaches the DC and receives accepted credentials. No remaining Okta or application-entry result is supplied. What recovery is verified?</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The follow-up supports recovery of the checked connection and successful directory credential validation in J-3.</p>
<p>It does not verify the remaining identity-service requirements or entry to the business application. Continue through those boundaries if usable application access is the requested outcome.</p>
<p>Report the recovered step clearly. The new credential answer is meaningful evidence, while the wider journey remains unverified rather than automatically complete.</p>
</div>
</details>

<a id="q36"></a>

### Q36. Repair an overbroad closure

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). A route defect is corrected and new J-3 returns accepted directory credentials. Remaining Okta checks, Salesforce entry, and permissions are unverified. Improve: “The route is fixed, so Jordan has full Salesforce access now.”</p>

<details class="qb-answer" id="q36-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “The checked agent-to-directory route problem was corrected. In J-3, AD accepted Jordan's credentials. Remaining Okta requirements, Salesforce entry, and the relevant permissions have not yet been verified.”</p>
<p>That update tells the next owner what recovered and where the evidence stops. The supplied results concern connection and password validation.</p>
<p>Do not turn a verified authentication step into an unlimited application claim. The business outcome needs its own receiving-system evidence.</p>
</div>
</details>

## Compare architectures

<a id="q37"></a>

### Q37. Another architecture, same distinction

<p class="qb-question"><strong>Question:</strong> At a company, Active Directory (AD) is both the employee profile source and the validator on an Okta delegated-password path. Directory imports read data, while sign-in requests ask for credential decisions. Does the shared source system make those operations equivalent?</p>

<details class="qb-answer" id="q37-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The import carries selected profile information toward Okta. The delegated request asks AD to evaluate credentials for an attempt and return a result.</p>
<p>AD has responsibilities in both paths, but each still needs its own configuration and observations. Successful data reading does not establish authentication.</p>
<p>The distinction also holds when another system owns the profile. Sharing or separating the owner does not change the purpose of the two operations.</p>
</div>
</details>

## Handoff, scope, and explanation

<a id="q38"></a>

### Q38. A useful handoff

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). In attempt J-1, the agent receives the request but its connection to the selected DC times out before any credential result is obtained. What should a handoff to the directory and network owners identify, and does the investigation require Jordan’s password in the ticket?</p>

<details class="qb-answer" id="q38-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Identify the user and association, configured directory integration, handling agent, selected controller, and time. State the observed timeout and lack of a credential result.</p>
<p>Request corresponding reachability and service evidence. Those details give the owners a specific operation and path to trace.</p>
<p>The handoff does not need Jordan's password. Relevant connection and returned-result evidence answer the next question without copying the credential into the incident record.</p>
</div>
</details>

<a id="q39"></a>

### Q39. One user or several?

<p class="qb-question"><strong>Question:</strong> Several users report directory-password failures through the same Okta AD agent during one period. Active Directory controller and attempt results remain incomplete. Does that pattern prove the agent is the cause? Would one reported user instead prove a bad password?</p>

<details class="qb-answer" id="q39-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither pattern proves the cause. Several affected users make the shared path useful to inspect, while one user still needs their own account and attempt evidence.</p>
<p>Pair scope with the actual timeout or credential results. A returned rejection and an unanswered connection lead to different questions regardless of the number of reports.</p>
<p>Use the pattern to choose focused comparisons, not to replace operation evidence with a general diagnosis.</p>
</div>
</details>

<a id="q40"></a>

### Q40. Explain Jordan’s story

<p class="qb-question"><strong>Question:</strong> Jordan uses an Okta sign-in path that asks Active Directory (AD), through an agent, to validate his password at a domain controller (DC). His directory data is imported and correctly linked. J-1 gets no DC answer after a timeout. A route cause is later established and fixed; J-3 returns accepted credentials. Remaining sign-in and application outcomes are absent. Give Jordan a friendly explanation of that sequence.</p>

<details class="qb-answer" id="q40-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>You could say: 'We confirmed that your directory information was imported and linked to the right Okta user. Checking your password is separate work. In the first attempt, the request reached the AD agent, but the agent did not get an answer from the directory server.'</p>
<p>Then explain the verified follow-up: 'The network team found and fixed a route problem. In the new attempt we checked, AD accepted your credentials. We still need to check the remaining sign-in requirements and whether you can enter the application you need.'</p>
<p>That gives Jordan a reason for the earlier failure without claiming his password was wrong. It recognizes the recovered password-validation step while keeping the unverified application outcome open.</p>
</div>
</details>

[Day 6 lesson](../lessons/day-06-active-directory.md) · [Reasoning exercises](../exercises/day-06.md) · [Day 6 recap](../revision/day-06.md) · [Question bank](index.md)
