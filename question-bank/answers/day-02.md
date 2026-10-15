---
title: "Day 2 teaching explanations"
parent: "Day 2 practice bank"
grand_parent: "Revise, Test, and Learn"
nav_order: 1
---

# Day 2: Explanations

<details class="qb-answer" id="q01">
<summary>Q01. Request and response</summary>
<p class="qb-question"><strong>Question:</strong> Maya opens Expense, a company application for handling expenses, in her web browser. The browser asks the application for a page, and the application replies with that page. Which message is the request and which is the response?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The browser's message asking for the page is the request. Expense's reply is the response.</p>
<p>Think of the exchange as a short conversation: “Please give me this page,” followed by the application's answer. The request tells us what was asked; the response tells us how the receiving system handled it.</p>
<p>Read the two together. A reply makes more sense when you know which system answered and which operation it was being asked to perform.</p>
</div>
<p><a href="../day-02.md#q01">Return to Q01</a> · <a href="../../lessons/day-02-requests-and-evidence.md#your-browser-asks-a-server-responds">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q02">
<summary>Q02. Client and server</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s browser sends a web request to Expense, a business application running on company servers. Expense handles the request and replies. Which participant is the client and which is the server? Do those labels describe Maya’s account state?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The browser is the client making this request. The receiving Expense system is the server handling it. These names describe roles in the exchange, not whether Maya's account is enabled.</p>
<p>The server might return a page, direct the browser elsewhere, or refuse the operation. Naming the participants helps you follow where the message went and which system produced the result.</p>
<p>Account state and usable access still need their own evidence. A client/server label does not supply them.</p>
</div>
<p><a href="../day-02.md#q02">Return to Q02</a> · <a href="../../lessons/day-02-requests-and-evidence.md#your-browser-asks-a-server-responds">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q03">
<summary>Q03. A client without a browser</summary>
<p class="qb-question"><strong>Question:</strong> A configured software connection sends a request to a business application to update employee Maya’s account. Maya does not open a browser or carry the message. Can this still be a client/server exchange?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Yes. Software other than a browser can be a client. Here the configured connection sends the request, and the application acts as the receiving server.</p>
<p>The systems can communicate directly for their supported account-management work. Maya does not need to visit a page for that request to occur.</p>
<p>Identify the sender, destination, and purpose. An account update and a browser sign-in can both use requests and responses while doing different work and needing different result evidence.</p>
</div>
<p><a href="../day-02.md#q03">Return to Q03</a> · <a href="../../lessons/day-02-requests-and-evidence.md#compare-a-redirect-with-account-management">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q04">
<summary>Q04. One screen, several exchanges</summary>
<p class="qb-question"><strong>Question:</strong> Maya uses a web application that loads a page, retrieves data, and submits a form. The page appears as one screen to her. Is that enough to treat everything she sees as the result of one HTTP request?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. HTTP is the protocol used for web requests and responses, and one visible page can involve several of those exchanges.</p>
<p>The page might load successfully while a later data request or form submission fails. Both observations can be true without contradiction.</p>
<p>Find the request relevant to the reported problem and the response belonging to it. The screen is Maya's overall experience; the individual exchanges show which parts of that experience worked.</p>
</div>
<p><a href="../day-02.md#q04">Return to Q04</a> · <a href="../../lessons/day-02-requests-and-evidence.md#your-browser-asks-a-server-responds">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q05">
<summary>Q05. HTTPS and application access</summary>
<p class="qb-question"><strong>Question:</strong> Maya opens a business application using an HTTPS address. No authentication result, application permission, or completed business action is supplied. What does protected communication tell you, and can it establish those other outcomes?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>HTTPS protects communication in transit. It does not by itself establish who successfully signed in, what that person may do, or whether a business action completed.</p>
<p>A protected connection can carry a sign-in form, a successful result, or a refusal. The content and receiving system's decision still matter.</p>
<p>Keep the transport property separate from the application result. To claim a completed task, inspect the relevant request, response, and actual outcome rather than rely on the address starting with HTTPS.</p>
</div>
<p><a href="../day-02.md#q05">Return to Q05</a> · <a href="../../lessons/day-02-requests-and-evidence.md#your-browser-asks-a-server-responds">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q06">
<summary>Q06. Read the address</summary>
<p class="qb-question"><strong>Question:</strong> A browser requests the fictional expense-application address <code>https://expenses.northbridge.example/start?view=home</code>. A URL describes a web destination and request information. Identify its scheme, host, path, and query parameter, and explain the job of each.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The scheme is https, telling the browser how to communicate. The host is expenses.northbridge.example, naming the destination. The path is /start, identifying the requested resource there. The query parameter is view with value home, supplying additional information.</p>
<p>Read the pieces as directions rather than a completed result. They describe what the browser is asking and where it is asking it.</p>
<p>The server's reply is still needed to establish how that request was handled.</p>
</div>
<p><a href="../day-02.md#q06">Return to Q06</a> · <a href="../../lessons/day-02-requests-and-evidence.md#read-the-destination-before-interpreting-the-result">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q07">
<summary>Q07. Which host replied?</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s company uses an identity service to handle sign-in and a separate Expense application for business work. The identity-service page loads successfully, but Expense later refuses its request. Why must support identify the responding host for each result?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A host names a destination in the web exchange. These two results came from different systems handling different requests.</p>
<p>Loading the identity-service page does not establish Expense's later acceptance. Both the page success and application refusal may be accurate observations.</p>
<p>Attach each result to its host and purpose. Then follow the progress into the refused request and obtain the evidence needed there, rather than choose one general success or failure for the whole journey.</p>
</div>
<p><a href="../day-02.md#q07">Return to Q07</a> · <a href="../../lessons/day-02-requests-and-evidence.md#read-the-destination-before-interpreting-the-result">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q08">
<summary>Q08. Path and query</summary>
<p class="qb-question"><strong>Question:</strong> A browser requests <code>https://reports.example/reports?department=Finance</code> from a business application. How do the <code>/reports</code> path and <code>department=Finance</code> query parameter contribute different information, and do they establish what the server decided?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The path identifies the requested resource or operation at that host. The query carries additional information: the parameter department has the value Finance.</p>
<p>Those pieces describe the request, not a complete account of the server's response. The application could handle the supplied parameter in different ways according to its design.</p>
<p>Read the reply before claiming an outcome. A requested view or submitted value is not automatically a stored change or an accepted permission decision.</p>
</div>
<p><a href="../day-02.md#q08">Return to Q08</a> · <a href="../../lessons/day-02-requests-and-evidence.md#read-the-destination-before-interpreting-the-result">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q09">
<summary>Q09. A department in the URL</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s browser sends a business-application request whose URL includes <code>department=Finance</code>. No update operation, response, or account read is supplied. Does that parameter prove her stored department was changed to Finance?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It proves that the request carried Finance as query information. It does not establish that the application changed Maya's stored account data.</p>
<p>The parameter might select a view or have some other supported purpose. Its presence alone does not choose the server's behavior.</p>
<p>For a stored-change claim, inspect the relevant operation result and intended account afterward. Keep the observation narrow, then ask what evidence would show what the receiving application actually did.</p>
</div>
<p><a href="../day-02.md#q09">Return to Q09</a> · <a href="../../lessons/day-02-requests-and-evidence.md#read-the-destination-before-interpreting-the-result">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q10">
<summary>Q10. A similarly named environment</summary>
<p class="qb-question"><strong>Question:</strong> The company keeps separate test and production instances of Expense. Maya reports a failure in production, the live business environment. Support finds a successful response from test but no result for her production attempt. Can the test success settle her report?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It establishes the checked request's result in test. Production has separate configuration, records, and attempt evidence.</p>
<p>The test success may help with a comparison once the relevant differences are understood. It still cannot replace Maya's production result.</p>
<p>Identify the intended instance and actual attempt before using evidence. Similar application names do not make two environments one destination.</p>
</div>
<p><a href="../day-02.md#q10">Return to Q10</a> · <a href="../../lessons/day-02-requests-and-evidence.md#match-the-evidence-to-the-right-attempt">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q11">
<summary>Q11. GET and POST</summary>
<p class="qb-question"><strong>Question:</strong> A support analyst examines two HTTP messages to a business application, one using GET and one using POST. At a general level, what do those methods ask the server to do, and what else identifies the actual business operation?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>GET generally requests a resource such as a page or information. POST submits information for processing.</p>
<p>The destination, endpoint, content, and purpose still matter. An endpoint is an address for an operation; a POST to a sign-in form asks for different work from a request to create an account.</p>
<p>Treat the method as one part of the message. It does not identify every business task or establish that the task succeeded.</p>
</div>
<p><a href="../day-02.md#q11">Return to Q11</a> · <a href="../../lessons/day-02-requests-and-evidence.md#what-the-request-is-asking-for">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q12">
<summary>Q12. Does POST mean account creation?</summary>
<p class="qb-question"><strong>Question:</strong> An activity record shows that software sent an HTTP POST to a business application. The endpoint, request content, response, and target account have not been inspected. Can support conclude an account was created?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. POST alone does not establish that account creation was the requested operation. Even a confirmed create request would still need its result checked.</p>
<p>Identify what was sent and which endpoint handled it, then inspect the response and relevant target record. Sending and successful completion are different observations.</p>
<p>Do not combine purpose and success into one method name. The business task and its outcome need their own evidence.</p>
</div>
<p><a href="../day-02.md#q12">Return to Q12</a> · <a href="../../lessons/day-02-requests-and-evidence.md#what-the-request-is-asking-for">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q13">
<summary>Q13. Headers and body</summary>
<p class="qb-question"><strong>Question:</strong> A web message has headers and a body. For example, a redirect reply contains a Location header, while another reply carries page content in its body. How do headers and body serve different jobs?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Headers carry information about the message. The body carries content such as returned page data or submitted form values.</p>
<p>For the redirect, Location gives the next address. In a refusal, the body might contain a detailed explanation needed to understand the result.</p>
<p>You do not need to memorize every field before investigating. Read the parts that answer what was requested and what the receiver reported, keeping each value attached to its role.</p>
</div>
<p><a href="../day-02.md#q13">Return to Q13</a> · <a href="../../lessons/day-02-requests-and-evidence.md#what-the-request-is-asking-for">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q14">
<summary>Q14. Read the request line</summary>
<p class="qb-question"><strong>Question:</strong> A fictional expense application receives this simplified request: <code>GET /start?view=home HTTP/1.1</code> with <code>Host: expenses.northbridge.example</code>. What do these lines describe, and is HTTP/1.1 a result saying the user authenticated?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They describe the method, requested path and query, HTTP version, and destination host. Together they identify what resource was requested from which system.</p>
<p>HTTP/1.1 names the protocol version used in this example. It is not an account state or an authentication result.</p>
<p>Now read the response for this request. The request lines give that result context, but they cannot prove a later sign-in or business action completed.</p>
</div>
<p><a href="../day-02.md#q14">Return to Q14</a> · <a href="../../lessons/day-02-requests-and-evidence.md#a-response-can-send-the-browser-elsewhere">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q15">
<summary>Q15. Read a redirect reply</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s browser asks Expense, a business application, for its start page. Expense replies <code>302 Found</code> with <code>Location: https://identity.example/signin</code>, a company identity-service address. What instruction does the reply give, and what is not yet verified?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It directs the browser to the address in Location. That is a redirect: a response telling the browser where to go next.</p>
<p>The instruction does not establish that the next page responded, that Maya completed sign-in, or that any account was created. Those are later results to inspect.</p>
<p>Follow the exchange as a conversation: the browser asks for Expense's page, and Expense supplies another destination. The next request and its reply remain separate evidence.</p>
</div>
<p><a href="../day-02.md#q15">Return to Q15</a> · <a href="../../lessons/day-02-requests-and-evidence.md#a-response-can-send-the-browser-elsewhere">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q16">
<summary>Q16. Who makes the next request?</summary>
<p class="qb-question"><strong>Question:</strong> In a browser-based sign-in journey, Expense replies to Maya’s browser with a redirect to the company’s identity service. In this stated flow, who sends the next web request: Expense or the browser?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The browser sends it. Expense supplies the direction in its reply, and the browser follows that direction by requesting the new destination.</p>
<p>Follow the participants step by step: browser to Expense, Expense back to browser, then browser to the identity service.</p>
<p>That sequence is different from a backend account-management request sent directly between systems. Naming the sender on each step keeps a sign-in journey from being mistaken for an account update.</p>
</div>
<p><a href="../day-02.md#q16">Return to Q16</a> · <a href="../../lessons/day-02-requests-and-evidence.md#a-response-can-send-the-browser-elsewhere">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q17">
<summary>Q17. Redirect or provisioning?</summary>
<p class="qb-question"><strong>Question:</strong> Maya’s browser follows a redirect from a business application to the company identity service. No account-management operation or target-account record is supplied. Does the successful browser movement prove the application created her account?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It demonstrates the observed movement to another web destination. Account creation needs a relevant account-management operation and result.</p>
<p>A redirect asks the browser to visit an address. Provisioning is work to create or maintain an account through a supported process, which may happen separately between software systems.</p>
<p>Both can support the same person's access, but success in one does not establish the other's completion. Identify the work the message actually requested.</p>
</div>
<p><a href="../day-02.md#q17">Return to Q17</a> · <a href="../../lessons/day-02-requests-and-evidence.md#compare-a-redirect-with-account-management">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q18">
<summary>Q18. The redirect succeeded; did the journey?</summary>
<p class="qb-question"><strong>Question:</strong> A browser receives a 302 redirect from one server to another address. No evidence shows the next request or the next server’s response. What progress can support report without claiming the whole web journey succeeded?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Report that the first server returned the redirect instruction. The next destination's result remains unverified.</p>
<p>The browser may be expected to follow it, but an expected next step is not an observed completion. Obtain the next request and response if that stage matters to the problem.</p>
<p>This describes useful progress accurately: the journey has a confirmed direction. It does not yet have a confirmed final result.</p>
</div>
<p><a href="../day-02.md#q18">Return to Q18</a> · <a href="../../lessons/day-02-requests-and-evidence.md#a-status-code-describes-a-requests-result">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q19">
<summary>Q19. A successful sign-in form</summary>
<p class="qb-question"><strong>Question:</strong> Maya requests a sign-in page from the company’s identity service. It returns HTTP 200 with a form, but she has not submitted credentials or completed another authentication interaction. Did loading the form or authenticating Maya succeed?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Loading the form succeeded. The 200 response concerns that page request, not an authentication interaction that has not occurred.</p>
<p>Authentication means establishing evidence about who is signing in. Maya still needs to complete the applicable proof, and the relevant system must accept it.</p>
<p>Keep the task beside the status. A successful reply delivering a form is not a universal statement that the user is authenticated or can already use the business application.</p>
</div>
<p><a href="../day-02.md#q19">Return to Q19</a> · <a href="../../lessons/day-02-requests-and-evidence.md#a-status-code-describes-a-requests-result">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q20">
<summary>Q20. A 200 response with an error page</summary>
<p class="qb-question"><strong>Question:</strong> Maya requests a business-application page. The HTTP response is 200, but the returned page describes an application-level problem and her intended task is not completed. Should support ignore the page because the status looks successful?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Read the status and the returned content together. A server can deliver a page successfully while that page reports a problem with the business goal.</p>
<p>Identify the intended operation and the application-level result. The status supplies information about the particular request, not a guarantee of every outcome Maya wanted.</p>
<p>The response body is evidence too. Disregarding it because of one number can hide the detail needed to explain the user's experience.</p>
</div>
<p><a href="../day-02.md#q20">Return to Q20</a> · <a href="../../lessons/day-02-requests-and-evidence.md#a-status-code-describes-a-requests-result">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q21">
<summary>Q21. What does 403 explain?</summary>
<p class="qb-question"><strong>Question:</strong> Expense, a business application, returns HTTP 403 and “We could not accept the sign-in information” for Maya’s request. No detailed rejection reason is supplied. Are wrong password, missing permission, or malformed sign-in information confirmed causes?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The request was refused, and the text reports a sign-in-information rejection. It does not establish which of those proposed causes explains it.</p>
<p>Ask for the detailed application rejection and the corresponding exchange for this person, instance, and attempt. Those records help distinguish the alternatives.</p>
<p>The refusal is a finding. Its root cause, the underlying reason for it, remains unresolved. Choosing a familiar fix now would add certainty the generic message does not provide.</p>
</div>
<p><a href="../day-02.md#q21">Return to Q21</a> · <a href="../../lessons/day-02-requests-and-evidence.md#follow-mayas-attempt-one-step-at-a-time">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q22">
<summary>Q22. Where observed, where caused</summary>
<p class="qb-question"><strong>Question:</strong> In a correlated browser sign-in attempt, the identity-service steps succeed and a business application is the first system shown refusing the arriving information. No detailed rejection analysis is supplied. Does that prove the underlying defect originated inside the application?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It locates where failure was observed, not necessarily where the cause began. The application might reject information produced earlier, or its own configuration might disagree with that information.</p>
<p>Neither explanation is established here. Compare the relevant exchange with the application's requirements and detailed rejection evidence.</p>
<p>The boundary is useful progress without being a complete diagnosis. Keep it clear while requesting the evidence needed to locate the actual defect.</p>
</div>
<p><a href="../day-02.md#q22">Return to Q22</a> · <a href="../../lessons/day-02-requests-and-evidence.md#follow-mayas-attempt-one-step-at-a-time">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q23">
<summary>Q23. Read JSON structure</summary>
<p class="qb-question"><strong>Question:</strong> An event is stored as JSON, a structured text format. The selected excerpt is <code>{"actor":{"displayName":"Maya Rao"},"target":[{"displayName":"Expense"}]}</code>. What do braces and square brackets tell you, and where do the two display names belong?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Braces group fields into an object. Square brackets contain a list. Actor is an object with displayName Maya Rao. Target is a list containing an object with displayName Expense.</p>
<p>Read the nesting as organized information, not code to memorize. The structure tells you which value belongs to which field.</p>
<p>An event records an occurrence, so the next investigation needs its action, outcome, identifiers, and context. Structure helps locate those facts but does not supply omitted results.</p>
</div>
<p><a href="../day-02.md#q23">Return to Q23</a> · <a href="../../lessons/day-02-requests-and-evidence.md#read-an-event-as-a-sentence-first">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q24">
<summary>Q24. Translate the event</summary>
<p class="qb-question"><strong>Question:</strong> Okta is the company’s identity service. Its selected event fields show <code>eventType = user.authentication.sso</code>, actor Maya Rao, target Expense, and <code>outcome.result = SUCCESS</code>. SSO means single sign-on. No application acceptance or attempt-correlation evidence is included. Translate the record into one careful sentence.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Okta recorded a successful application single-sign-on event associated with Maya Rao and Expense.”</p>
<p>That names the recorded action, actor, target, and result. It does not add Expense acceptance or identify which of Maya's possible attempts the event belongs to.</p>
<p>Next, obtain the identifiers, timing, and relevant application records if the ticket needs those outcomes. A clear sentence makes the record useful without extending its evidence beyond the selected fields.</p>
</div>
<p><a href="../day-02.md#q24">Return to Q24</a> · <a href="../../lessons/day-02-requests-and-evidence.md#read-an-event-as-a-sentence-first">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q25">
<summary>Q25. Who is the actor?</summary>
<p class="qb-question"><strong>Question:</strong> Alex is an administrator who updates employee Maya’s account. The resulting account-maintenance event includes actor and target fields. Must actor name Maya because the support ticket concerns her?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Actor describes who or what performed the recorded action. In this supplied situation, Alex performs it; Maya's account is the affected record.</p>
<p>An automated process could also be an actor in another event. Read the actual entries and surrounding context rather than assigning roles from the ticket title.</p>
<p>This distinction prevents an administrator's maintenance action from being mistaken for Maya's sign-in. The person with the problem is not always the person or software that acted.</p>
</div>
<p><a href="../day-02.md#q25">Return to Q25</a> · <a href="../../lessons/day-02-requests-and-evidence.md#read-an-event-as-a-sentence-first">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q26">
<summary>Q26. A target list</summary>
<p class="qb-question"><strong>Question:</strong> A support analyst reads one selected Okta event whose target list contains a single application entry. The full target structure of other events has not been inspected. Does this establish that every event has exactly one target?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A target list can contain several affected objects. One selected entry does not define every event's contents.</p>
<p>Inspect the relevant event and identify which entries answer the investigation question. Display names can orient you, while available identifiers and context distinguish the actual objects.</p>
<p>The example supplies one observed list, not a universal limit. Reading the record field by field keeps its particular contents separate from assumptions about other occurrences.</p>
</div>
<p><a href="../day-02.md#q26">Return to Q26</a> · <a href="../../lessons/day-02-requests-and-evidence.md#read-an-event-as-a-sentence-first">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q27">
<summary>Q27. The meaning of outcome.result</summary>
<p class="qb-question"><strong>Question:</strong> For one explicitly correlated attempt, Okta records a single-sign-on event with <code>outcome.result = SUCCESS</code>, then Expense refuses the arriving sign-in request. Okta and Expense are separate services. Does the success erase the refusal?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Outcome.result belongs to the action recorded by that event. Expense's refusal belongs to a separate application request.</p>
<p>Both can be correct: the identity service reports its successful SSO step, while the application rejects the information it receives afterward.</p>
<p>Preserve both observations and inspect the exchange at that boundary. Discarding the refusal would hide why the overall business goal is unfinished. One recorded success is not a result for every later system.</p>
</div>
<p><a href="../day-02.md#q27">Return to Q27</a> · <a href="../../lessons/day-02-requests-and-evidence.md#read-an-event-as-a-sentence-first">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q28">
<summary>Q28. A selected excerpt is incomplete</summary>
<p class="qb-question"><strong>Question:</strong> Maya reports a failed Expense attempt. A selected event excerpt names Maya and Expense but provides no usable time, full identifiers, or request context. Does it independently establish that the event belongs to her reported attempt?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It supplies selected details, not a verified relationship to this attempt. Maya may have opened the same application more than once.</p>
<p>Obtain timing, identifiers, and request context that connect the actual records. Display names alone may not uniquely identify either the objects or the activity.</p>
<p>If a case explicitly supplies correlation, use it. Here that relationship is absent, so leave it unverified instead of building one story from familiar labels.</p>
</div>
<p><a href="../day-02.md#q28">Return to Q28</a> · <a href="../../lessons/day-02-requests-and-evidence.md#match-the-evidence-to-the-right-attempt">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q29">
<summary>Q29. Someone else succeeded</summary>
<p class="qb-question"><strong>Question:</strong> Maya reports that Expense refused her sign-in. Support finds a successful event for Priya, a different user, accessing Expense. No result tied to Maya’s attempt is supplied. Does Priya’s success resolve Maya’s complaint?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It supplies a result for Priya, not Maya. It cannot establish Maya's acceptance or disprove her refusal.</p>
<p>The event might be useful comparison evidence once the relevant context and requirements are understood. It still cannot replace records for the affected person and attempt.</p>
<p>First connect evidence to the intended identity and activity. A search full of successes does not mean every user's request must have worked.</p>
</div>
<p><a href="../day-02.md#q29">Return to Q29</a> · <a href="../../lessons/day-02-requests-and-evidence.md#match-the-evidence-to-the-right-attempt">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q30">
<summary>Q30. Same person, another application</summary>
<p class="qb-question"><strong>Question:</strong> Maya reports failed entry to Expense. A successful event names Maya but targets a different business application. Expense’s own result has not been checked. Can the event be used as Expense acceptance evidence?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The person matches, but the target and operation do not. The event describes its own recorded action.</p>
<p>Find the intended Expense instance and the corresponding result for the reported attempt. An actor name is only one part of the connection.</p>
<p>Carry the whole context with the outcome: person, application, activity, and time. Matching a familiar field does not turn unrelated evidence into confirmation of this ticket.</p>
</div>
<p><a href="../day-02.md#q30">Return to Q30</a> · <a href="../../lessons/day-02-requests-and-evidence.md#match-the-evidence-to-the-right-attempt">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q31">
<summary>Q31. Same person and app, another time</summary>
<p class="qb-question"><strong>Question:</strong> Two records mention Maya and Expense. Their displayed clock times look similar, but their time zones, attempt identifiers, and sequence have not been compared. May support treat them as one attempt solely from that appearance?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Establish the relationship first. The same person can try the same application several times, and similar clock displays can describe different moments when time zones differ.</p>
<p>Compare the actual timestamps, zones, available identifiers, and sequence. Correlation means connecting records belonging to the same activity.</p>
<p>It does not mean selecting entries that look alike. A supported connection lets each result contribute without borrowing success or failure from another attempt.</p>
</div>
<p><a href="../day-02.md#q31">Return to Q31</a> · <a href="../../lessons/day-02-requests-and-evidence.md#match-the-evidence-to-the-right-attempt">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q32">
<summary>Q32. Do both systems share one ID?</summary>
<p class="qb-question"><strong>Question:</strong> Okta and Expense keep separate records of a user’s sign-in journey. Their event identifiers may use different formats. Must they automatically share one identical ID before support can relate the observations?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Do not assume a common identifier. Depending on the available evidence, request context, application references, timing, and sequence may support the relationship.</p>
<p>Use the values actually supplied by the systems. If the connection cannot yet be established, record that missing correlation rather than invent an identical ID.</p>
<p>The goal is a justified relationship between occurrences. Different identifier formats neither automatically disprove a link nor prove one.</p>
</div>
<p><a href="../day-02.md#q32">Return to Q32</a> · <a href="../../lessons/day-02-requests-and-evidence.md#match-the-evidence-to-the-right-attempt">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q33">
<summary>Q33. Searching only for failures</summary>
<p class="qb-question"><strong>Question:</strong> In one correlated Expense sign-in journey, successful Okta authentication and single-sign-on steps precede an application refusal. System Log is Okta’s event record. Why could a search showing only failure outcomes miss useful evidence?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It can hide the successful steps that establish how far the journey progressed. Those results do not close the ticket, but they help locate the later failure boundary.</p>
<p>Choose the person, application, time window, and relevant actions rather than remove everything labeled success. Then combine the Okta records with the application's own rejection evidence.</p>
<p>A useful search answers the sequence question. The identity service may not hold the full detail of a refusal made by another application.</p>
</div>
<p><a href="../day-02.md#q33">Return to Q33</a> · <a href="../../lessons/day-02-requests-and-evidence.md#choose-a-search-that-answers-the-question">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q34">
<summary>Q34. An empty search</summary>
<p class="qb-question"><strong>Question:</strong> Support searches Okta’s System Log for Maya’s reported Expense sign-in and finds no matching event. The time range, time zone, filters, and identifiers have not been verified against the report. Is the attempt proven never to have occurred?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The finding is that this query did not locate a match within its selected scope. The query may not yet fit the reported activity.</p>
<p>Check timing, zones, filters, identifiers, and available application evidence before making a broader absence claim.</p>
<p>An empty search and a confirmed absence are different observations. Keeping that distinction helps you refine the next check instead of using a limited result to dismiss the user's report.</p>
</div>
<p><a href="../day-02.md#q34">Return to Q34</a> · <a href="../../lessons/day-02-requests-and-evidence.md#choose-a-search-that-answers-the-question">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q35">
<summary>Q35. Account, session, and cookie</summary>
<p class="qb-question"><strong>Question:</strong> A business application keeps Daniel’s user account, establishes a session after accepted sign-in, and uses a browser cookie to help recognize later requests. How are the account, session, and cookie different objects?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The account is the application's record representing Daniel. The session concerns his established interaction that the service can recognize. The cookie is browser-held data sent with matching requests and can help identify that interaction.</p>
<p>They are related but not interchangeable. The browser holds information while the application maintains the account and decides whether it accepts the session.</p>
<p>Name the object being checked. That prevents a change in browser storage from being described as a change to the whole user account.</p>
</div>
<p><a href="../day-02.md#q35">Return to Q35</a> · <a href="../../lessons/day-02-requests-and-evidence.md#a-remembered-sign-in-is-not-an-account">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q36">
<summary>Q36. Removing a cookie</summary>
<p class="qb-question"><strong>Question:</strong> Daniel deletes a cookie used by Expense, a business application, from his browser. No account-deletion operation or application record check is supplied. A colleague says his Expense account was deleted. Is that supported?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Removing browser-held data does not delete the application's account record. It may change how that browser presents information on later requests.</p>
<p>To establish account deletion, inspect the relevant account-management operation and destination record. The cookie action supplies neither result.</p>
<p>Explain the change precisely: the browser removed data it held. The account is a separate object whose existence and state must be checked in the application.</p>
</div>
<p><a href="../day-02.md#q36">Return to Q36</a> · <a href="../../lessons/day-02-requests-and-evidence.md#a-remembered-sign-in-is-not-an-account">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q37">
<summary>Q37. A cookie is still present</summary>
<p class="qb-question"><strong>Question:</strong> A browser still stores a cookie associated with an earlier sign-in session. No new server response or session-status evidence is supplied. Does the cookie’s presence prove the application continues accepting that session?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It establishes stored browser data, not the server's present acceptance decision. The session may have ended or expired, and not every cookie represents a sign-in session.</p>
<p>Inspect the relevant service result for the interaction being investigated. A new accepted request and a visible stored value answer different questions.</p>
<p>The browser presents information; the receiving service decides whether it remains valid for access. Do not substitute one side's storage for the other's result.</p>
</div>
<p><a href="../day-02.md#q37">Return to Q37</a> · <a href="../../lessons/day-02-requests-and-evidence.md#a-remembered-sign-in-is-not-an-account">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q38">
<summary>Q38. Two services, two session questions</summary>
<p class="qb-question"><strong>Question:</strong> Maya has an accepted session with Okta, the company identity service. Expense is a separate application that can establish its own session after sign-in. No Expense session result is supplied. Does the Okta session alone prove she has an accepted Expense session?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The services can maintain separate session state. The Okta observation establishes its own result, not Expense's decision.</p>
<p>Obtain application evidence showing whether Expense accepted the sign-in and established or reused its relevant session. Record that outcome separately when it is supplied.</p>
<p>You do not need every expiry mechanism to apply the basic distinction. Attach each session result to its owning service and leave the other service's state unverified until evidence answers it.</p>
</div>
<p><a href="../day-02.md#q38">Return to Q38</a> · <a href="../../lessons/day-02-requests-and-evidence.md#a-remembered-sign-in-is-not-an-account">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q39">
<summary>Q39. Compare the two message flows</summary>
<p class="qb-question"><strong>Question:</strong> A browser follows a redirect during sign-in. Separately, a configured connection sends an account-management API request to a business application. An API is an interface through which software requests information or operations. How do these exchanges differ in purpose and participants?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The redirect directs the browser to another address, continuing its web journey. The account-management request asks the target to perform work on an account and may travel directly between software systems.</p>
<p>Both can use web messages, but that does not make them the same operation. Follow the actual sender, destination, and requested work.</p>
<p>A successful browser step does not establish a successful account update. The result evidence needs to match the purpose of the request.</p>
</div>
<p><a href="../day-02.md#q39">Return to Q39</a> · <a href="../../lessons/day-02-requests-and-evidence.md#compare-a-redirect-with-account-management">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q40">
<summary>Q40. The account request was sent</summary>
<p class="qb-question"><strong>Question:</strong> A configured software connection sends a request to create Maya’s account in a business application. The send is recorded, but no application response or target-account read is supplied. What is established, and what is needed before reporting creation succeeded?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The recorded request establishes an account-creation attempt for the supplied purpose. It does not establish the receiving application's result.</p>
<p>Obtain the response and relevant target record. The application might accept or reject the request; sending alone cannot distinguish those outcomes.</p>
<p>Describe the attempted work accurately, then verify the destination. A request/response habit is just as useful for account management as for loading a page.</p>
</div>
<p><a href="../day-02.md#q40">Return to Q40</a> · <a href="../../lessons/day-02-requests-and-evidence.md#compare-a-redirect-with-account-management">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q41">
<summary>Q41. Reconstruct Maya’s failed journey</summary>
<p class="qb-question"><strong>Question:</strong> Expense is a business application connected to Okta for single sign-on (SSO). For one explicitly correlated attempt, Maya’s browser follows a redirect, the sign-in form loads, her required interaction succeeds, and Okta records SSO success. Expense then refuses the return request with 403. Where is the first demonstrated failure, and what evidence is needed next?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The first demonstrated failure is Expense's refusal of the return request. Earlier steps have their own successful observations.</p>
<p>Request the detailed application rejection and corresponding sign-in exchange for this same attempt. Those records can explain why the arriving information was not accepted.</p>
<p>The failure boundary is established, but its underlying cause is not. Preserve progress and refusal together. They identify a focused next question without proving that a password reset or any other particular correction is required.</p>
</div>
<p><a href="../day-02.md#q41">Return to Q41</a> · <a href="../../lessons/day-02-requests-and-evidence.md#follow-mayas-attempt-one-step-at-a-time">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q42">
<summary>Q42. Repair a misleading update</summary>
<p class="qb-question"><strong>Question:</strong> For Maya’s identified attempt, Okta records successful single sign-on (SSO), but the connected Expense application refuses the corresponding request. No detailed cause, password reset, or successful follow-up is supplied. Rewrite: “Okta says SUCCESS, so Expense worked. We reset Maya’s password and closed the request.”</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The note stretches one recorded success across the application boundary and invents an action and closure. The refusal remains part of the evidence.</p>
<p>Try: “Okta recorded SSO success for the checked attempt, but Expense refused its corresponding request. The detailed rejection and relevant exchange are still needed to identify the cause. No correction or successful follow-up is established.”</p>
<p>That gives the next owner a clear finding and evidence request without claiming the business goal was completed.</p>
</div>
<p><a href="../day-02.md#q42">Return to Q42</a> · <a href="../../lessons/day-02-requests-and-evidence.md#choose-a-search-that-answers-the-question">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q43">
<summary>Q43. A browser error before a connection</summary>
<p class="qb-question"><strong>Question:</strong> Maya tries to open Expense at a named web address. The browser cannot resolve the host name to a network address and establishes no connection. No application response is obtained. Must the displayed browser error be an HTTP refusal sent by Expense?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. DNS, the Domain Name System, helps resolve a host name to a network address. The supplied lookup failure happened before a connection was established, so no Expense HTTP response is demonstrated.</p>
<p>Investigate the name-resolution boundary instead of inventing a server status or permission denial.</p>
<p>A browser can display its own problem report without receiving a refusal from the application. Identify who produced the observed message before interpreting what it says about the destination.</p>
</div>
<p><a href="../day-02.md#q43">Return to Q43</a> · <a href="../../lessons/day-02-requests-and-evidence.md#compare-a-redirect-with-account-management">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q44">
<summary>Q44. Compare 400 and 401</summary>
<p class="qb-question"><strong>Question:</strong> Support compares HTTP responses from two web requests: 400 Bad Request and 401 Unauthorized. No detailed cause is supplied. How do their general meanings differ, and does the word Unauthorized make 401 proof that the user lacks a business approval role?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>400 indicates a problem with the request. 401 indicates a lack of valid authentication credentials for the requested resource. Despite its name, 401 concerns authentication, not proof of a missing business role.</p>
<p>Authentication asks about identity proof; an application role concerns what an identified person may do. Read the actual request and detailed response before choosing a correction.</p>
<p>The status helps classify the exchange. It does not supply every underlying cause or establish the user's approved capability.</p>
</div>
<p><a href="../day-02.md#q44">Return to Q44</a> · <a href="../../lessons/day-02-requests-and-evidence.md#compare-a-redirect-with-account-management">Revisit the lesson</a></p>
</details>

[All Day 2 questions](../day-02.md) · [Question bank](../index.md) · [Course home](../../index.md)
