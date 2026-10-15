---
title: "Day 3: exercises"
parent: Exercises
nav_order: 3
---

# Day 3: Reasoning exercises

These are fictional Northbridge observations. The intended Projects codes are Sales → SAL, Finance → FIN, and IT → IT. Missing or unrecognized department values require review.

In each investigation, name the record and field, compare its observed value with the expected value, and explain what the next check would establish. You can reason through the supplied conversions without writing an Okta expression.

## 1. Locate the records

Daniel has an Okta user profile, a Projects app user profile, and a Projects account.

Which two are represented inside Okta? Which record belongs to the target application? Does a correct app user profile prove that the target contains the same value?

## 2. Schema versus value

Projects requires a text field named `departmentCode` and accepts SAL, FIN, or IT. Daniel's proposed value is `Finance`.

Explain the schema requirement and the user's proposed value separately. Why can readable text still be unsuitable for the destination? Does adding the field alone fill it correctly for every user?

## 3. Name the direction

One mapping brings an HR department value into Okta. Another prepares a Projects department code from the Okta department.

Name the source and destination of each mapping. Does defining either mapping automatically define a reverse update into its source?

## 4. A fixed value gives the wrong result

Daniel's source department and Okta department are both Finance. The configured outbound rule always produces SAL. Its preview produces SAL, and the Projects account contains SAL.

Identify the demonstrated mapping defect, a justified correction to propose, and the evidence still needed before claiming that every downstream record is corrected. Should Daniel's HR department be changed?

Before applying a shared correction, which inputs would you test, and what should happen for each? Include a missing or unrecognized department.

## 5. Correct preview, stale target

The corrected preview returns FIN. The Projects app user profile also contains FIN, but the target account still contains SAL. No update result is supplied.

What boundary needs investigation? Give two relevant evidence requests without inventing a confirmed cause. Does a successful sign-in event settle this question?

## 6. Missing field, missing evidence

A selected JSON excerpt does not include `department`. Someone concludes: "The HR department is blank, so Okta will use the AD value instead."

Identify the unsupported conclusions. Explain how an omitted field differs from an empty string and an explicit null, and what evidence is needed next.

## 7. Tell the full data story

Explain how Daniel's Finance value becomes the Projects code FIN, covering the source, central profile, app user profile, and target account. Describe the intended flow; do not assume these steps have completed unless their results are supplied.

Then explain why a mapping tells you neither which source wins when systems disagree nor whether a target update succeeded.

[Self-check answers](../self-checks/day-03.md) · [Return to Day 3](../lessons/day-03-profiles-and-mappings.md)

[Practice questions with explanations](../question-bank/day-03.md) · [Day 3 recap](../revision/day-03.md)
