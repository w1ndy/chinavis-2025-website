import { MarkdownPage } from "~/components/MarkdownPage";
import * as Dict from "~/i18n/home";

import AIHLogo from "~/assets/sponsor/aih.avif";

export default function Home() {
  return (
    <MarkdownPage dict={Dict} variables={{ AIHLogo }} />
  );
}