---
title: "Day 10: SCIM"
parent: Revision Guide
nav_order: 10
---

# Day 10 revision: SCIM

SCIM helps answer “what happened to the application account?” Keep that question separate from how the person signs in. A successful account request is useful evidence, but it does not prove a successful user session.

## The concepts to keep with you

**SCIM.** SCIM is a standard for managing identity resources across systems. In this example, Okta is the SCIM client and Projects is the service provider. These roles describe account management, not Projects' SSO protocol.

**Connector contract.** The supported operations, required fields, accepted values, and responses define what the particular connection can do. Projects supports the lesson's find, create, update, and deactivate operations. Its department values are `SAL`, `FIN`, and `IT`; the connector maps the department into the specified SCIM extension field.

**Service authorization.** The connector needs its own configured authority to call Projects. The user's MFA result or an Expense ID token is not a substitute for that service authorization.

**Create and target ID.** A create request uses `POST` in the example. The `201` response, resource body, and `Location` identify the newly created resource. Projects assigns its resource ID, such as `prj-1042`. That ID is important for later operations on the same account. A `Location` header here is not a browser redirect.

**PUT and PATCH.** PUT replaces writable resource data according to the supported semantics; omitted writable fields can be cleared or defaulted. PATCH changes selected information. Read the actual connector behavior instead of assuming every Okta connection uses the example's deactivation method.

**Deactivation.** Setting `active` to false disables access according to the target's supported behavior while retaining the account. It is different from deletion. It also does not, by itself, establish that every existing session ended.

## Read the outcome before choosing a correction

In the successful create C-1, the response is followed by a target read confirming the resource. That is stronger evidence of destination state than the request alone.

The independent C-2 packet's `409` uniqueness conflict means the requested username conflicts with existing state. It does not prove who owns the conflicting resource. Inspect the lookup and resource ownership before retrying, linking, deleting, or inventing a different username.

Independent C-3 concerns Daniel. Its `400` response identifies an invalid department value: the request sends `Finance` where Projects expects `FIN`. Fix the transformation rather than changing the authoritative business department. C-3 does not supply a successful retest. The lesson's separate PUT example verifies FIN in the linked prj-1020 resource, but is not evidence that C-3 was corrected.

For deactivation, the example's `204` response has no body. A later read showing `active: false` verifies the retained resource's state. Keep session termination as a separate check. Also, removing one assignment path may leave another, so it need not produce deactivation at all.

## When a request reaches you

Read the supported and enabled provisioning operation, its linked target, and its result. A successful connection test does not prove the failed account update completed. Check uncertain create outcomes before retrying.

## Check your understanding

From memory, compare C-1's successful create, C-2's conflict, C-3's rejected value, and the hypothetical deactivation. For each, state the checked target outcome or unresolved question. Explain why none of these results alone establishes application entry, permissions, or termination of an existing session.

- What does the target resource ID help you preserve across updates?
- Why do the uniqueness conflict and invalid-value response need different investigations?
- What remains unproved after a confirmed `active: false` result?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. It identifies the same linked target resource for later operations. Updating that resource is different from creating another account with similar attributes.

2. The uniqueness conflict needs lookup and ownership evidence. The invalid-value response identifies a value that violates the target's contract and needs a mapping correction.

3. Existing-session termination remains unproved. Confirmed account deactivation also says nothing about the person's account state in another application.

</details>

[Full lesson](../lessons/day-10-scim.md) · [Exercises](../exercises/day-10.md) · [Lesson exercise answers](../self-checks/day-10.md) · [All recaps](index.md)

[Previous recap: Day 9](day-09.md) · [Next recap: Day 11](day-11.md)
