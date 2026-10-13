---
title: "Notebook"
nav_order: 9
---

# Your learning notebook

Keep a short record of explanations you can use again. Write in your own words; copying a definition is less useful than explaining what happens to someone at Northbridge.

For each lesson, record:

- A flow you can explain from beginning to end.
- Two concepts that are easy to confuse and the difference between them.
- One observation and what it proves.
- One question that remains unanswered and the evidence you would request.

## An investigation entry

```text
Person and intended account identifiers:
Okta organization, application instance, and target environment:
Case packet, attempt, and relevant sequence:
Expected behavior:
Observed behavior:
Evidence available:
What that evidence proves:
What it does not prove:
Possible explanations:
Next evidence to request:
How different findings would change my explanation:
Correction, if the cause is established:
Responsible owner and approval or decision still needed:
How to verify the result:
Remaining unknowns and unresolved access:
```

You do not need a confirmed correction when the evidence is incomplete. Saying what remains unknown and how to investigate it is a useful answer.

Keep a changed-condition exercise in a separately labelled entry. Revise a conclusion when the same case supplies new evidence, but do not carry an alternative packet's facts into the original case or overwrite an earlier historical state.

## Choose evidence that separates explanations

After Day 3, consider Daniel's app user profile containing FIN while Projects still contains SAL. Two possible explanations are that no update occurred or that an attempted update was rejected.

“Check the logs” is too broad to distinguish them. Ask for the account-update history for Daniel's linked Projects account, including the value sent and the response. Evidence of a rejected FIN update supports investigating that rejection. Evidence that updates were disabled and no operation occurred points toward the configured update process. An empty search alone does not prove no update happened: check its scope.

Write what finding would make you change your mind. This turns a list of possible causes into an investigation.

## Reuse an earlier explanation

Before starting the next lesson, close the earlier lesson and explain one of its flows from your notebook. Then compare your explanation with its self-check. Keep a short correction beside any distinction you missed. When the same investigation supplies new evidence, update its flow and retain the earlier finding. Keep independent cases and changed-condition exercises in separate entries.

[Return to Day 1](../lessons/day-01-people-identities-access.md)

## After the final case

Use the [final skills checklist](../assessments/self-checks/final-case.md) to select one explanation to improve. Keep the original conclusion, the evidence that changed it, and the revised explanation together. This makes your reasoning visible when a later case looks similar but has different facts.

For the optional [Day 16 practice plan](../lessons/day-16-safe-practice-plan.md), record the question, authorized environment, synthetic profiles, initial state, intended action, predictions, actual results, evidence, owners, and cleanup outcomes. A written prediction is a plan; leave the actual result as Not tested until an experiment supplies it. Keep the Finance AND Employee predictions separate from the hypothetical OR comparison. The initial membership activity uses a dedicated group without application assignments; add assignment, account, sign-in, and permission checks only when those boundaries become part of an approved later activity.

## An access-decision entry

Use this after Day 14 to explain an approved access requirement and its proposed design. Keep approval decisions separate from observations showing whether the design works.

```text
Application and instance:
Business owner and approved requirement:
Eligible people and effective condition:
Permitted application actions:
Source attributes and their owners:
Normal group and assignment path:
Exception approval, scope, owner, and end condition:
Existing-account matching and target-account handling:
Authentication requirement:
Administrative authority needed:
People and applications affected by a change:
Evidence that intended access works:
Evidence that unapproved access is denied:
Move, departure, and exception-removal evidence:
Recovery if the change produces an incorrect outcome:
Unresolved decisions and their owners:
```

For R-14, Finance employee eligibility belongs in the normal path. Daniel's separate approver approval belongs under permitted actions. Priya's missing exception decision stays unresolved; the template is not permission to fill it with a guess.

[Day 15](../lessons/day-15-integrated-case.md) · [Course home](../index.md)

