---
title: "Northbridge Services"
parent: Reference
nav_order: 1
---

# Northbridge Services

Northbridge Services has Sales, Finance, and IT teams. Employees and contractors need access to different applications. The company must also change that access when people's responsibilities change or their work ends.

This fictional company connects the course's examples. Use this reference to locate the person, system and point in the story before interpreting a ticket. The same person may appear in several packets, but each packet supplies its own evidence about accounts, assignments and access.

## People

| Person | Role |
|---|---|
| Maya Rao | Sales employee who later moves to Finance. |
| Daniel Brooks | Finance manager. |
| Priya Shah | Sales contractor with an employee sponsor. |
| Alex Chen | IAM administrator; the administrative identity is managed in Okta. |
| Jordan Lee | Employee whose later departure requires access removal. |

Read a role as business context, not a complete permission list. A manager's title does not prove an application role, and an IAM administrator's title does not establish authority for every configuration change. Use the approval and administrative scope supplied for the particular task.

## Systems

| System | Purpose |
|---|---|
| Workday | Employee records and employment information. |
| Active Directory | Directory accounts and groups; validates employee passwords when the configured AD password sign-in path is used. |
| Okta | Workforce identity records, application assignments, sign-in decisions, and configured connections to other systems. |
| Salesforce | Sales application. |
| ServiceNow | Background IT service application; no separate ServiceNow investigation is required in this course. |
| Microsoft 365 | Workplace applications. |
| Northbridge Expense | Fictional expense application used for an OIDC sign-in example. |
| Northbridge Projects | Fictional application used for account-management examples through SCIM. |
| Okta Verify | An authenticator used in sign-in examples. |

When reading a result, name which of these systems produced it. Workday can establish an employment fact, AD can provide a directory or password-validation result, and an application can report its own account or access outcome. An Okta success does not supply all three results. Expense and Projects are fictional teaching applications; their stated contracts do not define every other integration's behavior.

The initial picture is simple:

```text
Employee information in Workday
              ↓
         Identity in Okta
              ↓
   Configured connections to AD and applications
```

The arrows show logical relationships. They do not mean that every account exists immediately or that every application uses the same protocol.

Employee information is HR-led. Contractor identities such as Priya's are maintained in Okta following sponsor approval. The detailed source ownership and sign-in decisions become part of the examples as those concepts are introduced.

Priya's sponsor approves the business change; an authorized operator maintains her Okta-managed identity through that process. Do not invent an employee-source association to make her follow Maya's path. For AD-linked employees, profile ownership, designated AD-owned fields and AD password validation remain separate responsibilities.

[Source and ownership reference](attribute-ownership.md) · [Return to Day 1](../lessons/day-01-people-identities-access.md) · [Course home](../index.md)

## Follow the timeline

Days 1 to 11 use Maya's Sales employment and Jordan's active employment unless a packet explicitly states a hypothetical variation. In [Day 12](../lessons/day-12-joiners-movers-leavers.md), Maya's approved move to Finance and Jordan's departure take effect. Earlier observations remain evidence about their earlier states. Individual case packets state their own account and assignment evidence.

An archived sign-in investigation therefore describes what happened at its earlier point; resolving its cause would not authorize restoring a departed employee's access. Similarly, a later packet with a confirmed account does not resolve an earlier packet that left the account relationship unknown.

Priya's application approvals are separate decisions. In the final case, her Expense and Projects exceptions are supplied, while her Salesforce exception remains unverified. Approval for one application does not answer another application's ticket. Likewise, Daniel's Finance manager role does not automatically grant Salesforce access or make him an Okta administrator; use the approvals and permissions stated in the packet.

The [application-onboarding reference](onboarding-an-application.md) explicitly changes Projects eligibility for a design exercise. In that variant, Maya's Finance move ends ordinary Projects access. In Day 12 and the final case, her approved Projects access continues. Keep each requirement with its own case.

## Keep Maya's identifiers separate

Different fields can identify the same person for different purposes. These values appear in the relevant teaching packets:

| Field and context | Value | What to compare |
|---|---|---|
| Employee number | `NB-1042` | The governed employee record and the stated matching criteria. |
| AD-owned work email in Day 4 | `mrao@northbridge.example` | The linked AD value and Okta's work-email field. |
| Okta login in Day 11's API excerpt | `maya.rao@northbridge.example` | The login field on the intended Okta user. |
| Salesforce username and SAML NameID in Day 8 | `maya.rao@northbridge.example` | The connection's configured username-matching rule. |
| Projects resource identifier | `prj-1042` | The confirmed association to the intended Projects account. |

The work-email field, Okta login, and application username are separate attributes even when some contain identical text. Day 4's email ownership does not define the login or SAML NameID mapping. No example establishes that `mrao@northbridge.example` and `maya.rao@northbridge.example` are mailbox aliases. Read the named field and its configured relationship before treating different strings as an error.

Use an identifier with its system and purpose. An employee number helps compare the stated identity evidence; a Projects resource identifier names a target record; a login or application username participates in its configured operation. Reusing a value in another example does not transfer that example's association, approval or successful outcome. Keep the field, record and packet together in your notes.
