---
title: "Day 3 teaching explanations"
parent: "Day 3 practice bank"
grand_parent: "Revise, Test, and Learn"
nav_order: 1
---

# Day 3: Explanations

<details class="qb-answer" id="q01">
<summary>Q01. Name the detail</summary>
<p class="qb-question"><strong>Question:</strong> Daniel is an employee whose user profile stores named details about him. A selected field is <code>"department": "Finance"</code>. Which part names the attribute, which part is its value, and what does that observation establish?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Department is the attribute name, and Finance is its value in this record. An attribute is one named detail about the person; its value is what this particular record supplies.</p>
<p>Think of the question “Which department?” The field gives a place for the answer, and Finance supplies that answer here.</p>
<p>The observation is scoped to this profile. Another application's account is a separate record that needs its own check before you claim it has the same department.</p>
</div>
<p><a href="../day-03.md#q01">Return to Q01</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#start-with-one-piece-of-information">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q02">
<summary>Q02. An attribute and a profile</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s user profile contains first name Daniel, employee number NB-1020, and department Finance. How is the department attribute different from the profile as a whole, and why does the distinction help an investigation?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Department is one named piece of information. The profile is the collection of attributes, including the name, employee number, and department.</p>
<p>“The profile is correct” can hide which fields were actually inspected. A correct employee number does not prove that the department was checked too.</p>
<p>Name the representation and field: “Daniel's user profile contains department Finance.” That makes the observation easier to compare with other records and keeps unrelated fields outside the claim.</p>
</div>
<p><a href="../day-03.md#q02">Return to Q02</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#start-with-one-piece-of-information">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q03">
<summary>Q03. Active is not Finance</summary>
<p class="qb-question"><strong>Question:</strong> Okta is a company identity service holding Daniel’s user account and its profile data. Support reads account status Active but does not read department. Is “His account is Active, so his department is correct” supported?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Active is an account-state observation. Department is a separate profile attribute, and its correctness needs the approved value and actual field to be compared.</p>
<p>A user object can include information outside its profile, such as account status and an object identifier. Those are not department values.</p>
<p>Read the relevant field directly. Enabling an account would not establish that an inaccurate department was corrected or that a mapping used the right input.</p>
</div>
<p><a href="../day-03.md#q03">Return to Q03</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#start-with-one-piece-of-information">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q04">
<summary>Q04. Make the observation precise</summary>
<p class="qb-question"><strong>Question:</strong> Support checks employee Daniel’s central user profile in Okta, the company identity service, and reads department Finance. No application-specific profile or target account is inspected. Improve the note “Daniel looks right in Okta” without claiming more than was checked.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Try: “Daniel's central Okta user profile contains department Finance.” Include the relevant account identifier and check time if available.</p>
<p>That names the record, field, and observed value. The broader phrase looks right could accidentally include fields or other profiles nobody inspected.</p>
<p>An application-specific profile holds information prepared for an application, and its target account is another record. Both remain unverified here. Precision makes the next comparison possible without expanding the original finding.</p>
</div>
<p><a href="../day-03.md#q04">Return to Q04</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#start-with-one-piece-of-information">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q05">
<summary>Q05. Structure or stored value?</summary>
<p class="qb-question"><strong>Question:</strong> A user-profile system defines employeeNumber as a supported text field, then stores NB-1020 for Daniel. Which question concerns the schema: “Is employeeNumber a supported text field?” or “What employee number does Daniel have?”</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The first concerns the schema, which defines the fields and their constraints. The second concerns the value stored in Daniel's profile.</p>
<p>Think of a form's design and a filled-in form. The design specifies which answers can be recorded; the completed record supplies one person's answers.</p>
<p>Both matter. A suitable employee-number field does not establish that Daniel's value is present or accurate, while a readable value does not by itself establish every field constraint.</p>
</div>
<p><a href="../day-03.md#q05">Return to Q05</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#the-profile-describes-a-user-the-schema-describes-the-fields">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q06">
<summary>Q06. Adding a field</summary>
<p class="qb-question"><strong>Question:</strong> An administrator adds a supported custom department field to a user-profile schema, the definition of allowed fields and constraints. No source values or maintenance process have been supplied. Does adding the field give every user the correct department?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It makes a place for information, not the correct information itself. Each user's value still needs an applicable source or maintenance process.</p>
<p>Imagine adding a department column to an empty employee list. The heading organizes where the answer belongs, but it cannot tell you which department each person has.</p>
<p>Plan how the field will be populated and verify the resulting profiles. Schema readiness and accurate user data are different outcomes.</p>
</div>
<p><a href="../day-03.md#q06">Return to Q06</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#the-profile-describes-a-user-the-schema-describes-the-fields">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q07">
<summary>Q07. Readable but unacceptable</summary>
<p class="qb-question"><strong>Question:</strong> Projects is a fictional business application whose required departmentCode accepts only SAL for Sales, FIN for Finance, and IT for IT. Daniel belongs to Finance. Would the full text Finance be acceptable merely because a person can read it?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Finance carries the right business meaning, but it is not an accepted representation for this field. The intended Projects value is FIN.</p>
<p>A mapping can convert the source department into the destination's required code. That conversion should preserve meaning while meeting the application's field constraints.</p>
<p>Read the actual requirement, not just the text's readability. Sending the full name unchanged would miss the supplied contract even though Daniel's source department is correct.</p>
</div>
<p><a href="../day-03.md#q07">Return to Q07</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#the-profile-describes-a-user-the-schema-describes-the-fields">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q08">
<summary>Q08. A required field</summary>
<p class="qb-question"><strong>Question:</strong> Projects requires a departmentCode value for each account. The approved code for employee Daniel’s department has not been established, and his field has not been read. What does required tell you, and what does it leave unanswered?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Required is a constraint: the application expects a value in that field under its stated rules. It does not identify Daniel's legitimate department or show that a correct value was stored.</p>
<p>Obtain the approved input, accepted representation, and relevant resulting record. Filling the field with a guessed code can make it look complete while making it wrong.</p>
<p>The constraint helps define the investigation. It does not substitute for knowledge about the person.</p>
</div>
<p><a href="../day-03.md#q08">Return to Q08</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#the-profile-describes-a-user-the-schema-describes-the-fields">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q09">
<summary>Q09. Place the four records</summary>
<p class="qb-question"><strong>Question:</strong> Daniel has an employment record in Workday, his company’s HR system. Okta keeps his central user profile and information prepared specifically for his Projects assignment, called the Projects app user profile. Projects has its own account record. Where do those four records live?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The employment record lives in Workday. Both the central user profile and the Projects app user profile live in Okta. The actual account record lives inside Projects.</p>
<p>The easily missed point is the app user profile: app describes what the information is for, not where it is stored.</p>
<p>Keep these layers separate when following a department value. Correct prepared information in Okta does not by itself prove the separate application account received it.</p>
</div>
<p><a href="../day-03.md#q09">Return to Q09</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#there-is-an-okta-user-profile-and-an-application-user-profile">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q10">
<summary>Q10. Why prepare another profile?</summary>
<p class="qb-question"><strong>Question:</strong> Okta holds Daniel’s central department as Finance. Projects, a separate business application, expects departmentCode FIN. Why prepare an application-specific user profile in Okta instead of assuming the central profile is enough?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Different applications can need different field names and formats. The app user profile represents the information for this particular application assignment.</p>
<p>Here it prepares departmentCode FIN from the central Finance value. Another application could have different requirements without changing Daniel's department.</p>
<p>Preparation is not delivery. The configured account-management process must still send the intended information, obtain a result, and leave the correct value in the target account.</p>
</div>
<p><a href="../day-03.md#q10">Return to Q10</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#there-is-an-okta-user-profile-and-an-application-user-profile">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q11">
<summary>Q11. Prepared is not stored at the target</summary>
<p class="qb-question"><strong>Question:</strong> Daniel belongs to Finance, which Projects represents as FIN. His Projects app user profile—the application-specific information stored in Okta—contains FIN. No update response or account read inside Projects is supplied. Can support report that Projects stores FIN?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Report the prepared FIN value in Okta, not a verified Projects value. The target account is a separate record whose state has not been inspected.</p>
<p>Request the relevant operation result and the linked account in Projects. The value can be prepared correctly while delivery remains unfinished or unknown.</p>
<p>This distinction prevents stopping at the wrong layer. A profile named for an application does not mean it is the application's own stored record.</p>
</div>
<p><a href="../day-03.md#q11">Return to Q11</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#there-is-an-okta-user-profile-and-an-application-user-profile">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q12">
<summary>Q12. Do not infer account creation</summary>
<p class="qb-question"><strong>Question:</strong> Okta holds a Projects app user profile for Daniel’s assignment. This is information prepared in Okta for a separate business application. No account-create result or target record is supplied. Does its visibility prove Projects created Daniel’s account?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The visible app user profile establishes the prepared representation in Okta. It is not a receipt for creation inside Projects.</p>
<p>Inspect the relevant account-management operation and intended target record before claiming creation. Verify the association rather than selecting a similarly named account.</p>
<p>Preparing information, sending an operation, and storing an account are distinct observations. They can be connected by the design while still requiring their own result evidence.</p>
</div>
<p><a href="../day-03.md#q12">Return to Q12</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#there-is-an-okta-user-profile-and-an-application-user-profile">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q13">
<summary>Q13. Explain a mapping</summary>
<p class="qb-question"><strong>Question:</strong> Workday records Daniel’s department as Finance, Okta represents it in a central profile, and a separate Projects application requires the code FIN. How would you explain the attribute mappings between those fields without writing a formula?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>A mapping defines how information from a source field is represented in a destination field. It can copy a value or calculate another representation.</p>
<p>One relationship represents incoming Workday department in Okta. Another converts Okta's Finance into the Projects-specific FIN code prepared in Okta.</p>
<p>Name both sides. “The department mapping” could refer to either relationship. A mapping describes the rule, while the applicable import or update and target evidence establish what actually occurred.</p>
</div>
<p><a href="../day-03.md#q13">Return to Q13</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-mapping-connects-a-source-field-to-a-destination-field">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q14">
<summary>Q14. The rule and the fresh data</summary>
<p class="qb-question"><strong>Question:</strong> Workday is the company HR system and Okta holds its central user profiles. A mapping is configured to represent Workday department in Okta. No recent import result or destination read is supplied. Does the configured rule prove fresh information was retrieved?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The mapping defines the field relationship; it does not itself retrieve new information or prove an import completed.</p>
<p>An import brings source records or changes into processing. Check that applicable operation and the resulting user profile when freshness is the question.</p>
<p>Keep the rule and execution apart. Knowing how a value should be represented locates the next investigation, but it cannot establish that the latest input arrived.</p>
</div>
<p><a href="../day-03.md#q14">Return to Q14</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-mapping-connects-a-source-field-to-a-destination-field">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q15">
<summary>Q15. Name the destination</summary>
<p class="qb-question"><strong>Question:</strong> A diagram maps Daniel’s central Okta department to departmentCode in his Projects app user profile, which is held in Okta. The diagram does not show a target update. Improve “Okta department goes to Projects” so the destination is precise.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Say: “The central Okta department supplies departmentCode in the Projects-specific app user profile held in Okta.”</p>
<p>Then describe delivery to the account inside Projects as a separate configured operation that needs verification.</p>
<p>The extra detail prevents a calculation arrow from becoming an account-update claim. The prepared value and the application's stored value are different records, even though both concern the same person and application.</p>
</div>
<p><a href="../day-03.md#q15">Return to Q15</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-mapping-connects-a-source-field-to-a-destination-field">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q16">
<summary>Q16. App to Okta</summary>
<p class="qb-question"><strong>Question:</strong> In Okta’s mapping interface, an upstream HR integration supplies employee values toward the Okta user profile. Another connection prepares values for a downstream business application. Does the direction label App to Okta necessarily name the application the employee is trying to open?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. App in this interface can refer to an upstream source integration or directory as well as a business application.</p>
<p>App to Okta describes values coming from that connected integration toward the Okta user profile. Identify the actual connection and fields before interpreting the direction.</p>
<p>The label describes a relationship, not a universal application identity. Reading the wrong integration can leave the real discrepancy unexplained.</p>
</div>
<p><a href="../day-03.md#q16">Return to Q16</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#direction-changes-the-meaning">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q17">
<summary>Q17. Does the reverse exist?</summary>
<p class="qb-question"><strong>Question:</strong> A company maps an employee’s department from its Workday HR record into an Okta user profile. Only that incoming direction is supplied; no reverse operation is shown. Does it automatically define or authorize an Okta-to-Workday department update?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A rule in one direction does not automatically define its reverse or authorize a write back.</p>
<p>Inspect the reverse relationship, supported operations, and actual configuration if that action is being considered. Do not invent continuous two-way synchronization from one arrow.</p>
<p>The habit is simple: identify where this value comes from, where it is meant to go, and which operation uses the rule. Reverse movement needs its own agreement and evidence.</p>
</div>
<p><a href="../day-03.md#q17">Return to Q17</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#direction-changes-the-meaning">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q18">
<summary>Q18. Choose the relevant relationship</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s approved Finance department is correct in Workday and his central Okta profile. Projects expects FIN, but its application-specific profile held in Okta contains SAL. Which field relationship should support inspect first, before a cause is confirmed?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Inspect the outgoing central-Okta-to-Projects-app-profile mapping. The supplied discrepancy is between a correct central input and the wrong prepared code.</p>
<p>The incoming HR-to-Okta result already agrees with the approved department. Inspecting only that relationship would leave this boundary unexplained.</p>
<p>Read the actual outgoing rule and evaluate its input. This selects a focused investigation; it does not yet prove which configuration or processing condition caused the stored discrepancy.</p>
</div>
<p><a href="../day-03.md#q18">Return to Q18</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#direction-changes-the-meaning">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q19">
<summary>Q19. Mapping is not constant synchronization</summary>
<p class="qb-question"><strong>Question:</strong> A mapping correctly defines how an HR department becomes an application code. No fresh import, recalculation, update response, or target read is supplied. Does the correct rule prove every connected record always has the latest value?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A mapping defines representation, while supported operations and update settings determine when it is used. Actual results establish whether the current value arrived.</p>
<p>An existing account can still hold old information. Obtain the relevant source, calculation, stored app-profile, operation, and destination evidence as needed.</p>
<p>The configured rule is useful, but it cannot certify steps nobody observed. Continuous synchronization should not be assumed merely because the conversion is correct.</p>
</div>
<p><a href="../day-03.md#q19">Return to Q19</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#direction-changes-the-meaning">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q20">
<summary>Q20. Different text, same meaning</summary>
<p class="qb-question"><strong>Question:</strong> Workday, a company HR system, stores Daniel’s department as Finance. Projects stores FIN, and its approved code table defines FIN as Finance. Must one record be wrong because the text differs?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They can both be correct. The systems use different representations for the same business meaning under the supplied table.</p>
<p>Compare meaning and the destination's accepted format instead of requiring identical strings everywhere. Copying Finance into a field that accepts FIN could actually violate the application's requirement.</p>
<p>A useful comparison includes the rule explaining the code. Different text alone is not evidence that Daniel belongs to different departments.</p>
</div>
<p><a href="../day-03.md#q20">Return to Q20</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-correct-mapping-can-change-the-value">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q21">
<summary>Q21. Predict several outputs</summary>
<p class="qb-question"><strong>Question:</strong> Projects accepts SAL for Sales, FIN for Finance, and IT for IT. The company requires missing or unrecognized departments to be reviewed rather than assigned a guessed code. Predict each known output and explain whether this written requirement automatically creates a review ticket.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Sales should produce SAL, Finance FIN, and IT IT. Missing or unrecognized input needs the stated review handling rather than a guessed department.</p>
<p>A calculation formula does not automatically create a ticket just because the business requirement says review. That workflow needs its own defined mechanism and owner.</p>
<p>Test the shared conversion across supported inputs and its handling boundaries. A single good Finance output does not establish every case.</p>
</div>
<p><a href="../day-03.md#q21">Return to Q21</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-correct-mapping-can-change-the-value">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q22">
<summary>Q22. Transformation or delivery?</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s central department is Finance. Projects requires FIN, so a rule calculates FIN in an application-specific profile held in Okta. No target operation is shown. How does this transformation differ from delivering the code to Projects?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Transformation is the conversion from one representation to another: Finance becomes FIN according to the approved requirement.</p>
<p>Delivery is the configured operation that sends the prepared value to the application's account and obtains a result. The calculation can be right while that operation remains unverified.</p>
<p>Report both stages separately. What was calculated, what was sent, and what the target stored are related questions with different evidence.</p>
</div>
<p><a href="../day-03.md#q22">Return to Q22</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-correct-mapping-can-change-the-value">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q23">
<summary>Q23. Plain-language logic and expressions</summary>
<p class="qb-question"><strong>Question:</strong> An administrator writes the business requirement “If department is Finance, produce FIN; if an input is unknown, flag it for review.” Okta Expression Language is the syntax used for supported calculation formulas. Is this sentence executable code, and does it implement review automatically?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>It is plain-language logic, not ready-to-run Expression Language. It describes the intended conversion so people can agree on the outputs.</p>
<p>An expression needs the appropriate formula syntax. A review or notification process also requires separate implementation; the sentence does not create that action.</p>
<p>Agree on the business behavior first, then implement and verify the supported pieces. Understanding a requirement and deploying it are different outcomes.</p>
</div>
<p><a href="../day-03.md#q23">Return to Q23</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-correct-mapping-can-change-the-value">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q24">
<summary>Q24. Locate the demonstrated defect</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance. Workday is his HR system, Okta holds his central profile and a Projects-specific app user profile, and Projects keeps a separate target account. Projects requires FIN for Finance and SAL for Sales. Workday and central Okta say Finance; the outgoing rule always returns SAL; preview, app user profile, and target show SAL. Where is the first demonstrated wrong representation?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The outgoing rule produces SAL from Daniel's Finance input where FIN is required. The preview demonstrates that wrong calculation, and the prepared and target values contain the wrong code too.</p>
<p>That supports correcting the fixed-value rule against the approved conversion. The accurate upstream department should remain Finance.</p>
<p>The supplied snapshots establish a current mapping defect. They do not establish every historical operation that placed the value in the target.</p>
</div>
<p><a href="../day-03.md#q24">Return to Q24</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#find-the-first-wrong-representation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q25">
<summary>Q25. Is the display lying?</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance. Workday is his HR system, Okta holds his central profile and a Projects-specific app user profile, and Projects keeps a separate target account. Projects requires FIN for Finance and SAL for Sales. The outgoing rule produces SAL from Finance, and Projects stores SAL and displays Sales according to its code table. Is the display itself shown to be the bad conversion?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The display agrees with the stored code: SAL means Sales under the supplied table. The problem is that SAL is the wrong code for Daniel's approved Finance department.</p>
<p>Follow the value backward. The supplied outgoing rule already makes the wrong conversion before the application displays it.</p>
<p>Changing a visible label would miss that demonstrated defect. Prepare the intended code, verify delivery, and check the stored and displayed result afterward.</p>
</div>
<p><a href="../day-03.md#q25">Return to Q25</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#find-the-first-wrong-representation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q26">
<summary>Q26. Protect the correct source</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance. Workday is his HR system, Okta holds his central profile and a Projects-specific app user profile, and Projects keeps a separate target account. Projects requires FIN for Finance and SAL for Sales. The approved HR and central values are Finance, but a fixed outgoing rule always prepares SAL. Why would changing Workday to Sales be inappropriate?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Workday already records the correct business fact. Changing it to Sales would introduce a new error in the HR record rather than repair the faulty outgoing conversion.</p>
<p>The rule ignores the correct Finance input and returns SAL. Correct the relationship that conflicts with the requirement while preserving the legitimate department.</p>
<p>Making values agree is not enough if the agreement misrepresents the person. The correction needs to preserve meaning and satisfy the target's format.</p>
</div>
<p><a href="../day-03.md#q26">Return to Q26</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#find-the-first-wrong-representation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q27">
<summary>Q27. A snapshot and a history</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance. Workday is his HR system, Okta holds his central profile and a Projects-specific app user profile, and Projects keeps a separate target account. Projects requires FIN for Finance and SAL for Sales. A current fixed-SAL rule previews SAL; the stored app user profile and target also hold SAL. No historical update sequence is supplied. Does this prove exactly which write put SAL in Projects?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. It establishes the current calculation defect and observed values, not their complete history.</p>
<p>To identify the historical write, obtain the relevant operation evidence linked to Daniel's account and time. A plausible route through today's rule is not automatically a supplied past event.</p>
<p>You can still propose fixing the demonstrated rule. Keep that current finding separate from the unverified history so the recommendation does not claim more than the evidence.</p>
</div>
<p><a href="../day-03.md#q27">Return to Q27</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#find-the-first-wrong-representation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q28">
<summary>Q28. A shared rule</summary>
<p class="qb-question"><strong>Question:</strong> A shared Okta-to-application rule must convert Sales to SAL, Finance to FIN, and IT to IT; missing or unknown input needs review. Support proposes replacing a fixed-SAL rule after Daniel’s Finance case fails. Why check other users and inputs too?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The rule is shared, so its scope is wider than Daniel's account. A change that fixes Finance but breaks Sales or IT would not implement the full requirement.</p>
<p>Review the affected population, test each supported conversion and handling boundary, and plan how existing stored values receive the correction.</p>
<p>One person's ticket can reveal a shared defect. That does not make the correction private to that person or verify everyone else's resulting account.</p>
</div>
<p><a href="../day-03.md#q28">Return to Q28</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#find-the-first-wrong-representation">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q29">
<summary>Q29. What the preview proves</summary>
<p class="qb-question"><strong>Question:</strong> Projects requires FIN for Daniel’s Finance department. A proposed mapping is evaluated in a preview, which calculates an output for a selected input, and returns FIN. No saved configuration, stored-profile update, or target response is supplied. What has been demonstrated?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The evaluated rule calculates the expected code for that input. The preview is useful calculation evidence.</p>
<p>It does not establish that the rule was applied, an existing app user value changed, an update was sent, or Projects stored FIN.</p>
<p>Report the good preview while keeping the later stages unverified. Follow the applied configuration, prepared record, operation result, and intended destination before calling the account correction complete.</p>
</div>
<p><a href="../day-03.md#q29">Return to Q29</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-preview-is-a-calculation-not-delivery-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q30">
<summary>Q30. Order the checks</summary>
<p class="qb-question"><strong>Question:</strong> Okta prepares Daniel’s application-specific department code, and a configured update delivers it to a separate Projects account. Put these checks along the intended value journey: target read, mapping calculation, stored app user profile in Okta, account-update operation.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Start with the calculation, inspect the app user profile in Okta, follow the update operation, and read the target account afterward.</p>
<p>Each answers a different question: what the rule produces, what Okta holds for the assignment, what was attempted and accepted, and what Projects stores.</p>
<p>That is a way to organize evidence, not proof the process ran. Keep the records and operation linked to the same intended account when comparing them.</p>
</div>
<p><a href="../day-03.md#q30">Return to Q30</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-preview-is-a-calculation-not-delivery-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q31">
<summary>Q31. Correct preparation, old target</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance. Workday is his HR system, Okta holds his central profile and a Projects-specific app user profile, and Projects keeps a separate target account. Projects requires FIN for Finance and SAL for Sales. A preview calculates FIN and the stored app user profile holds FIN, but the linked Projects account still holds SAL. No update result is supplied. Which boundary remains unanswered?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Delivery from the prepared representation in Okta to the linked Projects account is unresolved. The supplied calculation and prepared value already meet the requirement.</p>
<p>Check whether the attribute update is supported and enabled, whether it was generated and sent, its actual value and response, and the account association.</p>
<p>Rewriting a correct conversion would not answer those questions. The observed target mismatch narrows the next investigation without proving a particular delivery failure.</p>
</div>
<p><a href="../day-03.md#q31">Return to Q31</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-preview-is-a-calculation-not-delivery-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q32">
<summary>Q32. Do not invent the connector failure</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance. Workday is his HR system, Okta holds his central profile and a Projects-specific app user profile, and Projects keeps a separate target account. Projects requires FIN for Finance and SAL for Sales. Preview and app user profile are FIN, while Projects holds SAL. No update request or rejection is supplied. Can support conclude “The connector rejected FIN”?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. A connector is the configured component used for the account operation, but this question supplies no rejection result from it or the target.</p>
<p>Obtain the relevant settings and update evidence. Disabled updates, an unattempted operation, or a recorded rejection would lead to different follow-up checks; none is selected here.</p>
<p>Describe the prepared/target discrepancy and missing operation result. A mismatch is evidence to investigate, not automatic proof of a particular component's failure.</p>
</div>
<p><a href="../day-03.md#q32">Return to Q32</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-preview-is-a-calculation-not-delivery-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q33">
<summary>Q33. Request useful evidence</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance. Workday is his HR system, Okta holds his central profile and a Projects-specific app user profile, and Projects keeps a separate target account. Projects requires FIN for Finance and SAL for Sales. The prepared code is FIN but the linked target account holds SAL, with no update result supplied. Which request is more useful: “Send screenshots” or “Show the value sent for Daniel’s linked account and the target’s reply”? Explain.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The second names the operation evidence needed at the unanswered boundary. It helps establish whether FIN was sent and how the receiver handled it.</p>
<p>Screenshots can be useful if they capture relevant facts, but the broad request leaves their purpose unclear.</p>
<p>Ask for evidence that distinguishes possible explanations rather than another unrelated profile view. A precise request identifies the account, value, and result that can change the investigation.</p>
</div>
<p><a href="../day-03.md#q33">Return to Q33</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-preview-is-a-calculation-not-delivery-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q34">
<summary>Q34. A request without its result</summary>
<p class="qb-question"><strong>Question:</strong> Daniel belongs to Finance, and Projects requires the code FIN. A recorded update sends FIN to his correctly linked Projects account, but no reply or later target read is supplied. Is successful delivery and storage verified?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>The evidence establishes an attempted update carrying the intended code. Acceptance and storage remain unverified.</p>
<p>Obtain the receiver's reply and the intended account's value after the operation. Sending FIN cannot decide whether the target accepted, rejected, or otherwise handled it.</p>
<p>Keep the attempt as meaningful progress without calling it a completed correction. The account-management result still needs evidence from the receiving side.</p>
</div>
<p><a href="../day-03.md#q34">Return to Q34</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#a-preview-is-a-calculation-not-delivery-evidence">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q35">
<summary>Q35. Recognize the complete follow-up</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance. Workday is his HR system, Okta holds his central profile and a Projects-specific app user profile, and Projects keeps a separate target account. Projects requires FIN for Finance and SAL for Sales. The saved rule evaluates Finance to FIN; the app user profile holds FIN; a linked update reports success sending FIN; a later target read shows FIN displayed as Finance. What can support conclude?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Together, the observations support the checked department correction for Daniel. They connect the rule's output with the prepared record, successful operation, and actual target value.</p>
<p>The later read matters because it confirms what Projects stores and displays, not just what Okta intended to send.</p>
<p>Keep the scope: Daniel's linked account at the checked point. Sign-in, permissions, and outcomes for other users would need their own evidence if they belong to the requirement.</p>
</div>
<p><a href="../day-03.md#q35">Return to Q35</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#recognize-a-verified-correction">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q36">
<summary>Q36. Daniel is not every user</summary>
<p class="qb-question"><strong>Question:</strong> A shared mapping serves several employees. For Daniel alone, support verifies the approved Finance-to-FIN calculation, stored app profile, successful target update, and later correct Projects read. Nobody else has been checked. Is “Every department is now correct for everyone” supported?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. The evidence verifies Daniel's account, not the entire population sharing the rule.</p>
<p>Other users need appropriately scoped checks, including their intended conversion and any existing values requiring updates. A correct rule does not itself demonstrate every stored target outcome.</p>
<p>Report the verified correction by person and account. Wider completion needs wider evidence, while Daniel's real success remains worth recognizing.</p>
</div>
<p><a href="../day-03.md#q36">Return to Q36</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#recognize-a-verified-correction">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q37">
<summary>Q37. Explain the correction to Daniel</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s approved department is Finance. Workday is his HR system, Okta holds his central profile and a Projects-specific app user profile, and Projects keeps a separate target account. Projects requires FIN for Finance and SAL for Sales. The saved conversion, app profile, accepted update, and later target read all confirm FIN for Daniel. Explain to him why Finance in HR and FIN in Projects can both be right, using only this verified evidence.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>You could say: “Your HR record uses the name Finance. Projects requires FIN to mean the same department. The corrected conversion prepares that code, and the update and account check confirm Projects now stores FIN and displays Finance.”</p>
<p>That explanation connects each representation to its purpose without requiring formula syntax.</p>
<p>The destination claim is supported because the question supplies the update and read. A preview alone would not justify telling Daniel the target had already changed.</p>
</div>
<p><a href="../day-03.md#q37">Return to Q37</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#recognize-a-verified-correction">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q38">
<summary>Q38. Empty, null, and omitted</summary>
<p class="qb-question"><strong>Question:</strong> A selected JSON excerpt of user data can show <code>"department": ""</code>, <code>"department": null</code>, or omit department entirely. JSON is a structured text format. How do those representations differ, and does omission from the excerpt prove an empty full source field?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>An empty string is text with no characters. Null is JSON's marker for no value in a present field. Omission means the selected excerpt does not show that field.</p>
<p>The full source may contain information left out of the excerpt. Inspect the relevant record before claiming its department is empty.</p>
<p>Also check how the integration handles the actual input. These representations are different, and their downstream effects should not be assumed identical.</p>
</div>
<p><a href="../day-03.md#q38">Return to Q38</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#missing-data-needs-a-decision">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q39">
<summary>Q39. Null or the word null?</summary>
<p class="qb-question"><strong>Question:</strong> Support compares two JSON user-profile fields: <code>"department": null</code> and <code>"department": "null"</code>. One has no quotes around null and one does. Are these the same input to a department conversion, and what should be inspected?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>They are different. Unquoted null is JSON's marker for no value. Quoted "null" is text containing that word.</p>
<p>A conversion might treat the text as an unrecognized department rather than as the same condition as JSON null. The actual behavior depends on its supported configuration.</p>
<p>Identify the representation first, then inspect the handling rule and result. Similar-looking text does not make the two values interchangeable.</p>
</div>
<p><a href="../day-03.md#q39">Return to Q39</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#missing-data-needs-a-decision">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q40">
<summary>Q40. Most people are in Sales</summary>
<p class="qb-question"><strong>Question:</strong> Projects requires a department code: SAL means Sales, FIN means Finance, and IT means IT. Daniel’s incoming department is missing. The company requires review for missing or unrecognized input. Should support default to SAL because most employees work in Sales?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>That would turn missing information into a claim that Daniel belongs to Sales. The supplied policy requires review instead of a guess.</p>
<p>Obtain the legitimate source value and agreed handling process. Population frequency cannot determine one person's department.</p>
<p>A guessed code might satisfy a required-field constraint while misrepresenting the employee. Resolve the unknown through the appropriate owner rather than make the record look complete at the expense of accuracy.</p>
</div>
<p><a href="../day-03.md#q40">Return to Q40</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#missing-data-needs-a-decision">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q41">
<summary>Q41. No automatic fallback</summary>
<p class="qb-question"><strong>Question:</strong> Okta prepares application values from a source department field. For one user the input is missing, but no source-substitution setting or target update behavior is supplied. Does that alone prove another source will be selected or an existing destination value will be cleared?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Neither outcome follows from the missing input alone. Source selection and target handling depend on the actual configuration and operation.</p>
<p>Inspect what the source contains, how the conversion treats that condition, and what any update sends and returns. An existing target value also needs its own read.</p>
<p>Keep the input observation separate from assumed consequences. Missing data identifies a question; it does not silently define a fallback or clearing action.</p>
</div>
<p><a href="../day-03.md#q41">Return to Q41</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#missing-data-needs-a-decision">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q42">
<summary>Q42. An unrecognized department</summary>
<p class="qb-question"><strong>Question:</strong> An employee’s approved department is Legal. Projects currently accepts SAL for Sales, FIN for Finance, and IT for IT, with no Legal conversion defined. Company policy requires review of unrecognized input. What decision is needed before providing a target code?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Legal has no supplied representation in this table. Confirm the legitimate input and obtain an agreed destination representation or handling process through the responsible owners.</p>
<p>Do not invent a Sales or Finance code. If the application requirement needs another accepted department, that change must be defined rather than guessed in the mapping.</p>
<p>The uncovered input is the demonstrated issue. It is not evidence that Legal means one of the existing codes.</p>
</div>
<p><a href="../day-03.md#q42">Return to Q42</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#missing-data-needs-a-decision">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q43">
<summary>Q43. How versus who</summary>
<p class="qb-question"><strong>Question:</strong> Workday controls Daniel’s approved HR department. A mapping represents that value in Okta, and another prepares Projects’ required department code. How does the decision about ownership differ from the rule about representation?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Ownership identifies which system is allowed to control the business value. A mapping defines where information goes and how it is represented.</p>
<p>Here Workday owns the department, while the mappings prepare its appropriate forms in Okta and for Projects. Those responsibilities are connected but answer different questions.</p>
<p>A valid conversion does not authorize changing correct HR data to hide a downstream error. First preserve the business fact, then investigate its representation and delivery.</p>
</div>
<p><a href="../day-03.md#q43">Return to Q43</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#mapping-and-ownership-answer-different-questions">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q44">
<summary>Q44. A correct expression and an old app profile</summary>
<p class="qb-question"><strong>Question:</strong> Daniel’s central Okta department is Finance, and Projects requires FIN. The correct expression applies only when its app user profile is created; an existing app user profile held in Okta still has SAL. What should support inspect before rewriting the expression?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>Inspect when the mapping applies and how existing prepared values are intended to receive the correction. A correct formula does not prove this existing record was recalculated.</p>
<p>Compare the supported behavior with the requirement, review other affected users, and plan the appropriate update process. Then verify both the app user profile and target account separately.</p>
<p>This discrepancy is already in the stored prepared value. A target-delivery check alone would not establish that the input to delivery was corrected.</p>
</div>
<p><a href="../day-03.md#q44">Return to Q44</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#read-when-a-mapping-applies">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q45">
<summary>Q45. Recalculate versus transmit</summary>
<p class="qb-question"><strong>Question:</strong> An Okta mapping calculates an app user field only at creation. A later profile update may send the full stored app user profile, including that field. Does creation-only guarantee the field is absent from every later request, and is transmitting it the same as recalculating it?</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>No. Creation-only concerns when the mapped value is calculated. Sending a stored field later is a different operation.</p>
<p>The supplied behavior allows the existing value to travel in a profile update without being freshly recalculated. Inspect both the stored value and the actual request when investigating what reached the application.</p>
<p>Do not infer omission merely from the mapping timing label. Calculation, stored representation, and transmission remain separate checks.</p>
</div>
<p><a href="../day-03.md#q45">Return to Q45</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#read-when-a-mapping-applies">Revisit the lesson</a></p>
</details>

<details class="qb-answer" id="q46">
<summary>Q46. Compare three independent mapping situations</summary>
<p class="qb-question"><strong>Question:</strong> For all three independent cases, Finance should become FIN in an app user profile held in Okta and then in the linked Projects account. A: the rule always produces SAL. B: preview and app user profile are FIN, target is SAL, and no update result is supplied. C: the expression is correct but creation-only, and an existing app user profile still holds SAL. Match each case to its next investigation.</p>
<div class="qb-explanation">
<p><strong>Explanation:</strong></p>
<p>For A, address the demonstrated wrong conversion against the approved FIN requirement. For B, inspect the delivery operation and target result because preparation is already correct. For C, inspect mapping timing and how existing prepared values should be recalculated.</p>
<p>Similar target symptoms can arise at different boundaries. Use the intermediate evidence to distinguish them.</p>
<p>One expression rewrite would not answer all three questions. Keep each case's current facts and missing result separate.</p>
</div>
<p><a href="../day-03.md#q46">Return to Q46</a> · <a href="../../lessons/day-03-profiles-and-mappings.md#read-when-a-mapping-applies">Revisit the lesson</a></p>
</details>

[All Day 3 questions](../day-03.md) · [Question bank](../index.md) · [Course home](../../index.md)
