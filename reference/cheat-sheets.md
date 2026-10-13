---
title: "Cheat sheets"
parent: Reference
nav_order: 7
---

# Cheat sheets

Use these reminders after the corresponding lessons. For first explanations, follow the [learning path](../learning-path.md); for unfamiliar terms, use the [glossary](glossary.md).

Use a row to check your conclusion, rather than as a substitute for the case evidence. Name the person, application instance and operation before deciding which distinction matters.

## Easily confused pairs

| This | Is not this | The difference in one line |
|---|---|---|
| Identity | Account | A digital identity represents an entity in a context; an account is a system record. One person can have several identities, such as employee and administrator identities. |
| Authentication | Authorization | Who is signing in, versus what they are allowed to do. |
| SSO | Provisioning | Signing in, versus creating and managing the account. |
| Assignment | A usable account | Okta intends them to have it, versus the account actually existing and working. |
| Group | Group rule | A collection of users, versus one mechanism for managing membership; groups can be managed in other ways. |
| Import | Provisioning | Import reads records from a connected system into Okta; provisioning manages account lifecycle. In these outbound examples, Okta provisions target accounts. |
| SAML | OIDC | Two different sign-in protocols; their messages are not interchangeable. |
| ID token | Access token | Identity information validated by the OIDC client, versus a token presented to an intended API; neither is a universal permission grant. |
| Okta session | Application session | Being signed in to Okta, versus being signed in to the app. |
| Profile source | Mapping | Who controls a value, versus how a value moves and changes shape. |
| Agent | Connector | An agent is software carrying out integration work; a connector defines supported integration capabilities. A connector may rely on an agent, as AD does here. |

## Okta user states, in plain words

| API status | Console label | How to read it |
|---|---|---|
| STAGED | Staged | Created before activation is initiated, or awaiting administrative action. |
| PROVISIONED | Pending user action | Activation-related user action remains. This does not mean every application account was provisioned. |
| ACTIVE | Active | Account is enabled; authentication requirements and application access still need their own checks. |
| RECOVERY | Password reset | Account is in a password-recovery state. |
| PASSWORD_EXPIRED | Password expired | Password update is required. |
| LOCKED_OUT | Locked out | A lockout condition has been reached. |
| SUSPENDED | Suspended | Okta access is suspended while assignments are retained. |
| DEPROVISIONED | Deactivated | Okta account has been deactivated; distinct from deletion. |

These are distinct API statuses, not required steps in one sequence. Active alone does not establish working sign-in or app access. Suspension retains assignments; deactivation is separate from deletion and does not prove every application session ended. See [Day 12](../lessons/day-12-joiners-movers-leavers.md) and [Okta user states](https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-end-user-states.htm).

## What common evidence proves, and does not

| You see | It proves | It does not prove |
|---|---|---|
| Okta sign-in success | They authenticated to Okta for that attempt | That the app let them in, or that an account exists |
| An app tile on the dashboard | The app is shown to the user | That the account exists or that sign-in works |
| An assignment in Okta | Okta intends them to have the app | That the account was created in the app |
| A SCIM "201 Created" | The app created the account for that request | That sign-in works or that permissions are correct |
| An import job reports completion | That job completed within its reported scope | That a particular user was included, correctly matched, or can sign in |
| A "200 OK" on a page | The request was handled | That the person authenticated |

Keep the right-hand column in mind. A successful result belongs to the action that produced it. Enrollment still needs accepted authentication proof; membership still needs the intended assignment; a target-account result still needs separate sign-in and permission evidence.

After a correction, verify the requested outcome rather than only the saved setting. Restoring a rule does not by itself establish that unintended assignments, accounts or sessions have been cleaned up. When a result has not been checked, keep it marked as unknown.


[Course home](../index.md)
