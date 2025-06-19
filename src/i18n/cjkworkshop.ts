import { marked } from "marked";

import PhotoKenjiOno from "~/assets/cjkworkshop/kenji_ono.avif?inline";
import PhotoNaohisaSakamoto from "~/assets/cjkworkshop/naohisa_sakamoto.avif?inline";

export const zh = {
  PageTitle: "中日韩论坛 - ChinaVis 2025",
  Title:
    '<span style="font-size: 0.8em">第十二届中国可视化与可视分析大会（ChinaVis 2025）</span><br />第八届中日韩可视化论坛',
  Content: marked.parse(
    `
    ## 论坛信息

    - **时间：** 2025 年 7 月 19 日上午 9-12 点
    - **地点：** 浙江大学紫金港校区（浙江省杭州市西湖区余杭塘路 866 号）

    ## 论坛主席

    _待定_

    ## 论坛议程

    _待定_
    `.replace(/^    /gm, "")
  ),
  SpeakerSectionTitle: "论坛讲者",
  MoreSpeakersTBD: "更多讲者待定",
};

export const en = {
  PageTitle: "CJK Workshop - ChinaVis 2025",
  Title:
    '<span style="font-size: 0.8em">The 12th China Conference on Visualization and Visual Analytics (ChinaVis 2025)</span><br />The Eighth China-Japan-Korea Joint Visualization Workshop',
  Content: marked.parse(
    `
    ## Information

    - **Date:** July 19, 2025, 9:00 AM - 12:00 PM
    - **Location:** Zijingang Campus, Zhejiang University (866 Yuhangtang Road, Xihu District, Hangzhou, Zhejiang Province)

    ## Organizers

    _TBD_

    ## Program

    _TBD_
    `.replace(/^    /gm, "")
  ),
  SpeakerSectionTitle: "Speakers",
  MoreSpeakersTBD: "More speakers to be determined",
};

export const speakers: {
  name: { zh: string; en: string } | string;
  affiliation: { zh: string; en: string };
  photo: string;
}[] = [
  {
    name: "Kenji Ono",
    affiliation: {
      zh: "九州大学",
      en: "Kyushu University",
    },
    photo: PhotoKenjiOno,
  },
  {
    name: "Naohisa Sakamoto",
    affiliation: {
      zh: "神户大学",
      en: "Kobe University",
    },
    photo: PhotoNaohisaSakamoto,
  },
];
