import { Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";
import { FileRoutes } from "@solidjs/start/router";

import "./app.css";

import { Navbar } from "~/components/Navbar";
import { Teaser } from "~/components/Teaser";
import { Footer } from "~/components/Footer";
import { ScrollToTopButton } from "~/components/ScrollToTopButton";
import { Suspense } from "solid-js";

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={props => (
          <>
            <Suspense><Navbar /></Suspense>
            <Teaser />
            <Suspense>{props.children}</Suspense>
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
