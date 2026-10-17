---
title: "Day 16: Turn understanding into a safe practice plan"
parent: Lessons
nav_order: 16
---

# Day 16: Turn understanding into a safe practice plan

This is an optional practice bridge after the 15-day theory course. You can use it to plan your first training exercise when you are ready; tenant access is not required for the written plan.

Alex has finished reviewing the Northbridge investigations. A learner now asks him, “I understand the explanations. What should I practice first?”

The useful next step is a small experiment with an outcome you can predict and verify. Creating many users or changing several settings at once would make a result harder to explain. Start with one relationship, one intended change and evidence from the systems involved.

This lesson uses a separate training scenario. It does not supply new outcomes for Northbridge's open tickets. You can write the practice plan without an Okta tenant. If you later carry it out, use a training environment, synthetic identities and application instances that you are authorized to manage.

## Begin with a question you can answer

Alex chooses this question: can a department-based eligibility rule select the intended training employee while excluding a contractor?

That is narrower than “make access work.” It identifies the comparison to test and the result to observe. It does not yet ask whether an application account was created, whether sign-in succeeded or whether the person can approve a business transaction.

The training design has four fictional people. Casey is a Finance employee; Morgan is a Sales contractor; Riley is a Finance contractor; Taylor is a Sales employee. No contractor exception is approved in this exercise. The intended normal condition is Finance AND Employee, and the dedicated destination group is `LAB-Finance-Employees`. These are separate training identities, and no Northbridge approval is being reused.

Before deciding what to configure, write the expected result for each person. Only Casey should qualify for the normal population. Morgan meets neither condition; Riley meets Finance but not Employee; Taylor meets Employee but not Finance.

Why include all four? If the condition accidentally became Finance OR Employee, Casey would still be included and Morgan would still be excluded. Those two checks alone would miss the mistake. Riley and Taylor expose each unwanted route through the broader condition. If you later add an exception exercise, give it its own approval, scope, owner and end condition rather than altering a contractor's classification to make the normal rule include them.

## Define the environment before the action

An experiment needs a named destination. Identify the training organization, the application integration instance and the target environment, if one is involved. Confirm who may change them and who can restore the earlier state. A browser tab or a familiar application name does not establish that you are in the intended environment.

Also state where the training profile values come from. If you enter synthetic values into Okta for this exercise, describe them as training data. That does not reproduce Northbridge's Workday sourcing or prove that an employee import works. If your environment has an existing source connection, investigate its ownership and supported update behavior before changing a sourced field.

For this exercise, confirm all four training users are Active and that the central Okta profiles contain the intended department and workerType values. The **schema** defines the available profile fields. Check that workerType exists there, that the stored profiles hold the intended values, and that the rule references those actual fields. A field name in the written plan cannot establish any of those conditions. The default attribute-rule behavior includes Active users when no different user-status condition is specified; an inactive training account can make a missing membership misleading.

Use the dedicated training group with no application assignments for this first membership experiment. Preview the proposed rule against the planned users and review all other profiles it could include before activating it. A saved rule is initially Inactive. Activation applies it across the organization, not only to the four names in your plan. Confirm the rule is active and its relevant evaluation completed before interpreting the observed membership. See [creating group rules](https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-create-group-rules.htm) and [group-rule best practices](https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-group-rules-best.htm).

Alex records the initial profiles, current membership, assignment paths and any target-account association relevant to the experiment. This is the **starting state**, the evidence recorded before the intended change. If Casey already had a membership or direct application assignment, seeing it afterward would not show that the new rule supplied it. Comparing before and after helps distinguish a new result from a relationship that was already present.

## Predict before observing

Write down the input, intended operation and expected evidence before doing anything. For the first exercise, the inputs are the four training profiles, the operation is the configured rule evaluation, and the evidence is the resulting membership for each person.

If Casey appears in the group, compare the result with the actual condition, exclusions and processing evidence. For Morgan, the expected result is absence from the group. But a rule that never ran could leave Morgan absent too. Check the active rule, applicable inputs and relevant evaluation before treating the membership observation as a completed negative test. If results differ from your prediction, locate the earliest demonstrated discrepancy rather than rewriting the expected result to match the screen.

Keep one changed condition at a time. A later exercise might change Casey's department under a separately stated training requirement. First predict the membership result. Then observe it. Do not simultaneously change the rule, user classification and application assignment: you would lose the ability to explain which change produced the outcome.

## Add the application boundary separately

Only after the membership question is understood should Alex add the next question: does the intended group supply the training application's assignment?

Record the group-to-application relationship and any other assignment paths. Verify the actual assignment for the intended person. Membership and assignment remain different results. A tile can help locate an application, but it cannot establish that its target account, protocol exchange or business permission is correct.

Then decide whether target-account management is part of the training design. Inspect the actual connector's supported and enabled behavior. An application owner may need to prepare the account through a separate process. Do not assume the training application supports SCIM because Projects did, or that federation automatically creates an account.

If account management is included, identify the intended linked record, the generated operation, its response and the checked target state. If it is outside the experiment, state that boundary clearly. You can verify an assignment without claiming that an account was created or updated. A later exercise can add that relationship with its own expected operation and evidence.

## Test entry and permission as different outcomes

For a sign-in exercise, establish the expected authentication requirement and use the evidence from that attempt. Follow the applicable proof, the actual protocol exchange, application validation and intended account selection. Confirm an application response rather than stopping at an Okta success event.

An accepted application visit still leaves the business action to test. Give the training user only the approved capability for the exercise. If the requirement is ordinary submission, define a separate negative check for an approval action. The exact test and evidence belong to the target application's behavior; this lesson does not invent an endpoint or role configuration for it.

Account state, authentication proof and permission results belong in separate notes. That makes a failed business action easier to investigate without treating every failure as a password problem.

## Include an end condition

Alex also plans how the training access will end. Name the assignment paths to remove, the target-account outcome if applicable, and the session outcomes the exercise requires. Record which owner can perform each action and what observation would demonstrate completion.

Restoring the rule is configuration recovery. It is not automatically cleanup of every account or session created during the experiment. If a session must end, check whether the old session still accepts a new protected request. Distinguish that from a new session created through a later sign-in.

Retain the evidence you need to explain the exercise, with unnecessary personal data and credentials excluded. Do not treat deletion as the default cleanup action for an account whose ownership or retention requirement remains unresolved.

## Write the practice record

Your plan should name the question, authorized environment, synthetic population, approved outcome, initial state, predicted results, intended actions, evidence, responsible owners and recovery or cleanup requirements. Keep planned actions separate from actions you actually performed.

For the first experiment, the destination is LAB-Finance-Employees. This compact record contrasts the intended condition with a hypothetical mistake:

| Training identity | Finance AND Employee: predicted membership | Finance OR Employee: predicted membership | Actual result |
|---|---|---|---|
| Casey : Finance / Employee | Member | Member | Not tested |
| Morgan : Sales / Contractor | Not a member | Not a member | Not tested |
| Riley : Finance / Contractor | Not a member | Member | Not tested |
| Taylor : Sales / Employee | Not a member | Member | Not tested |

Read the columns as different kinds of statements: "This is what AND should produce," "This is what the hypothetical OR mistake would produce," and "This is what was actually observed." The first two are predictions. The OR comparison explains the useful negative cases; it is not an instruction to activate an incorrect rule. After an approved experiment, record actual membership and the corresponding rule-processing evidence, then explain any difference from the AND prediction. Until that evidence exists, leave the actual result as Not tested.

If you have no training environment, complete the predictions and evidence requests on paper. Label them as a plan, not a successful configuration exercise. If you do execute it later, record the actual results, including mismatches and unfinished outcomes.

Before moving on, explain why a correct group result would not prove a target account exists, why an accepted sign-in would not prove an approval permission, and why returning the configuration to its original state would not establish complete cleanup.

Use [your notebook](../notebook/guide.md) for the plan. Review [application onboarding](../reference/onboarding-an-application.md) for the design questions and [the troubleshooting playbook](../reference/troubleshooting-playbook.md) for locating evidence. Their examples do not replace your training environment's actual contract.

For more examples, open the [Day 16 practice bank](../question-bank/day-16.md). Each question includes its own context and an expandable teaching explanation.

[Previous: Day 15](day-15-integrated-case.md) · [Course home](../index.md)
