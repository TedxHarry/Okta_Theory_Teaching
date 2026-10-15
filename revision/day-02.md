---
title: "Day 2: Requests and evidence"
parent: Revision Guide
nav_order: 2
---

# Day 2 revision: Requests and evidence

When someone says “Okta worked, but the app failed,” slow the story down. Which request worked? Which system returned the failure? Following the individual steps gives you something you can investigate.

## The concepts to keep with you

**Request and response.** A client asks a server to do something, and the server returns a response. In a browser journey, the browser is the client. Other software can also send requests, such as an account-management service calling an API, an interface through which software requests operations or data.

**URL.** The scheme names the communication method, such as HTTPS; the host names the destination; the path identifies a resource or operation; and the query carries parameters after a question mark. HTTPS protects communication in transit. It does not prove that the user is entitled to access the destination.

**HTTP methods and status codes.** `GET` generally retrieves a resource; `POST` submits information for processing. Read the endpoint and body to understand the actual operation. A `200` response can simply deliver a sign-in form. A `302` with a `Location` header directs the browser elsewhere. A `403` tells you the request was refused, but you still need evidence of the reason.

**JSON and log fields.** JSON organizes data into named values, objects, and lists. Read a field in its context: an event's `outcome.result` describes that event, not every later step. The actor, target, event type, and time help establish what happened.

**Correlation.** This means connecting records that belong to the same attempt. Compare the person, application instance, timestamps and time zones, and relevant identifiers. Two records mentioning Maya are not automatically part of the same sign-in.

**Cookies and sessions.** A cookie is data the browser stores and sends according to its rules. A session represents an ongoing interaction recognized by a system. Neither is the user's account record. Keeping those ideas separate will help when we later examine logout and access removal.

## Follow Maya's evidence

This is a separate Expense attempt; Day 1's Salesforce account findings do not explain it. In the supplied Expense example, the browser follows a redirect, receives a sign-in form, and completes authentication. An Okta SSO event, connected to this attempt by the training packet, reports success. Expense then returns a refusal about the sign-in information.

That sequence places the first observed failure at Expense. It does not yet identify the root cause. A password reset would be a guess when the supplied evidence already shows authentication completed.

Build your explanation around the last confirmed successful step and the next observed failure. Then request evidence from that boundary. This is more useful than collecting unrelated success and failure messages.

## When a request reaches you

Choose a log window and time zone, then correlate the person and application. Keep successful preceding steps in view. An empty filtered search does not prove that no attempt occurred.

## Check your understanding

Without looking back, tell Maya's Expense story in order. Name a successful step, the first demonstrated failure, and one piece of evidence still needed. Then use the questions below to check your explanation.

- Why does receiving a page with status `200` not prove authentication succeeded?
- What does the Okta success event establish in Maya's sequence, and what remains unknown?
- What would you compare before joining two log records into one story?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. A 200 response says that request succeeded. If it delivered a sign-in form, authentication may still be ahead of the user.

2. The event supports the reported Okta SSO step for that attempt. Expense's later refusal still needs investigation; the event does not identify why Expense rejected the information.

3. Compare the person, application instance, attempt, timestamps and time zones, and available transaction identifiers. A shared display name alone is not enough.

</details>

[Full lesson](../lessons/day-02-requests-and-evidence.md) · [Exercises](../exercises/day-02.md) · [Lesson exercise answers](../self-checks/day-02.md) · [All recaps](index.md)

[Previous recap: Day 1](day-01.md) · [Next recap: Day 3](day-03.md)

[Practice questions with explanations](../question-bank/day-02.md)
