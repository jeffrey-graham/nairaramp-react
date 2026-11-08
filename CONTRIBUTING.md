# Contributing to @nairaramp/react

## About @nairaramp/react

@nairaramp/react provides a React hook and prebuilt components that add seamless Pay with Naira and Cash Out to Naira flows to React and Next.js applications. All underlying ramp protocols, anchor integrations, and transaction signing logic come from `@nairaramp/core`, installed from npm.

## Setup

1. **Prerequisites**: Ensure Node.js 20+ and pnpm 9 are installed (enable pnpm via `corepack enable pnpm`).
2. **Clone**:
   ```bash
   git clone https://github.com/redclay-labs/nairaramp-react.git
   cd nairaramp-react
   ```
3. **Install**:
   ```bash
   pnpm install
   ```
4. **Build**:
   ```bash
   pnpm build
   ```
5. **Test**:
   ```bash
   pnpm test
   ```

## Testing Components

- All unit and component tests run using Vitest with `jsdom` and React Testing Library (`@testing-library/react`).
- Always mock the `Ramp` client and signer objects. Never call a real Stellar anchor or trigger live network SEP requests inside unit test suites.

## Repository Scope

This repository strictly owns the React hook, the UI components, their unit tests, and documentation.
- Changes to ramp behaviour, SEP protocols, anchor discovery, signers, or error definitions belong in [`nairaramp-core`](https://github.com/redclay-labs/nairaramp-core).
- Changes to demo applications and sample quickstarts belong in [`nairaramp-demo`](https://github.com/redclay-labs/nairaramp-demo).

## Branch & Pull Request Conventions

- Name feature and fix branches using the pattern `issue-<number>-<short-name>` (e.g. `issue-42-pay-button-focus`).
- Submit strictly one issue per pull request.
- Reference and auto-close the issue in your pull request description using `Closes #<number>`.

## Stellar Wave

This repository takes part in the Stellar Wave program on Drips.

- Maintainers create issues in the Drips Wave app, and the Drips Wave bot automatically labels eligible issues as `Stellar Wave`.
- During an active Wave (usually one week each month), contributors sign in at [drips.network/wave](https://drips.network/wave) using GitHub and apply to an open issue.
- The repository maintainer reviews applications and assigns one applicant per issue.
- Merged work earns points based on issue complexity:
  - **Trivial**: 100 points
  - **Medium**: 150 points
  - **High**: 200 points
- Rewards are distributed proportionally by accumulated points after the Wave concludes.
- For more details on the program, visit [https://docs.drips.network/wave](https://docs.drips.network/wave).

## Code Rules

- **Dependencies**: Never add a new runtime or build dependency without prior discussion and maintainer approval.
- **Tests required**: Write unit tests alongside every component and hook change; full test coverage is required for green CI.
- **Accessibility & Responsiveness**: Components must stay fully usable and readable at a minimum viewport width of 360 px and remain completely keyboard accessible (proper tab order, focus visible states, and ARIA attributes).
