import PhotoGWJ from "~/assets/course/gwj.avif";
import PhotoCMQ from "~/assets/course/cmq.avif";
import PhotoLM from "~/assets/course/lm.avif";
import PhotoTJ from "~/assets/course/tj.avif";

export const zh = {
  PageTitle: "课程 - ChinaVis 2025",
  Title: "课程信息",
  Schedule: "课程安排",
  Date: "日期：",
  Location: "地点：",
  Description: "课程描述",
  Speakers: "课程讲师",
};

export const en = {
  PageTitle: "Course - ChinaVis 2025",
  Title: "Course Information",
  Schedule: "Course Schedule",
  Date: "Date: ",
  Location: "Location: ",
  Description: "Description",
  Speakers: "Course Speakers",
};

export const courses: {
  id: string;
  title: { zh: string; en: string };
  date: { zh: string; en: string };
  location: { zh: string; en: string };
  description: { zh: string; en: string };
  speakers: {
    name: { zh: string; en: string };
    affiliation: { zh: string; en: string };
    photo: string;
    description: { zh: string; en: string };
  }[];
}[] = [
  {
    id: "visual-encoding-interactive-analysis",
    title: {
      zh: "数据可视化中的视觉编码与交互分析",
      en: "Visual Encoding and Interactive Analysis in Data Visualization",
    },
    date: {
      zh: "2025 年 7 月 19 日（待定）",
      en: "July 19, 2025 (Tentative)",
    },
    location: {
      zh: "待定",
      en: "TBD",
    },
    description: {
      zh: "<p>数据可视化旨在利用视觉感知协助用户发现、理解和探索数据特征、结构和规律，从而获取知识。一个完整的可视化分析循环框架起始于数据，终点是提炼的知识，在此之间，充分利用视觉感知和用户交互是有效获取知识的两大“法宝”：可视化应充分利用人类视觉感知能力，基于视觉感知理论和模型对数据进行有效而优雅的视觉编码，以增强人们对数据的理解；用户通过交互技术探索数据，并确定可视化参数。</p><p>本课程包含内容讲授、分组讨论与成果展示三个环节。在内容讲授环节，我们将以可视化分析的循环框架为主线，系统介绍视觉感知的基本原理、核心模型、设计准则及常用交互技术，并阐述这些技术在科学可视化中的具体应用。在分组讨论环节，我们将给定一个可视化主题，学员们将分组对数据、分析任务和科学问题进行头脑风暴，体验从基础标记选择、到视觉通道编码，再到交互方法构建的可视化设计全流程，以解释或探索所提出的科学问题。在成果展示环节，学员们将介绍设计的数据可视化、交互界面和交互方法，探讨所使用的视觉元素（标记、视觉通道）如何有效地表现数据特征，以及交互方法如何帮助用户进一步探索数据。</p>",
      en: '<p>Data visualization aims to assist users in discovering, understanding, and exploring data features, structures, and patterns through visual perception, thereby acquiring knowledge. A complete visualization analysis cycle framework starts with data and ends with distilled knowledge. In this process, effectively utilizing visual perception and user interaction are two key "tools" for acquiring knowledge: visualization should fully leverage human visual perception capabilities, applying visual perception theories and models to effectively and elegantly encode data to enhance understanding; users explore data through interaction techniques and determine visualization parameters.</p><p>This course consists of three parts: content lectures, group discussions, and results presentations. In the content lecture section, we will systematically introduce the basic principles of visual perception, core models, design guidelines, and common interaction techniques, using the visualization analysis cycle framework as the main line, and explain the specific applications of these techniques in scientific visualization. In the group discussion section, we will provide a visualization topic, and participants will brainstorm data, analysis tasks, and scientific questions in groups, experiencing the entire visualization design process from basic mark selection to visual channel encoding to interaction method construction to explain or explore the proposed scientific questions. In the results presentation section, participants will present their designed data visualizations, interactive interfaces, and interaction methods, discussing how the used visual elements (marks, visual channels) effectively represent data features and how interaction methods help users further explore data.</p>',
    },
    speakers: [
      {
        name: {
          zh: "陆旻",
          en: "Min Lu",
        },
        affiliation: {
          zh: "深圳大学",
          en: "Shenzhen University",
        },
        photo: PhotoLM,
        description: {
          zh: '陆旻，深圳大学城市空间信息工程系副教授，深圳大学空间创意智能与交互研究组负责人，研究方向为风格化地图等空间创意的智能生成与交互。近年来在图形学、计算机视觉、可视化、人机交互国际会议SIGGRAPH, CVPR, VIS，ACM CHI等发表论文多篇，主持国家自然科学基金两项、广东省及深圳市项目多项。曾获IEEE PacificVis 2024最佳论文提名, Computational Visual Media 2020最佳论文提名，IEEE PacificVis 2018最佳海报奖，ICUI 2017最佳论文奖，ChinaVis 2016最佳海报奖等奖项，担任ACM SIGGRAPH Asia, IEEE PacificVis、ChinaVis等会议程序委员，长期担任IEEE VIS，IEEE TVCG, ACM TIST等审稿人，更多信息请访问个人主页：<a href="https://deardeer.github.io/" target="_blank">https://deardeer.github.io/</a>。',
          en: 'Min Lu is an Associate Professor in the Department of Urban Spatial Information Engineering at Shenzhen University and the head of the Spatial Creative Intelligence and Interaction Research Group. Her research focuses on the intelligent generation and interaction of spatial creativity, such as stylized maps. In recent years, she has published multiple papers in international conferences such as SIGGRAPH, CVPR, VIS, and ACM CHI in the fields of graphics, computer vision, visualization, and human-computer interaction. She has led two projects funded by the National Natural Science Foundation of China and several projects from Guangdong Province and Shenzhen City. She has received several awards including Best Paper Nomination at IEEE PacificVis 2024, Best Paper Nomination at Computational Visual Media 2020, Best Poster Award at IEEE PacificVis 2018, Best Paper Award at ICUI 2017, and Best Poster Award at ChinaVis 2016. She serves as a program committee member for conferences such as ACM SIGGRAPH Asia, IEEE PacificVis, and ChinaVis, and has been a long-term reviewer for IEEE VIS, IEEE TVCG, ACM TIST, among others. For more information, please visit her personal homepage: <a href="https://deardeer.github.io/" target="_blank">https://deardeer.github.io/</a>.',
        },
      },
      {
        name: {
          zh: "陶钧",
          en: "Jun Tao",
        },
        affiliation: {
          zh: "中山大学",
          en: "Sun Yat-sen University",
        },
        photo: PhotoTJ,
        description: {
          zh: '陶钧，中山大学计算机学院及国家超级计算广州中心副教授，博士生导师。于2015年获得密歇根理工大学计算机科学专业博士学位，2015至2018年于圣母大学计算机科学与工程系任博士后研究员。其主要研究方向主要包括对大规模科学模拟数据的可视化，尤其是深度学习，信息论，优化方法，和交互探索方法在流场可视化方面的应用；以及对大规模科学数据的高性能分析方法的研究。个人主页：<a href="https://juntao.org/" target="_blank">https://juntao.org/</a>。',
          en: 'Jun Tao is an Associate Professor at Sun Yat-sen University and a Ph.D. supervisor. He obtained his Ph.D. in Computer Science from Michigan Technological University in 2015 and worked as a postdoctoral researcher in the Department of Computer Science and Engineering at the University of Notre Dame from 2015 to 2018. His main research interests include the visualization of large-scale scientific simulation data, especially the application of deep learning, information theory, optimization methods, and interactive exploration methods in flow field visualization, as well as the research of high-performance analysis methods for large-scale scientific data. His personal homepage is: <a href="https://juntao.org/" target="_blank">https://juntao.org/</a>.',
        },
      },
    ],
  },
  {
    id: "growing-trees-with-our-forest",
    title: {
      zh: "《我们的森林》成长树",
      en: "Growing Trees with Our Forest",
    },
    date: {
      zh: "2025 年 7 月 19 日（待定）",
      en: "July 19, 2025 (Tentative)",
    },
    location: {
      zh: "待定",
      en: "TBD",
    },
    description: {
      zh: "本课程以“信息可视化”为核心主题，旨在通过系统的理论讲解与实践操作，深入探讨数据表达的艺术与科学。课程将围绕如何将复杂数据转化为直观的视觉形式展开，着重剖析线性模型中视觉创意与视觉符号在信息传递中的关键作用。课程内容涵盖信息可视化的理论基础，包括其基本概念、历史发展以及视觉编码在信息可读性与理解性中的作用；同时，以印加结绳符号（Quipu）为例，深入分析绳结符号的结构与语义功能，揭示符号系统在信息存储与传递中的独特价值。实践环节中，学员将运用绳子编织的方式呈现个人生命中的重要节点，通过绳子的长度、颜色、结的类型等元素构建具有叙事性的视觉作品，以此探索信息可视化在情感表达中的可能性。此外，课程还将通过经典与当代案例分析，引导学员批判性地思考设计决策对信息传递的影响，强调在满足功能需求的同时融入创意与美学元素。通过本课程的学习，学员将掌握信息可视化的理论知识与实践技能，理解视觉符号在信息传递中的作用，提升创意表达与叙事能力，并培养对信息可视化作品的批判性分析能力，从而能够独立创作出具有深度与创意的信息可视化作品。",
      en: 'This course focuses on the core theme of "Information Visualization", aiming to explore the art and science of data representation through systematic theoretical explanations and practical operations. The course will revolve around how to transform complex data into intuitive visual forms, with a focus on analyzing the key roles of visual creativity and visual symbols in information transmission within linear models. The content covers the theoretical foundations of information visualization, including its basic concepts, historical development, and the role of visual encoding in information readability and understanding; at the same time, it will delve into the structure and semantic functions of knot symbols using Inca quipu as an example, revealing the unique value of symbolic systems in information storage and transmission. In the practical session, participants will present important nodes in their personal lives through rope weaving, constructing narrative visual works using elements such as rope length, color, and knot types to explore the possibilities of emotional expression in information visualization. Additionally, the course will guide participants to critically think about the impact of design decisions on information transmission through classic and contemporary case analyses, emphasizing the integration of creativity and aesthetics while meeting functional requirements. Through this course, participants will master theoretical knowledge and practical skills in information visualization, understand the role of visual symbols in information transmission, enhance creative expression and narrative abilities, and develop critical analysis skills for information visualization works, enabling them to independently create deep and creative information visualization works.',
    },
    speakers: [
      {
        name: {
          zh: "顾文佳",
          en: "Wenjia Gu",
        },
        affiliation: {
          zh: "中国美术学院",
          en: "China Academy of Art",
        },
        photo: PhotoGWJ,
        description: {
          zh: "中国美术学院视觉传播学院副教授，现从事数字媒体艺术、信息图解设计与设计教育研究。作品参展于意大利米兰三年展、浙江美术馆、上海西岸穹顶艺术中心等。曾参与策划《2020天问：世界观的对话》、《2023天问2:文明的互鉴》、《“缓存在”2022年第四届杭州国际纤维艺术展》等展览、活动。曾参与多项省部级科研项目，如教育部人文社科青年基金项目《交互设计方法论研究》等。著有《内容与图解》、《人文基础》、《设计人文基础》、《中外美术简史》等教材，其中《中外美术简史》入选教育部“十二五”职业教育国家规划教材，《人文基础》和《内容与图解》入选浙江省“十三五”省级一流本科教材，《人文基础》入选省级思政示范课程。参与国家级一流本科课程《造型基础》建设，参与编写“十二五”规划教材《信息交互设计》。曾于国内外核心期刊上发表多篇学术论文。",
          en: 'Associate Professor at the School of Visual Communication, China Academy of Art, currently engaged in research on digital media art, information graphic design, and design education. Her works have been exhibited at the Milan Triennale in Italy, Zhejiang Art Museum, Shanghai West Bund Dome Art Center, and other venues. She has participated in the planning of exhibitions and events such as "2020 Tianwen: Dialogue of Worldviews", "2023 Tianwen 2: Mutual Learning of Civilizations", and "Stored in: 2022 Fourth Hangzhou International Fiber Art Exhibition". She has been involved in several provincial and ministerial research projects, such as the Ministry of Education Humanities and Social Sciences Youth Fund Project "Research on Interactive Design Methodology". She has authored textbooks such as "Content and Graphic Design", "Humanities Foundation", "Design Humanities Foundation", and "Brief History of Chinese and Foreign Art", among which "Brief History of Chinese and Foreign Art" was selected as a national planning textbook for vocational education by the Ministry of Education during the 12th Five-Year Plan, "Humanities Foundation" and "Content and Graphic Design" were selected as provincial first-class undergraduate textbooks during the 13th Five-Year Plan in Zhejiang Province, and "Humanities Foundation" was selected as a provincial ideological and political demonstration course. She has participated in the construction of a national first-class undergraduate course "Modeling Basics" and co-authored the 12th Five-Year Plan textbook "Information Interaction Design". She has published several academic papers in domestic and international core journals.',
        },
      },
      {
        name: {
          zh: "崔梦茜",
          en: "Mengqian Cui",
        },
        affiliation: {
          zh: "中国美术学院",
          en: "China Academy of Art",
        },
        photo: PhotoCMQ,
        description: {
          zh: "中国美术学院视觉传播学院，助理教授。芝加哥艺术学院艺术创作硕士(MFA)，中国美术学院文学学士。曾先后任教于芝加哥艺术学院、温州肯恩大学，现从事数字媒体艺术、信息可视化设计与设计教育研究，主持课程《UIUX设计》获浙江省一流课程; 参与省部级科研项目《教育数字化战略背景下高校MOOC学习机制探索与改革实践》。相关作品多次入选Tokyo TDC, GDC, Graphis等国内外设计奖项，学术论文发表于《Asian Culture and History》、《艺术与设计》、《AHFE (Applied Human Factors and Ergonomics International Conference) 》等国内外刊物。",
          en: 'Assistant Professor at the School of Visual Communication, China Academy of Art. Master of Fine Arts (MFA) in Art Creation from the School of the Art Institute of Chicago, Bachelor of Arts from China Academy of Art. Previously taught at the School of the Art Institute of Chicago and Wenzhou-Kean University, currently engaged in research on digital media art, information visualization design, and design education. She has led the course "UI/UX Design", which was recognized as a first-class course in Zhejiang Province; participated in provincial and ministerial research projects exploring and reforming the MOOC learning mechanism in the context of educational digital strategy. Her related works have been selected for various domestic and international design awards such as Tokyo TDC, GDC, and Graphis. Her academic papers have been published in journals such as "Asian Culture and History", "Art and Design", "AHFE (Applied Human Factors and Ergonomics International Conference)", among others.',
        },
      },
    ],
  },
];
