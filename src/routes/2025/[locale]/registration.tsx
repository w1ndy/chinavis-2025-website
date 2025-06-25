import { MarkdownPage } from "~/components/MarkdownPage";
import * as Dict from "~/i18n/registration";
import "./registration.css";

import QrCodeImage from "~/assets/registration/qrcode.avif";

export default function Registration() {
  return (
    <MarkdownPage dict={Dict} variables={{ qrcodeImage: QrCodeImage }} />
  );
}