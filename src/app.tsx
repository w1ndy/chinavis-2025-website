import { Suspense } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";
import { FileRoutes } from "@solidjs/start/router";

import "./app.css";

import { Teaser } from "./components/Teaser";
import { Footer } from "./components/Footer";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

const Navbar = clientOnly(() => import("~/components/Navbar"));

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={props => (
          <>
            <Navbar />
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
