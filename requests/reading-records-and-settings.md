---
title: Reading records and settings
parent: Working through requests
nav_order: 1
---

# Reading records and settings

Before opening a setting, say what you want to learn from it. “I want to find out why this user still has this application” is a better starting point than “I will look around the console.”

The Okta Admin Console contains several views of the same relationship. A user view, a group view, and an application view can each be correct while answering different questions. Available controls also depend on the integration, enabled features, and your permissions. A control you cannot see is not automatically a capability the organization lacks. State the question first, then choose the view that can answer it; finding a setting is not a reason to change it.

## Start with identity and assignment

Use these distinctions alongside Days 1 to 5.

| Question | Where to inspect | What to read |
|---|---|---|
| Is this the intended Okta identity? | The user's record in People | Identifier, current profile, status, and relevant source relationships. A display name alone is insufficient. |
| Why is the person in this group? | The group and its membership source or rule | Actual membership, conditions, exclusions, and whether membership is externally maintained. |
| How does this person receive the application? | The user's applications and the integration's assignments | Intended instance, direct or group paths, and the application-specific user record. |
| Why is a field different? | Profile Editor and the relevant profiles | Source ownership, direction, expression, application behavior, and the stored values on both sides. |

For example, a user can appear in the correct group while the application is assigned to a different, similarly named group. Adding the person directly would create another path without explaining the original one. Compare the actual objects and relationship.

## Separate sign-in and account management

Use these views with Days 6 to 11.

The application's **Sign On** settings describe its sign-in relationship. Its **Provisioning** settings, where supported, describe account-management operations and their connection. Inspect the actual application instance before comparing settings with an error from the target.

A person's Okta login, work email, and application username may differ. Ask which identifier the specific operation uses. A successful account lookup by employee number does not establish that the sign-in message uses the application's expected username.

For AD, inspect the directory integration and relevant agent information alongside the user association. For authenticators, compare organization availability with the user's actual enrollments and the current attempt. For SAML or OIDC, compare saved connection settings with the request or response actually used.

## Read policy selection and event evidence

Use these distinctions with Days 12 to 14.

An authentication policy and its rules explain the requirements intended for matching attempts. The event evidence helps establish what happened in the particular attempt. Read the policy's application associations before assuming that a change affects only the application currently open.

The System Log supports time ranges, time zones, and event filters. This example selects SSO events:

```text
eventType eq "user.authentication.sso"
```

It does not select only successful outcomes or prove application acceptance. Inspect the event's result and correlate it with the intended user, application, and attempt. Filtering too narrowly can hide preceding events needed to explain the sequence. See [System Log filters](https://help.okta.com/oie/en-us/content/topics/reports/syslog-filters.htm).

## Compare configuration, execution, and outcome

Imagine the profile update setting is enabled, the mapping preview produces the expected value, and a colleague says “it should be fixed.” You still need the operation and target result. Configuration describes intended behavior. Execution evidence shows which operation occurred. A target read or relevant application action shows the checked outcome.

Record all three when closing a request. If the target owner has not supplied the result, leave that check with a named owner. The absence of a visible error in Okta is not evidence of every target outcome. Keep the saved configuration, actual operation, and checked result tied to the same intended record and sequence. A result from a different user or earlier attempt cannot fill a missing outcome.

[Working through requests](index.md) · [Next: The application is missing](missing-application.md)
