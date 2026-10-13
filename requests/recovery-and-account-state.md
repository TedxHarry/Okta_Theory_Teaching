---
title: A replacement phone and a locked account
parent: Working through requests
nav_order: 4
---

# A replacement phone and a locked account

Read after Day 14.

Nora has replaced her phone. She says, “My password works, but the sign-in keeps asking for my old phone.” Her manager asks the help desk to reset her password.

## Separate the reported symptom from the action requested

The records show Nora's verified Okta-managed identity is Active. Her application assignment remains approved. The current attempt accepted her password and issued an Okta Verify challenge, but no accepted response is recorded. Her enrolled old device is unavailable. She has no usable alternative method under the applicable recovery process.

Her caller identity has **not** yet been verified through that process. The manager's message confirms the access request, not who is participating in the recovery interaction.

Decide what is known, what must happen before a reset, and which type of reset could address this situation.

<details markdown="1">
<summary>Compare your reasoning</summary>

The demonstrated obstacle is the unavailable authenticator method, not a rejected password. A password reset would not establish usable possession proof on the new phone.

First complete the organization's approved identity-verification and recovery process. The person performing the action also needs authority for that user and operation. If verification cannot be completed, escalate through the protected recovery route rather than bypassing the authentication requirement.

After successful verification and authorization, the relevant enrollment can be reset through the supported process. Okta documents authenticator reset separately from password recovery. See [reset multifactor authentication](https://help.okta.com/oie/en-us/content/topics/security/mfa/mfa-reset-users.htm).

</details>

## Follow the replacement through

The next packet confirms that the approved verification and authorization are complete. The selected old enrollment is reset. Nora registers the replacement device in the correct organization, and a new attempt supplies the required proof. The intended application accepts her sign-in.

Which facts belong in the closure note? Does the reset alone prove these results?

<details markdown="1">
<summary>Compare the completion evidence</summary>

Record the affected method, completed verification through the approved process, authorized reset, replacement enrollment, and successful permitted sign-in. Do not place recovery secrets or unnecessary personal verification information in the ticket.

The reset action alone proves neither enrollment on the new device nor accepted authentication. Those outcomes need the later evidence supplied here. Application permission changes were not required by this request.

> Nora's password was accepted, but her enrolled device was unavailable. After the approved recovery checks, the selected enrollment was reset. Replacement enrollment and the required proof are confirmed, and the intended application accepted a new sign-in. Her approved assignment was retained.

</details>

## Choose among different account actions

The label “cannot sign in” can describe several situations. Read the state and its system before selecting an action.

| Observation | Question to resolve | Why another action is insufficient |
|---|---|---|
| Activation is pending | Which activation step or user action remains? | Unlocking does not complete activation. |
| The Okta-managed account is locked | Is this the relevant lockout, and what caused the failed attempts? | Unlocking does not change a forgotten password or stop an uncorrected source of repeated attempts. |
| Password recovery is needed | Where is the password managed, and which recovery method is permitted? | Resetting an authenticator does not reset that password. |
| An enrolled method is unavailable | Can identity be verified and that enrollment replaced through the approved process? | Password reset does not establish a usable replacement method. |
| The person is suspended or deactivated | What business event and authoritative process set that state? | A recovery request is not approval to restore withdrawn access. |

For AD-delegated users, check the AD account and returned credential result as well as the Okta state. Do not assume an Okta-side action clears an AD-side condition.

Now consider Eli, a different Okta-managed user. His account is locked after repeated password failures. There is no evidence that he lost his authenticator. Nora's successful recovery supplies no identity-verification or recovery result for Eli. Explain why Nora's enrollment-reset action should not be copied into his ticket, and what you would establish before an authorized unlock or password-recovery action.

<details markdown="1">
<summary>Check Eli's situation</summary>

The evidence identifies a lockout following password failures, not an unavailable authenticator. Verify the requester, confirm the account and credential ownership, and investigate the repeated attempts. Determine whether the password is known and usable or recovery is required. After an authorized action, verify the resulting state and a new permitted attempt; look for recurring failures instead of repeatedly unlocking without investigating.

</details>

[Working through requests](index.md) · [Day 7](../lessons/day-07-authenticators-enrollment-mfa.md) · [Day 12](../lessons/day-12-joiners-movers-leavers.md)
