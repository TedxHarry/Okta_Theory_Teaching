---
title: "Northbridge's source and ownership reference"
parent: Reference
nav_order: 2
---

# Northbridge's source and ownership reference

Use this alongside [Day 4](../lessons/day-04-sources-and-ownership.md). These are Northbridge's stated architecture decisions, not universal settings for every organization.

The employee flow is Workday → Okta → AD and applications. AD can also return designated directory-owned values. External profile sources are ordered Workday first, AD second, evaluated against the user's applicable associations.

Start with the person, named field and operation you are investigating. A question about department ownership is different from a question about password validation or a failed target update. Use the table to locate the responsible system, then check the actual association and configuration for that record.

| Person or field | Source or responsibility | Boundary |
|---|---|---|
| Devi and Daniel's profiles | Workday; both have Workday and AD associations | One effective profile source per user. |
| Department | Inherits from the effective profile source | Workday for these employees; Okta for Priya. |
| workerType | Inherits from the effective profile source | Workday supplies Employee for the employee examples; approved Okta maintenance supplies Contractor for Priya. This classification is separate from account status. |
| AD-linked employee work email | Explicit AD attribute source | Avoid a competing outbound write back over this AD-owned field. |
| Priya's profile | Okta | No Workday association or AD account assignment; outside employee import scope. |
| Priya's maintenance | Authorized administrator after sponsor approval | A sponsor is a business approver, not another technical source integration. |
| Alex's administrative identity | Okta | Excluded from employee source imports. |
| Employee lifecycle | Configured Workday-driven events | Attribute ownership alone does not define deactivation behavior. |
| AD password validation | AD through the Okta AD agent on that sign-in path | Separate from HR profile ownership and import success. |
| Projects department code | Okta-to-Projects mapping | Sales → SAL; Finance → FIN; IT → IT. Target delivery needs its own evidence. |

For Devi and Daniel, Workday's profile ownership can coexist with AD's ownership of the designated work-email field and its separate password-validation role. AD returning an email value or accepting a password does not transfer department ownership to AD. Conversely, a successful employee import does not establish an accepted password or an application session.

Priya follows the approved Okta-managed contractor process. Workday's higher priority does not make it her source when she has no applicable association. Her sponsor provides business approval; the authorized administrator maintains the data. Alex's administrative identity is also outside the employee import population. Keep those stated relationships rather than forcing every person through the employee path.

Ownership identifies who is allowed to maintain a value. A mapping determines how that value is represented for another profile or application. Delivery and the target's stored state require their own evidence. For Projects, Finance must become FIN under the stated conversion, but a correct mapping preview alone does not prove that FIN reached the intended account.

An absent field, failed import, or unavailable source does not by itself prove a change in ownership or fallback. Check actual associations, field settings, mappings, and operation results.

Record those findings separately: which source applies, which field setting governs the value, what the mapping produced, and what the receiving system confirmed. This keeps a source disagreement from being mistaken for a delivery problem, and a failed password check from being treated as a profile-ownership change.

[Company reference](northbridge-company.md) · [Course home](../index.md)
