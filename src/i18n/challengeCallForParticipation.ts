import { marked } from "marked";

export const zh = {
  PageTitle: "可视化竞赛 - ChinaVis 2025",
  Title: "数据可视化竞赛征稿通知",
  Content: marked.parse(
    `
    ## 数据可视化竞赛简介

    数据可视化竞赛是中国可视化与可视分析大会的一个重要环节。竞赛邀请研究人员、开发人员、学生和爱好者使用他们最有效的可视化与可视分析技术和工具来完成数据分析以及可视化任务。竞赛旨在帮助研究人员、开发人员、学生和爱好者评估他们的技术和工具在解决复杂问题中的有效性、新颖性和艺术性，并促进我国可视化与可视分析相关研究与应用的发展与进步。

    ## 数据可视化竞赛内容

    本次数据可视化竞赛提供两个赛道，参赛选手可以选择其中的对应赛题进行比赛。每个赛道单独设定评委成员。

    ### 赛道1：人文数据可视分析与可视化创意挑战赛

    #### 赛道1-I：「析城观史」可视分析挑战赛

    北京，这座拥有三千多年建城史、八百多年建都史的东方古都，自古以来便是中国政治、文化与交通的核心枢纽。其城市演化不仅仅是朝代更替、建制更迭的宏观展演，更深刻地体现在水脉走向的变迁、气候环境的波动、人口与产业的集聚流动，以及自然灾害与战争冲突带来的剧烈冲击中。这些多元且交织的时空因素，共同塑造了北京的空间格局与城市功能，也见证了中华文明在北方平原上绵延不绝的历史厚度与动态变迁。伴随着历史地理信息系统（HGIS）、文献数字化整理、语义标注与知识图谱构建等新一代技术的发展，学者与公众得以跨越时间限制，系统性地重构北京在不同时空尺度下的演化轨迹。这一技术进步为我们多维度理解北京“如何成为今天的北京”提供了前所未有的可能。本次可视分析挑战赛聚焦于北京历史时空演变过程，涵盖了包括水系、气候、植被、灾害、人口、物产、交通、战争、建制沿革、商业手工业与重大历史事件等在内的多源异构时空数据。我们鼓励参赛者突破传统线性历史叙述的限制，充分利用数据分析与可视表达的手段，多维度还原北京城市发展的复杂时空演化模式等，为理解历史演变提供新视角，并为当代城市治理与未来发展带来一些启示。请参赛者设计并实现一套可视分析解决方案，具体完成以下内容：

    - 请结合水系、气候等自然地理数据，从时空维度刻画北京生态环境的长期演化轨迹。通过图表展示如河流改道、气候波动、植被覆盖变化等重要趋势，揭示其对城市格局演化、人类活动聚落及生计方式的影响。（建议参赛者回答此题文字不多于800字，图片不多于5张）
    - 灾害、战争、大事件等常是城市变迁的重要触发因素，在完成生态环境基础描绘的前提下，请基于自然灾害记录、战争、以及大事件等数据，构建重大事件的时空分布图，识别其与城市建成区扩展、人口迁移、政权更替等关键变量的关联性等，以揭示冲击事件如何塑造城市演变轨迹。（建议参赛者回答此题文字不多于800字，图片不多于5张）
    - 在理解环境与外部冲击的基础上，聚焦城市系统内部的持续演进机制，请整合历史人口数据、交通与代表性物产分布记录，分析人口增长与流动、交通通达性变化、区域资源禀赋等因素如何协同驱动北京功能核心与城市空间结构的形成与演化。（建议参赛者回答此题文字不多于800字，图片不多于5张）
    - 为进一步探讨城市治理结构和经济组织对城市形态的深层影响。请依据建制沿革记录与商业手工业活动分布数据等，梳理北京各历史时期的行政区划变迁、城市职能转变与经济活动中心的空间重构过程，分析制度逻辑如何嵌入城市空间与生产网络之中。（建议参赛者回答此题文字不多于800字，图片不多于5张）
    - 在上述多维因素分析基础上，请围绕如制度改革、灾变等关键历史节点，构建具有时空双重线索的事件叙事图谱，并将其与前四项任务中提取的因素进行联动展示。总结北京城市演化中的共性机制、关键转折点与制度经验，探索其对当代城市可持续发展与空间治理的启示。（建议参赛者回答此题文字不多于800字，图片不多于5张）

    **提供数据：详细信息请见赛道1数据。**

    **<span style="color: #de0000; font-weight: 700">注：本赛道赛题I数据集为指定数据集，请勿使用自选数据集。</span>**

    #### 赛道1-II：「怀古论今」人文可视化创意赛

    北京作为具有“三千年建城史，八百年建都史”的历史文化名城，其城市空间在历史变迁之中积淀了深厚且丰富的“文化地层”。城市演变不仅带来了城市形态、空间布局、区位功能等城市物质结构方面的变化，也带来了空间认知、市文学、城市图像等文化层面的演变与充盈，更促生了独具特色的风土人情、生活方式、民俗信仰……在这多重演变过程中，“地标”成为城市政治、经济、文化、宗教、艺术等各类事件发生的“场所”，同时也成为时人谈论的“话题”以及承载地方“文化记忆”的载体与符号。

    在人文学科“空间转向”的理论背景，以及以文献和图像数字化、3D建模、历史地理信息系统（HGIS）、知识图谱、人工智能等技术背景下，研究者、图博档从业者能够从数字人文的角度，对城市历史信息进行深度挖掘、知识重构、叙事建构、历史重现，从多个维度构建城市的多重空间网络。本赛道聚焦于北京城市空间中的“文化地标”，并提供了历史事件、水系、气候、植被、灾害、人口、物产、交通、战争、建制沿革、商业手工业、人物、建筑等多种文本数据。我们鼓励参赛者从数字人文视角出发，应用本赛题提供的数据或自行整理的新数据，充分发挥数据可视化的优势，为城市地标文化信息的深度挖掘、阐释与呈现提供新的视角与创意，以人文视角和数字方法挖掘城市地标文化信息，进行历史重建。具体完成以下内容：

    - 文化地标生命历程及其历史重建：文化地标往往以“不可移动文物”的面貌呈现在我们面前，但它实际上是一系列历史进程的最终结果——历经营造、改建、毁坏、重修乃至搬迁，其生命历程又往往与时代思潮、政治环境、文化氛围、历史人物等紧密相关。请结合具体的北京文化地标，以数据挖掘、视觉呈现等方式，展现北京文化地标的“生命历程”。
    - 文化地标影响力及重要性评估：什么因素使得一个文化地标变得重要？文化地标因何获得广泛得影响力和认知度？众多官方评级、大众讨论、文本书写都试图回答这些问题。请从多个角度构建文化地标评价体系，对北京文化地标的重要性、影响力、认知度（包括但不限于）等进行评价。我们鼓励参赛者不仅关注历史文化因素，更要关注文化地标的日常性、当代性特征，不仅回答“文化地标在历史进程中获得怎样的文化价值”，更要回答“我们今天在塑造怎样的未来遗产，为文化地标附益怎样的当代价值
    - 作为叙事场所的文化地标：一个文化地标往往与某些事件、人物、活动等联系在一起形成种种记载、传闻、轶事、风俗……它们构成了文化地标最鲜活的一部分。请基于文化地标与多种文化因素（包括但不限于人物、事件）的联系，以数据驱动+创意叙事的方式，讲述北京文化地标的传奇故事。

    **提供数据：详细信息请见赛道1数据。**

    **<span style="color: #de0000">注：本赛道赛题II可选用指定数据集或自选数据集。</span>**

    ### 赛道2：艺术可视化竞赛

    #### 主题：“杭州 · 潮生万象”

    2025年第十二届中国可视化与可视分析大会艺术项目（China VISAP'25）将在杭州举行，与第十二届中国可视化与可视分析大会（China Vis) 会议同步进行。本届艺术项目包含：艺术展览、学生竞赛、创作工作坊、专题讲座以及一系列由艺术家、设计师与可视化科学家发起的精彩分享，旨在探索可视化艺术的未来方形和全新视野。

    本届主题“潮生万象”，旨在以“潮”为时代精神，“万象”迭涌，玄览古今。杭州以“潮”闻名，更以其独特的三重世界遗产格局（西湖、大运河、良渚古城）奠定其在人类文明史上的坐标。从新石器时代良渚玉琮的信仰图腾，到南宋临安的《西湖清趣图》笔意，再到明代丝绸之府的织机声，这座城市始终是中国古典美学的最高表达。而今，杭州更以数字文明实验室的姿态重塑未来：阿里巴巴的电商生态与蚂蚁链技术辐射全球，西湖大学引领合成生物与AI制药前沿，云栖小镇聚集了中国1/3的云计算算力。这里既有国家级工业设计中心数量之冠（占全国12%），也孕育了吉利极氪、零跑汽车的智能电动化浪潮；既诞生了挑战3A游戏边界的《黑神话：悟空》，也孵化了全球AI开源平台DeepSeek（深度求索）。当MCN机构在运河畔直播带货时，数字游民正用区块链技术激活乡村遗产——传统与未来在此缝合，正如西湖山水与钱江新城的天际线，构成一部“潮生万象”风云叱诧的文明史诗。

    China VISAP'25 愿与你一起在杭州发起一场以社会为现场，以数据为媒材，以视觉为语言的行动，期待我们可视、可感的珍贵相遇，能凝结出一种独特的知识生产范式，来共同面对这个潮生潮涌、万象奥妙的可能世界。"

    #### 艺术可视化竞赛

    艺术可视化竞赛是中国可视化与可视分析大会的一个重要环节，与可视分析挑战赛共同构成大会的数据可视化竞赛，旨在促进中国艺术可视化创作与研究的交流合作，推进人才培养。艺术可视化竞赛指定主题范围，邀请国内外学习艺术、设计及可视化的高校学生，运用自己最擅长的表现手法，在规定期限内完成艺术可视化创作。竞赛设置一系列的奖项，颁发给优秀、新颖的创作作品。

    竞赛对于表现手法不做限定，旨在鼓励学生最大程度的发挥想象和自由创意。艺术可视化作品要求基于真实数据，并提供原始数据片段作为评价参考。作品评估的标准在于参赛队是否能够通过视觉或听觉形式有效表现一个以数据为依据的艺术思想、观点或者概念。

    提交的可视化作品中允许包含由人工智能生成的内容，鼓励利用新的智能化、数字化技术探索和推动可视化创作流程与呈现形式的新方法。但请注意，作者需对人工智能生成的内容进行明确标记说明。评审委员会将会对生成内容与主题的相关性及是否违反法律，道德和公共秩序进行评估。

    2025年中国可视化与可视分析大会艺术项目委员会向艺术家、设计师、研究人员、高校师生等各界专业人士发起号召，鼓励创作和提交有关“潮生万象”的艺术设计作品，展现可视化领域多维度的探索和精彩。该赛道要求作者在“潮生万象”的年度主题范围内，自行选择相关数据集进行艺术可视化的创作。对表现手法不做限定，旨在鼓励学生最大程度的发挥想象和自由创意，鼓励创作和提交有关“潮生万象”的艺术设计作品，展现可视化领域多维度的探索和精彩。

    该赛道作品将由国内艺术可视化专家团进行评审，评价原则是，参赛队是否能够通过视觉、听觉等艺术形式，有效表现以自选数据为依据的艺术思想、观点或者概念。

    ## 参赛须知

    ### 报名须知

    欢迎全国普通高等学校（含高职）和科研院所的师生和研究人员、企事业单位的开发人员和设计师、以及可视化与可视分析的爱好者、艺术家等参与竞赛。参赛者以组队的方式报名参赛：

    - **赛道1：** 每队参赛者不能超过6人，外加1-2名指导老师；
    - **赛道2：** 每队参赛者不能超过4人，外加1-2名指导老师。

    队名规则：“单位-队长姓名”或“爱好者队-队长姓名”。例如：“天津大学-张三”、“爱好者队-李四”。每个参赛队排名第一的参赛者为队长，负责沟通事宜。非科研院所、企事业单位等单位名称请填写“爱好者队”（爱好者队表示参赛者是以个人身份组建的参赛队伍）。

    ### 报名方式

    - 竞赛采取线上报名方式，报名入口：[https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc75](https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc75)
    - 报名信息包括：通讯Email，队名，参赛人员（队长、队员、指导老师）、手机号、Email、单位（学校学院等）、职称（学历年级等）。
    - 获奖证书署名按报名顺序印刷，学生在前，指导老师在后。
    - 一个Email只能注册一个参赛队伍，参赛队伍编号唯一，并与通讯Email绑定。
    - 忘记编号可在提交页面根据所填Email查询，请务必记住参赛的通讯Email。

    ### 投稿须知

    竞赛作品提交采取线上提交方式，请点击提交入口链接进行作品提交，尽量避免在截止日期高峰期提交作品。

    **提交入口：**

    **赛道1-I 作品提交链接（可视分析）：**[https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc76](https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc76)

    **赛道1-II 作品提交链接（人文创意）：**[https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc6a](https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc6a)

    **赛道2 作品提交链接（艺术可视化）：**[https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc6a](https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc6a)

    - 提交信息包括：参赛队伍编号、作品赛道及主题、作品名称、作品摘要（100字）以及作品提交内容。
    - 如更新作品，请用同一参赛编号再次提交作品即可，以同一参赛编号最后一次提交的同队名作品为准。作品名称以最后一次提交和作品说明文档为准。
    - 建议参考往年优秀作品，具体见“历届挑战赛优秀作品回顾”；也可以参考IEEE VIS Conference组织的IEEE VAST Challenge的入选作品，作品库见：[http://cs.umd.edu/hcil/varepository/benchmarks.php](http://cs.umd.edu/hcil/varepository/benchmarks.php)；关于挑战赛2015-2017相关信息请参看文档[“数据可视分析挑战赛三年回顾”](http://t.cn/EflGyVM)。

    ### 作品提交材料要求

    #### 赛道1-I：

      1. **作品说明文档：** 赛道1要求参赛者根据组织方提供的文档推荐模板，用图文并茂的方式介绍作品，以Word或PDF格式提交。
      2. **视频：** 赛道1要求参赛者制作带解说视频，围绕作品解释其可视分析流程，视频总长度不超过5分钟，视频数量1个，限MP4格式，视频大小严格要求控制在50M以内。
      3. **作品代表性图片：** 请提供高清版本1张，限JPG格式，多图请拼接，图片大小不超过20M。

    #### 赛道1-II和赛道2：

    1. **作品解读（评审用）：**
        - 1份 限pdf 文件，<10MB。
        - 对参赛作品的必要创作解读或解说，包括原始数据的说明、作品截图及解读。
    2. **作品文件（评审用）：**
        - 作品视频或解说视频，务必提供在线链接。
        - 代表性作品图片1张，图像格式作品限制 *.jpg / *.png 类型，单张图片<20MB。
    3. **作品高清文件下载链接（展览用）：**
        - 包括全部作品高清文件、作品解读。
        - 建议百度云，确保评审期内链接有效。
        - 视频格式作品限制 *.mp4 / *.mov / *.avi 类型，<50MB。
        - 图像格式作品限制 *.jpg / *.png 类型，单张图片<20MB。
        - 只需提交电子版，无需邮寄。

    ## 评审规则

    所有参赛作品将同时提交给可视分析专家、领域专家、可视化相关的艺术家进行综合评审，评审将重点评价参赛作品的主题导向和应用价值，以及参赛作品在交互设计、数据利用程度、社会效益、分析思路与方法等方面的有效性、新颖性和艺术性。

    所有符合资格的团队在活动截止日期前所提交的作品将会得到评审。对于任何在截止日期之后提交的作品竞赛组织方将不予以评审，同时，主办方不对任何因电脑、互联网、移动网络故障而造成的参赛作品损坏、缺失、提交延时等后果承担责任。

    所有参赛作品不能包含违犯国家法律的内容，不能包含暴力、色情等不良内容，凡包含以上内容的作品，竞赛委员会有权利取消该作品参赛资格。

    所有参赛作品必须为本人或本团队原创，不得包含侵犯他人著作权的内容，如参赛作品引起侵权纠纷，一切侵权责任由参赛者承担。

    参赛作者享有参赛作品的版权和著作权，如无特别声明，竞赛委员会有权在大会相关媒介进行宣传、展示、播放。

    参赛作品已经提交后，不得更改参赛者及指导老师姓名。

    如提交的可视化作品中包含由人工智能生成的内容，作者需对人工智能生成的内容进行明确标记说明。

    数据可视化竞赛所提供数据仅限于竞赛作品使用。

    ## 作品等级设置

    竞赛委员会主席将根据专家评审结果，按比例评选出多项精彩作品。在ChinaVis 2025大会上，将为所有入选参赛队颁发等级证书，部分入选参赛队将被邀请在大会竞赛环节做现场报告。

    ## 重要时间节点

    以下时间均指北京时间日末23：59。

    - 网上报名截止时间：**2025年5月30日**
    - 作品提交截止时间：
      - 赛道1-I（可视分析挑战赛）：**2025年6月9日**
      - 赛道1-II（人文可视化创意赛）：**2025年6月16日**
      - 赛道2（艺术可视化竞赛）：**2025年6月2日**
    - 评审结果公布时间：**2025年7月2日**。

    ## 作品说明文档推荐模板和数据集下载

    1. **赛道1-I： 可视分析挑战赛**
        - 作品文档答卷模板 <a href="/2025/challenge/1i_answer_sheet.docx" target="_blank">Download</a>
        - 数据下载链接 <a href="/2025/challenge/dataset.zip" target="_blank">Download</a>（数据可视化竞赛所提供数据仅限于竞赛作品使用）
    2. **赛道1-II：人文可视化创意赛**
        - 数据下载链接 <a href="/2025/challenge/dataset.zip" target="_blank">Download</a>（数据可视化竞赛所提供数据仅限于竞赛作品使用）
    3. **赛道2： 艺术可视化竞赛**
        - 自备数据集，并提供原始数据片段作为评价参考。

    ## 其他说明

    1. 参赛作品不得违反国家相关法律法规，不得侵犯任何第三方知识产权或者其他权利。作品如引起知识产权异议和纠纷，其责任由参赛者承担；
    2. 参赛者可以使用开源或商业数据分析与可视化软件，例如：[DataV](https://data.aliyun.com/visual/datav)、[Tableau](https://www.tableau.com/)、R和Excel等等，鼓励参赛者使用软件开发工具设计并实现自己的可视分析方案或艺术可视化作品，常见的可视化开发工具有[D3](https://d3js.org/)、[ECharts](https://echarts.apache.org/zh/index.html)、[AntV](https://antv.alipay.com/)和Processing等等。请参赛者在作品说明文档中明确写出使用的开发工具和使用的开源或商业软件；
    3. 入选参赛队至少要有1人注册ChinaVis 2025；
    4. 赛道1入选参赛队要求将自己的参赛作品制作为海报，并参加ChinaVis 2025的海报张贴环节，具体要求参照海报环节，赛道2（艺术可视化赛道）的入选作品将参加艺术项目展览；
    5. 参赛作品的知识产权归参赛者所有。大会组织方有权将参赛作品、作品相关资料、参赛团队信息用于宣传品、授权媒体发布、官方网站浏览及下载、展览（含巡展）等活动项目；
    6. 参赛作品已经提交后，不得更改参赛者姓名及顺序。

    ## 可视化竞赛委员会

    **张慧杰**　东北师范大学

    **陈　静**　南京大学

    **张俊杰**　香港科技大学（广州）

    **徐　进**　杭州师范大学

    ## 历届挑战赛回顾

    - [2024年数据可视分析挑战赛](https://chinavis.org/2024/challenge.html)
    - [2023年数据可视分析挑战赛](http://chinavis.org/2023/challenge.html)
    - [2022年数据可视分析挑战赛](http://chinavis.org/2022/challenge.html)
    - [2021年数据可视分析挑战赛](http://chinavis.org/2021/challenge.html)
    - [2020年数据可视分析挑战赛](http://chinavis.org/2020/challenge.html)
    - [2019年数据可视分析挑战赛](http://chinavis.org/2019/challenge.html)

    更多信息可访问历史网站：[http://chinavis.org/history.html](http://chinavis.org/history.html)
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};

export const en = {
  PageTitle: "Data Challenge - ChinaVis 2025",
  Title: "Data Challenge - Call for Participation",
  Content: marked.parse(
    `
    ## Data Challenge Introduction

    The Data Challenge is an important part of the China Visualization and Visual Analytics Conference. The competition invites researchers, developers, students, and enthusiasts to use their most effective visualization and Visual Analytics techniques/tools to accomplish data analysis as well as visualization tasks. The competition aims to evaluate the effectiveness, novelty, and artistry of their techniques and tools in solving complex problems, and promote the development and advancement of research and applications related to visualization and Visual Analytics in China.

    ## Data Challenge Content

    The Data Challenge offers two tracks, of which the participants can choose the corresponding topic to compete. Each track has its own judges.

    ### Track 1: Humanities Data Visual Analytics and Visualization Creative Challenge

    #### Track 1-I: "Analyzing the City, Reading History" Visual Analytics Challenge

    Beijing, an ancient capital of the East with over 3,000 years of urban history and more than 800 years as a dynastic capital, has long been the political, cultural, and transportation heart of China. The evolution of this city is not merely a grand narrative of dynastic changes and administrative restructuring but is profoundly reflected in the shifts of water systems, fluctuations in climate, the aggregation and movement of populations and industries, as well as the dramatic impacts of natural disasters and conflicts. These multifaceted and intertwined spatiotemporal factors have collectively shaped Beijing’s spatial layout and urban functions, bearing witness to the enduring historical depth and dynamic transformations of Chinese civilization on the northern plains.

    With the advancement of new-generation technologies such as Historical Geographic Information Systems (HGIS), digital archival organization, semantic annotation, and knowledge graph construction, scholars and the public can now transcend temporal constraints to systematically reconstruct Beijing’s evolutionary trajectory across different spatiotemporal scales. This technological progress offers unprecedented possibilities for a multidimensional understanding of "how Beijing became what it is today."

    This visual analytics challenge focuses on the historical spatiotemporal evolution of Beijing, incorporating diverse and heterogeneous spatiotemporal data, including water systems, climate, vegetation, disasters, population, local products, transportation, wars, administrative changes, commerce, handicrafts, and major historical events. We encourage participants to break free from the constraints of traditional linear historical narratives, fully leveraging data analysis and visual expression techniques to restore the complex spatiotemporal evolution patterns of Beijing’s urban development from multiple dimensions. This endeavor aims to provide fresh perspectives for understanding historical transformations and offer insights for contemporary urban governance and future development.

    Please design and implement a visual analytics solution to accomplish the following:

    - By integrating natural geographical data such as water systems and climate, depict the long-term evolutionary trajectory of Beijing's ecological environment from a spatiotemporal perspective. Use charts to illustrate key trends, such as river course changes, climate fluctuations, and vegetation coverage shifts, revealing their impact on urban layout evolution, human settlement patterns, and livelihood methods. (Participants are advised to limit their response to no more than 800 words and 5 images.)
    - Disasters, conflicts, and major events often serve as critical catalysts for urban transformation. Building upon the foundational depiction of ecological environments, participants are tasked with constructing spatiotemporal distribution maps of significant events based on datasets documenting natural disasters, wars, and other major occurrences. These visualizations should identify correlations between such events and key urban development variables—including built-up area expansion, population migration, and regime changes—to reveal how disruptive incidents have shaped the city's evolutionary trajectory. (Participants are advised to limit their response to no more than 800 words and 5 images.)
    - Building on an understanding of environmental and external shocks, focus on the internal mechanisms of urban system evolution. Integrate historical population data, transportation networks, and records of key regional products to analyze how factors such as population growth and mobility, changes in transportation accessibility, and regional resource endowments have collectively driven the formation and evolution of Beijing's functional cores and spatial structure. (Participants are advised to limit their response to no more than 800 words and 5 images.)
    - To further explore the deep influence of urban governance structures and economic organization on urban morphology, use historical administrative records and data on commercial and handicraft activities to trace the evolution of Beijing’s administrative divisions, functional transformations, and the spatial restructuring of economic centers across different historical periods. Analyze how institutional logic has been embedded in urban space and production networks. (Participants are advised to limit their response to no more than 800 words and 5 images.)
    - Based on the above multidimensional analyses, construct a dual-temporal-spatial narrative map centered on critical historical junctures, such as institutional reforms or catastrophic events, and link it with the factors extracted from the previous four tasks. Summarize the common mechanisms, pivotal turning points, and institutional lessons in Beijing’s urban evolution, exploring their implications for contemporary urban sustainability and spatial governance. (Participants are advised to limit their response to no more than 800 words and 5 images.)

    **Provided Data: For detailed information, please refer to Track 1 Data.**

    **<span style="color: #de0000">Note: The dataset for Track 1-I is designated, please do not use self-selected datasets.</span>**

    #### Track 1-II: "Reflecting on the Past, Discussing the Present" Visualization Creative Challenge

    Beijing, a historic and cultural city with "three millennia of urban history and eight centuries as a capital," has accumulated profound and rich "cultural strata" within its urban space through historical transformations. The city's evolution has not only brought changes to its physical structure—such as urban form, spatial layout, and locational functions—but has also enriched cultural dimensions like spatial cognition, urban literature, and city imagery, fostering unique local customs, lifestyles, and folk beliefs. Amid these multifaceted changes, "landmarks" have become both the "sites" where political, economic, cultural, religious, and artistic events unfold and the "topics" of contemporary discourse, serving as carriers and symbols of local "cultural memory."

    Against the theoretical backdrop of the "spatial turn" in the humanities and advancements in digital technologies—such as the digitization of texts and images, 3D modeling, Historical Geographic Information Systems (HGIS), knowledge graphs, and artificial intelligence—researchers and professionals in libraries, museums, and archives can deeply mine urban historical data, reconstruct knowledge, build narratives, and recreate history from a digital humanities perspective. This enables the construction of multidimensional spatial networks of the city.

    This competition track focuses on Beijing's "cultural landmarks" and provides diverse textual datasets, including historical events, water systems, climate, vegetation, disasters, population, local products, transportation, wars, administrative changes, commerce and handicrafts, notable figures, and architecture. We encourage participants to adopt a digital humanities approach, leveraging the provided datasets or newly curated data to harness the strengths of data visualization. The goal is to offer fresh perspectives and innovative methods for the in-depth excavation, interpretation, and presentation of urban landmark culture, blending humanistic inquiry with digital techniques to reconstruct history.

    Please complete the following objectives:

    - The Lifecycle and Historical Reconstruction of Cultural Landmarks: Cultural landmarks often appear before us as "immovable cultural relics," yet they are in fact the culmination of complex historical processes—construction, renovation, destruction, restoration, and even relocation. Their lifecycles are deeply intertwined with the intellectual trends, political climates, cultural milieus, and historical figures of their eras. Focusing on specific cultural landmarks in Beijing, employ data mining and visual storytelling to trace their "life journeys."
    - Assessing the Influence and Significance of Cultural Landmarks: What elevates a cultural landmark to importance? How does it gain widespread recognition and impact? Official ratings, public discourse, and textual records all attempt to answer these questions. Develop a multidimensional evaluation framework to assess the significance, influence, and visibility (though not limited to these) of Beijing’s cultural landmarks. We encourage participants to look beyond historical and cultural factors, engaging also with the landmarks’ everyday relevance and contemporary traits. Address not only "what cultural value these landmarks accrued through history" but also "what future heritage we are shaping today, and what modern values we are embedding in them."
    - Cultural Landmarks as Narrative Spaces: A cultural landmark often becomes entwined with events, figures, and activities, spawning records, legends, anecdotes, and customs that form its most vibrant legacy. Using data-driven methods and creative narration, craft compelling stories about Beijing’s landmarks by exploring their connections to diverse cultural elements (including but not limited to people and events).

    **Provided Data: For detailed information, please refer to Track 1 Data.**

    **<span style="color: #de0000">Note: For Track 1-II, participants may use either the designated dataset or self-selected datasets.</span>**

    ### Track 2: Art Visualization Competition

    #### Theme: "Hangzhou · Tide of Myriad Phenomena"

    The 12th China VIS Arts Program (China VISAP'25) will be held in Hangzhou in 2025, concurrently with the 12th China Visualization and Visual Analytics Conference (ChinaVis). This year's Arts Program includes: art exhibitions, student competitions, creative workshops, special lectures, and a series of exciting presentations initiated by artists, designers, and visualization scientists, aiming to explore the future directions and new horizons of visualization art.

    The theme "Tide of Myriad Phenomena" uses "tide" to symbolize the spirit of the times and "myriad phenomena" to represent the ceaseless changes that bridge past and present. Hangzhou is renowned for its tides and is further distinguished by its unique trio of UNESCO World Heritage sites (West Lake, the Grand Canal, and the Liangzhu Ancient City), establishing its coordinates in human civilization. From the Neolithic Liangzhu jade cong's totemic beliefs to the brushwork of the Southern Song Dynasty's "West Lake Scenes" and the looms of the Ming Dynasty's silk workshops, this city has always epitomized the pinnacle of Chinese classical aesthetics. Today, Hangzhou is reshaping the future as a digital civilization laboratory: Alibaba's e-commerce ecosystem and AntChain technologies have global reach, Westlake University leads in synthetic biology and AI-driven drug discovery, and the Yunqi Town cluster houses one-third of China's cloud computing power. It boasts the highest number of national industrial design centers (12% of the country's total) and has nurtured the intelligent electrification wave of Geely's Zeekr and Leapmotor. It is the birthplace of "Black Myth: Wukong," which pushes the boundaries of AAA games, and the incubator of the global AI open-source platform DeepSeek. While MCN agencies livestream commerce along the canal, digital nomads are using blockchain technology to revitalize rural heritage—tradition and future are seamlessly woven together here, much like how West Lake's landscapes merge with Qianjiang New City's skyline to compose a civilization epic of "Tide of Myriad Phenomena."

    China VISAP'25 looks forward to joining you in Hangzhou to launch an initiative that treats society as its stage, data as its medium, and visuals as its language. May our visible, tangible encounters crystallize a unique paradigm of knowledge production, allowing us to collectively engage with this possible world of surging tides and wondrous phenomena.

    #### Artistic Visualization Student Competition

    The Artistic Visualization Competition is a key component of the China Visualization and Visual Analytics Conference, forming the conference's Data Challenge alongside the Visual Analytics Challenge. It aims to foster exchange and collaboration in artistic visualization creation and research in China while advancing talent development. The competition specifies thematic boundaries and invites university students worldwide studying art, design, and visualization to complete artistic visualization works within the given timeframe using their most proficient techniques. A range of awards will be presented to outstanding and innovative creations.

    The competition imposes no restrictions on expressive techniques, encouraging students to maximize their imagination and creative freedom. Entries must be based on real data, with original data excerpts provided for evaluation reference. The judging criteria focus on whether teams can effectively convey data-driven artistic ideas, perspectives, or concepts through visual or auditory forms.

    Submitted visualization works may include AI-generated content, and the use of new intelligent and digital technologies to explore novel approaches in visualization creation and presentation is encouraged. However, authors must clearly label AI-generated content. The review committee will assess the relevance of such content to the theme and ensure compliance with legal, ethical, and public order standards.

    The organizing committee of the 2025 China VIS Arts Program calls upon artists, designers, researchers, faculty, students, and professionals from all fields to create and submit art and design works centered on "Hangzhou · Tide of Myriad Phenomena," showcasing multidimensional explorations and brilliance in visualization. This track requires participants to select relevant datasets for artistic visualization within the annual theme framework of "Hangzhou · Tide of Myriad Phenomena." There are no constraints on expressive methods, aiming to inspire maximum creativity and imagination.

    Entries in this track will be evaluated by a panel of domestic artistic visualization experts. The core criterion is whether competing teams can effectively express data-driven artistic ideas, perspectives, or concepts through visual, auditory, or other artistic forms.

    ## Instructions For Participation

    ### Registration

    Teachers, students, and researchers from general higher education institutions (including higher education) and research institutes, developers and designers from enterprises and institutions, visualization and Visual Analytics enthusiasts as well as artists are welcome to participate in the competition. Participants are invented to sign up as teams:

    - **Track 1:** Each team consists of up to 6 participants, and has 1-2 instructors.
    - **Track 2:** Each team consists of up to 4 participants, and has 1-2 instructors.

    Team Naming Rule: "Legal entity name - Captain's name" or "Enthusiast team - Captain's name". For example: "Tianjin University - Zhang San", "Enthusiast team - Li Si". The first ranked participant of each team is the team leader and is responsible for communication. Non-research institutes, enterprises, and institutions, etc. Please fill in the name of "Enthusiast team" (enthusiast team means that the participant is a team formed as an individual).

    ### Registration requirements

    - The competition is open for online registration, the registration portal: [https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc75](https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc75)
    - Registration information includes communication Email, team name, participants (instructor, team leader, and team members), cell phone number, Email, Legal entity (schools, colleges, etc.) and work title (educational background, grade, etc.)
    - The signatures of the award certificates are printed in the order of registration, with students first and instructors last.
    - One email can only register one team, and the team number is unique and bound to the communication Email.
    - If you forget the number, you can check it on the submission page according to the Email you fill in. Please remember the communication Email of the competition.

    ### Submission requirements

    The submission of the competition works is online, please click on the submission portal to submit your works, and try to avoid submitting works during the peak period of the deadline.

    **Submission portal:**

    **Track 1-I:** [https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc76](https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc76)

    **Track 1-II:** [https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc6a](https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc6a)

    **Track 2:** [https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc6a](https://s99x45wjic.jiandaoyun.com/f/68099429d63c22fce2cbdc6a)

    - Submission information includes team number, entry track, entry theme, entry title, entry summary (100 words), and entry submission content.
    - If you want to update your work, please use the same entry number to submit your work again, and the last submitted work with the same team name with the same entry number will prevail. The title of the work is based on the last submission and the work description document.
    - Participants are recommended to visit “overview of previous years’ ChinaVis Data Challenges” for more instructions. Award-winning entries of VAST Challenge organized by IEEE VIS Conference can be found in this repository: [http://cs.umd.edu/hcil/varepository/benchmarks.php](http://cs.umd.edu/hcil/varepository/benchmarks.php), which would also provide some hints and guidance. Paper ["ChinaVis Data Challenge from 2015 to 2017"](http://t.cn/EflGyVM) can be also referred for information.

    ### Content of Submission

    #### Track 1-I:

    1. **Work description document:** Track 1 requires participants to introduce the work with illustrations and text according to the recommended template provided by the organizer and submit it in Word or PDF format.
    2. **Video:** Track 1 requires participants to produce a video with commentary, explaining the visual analysis process around the work, the total length of the video should not exceed 5 minutes, the number of videos should be 1, the file format should be MP4, and the size of the video should be strictly controlled within 50M.
    3. **Representative pictures of the work:** Please provide one high-definition version, limited to JPG format, and stitch together multiple pictures, the size of which should not exceed 20M.

    #### Track 1-II and Track 2:

    1. **Project Description (for review):**
        - 1 pdf file only, < 10MB.
        - The Description should explain the concept of the submission, including a description of the original data. If necessary, the original data may be submitted separately to help the reviewers better understand the connotation of the submission.
    2. **Project File (for review):**
        - Project video or demo video, please submit available online link for review.
        - 1 representative works, image format works limited *.jpg / *.png type, a single image < 20MB/file.
    3. **Project High-quality file download Link (for exhibition):**
        - All files submitted should be included for downloaing.
        - Baidu Netdisk is recommended to ensure that the link is valid during the review period.
        - Video format should be:  *.mp4 / *.mov / *.avi, < 50MB/file.
        - Image formage should be: JPEG and PNG, < 20MB/file.
        - Only electronic submission is required. No mailing.

    ## Judging Rules

    All entries will be submitted to both visual analysis experts, domain experts, and visualization-related artists for comprehensive evaluation. The evaluation will focus on evaluating the thematic orientation and application value of the entries, as well as the effectiveness, novelty and artistry of the entries in terms of interaction design, degree of data utilization, social benefits, analytical ideas and methods, etc.

    Entries submitted by all eligible teams by the event deadline will be judged. The competition organizers will not evaluate any entries submitted after the deadline, and the organizers will not be held responsible for any damage, missing entries, or delayed submissions due to computer, Internet, or mobile network failures.

    All entries must not contain content that violates national laws, or contains violence, pornography, or other undesirable content. The competition committee reserves the right to disqualify any entry containing such content.

    All entries must be original by the participant or team and must not infringe on the copyright of others. If the entry causes copyright disputes, all liability shall be borne by the participant.

    The author(s) retain the copyright and authorship of the entry. Unless otherwise stated, the competition committee has the right to promote, display, and broadcast the entry in relevant media of the conference.

    After the entry is submitted, the names of the participants and instructors may not be changed.

    If the submitted visualization work contains AI-generated content, the author must clearly label the AI-generated content.

    The data provided for the Data Challenge is limited to use in competition entries.

    ## Awards

    The chairman of the competition committee will select a number of exciting entries in proportion to the results of expert evaluation. At the ChinaVis 2025 conference, award certificates will be presented to all winning teams, and some of the winning teams will be invited to make on-site presentations at the competition session of the conference.

    ## Important Time Points

    China Standard Time 23:59, (UTC+8)

    - Deadline for online registration: **May 30, 2025**.
    - Deadline for submission of entries:
        - Track 1-I (Visual Analytics): **June 9, 2025**.
        - Track 1-II (Digital Humanities Visualization): **June 16, 2025**.
        - Track 2 (Art Visualization): **June 2, 2025**.
    - Announcement date for judging results: **July 2, 2025**.

    ## Documentation Templates and Dataset Download

    1. **Track 1-I: Visual Analytics Challenge**
        - Work description document template: <a href="/2025/challenge/1i_answer_sheet.docx" target="_blank">Download</a>
        - Data download link: <a href="/2025/challenge/dataset.zip" target="_blank">Download</a> (The data provided is limited to use in competition entries)
    2. **Track 1-II: Visualization Creative Challenge**
        - Data download link: <a href="/2025/challenge/dataset.zip" target="_blank">Download</a> (The data provided is limited to use in competition entries)
    3. **Track 2：Art Visualization Competition**
        - Self-selected dataset, and provide the original data snippet for evaluation reference along with the dataset.

    ## Others

    1. Entries must not violate relevant national laws and regulations, and must not infringe on any third party intellectual property rights or other rights. If the work gives rise to intellectual property objections and disputes, the responsibility shall be borne by the participant.
    2. Participants may use open source or commercial data analysis and visualization software, such as [DataV](https://data.aliyun.com/visual/datav), [Tableau](https://www.tableau.com/), R and Excel, etc. Participants are encouraged to use software development tools to design and implement their own visual analysis solutions or artistic visualization works. Common visualization development tools include [D3](https://d3js.org/), [ECharts](https://echarts.apache.org/zh/index.html), [AntV](https://antv.alipay.com/), and Processing, etc. Participants are requested to clearly state the development tools used and the open-source or commercial software used in the documentation of the work.
    3. The winning team must have at least one person registered with ChinaVis 2025.
    4. Track 1 winning teams are required to make their entries into posters and participate in the poster session of ChinaVis 2025, with specific requirements referring to the poster session. Track 2 (Art Visualization) winning entries will participate in the art project exhibition.
    5. The intellectual property rights of the entries belong to the participants. The organizers of the conference have the right to use the entries, work-related materials, and team information for promotional materials, authorized media releases, official website browsing and downloading, exhibitions (including roving exhibitions), and other activities.
    6. Names and order of participants cannot be changed after the entries have been submitted.

    ## Organizing Committee Of Data Challenge

    **Huijie Zhang**　Northeast Normal University

    **Jing Chen**　Nanjing University

    **Junjie Zhang**　Hong Kong University of Science and Technology (Guangzhou)

    **Jin Xu**　Hangzhou Normal University

    ## Previous Challenges Review

    - [Data Visual Analytics Challenge 2024](https://chinavis.org/2024/challenge.html)
    - [Data Visual Analytics Challenge 2023](http://chinavis.org/2023/challenge.html)
    - [Data Visual Analytics Challenge 2022](http://chinavis.org/2022/challenge.html)
    - [Data Visual Analytics Challenge 2021](http://chinavis.org/2021/challenge.html)
    - [Data Visual Analytics Challenge 2020](http://chinavis.org/2020/challenge.html)
    - [Data Visual Analytics Challenge 2019](http://chinavis.org/2019/challenge.html)

    For more information, please visit the history website: [http://chinavis.org/history.html](http://chinavis.org/history.html)

    `.replace(/^    /gm, ""),
    { async: false }
  ),
};
