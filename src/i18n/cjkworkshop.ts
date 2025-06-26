import { marked } from "marked";

import PhotoKenjiOno from "~/assets/cjkworkshop/kenji_ono.avif?inline";
import PhotoNaohisaSakamoto from "~/assets/cjkworkshop/naohisa_sakamoto.avif?inline";
import PhotoSL from "~/assets/cjkworkshop/sl.avif?inline";
import { Speaker } from "~/components/SpeakerInfo";

export const zh = {
  PageTitle: "中日韩论坛 - ChinaVis 2025",
  Title: "第八届中日韩可视化论坛",
  Content: marked.parse(
    `
    ## 论坛信息

    - **时间：** 2025 年 7 月 19 日上午 9-12 点
    - **地点：** 浙江大学紫金港校区（浙江省杭州市西湖区余杭塘路 866 号）

    ## 论坛主席

    _待定_

    ## 论坛议程
    `.replace(/^    /gm, ""),
    { async: false }
  ),
  MoreTalksTBD: "更多报告待定",
};

export const en = {
  PageTitle: "CJK Workshop - ChinaVis 2025",
  Title: "The Eighth China-Japan-Korea Joint Visualization Workshop",
  Content: marked.parse(
    `
    ## Information

    - **Date:** July 19, 2025, 9:00 AM - 12:00 PM
    - **Location:** Zijingang Campus, Zhejiang University (866 Yuhangtang Road, Xihu District, Hangzhou, Zhejiang Province)

    ## Organizers

    _TBD_

    ## Program
    `.replace(/^    /gm, ""),
    { async: false }
  ),
  MoreTalksTBD: "More talks to be announced",
};

export const speakers: Speaker[] = [
  {
    name: { zh: "Kenji Ono", en: "Kenji Ono" },
    affiliation: {
      zh: "九州大学",
      en: "Kyushu University",
    },
    description: {
      zh: "",
      en: "",
    },
    photo: PhotoKenjiOno,
    talk: {
      zh: "报告题目待定",
      en: "Talk title to be announced",
    },
  },
  {
    name: { zh: "Naohisa Sakamoto", en: "Naohisa Sakamoto" },
    affiliation: {
      zh: "神户大学",
      en: "Kobe University",
    },
    description: {
      zh: "",
      en: "",
    },
    photo: PhotoNaohisaSakamoto,
    talk: {
      zh: "报告题目待定",
      en: "Talk title to be announced",
    },
  },
  {
    name: { zh: "时磊", en: "Lei Shi" },
    affiliation: {
      zh: "北京航空航天大学",
      en: "Beihang University",
    },
    photo: PhotoSL,
    description: {
      zh: 'Lei Shi is a tenured full professor of Computer Science from Beihang University. He has previously worked in SKLCS, Chinese Academy of Science, and IBM Research. He holds all degrees from Computer Science of Tsinghua University. His current research interests are visual analytics, data mining, and AI, with more than 100 papers (h-index=31) published in top-tier venues, such as TVCG, VIS, CHI, CSCW, TKDE, KDD, VLDB, ICDE, ICML, ICLR, NeurIPS, AAAI, SIGCOMM, Infocom, TC, and PIEEE. He is the recipient of IBM Research Division Award on "Visual Analytics" and the IEEE VAST Challenge Award twice in 2010 and 2012. He received the First Prize of Technological Invention Award from China Computer Federation in 2022 (2nd rank).',
      en: 'Lei Shi is a tenured full professor of Computer Science from Beihang University. He has previously worked in SKLCS, Chinese Academy of Science, and IBM Research. He holds all degrees from Computer Science of Tsinghua University. His current research interests are visual analytics, data mining, and AI, with more than 100 papers (h-index=31) published in top-tier venues, such as TVCG, VIS, CHI, CSCW, TKDE, KDD, VLDB, ICDE, ICML, ICLR, NeurIPS, AAAI, SIGCOMM, Infocom, TC, and PIEEE. He is the recipient of IBM Research Division Award on "Visual Analytics" and the IEEE VAST Challenge Award twice in 2010 and 2012. He received the First Prize of Technological Invention Award from China Computer Federation in 2022 (2nd rank).',
    },
    talk: {
      zh: "GeneticFlow 2.0: Multifaceted Visualization of Scholarly Research Evolution",
      en: "GeneticFlow 2.0: Multifaceted Visualization of Scholarly Research Evolution",
    },
    abstract: {
      zh: 'Understanding the evolution of scholarly research is essential for many real-life decision-making processes in academia, such as research planning, frontier exploration, and award selection. Popular platforms like Google Scholar and Web of Science rely on numerical indicators that are too abstract to convey the context and content of scientific research, while most existing visualizations on mapping science do not consider the presentation of individual scholars’ research evolution. This work builds on an open academic database with up to 500 million papers/authors and proposes an integrated pipeline to visualize a scholar’s research evolution from multiple topic facets. A novel 3D prism-shaped visual metaphor is introduced, along with versatile designs by topic chord diagram, six-degree-impact glyph, streamgraph visualization, and inter-topic flow map, all optimized by elaborate layout algorithms. An online platform - <a href="http://genetic-flow.com" target="_blank">http://genetic-flow.com</a>, has been launched since Jan. 2025, attracting more than 200,000 visits from 74 countries by now, and receiving written feedback from Turing award laureates and ACM fellows.',
      en: 'Understanding the evolution of scholarly research is essential for many real-life decision-making processes in academia, such as research planning, frontier exploration, and award selection. Popular platforms like Google Scholar and Web of Science rely on numerical indicators that are too abstract to convey the context and content of scientific research, while most existing visualizations on mapping science do not consider the presentation of individual scholars’ research evolution. This work builds on an open academic database with up to 500 million papers/authors and proposes an integrated pipeline to visualize a scholar’s research evolution from multiple topic facets. A novel 3D prism-shaped visual metaphor is introduced, along with versatile designs by topic chord diagram, six-degree-impact glyph, streamgraph visualization, and inter-topic flow map, all optimized by elaborate layout algorithms. An online platform - <a href="http://genetic-flow.com" target="_blank">http://genetic-flow.com</a>, has been launched since Jan. 2025, attracting more than 200,000 visits from 74 countries by now, and receiving written feedback from Turing award laureates and ACM fellows.',
    },
  },
];
