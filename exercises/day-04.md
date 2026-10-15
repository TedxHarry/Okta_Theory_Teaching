---
title: "Day 4: exercises"
parent: Exercises
nav_order: 4
---

# Day 4: Reasoning exercises

Use the [lesson](../lessons/day-04-sources-and-ownership.md) and explain your reasoning before opening the [answers](../self-checks/day-04.md).

For each person, first identify the applicable source associations, then the effective profile source, then any field-specific exception. Compare the observed values only after establishing those responsibilities. A correct ownership decision still leaves the update result to be checked.

## 1. Apply the order to a person

Workday is first and AD second. Maya is associated with both. Priya is associated with neither and is maintained in Okta.

Who is the effective profile source for each? What is missing from the claim “Workday is first, so Workday owns Priya”?

## 2. Separate profile and attribute authority

Workday controls Maya's profile and department. AD is explicitly designated for her work email. Workday has one email address and AD has another; Okta contains the AD address.

Is the difference alone proof of an error? What would you check before choosing the correct address?

## 3. Investigate the wrong department

Maya's approved department and Workday record say Sales. Her Okta profile says Finance. Workday is still her checked department source.

Propose an investigation. Explain why changing Workday to Finance or repeatedly editing Okta is not supported by this evidence.

## 4. Explain contractor maintenance

Priya's sponsor approves a department correction. An authorized administrator maintains it in Okta. A colleague asks why the employee HR process does not apply.

Explain the source scoping and associations that make this appropriate. How does department inheriting from the profile source support both Maya and Priya? Then explain what changes in your investigation if an unexpected Workday association is discovered.

## 5. Challenge a fallback assumption

An excerpt does not show Maya's Workday department. AD shows Finance. Someone concludes: “Workday has no value, so AD automatically wins.”

Identify two unsupported steps in that conclusion. Name the evidence needed next.

## 6. Keep architectures distinct

In a separate AD-led company, an employee has AD as the applicable profile source and no applicable Workday source. AD controls department.

Why can AD control this field there while Workday controls Maya's department? Would this justify changing Northbridge's source order to fix one stale record?

## 7. Tell the complete story

Use this separate synthetic case without reopening the worked examples. The observations concern Maya's correctly linked records in the same Projects integration. Her approved department is Sales.

| Evidence | Observation |
|---|---|
| Source associations and order | Workday and AD both apply; Workday is first. |
| Field ownership | Department inherits from the profile source; work email is explicitly AD-sourced. |
| Department values | Workday: Sales; AD: Finance; Okta user profile: Sales. |
| Saved Projects mapping and app user profile | Sales evaluates to SAL; the app user profile contains SAL. |
| Projects account | FIN, displayed as Finance. |
| Password validation for the identified sign-in attempt | AD returned a successful result through the agent. |
| Projects account-update evidence | Not supplied. |

Explain the flow and identify the first demonstrated discrepancy along the Workday → Okta → Projects path. Would moving AD above Workday or resetting Maya's password be a supported correction? Explain why work-email ownership does not settle department ownership.

Choose the next evidence you would request. Say how two different possible findings would change your investigation; do more than ask for “the logs.”

## Check your understanding

For each answer, distinguish a stated business rule, observed configuration, observed value, and operation result. If a result is absent, say what you still need to establish.

[Day 4 answers](../self-checks/day-04.md) · [Course home](../index.md)

[Practice questions with explanations](../question-bank/day-04.md) · [Day 4 recap](../revision/day-04.md)
