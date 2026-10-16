---
title: "Day 7: self-check answers"
parent: Self-Checks
nav_order: 7
---

# Day 7: Self-check answers

Attempt the [exercises](../exercises/day-07.md) first. Keep configuration, enrollment, authentication evidence, and application authorization separate.

## 1. Count proof, not prompts

Ask what each interaction proves. Both password entries ask for something the person knows, so repeating that kind of check does not add a different factor type.

The password-plus-registered-device example asks for knowledge and possession. Those are different factor types when the stated methods are successfully validated. The important distinction is the accepted proof, not how many screens the user saw.

The number of screens does not identify the kinds of proof. A supported interaction may also establish multiple factors without multiple separate prompts.

Revisit [Why a password may not be enough](../lessons/day-07-authenticators-enrollment-mfa.md#why-a-password-may-not-be-enough) if your answer counted screens instead of evidence.

## 2. Installed but not enrolled

Northbridge allows Okta Verify, and Daniel has installed it. What is missing is the registration for his Northbridge account. Since that setup is required now, asking him to complete it fits the supplied facts.

Seeing another organization's account in the app would show a different registration. Check the account and device that this Northbridge sign-in actually needs.

Verify completion through the approved enrollment process for Daniel's correct account and supported device. There is no password or department defect in the supplied evidence.

Revisit [Separate availability, enrollment, and use](../lessons/day-07-authenticators-enrollment-mfa.md#separate-availability-enrollment-and-use) if you treated installed software as an enrolled credential.

## 3. Required enrollment

The enrollment rule answers 'What must Daniel register?' The access requirement answers 'What evidence must this attempt provide?' Completing the first does not turn it into a rule that every application must challenge him on every visit.

Inspect the actual applicable requirement, relevant prior-authentication/session context, and the attempt's decision and results. Detailed policy mechanics are not required for this answer.

Revisit [Two requirements with different jobs](../lessons/day-07-authenticators-enrollment-mfa.md#two-requirements-with-different-jobs) if required enrollment became “challenge on every visit.”

## 4. Issued is not accepted

The packet establishes accepted password evidence, enrollment, and an issued Push request. It does not establish delivery, approval, or successful response validation.

Possible explanations include delivery failure or a received request that Daniel denied. Request the relevant delivery/device and response evidence for D-2. A recorded denial would support a different investigation from evidence that the notification never reached the selected device. Neither cause is proven by the packet. Describe the gap as “Push issued; no accepted response recorded,” rather than “Daniel denied it” or “the phone never received it,” until the distinguishing evidence is supplied.

The password result is already accepted. Changing it would not establish whether Daniel received and completed this Push request.

**Revisit:** [Enrollment does not answer a challenge](../lessons/day-07-authenticators-enrollment-mfa.md#enrollment-does-not-answer-a-challenge)

## 5. Same app, different method

TOTP is not Push, and an unrelated event is not evidence for the identified attempt. The supplied requirement explicitly calls for Push; a generic Okta Verify label does not satisfy that reasoning gap.

Obtain the accepted Push result tied to the relevant user, enrollment, and attempt, together with the decision that the stated requirement was satisfied.

Revisit [Okta Verify methods are not interchangeable](../lessons/day-07-authenticators-enrollment-mfa.md#okta-verify-methods-are-not-interchangeable) and Day 2's event-context explanation.

## 6. FastPass without a password

None of those conclusions follows. FastPass uses cryptographic authentication through Okta Verify. Absence of a typed password does not establish absence of proof, factor count, or AD password validation.

Inspect the actual method, supported flow, required properties, user-verification evidence where relevant, and validation result. FastPass and Push are distinct experiences; neither an enabled setting nor a product name proves a particular requirement was met.

Revisit [Where FastPass fits](../lessons/day-07-authenticators-enrollment-mfa.md#where-fastpass-fits) if passwordless became synonymous with single-factor or no authentication.

## 7. Write a precise update

A supported update is:

> Your enrollment is complete, and the password and Push checks satisfied the stated requirement for D-3. We still need to establish what Expense accepted and which application permissions you have. If you can enter Expense but cannot approve, we will compare the approval requirement with your permissions and the application's denial evidence.

If application entry itself is unknown, obtain that observation before treating the problem as a proven permission issue. Authentication success does not establish provisioning, target account state, or approval authority. D-3 verifies the stated requirement for the new attempt; it does not explain D-2's missing accepted response or prove that a particular repair was made.

Revisit Day 1's Daniel example and [Keep the evidence tied to the question](../lessons/day-07-authenticators-enrollment-mfa.md#keep-the-evidence-tied-to-the-question) if you inferred full access from completed authentication.

## Ready to continue

Explain available → enrolled → required for this attempt → accepted result, then name the remaining application checks. If any arrow depends on an assumption, identify it. Also name the method: accepted TOTP, Push, and FastPass evidence should not be substituted for one another when explaining a method-specific requirement. That prepares you to examine the sign-in information an application receives in Day 8.

[Return to Day 7](../lessons/day-07-authenticators-enrollment-mfa.md) · [Course home](../index.md)

[Revise Day 7](../revision/day-07.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-07.md) · [Day 7 recap](../revision/day-07.md) · [Reasoning exercises](../exercises/day-07.md)
