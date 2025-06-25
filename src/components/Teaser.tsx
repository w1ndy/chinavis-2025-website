import Logo from "../assets/logo.svg?inline";
import Bg from "../assets/bg/bg.avif?inline";

export function Teaser() {
  return (
    <div class="aspect-[22/9] w-full text-black relative">
      <div class="absolute left-0 top-0 w-full h-full">
        <img class="w-full h-full object-cover object-top" src={Bg} />
      </div>
      <img class="absolute left-[2vw] top-[3vw] w-[36vw] invert" src={Logo} alt="logo" />
      <div class="absolute left-[39vw] top-[1.5vw] text-[4vw] font-bold">2025</div>
      <div class="absolute left-[3.5vw] top-[10vw] text-[2.8vw]">第十二届</div>
      <div class="absolute left-[3.5vw] top-[13vw] text-[2.8vw]">中国可视化与可视分析大会</div>
      <div class="absolute left-[3.5vw] bottom-[4vw] text-[2.2vw] font-thin">The 12th China Visualization</div>
      <div class="absolute left-[3.5vw] bottom-[2vw] text-[2.2vw] font-thin">and Visual Analytics Conference</div>
      <div class="absolute right-[2vw] top-[22vw] text-[2.5vw] text-right font-medium">中国&centerdot;杭州</div>
      <div class="absolute right-[2vw] top-[24.6vw] text-[2vw] text-right font-thin">China&centerdot;Hangzhou</div>
      <div class="absolute right-[2vw] top-[27.6vw] text-[3.5vw] text-right leading-[2.8vw] font-bold">2025.07.19-22</div>
    </div>
  )
}