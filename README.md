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

The site only deploys from tags. Master pushes do not deploy on their own.

Triggers:

- Push of a `v*` tag — deploys with that tag as the `rel.` stamp
- Publishing a GitHub Release — deploys with the release's tag
- Manual run from the Actions tab — deploys with an optional version input (defaults to `dev`)
- Pull request to `master` — build-only smoke test, no deploy

```bash
# release flow:
git push origin master           # land changes (no deploy)
git tag v9.0.2
git push origin v9.0.2           # this is what deploys
```

The `github-pages` environment must allow `v*` tag deploys. One-time setup (already done on this repo):

```bash
gh api -X POST repos/<org>/<repo>/environments/github-pages/deployment-branch-policies \
  -f name='v*' -f type=tag
```

GitHub Pages source must be **"GitHub Actions"** (Settings → Pages, or `gh api -X PUT repos/<org>/<repo>/pages -f build_type=workflow`). If left as "Deploy from a branch" the auto `pages-build-deployment` workflow will run on every push and fail because `docs/` isn't committed.

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
