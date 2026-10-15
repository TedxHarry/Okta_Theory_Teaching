---
title: "Day 2: self-check answers"
parent: Self-Checks
nav_order: 2
---

# Day 2: Self-check answers

Use these to check the distinctions in your reasoning. You do not need to repeat the wording or memorize the example routes. If your answer turns a successful step into a successful whole journey, identify the missing evidence and rewrite that sentence before moving on.

## 1. Read the destination

- Scheme: `https`.
- Host: `expenses.northbridge.example`.
- Path: `/reports`.
- Query parameter: `department`, with the value `Finance`.

The query value is information sent with the request. It does not prove the server changed Maya's stored profile or accepted Finance as her department.

**Revisit:** [Read the destination before interpreting the result](../lessons/day-02-requests-and-evidence.md#read-the-destination-before-interpreting-the-result) if you treated a query parameter as a confirmed profile update.

## 2. Follow the redirect

The browser is directed to request the location supplied by the Expense response. The next destination is the identity service's sign-in page.

This establishes a redirect instruction, not completed authentication or target account creation. The next request and response are separate evidence.

A provisioning request instead asks the target for an account-management operation. It may be sent directly by the configured integration without using the user's browser. A method such as POST does not, by itself, distinguish these purposes.

**Revisit:** [A response can send the browser elsewhere](../lessons/day-02-requests-and-evidence.md#a-response-can-send-the-browser-elsewhere) and [Compare a redirect with account management](../lessons/day-02-requests-and-evidence.md#compare-a-redirect-with-account-management) if you equated browser movement with provisioning.

## 3. A successful page request

The sign-in page request succeeded and returned the form. Authentication has not been established because the user has not submitted the form or completed the required interaction.

HTTPS protects communication in transit. It does not grant authorization, create an account, or establish that sign-in succeeded.

**Revisit:** [A status code describes a request's result](../lessons/day-02-requests-and-evidence.md#a-status-code-describes-a-requests-result) if you treated 200 as a universal sign-in success indicator.

## 4. An application refusal

The application refused the checked request and reported that it could not accept the sign-in information. That is a demonstrated failure boundary, not a complete explanation of its cause.

An incorrect identity message is a possible explanation. A wrong password or missing role is not established by the status code either. Do not choose a correction from those possibilities alone.

Request the detailed application rejection evidence and the relevant sign-in exchange, matched to the same person, application instance, and attempt. These may show a problem originating earlier even though the refusal is observed at the application.

**Revisit:** [Follow Maya's attempt one step at a time](../lessons/day-02-requests-and-evidence.md#follow-mayas-attempt-one-step-at-a-time) if you concluded that the component reporting the error necessarily created the defect.

## 5. Cookie, session, and account

A cookie is browser-held data, not the account itself. Removing it can affect how that browser presents session information to the website; it does not delete the application's account record.

Its continued presence also does not prove a valid session. The server may no longer accept the associated state. Not every cookie is a session cookie.

An answer distinguishing the three concepts is sufficient. You do not need detailed session expiry or policy mechanics here.

**Revisit:** [A remembered sign-in is not an account](../lessons/day-02-requests-and-evidence.md#a-remembered-sign-in-is-not-an-account) if you treated browser data as the system's account record.

## 6. Read the event

A sound translation is:

> Okta recorded a successful application SSO event associated with Maya Rao and Northbridge Expense.

- Action category: `eventType`.
- Actor: the record under `actor`.
- Involved target: the entry in `target`.
- Recorded event result: `outcome.result`.

The event is not evidence that the separate application accepted the information, granted permissions, or created an account.

The selected excerpt lacks the full identifiers and timing/context needed to establish a particular attempt independently. Display names alone are insufficient. In the main lesson's timeline, a matching attempt is supplied as a fact of the training packet; outside it, that relationship must be established.

**Revisit:** [Read an event as a sentence first](../lessons/day-02-requests-and-evidence.md#read-an-event-as-a-sentence-first) and [Match the evidence to the right attempt](../lessons/day-02-requests-and-evidence.md#match-the-evidence-to-the-right-attempt) if you used SUCCESS without identifying its action and scope.

## 7. Tell the story using the right evidence

The browser requested Expense, received a redirect, and loaded the identity service's sign-in form. The related Okta SSO event recorded success. Expense then refused the sign-in return request.

The first demonstrated failure in the packet is the Expense refusal. The packet does not establish the underlying defect. The application may reject something produced earlier in the flow.

Priya's success is a different person's event. It neither proves Maya's sign-in worked nor disproves her refusal. It could eventually be comparison evidence, but only with relevant context.

Request the detailed refusal and corresponding sign-in-exchange evidence. Explain what each record proves and does not prove before proposing a correction.

A useful handoff could say: “For Maya's supplied Expense attempt, Okta recorded SSO success, then Expense refused the return request. Please provide the application's detailed rejection record and corresponding sign-in-exchange evidence for that attempt.” This asks the application owner to investigate the observed refusal without claiming that the owner's system caused the defect.

**Revisit:** [Follow Maya's attempt one step at a time](../lessons/day-02-requests-and-evidence.md#follow-mayas-attempt-one-step-at-a-time) if your story jumped from Okta SUCCESS to application success.

## Before-moving-on questions from the lesson

| Question | Essential reasoning |
|---|---|
| Request versus response? | A message asking for a resource or operation versus the receiving system's reply. |
| Which URL part identifies the host? | The host after the scheme; it is not the path or query parameter. |
| What does 302 with Location do? | Directs the browser to another location; the next request still needs its own result. |
| Why is a sign-in form's 200 not authentication proof? | It reports the request result for loading the form, not completion of the later sign-in interaction. |
| What does the event's SUCCESS prove? | Okta recorded success for the identified SSO event; downstream acceptance and the business outcome need separate evidence. |
| Cookie versus account? | Browser-held data versus a system record; a session is another distinct concept. |
| Why match person, application, and attempt? | A record from another person, application, or attempt does not establish this ticket's outcome. |

Compare Questions 6 and 7: the selected event in Question 6 cannot independently establish the reported attempt; Question 7 explicitly supplies that connection. Use supplied facts, but do not silently add missing ones.

In your notebook, record one successful request that did not complete the business goal. Add the observed failure boundary and the evidence that would be needed to identify the cause.

[Return to the exercises](../exercises/day-02.md) · [Return to Day 2](../lessons/day-02-requests-and-evidence.md)

[Revise Day 2](../revision/day-02.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-02.md) · [Day 2 recap](../revision/day-02.md) · [Reasoning exercises](../exercises/day-02.md)
