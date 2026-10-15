---
title: "Day 8: self-check answers"
parent: Self-Checks
nav_order: 8
---

# Day 8: Self-check answers

Attempt the [exercises](../exercises/day-08.md) first. Use the specified connection's expectations when comparing values.

## 1. Follow the participants

Okta is the IdP and Salesforce the SP. The browser carries the browser-based messages. The SP's authentication request asks for authentication; the response returns protocol information containing the assertion in this successful-response flow. The assertion describes the user and authentication under conditions the SP must check.

Salesforce receives SAML information, not Maya's AD password. Any earlier delegated password validation is separate. Revisit **Request, response, and assertion** if those objects became synonyms.

**Revisit:** [Follow the browser](../lessons/day-08-saml.md#follow-the-browser)

## 2. Address or identity?

The ACS is the receiving endpoint. Audience identifies the SP for which the assertion is intended. A response can arrive at the correct endpoint with an unacceptable audience inside it.

Delivery therefore does not establish valid content. Revisit **The two sides need agreed configuration**.

**Revisit:** [The two sides need agreed configuration](../lessons/day-08-saml.md#the-two-sides-need-agreed-configuration)

## 3. Read the assertion

The issuer is the identity.northbridge.example IdP identifier. NameID is maya.rao@northbridge.example. The audience ends in /entity/test, while the expected value ends in /entity/prod.

The excerpt supports this field comparison. It does not supply complete signature material, validity fields, authentication statements, response/request correlation, or all other required content. It is not sufficient to validate an actual response. The later S-1 application report supplies the stated validation results; those results cannot be inferred from the three visible fields alone.

Revisit [Read a small piece of XML](../lessons/day-08-saml.md#read-a-small-piece-of-xml) and [What the application must validate](../lessons/day-08-saml.md#what-the-application-must-validate) if readable structure became proof of authenticity.

## 4. Explain the supported correction

The assertion has the wrong audience for the checked production connection, and the report confirms that mismatch as the rejection reason. Compare the approved settings on both sides and correct the setting responsible for the emitted test audience.

Then collect a new assertion and application result for the same intended user and instance. Confirm the production audience, accepted validation, and entry into the intended account. Check application permissions separately as needed. Review the intended production integration and the users who share it before changing its setting; do not apply a test connection's value to production simply because the labels look similar. The initial S-1 packet establishes the defect, not a completed correction.

Changing the correct username affects a different field. Disabling validation would remove a required check instead of correcting the mismatch. Revisit **Establish the audience defect**.

**Revisit:** [Establish the audience defect](../lessons/day-08-saml.md#establish-the-audience-defect)

## 5. A different identity rule

No. This connection matches Federation ID, so a different username does not establish a matching defect. The supplied matching Federation ID supports the intended identity comparison.

Still verify the complete application's validation outcome, correct account/state, and actual entry. A matching identifier alone does not establish all other conditions or permissions.

Revisit [A different NameID calls for a different investigation](../lessons/day-08-saml.md#a-different-nameid-calls-for-a-different-investigation) if you assumed NameID must always equal an email address or username.

## 6. Signature versus trust

A signature does not encrypt the message, and the presence of a Signature element does not prove it verifies. The recipient needs trusted signing information and successful verification of the required signed content.

Even a valid signature does not settle whether the assertion is intended for this SP, is currently usable, belongs to the expected request where applicable, or maps to the correct account. Revisit **What the application must validate**.

**Revisit:** [What the application must validate](../lessons/day-08-saml.md#what-the-application-must-validate)

## 7. Describe the limit of success

Application validation and entry into Maya's intended account succeeded. The remaining question concerns the denied action: compare its permission requirement, Maya's actual permissions, and application-side denial evidence. Do not infer a bad password or audience mismatch from that later denial.

The account was stated to exist beforehand, so the packet does not show SAML creating it. JIT is a separately supported and configured account-management capability that may run during sign-in; its occurrence and result need evidence. The S-3 observations concern the new attempt and its existing account. They do not supply the configuration-change history or explain which repair was performed.

Revisit [Authentication does not define the account lifecycle](../lessons/day-08-saml.md#authentication-does-not-define-the-account-lifecycle) and Day 1's authentication/authorization distinction.

## Ready to continue

Tell the SP-initiated story without XML, then use the excerpt to locate the three named fields. Explain one case where delivery succeeds but validation fails and one where sign-in succeeds but an application action is denied.

[Return to Day 8](../lessons/day-08-saml.md) · [Course home](../index.md)

[Revise Day 8](../revision/day-08.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-08.md) · [Day 8 recap](../revision/day-08.md) · [Reasoning exercises](../exercises/day-08.md)
