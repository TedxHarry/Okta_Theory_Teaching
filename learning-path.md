---
title: "Learning Path"
nav_order: 3
---

# Learning path

Follow the 15 core lessons in order, at your own pace. Days 1–14 teach through Northbridge situations; Day 15 asks you to investigate a supplied case independently. The optional Day 16 practice bridge comes afterward and is outside the theory core.

The sequence builds three connected skills: following identity data and access relationships, interpreting authentication and account-management results, and making justified decisions about changes and unfinished work. Try each day's exercises before reading the separate answers. If an answer exposes a missed distinction, revisit the named lesson section and explain the example again in your own words.

## Build the foundations

| Lesson | Main question | Focus |
|---|---|---|
| [Day 1](lessons/day-01-people-identities-access.md) | Why can someone sign in but still lack application access? | Person and accounts; authentication and authorization; SSO and account management. |
| [Day 2](lessons/day-02-requests-and-evidence.md) | What did this particular request or event establish? | Follow the browser, name the responding system, and keep each result in context. |
| [Day 3](lessons/day-03-profiles-and-mappings.md) | Where did the value change? | Profiles, mapping direction, transformations, and target verification. |
| [Day 4](lessons/day-04-sources-and-ownership.md) | Who controls this person's data? | Source associations, priority, attribute ownership, and contractor maintenance. |
| [Day 5](lessons/day-05-groups-and-assignments.md) | How do those values lead to an application assignment? | Rules, groups, individual exceptions, and independent target checks. |

Directory and profile vocabulary in Day 1 is orientation; the central distinctions matter most. In Day 2, follow the request story before worrying about remembering every code or field name. Use the [glossary](reference/glossary.md) when a term interrupts your understanding.

Before reading an answer, commit to an explanation in your own words. After checking it, change one fact and explain what would change in your conclusion. For example, a correct app user profile with a stale target calls for different evidence from a mapping that produces the wrong value. Day 4's final exercise combines these earlier distinctions with source ownership.

After Day 5, attempt the [foundation checkpoint](assessments/foundation.md). Its [separate debrief and rubric](assessments/self-checks/foundation.md) help identify which distinction to revisit.

## Continue the connected story

Days 6–10 follow directory authentication, authentication proof, federation and application-account operations. Days 11–14 bring those relationships into account matching, employment changes, policy decisions and access design. Keep asking which system produced the evidence and which outcome still needs a separate check.

| Day | Question |
|---|---|
| [6](lessons/day-06-active-directory.md) | Why can an AD import succeed while AD password sign-in fails? |
| [7](lessons/day-07-authenticators-enrollment-mfa.md) | How do authenticators, enrollment, and MFA requirements differ? |
| [8](lessons/day-08-saml.md) | How does a SAML application accept or reject sign-in information? |
| [9](lessons/day-09-oidc.md) | How does an OIDC application finish sign-in, and what do its tokens mean? |
| [10](lessons/day-10-scim.md) | How are accounts created, updated, and deactivated through SCIM? Includes the [integration checkpoint](assessments/integration.md). |
| [11](lessons/day-11-imports-and-matching.md) | How are discovered accounts matched to existing identities? |
| [12](lessons/day-12-joiners-movers-leavers.md) | What changes when someone joins, moves, or leaves? |
| [13](lessons/day-13-policies-and-sessions.md) | How do policy decisions and separate sessions affect access? |
| [14](lessons/day-14-requirements-and-responsibilities.md) | How do you turn a business request into a clear access requirement? |
| [15](lessons/day-15-integrated-case.md) | Can you explain and investigate the connected Northbridge environment? Includes the [final case](assessments/final-case.md). |

After Day 10, attempt the integration checkpoint before continuing to matching and lifecycle changes. At Day 15, read the case evidence and attempt all seven tasks before opening the model investigation. Use references when needed, and note which explanations you could produce independently.

## Use the references at the right point

Read [Okta at a glance](overview.md) before Day 1. Use the [cheat sheets](reference/cheat-sheets.md) to recall distinctions after learning them. The [troubleshooting playbook](reference/troubleshooting-playbook.md) links each investigation to its lesson; protocol and lifecycle branches assume those lessons have been read. After Day 14, use [application onboarding](reference/onboarding-an-application.md) and its changed-condition exercise to connect requirements, matching, access and removal evidence.

## Read the examples consistently

Maya is in Sales through Day 11; her approved Finance move takes effect in Day 12. Jordan's departure also takes effect in Day 12, while explicitly archived incidents describe his earlier employed state. Daniel is already a Finance manager, but his title alone does not establish a permission. An explicitly labelled alternative packet changes the evidence for a question; it does not silently change everyone's history.

A lesson or exercise may state that an account exists even when an earlier ticket left its existence unknown. Use the facts of that labelled scenario. Do not treat a hypothetical account or a supplied follow-up as proof of an unshown production event.

Use the [company reference](reference/northbridge-company.md) for people and systems, the [ownership reference](reference/attribute-ownership.md) after Day 4, and [your notebook](notebook/guide.md) to connect each new flow to the earlier ones.

## After the final case

Use the [final skills checklist](assessments/self-checks/final-case.md) to identify what you can explain independently and what still needs a reference. Reattempt the changed-condition questions after revisiting any weak area. A different packet may require a different conclusion even when the symptom sounds familiar.

Keep three reusable explanations in [your notebook](notebook/guide.md): Northbridge's architecture, one evidence-based investigation, and one access-decision record. When the evidence changes, explain which part of your conclusion changes with it.

When you are ready to plan practice, use the optional [Day 16: Safe practice plan](lessons/day-16-safe-practice-plan.md). Predict a small training experiment, test whether its cases distinguish the intended rule from a mistake, and define the evidence and cleanup you would need. The written plan requires no tenant. Executing it requires an authorized training environment; a prediction is not a completed lab result.

[Course home](index.md)

For a later review, choose a day in the [Revision Guide](revision/index.md). Each recap explains the key concepts and connects them to the day's example.

[Working through requests](requests/index.md) follows missing access, changed departments, recovery, and connection maintenance. Each situation names the lessons to read first and keeps the reasoning hidden until you choose your checks.
