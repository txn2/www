---
version: alpha
spec: https://github.com/google-labs-code/design.md
name: txn2
description: Visual identity for txn2.com and reference for any sibling site that wants to adopt the same look. The aesthetic is a dark engineering field-notebook, not a marketing page.

colors:
  ink:        "#0B0B09"
  ink-2:      "#131310"
  ink-3:      "#1B1A15"
  rule:       "#2A2922"
  rule-2:     "#3A3830"
  paper:      "#ECE3CE"
  paper-dim:  "#C9C0AB"
  mute:       "#968F80"
  mute-2:     "#5A554B"
  signal:     "#FF5A1F"
  signal-2:   "#FF8A4C"
  acid:       "#E1FF6E"
  cool:       "#6FE1FF"

typography:
  serif:
    fontFamily: "Fraunces, 'Times New Roman', serif"
    weights:    [300, 400, 700]
    italic:     true
    use:        "display, hero, section titles, drop caps, italic emphasis"
  sans:
    fontFamily: "'Instrument Sans', -apple-system, 'Helvetica Neue', sans-serif"
    weights:    [400, 700]
    use:        "body, lede, lists, footer text"
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    weights:    [400, 700]
    use:        "rail, ID stamps, labels, terminal, ticker, footer mono"
  google-fonts: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Instrument+Sans:wght@400..700&family=JetBrains+Mono:wght@400..700&display=swap"

spacing:
  measure: "64ch"
  gutter:  "clamp(20px, 4vw, 64px)"
  rail-h:  "56px"

rounded:
  sm: "2px"
  md: "4px"

shadow:
  terminal: "0 12px 36px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.02)"

components:
  btn-primary:
    fontFamily:     "{typography.mono}"
    fontSize:       "12px"
    textTransform:  "uppercase"
    letterSpacing:  "0.1em"
    color:          "{colors.paper}"
    background:     "transparent"
    border:         "1px solid {colors.rule-2}"
    rounded:        "{rounded.sm}"
    padding:        "12px 20px"
    on-hover:       "background -> paper, color -> ink"
  btn-accent:
    background:     "{colors.signal}"
    color:          "{colors.ink}"
    border:         "1px solid {colors.signal}"
    rounded:        "{rounded.sm}"
  card:
    background:     "{colors.ink-2}"
    border:         "1px solid {colors.rule}"
    rounded:        "0"
    shadow:         "none"
    accent:         "1px signal-orange line on top, animates from 56px to 100% on hover"
---

## Overview

txn2.com is the canonical visual identity for the txn2 organization's open source components. The aesthetic is dark, technical, editorial: a warm-black canvas with a single signal-orange accent, an italic serif display paired with a refined sans body and a monospace label voice, framed by a low-opacity engineering blueprint grid and corner crosshairs. It should read as an engineering field-notebook, not a marketing site.

Three commitments shape every decision:

1. Restraint with the accent. Signal orange (`#FF5A1F`) is the only saturated colour. It marks state, focus, primary CTA, and one detail per surface. Never a background, never large fills.
2. Type as the main visual element. Fraunces italic at display sizes carries the page; everything else is quiet so the type can speak.
3. Information density without clutter. Section indices, ID stamps, monospace metadata, blueprint grid, ticker, and the technical-journal voice carry density without ornament.

This file is the canonical source. The W3C DTCG-compliant sidecar is `tokens.json` at the repo root.

## Colors

The palette is a single warm-dark scale plus one signal accent and two reserve accents.

| Token       | Hex        | Use |
|-------------|------------|-----|
| `ink`       | `#0B0B09`  | Page canvas. Body background. Selection text. |
| `ink-2`     | `#131310`  | Card surface, body gradient endpoint. |
| `ink-3`     | `#1B1A15`  | Mermaid background, schema panels, hover gradients. |
| `rule`      | `#2A2922`  | Subtle borders, dashed dividers. |
| `rule-2`    | `#3A3830`  | Stronger borders, button outlines. |
| `paper`     | `#ECE3CE`  | Body text. Selection background. Outline-stroke colour for the hero. |
| `paper-dim` | `#C9C0AB`  | Secondary body text. |
| `mute`      | `#968F80`  | Muted text, mono labels. WCAG AA on `ink` at small sizes (5.79:1). |
| `mute-2`    | `#5A554B`  | Crosshair lines, footer base, dot separators. |
| `signal`    | `#FF5A1F`  | The one accent. Focus ring, primary CTA, links on hover, version stamp, drop cap, terminal prompt `$`. |
| `signal-2`  | `#FF8A4C`  | Hover state for `signal`. |
| `acid`      | `#E1FF6E`  | Terminal success ticks only. Never UI chrome. |
| `cool`      | `#6FE1FF`  | Reserved. Currently unused. |

Rules:

- Body copy is `paper` on `ink`. Secondary copy is `paper-dim`. Muted metadata is `mute`. Anything below `mute` reads as decorative; do not put real information there.
- Never put `paper-dim` text under 14px. Drop to `mute` instead, which is calibrated for small-text contrast.
- The signal orange is sparing. If a surface has more than one orange element above the fold, drop one.
- Selection inverts: `signal` background, `ink` text.

## Typography

Three families, no exceptions.

- **Fraunces** (Google Fonts variable, `opsz 9..144`, `wght 300..700`, italic + roman). Display only. Always italic at display sizes; the page identity depends on it. The `SOFT` axis was dropped to cut payload.
- **Instrument Sans** (Google Fonts, weights `400..700`, roman only). Body, leds, lists, footer text. No italic axis loaded.
- **JetBrains Mono** (Google Fonts, weights `400..700`, roman only). Rail, ID stamps, labels, terminal demos, ticker, footer mono. No italic axis loaded.

The single `<link>` request:

```
https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Instrument+Sans:wght@400..700&family=JetBrains+Mono:wght@400..700&display=swap
```

Type scale (verified in the live site):

| Role            | Family   | Weight | Size                              | Notes |
|-----------------|----------|--------|-----------------------------------|-------|
| Hero display    | Fraunces | 300    | `clamp(60px, 12.5vw, 220px)`      | italic, `opsz 144`, `letter-spacing -0.04em`, `line-height 0.92` |
| Section title   | Fraunces | 300    | `clamp(36px, 5.5vw, 76px)`        | `letter-spacing -0.025em`, `line-height 1.0` |
| Coda statement  | Fraunces | 300    | `clamp(28px, 3.6vw, 52px)`        | `letter-spacing -0.02em` |
| Card name       | Fraunces | 300    | `clamp(48px, 5vw, 80px)`          | `line-height 0.95`, `opsz 144` |
| Stack row name  | Fraunces | 400    | `clamp(24px, 2.5vw, 34px)`        | italic |
| Body            | Instrument Sans | 400 | `17px`                          | `line-height 1.55` |
| Lede            | Instrument Sans | 400 | `clamp(15px, 1.1vw, 18px)`      | `line-height 1.6` |
| Mono label      | JetBrains Mono  | 700 | `11px`                          | `letter-spacing 0.18em`, uppercase |
| Mono body       | JetBrains Mono  | 400 | `13px`                          | `letter-spacing 0.04em` |
| Terminal body   | JetBrains Mono  | 400 | `12.5px`                        | `line-height 1.7` |

Class anchors (grep `static/css/site.css`): `.hero__display`, `.section__title`, `.coda__big`, `.flagship__name`, `.stack__name`, `.hero__lede`, `.section__index`, `.terminal__body`.

## Layout

Single column, asymmetric. Max content width is 1500px, centred. The page sits on the global blueprint and is broken up by sticky rail at the top and a five-column footer at the bottom.

Responsive breakpoints (every one earns its keep):

| `max-width` | Effect |
|-------------|--------|
| 1180px      | Footer collapses to 3 columns. |
| 1080px      | Rail meta strip hides. Footer 3 cols. MCP grid stacks. |
| 880px       | Earlier breakpoint for some flagship grids. |
| 720px       | Rail subtitle and separator hide. Footer 2 cols. |
| 540px       | Rail compresses (smaller name, tighter nav). |
| 480px       | Mermaid hides (ASCII fallback would, but we use mermaid only). Footer 1 col. |
| 380px       | Rail nav links collapse, only the GitHub CTA remains. |

Hero rows are deliberately offset to break the grid:

- Row 1 left aligned (`txn2`).
- Row 2 indented `clamp(40px, 14vw, 240px)` (`open source`).
- Row 3 indented `clamp(20px, 6vw, 100px)` (`components.`).

The page gutter is `clamp(20px, 4vw, 64px)`. The blueprint grid pitch is `64px`.

## Elevation and Depth

There are no card shadows. This is a deliberate rule: depth comes from grain, vignette, and faint border colour shifts, not from drop shadows.

The only shadow token in use is `shadow.terminal`:

```
box-shadow:
  0 12px 36px rgba(0,0,0,0.4),
  inset 0 0 0 1px rgba(255,255,255,0.02);
```

It belongs to `.terminal` only. Cards, buttons, footers, hero do not get shadows.

Two atmospheric overlays are fixed at `z-index: 100` and stay above content but receive `pointer-events: none`:

- **`.grain`** uses an inline SVG filter (`feTurbulence baseFrequency=0.9`, `numOctaves=3`, `stitchTiles=stitch`) at `opacity: 0.08` and `mix-blend-mode: overlay`. It warms the canvas and breaks banding.
- **`.vignette`** uses `radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%)`. Burns the corners.

These two are non-negotiable signatures of the look.

## Shapes

Corners are 2px or 4px, never rounder. The terminal is the only block at 4px.

Borders come in three flavours and one weight:

- `1px solid var(--rule)` for subtle dividers and card outlines.
- `1px dashed var(--rule)` for card-foot separators and feature schema panels.
- `1px solid var(--signal)` for the focus ring and the top accent line on flagship cards.

The blueprint grid is `1px` lines on a `64px` pitch in `rgba(236,227,206,0.04)`, masked top and bottom so it fades into the page. Corner crosshairs are 28px (and 24px from the page edge), in `--mute-2`. Both belong to the global page wrapper, not to any single component.

```html
<div class="blueprint" aria-hidden="true">
  <div class="blueprint__grid"></div>
  <div class="blueprint__crosshair blueprint__crosshair--tl"><span></span><span></span></div>
  <div class="blueprint__crosshair blueprint__crosshair--tr"><span></span><span></span></div>
  <div class="blueprint__crosshair blueprint__crosshair--bl"><span></span><span></span></div>
  <div class="blueprint__crosshair blueprint__crosshair--br"><span></span><span></span></div>
</div>
```

## Components

Each entry below names the canonical class, lists its key tokens, and gives one do / don't pair. Full CSS lives in `static/css/site.css`.

### `.rail` (sticky top nav)

Sticky header. Three-column grid (`brand | meta | nav`), backdrop-blur, monospace, lowercase, 12px.

- **Background** `rgba(11,11,9,0.72)` with `backdrop-filter: blur(14px) saturate(140%)`.
- **Brand** `◐` mark (signal orange, slow spin) + Fraunces italic 22px name + middle-dot separator + paper-dim subtitle.
- **Meta** centre slot: release stamp, dot, UTC clock, dot, location.
- **Nav** lowercase mono links, ending with a `.rail__cta` solid signal CTA.

Do: keep the meta strip ornamental. Hide it below 1080px.
Don't: add more than four nav items. The rail is not a sitemap.

### `.hero` (three-row Fraunces display)

Three rows with hand-tuned indents. Italic outer rows, outline (`-webkit-text-stroke`) middle row.

```html
<h1 class="hero__display">
  <span class="hero__row hero__row--1"><em class="serif">txn2</em></span>
  <span class="hero__row hero__row--2"><span class="outline">open source</span></span>
  <span class="hero__row hero__row--3"><em class="serif">components.</em></span>
</h1>
```

Do: keep the indent asymmetry. The hero is the anchor of the page.
Don't: centre the hero. The page is left-aligned and asymmetric on purpose.

This indent-asymmetry variant is reserved for the txn2.com org landing. Every project site (kubefwd, txeh, mcp-s3, mcp-trino, mcp-datahub, mcp-data-platform) uses the `.hero__main` variant below instead.

### `.hero__main` and `.hero__mark` (project symbol + display)

Project sites pair the typographic display with a square geometric symbol mark on its left. `.hero__main` is a flex container; `.hero__mark` holds the inline SVG glyph; `.hero__display` retains the three-row Fraunces stack but drops the asymmetric indents (the symbol takes the role of the visual anchor).

```html
<div class="hero__main">
  <a class="hero__mark" href="https://github.com/txn2/PROJECT" aria-label="PROJECT on GitHub">
    <svg class="hero__mark__svg" viewBox="10 10 80 80" role="img" aria-label="PROJECT symbol">
      <path class="hero__mark__path hero__mark__path--base"   d="..."/>
      <path class="hero__mark__path hero__mark__path--accent" d="..."/>
    </svg>
  </a>
  <h1 class="hero__display">
    <span class="hero__row hero__row--1"><em class="serif">project</em></span>
    <span class="hero__row hero__row--2"><span class="outline">tagline</span></span>
    <span class="hero__row hero__row--3"><em class="serif">closer.</em></span>
  </h1>
</div>
```

Sizing (verified on `mcp-s3.txn2.com`):

| Token                       | Value                                             |
|-----------------------------|---------------------------------------------------|
| `.hero__main` gap           | `clamp(24px, 4vw, 64px)`                          |
| `.hero__mark` width / height| `clamp(144px, 20vw, 288px)` (square)              |
| `.hero__display` font-size  | `clamp(44px, 8vw, 140px)` line-height `0.95`      |

`.hero__main` is `display: flex; align-items: center;`. Hero rows lose the upstream `padding-left` indents and stack flush-left next to the mark. Below 880px viewport, `.hero__main` switches to `flex-direction: column;` and `.hero__mark` scales to `clamp(108px, 25vw, 180px)`.

Symbol contract:

- Square SVG, viewBox `10 10 80 80` (or another square box). Two paths only.
- `.hero__mark__path--base`   filled `var(--paper)`. Structural linework.
- `.hero__mark__path--accent` filled `var(--signal)`. One bold geometric shape per symbol.
- The accent path breathes:
  ```css
  .hero__mark__path--accent {
    fill: var(--signal);
    transform-box: fill-box;
    transform-origin: 50% 50%;
    animation: mark-breath 6s ease-in-out infinite;
  }
  @keyframes mark-breath {
    0%, 100% { transform: scale(1); }
    50%      { transform: scale(1.06); }
  }
  ```
- The `<svg>` needs `overflow: visible;` so the scaled accent does not clip at the viewBox edge.
- On `.hero__mark:hover`, `transform: rotate(-8deg) scale(1.03);` over `0.45s ease` and the breath accelerates to `2.2s`.
- `prefers-reduced-motion: reduce` cancels the breath.

Do: keep one accent shape per symbol so the single-signal-orange rule holds.
Don't: use a typographic logotype in `.hero__mark`. The mark is geometric. Wordmarks live in the rail and in `.hero__display`.

The mark file lives at `docs/images/PROJECT-symbol.svg` (mkdocs project sites) or `static/images/PROJECT-symbol.svg` (Hugo). Strip width/height from the file root and rely on viewBox so the mark scales cleanly to any container.

### `.flagship__card` (kubefwd, txeh)

Used for the two utility cards. Top accent line in signal orange grows from 56px to 100% on hover. No shadow.

- `padding: 36px 36px 28px`
- `background: var(--ink-2)`
- `border: 1px solid var(--rule)`
- `:hover` `border-color: var(--rule-2)` and `transform: translateY(-3px)`

Internal slots: `flagship__head` (mono ID stamp + Fraunces name + tag), `flagship__body` (sans paragraph), `flagship__demo` (terminal block), `flagship__foot` (CTA buttons separated by 12px gap).

Do: include a working terminal demo in `flagship__demo`. Real commands.
Don't: invent CLI output. If a command has no deterministic output, just show the invocation.

### `.mcp__card--feature` (mcp-data-platform)

The headline MCP card. Grid layout with named areas: `id / name / tag / list / cta / schema`. Includes a Mermaid diagram inside `.mcp__schema`.

The mermaid theme is part of the design language. Use these variables verbatim:

```js
mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'strict',
  theme: 'base',
  themeVariables: {
    background:         '#15140F',
    primaryColor:       '#15140F',
    primaryTextColor:   '#ECE3CE',
    primaryBorderColor: '#3A3830',
    secondaryColor:     '#1B1A15',
    tertiaryColor:      '#15140F',
    lineColor:          '#968F80',
    textColor:          '#ECE3CE',
    fontFamily:         '"JetBrains Mono", ui-monospace, monospace',
    fontSize:           '13px'
  },
  flowchart: { curve: 'basis', padding: 16 }
});
await mermaid.run({ querySelector: '.mermaid' });
```

Highlight one node per diagram with `classDef accent fill:#15140F,stroke:#FF5A1F,color:#ECE3CE` and a `class XYZ accent` line.

Do: use Mermaid for any architecture diagram.
Don't: use ASCII art in `<pre>` blocks. ASCII does not scale, does not respond, does not survive layout changes.

### `.terminal` (demo block)

The only component that takes elevation.

- `background: #0A0A07`
- `border: 1px solid var(--rule)`
- `border-radius: 4px`
- `box-shadow: shadow.terminal`

Inside, the macOS-style traffic-light dots are decorative (`.terminal__bar span` x3, red/yellow/green). The `<pre class="terminal__body">` uses three colour classes:

- `.t-prompt`  signal orange (the `$` prompt).
- `.t-ok`      acid lime (success ticks).
- `.t-mute`    paper-dim grey (info/comments).

### `.btn` family

Three variants:

- `.btn` outline. 12px mono, uppercase, `rule-2` border, transparent background. Inverts on hover (paper bg, ink text).
- `.btn--accent` solid signal-orange fill, ink text. Used for primary CTAs.
- `.btn--big` paper background, ink text, 18px padding, `font-weight: 700`. Used for the closing GitHub CTA.

Do: use one `.btn--accent` per surface. The accent is loud.
Don't: replace `.btn` with a custom anchor element. The keyboard focus styles are wired here.

### `.stack__row` (other components list)

Numbered list rows in a 4-column grid (`80px 1fr 130px 40px`) with a Fraunces italic project name, `mute` description, monospace category tag, and an arrow indicator. Hover slides the content right, brightens the name and arrow to signal orange.

Do: keep entries to one short factual sentence each.
Don't: editorialise. The stack is a registry, not a brochure.

### `.coda` and `.footer`

The closing `coda` is a single block of Fraunces 300 italic on a left-border signal accent, followed by buttons for the canonical outbound links. The footer is a five-column grid (`about / txn2 / sponsors / craig / build`) collapsing 5 → 3 → 2 → 1 across the breakpoints. Footer mono labels are signal orange. Footer body text is `paper-dim` on `ink`.

## Do's and Don'ts

Design rules that overrule taste:

- **No card shadows.** The terminal is the only elevated component.
- **No purple gradients.** No "AI-generated" colour schemes. Warm-black plus signal-orange. Period.
- **No centred hero.** The page is asymmetric and left-aligned on purpose.
- **No all-caps body text.** Uppercase is reserved for mono labels.
- **Blueprint grid stays at opacity 0.04.** It is a texture, not a feature.
- **One signal-orange element above the fold per surface.** If you find yourself adding a second, find a way to remove the first.
- **Section indices use `§ 01 / title`.** Never the U+2014 character between number and title.
- **Mermaid for architecture diagrams.** Never ASCII art.
- **Skip-to-content link and `:focus-visible` outlines on every interactive element.** No exceptions.
- **WCAG AA contrast at all sizes.** `mute` was tuned for this; do not introduce a new muted colour without checking it.

## SEO and social cards

Every txn2 site (org landing and project sites) ships the same SEO surface so social shares, search results, and LLM crawlers all read consistently.

### Required meta tags

Every page emits these. On MkDocs Material project sites this lives in `docs/overrides/main.html` `{% block extrahead %}`. On the Hugo org site it lives in the head partial.

```html
<meta name="description" content="{{ site_description }}">
<meta name="keywords"    content="...">
<meta name="author"      content="{{ site_author }}">

<meta property="og:type"        content="website">
<meta property="og:site_name"   content="{{ site_name }}">
<meta property="og:locale"      content="en_US">
<meta property="og:url"         content="{{ canonical_url }}">
<meta property="og:title"       content="{{ social_title }}">
<meta property="og:description" content="{{ site_description }}">
<meta property="og:image"       content="{{ site_url }}images/PROJECT-og.png">
<meta property="og:image:type"  content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt"   content="...">

<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:url"         content="{{ canonical_url }}">
<meta name="twitter:title"       content="{{ social_title }}">
<meta name="twitter:description" content="{{ site_description }}">
<meta name="twitter:image"       content="{{ site_url }}images/PROJECT-og.png">
<meta name="twitter:image:alt"   content="...">
<meta name="twitter:creator"     content="@cjimti">
<meta name="twitter:site"        content="@cjimti">

<link rel="canonical" href="{{ canonical_url }}">
```

The `social_title` differs from `<title>` only on the homepage, where it carries the marquee tagline (`mcp-s3 / MCP server for Amazon S3 and S3-compatible storage`). Inner pages use `{{ page.title }} · {{ site_name }}`.

### JSON-LD structured data

Every page emits a `SoftwareApplication` block. Search engines dedupe across pages, so emitting it everywhere is fine and removes per-page bookkeeping.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PROJECT",
  "alternateName": "txn2/PROJECT",
  "description": "...",
  "url": "{{ site_url }}",
  "image": "{{ site_url }}images/PROJECT-og.png",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Linux, macOS, Windows",
  "programmingLanguage": "Go",
  "codeRepository": "https://github.com/txn2/PROJECT",
  "license": "https://www.apache.org/licenses/LICENSE-2.0",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author":    { "@type": "Person",       "name": "Craig Johnston", "url": "https://imti.co" },
  "publisher": { "@type": "Organization", "name": "txn2",            "url": "https://txn2.com" }
}
</script>
```

### `PROJECT-og.png` (open graph card)

Every project ships a `1200 x 630` PNG OG card at `docs/images/PROJECT-og.png`. The card mirrors the homepage hero, not a screenshot of the app. Composition:

- Warm-black canvas (`#0B0B09`) with the same subtle warm-tint radial wash and 60px blueprint grid at `0.04` opacity used by the rail.
- Crosshair ticks at all four corners (`#5A554B`, 28px arms).
- Top rail strip: Fraunces italic project name + JetBrains Mono subtitle on the left, signal-orange `TXN2 / OPEN SOURCE` capsule on the right, 1px rule below.
- Centre: project symbol mark on the left at ~280px square (the `.hero__mark` glyph; paper linework + signal-orange accent), three-row Fraunces display on the right (`mcp-s3` / `object storage` / `for ai.`) with the middle row as a `-webkit-text-stroke` outline.
- Bottom strip: 1px rule, signal-orange registration tick + JetBrains Mono mono caption (`APACHE 2.0  ·  COMPOSABLE MCP SERVER  ·  GO  ·  READ-ONLY BY DEFAULT`) on the left, signal-orange `PROJECT.TXN2.COM ↗` on the right.

The card is authored as an SVG (`docs/images/PROJECT-og.svg`) and rasterised to PNG at 1200 x 630 with `rsvg-convert`. Both files ship; the PNG is what social platforms fetch, the SVG is the source of truth.

```bash
rsvg-convert -w 1200 -h 630 -o docs/images/PROJECT-og.png docs/images/PROJECT-og.svg
```

Fonts in the SVG: declare `font-family="Fraunces, Georgia, serif"` and `font-family="JetBrains Mono, Menlo, monospace"` so rasterisation falls back gracefully when the design fonts are not installed locally. Do not embed full font files in the SVG; the PNG already captures the rendered glyphs.

### `llms.txt`

Every project ships an `llms.txt` at the docs root following the [llms.txt convention](https://llmstxt.org). Keep it under ~120 lines. Structure:

```
# PROJECT

> One-paragraph summary, scrape-grade.

Two-sentence positioning paragraph.

## MCP Server  (or whatever the primary surface is)
- [Page name](https://PROJECT.txn2.com/path/): One-line purpose

## Go Library
...

## Reference
...

## Key Capabilities
- bullet
- bullet

## Quick Start
` ` `bash
...
` ` `

## Optional
- [Troubleshooting](...): ...
- [GitHub Repository](https://github.com/txn2/PROJECT): ...
```

### sitemap.xml and robots.txt

MkDocs Material emits `sitemap.xml` and `sitemap.xml.gz` at build time. Hugo emits `sitemap.xml` from `config.toml`. Neither needs hand-tuning. Do not ship a `robots.txt` unless you intend to block something specific; the absence of one is the correct default for an open-source documentation site.

## Voice and Copy

The site's text is part of the design system.

- No em-dashes (Unicode U+2014) or en-dashes (U+2013) anywhere. In any artifact: HTML, CSS comments, JS comments, Hugo template strings, commit messages, README, llms.txt, robots.txt, workflow YAML, SVG `<text>`. Replace with commas, periods, colons, parentheses, slashes, or hyphens. Year ranges use a hyphen (`2017-2026`). Heading separators use a slash (`§ 01 / title`) or a colon. Mid-sentence breaks use commas or split into two sentences.
- No AI-tell vocabulary. Do not write `delve`, `leverage`, `seamless`, `robust`, `comprehensive`, `unleash`, `elevate`, `embark`, `journey`, `tapestry`, `not just X but Y`. Do not write `as an AI` or `let me X` in any artifact, public or private.
- Never invent project names, repo names, package names, descriptions, or features. Verify against the actual GitHub source (`gh repo list txn2 --json name,description`) or the user's explicit list. When citing a description, use the published one verbatim or shorten without invention.
- Lowercase rail and label text. Sentence case for body. Title case is rare and reserved for proper nouns.
- Terse. Declarative. No first-person preambles. Commit messages start with a verb ("remove invalid repos", "add SEO", "fix CI deploy"), not "I will" or "Here is".
- Section titles drop trailing periods. Body sentences keep them.

## Downstream contract

This file is canonical only for `txn2.com`. Other sites under the txn2 organization (`kubefwd.com`, `txeh.txn2.com`, `mcp-s3.txn2.com`, `mcp-trino.txn2.com`, `mcp-datahub.txn2.com`, `mcp-data-platform.txn2.com`) currently run MkDocs Material with a sage-green palette and Inter body font. They are not required to adopt this look.

Three levels of adoption are valid:

1. **Reference** (current default for downstream sites). Link to this `DESIGN.md` from the project's own docs. No visual changes. The downstream site keeps its current Material theme.
2. **Token alignment**. Copy `tokens.json` into the downstream repo. Re-skin the MkDocs Material `extra.css` against these tokens (`--md-primary-fg-color: var(--signal)`, `--md-default-bg-color: var(--ink)`, etc.) without abandoning Material. Keep Inter for body if preferred.
3. **Full re-skin**. Replace MkDocs Material with custom Hugo layouts mirroring this site, using `tokens.json` as the single source. Reserved for sites where the txn2 visual identity is the point (the org landing page, future flagship project sites).

A future change may add a Hugo partial that emits CSS custom properties from `tokens.json` at build time via `resources.Get` + `transform.Unmarshal`. That work is not yet done. When it ships, downstream sites at level 2 can subscribe to it through a small extra.css that imports the generated `:root { --... }` block.

When updating any value in this file:

1. Update `static/css/site.css` first. The CSS is the runtime truth.
2. Mirror the new value into `tokens.json`.
3. Mirror it again into the YAML front matter of this file.
4. If a token is removed, remove it from all three. Stale tokens are worse than missing ones.
