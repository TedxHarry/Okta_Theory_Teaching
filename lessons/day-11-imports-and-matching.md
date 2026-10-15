---
title: "Day 11: Imports, matching, and reconciliation"
parent: Lessons
nav_order: 11
---

# Day 11: Imports, matching, and reconciliation

“There is already a Projects account called Maya Rao. Should we link it or create another?”

Alex cannot answer from the name alone. The application may contain an account that belongs to Maya, a record for another person with the same name, or information that needs correction before any relationship is accepted.

Linking the wrong account could direct later updates or access decisions at someone else's record. Creating another account without checking could leave one person with two unmanaged paths.

Day 10 showed why a conflicting user name needs an ownership investigation. Here we will follow a separate account-review packet through that decision. Alex first establishes which person the existing account represents, which integration discovered it, and which association already exists. A correct link lets later operations address the intended record.

Follow the discovered record, the comparison that proposes a match, and the confirmation that accepts it. Then check the resulting association and account state. By the end, explain when an existing account can be linked with confidence and when incomplete or conflicting evidence leaves the decision open.

## Separate the stages

An account can be visible to an import before Okta has established who it belongs to. An **import** reads records or changes from a connected system into Okta for processing. **Discovery** means the record was found within that operation's scope. **Matching** compares it with existing Okta identities. **Confirmation** accepts the proposed match or new-user outcome through the configured process.

Read the table as different questions about the same record. Finding it answers where the investigation starts. A matching result proposes a relationship. Confirmation accepts the outcome, and an association identifies the linked records. Activation asks about account state. None of those words alone describes a successful application visit.

| Stage | Question it answers | What it does not establish |
|---|---|---|
| Discovery | Which records did this operation find? | That every possible account was searched. |
| Matching | Which existing identity meets the configured comparison? | That the input data is correct. |
| Confirmation | Was this match or new-user outcome accepted? | That all subsequent operations succeeded. |
| Association | Which external record is linked to which Okta identity? | That the external system controls the profile. |
| Activation | Is the relevant account in an enabled state? | That sign-in and every required permission work. |

When reading activation or account state, name the system. An enabled Projects account does not establish that the linked Okta identity is active, or that the user can complete sign-in. Each account has its own state and evidence.

These are logical distinctions. Configuration may automate some stages; the administrator does not necessarily approve every record manually. Okta documents matching and confirmation options separately in its [AD import settings](https://help.okta.com/oie/en-us/content/topics/directory/ad-agent-configure-import.htm).

If Alex is told “Import succeeded,” he needs a more precise follow-up: which records were scanned, what was proposed, what was confirmed, and what happened afterward? A successful read with pending confirmation is a different result from a checked association. Ask for the stage's outcome, rather than turning one success label into a conclusion about the whole journey.

## Start with scope and direction

Start by naming the direction. Day 10 sent an account-management instruction from Okta to Projects. Here an import reads existing Projects records into Okta for processing. Reading an account does not create it again. The receiving Okta identity and the discovered Projects account are separate records whose relationship still needs to be established.

For this lesson, the fictional Projects integration supports inbound user discovery, and its mapped employeeNumber is available for comparison. Projects remains a downstream account system, not a configured profile source. Reading its records does not change Northbridge's Workday-led architecture.

For AD, selected organizational units help define what is eligible for import. The correct domain, integration instance, scope, and read permissions matter. A record outside scope can be absent from an import without being absent from AD.

If an expected AD record is missing, Alex first compares its location with the scope that was actually read. That distinguishes a deliberately excluded record from a missing result inside the approved population. Compare its location with the approved population before proposing a wider scope. Priya's contractor identity and Alex's administrative identity are intentionally outside employee source imports.

## A matching rule is a comparison, not a biography

The system compares the information it has; it does not know a person's history merely because two fields agree. An **exact match** means a record meets the configured exact-match criteria. It does not mean the system independently proved the person's real-world identity. A **partial match** is a candidate meeting the configured weaker comparison, such as matching names where identifiers differ.

Okta supports [matching on mapped attributes](https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-matching-imported-users.htm). The selected criteria and confirmation behavior must be inspected for the specific integration. A business review rule is not automatically a built-in Okta feature.

Northbridge uses this review policy for the following Projects packet:

- Compare the mapped employeeNumber with the existing Okta employeeNumber for this employee population.
- Accept the proposed link only when the value is present, unique among the checked candidates, and supported by the authoritative employee record and account-ownership evidence.
- Hold missing, conflicting, or ambiguous evidence for review. Do not approve a name-only candidate or create a second Okta identity as a shortcut.

Keep the two responsibilities distinct. The configured employeeNumber comparison proposes the match. Northbridge's review process checks whether the identifiers and ownership evidence justify accepting it. Manual confirmation is used for this packet. Those additional checks are not an automatic consequence of choosing an exact comparison. Northbridge's employee numbers are governed identifiers, not a claim that every organization's employeeNumber is unique, immutable, or never reused.

Email can change or be reused. Names can be shared. Even an employee number can be copied incorrectly. A reliable matching decision depends on both the comparison and the quality of the values compared.

## Work through Maya's existing account

Packet M-1 is an independent account-review scenario. It does not claim to resolve Day 10's conflict history. Maya remains a Sales employee with existing Workday and AD associations and an approved Projects assignment. Her Projects association is unconfirmed in this packet.

| Evidence | Observation |
|---|---|
| Authoritative employee record | Maya Rao, NB-1042, Sales. |
| Existing Okta identity | Maya Rao, employeeNumber NB-1042. |
| Projects candidate A | id prj-1042; name Maya Rao; employeeNumber NB-1042. |
| Projects candidate B | id prj-7788; name Maya Rao; employeeNumber NB-7788. |
| Ownership evidence | Projects owner confirms A belongs to NB-1042 and B belongs to a different person. |
| Comparison coverage | Relevant candidates and identifier uniqueness checked in the stated Projects instance. |
| Proposed match | A to Maya's existing Okta identity. |
| Confirmation | Pending. |

Before reading the decision, compare A and B against both parts of the review: the employeeNumber comparison and the ownership evidence. Which candidate meets them, and which stage is still pending?

Candidate A meets the comparison and the supplied ownership checks. Candidate B's similar name does not override its different employee number and confirmed different ownership. The evidence supports confirming A through the approved process, not creating another Okta identity or deleting B. Here Okta supplies the configured comparison result; Northbridge's additional review supplies the ownership justification for accepting it. Pending confirmation means Alex can explain the supported proposal, but cannot yet report that the records are linked.

Now use an explicit follow-up M-2: confirmation succeeds, and an association check links Maya's existing Okta identity to prj-1042 in the intended Projects integration. A read of that target confirms NB-1042, SAL, and active true. No sign-in is supplied.

M-2 adds the outcome M-1 lacked: accepted confirmation and a checked link to the intended Projects resource. The target read also establishes the supplied account values and state. It does not establish Maya's Projects entry. Nor does it make Projects her profile source: that integration is not configured as one. Workday still controls her employee profile under the existing source model. Linking identifies an account; sourcing determines which system governs the profile.

## Recognize when the evidence is insufficient

Now examine a different packet M-3: both Projects candidates contain NB-1042, and neither has verified ownership. This replaces M-1's candidate and ownership evidence for the separate scenario. The original review's uniqueness condition is no longer met. An equal value now points to more than one record, so the comparison cannot settle which account belongs in the association.

Do not choose the first result. Request account-creation records, the accountable application owner's evidence, and the authoritative identifier history. If a value was copied incorrectly, correct it through the responsible process before rerunning the comparison. If one person has duplicate accounts, the business owner must decide their intended use and consolidation; a duplicate-looking name alone does not authorize deletion.

A missing employeeNumber is also unresolved. It is not evidence that the person is new. Different issues can produce “no match”: a new employee, a missing value, a transformation error, the wrong scope, or incomplete discovery. Alex's next check depends on what is missing: a record that was never discovered needs a different investigation from a discovered record whose comparison field is empty. Distinguish these before creating an identity.

## Association can affect sourcing

The consequence of a link depends on the integration it belongs to. An application-account association and an applicable profile-source association are related concepts, but not interchangeable. The integration's source settings matter. Ask both “Which records are linked?” and “Does this connection have a configured sourcing role?” before predicting which values may change.

Recall Northbridge's order: Workday above AD. Maya already has both associations; matching a Projects account does not move Projects into that order. Department inherits Workday ownership, while her designated AD-owned email remains a field-level exception.

Consider a separate hypothetical error: an AD record is accidentally confirmed against Priya's Okta-managed contractor identity. This violates her intended exclusion from employee imports. Because AD is a configured profile source, the new association may affect her source applicability and governed values. Inspect the resulting source, attribute settings, and actual writes. Do not assume the contractor label prevents the effect or that Workday applies to her without an association.

For Priya, Alex needs the mistaken confirmation history and the resulting source and write evidence. That shows both how the wrong relationship arose and what it affected. The correction requires investigating that match and its impact, then restoring the intended association and data through the supported process. Merely changing source priority for everyone would address a much broader decision without establishing that Priya's link was repaired. See the [ownership reference](../reference/attribute-ownership.md) and [Okta's source-priority documentation](https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-prioritize-profile-source.htm).

## Reconcile expected and observed records

**Reconciliation** means comparing the intended records and relationships with the observed ones and explaining differences. Here it is an investigation practice, not the name of a promised automatic repair feature.

| Expected | Observed | Useful next question |
|---|---|---|
| One correctly associated account | No confirmed association | Was it discovered, matched, and confirmed? |
| One account for the approved purpose | Two plausible candidates | Who owns each, and are both authorized? |
| An employee is in import scope | No imported record | Was the correct scope searched successfully? |
| Priya remains Okta-managed | Unexpected AD association | Which match created the link, and what changed afterward? |

Count differences help locate a problem but do not identify individual ownership. “100 imported” does not prove the 100 expected people were correctly matched.

For example, 99 expected employees plus one unexpected account still total 100. The total looks right while one expected person is missing and an unexpected record is present. Compare the actual identities and associations, not just the totals. Reconciliation turns that difference into an investigation of specific records, rather than an instruction to force the count back into agreement.

## Read the whole result, not just its first page

The remaining examples show other ways incomplete evidence can lead to a wrong decision. Focus on what each result establishes and what is still unknown; you do not need to configure pagination, JIT or safeguards today.

Alex receives a synthetic read-only Okta management API result for `GET /api/v1/users?limit=2`. This is an evidence excerpt, not a request to run. The fictional host represents the checked Okta organization.

```text
HTTP/1.1 200 OK
Link: <https://identity.northbridge.example/api/v1/users?limit=2&after=CURSOR_PLACEHOLDER>; rel="next"
```

Selected fields from that page's two user objects are:

```json
[
  {"id": "OKTA_MAYA_PLACEHOLDER", "profile": {"login": "maya.rao@northbridge.example"}},
  {"id": "OKTA_DANIEL_PLACEHOLDER", "profile": {"login": "daniel.brooks@northbridge.example"}}
]
```

Read the status and Link header alongside the two objects. This read succeeded, but the next link says the returned page is not the whole result. Priya is not shown. That does not establish her absence. A **cursor** marks a position in the result sequence. It is **opaque**, meaning the caller uses the service's value without interpreting or constructing it. Follow the supplied next link rather than inventing a page number. Completing the pages still needs the right query and endpoint scope before a completeness claim. See [Okta API pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination).

This reads Okta users; it is not Projects' SCIM list response and does not enumerate Projects accounts. This JSON excerpt does not supply association evidence.

In a separate attempt, the same read receives HTTP 403 Forbidden, with an investigator's supplied finding that the caller lacks the required permission. That is a failed read, not an empty result. Request an appropriately authorized read through the responsible administrator; do not infer “no users” or treat the failed request as a reason to create a duplicate. A bare 403 without that finding would require more investigation of the rejection.

## Compare import with just-in-time creation

An import discovers accounts through a read operation. **Just-in-time provisioning (JIT)** creates or updates an account during a supported, configured sign-in journey. Always name the destination: an application creating its own account from federation is different from Okta creating a profile through an enabled AD JIT path.

The timing and destination make the distinction useful. In the Projects packet, the account already exists and an import reads it for matching. In a supported JIT journey, account creation or updating happens during sign-in in the named receiving system. Successful federation alone does not guarantee either behavior. Northbridge's Projects matching packet uses import and confirmation; it does not assume JIT. JIT also does not eliminate the need for identity matching, ownership, and later access-removal decisions.

## Treat an unexpected removal count as evidence

An import safeguard can stop covered imports when proposed unassignments reach a configured threshold. Its scope and eligibility matter: it is not a universal barrier against every access change. In particular, a changed attribute affecting a group rule is not the same as a covered imported-group membership removal. See [import safeguard coverage](https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-import-safeguard.htm).

Suppose an import reports an unexpected rise in removals after its selected directory scope changes. Compare the intended population, the changed scope, source availability, and affected records before treating those removals as departures. Ask the source owner to confirm the business changes. Do not disable the safeguard merely to finish the import.

Once the cause is established, review the corrected import results and the remaining associations and assignments. A count returning to normal does not prove that the right identities were preserved. The same habit applies across the lesson: inspect the actual records, justify the comparison, confirm the relationship through the applicable process, and verify the result. When ownership or completeness remains unknown, keeping the decision open is a supported outcome. For an unfamiliar matching and assignment situation, try [the missing-application request](../requests/missing-application.md) after the foundation checkpoint.

## Before moving on

Can you explain why a discovered record is not yet a verified association, why an exact comparison can use bad data, and why M-3 must remain unresolved? Can you distinguish an app association from profile ownership and an incomplete read from confirmed absence?

Try the [exercises](../exercises/day-11.md), then the [answers](../self-checks/day-11.md). In [your notebook](../notebook/guide.md), record the integration, source record ID, intended Okta identity, matching criteria, ownership evidence, confirmation result, and remaining unknowns.

[Day 12](day-12-joiners-movers-leavers.md) follows an approved move and departure through these connected records.

For more examples, open the [Day 11 practice bank](../question-bank/day-11.md). Each question includes its own context and an expandable teaching explanation.

[Previous: Day 10](day-10-scim.md) · [Course home](../index.md)

[Revise Day 11](../revision/day-11.md): revisit the concepts, example, and questions without rereading the full lesson.
