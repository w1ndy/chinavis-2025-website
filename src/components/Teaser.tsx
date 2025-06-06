import Logo from "../assets/logo.avif";
import Bg1 from "../assets/bg/bg-1.avif?inline";

export function Teaser() {
  return (
    <div class="aspect-[24/9] w-full text-white relative">
      <div class="absolute left-0 top-0 w-full h-full">
        <img class="w-full h-full object-cover object-center brightness-75" src={Bg1} />
      </div>
      <img class="absolute right-[6vw] top-[3vw] w-[12vw]" src={Logo} alt="logo" />
      <div class="absolute left-[6vw] top-[8vw] text-[3vw] font-bold text-shadow">第十二届</div>
      <div class="absolute left-[6vw] top-[12vw] text-[5vw] font-bold text-shadow">中国可视化与可视分析大会</div>
      <div class="absolute left-[6vw] top-[19vw] text-[2vw] leading-[2.6vw] text-shadow">The 12th China Visualization and Visual Analytics Conference</div>
      <div class="absolute right-[6vw] top-[26vw] text-[2vw] text-right leading-[2.8vw] text-shadow">中国 &centerdot; 杭州<br />Hangzhou, China<br />2025.07.19 - 2025.07.22</div>
    </div>
  )
}