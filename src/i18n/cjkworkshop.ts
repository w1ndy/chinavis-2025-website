import { marked } from "marked";

import { Speaker } from "~/components/SpeakerInfo";

import PhotoKenjiOno from "~/assets/cjkworkshop/kenji_ono.avif?inline";
import PhotoNaohisaSakamoto from "~/assets/cjkworkshop/naohisa_sakamoto.avif?inline";
import PhotoSL from "~/assets/cjkworkshop/sl.avif?inline";
import PhotoLL from "~/assets/cjkworkshop/ll.avif?inline";
import PhotoCSM from "~/assets/cjkworkshop/csm.avif?inline";
import PhotoYunJang from "~/assets/cjkworkshop/yun_jang.avif?inline";
import PhotoDaeHyunKim from "~/assets/cjkworkshop/dae_hyun_kim.avif?inline";
import PhotoHJ from "~/assets/cjkworkshop/hj.avif?inline";
import PhotoBCK from "~/assets/cjkworkshop/bck.avif?inline";
import PhotoYZQ from "~/assets/cjkworkshop/yzq.avif?inline";

export const zh = {
  PageTitle: "中日韩论坛 - ChinaVis 2025",
  Title: "第八届中日韩可视化论坛",
  Information: marked.parse(
    `
    ## 论坛信息

    ### 主题：交互式数据可视化：增强人机协作

    交互式数据可视化在弥合人机之间的差距方面发挥着关键作用，使得对数据集中的复杂模式进行直观探索和理解成为可能。本论坛将讨论数据可视化如何促进人机之间的无缝协作。主题将包括如何集成 AI 来增强跨领域的实际应用可视化，以及设计交互式可视化工具时需要考虑的关键因素。

    - **时间：** 2025 年 7 月 19 日上午 9-12 点
    - **地点：** 杭州城北文澜大酒店 青芝坞厅
    `.replace(/^    /gm, ""),
    { async: false }
  ),
  Organizers: "论坛主席",
  Program: marked.parse(
    `
    ## 论坛议程

    | 时间 | 议程 |
    |---|---|
    | **09:00-09:10** | 欢迎致辞（陈为，浙江大学）|
    | **09:10-09:50** | 分论坛1：日本学者报告（主席：刘乐，西北工业大学）|
    | **09:50-10:30** | 分论坛2：韩国学者报告（主席：Naohisa Sakamoto，神户大学）|
    | **10:30-10:50** | 茶歇 |
    | **10:50-11:30** | 分论坛3：中国学者报告（主席：Yun Jang，世宗大学）|
    | **11:30-11:55** | 专题讨论（主席：韩俊，香港科技大学）|
    | **11:55-12:00** | 闭幕致辞（巫英才，浙江大学）|
    `.replace(/^    /gm, ""),
    { async: false }
  ),
  SessionChair: "分论坛主席",
  Panelists: "专题讨论嘉宾",
};

export const en = {
  PageTitle: "CJK Workshop - ChinaVis 2025",
  Title: "The Eighth China-Japan-Korea Joint Visualization Workshop",
  Information: marked.parse(
    `
    ## Information

    ### Topic: Interactive Data Visualization: Enhancing Human-Machine Collaboration

    Interactive data visualization plays a pivotal role in bridging the gap between humans and machines, enabling intuitive exploration and understanding of complex patterns in datasets. This panel will discuss how data visualization facilitates seamless collaboration between humans and machines. Topics will include how to integrate AI to enhance visualization for real-world applications across domains and what the key considerations are for designing interactive visualization tools.

    - **Date:** July 19, 2025, 9:00 AM - 12:00 PM
    - **Location:** Wenlan Hotel Northern Hangzhou, Qingzhuwu Hall
    `.replace(/^    /gm, ""),
    { async: false }
  ),
  Organizers: "Organizers",
  Program: marked.parse(
    `
    ## Program

    | Time | Program |
    |---|---|
    | **09:00-09:10** | Welcome (Wei Chen, Zhejiang University) |
    | **09:10-09:50** | Session 1: Talks from Japan (Chair: Le Liu, Northwestern Polytechnical University) |
    | **09:50-10:30** | Session 2: Talks from South Korea (Chair: Naohisa Sakamoto, Kobe University) |
    | **10:30-10:50** | Coffee Break |
    | **10:50-11:30** | Session 3: Talks from China (Chair: Yun Jang, Sejong University) |
    | **11:30-11:55** | Panel Discussion (Chair: Jun Han, The Hong Kong University of Science and Technology) |
    | **11:55-12:00** | Closing Remarks (Yingcai Wu, Zhejiang University) |
    `.replace(/^    /gm, ""),
    { async: false }
  ),
  SessionChair: "Session Chair",
  Panelists: "Panelists",
};

export const sessions: {
  title: { zh: string; en: string };
  chair: Speaker;
  speakers: Speaker[];
}[] = [
  {
    title: { zh: "分论坛1：日本学者报告", en: "Session 1: Talks from Japan" },
    chair: {
      name: { zh: "刘乐", en: "Le Liu" },
      affiliation: {
        zh: "西北工业大学",
        en: "Northwestern Polytechnical University",
      },
      photo: PhotoLL,
    },
    speakers: [
      {
        name: { zh: "Kenji Ono", en: "Kenji Ono" },
        affiliation: {
          zh: "九州大学",
          en: "Kyushu University",
        },
        description: {
          zh: "Kenji Ono is currently a director of Pan-Omics Data-Driven Research Innovation Center in Kyushu University, and he holds an appointment at Kumamoto University, after working on RIKEN Advanced Institute for Computational Science and Nissan Motor company. He received his degrees of Dr. Eng. in mechanical engineering from Kumamoto University in 2000. His research fields are computational fluid dynamics, parallel computation, visualization and equation discovery from large-scale dataset.",
          en: "Kenji Ono is currently a director of Pan-Omics Data-Driven Research Innovation Center in Kyushu University, and he holds an appointment at Kumamoto University, after working on RIKEN Advanced Institute for Computational Science and Nissan Motor company. He received his degrees of Dr. Eng. in mechanical engineering from Kumamoto University in 2000. His research fields are computational fluid dynamics, parallel computation, visualization and equation discovery from large-scale dataset.",
        },
        photo: PhotoKenjiOno,
        talk: {
          zh: "Equation Discovery as a Form of Visualization: Understanding Phenomena through Data",
          en: "Equation Discovery as a Form of Visualization: Understanding Phenomena through Data",
        },
        abstract: {
          zh: "Simulations play a crucial role in science and engineering, and their execution relies on equations that describe the phenomena of interest. But how are such equations discovered in the first place? They are the result of accumulated knowledge derived from theory, observation, and experimentation. Each term in an equation carries meaning, representing the underlying mechanisms of the phenomenon.<br />Today, however, the range of phenomena we seek to understand extends beyond physics and chemistry into domains such as social sciences and economics, where explicit governing laws are often elusive. Fortunately, the increasing availability of diverse and abundant data has opened up new possibilities. Even for phenomena lacking well-defined laws, it is now feasible to infer descriptive equations directly from data, offering a new path toward understanding.<br />In this talk, we introduce an approach for discovering equations using genetic programming, a method that explores candidate equations through evolutionary computation. We will present the underlying concept along with examples of its application.",
          en: "Simulations play a crucial role in science and engineering, and their execution relies on equations that describe the phenomena of interest. But how are such equations discovered in the first place? They are the result of accumulated knowledge derived from theory, observation, and experimentation. Each term in an equation carries meaning, representing the underlying mechanisms of the phenomenon.<br />Today, however, the range of phenomena we seek to understand extends beyond physics and chemistry into domains such as social sciences and economics, where explicit governing laws are often elusive. Fortunately, the increasing availability of diverse and abundant data has opened up new possibilities. Even for phenomena lacking well-defined laws, it is now feasible to infer descriptive equations directly from data, offering a new path toward understanding.<br />In this talk, we introduce an approach for discovering equations using genetic programming, a method that explores candidate equations through evolutionary computation. We will present the underlying concept along with examples of its application.",
        },
      },
      {
        name: { zh: "Naohisa Sakamoto", en: "Naohisa Sakamoto" },
        affiliation: {
          zh: "神户大学",
          en: "Kobe University",
        },
        description: {
          zh: "Naohisa Sakamoto is an associate professor of the Graduate School of System Informatics at Kobe University. He received the Ph.D. degree in Graduate School of Engineering from Kyoto University in 2007. His research interests include scientific visualization and visual analytics for Big Data. He is a member of the Institute of Electronics, Information and Communication Engineers, the Visualization Society of Japan, Japan Society for Simulation Technology, Association for Computing Machinery, and the IEEE Computer Society.",
          en: "Naohisa Sakamoto is an associate professor of the Graduate School of System Informatics at Kobe University. He received the Ph.D. degree in Graduate School of Engineering from Kyoto University in 2007. His research interests include scientific visualization and visual analytics for Big Data. He is a member of the Institute of Electronics, Information and Communication Engineers, the Visualization Society of Japan, Japan Society for Simulation Technology, Association for Computing Machinery, and the IEEE Computer Society.",
        },
        photo: PhotoNaohisaSakamoto,
        talk: {
          zh: "Tensor-Based Visual Analytics for Multivariate Time-Series Data",
          en: "Tensor-Based Visual Analytics for Multivariate Time-Series Data",
        },
        abstract: {
          zh: "The analysis of high-dimensional, multivariate time-series data is fundamental to advancing our understanding of complex dynamical systems in diverse scientific and engineering domains. The tensor data model provides a natural and expressive framework to capture multi-modal, spatio-temporal dependencies within such data. Nevertheless, large-scale tensor data present significant challenges, particularly in terms of scalability, effective dimensionality reduction, and interpretability of extracted features. In this talk, I will introduce a visual analytics framework specifically designed to enable in-depth exploratory analysis of large-scale multivariate time-series datasets represented as tensors. By integrating efficient tensor decomposition and manipulation techniques with interactive dimensionality reduction and advanced multidimensional data visualizations, the framework facilitates the identification and interpretation of latent spatio-temporal patterns. This approach enables domain experts to derive actionable insights from complex data structures, thereby bridging the gap between high-dimensional numerical representations and intuitive scientific understanding.",
          en: "The analysis of high-dimensional, multivariate time-series data is fundamental to advancing our understanding of complex dynamical systems in diverse scientific and engineering domains. The tensor data model provides a natural and expressive framework to capture multi-modal, spatio-temporal dependencies within such data. Nevertheless, large-scale tensor data present significant challenges, particularly in terms of scalability, effective dimensionality reduction, and interpretability of extracted features. In this talk, I will introduce a visual analytics framework specifically designed to enable in-depth exploratory analysis of large-scale multivariate time-series datasets represented as tensors. By integrating efficient tensor decomposition and manipulation techniques with interactive dimensionality reduction and advanced multidimensional data visualizations, the framework facilitates the identification and interpretation of latent spatio-temporal patterns. This approach enables domain experts to derive actionable insights from complex data structures, thereby bridging the gap between high-dimensional numerical representations and intuitive scientific understanding.",
        },
      },
    ],
  },
  {
    title: {
      zh: "分论坛2：韩国学者报告",
      en: "Session 2: Talks from South Korea",
    },
    chair: {
      name: { zh: "Naohisa Sakamoto", en: "Naohisa Sakamoto" },
      affiliation: {
        zh: "神户大学",
        en: "Kobe University",
      },
      photo: PhotoNaohisaSakamoto,
    },
    speakers: [
      {
        name: { zh: "Yun Jang", en: "Yun Jang" },
        affiliation: {
          zh: "世宗大学",
          en: "Sejong University",
        },
        description: {
          zh: "Yun Jang is a Professor of Computer Engineering at Sejong University, Seoul, South Korea. He received his Ph.D. in Electrical and Computer Engineering from Purdue University in 2007, specializing in data visual analytics, scientific visualization, and computer graphics. He also holds an M.S. from Purdue University (2002) and a B.S. in Electrical Engineering from Seoul National University (2000). Before joining Sejong University in 2012, Dr. Jang worked as a researcher at ETH Zürich and the Swiss National Supercomputing Center. His research focuses on data visualization, visual analytics, artificial intelligence, and machine learning. He develops AI-driven solutions for volume rendering, social media analytics, smart city applications, traffic optimization, and healthcare monitoring. His work combines theoretical research with practical applications to help extract meaningful insights from complex data.",
          en: "Yun Jang is a Professor of Computer Engineering at Sejong University, Seoul, South Korea. He received his Ph.D. in Electrical and Computer Engineering from Purdue University in 2007, specializing in data visual analytics, scientific visualization, and computer graphics. He also holds an M.S. from Purdue University (2002) and a B.S. in Electrical Engineering from Seoul National University (2000). Before joining Sejong University in 2012, Dr. Jang worked as a researcher at ETH Zürich and the Swiss National Supercomputing Center. His research focuses on data visualization, visual analytics, artificial intelligence, and machine learning. He develops AI-driven solutions for volume rendering, social media analytics, smart city applications, traffic optimization, and healthcare monitoring. His work combines theoretical research with practical applications to help extract meaningful insights from complex data.",
        },
        photo: PhotoYunJang,
        talk: {
          zh: "Machine Learning Approaches to Transfer Function Design: Automated CNN Colorization and Interactive t-SNE Segmentation",
          en: "Machine Learning Approaches to Transfer Function Design: Automated CNN Colorization and Interactive t-SNE Segmentation",
        },
        abstract: {
          zh: "Transfer function design in direct volume rendering remains challenging, requiring extensive expertise and time. This work presents two complementary machine learning approaches: automated CNN-based colorization and interactive t-SNE segmentation. The CNN approach automatically generates volume renderings similar to target images using a modified VGGNet architecture. The system labels intensity-gradient magnitude transfer functions via grid subdivision and Borda count voting, then maps primary colors extracted from target images to labeled transfer functions. The t-SNE approach proposes a two-level transfer function design that combines classical 2D TF with t-SNE dimensionality reduction to address the trade-off between multidimensional TF complexity and low-dimensional TF limitations. This method extracts multidimensional attributes from volume data and applies t-SNE for dimensionality reduction, enabling easy manipulation of multidimensional attributes while maintaining visualization quality. Experimental evaluation demonstrates that the CNN method achieves significant time reduction compared to manual approaches, while the t-SNE approach effectively allows manipulation of complex attributes with simplified control. Together, these methods advance transfer function design through automated colorization and intelligent dimensionality reduction.",
          en: "Transfer function design in direct volume rendering remains challenging, requiring extensive expertise and time. This work presents two complementary machine learning approaches: automated CNN-based colorization and interactive t-SNE segmentation. The CNN approach automatically generates volume renderings similar to target images using a modified VGGNet architecture. The system labels intensity-gradient magnitude transfer functions via grid subdivision and Borda count voting, then maps primary colors extracted from target images to labeled transfer functions. The t-SNE approach proposes a two-level transfer function design that combines classical 2D TF with t-SNE dimensionality reduction to address the trade-off between multidimensional TF complexity and low-dimensional TF limitations. This method extracts multidimensional attributes from volume data and applies t-SNE for dimensionality reduction, enabling easy manipulation of multidimensional attributes while maintaining visualization quality. Experimental evaluation demonstrates that the CNN method achieves significant time reduction compared to manual approaches, while the t-SNE approach effectively allows manipulation of complex attributes with simplified control. Together, these methods advance transfer function design through automated colorization and intelligent dimensionality reduction.",
        },
      },
      {
        name: { zh: "Dae Hyun Kim", en: "Dae Hyun Kim" },
        affiliation: {
          zh: "延世大学",
          en: "Yonsei University",
        },
        description: {
          zh: "Dae Hyun Kim is an Assistant Professor in the Department of Computer Science and Engineering at Yonsei University. Prior to joining Yonsei, he was a postdoctoral scholar at KAIST, working with Juho Kim. He received his MS and PhD in Computer Science from Stanford University, and his BS in Computer Science from the California Institute of Technology. His research focuses on developing natural language tools to support human-human and human-AI communication and collaboration.",
          en: "Dae Hyun Kim is an Assistant Professor in the Department of Computer Science and Engineering at Yonsei University. Prior to joining Yonsei, he was a postdoctoral scholar at KAIST, working with Juho Kim. He received his MS and PhD in Computer Science from Stanford University, and his BS in Computer Science from the California Institute of Technology. His research focuses on developing natural language tools to support human-human and human-AI communication and collaboration.",
        },
        photo: PhotoDaeHyunKim,
        talk: {
          zh: "How to (Correctly) Use AI as a Facilitator of NL+VIS Communication",
          en: "How to (Correctly) Use AI as a Facilitator of NL+VIS Communication",
        },
        abstract: {
          zh: "Communication that combines natural language and data visualizations (NL+VIS) is increasingly common, appearing in news/research articles with charts, dashboards with annotations, and natural language interfaces for visual analytics. With the rapid improvements in the capabilities of AI in comprehending natural language and multimodal content, we have seen the growing adoption of AI in NL+VIS communication. In this talk. I will explore a specific role that AI can play in this space: a facilitator of NL+VIS communication between humans. Drawing on insights from a series of NL+VIS projects, I will outline guidelines for effectively incorporating AI into NL+VIS communication.",
          en: "Communication that combines natural language and data visualizations (NL+VIS) is increasingly common, appearing in news/research articles with charts, dashboards with annotations, and natural language interfaces for visual analytics. With the rapid improvements in the capabilities of AI in comprehending natural language and multimodal content, we have seen the growing adoption of AI in NL+VIS communication. In this talk. I will explore a specific role that AI can play in this space: a facilitator of NL+VIS communication between humans. Drawing on insights from a series of NL+VIS projects, I will outline guidelines for effectively incorporating AI into NL+VIS communication.",
        },
      },
    ],
  },
  {
    title: { zh: "分论坛3：中国学者报告", en: "Session 3: Talks from China" },
    chair: {
      name: { zh: "Yun Jang", en: "Yun Jang" },
      affiliation: {
        zh: "世宗大学",
        en: "Sejong University",
      },
      photo: PhotoYunJang,
    },
    speakers: [
      {
        name: { zh: "刘乐", en: "Le Liu" },
        affiliation: {
          zh: "西北工业大学",
          en: "Northwestern Polytechnical University",
        },
        description: {
          zh: "Dr. Le Liu is an associate professor in the School of Computer Science at Northwestern Polytechnical University. He earned his PhD from Clemson University. His current research focuses on the intersection of visualization, visual perception, computer graphics, and artificial intelligence.",
          en: "Dr. Le Liu is an associate professor in the School of Computer Science at Northwestern Polytechnical University. He earned his PhD from Clemson University. His current research focuses on the intersection of visualization, visual perception, computer graphics, and artificial intelligence.",
        },
        photo: PhotoLL,
        talk: {
          zh: "Representative Sampling for Implicit Uncertainty Visualization of Multidimensional Ensembles",
          en: "Representative Sampling for Implicit Uncertainty Visualization of Multidimensional Ensembles",
        },
        abstract: {
          zh: "Ensemble datasets are widely employed in predictive modeling and scientific simulations to capture and communicate uncertainty in complex systems. While implicit uncertainty visualizations offer a promising means of representing ensemble data, existing methods often face trade-offs between interpretability and fidelity. These challenges are exacerbated by high dimensionality, visual clutter, and the presence of multimodal distributions. To address these issues, we introduce a novel sampling strategy tailored for high-dimensional spaces that enhances ensemble visualization by preserving the underlying uncertainty while significantly reducing data complexity.",
          en: "Ensemble datasets are widely employed in predictive modeling and scientific simulations to capture and communicate uncertainty in complex systems. While implicit uncertainty visualizations offer a promising means of representing ensemble data, existing methods often face trade-offs between interpretability and fidelity. These challenges are exacerbated by high dimensionality, visual clutter, and the presence of multimodal distributions. To address these issues, we introduce a novel sampling strategy tailored for high-dimensional spaces that enhances ensemble visualization by preserving the underlying uncertainty while significantly reducing data complexity.",
        },
      },
      {
        name: { zh: "陈思明", en: "Siming Chen" },
        affiliation: {
          zh: "复旦大学",
          en: "Fudan University",
        },
        photo: PhotoCSM,
        talk: {
          zh: "Interactive Visualization for Intelligent Education: System and Evaluation",
          en: "Interactive Visualization for Intelligent Education: System and Evaluation",
        },
        description: {
          zh: 'Dr. Siming Chen is an Associate Professor at the School of Data Science, Fudan University. He leads the Fudan Visualization Lab (FDUVIS). Before this, he was a Research Scientist at Fraunhofer Institute IAIS (Intelligent Analysis and Information Systems) and a Postdoc Researcher at the University of Bonn in Germany. He received his Ph.D. in computer science at the School of EECS, Peking University, and received his BS degree in computer science at Fudan University. His research interests are visualization and visual analytics, with an emphasis on human-AI collaboration, social media visual analytics, and spatial-temporal visual analytics. He has published more than 100 papers, more than 40 of which are in top conferences and journals, including IEEE VIS, IEEE TVCG, ACM CHI, ACM UIST, etc. He served as multiple organizing chairs, associate editors, and program committees of several international journals and conferences. He was awarded 10+ best paper/poster awards and honorable mentioned awards in multiple conferences, including EuroVA, ChinaVis, AGILE, and IEEE VIS Poster, and won multiple IEEE VAST Challenge Excellent Awards. For more information, please visit <a href="http://simingchen.me" target="_blank">http://simingchen.me</a>.',
          en: 'Dr. Siming Chen is an Associate Professor at the School of Data Science, Fudan University. He leads the Fudan Visualization Lab (FDUVIS). Before this, he was a Research Scientist at Fraunhofer Institute IAIS (Intelligent Analysis and Information Systems) and a Postdoc Researcher at the University of Bonn in Germany. He received his Ph.D. in computer science at the School of EECS, Peking University, and received his BS degree in computer science at Fudan University. His research interests are visualization and visual analytics, with an emphasis on human-AI collaboration, social media visual analytics, and spatial-temporal visual analytics. He has published more than 100 papers, more than 40 of which are in top conferences and journals, including IEEE VIS, IEEE TVCG, ACM CHI, ACM UIST, etc. He served as multiple organizing chairs, associate editors, and program committees of several international journals and conferences. He was awarded 10+ best paper/poster awards and honorable mentioned awards in multiple conferences, including EuroVA, ChinaVis, AGILE, and IEEE VIS Poster, and won multiple IEEE VAST Challenge Excellent Awards. For more information, please visit <a href="http://simingchen.me" target="_blank">http://simingchen.me</a>.',
        },
        abstract: {
          zh: "Intelligent education is an important research direction. We explore how visualization and intelligent interaction can be applied to intelligent education. We introduce our exploration from three perspectives: visualization-assisted learning, intelligent education driven by large models, and classroom empirical research on analogy generation driven by large models. First, we designed an interactive teaching visualization system for Transformer so that students can understand the complex deep learning network structure; we further fine-tuned an educational large model that includes knowledge in the field of artificial intelligence, and proposed a large model-visualization-human-computer interaction alignment framework to realize a visualization system that supports self-study. Finally, we conducted classroom empirical research in a high school to verify the effectiveness of the large model for real classroom learning and teaching.",
          en: "Intelligent education is an important research direction. We explore how visualization and intelligent interaction can be applied to intelligent education. We introduce our exploration from three perspectives: visualization-assisted learning, intelligent education driven by large models, and classroom empirical research on analogy generation driven by large models. First, we designed an interactive teaching visualization system for Transformer so that students can understand the complex deep learning network structure; we further fine-tuned an educational large model that includes knowledge in the field of artificial intelligence, and proposed a large model-visualization-human-computer interaction alignment framework to realize a visualization system that supports self-study. Finally, we conducted classroom empirical research in a high school to verify the effectiveness of the large model for real classroom learning and teaching.",
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
    ],
  },
];

export const panel: {
  title: { zh: string; en: string };
  chair: Speaker;
  speakers: Speaker[];
} = {
  title: { zh: "专题讨论", en: "Panel Discussion" },
  chair: {
    name: { zh: "韩俊", en: "Jun Han" },
    affiliation: {
      zh: "香港科技大学",
      en: "The Hong Kong University of Science and Technology",
    },
    photo: PhotoHJ,
  },
  speakers: [
    {
      name: { zh: "Kenji Ono", en: "Kenji Ono" },
      affiliation: {
        zh: "九州大学",
        en: "Kyushu University",
      },
      photo: PhotoKenjiOno,
    },
    {
      name: { zh: "Naohisa Sakamoto", en: "Naohisa Sakamoto" },
      affiliation: {
        zh: "神户大学",
        en: "Kobe University",
      },
      photo: PhotoNaohisaSakamoto,
    },
    {
      name: { zh: "Yun Jang", en: "Yun Jang" },
      affiliation: {
        zh: "世宗大学",
        en: "Sejong University",
      },
      photo: PhotoYunJang,
    },
    {
      name: { zh: "Dae Hyun Kim", en: "Dae Hyun Kim" },
      affiliation: {
        zh: "延世大学",
        en: "Yonsei University",
      },
      photo: PhotoDaeHyunKim,
    },
    {
      name: { zh: "刘乐", en: "Le Liu" },
      affiliation: {
        zh: "西北工业大学",
        en: "Northwestern Polytechnical University",
      },
      photo: PhotoLL,
    },
    {
      name: { zh: "陈思明", en: "Siming Chen" },
      affiliation: {
        zh: "复旦大学",
        en: "Fudan University",
      },
      photo: PhotoCSM,
    },
    {
      name: { zh: "时磊", en: "Lei Shi" },
      affiliation: {
        zh: "北京航空航天大学",
        en: "Beihang University",
      },
      photo: PhotoSL,
    },
  ],
};

export const organizers: Speaker[] = [
  {
    name: { zh: "毕重科", en: "Chongke Bi" },
    affiliation: { zh: "天津大学", en: "Tianjin University" },
    photo: PhotoBCK,
  },
  {
    name: { zh: "韩俊", en: "Jun Han" },
    affiliation: {
      zh: "香港科技大学",
      en: "Hong Kong University of Science and Technology",
    },
    photo: PhotoHJ,
  },
  {
    name: { zh: "阳芷倩", en: "Zhiqian Yang" },
    affiliation: { zh: "湖北美术学院", en: "Hubei Institute of Fine Arts" },
    photo: PhotoYZQ,
  },
];
