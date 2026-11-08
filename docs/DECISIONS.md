# Decisions

GitHub owner: redclay-labs

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-11-08 | @nairaramp/core is a peerDependency and a pinned devDependency | Apps install one copy of core |
| 2026-11-08 | Builds start with "use client" | Next.js App Router needs client components marked |
| 2026-11-08 | Inline styles only, no CSS framework | Components must drop into any app |
| 2026-11-08 | GitHub owner: redclay-labs | Verified from git remote origin URL |
| 2026-11-08 | Pin eslint@9.22.0 | ESLint 9 is compatible with eslint-plugin-react-hooks@5.1.0 flat config APIs |
