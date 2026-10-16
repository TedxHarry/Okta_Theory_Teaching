---
title: "Day 6: self-check answers"
parent: Self-Checks
nav_order: 6
---

# Day 6: Self-check answers

Attempt the [exercises](../exercises/day-06.md) first. Explain the operation and its evidence, rather than memorizing a component list.

## 1. Place the components

Give the two components different jobs in your explanation. The agent handles supported work between Okta and AD. The domain controller runs the directory service that can answer directory queries and evaluate the credentials.

In the password path, a request reaches the agent and then goes to the controller for the AD decision. The agent can run on a separate server; it is not the directory database. Reaching it is useful progress, but we still need the result from the controller.

Revisit [Locate the directory, the server, and the agent](../lessons/day-06-active-directory.md#locate-the-directory-the-server-and-the-agent) if your flow has Okta itself acting as the AD domain controller.

## 2. A successful scoped import

The import read the selected directory locations. Jordan's user arrived from an included OU; that does not tell us whether the missing group exists elsewhere in AD. Find the expected group's directory record, then compare its OU location with the selected group OUs and the import results.

Also separate location from membership. A record stored in an OU named Sales is not automatically a member of a group named Sales. Open the actual group membership if that is the question you need to answer.

Revisit [What an import establishes](../lessons/day-06-active-directory.md#what-an-import-establishes) if you read a successful scan as proof of complete directory coverage.

## 3. Name the operation

The observations describe import, delegated authentication, and password synchronization respectively. Reading selected directory data does not validate a submitted password or demonstrate a configured password-transfer operation.

The ordinary AD agent and the AD Password Sync Agent are distinct components. Do not infer which synchronization components a deployment uses from an import result. Inspect the use case and configuration.

Revisit [Three operations that should not be confused](../lessons/day-06-active-directory.md#three-operations-that-should-not-be-confused) if “synchronized” was your explanation for every operation.

## 4. No credential result

The request reached the agent, then its connection to the selected DC timed out. That is the demonstrated failure in J-1. No AD credential answer was obtained, so we cannot say that the password was accepted or rejected.

Request connection evidence for that agent/DC path during J-1. A confirmed route problem would support a network correction; a confirmed unavailable directory service would lead to a different responsible component. The timeout alone does not choose a root cause. Name-resolution evidence can help assess the destination, but the packet does not establish a DNS failure.

A specific handoff could say: “For Jordan's J-1 attempt, the handling agent received Okta's request but its connection to the selected DC timed out. No credential result was obtained. Please check that agent-to-DC path at the attempt time and provide the corresponding reachability and service evidence.” Include the known agent, DC, and timestamp; the handoff does not require Jordan's password.

A password reset would change a credential without explaining the demonstrated connection timeout. The next check belongs to that failed connection, not to an assumed password rejection.

**Revisit:** [Investigate Jordan's failed attempt](../lessons/day-06-active-directory.md#investigate-jordans-failed-attempt)

## 5. A different response

AD responded and rejected credential validation. The supplied generic result does not establish why. Request the detailed directory response, the submitted identifier's intended account association, and relevant account conditions for that attempt.

A UPN is a sign-in name, even when it looks like an email address. Compare the actual configured identifiers; do not invent a mismatch or assume email equality.

Revisit [Contrast a credential rejection](../lessons/day-06-active-directory.md#contrast-a-credential-rejection) if your answer concludes “wrong password” without the distinguishing evidence.

## 6. A narrower successful outcome

A precise update is:

> The network team corrected the identified route problem. In the new correlated attempt J-3, the agent reached AD and AD accepted Jordan's credentials. The remaining Okta requirements and Salesforce access have not yet been verified.

This reports supported recovery without claiming complete sign-in or application access. J-3 is new evidence, not a reason to rewrite J-1 as if it had received a password result. The independent J-2 rejection still has no established cause. J-3 does not prove that J-2 involved a mistyped password or the repaired route problem.

Revisit [Know what a successful follow-up proves](../lessons/day-06-active-directory.md#know-what-a-successful-follow-up-proves) and Day 1's assignment/account/sign-in distinctions.

## 7. Explain two architectures

Northbridge's profile flow is Workday → Okta → AD and assigned applications, with designated directory-owned values returning from AD. Its configured password flow is Okta → AD agent → domain controller → result through the agent to Okta.

The separate AD-led company's profile flow starts in AD and continues to Okta and applications. Its delegated password-validation path still asks AD through the agent. Having one system serve both purposes does not make a data import the same operation as password validation.

Priya has no AD account assignment in Northbridge and uses her applicable Okta authentication configuration. Jordan's result concerns another person and a different path; it does not establish her outcome.

Revisit Day 4's source applicability and [Northbridge is still HR-led](../lessons/day-06-active-directory.md#northbridge-is-still-hr-led) if you made every Okta user depend on AD.

## Ready to continue

You should be able to trace both paths, explain what each component contributes, and choose different evidence for a connection failure and a credential rejection. If that distinction is clear, the next question is what other authentication requirements may remain after a password is accepted.

[Return to Day 6](../lessons/day-06-active-directory.md) · [Course home](../index.md)

[Revise Day 6](../revision/day-06.md): revisit the concepts, example, and questions without rereading the full lesson.

[Practice questions with explanations](../question-bank/day-06.md) · [Day 6 recap](../revision/day-06.md) · [Reasoning exercises](../exercises/day-06.md)
