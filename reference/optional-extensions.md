---
title: "Optional extensions"
parent: Reference
nav_order: 4
---

# Optional extensions

These terms may appear in wider Okta discussions. They are not required for the final case. Start with the underlying ownership, access requirement, and evidence question before choosing another capability.

| Topic | What it adds | Distinction to retain |
|---|---|---|
| [Okta Workflows](https://support.okta.com/help/s/article/Getting-started-with-Okta-Workflows?language=en_US) | Automation of identity-related processes through a visual workflow model. | A completed workflow still needs evidence that the intended target outcome occurred. |
| [Event hooks](https://developer.okta.com/docs/concepts/event-hooks/) | Notifications to an external service about eligible events that occurred. | Notification is different from pausing the original operation to make a decision. |
| [Inline hooks](https://developer.okta.com/docs/concepts/inline-hooks/) | Supported extension points where an external service's response can affect an in-progress Okta flow. | Response behavior and failure handling matter; this is not the same as an event notification. |
| [Org2Org architecture](https://help.okta.com/oie/en-us/Content/Topics/architecture/ma/ma-okta-to-okta.htm) | Connections between separate Okta organizations for supported federation and identity-management designs. | Multiple organizations do not automatically become one directory or one source of authority. |
| [Identity Governance](https://help.okta.com/en-us/content/topics/identity-governance/iga.htm) | Capabilities for governing identity access, including requests and reviews. | An access decision and its technical fulfillment or removal require separate evidence. |
| [Access Certifications](https://help.okta.com/en-us/Content/Topics/identity-governance/access-certification/campaigns.htm) | Structured reviews of whether access should remain. | A review decision alone does not establish successful remediation in every target. |

Availability and supported integrations must be checked in the relevant documentation and environment. These descriptions do not imply that Northbridge has enabled or licensed each capability.

Choose a capability only after stating the problem it needs to solve. Does the process need notification of an event, a decision during a supported flow, or an access review? Then establish the responsible owner, supported behavior, failure handling and target evidence. An automation result or a review decision still needs verification of the required account or access outcome.

[Day 15](../lessons/day-15-integrated-case.md) · [Course home](../index.md)
