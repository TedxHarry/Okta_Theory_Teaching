---
title: A connection needs new credentials
parent: Working through requests
nav_order: 5
---

# A connection needs new credentials

Read after Day 14.

The Records application at Cedar Lane uses SAML for sign-in and a separately authorized provisioning connection for account updates. Two requests arrive: the signing certificate needs replacement, and the provisioning credential must be rotated. They concern the same application but different relationships.

**Rotation** means replacing a credential or key through a coordinated transition. A new value is useful only when the systems using it agree and the intended operation works afterward.

## Compare the two relationships

| Relationship | What it supports | What must agree |
|---|---|---|
| SAML signing key and trusted certificate | The application's verification of signed SAML information | The active signing key and the public certificate the application trusts, together with its other validation requirements. |
| Provisioning service credential | Authorization for the connector's account operations | The configured service identity or credential, its validity, and the target permissions required for those operations. |

Neither is the end user's password. A successful SAML attempt does not test the provisioning credential, and a successful profile update does not test SAML trust.

## The certificate request

The application owner confirms that the current signing certificate will expire and supplies the supported replacement process. The production application presently trusts only the current certificate. Okta contains a newly generated certificate that has not been activated for this connection. No target trust update has been performed.

Would activating the new certificate now establish a working connection? What must be coordinated first?

<details markdown="1">
<summary>Compare the transition reasoning</summary>

Generating the certificate does not update the application's trust. Activating a different signing key before the target can validate it can interrupt sign-in. Agree on the supported transition with the application owner, including whether overlapping trust is possible, the affected instance and population, the activation order, verification, and a supported recovery path.

Read the integration's active signing choice and the target's trusted certificate. Do not assume certificate handling is identical across connectors. See [Okta signing-certificate management](https://help.okta.com/oie/en-us/Content/Topics/Apps/manage-signing-certificates.htm).

Use a fresh SAML attempt to verify the transitioned connection. An existing application session can keep serving pages without validating a newly signed assertion, so it is not sufficient evidence.

</details>

## The provisioning request

In an independent packet, SAML sign-in succeeds. A provisioning update receives an authorization failure. The target owner confirms that the old service credential has been revoked, the integration still uses it, and an approved replacement is available through the protected credential process.

What should change? Would a successful connection test alone close the failed account update?

<details markdown="1">
<summary>Follow the account operation</summary>

The revoked configured credential explains the supplied authorization failure. The authorized owners should replace it through the supported connection process, preserving the required permissions and protecting its value. A user's password or an ID token from another application does not belong in that field.

A successful connection test helps establish that the connection now works for the tested operation. It does not establish completion of the failed update. Review the queued or failed work, the linked target record, and the supported retry behavior. Verify the intended update and a later destination read before closing that part of the request.

If a create operation had an uncertain outcome, inspect whether the target resource already exists before resubmitting it. Recovering the connection should not create duplicate accounts.

</details>

## Explain the verified result

The final packet explicitly confirms both independent outcomes: a fresh SAML assertion is validated after the coordinated certificate transition, and the retried profile update is accepted with a destination read showing the intended value on the existing linked account.

> The signing transition is verified by a fresh accepted SAML attempt in the production instance. The provisioning credential replacement is verified by the connection check and the completed account update with a matching target read. The two operations were checked separately.

These findings cover the checked signing transition and linked account update. They do not establish that every Records user, provisioning operation, or application permission has been verified. Broader acceptance checks depend on the approved change scope.

Now remove one piece of evidence: the connection test succeeds, but the account update still reports a permission denial. What remains unresolved?

<details markdown="1">
<summary>Check the changed situation</summary>

The particular account operation remains unresolved. Investigate the replacement identity's permission for that operation and resource, together with the new response. A credential can be accepted for a connection test without having every required account-management permission. Do not report the update as successful or broaden permissions without establishing the approved need.

</details>

[Working through requests](index.md) · [Day 8](../lessons/day-08-saml.md) · [Day 10](../lessons/day-10-scim.md)
