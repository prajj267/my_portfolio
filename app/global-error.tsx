"use client";

/** Last-resort error screen if the root layout itself fails. Uses inline styles because globals.css may not load. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#071f4d",
          color: "#fff",
          textAlign: "center",
          padding: 24,
        }}
      >
        <div>
          <h1 style={{ fontSize: 48, margin: "0 0 12px", textTransform: "uppercase" }}>Match abandoned</h1>
          <p style={{ color: "#c4d4f5", maxWidth: 420, margin: "0 auto 24px" }}>
            The site hit an unexpected error. Please try again.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              padding: "12px 22px",
              borderRadius: 10,
              border: 0,
              fontWeight: 700,
              cursor: "pointer",
              background: "#fff",
              color: "#0b3d91",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
