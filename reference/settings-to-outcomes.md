# Connect a setting to an observed outcome

A setting expresses intended behavior. A processing record shows what happened during an operation. The destination shows what became effective. A useful investigation connects all three without treating one as proof of the others.

Use this guide alongside [reading records and settings](../requests/reading-records-and-settings.md). It follows the conceptual responsibilities even when menu names or product capabilities change. Check the actual org, integration, enabled features and administrative scope before applying a procedure.

## Identity data, rules and assignment

| Configuration to inspect | Evidence to compare | Receiver or business requirement | Common mistaken conclusion |
| --- | --- | --- | --- |
| User source associations and attribute ownership | The intended user's actual associations and effective field values | The approved authority for that population and field | A globally first-listed source owns every person's fields |
| Profile mapping direction, transformation and application behavior | Authoritative input, evaluated output, stored app profile and outbound result | Correct target representation and update semantics | A preview updated the target |
| Group-rule condition and relevant exclusions | Current evaluated attributes and actual membership | Intended eligibility, including negative cases | A true-looking expression proves membership already changed |
| Group and direct app assignments | Actual object IDs and every applicable grant path | Approved app instance, population and exceptions | Removing one path removes all access |
| Provisioning capabilities and enabled operations | Actual create, update or deactivate request and target result | Supported operation and target lifecycle contract | Assignment guarantees automatic account creation and removal |

Consider a Sales employee whose effective attributes satisfy the approved rule. The user belongs to Group A, while the intended app is assigned only to similarly named Group B. That is an assignment relationship mismatch. Changing the correct department does not connect the two actual group objects. Confirm the approved assignment design before changing either relationship.

For ownership and rule details, revisit [Day 4](../lessons/day-04-sources-and-ownership.md) and [Day 5](../lessons/day-05-groups-and-assignments.md).

## Authentication requirements and continuing sessions

| Control | Runtime evidence | What it does not establish alone |
| --- | --- | --- |
| Authenticator availability and enrollment requirements | Actual user enrollment and relevant challenge result | Enrollment proves use in a later attempt |
| Global session policy | Applicable context and Okta-session processing | Every application's local session is valid |
| App authentication policy, associations and ordered rules | Selected rule, evaluated context and accepted authentication evidence | A policy name proves which rule ran |
| App session settings and supported logout mechanism | Creation, subsequent use and confirmed termination at the relevant system | Provider logout proves every target session ended |

An acceptable Okta session can coexist with an additional app authentication requirement. To explain a prompt, identify the actual selected rule and compare the accepted evidence with its requirement. Do not weaken a shared policy merely because a second prompt feels unexpected. Check other app associations before changing shared rules. Okta documents the distinct policy responsibilities in [policies and rules](https://help.okta.com/oie/en-us/content/topics/identity-engine/policies/about-policies.htm).

## Federation settings become different protocol fields

| Setting or agreement | Observe in the actual exchange | Receiving requirement |
| --- | --- | --- |
| SAML Single sign-on URL | Browser POST target and configured Destination/Recipient behavior | Approved ACS for the environment |
| SAML Audience URI | Assertion Audience | Intended SP identifier |
| SAML application username and Name ID format | Emitted NameID value and format | Agreed unique account interpretation |
| SAML required signing and trusted provider key | Verified protection scope and actual consumed object | Expected issuer/key trust and required coverage |
| OIDC registered redirect URI | Authorization request and actual callback | Approved client return endpoint |
| OIDC client registration and provider agreement | Code exchange and verified issuer/audience claims | Correct client, issuer and supported flow |

Okta's Single sign-on URL is the default SAML ACS, and the default checkbox shares it with Recipient and Destination. Supported advanced configurations can differ. Check actual emitted values rather than assuming one field label describes every flow. See the [Okta SAML field reference](https://help.okta.com/oie/en-us/content/topics/apps/aiw-saml-reference.htm).

The SAML IdP SSO endpoint receives a request at the provider. The app's ACS receives the return through the browser. For OIDC, the app callback and provider token endpoint likewise belong to different sides. A URL's appearance does not make those roles interchangeable. Follow the corresponding [SAML](../lessons/day-08-saml.md#the-two-sides-need-agreed-configuration) or [OIDC](../lessons/day-09-oidc.md#read-the-registration-as-an-agreement) agreement.

## Use a four-column change record

| Intended requirement | Current effective state | Authorized correction | Verification still needed |
| --- | --- | --- | --- |
| Projects receives FIN for Finance employees | Source and app profile are correct; target result is absent | No mapping change justified yet; inspect the actual operation | Correlated completion and target read |
| Reader can view projects but cannot administer | Sign-in and viewing work; administration is denied | No defect demonstrated | Keep this expected denial in regression tests |

Your next action should resolve the evidenced gap. A setting's presence, a successful upstream event and a proposed repair should never be written as a verified target outcome. Apply this structure to [application onboarding](onboarding-an-application.md) and the [Day 14 requirement record](../lessons/day-14-requirements-and-responsibilities.md#record-the-decision-clearly).
