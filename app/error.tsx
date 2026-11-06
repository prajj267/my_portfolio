"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="status-page" id="top">
      <div className="status-code" aria-hidden="true">VAR</div>
      <div className="status-inner">
        <span className="kicker">Play stopped</span>
        <h1>Under review</h1>
        <p>
          Something went wrong while loading this page. Try again, and if it keeps happening,
          email <a className="inline-link" href="mailto:pprajjwal2@gmail.com">pprajjwal2@gmail.com</a>.
        </p>
        {error.digest && <p className="status-ref">Reference: {error.digest}</p>}
        <div className="hero-actions status-actions">
          <button type="button" className="btn btn-primary" onClick={reset}>Try again</button>
          <Link className="btn btn-ghost" href="/">Back to kick-off</Link>
        </div>
      </div>
    </main>
  );
}
