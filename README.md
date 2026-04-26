# txn2.com

Source for [txn2.com](https://txn2.com) — Hugo site, custom layouts, deployed to GitHub Pages by the workflow at `.github/workflows/deploy.yml`.

## Local development

```bash
brew install hugo
hugo serve
# → http://localhost:1313/
```

Pass a release version locally to preview the `rel.` stamps:

```bash
HUGO_PARAMS_VERSION=v0.1.0 hugo serve
```

## Build (rarely needed locally — CI does this)

```bash
hugo --minify --gc
# output goes to docs/, which is git-ignored
```

## Deploy

The site deploys automatically when you push a `v*` tag or publish a GitHub Release:

```bash
git tag v0.1.0 && git push origin v0.1.0
```

GitHub Pages must be set to **Source: "GitHub Actions"** (Settings → Pages).

## Structure

| Path                              | Purpose                                                    |
| --------------------------------- | ---------------------------------------------------------- |
| `config.toml`                     | Hugo + site config, params, GA4 ID                         |
| `layouts/`                        | Custom Hugo templates (no theme — fully self-contained)    |
| `layouts/index.html`              | Home page design                                           |
| `layouts/_default/baseof.html`    | Base shell — meta, JSON-LD, fonts                          |
| `layouts/robots.txt`              | Generated robots.txt with absolute sitemap URL             |
| `static/css/site.css`             | All site styling                                           |
| `static/js/site.js`               | UTC clock, scroll reveals, hero parallax                   |
| `static/llms.txt`                 | Project index for LLM crawlers (per llmstxt.org)           |
| `static/CNAME`                    | **Custom domain — `txn2.com`. Do not delete.**             |
| `static/images/og.png`            | Open Graph card (1200×630)                                 |
| `static/images/og.svg`            | Source for og.png — edit, then `rsvg-convert` to PNG       |

## Editing the OG card

```bash
rsvg-convert -w 1200 -h 630 -o static/images/og.png static/images/og.svg
```
