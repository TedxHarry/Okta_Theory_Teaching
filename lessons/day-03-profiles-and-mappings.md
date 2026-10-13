---
title: "Day 3: Profiles, attributes, and mappings"
parent: Lessons
nav_order: 3
---

# Day 3: Profiles, attributes, and mappings

Daniel Brooks is a Finance manager at Northbridge Services. Workday correctly places him in Finance. His Okta profile also says Finance. Northbridge Projects, however, displays his department as Sales.

Daniel reports:

> My department is correct in HR. Why is Projects showing something different?

Before deciding where to make a correction, follow the value between systems. Day 1 separated the person from the accounts representing them. Day 2 separated individual observations from the whole outcome. Here, those habits help us find where identity information changes.

Alex could change the value he sees in Projects, but first he needs to understand why it is wrong. A correction in one record may leave the rule producing that value unchanged. Follow four places: Workday, Daniel's central profile in Okta, the Projects-specific profile held in Okta, and the account inside Projects.

Your goal is to locate the first demonstrated wrong value, explain why the same department can have different text in different systems, and distinguish calculating a value from delivering it to an application. You can follow the evidence without a tenant or writing a mapping expression.

## Start with one piece of information

Daniel's department is an **attribute**: one named piece of information about him. The value of that attribute is `Finance`.

Alex opens Daniel's Okta record and reads several details together: his name, employee number, and department. That collection of attributes is a **profile**. An attribute names one detail; its value tells Alex what that record currently says about Daniel. A profile brings those details together for this representation of him.

Here is a fictional profile excerpt:

```json
{
  "firstName": "Daniel",
  "lastName": "Brooks",
  "employeeNumber": "NB-1020",
  "department": "Finance"
}
```

Read `department` as the field name and `Finance` as its value. The excerpt contains selected profile fields, not the entire Okta user object.

A user object also has information outside its profile, such as its object identifier and account status. An Active status is not a department attribute, and changing a department is not the same operation as activating an account.

When investigating, be precise about the object and field you mean. "Daniel looks correct" is less useful than "Daniel's Okta user profile has `department = Finance`."

## The profile describes a user; the schema describes the fields

How does a system know which attributes are allowed and what kind of values they can hold?

Imagine Alex needs a place to store an employee number. Before supplying Daniel's number, he needs to know whether that field exists, what kind of value it accepts, and whether it must be filled in. The definition of those fields and constraints is a **schema**. It describes the profile's structure; Daniel's profile supplies the values in that structure.

For example, a schema might specify that an employee number is text and a particular field is required. A company can also need custom attributes in addition to the attributes provided by the product. The available fields and constraints depend on the profile and integration.

Compare these two questions:

- **Schema question:** Does this profile support a department field, and what values may it contain?
- **Profile-value question:** What department value does Daniel have in that field?

Adding a field to a schema does not automatically give every user a correct value. A value must come from the applicable data source or maintenance process.

The reverse matters too. A value can be readable text but still be unacceptable to the destination. If an application expects a department code, sending the full department name can fail its requirements. Alex checks both whether there is a suitable field and whether the proposed value belongs in it.

## There is an Okta user profile and an application user profile

Daniel's central Okta user profile contains the workforce information Northbridge keeps about him in Universal Directory. Projects needs information prepared for its own requirements. Okta holds that application-specific information for Daniel's assignment in an **app user profile**. Alex therefore has two profiles to inspect inside Okta before he checks the actual Projects account.

The app user profile is in Okta. It is not the same record as Daniel's account stored inside Northbridge Projects.

The name describes which application the profile is for, not where it is stored. Think “the Projects-specific information held in Okta” whenever you read *Projects app user profile*.

| Layer | Where it is | What it represents |
|---|---|---|
| Workday employee record | Workday | Daniel's employment information. |
| Okta user profile | Okta | His central workforce profile in Okta. |
| Projects app user profile | Okta | The application-specific attributes associated with his Projects assignment. |
| Projects account record | Northbridge Projects | The account and values actually stored by the application. |

Why prepare a separate application-specific profile? Different applications can need different field names, formats, and values. Follow the intended journey through the table: HR records Finance in Workday, and the configured integration represents it as Finance in Daniel's central Okta profile. Projects needs a department code, so Okta prepares FIN in his Projects-specific profile. The configured account-update process must then deliver that code to Daniel's account inside Projects, where FIN means Finance. These are expected results to verify, not proof that they occurred for Daniel.

Notice the two Projects-related records: one holds the prepared value inside Okta; the other holds the application's actual stored value. Different text can preserve the same meaning, but each record still needs its own check.

Seeing a correct Projects app user profile in Okta therefore does not, by itself, prove that the Projects account has been created or updated successfully. You still need evidence from the account-management operation and destination.

## A mapping connects a source field to a destination field

HR records Daniel's department in Workday. The configured integration needs to obtain the relevant employee information through its applicable import or update process. A rule then determines how the incoming department field is represented in the receiving Okta field. That relationship is an **attribute mapping**. It defines how attributes relate; the rule itself does not retrieve new information or prove that a fresh import occurred. It also does not establish a successful target update merely by existing.

At its simplest, the mapping copies a value:

```mermaid
flowchart TD
  A["Incoming employee department: Finance"] --> B["Okta user profile.department: Finance"]
```

Start at the incoming Finance value and follow the arrow to Daniel's Okta department. This simple mapping preserves the text. The labels describe the intended data flow; they are not instructions or exact Workday connector field names.

Another mapping can take a value from the Okta user profile and prepare the value required by an application's profile.

```mermaid
flowchart TD
  A["Okta user profile.department"] --> B["Projects app user profile.departmentCode"]
```

In the second diagram, start inside Okta at the central department attribute and follow the arrow to the Projects-specific department-code attribute. The destination shown is still an app user profile in Okta. Delivery to Projects is another operation to check. Always name both sides: "the department mapping" is ambiguous when several systems and profiles are involved.

## Direction changes the meaning

For a particular integration, **App to Okta** means the connected application or directory supplies values to the Okta user profile. **Okta to App** means the Okta user profile supplies values toward the application's profile.

The word *app* in the mapping interface can refer to an upstream source integration as well as a downstream business application. It does not automatically mean "the application the employee is trying to open."

| Mapping direction | Question it answers in this example |
|---|---|
| Workday to Okta | How is HR department information represented in Daniel's Okta profile? |
| Okta to Projects | How is Daniel's Okta department represented for Projects? |

A mapping in one direction does not automatically define the reverse direction. It also does not mean a value is constantly synchronized in every circumstance. The integration's supported operations and update configuration still matter.

Day 2's request habit applies here: identify where information comes from and where it is meant to go before interpreting the result. If Daniel's central Okta value is correct but his Projects-specific value is wrong, Alex needs the outgoing relationship; inspecting the incoming relationship alone would leave that discrepancy unexplained.

## A correct mapping can change the value

Northbridge Projects is a fictional application with this department-field requirement:

| Accepted `departmentCode` | Displayed department |
|---|---|
| `SAL` | Sales |
| `FIN` | Finance |
| `IT` | IT |

For this example, the field is required, and these are its accepted codes. These are Northbridge Projects rules, not universal Okta or SCIM requirements.

Workday and Okta use the full name `Finance`. Projects expects `FIN`. Alex cannot simply copy the full name into a field that accepts the code. The mapping needs to express the same business meaning in the destination's format. Converting the value this way is a **transformation**.

The intended rule is:

```text
If the Okta department is Sales, produce SAL.
If the Okta department is Finance, produce FIN.
If the Okta department is IT, produce IT.
If it is missing or unrecognized, flag it for review.
```

This is plain-language rule logic, not Okta Expression Language code. An expression is a formula that calculates a value from its inputs; Okta Expression Language supplies syntax for such formulas. An expression can calculate the code, but a review or notification process must be defined separately. The words "flag it for review" do not mean that a mapping automatically opens a ticket.

For Daniel, predict the output before reading on: the input is Finance, so the intended output is FIN.

The two values are different strings, but they carry the same meaning under the application's defined code table. Comparing values correctly means checking their intended meaning, not demanding identical text everywhere.

## Find the first wrong representation

Alex gathers the following synthetic evidence for Daniel. The observations refer to the same user, the same Projects integration, and the account linked to that assignment. A **mapping preview** evaluates the mapping with a selected input and shows the calculated output. Here, it uses Daniel's listed input; the stored profile and target values are separate observations.

| Boundary | Observed value or behavior |
|---|---|
| Workday employee record | Department: Finance. |
| Imported Okta user profile | `department = Finance`. |
| Configured Okta-to-Projects rule | Always produce the fixed value `SAL` for `departmentCode`. |
| Mapping preview for Daniel | `departmentCode = SAL`. |
| Projects app user profile in Okta | `departmentCode = SAL`. |
| Projects account record | Stored code SAL; displayed department Sales. |

Where does the first wrong representation appear?

The source and Okta user profile agree with the approved requirement. The configured outbound mapping produces SAL even though Daniel is in Finance. The preview demonstrates that wrong output, and the app user profile and target contain it too.

Projects displays Sales because its stored code is SAL. That display agrees with its code table. Alex follows the value backward rather than correcting the display label: the central Okta profile says Finance, but the outgoing rule calculates SAL. This is where the supplied evidence first demonstrates a wrong representation.

Alex has evidence of a mapping defect: the fixed value conflicts with the intended conversion. He can propose replacing that constant with the approved department-to-code logic. Before applying a shared rule, he also checks which other users it affects; a correction for Daniel must preserve the intended conversions for their departments too.

Be careful about what is still unknown. These snapshots do not establish the complete history of how the target obtained SAL. That historical claim would require the relevant operation evidence. They do establish that the current mapping produces the wrong value for the stated input.

Changing Daniel's Workday department would not be an appropriate correction: the evidence says the HR value is already correct.

## A preview is a calculation, not delivery evidence

After the proposed correction, suppose a preview produces FIN for Daniel.

What has been shown? The mapping evaluated to the expected value for that input.

What has not been shown? That the configuration was applied, that existing app user values were updated, that a target update was attempted, or that Projects accepted and stored FIN.

```mermaid
flowchart TD
  A["Expected input"] --> B["Mapping produces the intended value"] --> C["Relevant app user profile reflects that value"] --> D["Configured account-update operation occurs"] --> E["Target account contains the intended value"]
```

Follow the diagram from calculation to stored target value. A preview answers what the rule calculates for its selected input. The app user profile shows what Okta represents for the assignment, the operation record shows an attempted update, and the target read shows what Projects stores. Each step requires its own evidence. A preview does not perform the entire chain for you.

Now consider another packet:

| Observation | Value |
|---|---|
| Okta user department | Finance |
| Mapping preview | FIN |
| Projects app user profile | FIN |
| Projects account | SAL |
| Target update result | Not supplied |

Compare this packet with the fixed-value defect. Here, the calculated code and app user value are already correct; Projects still holds the old code. Rewriting the expression would not answer whether the prepared value was sent and accepted. The unanswered boundary is delivery from the representation in Okta to the linked target account.

Ask whether updates are supported and enabled for that attribute, whether an update was attempted, what response it received, and whether the inspected target is the linked account. Do not claim a specific connector failure without the result. Do not assume saving a mapping means all existing accounts were updated.

A useful evidence request separates possible explanations. Ask for the update record for Daniel's linked Projects account: what value was sent and what reply came back? A recorded rejection calls for examining its reason. Evidence that updates are disabled calls for checking the intended update configuration instead. Neither finding is supplied by this packet.

## Recognize a verified correction

Here is a separate synthetic follow-up for Daniel after the approved mapping correction. All observations concern his linked Projects account, and the target check follows the recorded update.

| Evidence | Result |
|---|---|
| Saved mapping evaluated with Finance | FIN |
| Projects app user profile in Okta | FIN |
| Account-update record for the linked target | Department code FIN sent; target reports success |
| Target account read after that update | FIN, displayed as Finance |

The saved rule produces the intended code, Okta holds it for the assignment, the update record reports sending it successfully, and the later target read confirms it was stored. Together, these observations support a successful department correction for Daniel at the checked point. They do not establish the outcome for every other user sharing the mapping. Those users need an appropriately scoped check too.

## Missing data needs a decision

Suppose the incoming department has no value. Should the mapping use Sales because most employees are in Sales?

Using Sales would turn a lack of information into a claim about this person's department. Under Northbridge's rule above, missing or unrecognized values require review. Alex needs the real source value and an agreed handling process, rather than a guess based on what is common.

These examples also have different meanings:

| Representation | What you can observe |
|---|---|
| `"department": "Finance"` | A supplied text value. |
| `"department": ""` | An empty string. |
| `"department": null` | The field is present with JSON's marker for no value. This is different from the text `"null"` or an empty text string. |
| No `department` field in a selected excerpt | The excerpt does not show the field. |

Do not assume these cases behave identically in every integration. A field omitted from an excerpt may simply have been left out of the evidence. A missing input also does not prove that Okta will automatically choose another source or clear an existing destination value.

The correct next question is what the source actually contains and how this mapping and update operation handle that condition.

## Mapping and ownership answer different questions

A mapping explains **where a value goes and how it is transformed**.

Attribute ownership explains **which system is allowed to control that value**.

For Daniel's HR department, Northbridge has chosen Workday as the controlling source. The mapping into Okta expresses how that data is represented there. A later mapping prepares the application-specific code.

The mapping tells Alex how to represent the department; Northbridge's ownership decision tells him where that department should be maintained. A correct rule does not authorize him to change a correct HR value to compensate for an error elsewhere. Competing sources become especially important when Workday, AD, and Okta-managed users coexist. Day 4 examines that decision explicitly.

## Read when a mapping applies

Keep one point in mind for this additional detail: a correct expression does not guarantee that an existing application account received a new value. You do not need to memorize the settings today. Where supported, a mapping can calculate an app user field when the app user profile is created, or also recalculate it during updates. In Profile Editor, Alex checks both the mapping direction and when the mapping applies, rather than judging the expression alone.

Suppose a separate Projects example has the correct Finance-to-FIN expression, but the department mapping is configured for creation only. An existing user's old app-profile value can remain. Compare that behavior with the business requirement before changing it. Review other assigned users, decide how existing records will receive the correction, then verify the app user profile and target separately.

Separate two actions: calculating a new app user value and sending the value already stored there. Creation-only does not mean the field is guaranteed absent from every later request. Okta's Profile Push documentation describes sending the full app user profile during a profile update, including stored values for fields whose mappings are creation-only. Recalculating a field and transmitting a stored field are different steps. See [Profile Push behavior](https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-about-selective-profile-push.htm).

Keep three questions separate as you explain Daniel's ticket: who controls the value, what the mapping prepares, and what the destination actually stores. Naming the first proven discrepancy helps Alex choose a correction; checking the subsequent operation and target tells him whether it worked.

## Tell Daniel's story

Explain the complete flow in ordinary language:

> Daniel belongs to Finance in the HR record. His Okta user profile also contains Finance. Projects needs a department code, so an outbound mapping prepares an application-specific value in Okta. The intended value is FIN. The target account must then receive and store that value through the configured update process.

Add the failure: the current mapping always returns SAL. Where should Alex investigate, which input should remain unchanged, and what evidence would confirm a successful correction?

Then change the condition: the mapping and app user profile now contain FIN, but the target still contains SAL. Explain why the next investigation is different.

## Before moving on

Can you explain:

- The difference between an attribute, its value, a profile, and a schema?
- Where the Okta user profile, app user profile, and target account live?
- Why mapping direction must be stated explicitly?
- Why Finance becoming FIN can be correct?
- What a correct preview proves and what it leaves unverified?
- Why an omitted field is not automatically proof of an empty source value?
- How mapping differs from ownership?

Try the [Day 3 reasoning exercises](../exercises/day-03.md), then compare with the [separate self-check answers](../self-checks/day-03.md).

In [your notebook](../notebook/guide.md), draw the four data layers and label each observed value. Record the first proven discrepancy and the additional evidence needed to verify delivery to the target.

[Day 4](day-04-sources-and-ownership.md) asks who controls the profile and individual attributes when more than one source is connected.

[Previous: Day 2](day-02-requests-and-evidence.md) · [Course home](../index.md)

[Revise Day 3](../revision/day-03.md): revisit the concepts, example, and questions without rereading the full lesson.
