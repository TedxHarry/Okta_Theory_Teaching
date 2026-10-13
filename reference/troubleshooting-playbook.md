---
title: "Troubleshooting playbook"
parent: Reference
nav_order: 5
---

# Troubleshooting playbook

Use these paths to reason through a supplied case after reading the relevant lessons. Each path identifies evidence to seek; it cannot establish a cause from the symptom alone. Start with Days 1–5, then use the protocol and lifecycle sections after those lessons.

Start every ticket the same way:

1. What should have happened for this person and this app?
2. What actually happened? Get the real symptom, not a vague "it does not work."
3. Where did expectation and reality first differ?
4. What evidence proves it, and what does that evidence not prove?

Then pick the matching path below. Each path tells you where to look first, not what to change blindly. Confirm the cause with evidence before you fix anything.

Treat a diagram as a way to organize evidence, not a mandatory processing order. If the packet demonstrates continuing access after its approved end, escalate that outcome to the responsible owners while the other checks proceed. A missing cause does not erase an observed exposure, and a successful result in one system does not close another system's open result.

## The person cannot use an application

```mermaid
flowchart TD
  S["Cannot use the app"] --> Q1{"Assigned in Okta?"}
  Q1 -->|No| A1["Check approved eligibility and assignment paths"]
  Q1 -->|Yes| Q2{"Intended target account exists?"}
  Q2 -->|Unknown or no| A2["Check matching and the account creation process"]
  Q2 -->|Yes| Q3{"App sign-in accepted?"}
  Q3 -->|No| A3["Locate the failed authentication or federation stage"]
  Q3 -->|Yes| A4["Check the requested app permission"]
```

Name the event precisely. A successful authentication result establishes authentication for that attempt. An SSO issuance result establishes a different step. Neither alone proves that the application accepted the sign-in or granted the requested permission. See [Day 2](../lessons/day-02-requests-and-evidence.md).

## The person is not getting the application

```mermaid
flowchart TD
  S["Expected app is missing"] --> Q1{"Eligible under the approved requirement?"}
  Q1 -->|Unknown| A1["Confirm the requirement with its owner"]
  Q1 -->|No| A2["No ordinary entitlement; review any approved exception"]
  Q1 -->|Yes| Q2{"Intended assignment path?"}
  Q2 -->|Rule-managed group| A3["Compare owned values, rule logic and membership"]
  Q2 -->|Other group or direct| A4["Check the responsible process and approval"]
  A3 --> A5["Verify app assignment, then target outcome"]
  A4 --> A5
```

Correct profile data can mean that a person is ineligible. Do not alter it to force a rule match. For an eligible person, compare the approved condition with the responsible source, mapping, group membership and assignment. See [Day 5](../lessons/day-05-groups-and-assignments.md).

## Assigned in Okta, but no usable account in the app

```mermaid
flowchart TD
  S["Assigned but no usable account"] --> Q1{"Supported provisioning configured?"}
  Q1 -->|No| A1["Identify the account management owner and process"]
  Q1 -->|Yes| Q2{"Correlated operation result?"}
  Q2 -->|Error| A2["Read status and details; compare payload and contract"]
  Q2 -->|No attempt found| A3["Check scope, trigger and observation coverage"]
  Q2 -->|Success| A4["Confirm target identifier, state and required permissions"]
```

For SCIM, read the HTTP status, `scimType`, and error detail together. A uniqueness conflict does not identify the conflicting field or its owner by itself. An invalid value can reflect source data, a mapping, missing required data, or a target contract mismatch. Compare the source, app profile, actual request and target requirements before proposing a correction. See [Day 10](../lessons/day-10-scim.md) and [SCIM error handling](https://www.rfc-editor.org/rfc/rfc7644.html#section-3.12).

## Moved department, but old access remains

```mermaid
flowchart TD
  S["Old access after a move"] --> A1["Compare approved change with owned profile data"]
  A1 --> A2["Inspect rule processing and every assignment path"]
  A2 --> A3["Group membership, other groups and direct assignments"]
  A3 --> A4["Compare surviving access with approved exceptions"]
  A4 --> T["Check target account and permissions"]
  A4 --> U["Check relevant application sessions"]
```

Removing one group path does not remove a surviving direct assignment or another group path. Preserve access that remains approved and investigate each remaining path. See [Day 12](../lessons/day-12-joiners-movers-leavers.md).

## Left the company, but still has access

```mermaid
flowchart TD
  S["Access after departure"] --> O["Confirm person, effective departure and approved outcome"]
  O --> K["Check actual Okta state and lifecycle result"]
  O --> T["Check each target account and remaining access path"]
  O --> U["Check relevant Okta and application sessions"]
  K --> Q{"Suspended or deactivated?"}
  Q -->|Suspended| A["Assignments retained; no SCIM deactivation event"]
  Q -->|Deactivated| B["Check completion and configured deprovisioning results"]
  Q -->|Other or unknown| C["Investigate the intended lifecycle action"]
```

These are separate checks: an unresolved target account must not postpone investigating a reported live session. Suspension and deactivation have different effects; neither observation establishes every target outcome. [Okta SCIM guidance](https://developer.okta.com/docs/api/openapi/okta-scim/guides/scim-20) states that suspension does not send a deprovisioning event. Use [Day 12](../lessons/day-12-joiners-movers-leavers.md) for lifecycle reasoning and [Day 13](../lessons/day-13-policies-and-sessions.md) for session behavior.

## The application rejects the sign-in

```mermaid
flowchart TD
  S["Application rejects sign-in"] --> E["Identify the exact event, result and failed stage"]
  E --> Q{"Protocol in this connection?"}
  Q -->|SAML| A["Inspect reported validation failure and trusted settings"]
  A --> B["Then check configured account matching and access"]
  Q -->|OIDC| C{"Which stage?"}
  C -->|Authorization or redirect| D["Read rejection; compare requested and approved settings"]
  C -->|Code exchange| F["Check response, client authentication and PKCE evidence"]
  C -->|Token accepted for inspection| G["Validate token and transaction before account matching"]
```

For a confirmed redirect-URI rejection, compare the requested URI, registered URI and approved destination. That comparison identifies which configuration needs correction; the symptom alone does not. A code-exchange error is distinct from ID token validation. SAML validation includes issuer, signature, audience, destination and timing; inspect the actual rejection without disabling validation. Continue with [Day 8](../lessons/day-08-saml.md) or [Day 9](../lessons/day-09-oidc.md).

## An AD-linked user cannot sign in

```mermaid
flowchart TD
  S["AD-linked user cannot sign in"] --> Q1{"Correct Okta identity and AD association?"}
  Q1 -->|Unknown or no| A1["Check scoped import or configured JIT and matching"]
  Q1 -->|Yes| Q2{"AD delegated password authentication used?"}
  Q2 -->|Yes| A2["Check agent, domain controller and account result"]
  Q2 -->|No| A3["Check the actual authenticator and applicable policy"]
```

An earlier import is not universal proof or a universal prerequisite for every configured AD sign-in route. Just-in-time (JIT) creation, where enabled and applicable, is another route to inspect. Import success does not establish delegated-authentication health. See [Day 6](../lessons/day-06-active-directory.md).

Before handing off a proposed correction, name the affected record, its owner and the observation that would establish success. Include other users, application instances or assignment paths if the change is shared. Keep the proposal separate from an action that was actually performed.

"Not checked yet" is not the same as "not there." If you have not looked at the assignment, do not report it as missing. Look, then report what the evidence shows.


[Course home](../index.md)
