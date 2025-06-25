import { marked } from "marked";

export const zh = {
  PageTitle: "论文 - ChinaVis 2025",
  Title: "征文通知",
  Content: marked.parse(
    `
    第十二届中国可视化与可视分析大会（ChinaVis 2025）将于2025年7月19日-22日在杭州举行。本次会议由中国图象图形学学会主办，可视化与可视分析专委会、浙江大学计算机辅助设计与图形系统全国重点实验室、杭州全息智能技术研究院、杭州电子科技大学、中国美术学院、浙江工业大学、浙江传媒学院、浙大城市学院等承办，多家赞助单位协办。

    ## 投稿方式

    本次会议征集中英文论文。会议录取的英文技术论文将推荐至SCI期刊《Journal of Visualization》，综述论文推荐至《Visual Informatics》期刊；会议录取的优秀中文技术论文及综述论文将推荐至国内的中文期刊如浙江大学学报（理学版）等。英文稿件格式请参考IEEE VGTC模版要求，中文稿件格式请参考《计算机辅助设计与图形学学报》模版要求。论文正文（不含参考文献）篇幅不超过8页。

    IEEE VGTC模板：https://tc.computer.org/vgtc/publications/conference/

    《计算机辅助设计与图形学学报》模版：http://www.jcad.cn/

    本次会议审稿分为两轮，每篇稿件将由多名领域专家匿名评审。第一轮审稿使用 Precision Conference System (PCS) 系统进行评审，第一轮条件录取的稿件将被推荐到相应期刊。第二轮审稿使用相应推荐期刊的投稿系统进行评审，投稿前作者需按第一轮审稿意见对稿件进行修改。

    PCS系统：https://new.precisionconference.com/chinavis

    所有稿件须以PDF形式提交，为了更好展示交互式可视化系统的动态运行状态与流程，建议同时提交录屏视频文件等附加材料。所有稿件必须是未经发表的原创工作，不得一稿多投。如论文之前经其他国际国内可视化学术会议或期刊审稿并且未予录用，在有实质性修改的基础上，论文作者可以在提交论文同时附上审稿意见，并提供"Cover Letter"阐明论文的改进。

    任何与论文投稿相关的问题，请联系：chinavispaper@163.com

    ## 征稿范围

    征稿范围（包括但不局限于）：

    - 科学可视化
    - 信息可视化
    - 可视分析
    - 可视化数据处理和加工
    - 可视化中的交互设计与显示技术
    - 可视化设计与系统
    - 交互设计与用户体验
    - 可视化艺术设计
    - 可视化评估与认知
    - 大（规模）数据可视分析
    - 可视化与可视分析理论
    - 可视化与可视分析应用
    - 智能可视化与可视分析
    - 可视化领域前沿综述

    ## 时间节点

    - 摘要提交截止日期 (PCS 系统)：2025 年 5 月 10 日 北京时间下午 11:59
    - 论文提交截止日期 (PCS 系统)：2025 年 5 月 15 日 北京时间下午 11:59
    - 论文第一轮评审结果通知日期：2025 年 6 月 20 日 北京时间下午 11:59
    - 论文提交期刊审稿系统日期：2025 年 7 月 10 日 北京时间下午 11:59 (暂定)

    ## 大会主席

    **陈　为**　浙江大学

    **屈华民**　香港科技大学

    ## 论文主席

    **孙国道**　浙江工业大学

    **李晨辉**　华东师范大学

    **陈思明**　复旦大学

    **孙效华**　南方科技大学
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};

export const en = {
  PageTitle: "Call for Papers - ChinaVis 2025",
  Title: "Call for Papers",
  Content: marked.parse(
    `
    The 12th China Visualization and Visual Analytics Conference (ChinaVis 2025) will be held in Hangzhou, China, from July 19 to 22, 2025. The conference is hosted by China Society of Image and Graphics, Technical Committee on Visualization and Visual Analysis, State Key Lab of CAD&CG of Zhejiang University, Hangzhou Institute for Advanced Study in Holographic Intelligence, Hangzhou Dianzi University, China Academy of Art, Zhejiang University of Technology, Communication University of Zhejiang and Hangzhou City University with multiple sponsorships.

    ## Submission Guide

    This conference accepts papers in both Chinese and English. Accepted English technical papers will be recommended to the SCI journal Journal of Visualization, and review papers will be recommended to the journal Visual Informatics. Outstanding Chinese technical and review papers accepted by the conference will be recommended to domestic Chinese journals such as Journal of Zhejiang University (Science Edition). For English manuscripts, please refer to the IEEE VGTC template requirements, and for Chinese manuscripts, please refer to the Journal of Computer-Aided Design & Computer Graphics template requirements. The main text of the paper (excluding references) should not exceed 8 pages.

    IEEE VGTC Template: https://tc.computer.org/vgtc/publications/conference/

    Journal of Computer-Aided Design & Computer Graphics Template: http://www.jcad.cn/

    The review process for this conference consists of two rounds. Each submission will be anonymously reviewed by multiple experts in the field. The first round of reviews will be conducted using the Precision Conference System (PCS), and conditionally accepted papers from the first round will be recommended to the corresponding journals. The second round of reviews will be conducted using the submission system of the recommended journals. Before the second round of submission, authors must revise their papers according to the feedback from the first round of reviews.

    PCS System: https://new.precisionconference.com/chinavis

    All submissions must be in PDF format. To better demonstrate the dynamic operation and workflow of interactive visualization systems, it is recommended to submit additional materials such as screen recording videos. All submissions must be original and unpublished work, and simultaneous submissions to other venues are not allowed. If the paper has previously been reviewed by other international or domestic visualization conferences or journals and was not accepted, the authors may submit the revised paper along with the previous review comments and provide a "Cover Letter" explaining the improvements made.

    For any questions related to paper submissions, please contact: chinavispaper@163.com

    ## Topics

    Topics of interest (include but not limited to):

    - Scientific Visualization
    - Information Visualization
    - Visual Analytics
    - Visualization of Data Processing and Transformation
    - Interaction Design and Display Technology in Visualization
    - Visualization Design and Systems
    - Interaction Design and User Experience
    - Visualization Art Design
    - Visualization Evaluation and Cognition
    - Big (Large-scale) Data Visual Analytics
    - Theory of Visualization and Visual Analytics
    - Applications of Visualization and Visual Analytics
    - Intelligent Visualization and Visual Analytics
    - Reviews of Frontier Visualization Techniques

    ## Timeline

    - Abstract Submission Deadline (PCS System): May 10, 2025, 11:59 PM Beijing Time
    - Paper Submission Deadline (PCS System): May 15, 2025, 11:59 PM Beijing Time
    - Notification of First Round Review Results: June 20, 2025, 11:59 PM Beijing Time
    - Paper Submission to Journal Review System: July 10, 2025, 11:59 PM Beijing Time (Tentative)

    ## Conference Chairs

    **Wei Chen**, Zhejiang University

    **Huamin Qu**, Hong Kong University of Science and Technology

    ## Paper Chairs

    **Guodao Sun**, Zhejiang University of Technology

    **Chenhui Li**, East China Normal University

    **Siming Chen**, Fudan University

    **Xiaohua Sun**, Southern University of Science and Technology
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};
