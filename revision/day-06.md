---
title: "Day 6: Active Directory"
parent: Revision Guide
nav_order: 6
---

# Day 6 revision: Active Directory

An AD import succeeded this morning, but Jordan cannot sign in now. Those facts can both be true. Importing a record and validating a password use different operations, even when the same integration is involved.

## The concepts to keep with you

**Active Directory Domain Services, or AD DS.** This is Microsoft's directory service used in the lesson. A domain is a directory and administrative boundary. A domain controller, or DC, is a server that provides domain services, including the credential validation relevant to this example.

**Organizational unit, or OU.** An OU organizes directory objects and can help define import scope. It is not a group. If an object is outside the selected import scope, its absence from the import does not prove it is absent from AD.

**Okta AD agent.** The agent is integration software that communicates between Okta and the AD environment. It is not the domain controller. Agent communication and the agent's ability to reach a DC are things to verify, not assume.

**Import.** Import reads selected directory records into the integration's processing. It provides evidence about that data operation. It does not test every later sign-in path.

**Delegated authentication.** In the configured password path, Okta passes the validation request through the AD agent to a domain controller, then receives the result. AD validates the credential in that path. Whether the user meets further Okta or application requirements is a separate question.

**Password synchronization.** This propagates a password change to a supported destination through a configured process. Delegation instead asks AD to validate credentials during an attempt. Do not treat delegated authentication, profile import, and password synchronization as interchangeable. The Password Sync Agent also has a distinct purpose from the AD agent discussed in the delegated flow.

## Read Jordan's result carefully

In attempt J-1, the first packet shows a timeout between the agent and the selected domain controller. There is no acceptance or rejection from AD. Saying “Jordan entered the wrong password” would go beyond the evidence.

A different packet, for independent attempt J-2, contains an explicit credential rejection. Now the validation path returned a negative result, but the precise reason still needs investigation. Check the identity submitted and relevant account restrictions rather than assuming a typo. A user principal name (UPN), an AD sign-in identifier often written in an email-like form, is not automatically the person's mailbox address.

The linked follow-up J-3 confirms that the identified route is repaired and AD accepts Jordan's credentials. This supports recovery of the checked connection and password validation in J-3. It does not establish the cause of the independent J-2 rejection. It does not prove MFA, application entry, or application permissions succeeded.

Priya has no AD account in Northbridge's contractor model. Do not put her into Jordan's delegated path just because both use Okta.

## When a request reaches you

Give the directory owner the identity, time, agent, domain controller, and observed result. A repaired route needs a fresh credential-validation result; agent availability alone does not close the user's request.

## Check your understanding

Without looking back, compare J-1, J-2, and J-3. For each, say whether AD returned a credential result, what that result establishes, and what remains unknown. Then explain why the earlier successful import cannot answer those password questions.

- What does an import prove that a delegated-authentication result does not, and vice versa?
- Why is a timeout different from a rejected credential?
- What remains to check after AD accepts Jordan's password?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. Import success concerns reading and processing selected directory data. A delegated-authentication result concerns credential validation for a particular attempt. Neither replaces the other.

2. A timeout supplies no acceptance or rejection from the DC. A rejection is a returned negative result, although its exact cause may still need evidence.

3. Check remaining Okta requirements, application sign-in, and the required application permission. AD acceptance establishes only the password-validation step.

</details>

[Full lesson](../lessons/day-06-active-directory.md) · [Exercises](../exercises/day-06.md) · [Lesson exercise answers](../self-checks/day-06.md) · [All recaps](index.md)

[Previous recap: Day 5](day-05.md) · [Next recap: Day 7](day-07.md)

[Practice questions with explanations](../question-bank/day-06.md)
