---
title: "Day 15: Investigate Northbridge as a connected system"
parent: Lessons
nav_order: 15
---

# Day 15: Investigate Northbridge as a connected system

Northbridge has several open identity tickets. Some have a demonstrated technical defect. Others still need an ownership or approval decision. One concerns access that remains available after a departure.

Alex needs a handoff that separates these kinds of work. A technical correction needs evidence of the defect and a way to verify the result. An ownership or approval question needs the person who can resolve that decision. Continuing access needs an account and access outcome, not just another successful status elsewhere.

Your task is to explain what each record establishes, decide what needs attention first, and give the responsible owners a useful next action. Use the relationships you have learned to choose the relevant checks; you do not need to use every course concept in every ticket.

## Work from the packet

Read the [final case evidence](../assessments/final-case.md), then complete the [seven investigation tasks](../exercises/day-15.md). Keep your reasoning separate from the [model answers](../self-checks/day-15.md) until you have attempted the tasks.

Use this sequence: read the evidence, attempt all seven tasks with references as needed, compare your reasoning with the model investigation, use the skills checklist to locate gaps, and attempt the changed-condition questions independently. Keep the answers closed until your first attempt is recorded.

The final case supplies its own investigation snapshots. Devi is now in Finance and Jordan has departed; the archived AD incident explicitly predates his departure. Do not replace a case observation with the result of an earlier lesson's independent example.

Begin with the requirement and observations for one ticket. Name the system and record behind each result, then identify where the next evidence is needed. Keep the current and historical context beside your notes so that a familiar name does not carry an earlier outcome into a different attempt.

You may use the [company reference](../reference/northbridge-company.md), [ownership reference](../reference/attribute-ownership.md), [glossary](../reference/glossary.md), and your earlier notes. Record where you needed help so you can choose a useful review afterward.

## Write a defensible investigation

For each ticket, explain:

- The approved outcome, or the approval decision that is missing.
- The relevant person, application instance, account, and operation.
- What is observed and the first demonstrated discrepancy, if one is established.
- Which explanation is supported, which remains a hypothesis, and which evidence would distinguish alternatives.
- The next action and its responsible owner.
- The result needed before reporting resolution, including target access where relevant.

Use the packet's evidence labels in your answer. “Inspect A4's transmitted value and target result” is more useful than “check the logs.” Explain what the check would answer. "What did Okta prepare?" "What did the connector send?" and "What did the application store?" need different records. An operation can succeed at sending and storing a value that still fails the approved business requirement.

A **hypothesis** is a possible explanation, not a finding already established. Ask what observation would support it or point to another explanation. When the evidence leaves a cause, ownership or approval unresolved, name the missing fact and who can provide it. That gives the next owner a question to resolve rather than a guessed diagnosis.

## Prioritize by the supplied impact

State what you would investigate or escalate first and why. Distinguish ongoing inappropriate access from incorrect data, blocked business work, and an archived incident. Priority answers "What needs attention first, and why?" It does not require every owner to wait in one queue. An application owner can investigate an account result while another owner resolves a separate approval decision.

Tie your priority to what the packet shows, rather than an imagined deadline or cause. Say what needs prompt attention and which investigations can proceed with their own owners. A proposed correction is not a completed correction. Do not invent a successful retry, an approval, or a target read to make your final report look complete.

## Explain the architecture in ordinary language

Alongside the tickets, explain how employee data reaches Okta, how contractor identities coexist with that model, and how assignments, sign-in, provisioning, and sessions have different responsibilities. Connect at least one complete mover or leaver story to the evidence. Tell it as a person's approved change moving across identified records: what each system did, what was checked, and where the required outcome remains incomplete. Product names alone cannot explain those relationships.

After your attempt, read the [answers](../self-checks/day-15.md) and use the [final debrief and skills checklist](../assessments/self-checks/final-case.md). Revise any conclusion that exceeded the evidence, then try the changed-condition questions without copying the model reasoning.

## Close the request without hiding an unknown

Use five short statements: what was expected, what was observed, what explains the demonstrated discrepancy, what was changed or handed off, and what was verified. Include the relevant person, application instance, and attempt or effective point. If no change or verification is supplied, say what is proposed or still awaiting its owner. "We know what to change" and "the required outcome is verified" are different statements. A useful handoff can explain the next action while keeping the unresolved part open. An explanation should remain understandable to someone who did not watch the investigation.

When several systems or decisions are involved, evaluate each result independently. One successful correction does not establish every required outcome. Distinguish technical defects, missing approvals, account ownership and remaining access before deciding whether a ticket can close.

Try the unfamiliar situations in [Working through requests](../requests/index.md). First choose your checks without opening the reasoning. Afterward, compare whether your action followed from the supplied evidence, whether you considered other affected users, and whether your verification actually tested the requested outcome.

## Keep the explanations you can reuse

Consolidate [your notebook](../notebook/guide.md) into an architecture explanation, an investigation record, and an access-decision record. Mark uncertainties clearly and name the next evidence you would need. These records should show how you reached the conclusion, not just the conclusion itself. When evidence changes, revisit the explanation that depended on it rather than carrying the earlier diagnosis forward unchanged.

Distinguish a proposed next action from an action already performed. Record the outcome as verified only when the supplied evidence supports it.

The [optional extension reference](../reference/optional-extensions.md) introduces terms you may encounter beyond these investigations. It is not required to answer the case.

For more examples, open the [Day 15 practice bank](../question-bank/day-15.md). Each question includes its own context and an expandable teaching explanation.

[Previous: Day 14](day-14-requirements-and-responsibilities.md) · [Course home](../index.md)

[Revise Day 15](../revision/day-15.md): revisit the concepts, example, and questions without rereading the full lesson.
