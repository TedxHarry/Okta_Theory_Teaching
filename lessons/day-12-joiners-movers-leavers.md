---
title: "Day 12: Joining, moving, and leaving"
parent: Lessons
nav_order: 12
---

# Day 12: Joining, moving, and leaving

Maya's move to Finance has taken effect. Jordan's employment has ended. Alex receives two tickets: “Maya still has Sales access” and “Jordan's application session still works.”

Both concern a change in someone's relationship with Northbridge, but the required outcomes differ. Maya needs to keep working with the access her new role requires. Jordan's workforce access must end. Alex starts with those approved requirements before deciding which account action fits. Neither ticket can be resolved by checking only one profile field or one green event.

Follow the business event into the correct identity, then inspect the affected assignments, target accounts and access results. We will use Maya's remaining Salesforce assignment and Jordan's two outstanding application issues to see where an otherwise successful change can remain incomplete. By the end, trace an approved employment change across the affected systems and distinguish completed outcomes from access that still needs attention.

**Joiner, mover, and leaver**, often shortened to **JML**, describes the identity and access changes associated with starting work, changing responsibilities, and leaving. The business event defines the intended outcome; configured systems must carry it through to the relevant accounts and access paths.

## Name the state and its system

If a colleague says “Jordan is inactive,” Alex needs to know which record was checked. “Active” is incomplete without an object. Jordan's employment record, Okta account, Projects account, and browser session describe different things. The same person can have different observed states across those systems while a departure is still being processed.

| Observation | Meaning |
|---|---|
| HR employment has ended | A business fact with an effective point and approved lifecycle consequence. |
| Okta user is Active | An Okta account state; not proof of ongoing employment or working application access. |
| Projects user has active true | A target account's administrative state under the Projects contract. |
| An application accepts a session | An observed access result in that application. |

Read each table row at its own boundary. HR supplies the business fact. Okta has an account state. Projects has its target state, and a session check shows whether that application accepted a request. A result in one row cannot supply the missing result in another.

A department or employment field is profile data. It does not become an account-lifecycle action merely because its value changes. Northbridge's configured Workday-driven lifecycle processing must interpret the relevant event, act on the correct identity, and produce verifiable results.

The **effective point** is when the approved business change takes effect. An event's arrival and the completion of downstream changes are separate observations. A future start recorded today does not by itself authorize access today; a departure event arriving on time does not prove every target finished removing access.

## Recognize the relevant Okta account states

The API and Admin Console sometimes use different labels. These are the main distinctions for this lesson, summarized from [Okta's account-status reference](https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-end-user-states.htm):

| API status | Console label | How to read it |
|---|---|---|
| STAGED | Staged | Created before activation is initiated, or awaiting administrative action. |
| PROVISIONED | Pending user action | Activation-related user action remains. This does not mean every application account was provisioned. |
| ACTIVE | Active | Account is enabled; authentication requirements and application access still need their own checks. |
| RECOVERY | Password reset | Account is in a password-recovery state. |
| PASSWORD_EXPIRED | Password expired | Password update is required. |
| LOCKED_OUT | Locked out | A lockout condition has been reached. |
| SUSPENDED | Suspended | Okta access is suspended while assignments are retained. |
| DEPROVISIONED | Deactivated | Okta account has been deactivated; distinct from deletion. |

Use the status names to understand the Okta account that was checked, rather than memorize a sequence every user must follow. These are not mandatory stations in one journey. Account creation, authentication arrangements, and configured lifecycle behavior affect which states occur. A lockout is not an HR termination, and Pending user action is not evidence of a Projects create. The familiar word “provisioned” has an account-status meaning here; Day 10's target creation needs its own evidence.

**Suspension** blocks Okta access while retaining app assignments and group memberships. Unsuspension is a different decision from reconstructing removed access. See [suspension behavior](https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-suspend.htm).

**Deactivation** removes Okta app assignments and invokes applicable configured deprovisioning. Group memberships are retained. **Deletion** removes the Okta user and cannot be undone; it is a separate action after deactivation. It is not a troubleshooting shortcut. Deactivation can run in the background, so a requested action is not itself evidence of completion. See [deactivation and deletion](https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-deactivate-user-account.htm).

Target behavior requires its own verification. For example, Okta's [outbound SCIM reference](https://developer.okta.com/docs/api/openapi/okta-scim/guides/scim-20) distinguishes suspension from deactivation: suspension alone does not send the SCIM deprovisioning event. Day 10's Projects deactivation sets active false; it does not delete the resource.

## Joiner: connect the initial decisions

Think back to Maya's initial arrival in Sales. A sound joiner explanation connects:

```mermaid
flowchart TD
  A["Approved employment and effective start"] --> B["Correct source record, matching, and Okta identity"] --> C["Intended activation and authentication readiness"] --> D["Applicable groups and application assignments"] --> E["Required target accounts, sign-in, and permissions"]
```

Read the diagram from the approved start toward the work the person must perform. The source record and matching identify the right person. Activation and authentication readiness concern that identity's ability to begin the permitted journey. Groups and assignments connect the approved requirement to applications; target accounts, actual sign-in and permissions establish whether the intended work is possible. A successful earlier box leaves those later results to be checked.

This is a chain of dependencies, not a guarantee that every connector operates in this exact order. Northbridge must distinguish preparation before a start from permission to use access after it takes effect. A future-dated HR record alone is not evidence that access should already work.

If Alex knows only that a new employee's HR record has arrived and their Okta account is Active, can he report that they are ready to work? No: the required assignments, target accounts, actual sign-in and permissions still need evidence, along with the approved effective access point. Use the diagram to locate those missing outcomes.

If an existing account is found, use Day 11's ownership and matching checks rather than making a second identity. For Priya, use the sponsor-approved Okta-managed process and its agreed access end condition; do not invent a Workday or AD association to fit the employee model.

## Mover: state what should change and what should remain

Maya's approved move now takes effect in the course story. She remains employed and her identity remains NB-1042. Earlier Sales examples describe the earlier state.

Northbridge's approved outcome for packet M-12 is:

- Department becomes Finance in the governed employee profile.
- Normal Sales-group membership and Salesforce access end; no transition exception remains approved.
- Projects access continues, with its department code changed from SAL to FIN.
- Maya retains her existing identity and intended existing Projects account.

Read the approved outcomes together. Projects must continue on Maya's intended account, while the obsolete Sales access must end. Moving is not simply adding new access. It also requires reviewing access that no longer fits the new role. Finance department alone does not make Maya a Finance manager or grant Daniel's approval permissions. The business requirement decides what should remain; a department name alone cannot answer every permission question.

## Follow Maya's evidence

All observations below are synthetic, correlated to Maya's move, and listed in their observed order. They are investigation summaries, not literal product event names.

| Order | Evidence |
|---|---|
| M1 | Workday's approved effective department is Finance; NB-1042 is unchanged. |
| M2 | The correct Workday association is confirmed. Okta department is Finance and workerType is Employee. Okta remains Active. |
| M3 | The active Sales AND Employee rule processes the updated profile. Its rule-managed NB-Sales-Employees membership is removed. |
| M4 | Salesforce remains individually assigned. Review confirms this is the surviving assignment source; no group assignment remains. Its exception approval ended with the move. |
| M5 | The Projects app profile contains FIN. The supported update succeeds for Maya's linked prj-1042 account, and a later target read confirms FIN and active true. |
| M6 | Salesforce confirms a new application session for Maya after the move. |

Before choosing a correction, compare M1 to M4 with the approved requirement. Does the evidence show a failed department update, a failed group rule, or an assignment that survives both successful changes?

M1 to M3 show that the source, profile, and Sales rule processed the intended change. M4 establishes the remaining assignment path and its expired business justification. M6 establishes actual retained Salesforce access, not merely a visible tile. Removing the rule-managed membership ended that path; it did not remove the independent individual assignment.

Do not change correct Finance data back to Sales or weaken the rule. Address the remaining individual assignment under the approved removal requirement, then verify the resulting Okta assignment, the applicable Salesforce account-management action, target access, and relevant sessions. Salesforce's connector behavior must be checked; do not substitute the Projects SCIM contract for it.

M5 confirms the department update and an active Projects account. It supplies no Projects sign-in or permission result, so actual entry remains unverified. Deactivating all of Maya's accounts would violate the requirement to keep her working in Projects. A department update also does not prove that any specific project permission was added or removed.

Alex can distinguish the completed work from the remaining discrepancy: Finance is correct, the normal Sales membership ended, and Projects received FIN, but Salesforce still has an unjustified assignment and accepted a new session. No corrective Salesforce follow-up is supplied here. The ticket remains unresolved at M6, with a demonstrated cause and a supported next action.

## Leaver: verify each outcome

Jordan's departure occurs after the active-employee examples in earlier lessons. Workday remains the source of the approved employment event. Northbridge requires his workforce access to end when departure takes effect, with retained records handled through the appropriate business process.

The following packet concerns his verified identities and linked accounts. Projects deactivation is supported and enabled. Expense is an OIDC application; its account-removal method is not supplied.

| Order | Evidence |
|---|---|
| L1 | Jordan's approved departure is effective in Workday. The configured lifecycle process receives the event for the correctly associated Okta identity. |
| L2 | Okta deactivation completes. A later read shows DEPROVISIONED, and Okta app assignments are absent. |
| L3 | His linked AD account is confirmed disabled by a directory read. |
| L4 | The connector sends active false to Jordan's linked Projects resource. The recorded response is HTTP 503 Service Unavailable. A later target read still shows active true. |
| L5 | A controlled check confirms a fresh Okta sign-in is blocked. |
| L6 | An application-side check of Jordan's pre-existing Expense session retrieves protected expense data after L2. It is a new authenticated response, not just an old page left visible. |

Read the departure packet as separate outcomes for the same person. Which observations confirm a completed change, and which show access or account state still contrary to the requirement?

L2 and L5 establish the supplied Okta outcome. L3 independently establishes the checked AD account state. Neither completes the Projects or Expense investigation. Okta's completed deactivation is meaningful evidence; the remaining application results show why it is insufficient for closing the whole departure.

For Projects, follow the operation and then the read. The connector asked for an inactive account, but the 503 response and later active state do not establish the required change. The 503 reports service unavailability; it does not identify the underlying outage cause. Investigate the connector and target result, coordinate an approved way to end access, and verify the account after the correction or supported retry. Do not reactivate Jordan in Okta to make a downstream retry easier: that would conflict with his departure without demonstrating a repair of the target service.

Expense presents a different kind of evidence. L6 is a new authenticated response through Jordan's checked session, rather than an old page that merely remains on screen. It demonstrates continuing authenticated access through that session. Flag it for the application owner: confirm the session and account involved, the required termination behavior, the supported action, and the result of a fresh protected request afterward. The packet does not establish why the session persists. Recognize the retained access now; Day 13 explains the separate session mechanisms.

Okta deactivation stops Jordan's Okta sessions. That action alone is not proof that Expense ended every session it previously established: different services can maintain separate session state. L6 confirms that this particular Expense session still supports access, without establishing its persistence mechanism. Day 13 examines that distinction.

Projects and Expense are separate outstanding issues. A later successful Projects deactivation would not resolve the Expense observation. Likewise, blocked fresh Okta sign-in does not erase evidence of the working Expense session.

## Decide what evidence closes the ticket

A useful leaver handoff names the affected systems and remaining exposure. For Jordan:

> Okta deactivation and the checked AD disablement are confirmed. Projects still reports an active account after its failed deactivation request. Expense still accepts the checked existing session. The application owners need to resolve and verify those outcomes. We cannot yet report all required access removed.

The handoff tells each owner what remains to be verified. For Projects, Alex needs the intended resource's account state after the supported action. For Expense, he needs a new protected-request result after the required access-removal action. These are different closure checks because the supplied failures concern different outcomes.

Closure requires the agreed application's account and access evidence, not just another successful Okta action. If other applications, credentials, or access paths are part of the departure requirement, include them in the inventory; this packet is not proof about systems it never inspected.

Deleting the Okta record would not demonstrate that a failed target operation or working application session was resolved. It would also be a separate, irreversible decision. Preserve the ability to identify the correct records while completing the access-removal requirement.

For a later return to work, re-evaluate current employment, matching, assignments, and activation requirements. Do not assume reactivation should restore every old exception or that retained group membership represents a new approval.

## Choose the action for the state you actually found

Read the user's current status, source relationship, and approved business event before choosing a lifecycle action. An activation problem, lockout, temporary suspension, and effective departure are not interchangeable reasons to change the account.

Unlocking addresses a lockout condition; it does not establish a new password or restore withdrawn employment approval. Password recovery concerns the password. Replacing an authenticator concerns its enrollment. Suspending Okta access is not a substitute for verifying a required departure across target applications and sessions.

For a sourced identity, also check whether the authoritative lifecycle process would repeat or reverse a manual action. If Jordan is still departed, a historical successful sign-in is no reason to reactivate him. If Maya is transferring, preserve the account and access that the new role still requires while ending the obsolete paths.

Write a separate outcome for each target. If a later Projects correction were verified while Expense remained open, “Okta deactivated; Projects correction verified; Expense session outcome awaiting owner” would be an honest handoff. It is an example of how to report that later condition, not a supplied correction to Jordan's packet. “User disabled, ticket closed” would hide unfinished work.

For both Maya and Jordan, begin with the approved change, keep the identity relationship intact, and verify each required outcome. Maya's move preserves some access and ends another path; Jordan's departure ends access across the required scope. The account action is part of that work, while the evidence determines what is complete.

## Before moving on

Can you distinguish employment data, Okta status, target status, and session observations? Explain why Maya's correct group removal did not end her individual assignment, why Jordan's completed Okta deactivation did not close every target ticket, and what evidence would establish the required corrections.

You do not need to explain Expense's session mechanism yet. Recognizing its observed retained access and requesting a separate check is the correct conclusion here.

Try the [exercises](../exercises/day-12.md), then the [answers](../self-checks/day-12.md). In [your notebook](../notebook/guide.md), make a row for each affected system: approved outcome, observed state, operation result, remaining access, responsible owner, and closure evidence.

[Day 13](day-13-policies-and-sessions.md) examines authentication policies and separate Okta and application sessions.

[Previous: Day 11](day-11-imports-and-matching.md) · [Course home](../index.md)

[Revise Day 12](../revision/day-12.md): revisit the concepts, example, and questions without rereading the full lesson.
