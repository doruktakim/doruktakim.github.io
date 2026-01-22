# Portfolio + Blog (GitHub Pages)

Visit site [here](https://doruktakim.github.io)

This is a tiny Eleventy (11ty) site built for speed. Content lives in `src/` and the static output goes to `docs/` for GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm run build
```

Commit the `docs/` folder and enable GitHub Pages:
- Settings → Pages → Deploy from a branch
- Branch: `main`, folder: `/docs`

## Writing new posts

Add a markdown file in `src/blog/posts/` with front matter:

```md
---
layout: layouts/post.njk
title: Your title
summary: One sentence summary
date: 2026-01-28
tags: [post]
---
Your post here.
```

## License

Code is licensed under MIT (see `LICENSE`). Content (writing, posts, media) is licensed
under CC BY 4.0 (see `CONTENT_LICENSE.md`).
