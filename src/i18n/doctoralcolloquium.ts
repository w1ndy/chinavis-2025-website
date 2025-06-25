import { marked } from "marked";

export const zh = {
  PageTitle: "博士生论坛 - ChinaVis 2025",
  Title: "博士生论坛",
  Content: marked.parse(
    `
    ChinaVis 2025 博士生论坛是为博士研究生提供一个浓厚的学习氛围，在与同行和专家探讨个人研究课题的过程中，获得前沿知识和专业性指导的平台。同时，该论坛也为博士研究生提供了与领域专家密切交流和合作的机会。我们鼓励正在探索或已确定学位论文研究方向的博士研究生申请参加，但仅限通过申请者参加。

    ## 申请信息

    我们欢迎符合 ChinaVis 论文征稿研究方向的博士生参加本论坛。申请者需要提交与其博士学位论文研究工作相关的申请材料：

    **1) 学位论文研究总结**

    学位论文研究总结应不超过 4 页，类似于博士开题报告，可以包括但不限于：简介、相关工作、方法、初步结果、工作计划以及希望专家解答的问题等。请明确说明已完成和未完成的工作，并说明希望从专家获得的反馈。研究总结格式参考 IEEE VGTC 的论文格式（https://tc.computer.org/vgtc/publications/journal/ ），作者为申请的学生。

    **2) 指导教师签名的简短声明**

    指导教师应在简短声明中表明自己支持该学生参加本次博士生论坛，并说明该学生的学位论文进展情况、预期毕业日期等信息。该声明应附加在学位论文研究总结的后面。

    ## 注意事项

    1. 申请材料提交至邮箱 chinavisdc@163.com 。
    2. 申请材料通过同行评议，根据与博士生论坛的相关性、研究方向等做出选择。
    3. 博士生论坛包括：研究工作汇报、与博士生论坛专家小组成员讨论等多个环节。
    4. 申请通过的材料不会在网上公开，仅在博士生论坛期间打印供论坛专家查阅。
    5. 只有申请通过的博士生才能参加博士生论坛及其有关的所有活动，并获得博士生论坛证书。

    ## 重要日期

    **申请提交截止时间：** 2025 年 6 月 25 日 北京时间下午 11:59

    **评审结果公布时间：** 2025 年 6 月 30 日

    **博士生论坛时间：** 2025 年 7 月 19 日

    ## 博士生论坛主席

    **陶煜波**　浙江大学

    **李　权**　上海科技大学
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};

export const en = {
  PageTitle: "Doctoral Colloquium - ChinaVis 2025",
  Title: "Doctoral Colloquium - Call for Participation",
  Content: marked.parse(
    `
    The ChinaVis 2025 Doctoral Colloquium (DC) provides a stimulating learning environment for doctoral students to discuss their research topics with peers and experts, and to obtain cutting-edge knowledge and professional guidance. The colloquium also offers opportunities for doctoral students to engage in close communication and collaboration with domain experts. We encourage doctoral students who are exploring or have already determined the direction of their thesis research to apply, but attendance is limited to accepted applicants only.

    ## Submissions

    We welcome doctoral students who meet the research direction for paper submissions to ChinaVis to participate in this colloquium. Applicants are required to submit application materials related to their doctoral thesis research work:

    **1) A Summary of Thesis Research**

    The summary should adhere to the format typically employed by universities for a thesis proposal. It must include an introduction, a related work section, preliminary methods, a research plan, proposed work, and inquiries for the panel, among other components. A clear distinction must be made between work that has already been completed and work that remains to be completed. The summary should not exceed four pages and must conform to the formatting guidelines of the IEEE VGTC template (https://tc.computer.org/vgtc/publications/journal/). The summary should have only one author, namely, the student who is submitting the entry.

    **2) A Short, Signed Statement from the Student's Advisor**

    The accompanying statement is required to affirm the endorsement of the student's advisor regarding the student's participation in the colloquium, and to assert that the student is well-positioned to derive benefits from such participation. The statement ought to furnish particulars regarding the current stage of the student's doctoral project and the anticipated date of completion. Moreover, the statement must be attached to the student's submission in PDF format.

    ## Notes for Applicants

    - Please submit your application to chinavisdc@163.com.
    - Student submissions will be peer-reviewed, and selections will be made based on their contribution to the colloquium goals, strength of research direction, etc.
    - The colloquium will consist of student presentations, discussions with expert panelists, etc.
    - Accepted submissions will be not published online, and only be printed for the expert panelists at the colloquium.
    - Only accepted applicants will be allowed to participate in the colloquium as well as other related events, and each participating applicant will receive a certificate.

    ## Important Dates

    **DC Submission Deadline:** June 25, 2025 11:59 PM GMT+8 (Beijing Time)

    **DC Submission Notification:** June 30, 2025

    **Doctoral Colloquium Date:** July 19, 2025

    ## Doctoral Colloquium Chairs

    **Yubo Tao**, Zhejiang University

    **Quan Li**, ShanghaiTech University
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};
