---
title: "Day 1: People, identities, and access"
parent: Revision Guide
nav_order: 1
---

# Day 1 revision: People, identities, and access

Think back to Maya. She can sign in to Okta, but that alone does not tell us whether she can use Salesforce. The useful habit from this day is to separate the facts that sit behind the phrase “she has access.”

## The concepts to keep with you

**Identity and account.** Maya is a person. Her identity information describes her, such as her name and department. An account is a record in a particular system through which she may receive access. Finding that record does not tell you whether it is enabled or which tasks it permits. A Workday record, Okta user, Active Directory (AD) account, and Salesforce account would each be a separate record about her. Finding one does not prove the others exist.

**Directory, profile, and attribute.** A directory stores and organizes identity records. Okta's Universal Directory is its directory layer. A profile holds information about a user; each named piece, such as `department`, is an attribute. A correct department in Workday does not prove another system holds the same value.

**Authentication.** This is the check of who is signing in, using an accepted method of proving identity. Maya successfully authenticating to Okta tells us about that sign-in. It does not establish her Salesforce permissions.

**Authorization.** This is the decision about what someone may access or do. Okta application assignment is one access decision. Salesforce permissions are another. Daniel might enter an application but still be unable to approve a request inside it.

**Single sign-on, or SSO.** SSO lets connected applications use a trusted sign-in relationship. It helps the user move into an application without treating every application as a completely separate sign-in. The target still has to accept the information and apply its own access rules.

**Provisioning and deprovisioning.** Provisioning manages application accounts, including creating or updating them. Deprovisioning removes or disables access through the supported account-management process. These are separate from SSO. The connection's supported account-management method must be checked separately.

## Put the pieces back together

For Maya, keep five statements separate: her Okta user exists, she is assigned Salesforce, her Salesforce account exists and has an appropriate state, her Salesforce sign-in succeeds, and her permissions allow the intended work.

The Day 1 search found no account matching her expected application username or other approved search value **in the checked Salesforce environment**. That is useful evidence with a defined scope. Assignment and provisioning were not yet inspected. We therefore have more to check before deciding that an account must be created.

When you see a tile or an “Active” status, ask which of those five statements it actually supports. An Active Okta user is evidence about the Okta record; a disabled Salesforce account is evidence about the Salesforce record. Avoid turning one observation into a claim about the whole journey.

## When a request reaches you

Start with the intended person and application instance. The user record, assignment, and target account answer different questions. Agree on the requested capability before proposing a change.

## Check your understanding

Before looking at the answers, explain Maya's situation aloud or write a few sentences from memory. Include one confirmed fact, one unknown, and the next check you would choose.

- Why could Maya authenticate successfully but still lack usable Salesforce access?
- What would you inspect when Daniel can enter an app but cannot approve an item?
- How is “we have not checked the account” different from “our scoped search found no match”?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. Successful authentication establishes who signed in to Okta. Maya still needs the appropriate assignment, target account, accepted application sign-in, and permissions for her work.

2. Check Daniel's approved role and the application's permission for that action. Entry has already succeeded, so a password reset would not address the demonstrated denial.

3. An unchecked account is unknown. A search with no match is an observed result within its stated instance and identifier scope; it does not prove the account is absent everywhere.

</details>

[Full lesson](../lessons/day-01-people-identities-access.md) · [Exercises](../exercises/day-01.md) · [Lesson exercise answers](../self-checks/day-01.md) · [Practice questions with explanations](../question-bank/day-01.md) · [All recaps](index.md)

[Next recap: Day 2](day-02.md)
