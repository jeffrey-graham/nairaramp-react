# Decisions

GitHub owner: redclay-labs

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-11-08 | @nairaramp/core is a peerDependency and a pinned devDependency | Apps install one copy of core |
| 2026-11-08 | Builds start with "use client" | Next.js App Router needs client components marked |
| 2026-11-08 | Inline styles only, no CSS framework | Components must drop into any app |
| 2026-11-08 | GitHub owner: redclay-labs | Verified from git remote origin URL |
| 2026-11-08 | Pin eslint@9.22.0 | ESLint 9 is compatible with eslint-plugin-react-hooks@5.1.0 flat config APIs |
| 2026-11-08 | Use actions/checkout@v4, pnpm/action-setup@v4, actions/setup-node@v4 | Current major GitHub Actions versions supporting Node 20 & 22 with pnpm caching |
| 2026-11-08 | Omit version from pnpm/action-setup in CI | pnpm/action-setup@v4 reads packageManager from package.json and errors if version is also passed |
| 2026-11-08 | Inline @nairaramp/core and @stellar/typescript-wallet-sdk in vitest server.deps | Allows Node ESM Vitest runner to resolve named exports from CommonJS wallet SDK on Linux CI |
