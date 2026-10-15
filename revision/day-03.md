---
title: "Day 3: Profiles and mappings"
parent: Revision Guide
nav_order: 3
---

# Day 3 revision: Profiles and mappings

Daniel belongs to Finance, yet Projects shows the Sales code. Before changing his department, follow the value through the systems. The source can be correct while a later transformation is wrong.

## The concepts to keep with you

**Attribute, value, and schema.** An attribute is a named field, such as department. Its value might be `Finance`. A schema describes the fields and the rules for their data. Two systems can describe the same business fact using different accepted values.

**Mapping.** A mapping describes how information moves from a source field to a destination field. Direction matters. An incoming application-to-Okta mapping does not automatically create an outgoing Okta-to-application mapping.

**Transformation.** This changes the representation of a value. Northbridge's Projects application expects `SAL`, `FIN`, or `IT`. Translating `Finance` to `FIN` preserves the business meaning while meeting the target's format. Sending a fixed `SAL` value for everyone does not.

**App user profile.** This is the user's application-specific profile stored in Okta. It is still an Okta-side record. Seeing `FIN` there does not prove that Projects received and stored `FIN`.

**Preview and delivery.** A preview shows the calculated result for selected input. Saving a correct mapping, updating the app user profile, sending a request, receiving acceptance, and reading the destination are separate observations.

**Missing values.** A null value, an empty string, and a field omitted from an excerpt are different. Do not turn missing or unfamiliar input into a convenient default department without an approved rule.

## Follow Daniel's department

The original example shows Finance in Workday and Okta, while the mapping preview produces `SAL`. That establishes a transformation problem. Correcting the mapping to produce `FIN` addresses that defect, but you still need to verify the resulting destination state.

The lesson also supplies a separate follow-up: the saved mapping evaluates to FIN, the app user profile contains FIN, an update to Daniel's linked account reports success, and a later target read shows FIN. Together, those observations verify his department correction at that checked point. They do not verify every other user or establish application sign-in and permissions.

Now change the evidence: suppose the preview and app user profile both show `FIN`, while Projects still shows `SAL`. You cannot blame the same mapping defect without further evidence. Check whether an update was supported and enabled, what was sent, what response came back, which target record was addressed, and whether a later write changed it.

Keep ownership and formatting separate. Workday can own Daniel's department while the outbound mapping determines how Projects receives that department.

## When a request reaches you

Check when the mapping applies, as well as its expression. Creation-only behavior can leave an existing app-profile value unchanged; that stored value may still appear in later full-profile pushes. Verify recalculation and delivery separately.

## Check your understanding

From memory, follow Finance through Workday, the Okta user profile, the Projects app user profile, and the target account. Say where you would expect Finance or FIN, and name the evidence needed to show that the target was updated.

- Where does an app user profile live?
- What does a correct preview prove, and what does it leave unverified?
- Why would changing Workday's `Finance` value to `FIN` be the wrong response to this target-format requirement?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. The app user profile lives in Okta. The actual Projects account is a separate destination record.

2. The preview confirms the calculation for selected input. It does not confirm that the value was stored, sent, accepted, or retained at the destination.

3. Finance is the approved business value. The outbound transformation should express it as FIN for Projects without changing the source's meaning or format for every other consumer.

</details>

[Full lesson](../lessons/day-03-profiles-and-mappings.md) · [Exercises](../exercises/day-03.md) · [Lesson exercise answers](../self-checks/day-03.md) · [All recaps](index.md)

[Previous recap: Day 2](day-02.md) · [Next recap: Day 4](day-04.md)

[Practice questions with explanations](../question-bank/day-03.md)
