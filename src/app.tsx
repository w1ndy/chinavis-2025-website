import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { Link, Meta, MetaProvider } from "@solidjs/meta";
import { FileRoutes } from "@solidjs/start/router";

import "./app.css";

import { Navbar } from "~/components/Navbar";
import { Teaser } from "~/components/Teaser";
import { Footer } from "~/components/Footer";
import { ScrollToTopButton } from "~/components/ScrollToTopButton";
import { ServiceWorkerNotification } from "~/components/ServiceWorkerNotification";

export default function App() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/2025/service-worker.js')
        .then(reg => console.log('SW registered', reg))
        .catch(err => console.error('SW registration failed', err));
    });
  }

  return (
    <MetaProvider>
      <Link rel="icon" href="/2025/icons/icon-192.png" />
      <Link rel="manifest" href="/2025/manifest.webmanifest"></Link>
      <Meta name="theme-color" content="#000000"></Meta>
      <Router
        root={props => (
          <>
            <Suspense><Navbar /></Suspense>
            <Teaser />
            <Suspense>{props.children}</Suspense>
            <Footer />
            <ScrollToTopButton />
            <ServiceWorkerNotification />
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
