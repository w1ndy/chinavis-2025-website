import { marked } from "marked";

export const zh = {
  PageTitle: "海报 - ChinaVis 2025",
  Title: "海报项目",
  Content: marked.parse(
    `
    第十二届中国可视化与可视分析大会 (ChinaVis 2025) 将于 2025 年 7 月 19 日至 22 日在杭州举行。ChinaVis 2025 ⼤会海报环节旨在通过交互、动态地展现最新的可视化研究成果及思路，增进可视化领域学者间的相互交流。大会海报环节鼓励提交任何与可视化相关的工作，可以是未经正式发表或正在进行中的工作，也可以是已经正式发表的能触发新思考的优秀工作。海报征集范围包括可视化与可视分析中的任何研究方向（但不局限于）：

    - 可视化与可视分析理论
    - 科学可视化新⽅法
    - 信息可视化新⽅法
    - 人机交互与可视化方法
    - AI+VIS
    - 可视化故事叙述方法
    - 可视分析新⽅法
    - 可视知识表达与发现
    - 可视化评估⽅法与理论
    - 各类数据的可视化表达
    - 可视数据管理
    - 可视查询与挖掘
    - 交互可视化技术和设备
    - 大数据可视化与可视分析技术和系统
    - 科学与工程模拟建模及可视化
    - 可视化显⽰技术
    - 可视化与可视分析系统
    - 可视化应用（包括自然科学和社会科学）

    ## 海报投稿⽅式

    海报投稿请打开 https://send2me.cn/Ucm-fQ-G/Q1OYOoCb7BAEKg 链接提交，提交⽂件中需包含：

    - 2 页⼯作总结，命名为 ChinaVis2025_Poster_FirstAuthorName_BriefTitle_2Page.pdf
    - 海报设计草稿 (PDF），命名为 ChinaVis2025_Poster_FirstAuthorName_BriefTitle.pdf

    提交⽂件说明：2 页⼯作总结应参照 IEEE VIS 格式。语⾔可以是中⽂或者英⽂，内容须包含简短的研究思路、研究结果或发现、⽀持性图⽰，以及此⼯作对其应⽤领域产⽣的影响的讨论。不需要列举⾮常全⾯的⽂献，但需要提供最相关的⽂献。我们建议作者提交⼀个能概括海报⼯作的视频。 海报可以是中文与英文（尤其鼓励英文海报投稿）。

    海报必须以纵向格式呈现，尺⼨不能超过A0纸的⼤⼩（841 毫⽶ * 1189 毫⽶或 33.1 英⼨ * 46.8 英⼨）。语⾔可以是中⽂或者英⽂。在提交总结时，应同时提交海报的设计草稿 （PDF 格式）。

    **VGTC会议模板：https://tc.computer.org/vgtc/publications/conference/**

    ## 重要⽇期

    - 征稿截⽌： 2025 年 6 月 26 日
    - 录⽤通知： 2025 年 7 月 10 日
    - 最终版提交：2025 年 7 月 15 日

    所有截止时间均为北京时间 23:59。

    ## 海报展示

    被录⽤海报必须有（至少⼀位）作者注册会议，并到会参与海报展⽰和交流讨论。作者应⾃⾏打印⽤于会议张贴的海报，并带⾄会议指定地点粘贴。展⽰期间作者应在海报展⽰地和与会者进⾏交流讨论。若有相关视频或现场演⽰，作者需⾃⾏准备笔记本等相关设备。

    ## 最佳海报

    海报主席将根据评审意见评出一个“最佳海报”及数个“最佳海报提名”并颁发证书。

    ## 海报主席

    **曾　伟**　香港科技大学（广州）

    **俞凌云**　西交利物浦大学

    **马昱欣**　南方科技大学
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};

export const en = {
  PageTitle: "Posters - ChinaVis 2025",
  Title: "Call for Posters",
  Content: marked.parse(
    `
    The 12th China Visualization and Visual Analytics Conference (ChinaVis 2025) will be held in Hangzhou from July 19th to 22nd, 2025. ChinaVis Poster Program aims to promote communication between scholars in visualization with interactive and dynamic presentation on the latest results and ideas of visualization research. The ChinaVis 2025 Poster Program encourages the submission of any work related to visualization, especially those that have not been officially published and are in progress, or published that can trigger new thinking through visualization. The Poster Program welcomes any topics in visualization and visual analytics, including but not limited to:

    - Visualization and visual analysis theory
    - New methods of scientific visualization
    - New methods of information visualization
    - New methods of visual analysis
    - Visual knowledge representation and discovery
    - Visualization evaluation method and theory
    - Visual representation of various types of data
    - Visual data management
    - Visual query and mining
    - Interactive visualization technology and equipment
    - Big data visualization and visual analysis techniques and systems
    - Scientific and engineering simulation and visualization
    - Visual display technology
    - Visualization and visual analysis system
    - Applications of visualization (including natural sciences and social sciences)


    ## Submission Instructions

    To submit a poster, please open the following link https://send2me.cn/Ucm-fQ-G/Q1OYOoCb7BAEKg and upload the required files, which should include:

    - A two-page summary of your poster named as: ChinaVis2025_Poster_FirstAuthorName_BriefTitle_2Page.pdf
    - The sketch of your poster layout (in PDF format) named as: ChinaVis2025_Poster_FirstAuthorName_BriefTitle.pdf


    Authors of each poster are required to submit a two-page summary in the IEEE VIS format: https://tc.computer.org/vgtc/publications/conference/ The summary can be written in either Chinese or English. The summary needs to include an introduction of the research motivation, results, findings, illustrations, and a discussion of the broader impact to application domains. It is not necessary to include a comprehensive list of references, but it is required to cite the most relevant literature in the 2-page summary. In addition, we highly recommend the authors to include a video that highlights the research work. The video submission can be made by including an online link to the video.

    The orientation of the poster must be portrait (taller than wide), and the dimension may not exceed A0 paper size (841 mm x 1189 mm / 33.1 in x 46.8 in). The language can be either Chinese or English. The design sketch (in PDF format) must be submitted together with the two-page summary.

    **VGTC conference template: https://tc.computer.org/vgtc/publications/conference/**

    ## Important Dates

    - Submission deadline: Jun. 26, 2025
    - Notification of acceptance: Jul. 10, 2025
    - Final submission of camera ready versions: Jul. 15, 2025


    All deadlines are at 23:59 Beijing Time.

    ## Poster Presentation

    At least one author of each poster should be registered for the conference and be available at the poster to discuss their work during the poster session. The authors must print the poster and hang the poster at the designated location at the conference venue. During the poster session, the authors should plan to present their work and discuss with attendees. Please bring a laptop to the poster session if you plan to show live demos or videos.

    ## Best Poster Awards

The poster chairs will award a "Best Poster" award and several "Best Poster Honorable Mention" awards based on the review comments, and present certificates accordingly.

    ## Poster Chairs

    **Zeng Wei**, Hong Kong University of Science and Technology (Guangzhou)

    **Yu Lingyun**, Xi'an Jiaotong-Liverpool University

    **Ma Yuxin**, Southern University of Science and Technology
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};
