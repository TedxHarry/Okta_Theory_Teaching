---
title: "Day 3: self-check answers"
parent: Self-Checks
nav_order: 3
---

# Day 3: Self-check answers

Check the relationships in your explanation. Exact wording and expression syntax are not required. If you claimed a value reached Projects, identify the operation and target observation supporting that claim. If those are missing, revise the claim to describe what is expected or still needs verification.

## 1. Locate the records

The Okta user profile and the Projects app user profile are represented inside Okta. The actual Projects account belongs to the target application.

A correct app user profile establishes the value represented in Okta for that application assignment. It does not prove successful target creation or update. Inspect the relevant operation and target record separately.

**Revisit:** "There is an Okta user profile and an application user profile" if you placed both application-related records inside Projects.

## 2. Schema versus value

The destination requires a text field with an accepted department code. Finance is readable text but is not one of the accepted codes. The intended transformation produces FIN.

Adding a field defines somewhere to hold information; it does not populate every user with a correct value. The applicable data flow or maintenance process must supply that value.

**Revisit:** "The profile describes a user; the schema describes the fields" if you treated a supported field as proof of a correct user value.

## 3. Name the direction

The first direction is Workday to the Okta user profile. The second is the Okta user profile to the Projects app user profile, preparing data for the target integration.

Neither defines its reverse automatically. The integration's configuration and supported operations determine the actual updates. A mapping's existence does not establish constant bidirectional synchronization.

**Revisit:** "Direction changes the meaning" if you treated the two directions as interchangeable.

## 4. A fixed value gives the wrong result

The outbound rule always returns SAL, even when its input is Finance. The preview confirms that defect for the supplied input. The approved mapping should produce FIN for Finance, while preserving the other approved conversions and handling missing values deliberately.

Propose correcting the mapping and assess the other users it affects. Then verify the evaluated result, app user value, relevant update operation, and actual target state. A preview alone does not establish delivery.

For the shared rule, test Sales → SAL, Finance → FIN, and IT → IT. Missing or unrecognized input should receive the required review rather than an invented department code. These checks assess the proposed conversion; each affected account still needs appropriately scoped delivery evidence.

Daniel's HR department should not be changed to compensate for the defect. It is already correct. The target snapshot also does not establish the complete historical sequence of writes; that would require operation evidence.

**Revisit:** "Find the first wrong representation" if you proposed changing the correct source or claimed the entire write history was proven.

## 5. Correct preview, stale target

The unresolved boundary lies between the value represented for the application in Okta and the stored target value. Possible evidence requests include:

- Whether the relevant attribute update is supported and enabled.
- Whether an update was attempted and the operation's result.
- Whether the target account being inspected is the one linked to this assignment.
- What value was sent, if request evidence is available.

These requests investigate possibilities; they do not establish a failed connector in advance. A successful sign-in event concerns a different operation and does not prove a profile update succeeded.

**Revisit:** "A preview is a calculation, not delivery evidence" and Day 2's event-boundary distinction.

## 6. Missing field, missing evidence

The excerpt does not show the field. That alone establishes neither a blank HR value nor automatic fallback to AD.

An empty string is an explicitly supplied empty text value. JSON `null` explicitly marks no value; it is not the text `"null"`. An omitted field in a selected excerpt may simply be outside the excerpt. Their update effects depend on the operation and configuration; none alone proves that the destination was cleared.

Request the relevant full source/profile evidence, source ownership, mapping behavior for missing inputs, and applicable update behavior. Do not invent a department or assume another source supplies it automatically.

**Revisit:** "Missing data needs a decision" if you equated an incomplete excerpt with a complete source record.

## 7. Tell the full data story

A sound explanation of the intended flow is:

> Workday holds Daniel's Finance department. The incoming mapping represents it in his Okta user profile. The outgoing Projects mapping converts Finance to FIN in the application-specific profile. The configured account-update process must then send and apply the value to the linked Projects account. The target record confirms what the application actually stores.

Mapping defines how a value is represented or transformed between profiles. Source ownership determines which system controls it. Delivery evidence establishes whether a supported update occurred and was accepted. These are separate questions. A later, correlated update result and target read can verify a correction for the checked account; neither should be assumed from this description of the intended flow.

**Revisit:** "Mapping and ownership answer different questions" if your explanation used a mapping as proof of authority or delivery.

## Before-moving-on questions from the lesson

| Question | Essential reasoning |
|---|---|
| Attribute, value, profile, schema? | A named detail, its content, the collection of details for a representation, and the definition of supported fields and constraints. |
| Where do the three records live? | The user and app user profiles are in Okta; the application account is in the target. |
| Why state direction? | Reading from a source and writing toward a destination are different relationships. |
| Why is Finance → FIN correct? | The destination's defined code table preserves the intended meaning. |
| What does a preview prove? | Evaluation for the supplied input, not application or target delivery. |
| Does omission prove an empty value? | No; inspect the evidence scope and actual source. |
| Mapping versus ownership? | How data moves/transforms versus which system controls the value. |

In your notebook, keep the four-layer flow and mark where each value was observed. If the target differs, ask which intervening operation still lacks evidence.

[Return to the exercises](../exercises/day-03.md) · [Return to Day 3](../lessons/day-03-profiles-and-mappings.md)

[Revise Day 3](../revision/day-03.md): revisit the concepts, example, and questions without rereading the full lesson.
