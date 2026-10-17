---
title: "Day 1: self-check answers"
parent: Self-Checks
nav_order: 1
---

# Day 1: Self-check answers

The important part is your reasoning. Different wording is fine if you keep the records, decisions, and evidence separate. Compare these explanations with your own attempt, then explain any correction in your own words. You do not need to list every possible cause; you need to distinguish what is observed from what still needs checking.

## 1. One person, several records

Think of each team opening the record it needs for its own work. HR opens Devi's Workday employment record. The directory team checks her AD workplace account. Alex checks her Okta user and application assignments. The Salesforce owner checks the account she uses inside Salesforce. They are all looking at records about Devi, but each record answers a different question.

A disabled Salesforce account establishes a Salesforce account-state fact. It does not, by itself, establish whether Devi's Okta user or AD account is enabled or disabled. You need their state evidence separately.

**Revisit:** [Devi is one person; the systems hold different records](../lessons/day-01-people-identities-access.md#devi-is-one-person-the-systems-hold-different-records) if you treated all account states as one state.

## 2. Sign-in works; an action fails

Daniel has already reached Expense, so we know his sign-in worked in this example. The refusal happens when he tries to approve an expense. That moves our attention to **authorization**: is he allowed to perform this action?

Ask the Finance owner whether Daniel should be able to approve expenses. Then compare that decision with the permissions on his Expense account and the result of the refused action. A **role** is a named set of permissions; his job title alone does not show which application role or permissions he has.

The evidence does not support resetting his Okta password as the correction. You also should not automatically grant an approval permission before confirming the authorized business requirement.

**Revisit:** [Signing in and having permission are different](../lessons/day-01-people-identities-access.md#signing-in-and-having-permission-are-different) if you treated every denial as a credential failure.

## 3. SSO without account creation

The arrangement is possible. SSO handles the connected sign-in relationship, while provisioning handles application account management. In this example, accounts are created through a manual process rather than automatically by the Okta connection.

An SSO connection does not prove that automatic account provisioning is available or configured. Some applications support other account-creation arrangements; the selected application's behavior must be checked.

**Revisit:** [SSO helps with sign-in; provisioning manages accounts](../lessons/day-01-people-identities-access.md#sso-helps-with-sign-in-provisioning-manages-accounts) if you assumed SSO necessarily creates every account.

## 4. A value is correct in one system

We can say, 'Workday shows Sales.' To say, 'Salesforce also shows Sales,' someone needs to open Devi's Salesforce record and check. Even if an information-sharing connection is configured, we still need to check what this record holds now.

Compare the department in Workday, Okta and the intended Salesforce account. If they differ, follow how that department is maintained between those places. If they agree, keep that successful finding. We do not have to assume something is wrong just because it has not been checked yet.

An explanation that requests source, intermediate, and destination evidence is sound even without knowing the mapping mechanism yet.

**Revisit:** [What a directory does](../lessons/day-01-people-identities-access.md#what-a-directory-does) if you inferred destination state from source state.

## 5. An incomplete account investigation

A confirmed finding is that no account matching the approved identifier was found in the checked Salesforce instance. Another confirmed finding is the successful Okta sign-in for the identified attempt.

Possible explanations include:

- The required Salesforce assignment is missing.
- The expected account-management process has not completed or failed.
- An existing account has a different identifier and has not been correctly associated with Devi.

These are alternatives, not three facts established by the packet.

Request assignment evidence, the configured account-management approach and relevant results, and target account/identifier information as needed. If accounts are created separately, ask for the responsible process's record rather than assuming an Okta provisioning failure.

For example, inspecting the expected assignment can distinguish an absent assignment from a present one. If it is present, the account-management and matching questions remain open. A proposed next check is stronger when you explain how its result would change the investigation.

Avoid creating a duplicate account, granting access without approval, or changing a working sign-in credential before establishing the cause. A correction becomes justified when the evidence identifies the relevant gap and the requirement is clear.

**Revisit:** [Investigating Devi's ticket](../lessons/day-01-people-identities-access.md#investigating-devis-ticket) if you treated "not inspected" as "missing" or presented a possible cause as confirmed.

## 6. Assignment and a tile

No. The assignment shows an Okta-side relationship to the application. The tile supports what is visible to the user. Neither establishes that target account creation succeeded.

Inspect the target account state and the relevant account-management outcome. If provisioning is not configured, identify how the account is expected to be created or matched.

**Revisit:** [Being assigned an application is another fact to check](../lessons/day-01-people-identities-access.md#being-assigned-an-application-is-another-fact-to-check) if you equated assignment with a usable target account.

## 7. Tell the whole story

A sound explanation might be:

> HR records Devi's employee information. Okta has a user representing her. Northbridge must establish her Salesforce assignment and a corresponding account in Salesforce through the applicable process. Sign-in must succeed through the configured connection, and the application must give her the permissions needed for her work. These are connected steps, but one successful observation does not prove all of them.

If the Salesforce account exists but is disabled, its existence is now known and its state may prevent use. The reason for the disabled state still needs investigation. Check whether it should be enabled, how account state is controlled, and whether assignment and sign-in information are correct. Do not enable it merely because someone reports an access problem.

Your answer need not reproduce this paragraph. It should preserve the distinct records and decisions, identify known versus unknown facts, and avoid unsupported causes or changes.

## Before-moving-on questions from the lesson

| Question | Essential reasoning |
|---|---|
| Why can an Okta user exist without usable Salesforce access? | User existence does not establish assignment, target account state, sign-in, or application permissions. |
| Authentication versus authorization? | Checking who is signing in versus deciding what access or action is allowed. |
| SSO versus provisioning? | Connected sign-in versus account management; one does not prove the other succeeded. |
| Correct source department versus target department? | The source observation needs destination evidence before a cross-system claim. |
| Not inspected versus confirmed absent? | Missing evidence is not an observed negative result; even a negative result has a defined search scope. |
| What should Alex request next? | Expected assignment, account-management approach/results, and relevant target identity/account evidence. |

If you can explain these without relying on copied definitions, you have the distinctions needed to follow the next flow. If a distinction is unclear, return to the relevant section of the lesson and try a changed example: an existing disabled account instead of a missing one, or a denied application action instead of failed sign-in.

[Return to the exercises](../exercises/day-01.md) · [Return to the lesson](../lessons/day-01-people-identities-access.md)

[Revise Day 1](../revision/day-01.md): revisit the concepts, example, and questions without rereading the full lesson.

[More practice questions with explanations](../question-bank/day-01.md)
