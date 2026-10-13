---
title: "Day 1: exercises"
parent: Exercises
nav_order: 1
---

# Day 1: Reasoning exercises

Use the facts supplied in each question. State what you know, what you do not know, and what you would check next. You do not need menu paths or protocol details.

Try the questions before opening the answers. For an investigation, use three short sentences: “The evidence shows…”, “We still do not know…”, and “I would check… because…”. A possible explanation becomes more useful when you name a check that could support or rule it out.

## 1. One person, several records

Maya has an employee record in Workday, an Okta user, an AD account, and a Salesforce account.

Explain why these are separate records for one person. If the Salesforce account is disabled, does that tell you the state of her Okta user or AD account?

## 2. Sign-in works; an action fails

Daniel completes Okta sign-in, enters Northbridge Expense, and receives "not permitted" when attempting to approve an expense.

Which distinction matters here? What evidence would you request before proposing a correction?

## 3. SSO without account creation

A company connects an application's sign-in to Okta. Its application administrator still creates accounts manually.

Is that arrangement contradictory? Explain SSO and provisioning using this example.

## 4. A value is correct in one system

Workday shows Maya's department as Sales. Someone says: "Then the Sales value must be correct in every connected application."

Explain what the Workday observation proves, what it does not prove, and what evidence you would compare next. Do not assume the target is wrong either.

## 5. An incomplete account investigation

Alex confirms that Maya's Okta user is Active and that she completed the required Okta sign-in checks for the reported attempt. No matching Salesforce account is found using her approved identifier in the checked instance. Her Salesforce assignment and account-management history have not been inspected.

Write:

- One confirmed finding.
- Two possible explanations that still need evidence.
- The next evidence to request.
- One correction you should avoid making without that evidence.

## 6. Assignment and a tile

Alex sees that Maya is assigned Northbridge Projects in Okta and has a tile for it. There is no target account or provisioning-result evidence in the packet.

Can Alex conclude that her Projects account was created successfully? Explain what the assignment proves and what else is needed.

## 7. Tell the whole story

Explain how HR information, an Okta user, an application assignment, an application account, sign-in, and permissions relate to Maya using Salesforce.

Then change the situation: the Salesforce account exists but is disabled. Explain which fact is now known and what remains unanswered.

## Before moving on: your assessment

Mark each of these as **I can explain it**, **I need the example**, or **I need to revisit it**:

- Identity versus account.
- Authentication versus authorization.
- SSO versus provisioning.
- Assignment versus a usable target account.
- Evidence from one system versus evidence of the whole flow.
- A confirmed finding versus a possible cause.

Compare your reasoning with the [self-check answers](../self-checks/day-01.md) after attempting the questions.

[Return to the lesson](../lessons/day-01-people-identities-access.md) · [Course home](../index.md)

