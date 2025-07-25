import { marked } from "marked";

export const zh = {
  PageTitle: "首页 - ChinaVis 2025",
  Content: marked.parse(
    `
    ## 会议信息

    中国可视化与可视分析大会 (ChinaVis) 由我国可视化业界工作者联合发起，宗旨是促进中国及周边地区的可视化与可视分析研究与应用的交流，探讨在大数据时代可视化与可视分析发展的方向与机遇，推动相关研究与应用的发展与进步，推进学科的发展，促进人才培养和交流，加深艺术与技术融合。会议将搭建与国内外著名专家、企业家、应用部门面对面交流，深入研讨可视化前沿技术及其应用的交流和沟通平台，促进中国可视化与可视分析领域产、学、研、用协同发展新生态的形成。中国可视化与可视分析大会分别于北京（2014 年）、天津（2015 年）、长沙（2016 年）、青岛（2017 年）、上海（2018 年）、成都（2019 年）、西安（2020 年）、武汉（2021 年）、西宁（2022 年）、重庆（2023 年）和香港（2024 年）举办，会议汇集了国内外数百名可视化研究人员与领域专家，取得了圆满成功。

    **第十二届中国可视化与可视分析大会** (ChinaVis 2025) 将于 **2025 年 7 月 19 日 - 22 日**在**杭州**举行。本次大会由中国图象图形学学会主办，可视化与可视分析专委会、浙江大学计算机辅助设计与图形系统全国重点实验室、杭州全息智能技术研究院、杭州电子科技大学、中国美术学院、浙江工业大学、浙江传媒学院、浙大城市学院等承办，多家赞助单位协办。本次大会内容包括特邀报告、论文报告、海报、展览、专题研讨及艺术项目。大会将邀请国内外可视化领域知名专家就相关研究与应用最新进展作大会报告，介绍发展动态，开拓研究思路。欢迎从事可视化与可视分析，以及相关领域研究的专家、学者、艺术家、学生以及工业界的专家、专业技术人员踊跃投稿与参会。

    ## 会议赞助

    <div style="margin-top: 20px; text-align: center;">
      <img style="height: 150px; margin: 10px auto" src="{{ AIHLogo }}" alt="杭州全息智能技术研究院"/>
      <div><h3 style="margin: 0 auto">杭州全息智能技术研究院</h3></div>
      <div style="color: #de0000; font-weight: 700">钻石赞助</div>
    </div>

    `.replace(/^    /gm, ""),
    { async: false }
  ),
};

export const en = {
  PageTitle: "Home - ChinaVis 2025",
  Content: marked.parse(
    `
    ## Conference Information

    The China Visualization and Visual Analytics Conference (ChinaVis) is co-launched by scholars and researchers in the visualization field in China. ChinaVis aims to improve the communication of the Visualization and Visual Analytics communities in China and surrounding regions, discuss the direction and opportunity of Visualization and Visual Analytics in the era of big data, promote the development and progress of related research and applications, facilitate the talents training and communication, promote the development of disciplines, and deepen the integration of art and technology. ChinaVis builds a communication platform for famous experts, entrepreneurs, and application departments at home and abroad to satisfy the need of face to face and further discuss frontier technologies and applications of visualization, so that a new ecosystem including producing, learning, researching, and applying can be formed. ChinaVis has been held successfully in Beijing (2014), Tianjin (2015), Changsha (2016), Qingdao (2017), Shanghai (2018), Chengdu (2019), Xi'an (2020), Wuhan (2021), Xining (2022), Chongqing (2023) and Hong Kong (2024), with the presence of domestic and overseas researchers and experts.

    **The 12th China Visualization and Visual Analytics Conference** (ChinaVis 2025) will be held in **Hangzhou, China**, **19 to 22 July 2025**, hosted by China Society of Image and Graphics, Technical Committee on Visualization and Visual Analysis, State Key Lab of CAD&CG of Zhejiang University, Hangzhou Research Institute of AI and Holographic Technology, Hangzhou Dianzi University, China Academy of Art, Zhejiang University of Technology, Communication University of Zhejiang and Hangzhou City University with multiple sponsorships. ChinaVis 2025 will consist of invited lectures, thesis reports, posters, exhibitions, symposiums, and art projects. Renowned experts will deliver reports about the latest progress of related research and applications and introduce the development trend to expand research ideas. Welcome all the research personnel in the relevant areas and industrial community to write articles and attend the conference.

    ## Sponsors

    ### Diamond

    <div style="margin-top: 20px;">
      <img style="height: 150px;" src="{{ AIHLogo }}" alt="Hangzhou Research Institute of AI and Holographic Technology"/>
    </div>
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};
