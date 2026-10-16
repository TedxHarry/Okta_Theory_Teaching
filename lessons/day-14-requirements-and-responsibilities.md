---
title: "Day 14: Requirements, responsibility, and recovery"
parent: Lessons
nav_order: 14
---

# Day 14: Requirements, responsibility, and recovery

The Finance team asks Alex: “Give Finance users access by default, except some contractors and executives.”

Alex could begin by writing a group condition, but he would have to guess what the team meant. Does “access” mean submitting an expense or approving someone else's? Are executives excluded, or do they follow a different path? That sentence is not yet an access rule. It does not name the application instance, explain the exceptions, distinguish entry from approval permissions, or say when access must end. Automating it now would turn unanswered questions into access decisions.

First establish the owner's decisions, then translate them into a proposed access model. Decide who is authorized to implement each part, what evidence would test it, and what must be recovered if a change goes wrong. By the end, turn an ambiguous access request into approved outcomes, named responsibilities, and evidence that would demonstrate the design works.

## Turn the request into observable outcomes

A **requirement** states the intended outcome and constraints. A **design** describes how the systems will achieve it. “Eligible Finance employees can submit their own expenses” tells Alex what must be possible. “Use a group rule” proposes part of how to deliver it.

The rule could select the right people while Expense still lacks the intended account or submission permission. That is why Alex needs both an approved outcome and a design that reaches it inside the application.

Alex needs answers to these questions:

| Decision | Why it matters |
|---|---|
| Which application and instance? | Expense, Projects, and Salesforce have different connections and permissions. |
| Who is eligible, and from which effective point? | Department alone does not explain employment, contractor exceptions, or future changes. |
| Which actions may the user perform? | Entering Expense, submitting expenses, and approving expenses are different permissions. |
| Who owns each input and approval? | A rule must consume governed values and authorized decisions. |
| What do the exceptions mean? | “Except executives” could mean exclude them or give them different access. |
| How will existing accounts be handled? | A new assignment should not silently create a duplicate or link the wrong record. |
| What ends access, and who verifies removal? | Group, assignment, target account, and session outcomes need a defined owner. |

Use the table to separate business questions from implementation questions. The owner decides what the person should be able to do and when. Alex investigates how the configured systems can deliver that outcome. If an answer is missing, record the unresolved decision and its owner. Do not convert an assumption into an approved requirement. An unresolved contractor decision belongs with its approver; changing a rule cannot supply that decision.

## Use the owner's answers

Packet R-14 supplies a fictional approved requirement for Northbridge Expense. It is a proposed model to evaluate, not evidence that a new configuration has already been applied.

- Effective Finance employees receive ordinary expense-submission access.
- Expense-approval permission requires a separate named approval by the Finance owner. Finance membership does not grant it automatically.
- Executives follow the ordinary eligibility rule. Executive status adds no automatic permission or bypass.
- Contractors receive access only through a documented exception approved by their sponsor and the Expense owner, with scope and an end condition.
- A department move out of Finance ends the normal eligibility path. Exceptions must be reviewed independently. Departure ends access under the leaver requirement.
- Workday controls employee department and workerType. Priya remains sponsor-approved and Okta-managed outside employee imports.
- The Expense owner maintains local business roles and handles target-account readiness and removal through its approved process. No SCIM or other automated provisioning capability is assumed.
- The existing approved Expense authentication policy continues to apply. An access exception is not an authentication-policy exception.

The owner has also confirmed the current people: Maya is now Finance, Daniel is a Finance manager with a separately approved approver role, Priya remains a Sales contractor, and Jordan has departed. Daniel's approval authority is explicitly supplied here; his manager title alone did not establish it in the earlier lessons. These answers give Alex something concrete to design against, but they are not deployment results.

## Translate the requirement without changing its meaning

Alex proposes an Okta-managed group, `NB-Finance-Employees`, populated by the condition department equals Finance AND workerType equals Employee. That is the normal assignment population. The approved employee lifecycle process handles effective starts and departures; these two attributes alone are not a complete employment-state control.

Expense would be assigned to that group. Contractor exceptions would use a separately maintained assignment path, such as a dedicated exception group, backed by approved records. The group's name does not enforce approval or automatically expire membership. An end date records when access should end; it does not perform the removal. The named owner must arrange the supported action and verify the relevant assignment and target outcomes when that condition is reached.

Trace the proposal from governed attributes to group membership and then to the Expense assignment. The application owner still handles the intended account and local business role. The group selects a normal population; it does not implement every outcome in the approved list.

This is an **access model**: a description of how eligibility, exceptions, assignments, and target permissions connect.

| Person | Expected result under R-14 |
|---|---|
| Maya | Normal Finance assignment path and submission access; no approval permission inferred. |
| Daniel | Normal path plus his separately approved application approver role. |
| Priya | No normal employee path. A contractor exception remains undecided unless its approval is supplied. |
| Jordan | No usable access under the effective departure requirement. Retained attributes or group membership do not reverse deactivation. |

Before reading the model as an access result, compare Maya and Priya. Maya fits the normal population; Priya does not. What additional decision would justify a contractor path? The requirement names the approvers and end condition, but the model has not supplied Priya's exception approval.

Day 12 established that deactivation can retain group memberships. Therefore, a membership report alone cannot certify Jordan's current access or whether he should regain it later. A return to work requires fresh decisions.

Reconcile existing assignments before applying the model. An old direct Expense assignment could survive removal from the proposed normal group, just as Maya's Salesforce assignment survived in Day 12. Existing target accounts require matching, and existing target roles require the application owner's review.

## Separate approval from technical authority

The Finance owner decides who may approve expenses. An Okta administrator's ability to assign an application does not grant authority to invent that business decision. Likewise, Daniel's Expense approver role does not make him an Okta administrator.

**Least privilege** means granting the administrative permissions and scope needed for a defined responsibility, rather than broad authority for convenience. Ask "Which action must this operator perform, and on which resources?" Then compare that responsibility with the role's actual permissions and limits. A familiar role name alone cannot answer either question.

Here, **scope** means which resources or users the permission covers. Permission to manage Expense does not imply permission to manage Projects. A shared policy can affect both, so the administrator's authority must cover the actual change and its resource scope. For an App Admin to manage an app sign-in policy, that administrator must be allowed to manage every application assigned to the policy. If Expense and Projects share a policy but Alex can manage only Expense, that App Admin scope is insufficient to manage the shared policy. Check the policy's complete application list before choosing the operator.

| Responsibility | Standard-role direction to evaluate |
|---|---|
| Inspect users, applications, and System Log evidence without changing them | Read-only Admin; check whether the particular information is visible to this role. |
| Perform supported password or MFA assistance for designated users | Help Desk Admin, with its applicable scope and restrictions. |
| Manage an assigned application integration | App Admin; verify the exact application task and scope. |
| Create or change the proposed group rule | Org Admin is a standard role supporting group-rule management; Group Admin is not interchangeable with it. |
| Assign administrative privileges | Requires the appropriate administrative delegation authority; the standard-role matrix identifies Super Admin for this operation. |

Read the role table from the task to the permission, not from a familiar title to assumed authority. Reviewing evidence, resetting an enrollment, managing an integration and editing a group rule are different jobs. These are responsibility comparisons, not an instruction to grant all these roles to Alex. Consult the [standard administrator permission matrix](https://help.okta.com/oie/en-us/content/topics/security/administrators-admin-comparison.htm), including its footnotes. A narrow task may still exceed a standard role's scope; escalate the design rather than silently grant broad access. Custom roles and resource sets are a separate design topic.

Read-only Admin does not mean visibility into every setting. For example, the matrix permits this role to view app sign-in policies but does not grant it permission to view global session policies. Name the information needed before choosing who can retrieve it.

Read access can expose sensitive information, so read-only does not mean unrestricted distribution of evidence. When sharing a case, include the relevant records and avoid copying credentials or unnecessary personal data.

Day 11's permission-denied API read illustrates the same boundary. A rejected operation calls for inspecting the caller's authorization for that operation and resource. It is not proof of a missing identity or a reason to give everyone Super Admin. Human approval, assigned administrative permissions, and an API caller's effective authority are related but separate facts.

## Make verification part of the requirement

**Acceptance evidence** demonstrates that the agreed outcome holds. Before a change, Alex and the application owner define what would count as success:

| Case | Evidence required |
|---|---|
| Eligible Finance employee | Correct source/profile, rule membership, assignment, intended target account, actual submission access. |
| Same employee without approver approval | No expense-approval permission, verified in Expense. |
| Contractor without an exception | No access supplied by this model; inspect existing paths before claiming total absence. |
| Approved contractor exception | Correct scoped access, recorded owner and end condition, and a verifiable removal process. |
| Employee moves out of Finance | Normal path ends; surviving exceptions and direct assignments are evaluated. |
| Employee departs | Required account and session outcomes verified across the affected systems. |

These are positive, negative, and change cases: who should succeed, who should not, and what should happen when eligibility changes. Maya's expected submission access and absence of inferred approval permission test different parts of the requirement. A contractor exception also needs its own removal outcome, not just a successful first entry. A successful Finance login tests only part of the model. Define these checks before applying the design so that “works” has an agreed meaning.

## Plan recovery from an incorrect change

Suppose a proposed rule mistakenly uses Finance OR Employee. Before choosing a recovery action, compare that condition with the intended Finance AND Employee population. A Sales employee with no other approved path meets Employee alone. A Finance contractor without an exception meets Finance alone. OR would include each in the normal population; AND would exclude both. An eligible Finance employee meets both and would qualify either way, so testing only that person would miss the mistake.

The condition shows who could qualify. Alex still needs the actual membership, assignment and target history to establish what happened before deciding how to recover.

A **rollback** restores an earlier configuration. It does not automatically reverse every effect already produced. Restoring AND repairs the population condition, but Alex must still identify what happened while the broader condition applied. It would not prove that extra target accounts, application roles, or sessions had been removed. Ask "Is the rule correct again?" separately from "Has the unintended access ended?" The first can be yes while assignments, application roles or sessions still need cleanup.

A useful change-recovery record names the prior approved configuration, the point at which further changes should stop, the affected identities, responsible owners, corrective operations, and the evidence needed afterward. Preserve legitimate access while removing unintended access. Do not delete all accounts created during a change without establishing which are incorrect and what records must be retained.

Administrative recovery also needs a protected, approved way for authorized staff to regain control if a policy change locks them out. That route should not depend entirely on the same failing control. Its protection, ownership, and verification belong in the operational design; bypass instructions are not a substitute.

## Account recovery is a different problem

In a separate support scenario, Priya has replaced her phone and cannot use her old Okta Verify enrollment. Her approved Expense exception is confirmed for this scenario, but authentication recovery remains unresolved.

Here the business access decision is already supplied for this independent scenario. The remaining question is whether the requester is the person whose authentication enrollment will be changed. The help desk must identify the correct account, verify the requester through Northbridge's approved process, and determine which authenticator is unavailable. The sponsor's approval answers "May Priya have this access?" Requester verification answers "Is this caller Priya?" Knowing her name or presenting the access approval cannot substitute for that separate check.

An authorized authenticator reset cancels the selected enrollment and requires setup again; it does not prove successful re-enrollment or application entry. See [Okta's reset behavior](https://help.okta.com/oie/en-us/content/topics/security/mfa/mfa-reset-users.htm). Recovery should preserve the intended authentication requirements and verify the replacement enrollment and a subsequent permitted sign-in. If loss may involve compromise, account and session investigation follows the incident process as well.

Do not reset a password to repair an unrelated audience mismatch or grant extra application rights to compensate for a lost authenticator. Supported self-service recovery also depends on configured policies and available recovery methods; it is not automatically usable in every loss scenario. See [self-service recovery](https://help.okta.com/oie/en-us/content/topics/identity-engine/authenticators/configure-sspr.htm).

## Recognize Microsoft 365's separate responsibilities

Alex can apply the same requirements-first approach to another application, but its supported capabilities need their own investigation. Microsoft 365 shows why Expense's authentication design and Projects' provisioning contract cannot simply be copied into every connection.

[Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/what-is-entra) is Microsoft's cloud identity service used with Microsoft 365. An Okta connection does not remove the Microsoft-side identity, license, or service-permission responsibilities.

For the documented Office 365 integration, Okta's [SSO reference](https://help.okta.com/oie/en-us/content/topics/apps/office365-deployment/configure-sso.htm) lists Secure Web Authentication (SWA) and WS-Federation, recommending WS-Federation when possible. SWA uses stored application credentials; WS-Federation exchanges identity information for federated sign-in. Do not label this connector's WS-Federation path OIDC because another Microsoft application uses OIDC.

The connector has separately documented [provisioning, deprovisioning, and license-management options](https://help.okta.com/oie/en-us/content/topics/apps/office365/o365-prov-main.htm). Investigate its supported model rather than copying Projects' SCIM contract. Successful federation does not establish account creation, the necessary license, or access to a particular Microsoft 365 service.

Use this comparison to ask better questions, rather than memorize a Microsoft deployment procedure. Day 9's Expense architecture and Day 10's Projects contract belong to those integrations. They do not establish the Office 365 connector's behavior. For a Microsoft 365 requirement, name the tenant, population, source ownership, sign-in connection, account-management model, licensing responsibility, and removal evidence. Detailed deployment is beyond this architectural comparison.

## Agree on who finishes each part

For the Expense requirement, the Finance owner confirms the business capability, the sponsor and Expense owner decide contractor exceptions, the authorized Okta operator manages the relevant configuration, and the Expense owner handles the target account and permissions. Follow the unresolved outcome to the person who can decide or verify it. Priya's absent exception approval needs the approvers; an unverified local role needs the Expense owner; a configuration task needs an operator with the required authority. A ticket should name the owner of each unresolved result rather than assigning the whole problem vaguely to “identity.”

Before a shared change, record the affected population, expected result, checks for unintended access, and a supported way to recover if the result is wrong. Keep configuration recovery separate from the cleanup of accounts, permissions, and sessions that may already have changed.

Then work through [the replacement-phone request](../requests/recovery-and-account-state.md) and [connection maintenance](../requests/connection-maintenance.md). In each, decide what can be concluded before choosing an action. Both situations need coordination, but they involve different credentials, owners, and verification evidence.

## Record the decision clearly

Return to the opening request. “Finance access, except some people” has become a proposed model whose eligibility, capabilities, exceptions and end conditions can be examined. It can now be reviewed against concrete cases before implementation.

A compact decision record for R-14 should connect the approved population and permissions to source ownership, normal and exception assignment paths, target-account handling, authentication requirements, administrative responsibility, acceptance evidence, and recovery.

Alex can summarize the proposed R-14 decision for the Finance owner in ordinary language: eligible Finance employees receive the standard Expense assignment and ordinary submission access. Approval rights require separate Finance-owner approval. Contractors need sponsor and Expense-owner approval for a defined exception with scope and an end condition. Workday supplies employee eligibility data, an appropriately authorized Okta operator manages assignment configuration, and the Expense owner handles accounts and local business permissions. Acceptance requires evidence for eligible access, exclusion of unapproved capabilities, removal after changes, and recovery from unintended assignments.

This is the proposed design and acceptance plan. It is not a completed rollout or a supplied set of successful test results.

Keep unresolved items visible. For example, if Priya's exception approval is absent, record who must decide it; do not encode “all contractors allowed” as a temporary interpretation. If Expense provisioning support is unknown, retain the agreed application-owner process until a supported automation design is established.

Before moving on, explain the proposal to a Finance manager without menu names. Then explain to Alex which technical actions require which authority, what could affect other users, and what would prove the change achieved the requirement.

Try the [exercises](../exercises/day-14.md), then the [answers](../self-checks/day-14.md). Add your decision record to [your notebook](../notebook/guide.md).

[Day 15](day-15-integrated-case.md) brings the connected Northbridge investigations together in the final case.

For more examples, open the [Day 14 practice bank](../question-bank/day-14.md). Each question includes its own context and an expandable teaching explanation.

[Previous: Day 13](day-13-policies-and-sessions.md) · [Course home](../index.md)

[Revise Day 14](../revision/day-14.md): revisit the concepts, example, and questions without rereading the full lesson.
