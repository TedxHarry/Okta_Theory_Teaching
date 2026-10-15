---
title: "Day 2: exercises"
parent: Exercises
nav_order: 2
---

# Day 2: Reasoning exercises

The addresses, messages, and records below are fictional training examples. They are supplied evidence, not instructions to visit or operate a system.

For every result, name the request or event it belongs to, say what that result establishes, and identify what remains unknown. When you propose a next check, explain which uncertainty it would help resolve. No tenant or memorized protocol fields are needed.

## 1. Read the destination

```text
https://expenses.northbridge.example/reports?department=Finance
```

Identify the connection scheme, host, path, and query parameter. Does this URL prove Maya's stored department changed to Finance?

## 2. Follow the redirect

The browser requests a page from Northbridge Expense. Its response is:

```http
HTTP/1.1 302 Found
Location: https://identity.northbridge.example/signin
```

Explain what the browser is asked to do next. Does this reply prove authentication or account creation succeeded? Compare this with a configured integration sending an account-create request to an application.

## 3. A successful page request

The browser requests the identity service's sign-in page. The server replies `200 OK` with a form asking for sign-in information. The user has not submitted the form.

What succeeded? What has not been established? Would HTTPS on this request establish application access?

## 4. An application refusal

The browser comes back to the application after visiting the identity service. The application returns `403 Forbidden` to that sign-in return request. The message says: "We could not accept the sign-in information." No detailed rejection reason is supplied.

Can you conclude the user entered a wrong password, lacks an application role, or received an incorrect identity message? Explain the observation, the unknown cause, and the next evidence to request.

## 5. Cookie, session, and account

Daniel removes the Expense website's cookie from his browser. Someone says: "You deleted your Expense account."

Explain why that conclusion is wrong. If a cookie remains in the browser, does its presence prove the session is valid?

## 6. Read the event

This is a synthetic excerpt with selected fields, not a complete Okta event:

```json
{
  "eventType": "user.authentication.sso",
  "actor": {
    "displayName": "Maya Rao"
  },
  "target": [
    {
      "type": "AppInstance",
      "displayName": "Northbridge Expense"
    }
  ],
  "outcome": {
    "result": "SUCCESS"
  }
}
```

Translate it into one sentence. Name what identifies the action, actor, target, and result. Does this excerpt alone prove the application accepted the sign-in or that it belongs to Maya's specific reported attempt?

## 7. Tell the story using the right evidence

Maya reports an Expense sign-in failure. The evidence packet states:

- Expense sent her browser to the identity service with a redirect.
- The sign-in form loaded successfully.
- An Okta SSO event for Maya and Expense is connected to this attempt by the supplied investigation record and shows `SUCCESS`.
- Expense then refused the sign-in return request.
- A second success event concerns Priya, not Maya.

Tell the flow in order. Identify the first demonstrated failure, distinguish it from the root cause, explain why Priya's event does not resolve Maya's ticket, and name the next evidence needed.

Compare your reasoning with the [self-check answers](../self-checks/day-02.md) after attempting the questions.

[Return to Day 2](../lessons/day-02-requests-and-evidence.md) · [Course home](../index.md)

[Practice questions with explanations](../question-bank/day-02.md) · [Day 2 recap](../revision/day-02.md)
