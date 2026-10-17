---
title: "Repository README"
nav_exclude: true
search_exclude: true
---

# Okta Theory Teaching

Follow the people, accounts, and decisions behind a workforce identity environment. Each lesson connects a business situation to the identity data, sign-in behavior, application access, and evidence that explain it.

**[Start at the course home](index.md)**

**[Read the course online](https://tedxharry.github.io/Okta_Theory_Teaching/)**

Start with [Day 1: People, identities, and access](lessons/day-01-people-identities-access.md).

Use the [learning path](learning-path.md) to see how the concepts connect. Product explanations use Okta Identity Engine; older Classic Engine terminology is distinguished where it matters. Attempt the exercises and assessments before reading their answers or recaps. The fictional case evidence supports reasoning practice; predictions and proposed changes are distinct from verified outcomes.

## Lessons

- [Day 1: People, identities, and access](lessons/day-01-people-identities-access.md)
- [Day 2: Following a request and reading evidence](lessons/day-02-requests-and-evidence.md)
- [Day 3: Profiles, attributes, and mappings](lessons/day-03-profiles-and-mappings.md)
- [Day 4: Sources, priority, and ownership](lessons/day-04-sources-and-ownership.md)
- [Day 5: Groups, rules, and application assignments](lessons/day-05-groups-and-assignments.md)
- [Day 6: AD imports and password validation](lessons/day-06-active-directory.md)
- [Day 7: Authenticators, enrollment, and MFA](lessons/day-07-authenticators-enrollment-mfa.md)
- [Day 8: SAML and application sign-in](lessons/day-08-saml.md)
- [Day 9: OIDC and the authorization code](lessons/day-09-oidc.md)
- [Day 10: SCIM and application accounts](lessons/day-10-scim.md)
- [Day 11: Imports, matching, and reconciliation](lessons/day-11-imports-and-matching.md)
- [Day 12: Joining, moving, and leaving](lessons/day-12-joiners-movers-leavers.md)
- [Day 13: Policies, sessions, and another authentication check](lessons/day-13-policies-and-sessions.md)
- [Day 14: Requirements, responsibility, and recovery](lessons/day-14-requirements-and-responsibilities.md)
- [Day 15: Investigate Northbridge as a connected system](lessons/day-15-integrated-case.md)

The optional [Day 16 practice bridge](lessons/day-16-safe-practice-plan.md) follows the 15-day core course. Its predictions and practice record are included in the lesson; you can complete the written plan without a tenant.

## Exercises and references

- [Day 1 reasoning exercises](exercises/day-01.md)
- [Day 1 self-check answers](self-checks/day-01.md)
- [Day 2 reasoning exercises](exercises/day-02.md)
- [Day 2 self-check answers](self-checks/day-02.md)
- [Day 3 reasoning exercises](exercises/day-03.md)
- [Day 3 self-check answers](self-checks/day-03.md)
- [Day 4 reasoning exercises](exercises/day-04.md)
- [Day 4 self-check answers](self-checks/day-04.md)
- [Day 5 reasoning exercises](exercises/day-05.md)
- [Day 5 self-check answers](self-checks/day-05.md)
- [Day 6 reasoning exercises](exercises/day-06.md)
- [Day 6 self-check answers](self-checks/day-06.md)
- [Day 7 reasoning exercises](exercises/day-07.md)
- [Day 7 self-check answers](self-checks/day-07.md)
- [Day 8 reasoning exercises](exercises/day-08.md)
- [Day 8 self-check answers](self-checks/day-08.md)
- [Day 9 reasoning exercises](exercises/day-09.md)
- [Day 9 self-check answers](self-checks/day-09.md)
- [Day 10 reasoning exercises](exercises/day-10.md)
- [Day 10 self-check answers](self-checks/day-10.md)
- [Day 11 reasoning exercises](exercises/day-11.md)
- [Day 11 self-check answers](self-checks/day-11.md)
- [Day 12 reasoning exercises](exercises/day-12.md)
- [Day 12 self-check answers](self-checks/day-12.md)
- [Day 13 reasoning exercises](exercises/day-13.md)
- [Day 13 self-check answers](self-checks/day-13.md)
- [Day 14 reasoning exercises](exercises/day-14.md)
- [Day 14 self-check answers](self-checks/day-14.md)
- [Day 15 final investigation tasks](exercises/day-15.md)
- [Day 15 model investigation](self-checks/day-15.md)
- [Final case evidence](assessments/final-case.md)
- [Final debrief and skills checklist](assessments/self-checks/final-case.md)
- [Integration checkpoint: Days 1 to 10](assessments/integration.md)
- [Integration checkpoint debrief and rubric](assessments/self-checks/integration.md)
- [Foundation checkpoint: Days 1 to 5](assessments/foundation.md)
- [Foundation checkpoint debrief and rubric](assessments/self-checks/foundation.md)
- [Northbridge's people and systems](reference/northbridge-company.md)
- [Course glossary](reference/glossary.md)
- [Northbridge's source and ownership reference](reference/attribute-ownership.md)
- [Your learning notebook](notebook/guide.md)
- [Optional extensions](reference/optional-extensions.md)

[Course home](index.md) · [Lesson index](lessons/index.md) · [Recaps](revision/index.md) · [Working through requests](requests/index.md)

[Course repository](https://github.com/TedxHarry/Okta_Theory_Teaching)

## Website maintenance

The published website uses the generated `docs/` directory on `main`. The original Markdown remains the editable source. Existing `.html` addresses and explicit question/explanation anchors are retained. `_config.yml` and `_includes/` preserve the previous Jekyll implementation; they are not used by the prebuilt website.

The shared reading interface provides a collapsible lesson menu, Lesson / Questions / Quizzes links, local search and full-size diagram viewing. All 669 original question explanations and 35 diagram placements remain available. There are 192 new multiple-choice questions: 12 for each core day and 12 for the optional Day 16. Quizzes include independent scenarios, 16 evidence packets and 32 reasoning prompts. Selection reveals a correct/incorrect result and explanations for every choice. Missed-only retry reshuffles those choices while retaining other answers. Answers are not stored or transmitted.

Use Node.js 22 or newer:

```sh
npm ci
npm run build
npm run check
npm test
npm run serve
```

Open `http://127.0.0.1:4173/Okta_Theory_Teaching/`. Browser checks use installed Chrome on Windows; other platforms need a Playwright Chromium installation or `BROWSER_EXECUTABLE`.

Edit lessons, exercises and reference Markdown in their existing locations. Quiz sources are `quizzes/day-NN.json`; each uses stable question/option IDs and a `correctId`. Every option requires an explanation. After changing a Mermaid diagram, run `npm run diagrams` before building. The builder verifies each diagram source against its rendered SVG manifest.

Commit source changes and regenerated `docs/` together, then push `main`. GitHub Pages serves `/docs` without a custom workflow. Reports and screenshots go to the ignored `test-results/` directory. Plain reading, original answers, quiz answer disclosures and navigation remain useful without JavaScript. Fonts and rendered SVGs are self-hosted.

