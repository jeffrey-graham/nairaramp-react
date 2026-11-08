# Security Policy

## Supported Versions

Only the latest `0.x` release of `@nairaramp/react` receives security updates.

| Version | Supported |
| --- | --- |
| 0.x | :white_check_mark: |
| < 0.x | :x: |

## Reporting a Vulnerability

Please report security issues privately via GitHub's Private Vulnerability Reporting on this repository.

Do NOT open public GitHub issues or discussions for security vulnerabilities.

### Scope Notice

`@nairaramp/react` provides React components and hooks for application integration. All underlying ramp flows, SEP protocol interactions, cryptographic key handling, and transaction signing logic live strictly in [`nairaramp-core`](https://github.com/redclay-labs/nairaramp-core). Vulnerability reports concerning ramp logic, anchors, SEP implementations, or key signers belong in the `nairaramp-core` repository.
