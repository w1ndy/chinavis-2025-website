import { MarkdownPage } from "~/components/MarkdownPage";
import "./registration.css";

import QrCodeImage from "~/assets/registration/qrcode.avif";

export default function Registration() {
  return (
    <MarkdownPage dict="registration" variables={{ qrcodeImage: QrCodeImage }} />
  );
}