---
title: The department changed, but the report did not
parent: Working through requests
nav_order: 3
---

# The department changed, but the report did not

Read after Day 14.

Omar moved from Operations to Finance at Cedar Lane. He can enter Ledger, but cannot open the Finance report. Someone suggests resending his profile because “the department must not have updated.”

## Decide where the evidence points

The approved request permits Omar to read the Finance report, but not approve payments. HR owns his department. The supplied evidence identifies the correct Ledger instance and account:

- HR and Okta both show Finance.
- The app user profile shows the target's approved `FIN` value.
- A completed profile update and later target read confirm `FIN` on Omar's linked Ledger account.
- A current sign-in is accepted, and Ledger creates an application session.
- A request for the Finance report receives an application permission denial.
- Ledger's role assignment has not yet been inspected.

Explain the first useful evidence request. What would resending the same department value establish?

<details markdown="1">
<summary>Compare your reasoning</summary>

The supplied evidence already confirms the department at the destination. Resending it would not explain the demonstrated permission denial. Ask the Ledger owner which permission controls the report and how Omar receives it.

Accepted sign-in establishes application entry for this attempt. It does not establish authorization for the report. Keep the requested read capability separate from payment approval.

Do not edit HR's correct department or give Omar a broad application role to avoid identifying the missing permission.

</details>

## The application owner's reply

Ledger requires a `Finance-Report-Reader` role. Its department field does not automatically assign that role. The application owner confirms that this role is maintained in Ledger, and no automated role-management path is configured for this integration. Omar has no report-reader role; his approved request authorizes it.

What action follows? Which result would close the request without granting more than was approved?

<details markdown="1">
<summary>Follow the decision through</summary>

The application owner should apply the approved report-reader permission through the authorized Ledger process. There is no evidence that another Okta group or profile push would create this role under the current design.

Verify Omar can read the intended report on the correct account. Also verify that he cannot approve payments, since that capability is excluded. Inspect whether obsolete Operations permissions need removal under the approved transfer; the packet does not establish their current state.

The shared design question is whether future Finance transfers need an explicit role-management step. Record that responsibility without claiming an automation capability the integration does not have.

</details>

## Close only what is verified

The follow-up confirms the report-reader role, successful Finance-report access, no payment-approval permission, and removal of the obsolete Operations role according to the transfer request.

> Omar's department update and sign-in were already correct. Ledger required a separately maintained report-reader role. The application owner applied the approved role and removed the obsolete Operations role. Finance-report access is verified, and payment approval remains unavailable.

The follow-up supplies the role and removal results that were unknown earlier. Those later observations justify the closure; the initial permission denial alone did not establish the missing role or the state of the obsolete Operations permission.

Now suppose the original target read had still shown `OPS`, and no role evidence was available. Would the same role diagnosis be established?

<details markdown="1">
<summary>Check the changed situation</summary>

No. You now have an uncorrected destination-data discrepancy as well as an unexplained report denial. Investigate the sent operation, target response, linked resource, and subsequent writes. Ask separately how the report permission is assigned. Do not assume fixing the department will grant the role, or that a missing role is already proven.

</details>

[Working through requests](index.md) · [Day 3](../lessons/day-03-profiles-and-mappings.md) · [Day 14](../lessons/day-14-requirements-and-responsibilities.md)
