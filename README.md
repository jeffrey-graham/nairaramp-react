# @nairaramp/react

React hook and UI components for adding Pay with Naira flows to React and Next.js applications, powered by `@nairaramp/core`.

Status: early development, testnet only.

---

## Installation

```bash
pnpm add @nairaramp/react @nairaramp/core
```

---

## Quick Example

```tsx
import { useState } from "react";
import { createRamp, freighterSigner, type TransactionStatus } from "@nairaramp/core";
import { PayWithNaira, StatusTimeline } from "@nairaramp/react";

const ramp = createRamp({
  network: "testnet",
  anchorId: "test-anchor",
  signer: freighterSigner(),
});

export function Checkout() {
  const [status, setStatus] = useState<TransactionStatus | undefined>(undefined);

  return (
    <div>
      <PayWithNaira ramp={ramp} assetCode="USDC" onComplete={() => setStatus("completed")} />
      <StatusTimeline status={status} />
    </div>
  );
}
```

---

## Next.js App Router

Every distribution bundle of `@nairaramp/react` includes the `"use client";` banner directive on line 1. You can import and use `<PayWithNaira />`, `<StatusTimeline />`, and `usePayWithNaira()` directly inside Server Component pages without adding a manual wrapper.

---

## Documentation

- [API Reference](docs/API.md) - Complete contract, hook lifecycle phases, component props, and accessibility details.
- [Contributing Guide](CONTRIBUTING.md) - Development setup, Stellar Wave participation, and testing rules.
- [Security Policy](SECURITY.md) - Vulnerability disclosure process.
- [License](LICENSE) - Apache License 2.0.

Related repositories: nairaramp-core, nairaramp-demo
