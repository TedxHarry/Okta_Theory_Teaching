---
title: "Day 12: Joiners, movers, and leavers"
parent: Revision Guide
nav_order: 12
---

# Day 12 revision: Joiners, movers, and leavers

A lifecycle change is complete only when the required outcomes have been checked. “HR sent the change” and “the user now has the right access” are different points in the story.

## The concepts to keep with you

**Joiner, mover, and leaver.** A joiner needs approved initial access. A mover needs access reassessed for a changed role or situation. A leaver needs access removed at the approved effective point. Rehiring also needs a fresh access decision; it should not silently restore every old exception.

**Effective point, event receipt, and completion.** The business change becomes effective at an agreed time. Systems may receive and process it later. Track these separately so a received event does not hide an unfinished downstream change.

**Okta lifecycle status.** Status describes the Okta user's state. `STAGED` means created before activation is initiated or awaiting administrative action; `PROVISIONED` means pending user action in this lifecycle context, not that an application account was created. `ACTIVE` does not guarantee application access. `RECOVERY` means password recovery, `PASSWORD_EXPIRED` means the password has expired, and `LOCKED_OUT` means a lockout condition was reached. None is proof of a target application's state.

**Suspension, deactivation, and deletion.** Suspension (`SUSPENDED`) blocks Okta access while retaining assignments and groups and does not itself perform the taught SCIM deactivation. Completed Okta deactivation (`DEPROVISIONED`) removes application assignments and invokes configured deprovisioning, while group memberships are retained. Downstream work may be asynchronous or fail. Deletion is a separate, irreversible operation, not a routine fix for incomplete deprovisioning.

**Account state and session state.** A disabled account and an already established application session are separate things to inspect. Here, notice and flag continuing access. Day 13 explains the session mechanisms in more detail.

## Follow Maya's move

Maya moves from Sales to Finance. The expected result includes ending Sales access without an approved exception and retaining Projects with department `FIN`.

The evidence confirms that her Sales-group membership ends, but a direct Salesforce assignment remains after its approval has ended. A new Salesforce session shows a real remaining access path. Removing the group was therefore insufficient.

Projects shows the confirmed `FIN` update on the retained account. That verifies the department change. The packet does not establish successful Projects entry, so keep that outcome open rather than writing “Projects works.”

## Follow Jordan's departure

Jordan's Okta deactivation and AD disablement are confirmed. Projects returned a failed deactivation response and still shows an active account. His existing Expense session also receives a new protected response.

Those are two outstanding target issues: the Projects account state and the checked Expense session. The packet supplies no successful correction for either one. Blocking a fresh Okta sign-in does not close either one. Verify the Projects correction and the Expense access outcome separately; do not reactivate Jordan or delete accounts merely to make the workflow easier.

## When a request reaches you

Choose activation, unlocking, password recovery, authenticator replacement, suspension, or deactivation according to the actual state and approved event. Keep a separate verified outcome for every affected target.

## Check your understanding

From memory, give Maya and Jordan separate updates. For each, name a completed change, a remaining discrepancy, and the specific result needed for closure. Include the access Maya must keep, and keep Jordan's Projects and Expense outcomes separate.

- Why is receiving the HR event insufficient evidence of lifecycle completion?
- What remained wrong after Maya left the Sales group?
- If Projects is corrected, what still needs checking for Jordan?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. Receipt starts processing; downstream changes can be delayed or fail. Verify the required outcomes at the approved effective point and record unfinished work.

2. A direct Salesforce assignment remained after its approval ended, and a new session demonstrated continued access. The group removal did not remove every path.

3. Check and end the continuing Expense access through its authorized process, then verify the result. A corrected Projects account does not close the separate Expense issue.

</details>

[Full lesson](../lessons/day-12-joiners-movers-leavers.md) · [Exercises](../exercises/day-12.md) · [Lesson exercise answers](../self-checks/day-12.md) · [All recaps](index.md)

[Previous recap: Day 11](day-11.md) · [Next recap: Day 13](day-13.md)

[Practice questions with explanations](../question-bank/day-12.md)
