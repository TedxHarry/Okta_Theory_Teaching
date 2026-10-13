---
title: "Day 13: self-check answers"
parent: Self-Checks
nav_order: 13
---

# Day 13: Self-check answers

Attempt the [exercises](../exercises/day-13.md) first. Explain each result in the context of its policy, operation, and service.

## 1. Separate the requirements

Enrollment establishes the account's authenticator association. The valid Okta session establishes the supplied session state. Assignment establishes the relationship permitting the application access path in Okta. Current authentication evidence must still satisfy the actual app rule. Expense's internal authorization decides the relevant business permission.

Revisit **Give each policy a specific job**.

## 2. Explain the expected challenge

The existing session does not make the older possession evidence fresh enough. The matched rule requires renewed proof, and Daniel has an eligible method. Issuance alone does not show delivery, approval, or accepted authentication.

Investigate the selected enrollment, challenge delivery, response, and correlated outcome if completion fails. Do not infer a wrong password, missing enrollment, or policy defect from P-1. Revisit **Follow Daniel's expected challenge**.

## 3. Judge the successful follow-up

Daniel completed the stated authentication and reached his intended Expense account in P-2. This does not establish an expense-approval permission or success of another attempt. It also does not demonstrate a new account-provisioning operation.

Revisit **Follow Daniel's expected challenge** and the SSO/provisioning distinction.

## 4. Locate the configuration problem

The observed order allows the broad rule to match before the intended restrictive rule. Check the approved design, policy-to-app associations, rule conditions, and populations affected by a shared policy. Restore the approved behavior and verify a request that should match the restrictive rule and another that should take a different path.

Entry through the broad rule would not establish compliance with the approved restrictive requirement. Judge the applied rule and accepted proof against the intended design, rather than treating any successful entry as a correct result. P-3 supplies the defect, but no verified corrective follow-up.

This is authentication-rule selection, not profile-source priority. Revisit **Identify the policy that actually applies** and **Contrast a genuine policy-selection problem**.

## 5. Correlate the evidence

A success in another application's transaction does not establish the current Expense outcome. A missing session identifier does not by itself make a record irrelevant; examine actor, targets, transaction, sequence, context, and other available correlation evidence.

Event uuid identifies an individual event. transaction.id connects events in an operation. externalSessionId relates events within an Okta user session, not Expense's local session. A journey can span multiple transactions. Revisit **Build a correlated evidence trail**.

## 6. Explain the two sessions

The checked Okta session ended successfully, while Expense continued accepting its independently managed local session. The supplied application evidence supports that explanation for this packet. No user deactivation occurred in S-13.

An ID token and the session created after its validation are different objects. Account administrative state is another object again. Neither token expiration nor active false alone demonstrates the result of a subsequent protected request through an existing session. Revisit **Explain why two sessions matter**.

## 7. Define the sign-out outcome

Okta-session termination is verified. The Expense owner must complete the supported local-session termination and verify that the old session no longer authorizes a protected request. Distinguish a newly created session from continued use of the old one, and check other sessions if the requirement includes them. S-13 supplies no successful Expense termination result, so keep that part of the requirement open.

Local logout concerns the application's session. SLO coordinates supported participating integrations under their configuration; its scope and results still need evidence. A remaining Okta session can support another app sign-in when applicable requirements are satisfied, so a prompt-free return is not by itself proof of failed local logout.

Jordan's record remains a separate investigation. Daniel's mechanism offers an explanation to investigate, not evidence establishing Jordan's cause. Revisit **Define what signing out must accomplish**.

## Optional changed condition

Replace P-1's freshness finding: the selected rule accepts the existing proof, yet Daniel reports another prompt. Is the original explanation still established?

<details>
<summary>Check the reasoning</summary>

No. Determine which service issued the prompt and correlate the actual request, policy evaluation, browser/session context, and application behavior. Another attempt or another requirement may be involved, but neither is supplied. Do not retain the stale-proof diagnosis after its supporting fact changes.

</details>

[Return to Day 13](../lessons/day-13-policies-and-sessions.md) · [Course home](../index.md)

[Revise Day 13](../revision/day-13.md): revisit the concepts, example, and questions without rereading the full lesson.
