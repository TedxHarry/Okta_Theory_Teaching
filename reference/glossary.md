---
title: "Course glossary"
parent: Reference
nav_order: 3
---

# Course glossary

Use these short reminders when a term interrupts your reading or you need to explain a result in your own words. Terms are grouped by the lesson that develops them; you do not need to memorize this page before starting the course. The linked lessons explain the relationships and limits.

Read a definition with its system, operation and evidence. A familiar word such as source, client, scope or active can describe different responsibilities in different contexts. Knowing the label helps you locate the question; it does not establish the answer for a ticket.

## Course context

| Term | Meaning |
|---|---|
| Okta organization / org / tenant | A separate Okta environment with its own users and configuration. |
| OIE | Okta Identity Engine, the engine used for this course's product explanations. |
| Evidence packet | A set of supplied case facts. An independent variation changes only the stated facts for that question. |

## People and access (Day 1)

| Term | Meaning |
|---|---|
| IAM | Identity and access management: managing identities and the access they should receive. |
| HR / sponsor | Human Resources, responsible for employee records / the employee confirming a contractor's business need. |
| Identity | A representation of who a person or software actor is. |
| Account | A record representing that actor within a particular system. |
| Directory | An organized store of identity information. |
| AD | Active Directory, the directory used in Northbridge's employee environment. |
| Universal Directory | Okta's directory layer for identity profiles and related data. |
| Group | A collection of users managed together; its access role is explained on Day 5. |
| Authentication | Checking who is signing in. |
| Credentials | Information used to establish identity during authentication, such as a password. |
| Authorization | Deciding what access or action is permitted. |
| SSO | Single sign-on: using a connected sign-in relationship across applications. |
| Federation | A configured trust relationship in which one system accepts validated identity information from another. |
| Provisioning | Managing accounts through operations such as creation and updates. |
| Deprovisioning | Removing or disabling access or accounts through the applicable process; not necessarily deletion. |
| Assignment | The Okta-side relationship granting a user an application; target account success is a separate fact. |
| Identifier | A value that distinguishes an object; an employee number and application username serve different contexts. |
| Application instance | A particular application environment or configured connection, rather than the product name alone. |

[Day 1 explanations](../lessons/day-01-people-identities-access.md)

## Messages and evidence (Day 2)

| Term | Meaning |
|---|---|
| Request / response | A message asking a server for something and that server's reply. |
| Client / server | Software making a request / the system receiving and handling it. A browser is one kind of client. |
| HTTP / HTTPS | Rules for web messages / HTTP carried over an encrypted connection. |
| URL | An address identifying a destination and resource; it can also contain query parameters. |
| DNS | The naming system used to look up a host's network address. |
| Method | The request's operation category, such as GET or POST. |
| Header / body | Message information / message content. |
| Redirect | A response directing the client to another location. |
| Status code | A response's numeric result for a particular request. |
| API | An interface through which software requests information or operations. |
| JSON | A structured text format containing named fields and values, objects, and lists. |
| System Log | Okta's event record; external systems have their own evidence. |
| Session | State associated with an ongoing interaction. |
| Cookie | Data stored by a browser and sent on matching requests; some cookies help identify sessions. |
| Hypothesis | A possible explanation to test against evidence. |

[Day 2 explanations](../lessons/day-02-requests-and-evidence.md)

## Data and ownership (Days 3 and 4)

| Term | Meaning |
|---|---|
| Attribute / value | A named detail / its content, such as department / Sales. |
| Profile / schema | A collection of a user's attributes / the definition of its fields and constraints. |
| App user profile | Application-specific user data represented inside Okta, separate from the target account. |
| Mapping | A defined relationship between source and destination fields. |
| Mapping preview | The calculated output for a selected input; separate evidence is needed for stored values and target delivery. |
| Transformation | A conversion of a value, such as Finance to FIN. |
| Expression | A formula used to calculate an output from inputs. |
| Profile source | The effective system controlling a user's profile. |
| Source association | The link between an Okta user and their record in a source integration. |
| Import scope | The set of records an integration is configured to include in import processing. |
| Source priority | The configured order of applicable profile sources. |
| Attribute source | The designated source for one field, which may differ from the profile source. |
| Import / matching | Bringing external records into Okta for processing / comparing records to identify a candidate association; comparison alone does not prove ownership. |
| Lifecycle | Changes as someone joins, changes responsibilities, and leaves. |

[Day 3 explanations](../lessons/day-03-profiles-and-mappings.md) · [Day 4 explanations](../lessons/day-04-sources-and-ownership.md)

Keep ownership, calculation and delivery separate. The source governs a value, the mapping prepares its representation, and operation evidence shows what reached the target. A correct preview is not a target-state result.

## From attributes to access (Day 5)

| Term | Meaning |
|---|---|
| Membership | The relationship that places a user in a group. |
| Group rule | A condition used to manage membership in designated groups. |
| AND / OR | Both conditions must hold / at least one condition must hold. |
| Boolean | A true-or-false value. |
| Group-based assignment | An application assignment supplied through group membership. |
| Direct assignment | An application assigned individually to a user. |
| Assignment source | The origin of an application assignment, such as a group; different from a profile source. |
| Group Push | A separate capability for maintaining groups and memberships in supported target applications. |
| workerType | Northbridge's custom text attribute describing Employee or Contractor classification. |

[Day 5 explanations](../lessons/day-05-groups-and-assignments.md) · [Course home](../index.md)

## Directory operations (Day 6)

| Term | Meaning |
|---|---|
| AD DS | Active Directory Domain Services, the directory service used for Northbridge's employee AD environment. |
| Domain | An AD directory and administration boundary. |
| Domain controller (DC) | A server running the directory service and supporting directory queries and credential validation. |
| Organizational unit (OU) | A container for organizing directory objects; not a group membership. |
| Okta AD agent | Integration software connecting Okta with AD for supported operations. |
| Delegated authentication | Asking another system to validate credentials; AD does so through the agent in this example. |
| Password synchronization | Propagating password changes through a configured, supported process. |
| UPN | User principal name: an AD sign-in name whose email-like form does not prove it is a mailbox address. |

[Day 6 explanations](../lessons/day-06-active-directory.md) · [Course home](../index.md)

## Authentication evidence (Day 7)

| Term | Meaning |
|---|---|
| Authenticator | A means of providing authentication evidence. |
| Authentication method | A particular way of authenticating, such as Push or TOTP. |
| Factor type | The kind of proof: knowledge, possession, or biometric. |
| MFA | Multifactor authentication: combining different factor types. |
| Enrollment | Registration associating an authenticator with a user's account. |
| Challenge | A request for proof during an authentication interaction. |
| TOTP | Time-based one-time password: a changing code generated by an authenticator. |
| FastPass | Passwordless cryptographic authentication through Okta Verify in a supported flow. |
| User verification | A check of the person using an authenticator, such as a supported biometric or device passcode check. |
| Phishing resistance | Protection against using authentication proof through an impostor site; method and flow support matter. |

[Day 7 explanations](../lessons/day-07-authenticators-enrollment-mfa.md) · [Course home](../index.md)

Enrollment makes an authentication method available to the account. Issuing a challenge asks for proof. An accepted response establishes the recorded authentication result. Neither an installed app nor an issued prompt substitutes for that accepted result, and several prompts do not necessarily mean several factor types.

## Federation (Day 8)

| Term | Meaning |
|---|---|
| SAML | Security Assertion Markup Language, a standard used for the federation exchange in Day 8. |
| IdP / SP | Identity provider issuing identity information / service provider validating it to decide application access. |
| Assertion | Statements about a subject and authentication, with conditions governing their use. |
| ACS | Assertion Consumer Service: the SP endpoint receiving the SAML response. |
| Endpoint | An address for a particular operation, such as receiving a SAML response or exchanging an authorization code. |
| Entity ID / audience | Participant identifier / the intended recipient identity expressed in assertion conditions. |
| NameID | A subject identifier interpreted under the application's configured identity-matching rule. |
| Metadata | Connection information such as identifiers, endpoints, and certificates. |
| XML | A text format using named, nested elements to structure information. |
| Digital signature | Cryptographic evidence verified against trusted signing information; different from encryption. |
| JIT provisioning | Supported, configured account creation or update during a sign-in journey. |

[Day 8 explanations](../lessons/day-08-saml.md) · [Course home](../index.md)

## Application sign-in (Day 9)

| Term | Meaning |
|---|---|
| OAuth 2.0 | A framework for authorizing access to protected resources, such as APIs. |
| OIDC | OpenID Connect: an identity layer on OAuth 2.0 defining user-authentication information and its validation. |
| Confidential client | An application able to protect its client credentials, such as Expense's server-side backend. |
| OIDC client | The application requesting and validating user-authentication information; Expense in Day 9. This protocol role differs from the browser's role as an HTTP client. |
| Client ID | Public identifier for the application's registration; not a credential. |
| Authorization code | Temporary, single-use value exchanged for tokens under the exchange requirements. |
| Callback / redirect URI | The application's registered location for receiving the browser's return. |
| ID token | Token the OIDC client validates for information about the user's authentication. |
| Access token | Token presented to its intended resource server for authorized access under that server's checks. |
| OAuth scope / claim | Requested access or information category / a named statement in returned information. |
| Resource server | The service, often an API, that checks an access token and the requested access. |
| Issuer / subject | The issuing authority / the identity within that issuer. Expense uses the validated issuer-and-subject pair to identify the user. |
| JWT | JSON Web Token: a format representing claims; decoding it does not establish validity. |
| State / nonce | Values connecting the returned browser response / ID token to the client's authentication transaction. |
| PKCE | Proof Key for Code Exchange: a verifier/challenge check tying code redemption to the initiating transaction. |

[Day 9 explanations](../lessons/day-09-oidc.md) · [Course home](../index.md)

In the server-side Expense example, the browser returns the authorization code and the backend exchanges it. The ID token, access token and application session have different jobs. State is checked on the returned browser response, PKCE at code exchange, and nonce in the ID token; passing one check does not replace the others. The PKCE code verifier is the transaction secret retained for exchange; the code challenge is the derived value sent earlier.

## Application account management (Day 10)

| Term | Meaning |
|---|---|
| SCIM | System for Cross-domain Identity Management: a standard for managing identity resources between systems. |
| Resource | An object managed through an interface, such as a user account. |
| Integration contract | Supported operations, expected fields, and behavior of a connection. |
| SCIM id | The service provider's identifier for a resource; distinct from a user name or Okta object ID. |
| Schema extension | An additional defined set of attributes, such as enterprise User department. |
| POST / PUT / PATCH | Create at the user collection / replace a resource's writable representation / apply selected changes, under the supported contract. |
| Deactivation | An account-state change; not automatically deletion or termination of every session. |
| 201 / 204 | Created / successful response with no content. Interpret alongside the operation. |
| 409 uniqueness | A reported uniqueness conflict; does not establish the conflicting account's owner. |
| 400 invalidValue | Rejection for a value incompatible with the operation or schema, or a missing required value; inspect the details. |

[Day 10 explanations](../lessons/day-10-scim.md) · [Course home](../index.md)

Name the protocol role as well as the product. Okta is the SCIM client for the Projects account-management exchange; Expense is the OIDC client for its sign-in. In the SCIM creation response, meta.resourceType names the resource type and meta.location gives its address. Neither replaces the provider's resource identifier or the association to the intended account.

## Record matching (Day 11)

| Term | Meaning |
|---|---|
| Discovery | Finding a record within the scope of a read or import operation. |
| Exact match | A record meeting the configured exact comparison; not independent proof that the data is correct. |
| Partial match | A candidate meeting configured weaker comparison criteria. |
| Confirmation | Acceptance of a proposed match or new-user outcome through the configured process. |
| Association | A link between records in an integration; profile-source effects depend on source settings. |
| Reconciliation | Comparing expected records and relationships with observed ones and investigating differences. |
| Pagination | Returning a result set in separate pages. |
| Cursor | A service-supplied position marker used to retrieve another page; not a page number to invent. |

[Day 11 explanations](../lessons/day-11-imports-and-matching.md) · [Course home](../index.md)

## Lifecycle changes (Day 12)

| Term | Meaning |
|---|---|
| JML | Joiner, mover, and leaver: access changes associated with starting work, changing responsibilities, and leaving. |
| Effective event | An approved business change that has taken effect; distinct from a future planned change. |
| Effective point | When an approved business change takes effect; separate from event receipt and downstream completion. |
| STAGED | Okta account state before activation begins or while administrative action is pending. |
| PROVISIONED | Okta Pending user action state; not proof that all target accounts exist. |
| SUSPENDED | Okta access is suspended while app assignments and group memberships remain. |
| DEPROVISIONED | Okta Deactivated state; distinct from deletion. |
| Deletion | Removal of the Okta user through a separate irreversible action. |
| Closure evidence | Observations establishing that the agreed outcome has been achieved in the affected systems. |

[Day 12 explanations](../lessons/day-12-joiners-movers-leavers.md) · [Course home](../index.md)

The other Okta states in Day 12 include ACTIVE, RECOVERY, PASSWORD_EXPIRED and LOCKED_OUT: an enabled account, password recovery, a required password update and a lockout condition. None proves the state of an application account or an existing application session. Always name the account and system being checked.

## Authentication decisions and sessions (Day 13)

| Term | Meaning |
|---|---|
| Global session policy | Requirements and limits governing the Okta session. |
| App sign-in policy / application authentication policy | Authentication requirements applied to access requests for its associated applications. |
| Authentication assurance | Confidence supported by the authentication evidence and its characteristics. |
| Reauthentication | Another authentication check required for an access request. |
| Freshness | Whether earlier authentication is recent enough under the applicable requirement. |
| Idle limit / maximum lifetime | Inactivity limit evaluated by the service / overall session-duration limit. |
| Local session | An application's own session, distinct from the Okta session. |
| Local logout | Termination of the application's session under its implementation. |
| SLO | Single Logout: coordinated logout across supported, configured participants. |
| Event correlation | Connecting related records using identity, targets, sequence, and available transaction/session identifiers. |
| Event / transaction | One recorded occurrence / a group of events belonging to an operation. A session can span several operations. |

[Day 13 explanations](../lessons/day-13-policies-and-sessions.md) · [Course home](../index.md)

For correlation, event uuid identifies an occurrence, transaction.id connects events within an operation, and authenticationContext.externalSessionId relates an Okta user session. authenticationContext.rootSessionId supplies related-session context when available. These are not the application's local session identifier. Keep a successful Okta action separate from the application's recorded outcome.

## Access decisions and responsibility (Day 14)

| Term | Meaning |
|---|---|
| Requirement / design | Approved outcome and constraints / the proposed means of achieving them. |
| Access model | How eligibility, exceptions, assignments, and target permissions connect. |
| Least privilege | Administrative permissions and scope limited to the defined responsibility. |
| Administrative scope | The resources or users covered by an administrator's permission. This differs from an OAuth scope and from an import's selected population. |
| Acceptance evidence | Observations demonstrating that an agreed requirement is satisfied. |
| Rollback | Restoring an earlier configuration; downstream consequences need separate verification. |
| Account recovery | Restoring authorized access through approved identity verification and supported recovery processes. |
| SWA | Secure Web Authentication: Okta's stored-credential sign-in method. |
| WS-Federation | A federation protocol used by the documented Office 365 integration's federated sign-in path. |
| Microsoft Entra ID | Microsoft's cloud identity service used with Microsoft 365. |

[Day 14 explanations](../lessons/day-14-requirements-and-responsibilities.md) · [Course home](../index.md)

Import scope selects a population to read. Administrative scope limits which resources or users an operator may manage. An OAuth scope names requested access or information. Similar wording does not make those controls interchangeable. Likewise, business approval does not itself grant administrative permission to implement a change.
