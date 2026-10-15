---
title: "Day 8: exercises"
parent: Exercises
nav_order: 8
---

# Day 8: Reasoning exercises

Use the fictional configuration in the [lesson](../lessons/day-08-saml.md). These excerpts and reports are teaching evidence, not material to submit to a live system.

Keep the expected connection settings, observed message fields, and application validation report separate. When you say a check passed or failed, name which evidence supports that conclusion.

## 1. Follow the participants

Maya starts at Salesforce, travels to Okta, completes required checks, and returns with a SAML response. Name the IdP and SP, explain the browser's role, and distinguish the authentication request from the assertion. Does Salesforce receive Maya's AD password in this flow?

## 2. Address or identity?

The ACS is `https://salesforce.northbridge.example/saml/acs`. The expected audience is `https://salesforce.northbridge.example/entity/prod`.

Why are these different? If the browser reaches the ACS successfully, does that prove the audience is correct?

## 3. Read the assertion

In S-1's XML, identify issuer, NameID, and audience. Compare the audience with the expected value. Which important validation checks cannot be performed from this shortened excerpt?

## 4. Explain the supported correction

The S-1 application report explicitly rejects the test audience in the production connection. Its signature and validity checks passed. Maya's intended active account has the correct username.

What defect is established? Propose the correction and the evidence needed from a new attempt. Explain why changing Maya's username or disabling audience validation is not supported. What affected users or connection scope should be reviewed before changing a shared setting?

## 5. A different identity rule

In a separate connection, the SP is configured to match NameID to Federation ID. The target username differs from NameID, but the approved Federation ID matches it.

Does the username difference establish a matching defect? What additional evidence is needed before claiming successful application access?

## 6. Signature versus trust

A colleague can read an assertion and sees a Signature element. They conclude it is encrypted and trustworthy.

Explain both unsupported conclusions. Why do trusted signing configuration and actual verification matter? Would successful signature verification alone settle audience, validity, and account matching?

## 7. Describe the limit of success

A new correlated attempt S-3 has accepted application validation and confirmed entry into Maya's intended existing account. She is denied a particular Salesforce action.

What succeeded, and what question remains? Does the evidence show that SAML created her account? Explain how a separately configured JIT capability would differ from that assumption.

[Self-check answers](../self-checks/day-08.md) · [Course home](../index.md)

[Practice questions with explanations](../question-bank/day-08.md) · [Day 8 recap](../revision/day-08.md)
