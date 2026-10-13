---
title: "Day 4: Sources and ownership"
parent: Revision Guide
nav_order: 4
---

# Day 4 revision: Sources and ownership

When two systems disagree about a person, the first question is who owns the field. The most recently viewed value is not automatically the one that should win.

## The concepts to keep with you

**Profile source.** This is the system responsible for a user's sourced profile information. A user has one effective profile source, although particular attributes can have separately designated sources.

**Source priority.** When a user has multiple applicable source associations, their order helps determine the effective profile source. Having Workday configured in the organization does not make it the source for every user. Priority is also not an automatic emergency fallback when a source becomes unavailable.

**Attribute-level sourcing.** A particular field can have a different owner from the broader profile. At Northbridge, Workday owns department and worker type for its employees, while AD supplies work email for the relevant AD-linked employees. This needs an intentional mapping design so another outbound flow does not compete for the same field.

**Scope and association.** Scope determines which records enter an integration's processing. Matching and association determine which records are linked to an Okta user. These relationships make the source rules applicable to that person.

## Remember Northbridge's actual arrangement

The employee flow is Workday to Okta, then onward to AD and applications. Workday comes before AD in the configured profile-source order. For an employee associated with both, Workday leads the profile, with the documented attribute exceptions.

This explains why Maya's Workday department can remain authoritative even if AD holds a different department. It also explains why her AD-sourced work email can legitimately differ from her login. A difference is something to evaluate against ownership and purpose, not an automatic error.

Priya is an Okta-managed contractor. She has no Workday association or AD assignment in this model and is outside employee import scope. Her sponsor supplies business approval; the sponsor is not a technical profile-source integration. Calling her a contractor does not itself prevent an accidental match to a sourced record.

The AD-led teaching example is a separate arrangement. If AD is the applicable source for that user, reason from that topology instead of borrowing the Workday-led outcome.

## When you investigate a disagreement

Check the user's source associations, the effective source, any field-specific source, and the mapping direction. Editing an externally owned field in Okta may be restricted or overwritten by a later source update. Choose a correction only after identifying the demonstrated gap. If the authoritative value already matches the approved requirement, investigate the mapping or update path rather than changing that correct value. An ownership-design change needs its own justification and a review of affected users.

Profile ownership also does not tell you who validates a password. That is a separate sign-in path. In the supplied Northbridge example, Workday can own Maya's department while AD validates her password through the agent. Success on that password path does not verify delivery of a department update.

## When a request reaches you

If a corrected value returns to its old state, inspect the field owner and intervening writes before editing again. A shared source-priority change can affect other associated users.

## Check your understanding

From memory, explain who controls Maya's department, Maya's work email, and Priya's department. For each, name the association or field setting that supports your answer. Then explain why those answers do not establish a target update or password result.

- Why does Workday's first position not make Priya Workday-managed?
- How can AD own work email while Workday leads an employee's profile?
- What should you inspect before deciding which department value to correct?

<details markdown="1">
<summary>Compare your reasoning</summary>

1. Priya has no Workday source association and is outside employee import scope. A source's priority only matters where that source applies to the user.

2. The profile can inherit Workday ownership while work email has an explicit AD attribute source. Those are separate ownership decisions.

3. Check the approved business value, the user's actual source associations, profile-source priority, field-specific ownership, and mapping direction before choosing a correction.

</details>

[Full lesson](../lessons/day-04-sources-and-ownership.md) · [Exercises](../exercises/day-04.md) · [Lesson exercise answers](../self-checks/day-04.md) · [All recaps](index.md)

[Previous recap: Day 3](day-03.md) · [Next recap: Day 5](day-05.md)
