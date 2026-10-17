---
{
  "version": "alpha",
  "name": "Okta Theory Teaching",
  "description": "A reading and practice guide to workforce identity with Okta.",
  "colors": {
    "primary": "#245bc4", "primary-soft": "#eef4ff",
    "accent": "#14746f", "accent-soft": "#edf8f5",
    "practice": "#6b43a6", "practice-soft": "#f4effc",
    "error": "#a92f36", "error-soft": "#fff5f5",
    "ink": "#14263d", "muted": "#53667d", "background": "#f6f9fc", "surface": "#ffffff"
  },
  "typography": {
    "sans": { "fontFamily": "Manrope, system-ui, sans-serif" },
    "serif": { "fontFamily": "'Source Serif 4', Georgia, serif" },
    "mono": { "fontFamily": "Consolas, ui-monospace, monospace" }
  },
  "rounded": { "DEFAULT": "0.75rem", "sm": "0.375rem", "lg": "1.25rem" },
  "spacing": { "section-gap": "3rem", "page-max": "90rem" },
  "components": { "button": {}, "card": {}, "dialog": {}, "navigation": {}, "disclosure": {} }
}
---

# Okta Theory Teaching Design System

## Overview

### Creative North Star

A quiet workforce identity field guide following Northbridge's people, records, sign-in and access decisions. The reading shell matches the SAML course's blue lesson hierarchy, violet practice hierarchy and teal explanations. Lesson numbers represent the actual teaching sequence: 15 core days and an optional practice bridge.

### Product context and register

English educational content for beginners developing practical engineering judgment. The existing README, learning path and day resources supply the audience, sequence and independent question behavior. This is a content site with local search and reading utilities, no accounts, analytics, paid access or backend mutations. No geographic market is assumed. Desktop supports sustained reading; mobile preserves every lesson and action.

The signature is the consistent Lesson / Questions / Quizzes navigation above the reading surface and the collapsible numbered lesson menu. Avoid dashboard metrics, promotional gradients, animated decoration and dense marketing cards. One shared shell serves every page. DESIGN.md frontmatter generates docs/assets/tokens.css through scripts/build.mjs; site/style.css consumes those variables. Do not maintain a second token source.

## Colors

Cool paper and white surfaces keep long prose in dark blue ink. Blue marks lesson sections, tables and technical fields; teal marks supporting explanations and diagram captions; violet marks practice questions and quizzes. Their soft companion surfaces separate those roles without coloring whole pages. Teal and rose distinguish correct and incorrect quiz results, always accompanied by explicit written feedback. Do not use random colors for individual questions, infer warnings from arbitrary text, or recolor the protocol participants in existing diagrams.

The frontmatter colors generate identically named CSS custom properties through scripts/build.mjs. Shared prose, reading navigation, tables, disclosures and quiz styles consume these properties. Borders derive from ink with color-mix. Focus uses primary with a visible outline. Forced colors preserve system colors. There is one light theme; no incomplete theme toggle.

## Typography

Self-hosted Manrope for headings, navigation and controls; Source Serif 4 for long reading; Consolas fallback for code. Body prose is 19px with 1.8 line height and a centered, bounded reading measure. Headings have shorter line height. Local font licenses are retained under site/fonts. Avoid all-uppercase prose and aggressive letter spacing.

## Layout

Desktop uses a collapsible 260px lesson sidebar, reduced to a 72px navigation rail when closed, and one centered reading column up to 60rem wide. There is no right-hand section outline. The native lesson disclosure remains keyboard accessible at every width. Below 800px the menu sits above the document and defaults closed. Desktop and mobile menu preferences are stored separately and restored across page navigation when browser storage is available. The document owns vertical scrolling. Tables and long code have their own labeled horizontal regions. Diagrams have bounded reading previews and a native modal full-size view. The generated HTML works under the /Okta_Theory_Teaching/ project path.

## Elevation & Depth

Use tonal differences and thin borders. Reserve a soft shadow for the expanded diagram dialog. Keep the reading page flat and quiet.

## Shapes

Use the frontmatter radius tokens. Course rows share a modest rounded edge and generous hit area. Do not turn every paragraph into a card.

## Components

### Foundational visual states

Links and buttons expose hover and visible keyboard focus. Current navigation uses text and aria-current as well as color. No user data is submitted. Search has initial, results, no-results and clear states. Its complete local index is embedded in the page, so results do not depend on remote requests.

### Buttons and actions

Use descriptive text such as Open full diagram, Close diagram and Clear search. No misleading progress, fake certificates or completion scoring.

### Navigation and data display

Course, lesson, questions and reference links use actual paths, with previous/next lesson links. Heading anchors use github-slugger and are checked against generated HTML. Keep essential teaching content intact, including original explicit question anchors. A question page allows multiple native details elements to remain open.

Every lesson has three sibling navigation links: Lesson, Questions and Quizzes. Quiz pages use native fieldsets, legends and radio inputs, with full-width option labels and visible keyboard focus. Each question supplies its own scenario. Shuffle options on every visit while grading by stable IDs. Feedback appears directly below that question, states correct or incorrect in words, names the correct answer and explains the selection. A disclosure explains every option. Allow answer changes without affecting other questions. The answered count measures exploration, with no pass/fail claim. Do not save attempts or send answers to a service. Native answer disclosures provide a useful no-JavaScript fallback.

Evidence packets use wrapped monospace text on the blue information surface. Optional reasoning prompts use the violet practice surface and ask for an explanation before selection without collecting private notes. Retry resets only currently incorrect questions, changes their displayed option order, preserves other answers and moves focus to the first reset question. Study links below lesson material retain the existing day exercises, separate self-checks and recaps, alongside checkpoints and the final case. All original course resources remain available through ordinary navigation and search without JavaScript.

### Forms and overlays

Search is a labeled local search input with an explicit clear button and polite result count. No form submission is needed. The native diagram dialog handles focus containment, Escape and focus restoration; its title and close action remain visible. Search terms are restored from the URL. Rendering all static results without filtering remains useful with JavaScript disabled.

### Iconography

Use small text arrows and CSS connection dots only. Controls have visible text labels.

### Motion

No decorative animation. Respect reduced motion and avoid smooth scrolling in that mode.

### Content and data visualization

Publish the existing course Markdown with its original teaching content and links. Render Mermaid as local SVG images with figure descriptions and matching nearby prose. Full-size diagrams can scroll; the preview is not the only view. Keep XML escaped and readable.

## Do's and Don'ts

- Do preserve complete explanations, technical caveats and independent question context.
- Do reuse the shared shell and keep navigation consistent.
- Do not require JavaScript for lessons, answers or ordinary navigation.
- Do not expose private research, local paths or working files in the repository.

## Course preservation

All original course routes keep their .html addresses and explicit question anchors. The 15-day core and optional Day 16 retain their existing narrative, exercises, self-checks, checkpoints, revision pages, requests and reference material. Lesson / Questions / Quizzes are the shared sibling navigation. Supporting day resources remain directly linked. Quizzes are independent of the narrative and do not require remembered facts about its characters. Build output in docs/ is the published site.
