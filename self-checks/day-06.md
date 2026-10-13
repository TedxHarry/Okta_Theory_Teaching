---
title: "Day 6: self-check answers"
parent: Self-Checks
nav_order: 6
---

# Day 6: Self-check answers

Attempt the [exercises](../exercises/day-06.md) first. Explain the operation and its evidence, rather than memorizing a component list.

## 1. Place the components

The agent is integration software that connects Okta with AD for supported operations. A domain controller runs the directory service and can handle directory queries and credential validation. The agent can run on a separate server and is not the directory database.

Revisit **Locate the directory, the server, and the agent** if your flow has Okta itself acting as the AD domain controller.

## 2. A successful scoped import

The result concerns the selected population. It does not prove the excluded group is absent from AD. Request the target group's directory record, its OU location, and the configured import scope and results.

An OU is an administrative container; a group has a membership relationship. Matching names do not establish that relationship. Check membership evidence separately.

Revisit **What an import establishes** if you read a successful scan as proof of complete directory coverage.

## 3. Name the operation

The observations describe import, delegated authentication, and password synchronization respectively. Reading selected directory data does not validate a submitted password or demonstrate a configured password-transfer operation.

The ordinary AD agent and the AD Password Sync Agent are distinct components. Do not infer which synchronization components a deployment uses from an import result. Inspect the use case and configuration.

Revisit **Three operations that should not be confused** if “synchronized” was your explanation for every operation.

## 4. No credential result

The demonstrated failure is the timed-out connection attempt from the handling agent to the selected DC. The packet proves neither password rejection nor password correctness.

Request connection evidence for that agent/DC path during J-1. A confirmed route problem would support a network correction; a confirmed unavailable directory service would lead to a different responsible component. The timeout alone does not choose a root cause. Name-resolution evidence can help assess the destination, but the packet does not establish a DNS failure.

A specific handoff could say: “For Jordan's J-1 attempt, the handling agent received Okta's request but its connection to the selected DC timed out. No credential result was obtained. Please check that agent-to-DC path at the attempt time and provide the corresponding reachability and service evidence.” Include the known agent, DC, and timestamp; the handoff does not require Jordan's password.

A password reset is not supported as a correction for the demonstrated connectivity failure. Revisit **Investigate Jordan's failed attempt** if you treated lack of a result as an explicit rejection.

## 5. A different response

AD responded and rejected credential validation. The supplied generic result does not establish why. Request the detailed directory response, the submitted identifier's intended account association, and relevant account conditions for that attempt.

A UPN is a sign-in name, even when it looks like an email address. Compare the actual configured identifiers; do not invent a mismatch or assume email equality.

Revisit **Contrast a credential rejection** if your answer concludes “wrong password” without the distinguishing evidence.

## 6. A narrower successful outcome

A precise update is:

> The network team corrected the identified route problem. In the new correlated attempt J-3, the agent reached AD and AD accepted Jordan's credentials. The remaining Okta requirements and Salesforce access have not yet been verified.

This reports supported recovery without claiming complete sign-in or application access. J-3 is new evidence, not a reason to rewrite J-1 as if it had received a password result. The independent J-2 rejection still has no established cause. J-3 does not prove that J-2 involved a mistyped password or the repaired route problem.

Revisit **Know what a successful follow-up proves** and Day 1's assignment/account/sign-in distinctions.

## 7. Explain two architectures

Northbridge's profile flow is Workday → Okta → AD and assigned applications, with designated directory-owned values returning from AD. Its configured password flow is Okta → AD agent → domain controller → result through the agent to Okta.

The separate AD-led company's profile flow starts in AD and continues to Okta and applications. Its delegated password-validation path still asks AD through the agent. Having one system serve both purposes does not make a data import the same operation as password validation.

Priya has no AD account assignment in Northbridge and uses her applicable Okta authentication configuration. Jordan's result concerns another person and a different path; it does not establish her outcome.

Revisit Day 4's source applicability and **Northbridge is still HR-led** if you made every Okta user depend on AD.

## Ready to continue

You should be able to trace both paths, explain what each component contributes, and choose different evidence for a connection failure and a credential rejection. If that distinction is clear, the next question is what other authentication requirements may remain after a password is accepted.

[Return to Day 6](../lessons/day-06-active-directory.md) · [Course home](../index.md)

[Revise Day 6](../revision/day-06.md): revisit the concepts, example, and questions without rereading the full lesson.
