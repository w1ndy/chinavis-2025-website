import { Page } from "./Page";
import Logo from "~/assets/logo.svg";

export function Footer() {
  return (
    <div class="bg-black text-white w-full">
      <Page class="text-2xl font-thin">
        <div class="flex flex-row items-center justify-center">
          <img class="w-36 mr-2" src={Logo} alt="logo" />
          <div class="text-sm text-left flex flex-col mt-1">
            <div class="break-keep font-bold">第十二届<wbr />中国可视化与可视分析大会</div>
            <div class="text-xs">The 12th China Visualization and Visual Analytics Conference</div>
          </div>
        </div>
      </Page>
    </div>
  );
}
