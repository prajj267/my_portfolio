import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "404 · Offside",
  description: "This page doesn't exist. Head back to Prajjwal Patel's portfolio.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <SiteNav base="/" />
      <main className="status-page" id="top">
        <div className="status-code" aria-hidden="true">404</div>
        <div className="status-inner">
          <span className="flag" aria-hidden="true" />
          <span className="kicker">Referee&apos;s decision</span>
          <h1>Offside!</h1>
          <p>
            That page isn&apos;t on the pitch. The link may be broken, or the page may have been
            moved. Let&apos;s get you back into play.
          </p>
          <div className="hero-actions status-actions">
            <Link className="btn btn-primary" href="/">Back to kick-off</Link>
            <Link className="btn btn-ghost" href="/#highlights">See the highlights</Link>
          </div>
        </div>
      </main>
      <SiteFooter base="/" />
    </>
  );
}
