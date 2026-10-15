---
title: "Day 4 practice bank"
parent: "Revise, Test, and Learn"
nav_order: 4
has_children: true
---

# Day 4: Questions

## Authority and responsibility

<a id="q01"></a>

### Q01. Visible is not owned

<p class="qb-question"><strong>Question:</strong> Maya’s company uses Workday for HR data and Okta for identity management. Workday is designated to control her profile, and department follows that source. Support can read department in Okta. Does visibility make Okta the place responsible for maintaining the value?</p>

<details class="qb-answer" id="q01-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Visibility shows where the value can be read. Ownership identifies which system is meant to control it. Here department follows Workday, even though Okta displays it.</p>
<p>Route maintenance according to that responsibility and the approved business value. A view of the receiving profile does not automatically authorize a local correction.</p>
<p>Before editing, check the person's source relationship and the field's configuration. A visible value is an observation, not a transfer of ownership.</p>
</div>
</details>

<a id="q02"></a>

### Q02. Authority and accuracy

<p class="qb-question"><strong>Question:</strong> A company designates its Workday HR system as the authoritative owner of employee department. Maya’s approved department is Sales, but Workday incorrectly records Finance. Can the authoritative source be wrong, and where should the business-data correction be handled?</p>

<details class="qb-answer" id="q02-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Yes. Authoritative means responsible for controlling the information, not guaranteed to contain perfect data.</p>
<p>The approved business department and recorded value disagree, so the correction belongs through the responsible HR maintenance process. The source designation does not make Finance accurate.</p>
<p>Keep two checks separate: who owns the field and what its legitimate value should be. After correcting the source, verify any required downstream results rather than assume the new value reached every destination.</p>
</div>
</details>

<a id="q03"></a>

### Q03. One profile, an attribute exception

<p class="qb-question"><strong>Question:</strong> For employee Maya, Workday is the effective profile source in Okta. The company separately designates Active Directory (AD), its directory service, to control her work-email attribute. Does this give her two effective profile sources?</p>

<details class="qb-answer" id="q03-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A user has one effective profile source at a time, while an individual attribute can have a separately designated source.</p>
<p>Workday is the usual profile owner here, with AD as the explicit work-email exception. The exception does not replace the overall source decision.</p>
<p>Read the profile source first, then the field's owner. That explains how different maintenance responsibilities coexist without treating every field as globally controlled by one system.</p>
</div>
</details>

<a id="q04"></a>

### Q04. Mapping or ownership?

<p class="qb-question"><strong>Question:</strong> A company chooses Workday, its HR system, to control department. A separate business application requires Finance to be represented as FIN, so a mapping converts the text. Which decision concerns ownership, and which concerns representation?</p>

<details class="qb-answer" id="q04-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Workday controlling department is ownership. Finance becoming FIN is a mapping transformation: a rule for expressing the same business meaning in the destination's format.</p>
<p>A conversion rule cannot decide which conflicting source the company wants to govern the field. Ownership supplies that responsibility.</p>
<p>Use both decisions: establish the approved owner and input, then inspect how the value is represented and delivered. Neither responsibility alone proves the actual target result.</p>
</div>
</details>

<a id="q05"></a>

### Q05. An older term

<p class="qb-question"><strong>Question:</strong> An older identity-management document calls Workday the user’s profile master. Current terminology calls a designated system the profile source. Does the older phrase describe another independent owner, and what configuration still needs checking?</p>

<details class="qb-answer" id="q05-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Profile master is older terminology for the profile-source concept: the system designated to control a user's profile. It does not create an additional owner.</p>
<p>Check the actual user's effective source and any field-specific exceptions. A document naming a system does not prove that it applies to every person.</p>
<p>Recognizing the term helps read older material. The applicable record relationships and settings still supply the maintenance decision for the particular field.</p>
</div>
</details>

## Read the employee architecture

<a id="q06"></a>

### Q06. Read the arrangement

<p class="qb-question"><strong>Question:</strong> A company’s employee design sends HR information from Workday to Okta, then uses configured account operations toward Active Directory (AD) and business applications. Separately, AD-owned work email comes into Okta. What does topology describe, and do these directions prove successful updates?</p>

<details class="qb-answer" id="q06-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Topology describes the arrangement of systems and the directions information travels between them. This design assigns different responsibilities to HR, identity management, the directory, and applications.</p>
<p>Those directions state intended relationships, not completed operations. Each requires supported configuration and result evidence for a specific investigation.</p>
<p>Use the architecture to locate the relevant boundary. Do not turn a data-flow arrow into proof that the latest value was sent or stored successfully.</p>
</div>
</details>

<a id="q07"></a>

### Q07. AD on both sides

<p class="qb-question"><strong>Question:</strong> Okta connects to Active Directory (AD), the company directory, for supported account creation and updates. The company also explicitly owns work email in AD and supplies that attribute to Okta. Can AD be a destination for some work and a source for another field?</p>

<details class="qb-answer" id="q07-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Yes. The roles describe different operations and fields. Account-management requests can go toward AD while its designated email value comes toward Okta.</p>
<p>That does not authorize both systems to overwrite every attribute. Identify the field, direction, and applicable responsibility for each operation.</p>
<p>AD being a destination in one relationship does not prevent it being a source in another. The precise responsibilities make the design understandable without assuming unrestricted two-way writes.</p>
</div>
</details>

<a id="q08"></a>

### Q08. Separate destinations in a simplified diagram

<p class="qb-question"><strong>Question:</strong> An architecture sketch groups “Active Directory accounts and business application accounts” in one destination box to save space. Active Directory is the company directory; Salesforce is a separate business application. Does the grouping mean Salesforce records are stored in AD?</p>

<details class="qb-answer" id="q08-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The drawing groups separate destinations; it does not combine their storage or responsibilities. A directory account belongs to AD, while a Salesforce account belongs to Salesforce.</p>
<p>Name the actual system and resource when requesting evidence. A successful directory operation cannot establish a separate application's result.</p>
<p>Read the simplified box as several onward destinations, each with its own configuration and outcomes. Diagram layout should not create a relationship that the architecture does not supply.</p>
</div>
</details>

<a id="q09"></a>

### Q09. Priority needs applicability

<p class="qb-question"><strong>Question:</strong> Okta’s configured external profile-source order puts Workday HR first and Active Directory (AD) second. Maya has both source associations; Priya has neither and is confirmed Okta-managed. Does Workday’s first position make it the owner of every identity?</p>

<details class="qb-answer" id="q09-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Priority chooses among designated sources that actually apply to a user. The order does not create source associations for everyone.</p>
<p>Maya's two confirmed relationships make the Workday-first order relevant to her. Priya's checked model has no external source association, so her effective source is Okta.</p>
<p>Read the person's associations before using the ranking. The same configured list can lead to different maintenance processes for different people.</p>
</div>
</details>

<a id="q10"></a>

### Q10. Architecture is not delivery

<p class="qb-question"><strong>Question:</strong> A company’s architecture says Workday HR data should reach Maya’s Okta profile. Her department recently changed, but no current profile read or import/update result is supplied. Does the intended Workday-to-Okta flow establish that her latest department arrived?</p>

<details class="qb-answer" id="q10-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The architecture tells you where the information is intended to come from. The current operation and record show what actually arrived.</p>
<p>Inspect the linked records, relevant mapping, and applicable import or update result. An import brings source records or changes into processing; its outcome needs evidence.</p>
<p>Ownership and data-flow design guide the investigation. They cannot supply a destination result that has not been checked.</p>
</div>
</details>

## Scope, matching, and associations

<a id="q11"></a>

### Q11. Import, matching, association

<p class="qb-question"><strong>Question:</strong> Okta receives an employee record from a connected HR system, compares it with known users, and links it to the intended identity through the applicable process. How do import, matching, and source association describe different parts of that work?</p>

<details class="qb-answer" id="q11-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Import brings the records or changes into processing. Matching compares incoming information with known users. A source association is the resulting link between the Okta user and that integration's record.</p>
<p>Information arriving does not itself prove correct matching. A familiar name is not enough to establish ownership of the linked account.</p>
<p>Check each stage's relevant evidence. Knowing which relationship exists helps explain where later sourced values should come from.</p>
</div>
</details>

<a id="q12"></a>

### Q12. Import scope

<p class="qb-question"><strong>Question:</strong> A company’s HR integration selects employee records for import into Okta. Priya is a contractor. Her actual import inclusion and source associations have not been inspected. Does selecting the employee population establish that her record was included too?</p>

<details class="qb-answer" id="q12-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Import scope identifies the records selected for processing. It does not automatically include contractors or administrative identities.</p>
<p>Inspect the actual selection and Priya's associations. Her population label alone does not enforce either inclusion or exclusion.</p>
<p>The integration's scope and resulting links are related but separate facts. Use those observations before claiming how her profile is maintained.</p>
</div>
</details>

<a id="q13"></a>

### Q13. An enabled connector

<p class="qb-question"><strong>Question:</strong> Active Directory (AD) is an enabled directory integration in Okta. Priya’s individual directory record and source associations have not been checked. Can support infer that she has an AD association merely because the connector is available?</p>

<details class="qb-answer" id="q13-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. An available integration is an environment-level fact. A user's association is a specific link requiring its own evidence.</p>
<p>Inspect Priya's linked records rather than infer them from the connector status. The connector can operate for a selected population without applying to every identity.</p>
<p>This distinction prevents a system diagram from becoming an invented user relationship. Find which sources actually apply before deciding her effective profile source or field maintenance process.</p>
</div>
</details>

<a id="q14"></a>

### Q14. Choose Maya’s effective source

<p class="qb-question"><strong>Question:</strong> Employee Maya’s Workday HR and Active Directory (AD) source associations are verified. Both are designated sources, Workday ranks first, and her checked effective profile source is Workday. What explains that result, and is it enough to identify every field’s owner?</p>

<details class="qb-answer" id="q14-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Among the applicable sources, Workday has the higher configured priority. That supports the supplied overall profile-source result.</p>
<p>The particular field still needs inspection. It may inherit that source or have an explicit different owner, such as a separately designated directory-owned email field.</p>
<p>Choosing the profile source is one step in the investigation. It does not remove attribute-level exceptions or prove any update reached its destination.</p>
</div>
</details>

<a id="q15"></a>

### Q15. A failed import

<p class="qb-question"><strong>Question:</strong> Workday HR is an employee’s effective profile source in Okta, with Active Directory (AD) second among applicable sources. A Workday import fails, but no source-setting or association change is supplied. Does that failure automatically prove AD took over ownership?</p>

<details class="qb-answer" id="q15-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The failure describes an operation, not a verified change of authority. AD's second position is not evidence of automatic emergency substitution.</p>
<p>Inspect the actual associations and sourcing settings before claiming a new owner. Separately investigate the failed operation and its effect on data arrival.</p>
<p>Keep operational health and ownership distinct. A source can remain responsible for a profile while its latest import needs correction.</p>
</div>
</details>

<a id="q16"></a>

### Q16. No value, no new owner

<p class="qb-question"><strong>Question:</strong> Workday HR controls Maya’s department in Okta. Active Directory (AD) is another connected source, but no fallback or ownership change is shown. Workday’s department is empty. Does that alone establish AD as the new owner?</p>

<details class="qb-answer" id="q16-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Missing input does not establish a change of ownership. The actual sourcing and handling settings determine what should happen.</p>
<p>Check the source condition, the department's configuration, and the applicable mapping and update results. Do not assume the next connected source supplies a replacement.</p>
<p>An empty field identifies information to resolve. It does not silently change which business system is responsible for maintaining the department.</p>
</div>
</details>

## Who controls this field?

<a id="q17"></a>

### Q17. Follow inheritance for two people

<p class="qb-question"><strong>Question:</strong> A department field is configured to inherit from each user’s effective profile source. Maya’s verified source is Workday HR; Priya’s is Okta under an approved contractor-maintenance process. Why can the same setting lead to different edit locations?</p>

<details class="qb-answer" id="q17-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Inheritance follows the effective source of the particular user. Maya's department therefore follows Workday, while Priya's follows her authorized Okta-maintenance process.</p>
<p>The field setting is not globally pinned to Workday for every identity. Its meaning depends on the person-level source decision.</p>
<p>This allows different populations to coexist in one environment. Route a correction through the applicable owner rather than copy another person's maintenance path.</p>
</div>
</details>

<a id="q18"></a>

### Q18. Interpret the source settings

<p class="qb-question"><strong>Question:</strong> In Okta, an administrator checks an attribute’s ownership options: Inherit from profile source, Inherit from Okta, and Override profile source. What responsibility do these choices define, and are they formulas for converting a department name into a code?</p>

<details class="qb-answer" id="q18-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They define attribute sourcing, not the conversion formula. Inherit from profile source follows the user's effective source. Inherit from Okta designates Okta for the field. Override profile source designates another source.</p>
<p>A mapping separately defines how information is represented, such as Finance becoming FIN for an application.</p>
<p>Read the owner for this field and person, then inspect the relevant representation and operation. Choosing an owner does not calculate or verify every destination value.</p>
</div>
</details>

<a id="q19"></a>

### Q19. Workday first, email from AD

<p class="qb-question"><strong>Question:</strong> Workday HR is Maya’s effective profile source in Okta. The company explicitly designates Active Directory (AD), its directory, as the source for her work email. Why can Okta use AD’s email without AD becoming the overall profile owner?</p>

<details class="qb-answer" id="q19-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The work-email setting is an attribute-level exception. It governs that particular field while Workday remains the overall profile source.</p>
<p>Reading only the global source ranking would miss the explicit exception. Inspect both the person-level profile decision and the field's source configuration.</p>
<p>This does not make AD owner of department, every identifier, or lifecycle processing. Keep each responsibility attached to the scope the company actually designated.</p>
</div>
</details>

<a id="q20"></a>

### Q20. Avoid competing writes

<p class="qb-question"><strong>Question:</strong> Active Directory (AD) owns employee work email and supplies it to Okta. A proposed Okta-to-AD write would overwrite that email with an older stored value. Why could the competing write undermine the intended maintenance process?</p>

<details class="qb-answer" id="q20-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It could replace the controlling source's maintained value with stale information. AD would supply the owned field while another operation undid that maintenance.</p>
<p>Identify the actual attribute and direction before authorizing writes. Connectivity in both directions does not mean both systems should overwrite the same field.</p>
<p>Align supported configuration with ownership, then inspect actual results. The architecture can support multiple responsibilities without allowing unrestricted competing updates.</p>
</div>
</details>

<a id="q21"></a>

### Q21. No supplied email fallback

<p class="qb-question"><strong>Question:</strong> Active Directory (AD) explicitly controls Maya’s work email in Okta. Workday HR has another email value, but AD’s value is missing and no substitution rule is supplied. Can support assume Workday’s email becomes the replacement?</p>

<details class="qb-answer" id="q21-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. An explicit AD owner does not by itself establish a fallback to Workday. The question leaves the substitution behavior unspecified.</p>
<p>Inspect the field's configured handling and actual resulting profile. Also resolve the legitimate email requirement through the appropriate maintenance owner.</p>
<p>Missing data changes the input available, not automatically the source agreement. Keep the expected replacement unknown until settings and operation evidence explain it.</p>
</div>
</details>

## Interpret conflicting values

<a id="q22"></a>

### Q22. Read the department disagreement

<p class="qb-question"><strong>Question:</strong> For Maya’s correctly linked records, Workday HR owns department and Sales is the approved value. Workday and Okta show Sales; Active Directory (AD) shows Finance. No intended AD department-maintenance process is supplied. Which Okta value agrees with its owner, and what should be checked next?</p>

<details class="qb-answer" id="q22-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Okta's Sales agrees with the controlling Workday value. AD's different department does not override that ownership in the supplied configuration.</p>
<p>Before correcting AD, establish whether that directory field is meant to receive the department and how its maintenance works. A disagreement alone does not supply that requirement.</p>
<p>Do not change correct Okta data to match the other record. Follow the approved responsibility and investigate the separate destination only when its expected outcome is clear.</p>
</div>
</details>

<a id="q23"></a>

### Q23. Does disagreement prove sync failure?

<p class="qb-question"><strong>Question:</strong> Workday HR and Okta contain Maya’s approved Sales department, while her linked Active Directory (AD) record contains Finance. No AD synchronization requirement or write history is supplied. Do these snapshots prove a synchronization operation failed?</p>

<details class="qb-answer" id="q23-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They establish a difference, not a failed operation or its cause. First determine how AD's department is supposed to be maintained.</p>
<p>If synchronization is required, inspect the mapping, supported update configuration, and operation evidence. An update not attempted, a rejected update, or a later competing write would require different findings.</p>
<p>Current values cannot choose among those histories. Use the requirement to identify the boundary, then obtain the result evidence.</p>
</div>
</details>

<a id="q24"></a>

### Q24. Read the email disagreement

<p class="qb-question"><strong>Question:</strong> Active Directory (AD) explicitly owns Maya’s work email. AD and Okta store mrao@northbridge.example, while Workday HR stores maya.rao@northbridge.example. The approved email requirement has not been compared. Does the different Workday address prove Okta’s work email is wrong?</p>

<details class="qb-answer" id="q24-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Okta reflects the designated AD source, so the different HR address alone does not establish a defect in that field.</p>
<p>The controlling value still needs comparison with the approved business email. Authority identifies responsibility; it does not guarantee accuracy.</p>
<p>Do not demand identical text across every record without a requirement. Establish the legitimate value and owner, then follow any justified maintenance and delivery checks.</p>
</div>
</details>

<a id="q25"></a>

### Q25. Separate the identifiers

<p class="qb-question"><strong>Question:</strong> A company designates Active Directory (AD) to control employee Maya’s work email. Her Okta login and separate application usernames have not been read. Does identifying the email owner establish those identifiers’ exact values too?</p>

<details class="qb-answer" id="q25-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Work email, Okta login, and each application username are distinct fields. Their values may differ under the relevant requirements and mappings.</p>
<p>The supplied ownership decision concerns work email only. Obtain the actual identifier evidence for the system and operation being investigated.</p>
<p>Calling everything Maya's email can hide which field was checked. Name both the record and field so a maintenance decision does not become an unsupported sign-in-name claim.</p>
</div>
</details>

## Choose the correction boundary

<a id="q26"></a>

### Q26. Correct source, wrong receiver

<p class="qb-question"><strong>Question:</strong> Workday HR owns Maya’s department and correctly records the approved value Sales. Her correctly identified Okta profile instead shows Finance. The import/update history and incoming mapping have not been inspected. What should support investigate before changing correct HR data?</p>

<details class="qb-answer" id="q26-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The receiving profile disagrees with its correct source. Verify the linked records, inspect how the incoming field is mapped, and check whether the applicable import or update occurred and succeeded.</p>
<p>Those checks distinguish gaps without assuming which caused the discrepancy. Ownership tells you where the value should come from, not whether the latest value arrived.</p>
<p>Changing correct HR information would introduce another error. Investigate the boundary between the source and its intended representation.</p>
</div>
</details>

<a id="q27"></a>

### Q27. Incorrect authoritative record

<p class="qb-question"><strong>Question:</strong> The approved employee department is Sales. Workday, the HR system designated to control that field, records Finance. No approved correction or downstream follow-up is supplied. Where should the business-data correction be handled, and what would still need verification?</p>

<details class="qb-answer" id="q27-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Handle it through the authorized HR maintenance process because that system controls the department in this scenario.</p>
<p>After the source correction, verify the relevant import, mappings, and required destination results. Correcting the authoritative record does not prove every receiver was updated.</p>
<p>Locate the first record that disagrees with the approved business value. Here it is the source itself, which calls for a different investigation from a correct source with a stale receiver.</p>
</div>
</details>

<a id="q28"></a>

### Q28. The tempting direct edit

<p class="qb-question"><strong>Question:</strong> Maya’s department is externally controlled by Workday HR and represented in Okta. A receiving value appears stale. Editability and the later source-update behavior have not been checked. Why is a direct local edit not a durable general correction?</p>

<details class="qb-answer" id="q28-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Whether the field can be edited depends on its configuration. Even if a local edit is possible, a later source update may replace it while the original arrival problem remains.</p>
<p>Investigate the approved source value, relationship, mapping, and operation before choosing a correction. Seeing or editing data does not establish ownership.</p>
<p>A local workaround is not proof that the intended maintenance path is repaired. The durable result needs the correct value supplied through the appropriate process.</p>
</div>
</details>

## An Okta-managed contractor process

<a id="q29"></a>

### Q29. Explain Priya’s process

<p class="qb-question"><strong>Question:</strong> Priya is a contractor whose employee-import population is excluded. Her verified records have no Workday HR or Active Directory (AD) source associations, and her profile and department are Okta-managed. A sponsor approves her data and an authorized administrator records it. Why is Okta maintenance appropriate here?</p>

<details class="qb-answer" id="q29-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The supplied scope, associations, effective source, and approved process establish her Okta-managed maintenance model. Contractor as a label would not establish those mechanisms by itself.</p>
<p>The sponsor supplies the business approval, and the authorized administrator maintains the record in its designated system.</p>
<p>Application delivery still needs its own evidence afterward. The source model identifies where the central value belongs; it does not prove every connected account received it.</p>
</div>
</details>

<a id="q30"></a>

### Q30. Sponsor or technical source?

<p class="qb-question"><strong>Question:</strong> Priya’s profile is Okta-managed. Her sponsor approves a department value, and an authorized administrator records it in Okta. Is the sponsor another technical profile-source integration, and does approval imply the sponsor can edit Okta personally?</p>

<details class="qb-answer" id="q30-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The sponsor makes a business decision, not a software-source contribution through a connected integration. Their approval does not itself grant administrative permissions.</p>
<p>The authorized administrator maintains the approved information in the Okta-managed record.</p>
<p>Keep three roles distinct: who approves the information, who may perform the maintenance, and which system controls the field. That makes the process clear without inventing a technical association or permission.</p>
</div>
</details>

<a id="q31"></a>

### Q31. Contractor is not a mechanism

<p class="qb-question"><strong>Question:</strong> Priya is intended to remain an Okta-managed contractor outside employee imports. A colleague says “She is a contractor, so Workday cannot affect her,” without checking actual scope or associations. Why is the label alone an incomplete explanation?</p>

<details class="qb-answer" id="q31-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The population label does not enforce import selection or record linking. Actual scope and associations establish the intended technical separation.</p>
<p>If an imported record were mistakenly linked to Priya, the desired model would not explain all observed behavior. The relationship and its effects would need investigation.</p>
<p>Describe the mechanisms as well as the business category. An intended exclusion and a verified exclusion are different facts.</p>
</div>
</details>

<a id="q32"></a>

### Q32. An unexpected association

<p class="qb-question"><strong>Question:</strong> Priya should be Okta-managed and excluded from employee HR imports, but a new check finds an unexpected Workday association. The matching history and resulting field writes are unknown. Should support immediately reorder all profile sources?</p>

<details class="qb-answer" id="q32-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>First investigate the unexpected link: scope, matching or confirmation history, and its resulting effects on sourcing and values.</p>
<p>A global priority change does not explain why the wrong relationship arose or establish that it was repaired. It can also affect other associated users.</p>
<p>Keep the intended contractor model while obtaining the specific relationship evidence. The supported next step is investigation of the demonstrated association discrepancy, not an invented repair for every identity.</p>
</div>
</details>

<a id="q33"></a>

### Q33. Approval is not target delivery

<p class="qb-question"><strong>Question:</strong> Under an approved contractor process, Priya’s sponsor approves Sales and an authorized administrator records Sales in her Okta-managed profile. No application update or target-account read is supplied. Has every connected business application received Sales?</p>

<details class="qb-answer" id="q33-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The observations establish approval and central maintenance, not destination results.</p>
<p>Follow the relevant application mapping, account operation, and target record. Each application may require its own format for the same department meaning.</p>
<p>The profile can be correct while delivery remains unverified. Having an Okta-managed source changes where the input is maintained, not the need to inspect how it reaches the application.</p>
</div>
</details>

## Lifecycle, variations, and sign-in

<a id="q34"></a>

### Q34. Email and leaving

<p class="qb-question"><strong>Question:</strong> Workday employment events drive a company’s configured employee lifecycle processing, while Active Directory (AD) separately owns Maya’s work-email attribute. Does the email designation make AD responsible for her joining and departure actions?</p>

<details class="qb-answer" id="q34-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Attribute ownership and lifecycle configuration are separate decisions. Workday's employment events retain the stated role in this architecture.</p>
<p>The directory's responsibility for work email does not transfer authority over the full employee lifecycle. Inspect the actual lifecycle settings and results when investigating those actions.</p>
<p>Even a known source ranking does not prove accounts or sessions were disabled. Each required outcome still needs evidence from its relevant system.</p>
</div>
</details>

<a id="q35"></a>

### Q35. A different company

<p class="qb-question"><strong>Question:</strong> Company A uses Workday HR as its employee profile source with designated Active Directory (AD) field exceptions. Company B has no applicable Workday source and designates AD as the employee profile source, with department inheriting it. Can AD own department in B without contradicting A?</p>

<details class="qb-answer" id="q35-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Yes. The applicable sources and ownership settings differ. Company B's inherited department follows its AD-led profile decision, while Company A follows its Workday-led model.</p>
<p>An architecture conclusion is conditional on those relationships. It should not be carried from one company into another without checking them.</p>
<p>Name the actual source model before recommending maintenance. Neither design by itself proves that a particular update completed.</p>
</div>
</details>

<a id="q36"></a>

### Q36. A global fix for one field

<p class="qb-question"><strong>Question:</strong> Workday HR is Maya’s approved profile source, with Active Directory (AD) lower in the configured order. Her correct HR department appears stale in Okta. Both associations exist, but no ownership-change requirement is approved. Why is moving AD above Workday a poor quick fix?</p>

<details class="qb-answer" id="q36-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It changes which applicable source governs profiles and can affect many users. It is not simply a repair of one missing value update.</p>
<p>Investigate the current approved source's mapping and operation evidence. A correct source value that has not arrived calls for arrival checks before a different ownership decision is proposed.</p>
<p>Any source-order change needs its own business justification and scope. A stale receiving field does not supply that approval.</p>
</div>
</details>

<a id="q37"></a>

### Q37. Who checks the password?

<p class="qb-question"><strong>Question:</strong> Workday HR controls Maya’s employee profile. On her configured directory-password sign-in path, Okta asks Active Directory (AD) to validate credentials through an AD agent. Can these responsibilities coexist, and what is the agent’s role?</p>

<details class="qb-answer" id="q37-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Yes. Workday controls employee data, while AD checks the submitted credentials on that specified authentication path.</p>
<p>The AD agent is software in the company's environment connecting Okta with the directory for supported operations. Password validation does not make AD the owner of the HR department.</p>
<p>Separate the questions: who maintains the profile, who owns a particular attribute, and who checks identity proof for this sign-in. Each needs its own configuration and result evidence.</p>
</div>
</details>

<a id="q38"></a>

### Q38. One healthy path, another unknown

<p class="qb-question"><strong>Question:</strong> A company updates employee profile information through its HR-to-Okta connection and checks passwords on a separate Active Directory (AD) path. If one profile update succeeds, is password validation verified? If a password is accepted, is the latest department arrival verified?</p>

<details class="qb-answer" id="q38-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither result establishes the other. Data maintenance and credential validation ask different systems or operations to do different work.</p>
<p>The profile update establishes its checked data result. Password acceptance establishes the credential result for that attempt, not a fresh department update.</p>
<p>Name the operation beside each success. That preserves real progress while preventing a narrow observation from becoming a claim that the entire environment is healthy.</p>
</div>
</details>

## Investigate and explain

<a id="q39"></a>

### Q39. A value returns

<p class="qb-question"><strong>Question:</strong> An administrator changes an employee’s department in Okta and later sees the old value again. The source associations, field owner, and intervening write records have not been inspected. Is a later authoritative source overwrite proven?</p>

<details class="qb-answer" id="q39-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It is a possible explanation, not a supplied finding. The two visible values do not reconstruct which operations occurred between them.</p>
<p>Inspect the person's associations, the field's owner, and the relevant update timing and events before repeating the edit. Configuration explains the intended source; operation evidence explains actual writes.</p>
<p>Keep the hypothesis useful by naming the evidence that would support it. A likely story is not yet a verified cause.</p>
</div>
</details>

<a id="q40"></a>

### Q40. Put the investigation in order

<p class="qb-question"><strong>Question:</strong> Several systems can supply information to an Okta user profile. Support is investigating a department disagreement but has not yet established the person’s applicable sources, field owner, or update result. What sequence helps choose a justified correction?</p>

<details class="qb-answer" id="q40-explanation">
<summary>Read the teaching explanation</summary>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Identify the linked sources, determine the effective profile source, and check whether department inherits it or has an explicit owner. Then compare the approved value with the relevant observed records.</p>
<p>Obtain mapping and operation evidence at the demonstrated discrepancy. Ownership locates responsibility; actual results show what arrived or changed.</p>
<p>Leave missing outcomes unknown. That sequence guides the next useful action without assuming a cause or treating every user as part of one maintenance model.</p>
</div>
</details>

[Teaching explanations](answers/day-04.md) · [Day 4 lesson](../lessons/day-04-sources-and-ownership.md) · [Day 4 recap](../revision/day-04.md) · [Question bank](index.md)
