import { MarkdownPage } from "~/components/MarkdownPage";
import * as Dict from "~/i18n/venue";

import "./venue.css";

import wenlaiBuildingImage from "~/assets/venue/wenlai_building.avif";
import wenlaiQrCodeImage from "~/assets/venue/wenlai_qrcode.avif";
import wenlaiLobbyImage from "~/assets/venue/wenlai_lobby.avif";
import wenlaiRoomImage from "~/assets/venue/wenlai_room.avif";
import hiltonLobbyImage from "~/assets/venue/hilton_lobby.avif";
import hiltonRoomImage from "~/assets/venue/hilton_room.avif";
import mercureQrCodeImage from "~/assets/venue/mercure_qrcode.avif";
import mercureLobbyImage from "~/assets/venue/mercure_lobby.avif";
import mercureRoomImage from "~/assets/venue/mercure_room.avif";

export default function Venue() {
  return (
    <MarkdownPage dict={Dict} variables={{ wenlaiBuildingImage, wenlaiQrCodeImage, wenlaiLobbyImage, wenlaiRoomImage, hiltonLobbyImage, hiltonRoomImage, mercureQrCodeImage, mercureLobbyImage, mercureRoomImage }} />
  );
}