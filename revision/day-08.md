---
title: "Day 8: SAML"
parent: Revision Guide
nav_order: 8
---

# Day 8 revision: SAML

With SAML, Salesforce does not simply take Okta's word for it because a message arrived. It checks whether the message belongs to the trusted relationship and whether it can identify the intended user.

## The concepts to keep with you

**Identity provider and service provider.** Okta is the identity provider, or IdP, in this example. Salesforce is the service provider, or SP. The browser carries messages between them. The flow does not send Maya's AD password to Salesforce.

**Assertion.** A SAML assertion contains statements about the subject and authentication. It travels within the response in the lesson's flow. Reading its XML lets you inspect supplied information; reading it is not the same as validating it.

**ACS URL.** The Assertion Consumer Service address is the endpoint that receives the SAML response. An endpoint is an address for a particular operation. Sending the response to an address and naming its intended audience are separate matters.

**Entity ID, audience, and NameID.** An Entity ID identifies a SAML party. The audience identifies the intended recipient of the assertion. NameID identifies the subject for the application's configured matching approach. Do not confuse an application identifier with a user's identifier.

**Metadata and signing certificates.** Metadata describes connection information. A trusted signing certificate helps the recipient verify the signature. A signature supports integrity and authenticity checks; it is not encryption. The mere presence of a signature element proves neither successful verification nor confidentiality.

**Validation.** The recipient checks the relevant issuer, signature and trusted key, audience, destination, validity, request relationship, replay protections, and user identification. A correct NameID does not cancel a failed audience check.

## Walk through the flow and the failure

In an SP-initiated flow, Salesforce sends an authentication request through the browser to Okta. After the required authentication, Okta returns the response through the browser to Salesforce's ACS. In an IdP-initiated launch, the starting sequence differs; do not invent the same preceding SP request.

The lesson's failing packet S-1 targets the production Salesforce connection but supplies the test audience. The rejection identifies that mismatch, while the supplied evidence supports the other stated checks. Correct the emitted audience for the intended connection and verify a new attempt. Disabling audience validation would remove a trust check rather than repair the relationship. S-1 supplies the defect and the proposed verification steps; it does not supply a successful retest.

A separate packet, S-2, has an outdated NameID. Investigate the application's actual matching field. The main example uses username, but another connection may use Federation ID.

Finally, accepted SAML does not automatically create an account. Just-in-time creation needs its own supported configuration. Successful entry also leaves application permissions to check. Exercise 7 supplies S-3: accepted validation and entry into an existing account, followed by a denied action. That packet supports an authorization investigation without demonstrating account creation or supplying a configuration-change history.

## When a request reaches you

Compare the saved connection with the actual SAML message and target trust. A newly generated signing certificate is not automatically trusted by the application. Verify a coordinated transition with a fresh SAML attempt.

## Check your understanding

From memory, give ACS, audience, and NameID one job each. Then explain what the shortened S-1 XML shows, what the application report adds, and what a fresh attempt would need to establish before you call the proposed correction verified.

- How do ACS, audience, and NameID serve different purposes?
- Why does visible XML or a signature element not prove validation succeeded?
- What distinguishes the audience failure from an application permission denial after entry?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. ACS is where the response is delivered. Audience names its intended recipient. NameID identifies the subject for the configured account-matching approach.

2. Readable XML shows supplied content, and a signature element shows a signature was supplied. The recipient must still verify the signature and all other applicable trust and validity checks.

3. The audience failure rejects the SAML message before accepted entry. A denied action after confirmed entry concerns application authorization. Investigate the boundary actually shown.

</details>

[Full lesson](../lessons/day-08-saml.md) · [Exercises](../exercises/day-08.md) · [Lesson exercise answers](../self-checks/day-08.md) · [All recaps](index.md)

[Previous recap: Day 7](day-07.md) · [Next recap: Day 9](day-09.md)

[Practice questions with explanations](../question-bank/day-08.md)
