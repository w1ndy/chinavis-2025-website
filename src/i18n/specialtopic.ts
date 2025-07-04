import { marked } from "marked";

export const zh = {
  PageTitle: "专题 - ChinaVis 2025",
  Title: "专题征题通知",
  Content: marked.parse(
    `
    ## 征集信息

    中国可视化与可视分析大会（ChinaVis）组织专题报告会，就当前可视化与可视分析领域研究的重要问题和新方向开展研讨。在过去几年中，大会组织的专题报告会涵盖可视化理论方法、交互技术、学科发展、教育科普，和人工智能、艺术设计等交叉学科，以及安全、时空、行业应用等各个方面。2025 年将在过去选题的基础上，进一步深入和拓展方向，特别是数字人文、人工智能和可视化融合的内容。

    各专题报告会的时长为 1 小时 30 分钟。每个专题邀请 4 位相关专家讲者，每位演讲时间为 20 分钟；报告会还可邀请更多专家学者一起开展点评和讨论。每个专题报告会的预留讨论时间为 10 分钟。实际具体时间分配由各专题报告会调整。大会安排各专题报告会时间段为 2025 年 7 月 20 日下午及 7 月 21 日下午。

    在此我们公开征集 ChinaVis 2025 专题报告会的选题。有意向的申请人需提交包括专题题目、摘要和相关全部演讲或点评专家信息（姓名、工作单位、个人简介和照片）的文档。专题报告会特别鼓励可视化与可视分析的新领域、交叉领域的主题。主申请者本人不必要是报告会讲者，但提交专题申请信息前需要获演讲专家同意。每一位入选专题讲者需要和其他参会者同样进行会议注册，大会将授予讲者证书，并邀请参加相关招待宴会。提交申请材料（附件：<a href="/2025/specialtopic/info.docx" target="_blank">专题信息表.docx</a>）或咨询请发送电子邮件至 chinavis.topic@gmail.com。

    ## 重要日期

    - 提交截止：2025 年 6 月 17 日 北京时间下午 11:59
    - 结果通知：2025 年 6 月 22 日 北京时间下午 11:59

    ## 联系人

    **袁晓如**　北京大学

    **陶　钧**　中山大学

    联系邮箱：chinavis.topic@gmail.com
  `.replace(/^    /gm, ""),
    { async: false }
  ),
};

export const en = {
  PageTitle: "Special Topics - ChinaVis 2025",
  Title: "Special Topics - Call for Proposals",
  Content: marked.parse(
    `
    ## Introduction

    The 12th China Visualization and Visual Analytics Conference (ChinaVis 2025) will be held in Hangzhou, China, 19 to 22 July 2025, hosted by China Society of Image and Graphics, Technical Committee on Visualization and Visual Analysis, Zhejiang University, Hangzhou Research Institute of AI and Holographic Technology, Hangzhou Dianzi University, China Academy of Art, Zhejiang University of Technology, Communication University of Zhejiang and Hangzhou City University with multiple sponsorships.

    The special topics at the ChinaVis conference are designed to discuss state-of-the-art research progress and key challenges in visualization and visual analytics. In the past ChinaVis conferences, the topics of special sessions included visualization theory and methods, interaction technology, discipline development, education and popular science, interdisciplinary fields such as artificial intelligence and art design, as well as safety, space-time, industry applications and other aspects. In 2025, based on the topics selected in the past, further in-depth and expanded directions will be carried out, especially in the content of digital humanity, artificial intelligence, and visualization integration.

    ## Special Topic Format

    Each special session is 90 minutes long, usually with four speakers for a 20-minute presentation each (if necessary, a few experts and scholars for discussion and comments in a short panel), and 10 minutes for Q&A. The schedule could be adjusted by each symposium. The sessions will be held in the afternoons of July 20th and 21th, 2025.

    ## Proposal Information

    We are open to calls for topics for ChinaVis 2025 special topics. Each proposal should include information about the organizer(s) of the proposed session, the topic title, a brief introduction, and information about the speakers or panel experts (name, institute, short bio, and profile photo). New areas of visualization and interdisciplinary topics are particularly encouraged. The organizer(s) should contact all speakers for approval before the submission. All speakers need regular conference registration if the proposal is approved. Session organizers and speakers will receive appreciation certificates from the conference. A special banquet will be arranged for all invited speakers.

    Please email chinavis.topic@gmail.com for proposal submission (Attachment: <a href="/2025/specialtopic/info.docx" target="_blank">Information Table of Special Topics</a>) or questions.

    ## Important Dates

    - Submission Deadline: June 17, 2025, 11:59 PM (Beijing Time)
    - Notification of Acceptance: June 22, 2025, 11:59 PM (Beijing Time)

    ## Chairs

    **Xiaoru Yuan**, Peking University

    **Jun Tao**, Sun Yat-sen University

    Email: chinavis.topic@gmail.com
  `.replace(/^    /gm, ""),
    { async: false }
  ),
};
