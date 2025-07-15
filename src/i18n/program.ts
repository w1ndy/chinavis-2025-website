import { Speaker } from "~/components/SpeakerInfo";

import PhotoTJR from "~/assets/program/tjr.avif?inline";
import PhotoKLM from "~/assets/program/klm.avif?inline";
import PhotoBHJ from "~/assets/program/bhj.avif?inline";

import PhotoCCJ from "~/assets/program/ccj.avif";
import PhotoCSM from "~/assets/program/csm.avif";
import PhotoDDZ from "~/assets/program/ddz.avif";
import PhotoLQ from "~/assets/program/lq.avif";
import PhotoSCH from "~/assets/program/sch.avif";
import PhotoGDL from "~/assets/program/gdl.avif";
import PhotoLJC from "~/assets/program/ljc.avif";
import PhotoLDM from "~/assets/program/ldm.avif";
import PhotoBCK from "~/assets/program/bck.avif";
import PhotoDL from "~/assets/program/dl.avif";

export const zh = {
  PageTitle: "会议议程 - ChinaVis 2025",
  Title: "会议议程",
  Time: "时间",
  Session: "议程",
  Keynote: "特邀报告",
  Panel: "圆桌论坛",
  Workshop: "论坛",
  Topic: "专题",
  Paper: "论文",
  Course: "课程",
  Challenge: "挑战赛",
  Exhibition: "展览",
  Activity: "活动",
};

export const en = {
  PageTitle: "Program - ChinaVis 2025",
  Title: "Program",
  Time: "Time",
  Session: "Session",
  Keynote: "Keynote",
  Panel: "Panel",
  Workshop: "Workshop",
  Topic: "Topic",
  Paper: "Paper",
  Course: "Course",
  Challenge: "Challenge",
  Exhibition: "Exhibition",
  Activity: "Activity",
};

export type ProgramSessionType =
  | "keynote"
  | "panel"
  | "topic"
  | "paper"
  | "course"
  | "challenge"
  | "exhibition"
  | "workshop"
  | "activity";

export interface ProgramSession {
  id?: string;
  type: ProgramSessionType;
  title: { zh: string; en: string };
  location?: { zh: string; en: string };
  href?: {
    zh: string;
    en: string;
  };
  chair?: Speaker;
  speakers?: Speaker[];
}

export interface ProgramTimeSlot {
  time: string;
  sessions: ProgramSession[];
}

export interface ProgramDay {
  date: { zh: string; en: string };
  timeslots: ProgramTimeSlot[];
}

export const program: ProgramDay[] = [
  {
    date: {
      zh: "2025 年 7 月 19 日",
      en: "July 19, 2025",
    },
    timeslots: [
      {
        time: "9:00 - 21:00",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "会议签到及现场注册",
              en: "Conference Registration and Check-in",
            },
            location: {
              zh: "酒店大厅",
              en: "Hotel Lobby",
            },
          },
        ],
      },
      {
        time: "9:00 - 12:00",
        sessions: [
          {
            type: "course",
            title: {
              zh: "课程 1：数据可视化中的视觉编码与交互分析",
              en: "Course 1: Visual Encoding and Interactive Analysis in Data Visualization",
            },
            location: {
              zh: "四楼文轩厅",
              en: "Wenxuan Hall, 4F",
            },
            href: {
              zh: "/2025/zh/course#visual-encoding-interactive-analysis",
              en: "/2025/en/course#visual-encoding-interactive-analysis",
            },
          },
          {
            type: "course",
            title: {
              zh: "课程 2：《我们的森林》成长树",
              en: "Course 2: Our Forest Growth Tree",
            },
            location: {
              zh: "四楼清河坊厅",
              en: "Qinghefang Hall, 4F",
            },
            href: {
              zh: "/2025/zh/course#growing-trees-with-our-forest",
              en: "/2025/en/course#growing-trees-with-our-forest",
            },
          },
          {
            type: "workshop",
            title: {
              zh: "博士生论坛",
              en: "Doctoral Colloquium",
            },
            location: {
              zh: "三楼兰桥厅",
              en: "Lanqiao Hall, 3F",
            },
            href: {
              zh: "/2025/zh/doctoralcolloquium",
              en: "/2025/en/doctoralcolloquium",
            },
          },
          {
            type: "workshop",
            title: {
              zh: "中日韩国际论坛",
              en: "China-Japan-Korea Joint Visualization Workshop",
            },
            location: {
              zh: "四楼青芝坞厅",
              en: "Qingzhiwu Hall, 4F",
            },
            href: {
              zh: "/2025/zh/cjkworkshop",
              en: "/2025/en/cjkworkshop",
            },
          },
        ],
      },
      {
        time: "13:30 - 17:30",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "可视化与可视分析专委会会议",
              en: "Meeting: Technical Committee on Visualization and Visual Analytics",
            },
            location: {
              zh: "三楼文锦厅",
              en: "Wenjing Hall, 3F",
            },
          },
        ],
      },
      {
        time: "20:00 - 21:30",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "ChinaVis 2025会议委员会工作会议",
              en: "ChinaVis 2025 Committee Meeting",
            },
            location: {
              zh: "二楼文澜厅",
              en: "Wenlan Hall, 2F",
            },
          },
        ],
      },
    ],
  },
  {
    date: {
      zh: "2025 年 7 月 20 日 上午",
      en: "July 20, 2025 - Morning",
    },
    timeslots: [
      {
        time: "7:30 - 21:00",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "会议签到及现场注册",
              en: "Conference Registration and Check-in",
            },
            location: {
              zh: "酒店大厅",
              en: "Hotel Lobby",
            },
          },
        ],
      },
      {
        time: "8:15 - 8:45",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "开幕式",
              en: "Opening Ceremony",
            },
            location: {
              zh: "二楼文澜厅 + 三楼文锦厅",
              en: "Wenlan Hall, 2F + Wenjing Hall, 3F",
            },
          },
        ],
      },
      {
        time: "8:45 - 9:35",
        sessions: [
          {
            id: "keynote-1",
            type: "keynote",
            title: {
              zh: "大会特邀报告 1：拥抱人工智能，实现数字孪生：关键技术与发展趋势",
              en: "Keynote 1: Embracing AI for Digital Twins: Key Technologies and Trends",
            },
            location: {
              zh: "二楼文澜厅",
              en: "Wenlan Hall, 2F",
            },
            speakers: [
              {
                name: {
                  zh: "谭建荣",
                  en: "Jianrong Tan",
                },
                suffix: {
                  zh: "教授",
                  en: "(Professor)",
                },
                affiliation: {
                  zh: "浙江大学",
                  en: "Zhejiang University",
                },
                photo: PhotoTJR,
                abstract: {
                  zh: "如何将数字孪生技术作为基础技术，并结合新一代信息与通信技术、大数据分析技术、增强现实技术等先进技术有机融为一体，是当前数字化转型的一项重要内容。我们应用互联网、人工智能、数字化、网络化等技术时，需要结合国家实际情况、行业具体情况以及企业自身发展规律。为此，报告将分享智能制造和数字化转型方面的工作和体会，剖析数字设计与数字孪生的关联，探讨数字孪生的关键技术和发展趋势。",
                  en: "How to embrace digital twin technology as a foundational technology and integrate it with advanced technologies such as next-generation information and communication technology, big data analysis, and augmented reality is a crucial aspect of current digital transformation. When applying technologies like the Internet, artificial intelligence, and digitalization, we need to consider the national context, industry specifics, and the development patterns of enterprises. This keynote will share insights and experiences in smart manufacturing and digital transformation, analyze the relationship between digital design and digital twins, and explore key technologies and trends in digital twins.",
                },
                description: {
                  zh: "谭建荣，中国工程院院士，浙江大学求是特聘教授、博士生导师。现任浙江大学设计工程及自动化系主任、浙江大学流体动力与机电系统国家重点实验室学术委员会副主任、浙江大学CAD&CG全国重点实验室学术委员会委员，兼任中国机械工程学会机械设计分会理事长，中国图学学会名誉理事长、教育部工程图学教学指导委员会主任。先后获首届“国家杰出青年科学基金”、“中青年图形科技跨世纪人才”、国务院政府特殊津贴、“浙江省重点学科带头人”、“浙江省‘151’人才工程第一层次”、“浙江省新世纪重点培养人才”、国家863计划自动化领域CIMS主题设计自动化专题专家、国家“百千万人才第一二层次”、“科技部十五863先进个人”、“科技部十一五国家科技计划执行突出贡献奖”等荣誉和称号。提出了多品种大批量定制设计技术、多性能数字化样机设计技术和多参数分析与匹配设计技术，研究成果获国家技术发明二等奖和国家科技进步二等奖5项，省部级科技进步一等奖7项，教学成果获国家级优秀教学成果奖3项，其中一等奖1项，二等奖2项。",
                  en: `Jianrong Tan, Academician of the Chinese Academy of Engineering, is a distinguished professor and doctoral supervisor at Zhejiang University. He currently serves as the Director of the Department of Design Engineering and Automation at Zhejiang University, Deputy Director of the State Key Laboratory of Fluid Power and Mechatronic Systems, and a member of the Academic Committee of the State Key Laboratory of CAD&CG at Zhejiang University. He is also the Chairman of the Mechanical Design Division of the Chinese Society of Mechanical Engineering, Honorary President of the Chinese Society for Graphics, and Chairman of the Teaching Steering Committee for Engineering Graphics under the Ministry of Education. He has received numerous honors including the first "National Outstanding Youth Science Fund," "Cross-Century Talent in Graphic Technology for Young and Middle-aged Scholars," Special Government Allowance from the State Council, "Key Discipline Leader in Zhejiang Province," "First Level in Zhejiang Province's '151' Talent Project," "Key Cultivation Talent in New Century in Zhejiang Province," Expert in CIMS Theme Design Automation under National 863 Program, "First and Second Level in National 'Hundred-Thousand-Ten Thousand Talents Project,'" "Outstanding Individual in 863 Advanced Personal under 11th Five-Year Plan," and "Outstanding Contribution Award for Execution of National Science and Technology Plan under 11th Five-Year Plan." He proposed technologies for customized design with multiple varieties and large batches, digital prototype design with multiple performances, and multi-parameter analysis and matching design technology. His research achievements have won him the second prize in National Technological Invention Award and five second prizes in National Science and Technology Progress Award, as well as seven first prizes in provincial and ministerial level Science and Technology Progress Awards. His teaching achievements have won three national-level excellent teaching achievement awards, including one first prize and two second prizes.`,
                },
              },
            ],
            href: {
              zh: "/2025/zh/keynote/1",
              en: "/2025/en/keynote/1",
            },
          },
        ],
      },
      {
        time: "9:35 - 9:50",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "茶歇",
              en: "Coffee Break",
            },
          },
        ],
      },
      {
        time: "9:50 - 10:40",
        sessions: [
          {
            id: "keynote-2",
            type: "keynote",
            title: {
              zh: "大会特邀报告 2：我们是否正站在可视化领域变革的前夜？",
              en: "Keynote 2: Are we between breakthroughs making a transformative shift of the visualization field?",
            },
            location: {
              zh: "二楼文澜厅",
              en: "Wenlan Hall, 2F",
            },
            speakers: [
              {
                name: {
                  zh: "Kwan-Liu Ma",
                  en: "Kwan-Liu Ma",
                },
                suffix: {
                  zh: "教授",
                  en: "(Professor)",
                },
                affiliation: {
                  zh: "加州大学戴维斯分校",
                  en: "University of California, Davis",
                },
                photo: PhotoKLM,
                abstract: {
                  en: "The advancement of visualization has had a deep and profound impact across science, industry, and society. Mainstream visualization tools and dashboards have reached a level of maturity, leading to better data literacy, more accessible information and analytics, and improved decision making. What are outstanding research topics for us to pursue? In particular, as a swarm of researchers and students in our field go after AI/ML work, what else we must address to ensure real innovation is happening so our field will continue to grow. In this talk, I will use my own projects to reflect on a transformative shift we are observing.",
                  zh: "可视化的进步对科学、工业和社会产生了深远的影响。主流的可视化工具和仪表盘已经达到了一定的成熟度，促进了更好的数据素养、更易获取的信息和分析，以及更有效的决策。我们应该追求哪些杰出的研究课题？特别是，随着越来越多的研究人员和学生投身于人工智能/机器学习工作，我们还必须解决哪些问题，以确保真正的创新发生，从而使我们的领域继续发展。在本次报告中，我将通过自己的项目反思我们正在观察到的变革性转变。",
                },
                description: {
                  en: "Kwan-Liu Ma (马匡六) is a distinguished professor of computer science at the University of California, Davis, where he leads the VIDI Research Group. Before joining UC Davis, he was a staff scientist at ICASE of the NASA Langley Research Center (1993-1999). Professor Ma received his PhD degree in computer science from the University of Utah in 1993. His research interests include visualization, computer graphics, human computer interaction, and high-performance computing. For his significant research accomplishments, Professor Ma has received many recognitions, including the NSF PECASE award in 2000, elected IEEE Fellow in 2012, the IEEE VGTC Visualization Technical Achievement Award in 2013, inducted into the IEEE Visualization Academy in 2019, and elected ACM Fellow in 2023. Professor Ma presently serves on both the IEEE VIS Steering Committee and IEEE PacificVis Steering Committee.",
                  zh: "马匡六（Kwan-Liu Ma）是加州大学戴维斯分校计算机科学系的杰出教授，领导着VIDI研究组。在加入加州大学戴维斯分校之前，他曾在NASA兰利研究中心的ICASE担任科学家（1993-1999）。马教授于1993年在犹他大学获得计算机科学博士学位。他的研究兴趣包括可视化、计算机图形学、人机交互和高性能计算。由于其显著的研究成就，马教授获得了许多荣誉，包括2000年的NSF PECASE奖、2012年当选IEEE Fellow、2013年获得IEEE VGTC可视化技术成就奖、2019年入选IEEE可视化学院，以及2023年当选ACM Fellow。马教授目前同时担任IEEE VIS指导委员会和IEEE PacificVis指导委员会的成员。",
                },
              },
            ],
            href: {
              zh: "/2025/zh/keynote/2",
              en: "/2025/en/keynote/2",
            },
          },
        ],
      },
      {
        time: "10:40 - 11:30",
        sessions: [
          {
            type: "panel",
            title: {
              zh: "圆桌论坛 1：可视化学科发展战略论坛",
              en: "Panel 1: Development Strategy of Visualization Discipline",
            },
            location: {
              zh: "二楼文澜厅",
              en: "Wenlan Hall, 2F",
            },
          },
        ],
      },
      {
        time: "11:30 - 12:20",
        sessions: [
          {
            type: "paper",
            title: {
              zh: "论文速览和海报速览",
              en: "Paper and Poster Fast-forward",
            },
            location: {
              zh: "二楼文澜厅",
              en: "Wenlan Hall, 2F",
            },
          },
        ],
      },
      {
        time: "9:00 - 12:00",
        sessions: [
          {
            type: "exhibition",
            title: {
              zh: "企业展、论文海报展、艺术展",
              en: "Industry, Poster, and Art Exhibition",
            },
            location: {
              zh: "三楼文悦厅",
              en: "Wenyue Hall, 3F",
            },
          },
        ],
      },
    ],
  },
  {
    date: {
      zh: "2025 年 7 月 20 日 下午",
      en: "July 20, 2025 - Afternoon",
    },
    timeslots: [
      {
        time: "13:30 - 15:00",
        sessions: [
          {
            id: "topic-1",
            type: "topic",
            title: {
              zh: "专题 1：大模型与可视分析",
              en: "Topic 1: Large Models and Visual Analytics",
            },
            location: {
              zh: "三楼文锦厅",
              en: "Wenjing Hall, 3F",
            },
            chair: {
              name: {
                zh: "陈长建",
                en: "Changjian Chen",
              },
              affiliation: {
                zh: "湖南大学",
                en: "Hunan University",
              },
              photo: PhotoCCJ,
            },
            speakers: [
              {
                talk: {
                  zh: "智能数据洞察：大模型驱动的可视化与可视分析",
                  en: "Intelligent Data Insights: Visualization and Visual Analytics Driven by Large Models",
                },
                name: {
                  zh: "陈思明",
                  en: "Siming Chen",
                },
                affiliation: {
                  zh: "复旦大学",
                  en: "Fudan University",
                },
                photo: PhotoCSM,
                abstract: {
                  zh: "可视化技术通过将数据转化为图形，让人直观地感知大数据的规律与特征。传统的可视化技术通过人机交互，让用户从不同角度探索数据，但这个过程常常需要大量人力并且缺少探索方向。大模型驱动的可视分析提供了新的人智协同范式，探索智能数据分析的方法。在这个过程中，我们将可视化作为人智协同的桥梁，让人感知数据并且将想法通过交互传递给模型。我们会分享大模型驱动的可视化故事叙述方法与数据分析方法，探索智能数据洞察的挖掘与传递。",
                  en: "Visualization technology transforms data into graphics, allowing people to intuitively perceive patterns and characteristics of big data. Traditional visualization techniques enable users to explore data from different angles through human-computer interaction, but this process often requires significant human effort and lacks exploration direction. Large model-driven visual analytics offers a new paradigm of human-intelligence collaboration, exploring methods for intelligent data analysis. In this process, we use visualization as a bridge for human-intelligence collaboration, enabling people to perceive data and convey their ideas to the model through interaction. We will share methods for large model-driven visual storytelling and data analysis, exploring the excavation and transmission of intelligent data insights.",
                },
                description: {
                  zh: `复旦大学大数据学院青年研究员，博士生导师，上海市高层次引进人才，复旦大学可视分析与智能决策实验室负责人（FDUVIS），复旦仲英学者。曾任德国弗劳恩霍夫智能分析和信息系统研究所（Fraunhofer IAIS）研究科学家与德国波恩大学的博士后研究员。复旦学士（2011）、北大博士（2017）。从事大数据可视化与可视分析，交互式人工智能的研究，主要研究方向包括：AI+VIS、大模型驱动的可视分析、社交媒体分析、自动驾驶、金融科技、数字孪生等，共发表论文100余篇，其中在IEEE VIS，IEEE TVCG, ACM CHI, CSCW，UIST等顶级国际人机交互人智协同会议以及期刊(CCF A)上发表40余篇文章。曾获评AI2000十年间国际可视化研究最有影响力提名奖(全球100名)，主持、参与国家、省部级项目十余项，担任IEEE VIS 国际程序委员会委员，IEEE CG&A国际期刊副主编，Visual Informatics期刊青年编委、IEEE PacificVis论文（VizNotes）主席，ChinaVis数据分析挑战赛主席，VGI Geovisual Analytics Workshop地理时空可视分析研讨会共同主席等。更多信息请访问<a href="http://fduvis.net" target="_blank">http://fduvis.net</a>。`,
                  en: `Young researcher and doctoral supervisor at the School of Data Science, Fudan University, and head of the Fudan University Visual Analytics and Intelligent Decision Laboratory (FDUVIS). He is a high-level talent introduced by Shanghai and a Fudan Zhongying Scholar. Previously, he served as a research scientist at the Fraunhofer Institute for Intelligent Analysis and Information Systems (Fraunhofer IAIS) in Germany and a postdoctoral researcher at the University of Bonn. He holds a bachelor's degree from Fudan University (2011) and a PhD from Peking University (2017). His research focuses on big data visualization and visual analytics, interactive artificial intelligence, with key areas including AI+VIS, large model-driven visual analytics, social media analysis, autonomous driving, fintech, and digital twins. He has published over 100 papers, including more than 40 articles in top international human-computer interaction conferences and journals such as IEEE VIS, IEEE TVCG, ACM CHI, CSCW, and UIST. He has been nominated for the AI2000 Ten-Year Most Influential Visualization Research Award (top 100 globally). He has led and participated in over ten national and provincial-level projects. He serves as an international program committee member for IEEE VIS, associate editor for the IEEE CG&A journal, youth editorial board member for the Visual Informatics journal, chair of the IEEE PacificVis paper (VizNotes), chair of the ChinaVis Data Analysis Challenge, and co-chair of the VGI Geovisual Analytics Workshop on geographic and spatiotemporal visual analytics. For more information, please visit <a href="http://fduvis.net" target="_blank">http://fduvis.net</a>.`,
                },
              },
              {
                talk: {
                  zh: "面向可信大模型的可视分析技术",
                  en: "Visual Analytics for Trustworthy Large Language Models",
                },
                name: {
                  zh: "邓达臻",
                  en: "Dazhen Deng",
                },
                affiliation: {
                  zh: "浙江大学",
                  en: "Zhejiang University",
                },
                photo: PhotoDDZ,
                abstract: {
                  zh: "在大模型迅猛发展的背景下，如何理解、优化以及利用大模型成为当前人工智能与可视化领域的重要研究课题。本报告探讨可视分析在可信大模型研究中的角色。我们将大模型本身作为研究对象，面向其海量参数、复杂结构以及训练与推理过程中产生的高维数据，探讨如何借助可视分析技术支持数据集构建、训练过程优化与模型可解释性分析。通过系统化的框架、技术创新与案例研究，本报告旨在展现大模型与可视分析之间日益紧密的融合趋势，启发面向未来的新型人机协同分析范式。",
                  en: "Against the backdrop of rapid development in large language models (LLMs), understanding, optimizing, and utilizing these models has become a crucial research topic in artificial intelligence and visualization. This talk explores the role of visual analytics in trustworthy LLM research. Taking LLMs as the research object, we examine how visual analytics can support dataset construction, training process optimization, and model interpretability analysis, addressing their massive parameters, complex structures, and high-dimensional data generated during training and inference. Through systematic frameworks, technical innovations, and case studies, this talk aims to demonstrate the increasingly close integration between LLMs and visual analytics, inspiring new paradigms for future human-computer collaborative analysis.",
                },
                description: {
                  zh: `邓达臻是浙江大学软件学院"百人计划"研究员、浙江大学启真优秀青年学者。主要研究方向是大模型和可视分析，围绕大模型驱动的可视分析、大模型安全可视分析以及可视分析在体育、城市等领域中的应用开展系列研究。在IEEE VIS、IEEE TVCG、ACM KDD、ACM CHI、UIST等CCF-A类可视分析、人工智能和人机交互会议/期刊上发表相关论文20余篇，曾获CCF-A类会议IEEE VIS 2022、2024最佳论文提名奖，获2023年浙江省科学技术进步一等奖。担任IEEE VIS、ACM CHI等权威会议审稿人，PacificVis TVCG Journal Track程序委员会成员。主持/参与多项国家自然科学基金、国家重点研发计划等国家级项目和多项省级、计划单列市级项目。相关研究成果应用落地至了中国乒乓球大数据分析平台，助力国家队备战国际重大赛事，获得良好的社会效益。`,
                  en: 'Dazhen Deng is a "Hundred Talents Program" researcher at the School of Software, Zhejiang University, and a Qizhen Outstanding Young Scholar. His main research focuses on large language models and visual analytics, conducting series of studies on LLM-driven visual analytics, LLM security visual analytics, and applications of visual analytics in sports, urban studies, and other fields. He has published over 20 papers in CCF-A conferences/journals including IEEE VIS, IEEE TVCG, ACM KDD, ACM CHI, and UIST. He received Best Paper Nominations at IEEE VIS 2022 and 2024, and the First Prize of Zhejiang Province Science and Technology Progress Award in 2023. He serves as a reviewer for authoritative conferences such as IEEE VIS and ACM CHI, and as a program committee member for PacificVis TVCG Journal Track. He leads/participates in multiple national projects including National Natural Science Foundation and National Key R&D Program, as well as various provincial and municipal projects. His research has been successfully applied to China\'s table tennis big data analysis platform, supporting the national team in preparing for major international competitions with significant social benefits.',
                },
              },
              {
                talk: {
                  zh: "大模型与可视分析协同驱动的科学发现：从预测筛选到机制假设生成",
                  en: "Large Models and Visual Analytics Collaborative-Driven Scientific Discovery: From Prediction Screening to Mechanism Hypothesis Generation",
                },
                name: {
                  zh: "李权",
                  en: "Quan Li",
                },
                affiliation: {
                  zh: "上海科技大学",
                  en: "ShanghaiTech University",
                },
                photo: PhotoLQ,
                abstract: {
                  zh: "随着人工智能预测模型在科学研究中展现出强大的知识发现潜力，如何借助可视分析手段理解其推理过程，并从中筛选出最具实验验证价值的预测结果，已成为“AI for Science”实践中的核心挑战之一。本报告聚焦于复杂的生物机制预测任务，提出并迭代构建了两个逻辑关联的可视分析系统，以实现人机协同下的预测可解释性增强与高效结果筛选。第一个系统聚焦于模型推理路径的剖析与验证，帮助专家在已知机制的基础上识别潜在遗漏的生物机制预测，借助可视化提升理解、支持机制推理。第二个系统进一步引入“假设驱动”的科学发现理念，融合大语言模型的知识检索与推理能力，结合结构化知识图谱，辅助用户提出、解释并筛选新的生物假设，推动生成式发现过程。本报告展示了从预测结果理解到机制假设生成的连续探索路径，体现了可视分析在提升AI可信度与加速知识发现中的关键作用，也为构建以可解释性为核心的人机协同分析流程提供了新的设计范式。",
                  en: "As AI prediction models demonstrate strong knowledge discovery potential in scientific research, understanding their reasoning process through visual analytics and screening the most experimentally valuable predictions has become a core challenge in 'AI for Science' practices. This talk focuses on complex biological mechanism prediction tasks, proposing and iteratively building two logically connected visual analytics systems to enhance prediction interpretability and efficient result screening under human-machine collaboration. The first system focuses on analyzing and validating model reasoning paths, helping experts identify potentially overlooked biological mechanism predictions based on known mechanisms, leveraging visualization to enhance understanding and support mechanism reasoning. The second system introduces a 'hypothesis-driven' scientific discovery concept, integrating large language models' knowledge retrieval and reasoning capabilities with structured knowledge graphs to assist users in proposing, interpreting, and screening new biological hypotheses, driving generative discovery processes. This talk showcases a continuous exploration path from prediction understanding to hypothesis generation, highlighting the critical role of visual analytics in enhancing AI trustworthiness and accelerating knowledge discovery, and provides a new design paradigm for building human-machine collaborative analysis workflows centered on interpretability.",
                },
                description: {
                  zh: "李权，上海科技大学信息科学与技术学院助理教授（终身教授序列）、研究员、博士生导师，从事人工智能及可视分析、可解释性机器学习以及人机交互技术的研究。他博士毕业于香港科技大学计算机科学与工程学系。任中国图象图形学学会可视化与可视分析专委会委员，IEEE VIS Paper程序委员会委员、ChinaVis论文国际程序委员会委员、IEEE VIS, EuroVis, PacificVis, ChinaVis, ACM CHI/CSCW及TVCG等顶级学术会议期刊审稿人，他曾任美国佐治亚理工学院计算机科学与工程学院的访问研究员、微众银行人工智能部资深研究员及网易游戏资深研究员。他的学术成果发表在IEEE VIS, EuroVis, IEEE PacificVis, ACM CHI, CSCW, UIST, IUI, CGF, TVCG等可视化及人机交互顶级期刊和会议，获得ACM CHI 2025最佳论文奖，并主持国家自然科学基金面上项目。更多信息见https://faculty.sist.shanghaitech.edu.cn/liquan/",
                  en: "Quan Li, Assistant Professor (tenure-track) at the School of Information Science and Technology, ShanghaiTech University, is a researcher and doctoral supervisor specializing in artificial intelligence and visual analytics, explainable machine learning, and human-computer interaction technologies. He received his PhD from the Department of Computer Science and Engineering at the Hong Kong University of Science and Technology. He serves as a committee member of the Visualization and Visual Analytics Special Committee of the Chinese Society for Image and Graphics, IEEE VIS Paper Program Committee member, and ChinaVis Paper International Program Committee member. He has reviewed for top conferences and journals such as IEEE VIS, EuroVis, PacificVis, ChinaVis, ACM CHI/CSCW, and TVCG. He has previously worked as a visiting researcher at Georgia Tech's School of Computer Science and Engineering, a senior researcher at WeBank's AI Department, and a senior researcher at NetEase Games. His academic achievements have been published in top visualization and HCI journals and conferences such as IEEE VIS, EuroVis, IEEE PacificVis, ACM CHI, CSCW, UIST, IUI, CGF, and TVCG. He received the ACM CHI 2025 Best Paper Award and leads a National Natural Science Foundation project. More information can be found at https://faculty.sist.shanghaitech.edu.cn/liquan/",
                },
              },
              {
                talk: {
                  zh: "交互式科学智能：支持自然科学研究决策的人智协同方法",
                  en: "Interactive Scientific Intelligence: Human-AI Collaborative Methods for Supporting Natural Science Research Decisions",
                },
                name: {
                  zh: "石楚涵",
                  en: "Chuhan Shi",
                },
                affiliation: {
                  zh: "东南大学",
                  en: "Southeast University",
                },
                photo: PhotoSCH,
                abstract: {
                  zh: "随着科学智能（AI for Science）的兴起，大量面向自然科学研究的AI方法不断涌现，显著提升了科研效率并加速了科学发现进程，引发了传统科学研究范式的革命性转变。在此背景下，单一的“人类主导”或“AI主导”的科研模式已难以适应复杂、多变的研究需求，亟需构建多样化的人智协同范式以充分融合研究人员的领域经验与创造力和AI强大的计算与模式识别能力，实现研究人员和AI之间的高效、深度协作。本报告将梳理科学智能领域的关键进展与人智协同的基本概念，并探讨在不同科研阶段和决策场景下进行人智协同方法设计的机遇与挑战，为推动更智能、更灵活的自然科学研究新模式提供实践指导。",
                  en: "With the rise of scientific intelligence (AI for Science), numerous AI methods targeting natural science research have emerged, significantly improving research efficiency and accelerating scientific discovery processes, triggering a revolutionary shift in traditional scientific research paradigms. In this context, single 'human-led' or 'AI-led' research modes can no longer meet the complex and variable research demands, necessitating the construction of diverse human-AI collaborative paradigms to fully integrate researchers' domain expertise and creativity with AI's powerful computational and pattern recognition capabilities, achieving efficient and deep collaboration between researchers and AI. This talk will review key advancements in scientific intelligence and the basic concepts of human-AI collaboration, exploring opportunities and challenges in designing human-AI collaborative methods at different research stages and decision-making scenarios, providing practical guidance for promoting smarter and more flexible new modes of natural science research.",
                },
                description: {
                  zh: "石楚涵，东南大学计算机科学与工程学院副教授，博士毕业于香港科技大学计算机科学与工程学系。研究方向包括数据可视化、可视分析、人智协同及其在自然科学、精准医疗等领域的应用，在相关领域的IEEE VIS、IEEE TVCG、ACM CHI、ACM UIST、ACM CSCW等国际顶级期刊和会议发表论文20余篇。任中国图象图形学学会可视化与可视分析专委会委员、中国计算机学会人机交互专委会委员，ACM CHI、ACM CSCW等国际权威会议的区域副主席，以及IEEE VIS、ACM UIST、IEEE PacificVis等会议审稿人。更多信息见：https://shichuhan.github.io/",
                  en: "Chuhan Shi, Associate Professor at the School of Computer Science and Engineering, Southeast University, received her PhD from the Department of Computer Science and Engineering at the Hong Kong University of Science and Technology. Her research focuses on data visualization, visual analytics, human-AI collaboration, and their applications in natural sciences and precision medicine. She has published over 20 papers in top international journals and conferences such as IEEE VIS, IEEE TVCG, ACM CHI, ACM UIST, and ACM CSCW. She serves as a committee member of the Visualization and Visual Analytics Special Committee of the Chinese Society for Image and Graphics, and the Human-Computer Interaction Special Committee of the China Computer Federation. She is a regional vice-chair for ACM CHI and ACM CSCW, and a reviewer for conferences such as IEEE VIS, ACM UIST, and IEEE PacificVis. More information can be found at https://shichuhan.github.io/",
                },
              },
            ],
          },
          {
            type: "activity",
            title: {
              zh: "艺术项目开幕与艺术家讲座",
              en: "Art Program Opening and Artist Talks",
            },
            location: {
              zh: "二楼文澜厅A",
              en: "Wenlan Hall A, 2F",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 1：Graph and Network Analytics",
              en: "Paper Session 1: Graph and Network Analytics",
            },
            location: {
              zh: "三楼兰桥厅",
              en: "Lanqiao Hall, 3F",
            },
          },
        ],
      },
      {
        time: "15:00 - 15:15",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "茶歇",
              en: "Coffee Break",
            },
          },
        ],
      },
      {
        time: "15:15 - 16:45",
        sessions: [
          {
            id: "topic-2",
            type: "topic",
            title: {
              zh: "专题 2：面向工业制造的高性能科学可视化",
              en: "Topic 2: High-Performance Scientific Visualization for Industrial Manufacturing",
            },
            location: {
              zh: "三楼文锦厅",
              en: "Wenjing Hall, 3F",
            },
            chair: {
              name: {
                zh: "郭栋梁",
                en: "Dongliang Guo",
              },
              affiliation: {
                zh: "燕山大学",
                en: "Yanshan University",
              },
              photo: PhotoGDL,
            },
            speakers: [
              {
                talk: {
                  zh: "亿级网格油藏可视化技术",
                  en: "Visualization Technology for Billion-Grid Reservoir Models",
                },
                name: {
                  zh: "李俊超",
                  en: "Junchao Li",
                },
                affiliation: {
                  zh: "西安石油大学",
                  en: "Xi'an Shiyou University",
                },
                photo: PhotoLJC,
                abstract: {
                  zh: "本团队开发了面向亿级网格油藏模型的高效可视化系统，集成了大规模数据加载、并行渲染优化、动态剖面生成与属性动画展示等功能。系统采用OSG三维引擎与D2D二维图形加速，支持实时交互与多模式展示，显著提升了油藏模拟结果的可视化效率与工程应用价值。",
                  en: "Our team has developed an efficient visualization system for billion-grid reservoir models, integrating large-scale data loading, parallel rendering optimization, dynamic profile generation, and attribute animation display. The system uses the OSG 3D engine and D2D 2D graphics acceleration, supporting real-time interaction and multi-mode display, significantly improving the visualization efficiency and engineering application value of reservoir simulation results.",
                },
                description: {
                  zh: "西安石油大学教授、博士生导师。北京大学力学专业博士，中国石油勘探开发研究院博士后。长期致力于复杂油气藏数值模拟与地质工程一体化方法及软件研发工作，曾主持/参与多个大型商业软件系统研发。2021年加入西安石油大学以来，在教学科研工作中积累了丰富的大型软件系统开发与产业化推广经验。发表SCI/EI论文30余篇，获授权发明专利20项，出版学术专著2部，获省部级科技进步奖一等奖3项，主持国家级项目2项、各级科研项目10余项。",
                  en: "Professor and doctoral supervisor at Xi'an Shiyou University. Holds a PhD in Mechanics from Peking University and completed postdoctoral research at the China Petroleum Exploration and Development Research Institute. Has long been committed to numerical simulation of complex oil and gas reservoirs and the development of integrated geological engineering methods and software. Since joining Xi'an Shiyou University in 2021, has accumulated extensive experience in developing and industrializing large software systems in teaching and research. Published over 30 SCI/EI papers, authorized 20 invention patents, authored 2 academic monographs, won three provincial and ministerial first prizes for scientific and technological progress, and led 2 national-level projects and over 10 other research projects.",
                },
              },
              {
                talk: {
                  zh: "面向工业场景的流场与氟材料可视化及可视分析技术应用",
                  en: "Visualization and Visual Analytics Applications for Flow Fields and Fluorine Materials in Industrial Scenarios",
                },
                name: {
                  zh: "吕道明",
                  en: "Daoming Lü",
                },
                affiliation: {
                  zh: "四川轻化工大学",
                  en: "Sichuan University of Light and Chemical Industry",
                },
                photo: PhotoLDM,
                abstract: {
                  zh: "本报告聚焦工业场景，深入探讨流场与氟材料可视化及可视分析技术的应用。流场可视化技术可清晰呈现工业流体运动态势，氟材料可视化则能直观展示其分布与状态。通过实际案例，阐述二者在工业生产监控、故障诊断、工艺优化等环节的具体应用，分析其带来的效益与价值，为工业领域相关技术升级与应用提供参考。",
                  en: "This talk focuses on industrial scenarios, exploring the applications of visualization and visual analytics technologies for flow fields and fluorine materials. Flow field visualization technology clearly presents the dynamics of industrial fluid motion, while fluorine material visualization intuitively displays its distribution and state. Through practical cases, the talk elaborates on their specific applications in industrial production monitoring, fault diagnosis, and process optimization, analyzing the benefits and value they bring, providing references for technology upgrades and applications in the industrial field.",
                },
                description: {
                  zh: "吕道明，四川轻化工大学特聘副教授，四川省大数据可视分析技术工程实验室副主任。研究方向包括人工智能、可视化等，其研究工作曾发表在IEEE T-NNLS、IEEE T-ETCI、iScience、AAAI、IJCAI、NeurIPS、AAMAS等国际知名期刊和会议上。并长期担任AAAI，IJCAI，NeurIPS，ICML，ICLR，UAI，Smart Health，Machine Learning Jounal，IEEE-TNNLS，ACM TIST等会议及期刊审稿人。曾获AAMAS-2022 OptLearnMAS workshop最佳论文奖，UAI-2022最佳审稿人奖。",
                  en: "Daoming Lü, Associate Professor at Sichuan University of Light and Chemical Industry, Deputy Director of Sichuan Province Big Data Visual Analytics Technology Engineering Laboratory. His research focuses on artificial intelligence and visualization, with work published in internationally renowned journals and conferences such as IEEE T-NNLS, IEEE T-ETCI, iScience, AAAI, IJCAI, NeurIPS, and AAMAS. He has served as a reviewer for conferences and journals including AAAI, IJCAI, NeurIPS, ICML, ICLR, UAI, Smart Health, Machine Learning Journal, IEEE-TNNLS, and ACM TIST. He received the Best Paper Award at the AAMAS-2022 OptLearnMAS workshop and the Best Reviewer Award at UAI-2022.",
                },
              },
              {
                talk: {
                  zh: "面向可视分析的大规模科学数据约简与重建",
                  en: "Large-Scale Scientific Data Reduction and Reconstruction for Visual Analytics",
                },
                name: {
                  zh: "毕重科",
                  en: "Zhongke Bi",
                },
                affiliation: {
                  zh: "天津大学",
                  en: "Tianjin University",
                },
                photo: PhotoBCK,
                abstract: {
                  zh: "随着超级计算机的快速发展，领域专家执行的数值模拟的规模越来越大，对其进行可视分析也越来越困难。为此我们总结了对超大规模数值模拟进行可视分析存在的挑战，并对其可能的解决方案进行了探索。首先，为了缓解大规模数值模拟结果数据的存储与传输压力，我们从数据约简的角度进行了研究。同时，为了避免约简后的数据产生大量的重要特征的丢失，我们接着又设计了数据重建的方案，为领域专家提供高精度的数值模拟细节。通过我们数据约简与重建方案，既缓解了数据存储与传输的压力，也保证了重构的科学数据的精度。",
                  en: "With the rapid development of supercomputers, the scale of numerical simulations performed by domain experts is increasing, making visual analytics more challenging. To address this, we summarized the challenges of visual analytics for ultra-large-scale numerical simulations and explored possible solutions. First, to alleviate the storage and transmission pressure of large-scale numerical simulation results, we conducted research on data reduction. Then, to avoid the loss of important features in reduced data, we designed a data reconstruction scheme to provide domain experts with high-precision numerical simulation details. Our data reduction and reconstruction scheme alleviates storage and transmission pressure while ensuring the accuracy of reconstructed scientific data.",
                },
                description: {
                  zh: "天津大学智能与计算学部英才教授、博士生导师，国家重点研发计划首席科学家员。2012年于东京大学获理学博士学位，2012年至2016年在日本理化学研究所担任研究员，2016年加入天津大学。主要研究方向为高性能计算、可视化和人工智能。现任CSIG可视化与可视分析专委会常务委员，CCF高性能计算专委会委员，CCF计算机辅助设计与图形学专委会委员，天津市人工智能学会理事，天津市智能科学与研究会监事，中国图学学会可视化与认知计算专委会等10个专业委员会委员。近5年，主持国家重点研发计划1项，173项目1项，国家自然基金2项，预研项目2项，国家数值风洞重点项目2项，各部委项目2项。参与国家自然基金3项（包括重点项目1项），各部委项目4项，天津市基金重点项目1项。在高性能计算和可视化领域发表论文100余篇。成果在核电、环境保护、数值风洞等领域得到应用。",
                  en: "Zhongke Bi, Professor at Tianjin University's School of Intelligence and Computing, doctoral supervisor, and Chief Scientist of the National Key R&D Program. He received his PhD in Science from the University of Tokyo in 2012 and worked as a researcher at Japan's RIKEN from 2012 to 2016 before joining Tianjin University. His main research areas are high-performance computing, visualization, and artificial intelligence. He serves as a standing committee member of CSIG Visualization and Visual Analytics, a member of CCF High-Performance Computing, and a member of CCF Computer-Aided Design and Graphics. Over the past five years, he has led one National Key R&D Program, one 173 Project, two National Natural Science Foundation projects, two pre-research projects, and two National Numerical Wind Tunnel key projects. He has participated in three National Natural Science Foundation projects (including one key project), four ministerial projects, and one Tianjin key project. He has published over 100 papers in high-performance computing and visualization, with applications in nuclear power, environmental protection, and numerical wind tunnels.",
                },
              },
              {
                talk: {
                  zh: "数据驱动与物理引导相融合的流场高保真可视分析方法研究",
                  en: "Research on High-Fidelity Visual Analytics Methods Combining Data-Driven and Physics-Guided Approaches for Flow Fields",
                },
                name: {
                  zh: "邓亮",
                  en: "Liang Deng",
                },
                affiliation: {
                  zh: "中国空气动力研究与发展中心",
                  en: "China Aerodynamics Research and Development Center",
                },
                photo: PhotoDL,
                abstract: {
                  zh: "高保真可视分析是解构复杂流场数据中知识和规律的核心技术，但传统方法因存储限制被迫采用时空稀疏采样，导致动态特征丢失，而现有数据驱动模型因物理知识嵌入浅层化与不确定性量化缺失，难以满足工程可信度需求。针对上述问题，本报告提出了“数据驱动+物理引导+不确定性量化”三位一体的创新框架，开展了以下研究：（1）基于自主NNW系列CFD软件，构建了兼顾网格分辨率和数值精度的高保真数据集HFR-Beach，为智能模型提供高质量数据支撑；（2）从数据表征、模型架构、训练策略三层面，提出了物理引导的智能模型设计方法（PCSAGAN、PgTransGAN、PEINR），增强模型可解释性和泛化能力；（3）引入贝叶斯方法，建立了融合不确定性量化的可信度评价体系，确保智能模型决策的科学性和可靠性。相关研究成果形成了高精度、可解释的高保真可视分析工具，推动了智能流场分析从“黑箱拟合”向“白箱决策”的范式跨越。",
                  en: "High-fidelity visual analytics is a core technology for deconstructing knowledge and patterns in complex flow field data. However, traditional methods are forced to adopt spatiotemporal sparse sampling due to storage limitations, leading to the loss of dynamic features. Existing data-driven models lack deep embedding of physical knowledge and uncertainty quantification, making them difficult to meet engineering credibility requirements. To address these issues, this talk proposes an innovative framework combining 'data-driven + physics-guided + uncertainty quantification' and conducts the following research: (1) Based on the self-developed NNW series CFD software, a high-fidelity dataset HFR-Beach balancing grid resolution and numerical accuracy is constructed to provide high-quality data support for intelligent models; (2) From data representation, model architecture, and training strategy, physics-guided intelligent model design methods (PCSAGAN, PgTransGAN, PEINR) are proposed to enhance model interpretability and generalization; (3) Bayesian methods are introduced to establish a credibility evaluation system integrating uncertainty quantification, ensuring the scientific and reliability of intelligent model decisions. The research results form high-precision, interpretable high-fidelity visual analytics tools, promoting the paradigm shift of intelligent flow field analysis from 'black-box fitting' to 'white-box decision-making'.",
                },
                description: {
                  zh: "博士，中国空气动力研究与发展中心高级工程师，长期从事高性能CFD计算和流体仿真大数据智能分析的研究，入选中国空气动力研究与发展中心“驭风空天”青年英才托举计划，主持国防技术领域基金项目、四川省重点研发项目、装备预研项目等5项，参与国家数值风洞工程、国家重点研发计划、国家自然科学基金等6项重大项目，在ICML、PPoPP、SC、DAC、TACO、TNNLS、JPDC等高国内外重要期刊和会议上发表论文30余篇，撰写学术专著1部，授权国家发明专利和软件著作权10余项。",
                  en: "Dr. Liang Deng, Senior Engineer at the China Aerodynamics Research and Development Center, has long been engaged in high-performance CFD computation and intelligent analysis of fluid simulation big data. He was selected for the 'Wind Control Aerospace' Youth Talent Support Program of the China Aerodynamics Research and Development Center. He has led five projects, including national defense technology fund projects, Sichuan Province key R&D projects, and equipment pre-research projects, and participated in six major projects, including the National Numerical Wind Tunnel Project, National Key R&D Program, and National Natural Science Foundation. He has published over 30 papers in important domestic and international journals and conferences such as ICML, PPoPP, SC, DAC, TACO, TNNLS, and JPDC, authored one academic monograph, and holds over 10 national invention patents and software copyrights.",
                },
              },
            ],
          },
          {
            type: "topic",
            title: {
              zh: "专题 3: 文化遗产可视化",
              en: "Topic 3: Cultural Heritage Visualization",
            },
            location: {
              zh: "二楼文澜厅A",
              en: "Wenlan Hall A, 2F",
            },
          },
        ],
      },
      {
        time: "16:55 - 18:25",
        sessions: [
          {
            type: "topic",
            title: {
              zh: "专题 4：可视化叙事",
              en: "Topic 4: Visual Storytelling",
            },
            location: {
              zh: "三楼文锦厅",
              en: "Wenjing Hall, 3F",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 2：AI-Driven Visual Analytics",
              en: "Paper Session 2: AI-Driven Visual Analytics",
            },
            location: {
              zh: "二楼文澜厅A",
              en: "Wenlan Hall A, 2F",
            },
          },
        ],
      },
      {
        time: "13:30 - 18:25",
        sessions: [
          {
            type: "challenge",
            title: {
              zh: "数据可视化竞赛与颁奖",
              en: "Data Visualization Challenges and Award Ceremony",
            },
            location: {
              zh: "二楼文澜厅B",
              en: "Wenlan Hall B, 2F",
            },
          },
        ],
      },
      {
        time: "13:30 - 18:00",
        sessions: [
          {
            type: "exhibition",
            title: {
              zh: "企业展、论文海报展、艺术展",
              en: "Industry, Poster, and Art Exhibition",
            },
            location: {
              zh: "三楼文悦厅",
              en: "Wenyue Hall, 3F",
            },
          },
        ],
      },
    ],
  },
  {
    date: {
      zh: "2025 年 7 月 21 日 上午",
      en: "July 21, 2025 - Morning",
    },
    timeslots: [
      {
        time: "7:30 - 16:45",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "会议签到及现场注册",
              en: "Conference Registration and Check-in",
            },
            location: {
              zh: "酒店大厅",
              en: "Hotel Lobby",
            },
          },
        ],
      },
      {
        time: "8:30 - 10:00",
        sessions: [
          {
            type: "topic",
            title: {
              zh: "专题 5：沉浸式可视化与交互",
              en: "Topic 5: Immersive Visualization and Interaction",
            },
            location: {
              zh: "三楼文锦厅",
              en: "Wenjing Hall, 3F",
            },
          },
          {
            type: "topic",
            title: {
              zh: "专题 6：青年学者经验分享",
              en: "Topic 6: Experience Sharing by Young Scholars",
            },
            location: {
              zh: "二楼文澜厅A",
              en: "Wenlan Hall A, 2F",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 3：Theory, Evaluation, and Tools",
              en: "Paper Session 3: Theory, Evaluation, and Tools",
            },
            location: {
              zh: "三楼兰桥厅",
              en: "Lanqiao Hall, 3F",
            },
          },
          {
            type: "panel",
            title: {
              zh: "圆桌论坛 2：青年可视化学者的机遇与挑战",
              en: "Panel 2: Opportunities and Challenges for Young Visualization Scholars",
            },
            location: {
              zh: "二楼文澜厅B",
              en: "Wenlan Hall B, 2F",
            },
          },
        ],
      },
      {
        time: "10:00 - 10:15",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "茶歇",
              en: "Coffee Break",
            },
          },
        ],
      },
      {
        time: "10:15 - 11:45",
        sessions: [
          {
            type: "topic",
            title: {
              zh: "专题 7：可视化“她”视角",
              en: "Topic 7: Visualization from a Female Perspective",
            },
            location: {
              zh: "三楼文锦厅",
              en: "Wenjing Hall, 3F",
            },
          },
          {
            type: "topic",
            title: {
              zh: "专题 8：数据驱动艺术可视化",
              en: "Topic 8: Data-Driven Art Visualization",
            },
            location: {
              zh: "二楼文澜厅A",
              en: "Wenlan Hall A, 2F",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 4：Geospatial Data Visualization",
              en: "Paper Session 4: Geospatial Data Visualization",
            },
            location: {
              zh: "三楼兰桥厅",
              en: "Lanqiao Hall, 3F",
            },
          },
          {
            type: "topic",
            title: {
              zh: "专题 9：工业界可视化应用",
              en: "Topic 9: Industrial Visualization Applications",
            },
            location: {
              zh: "二楼文澜厅B",
              en: "Wenlan Hall B, 2F",
            },
          },
        ],
      },
      {
        time: "9:00 - 12:00",
        sessions: [
          {
            type: "exhibition",
            title: {
              zh: "企业展、论文海报展、艺术展",
              en: "Industry, Poster, and Art Exhibition",
            },
            location: {
              zh: "三楼文悦厅",
              en: "Wenyue Hall, 3F",
            },
          },
        ],
      },
    ],
  },
  {
    date: {
      zh: "2025 年 7 月 21 日 下午",
      en: "July 21, 2025 - Afternoon",
    },
    timeslots: [
      {
        time: "13:30 - 15:00",
        sessions: [
          {
            type: "topic",
            title: {
              zh: "专题 10：可视化历史溯源",
              en: "Topic 10: Historical Origins of Visualization",
            },
            location: {
              zh: "三楼文锦厅",
              en: "Wenjing Hall, 3F",
            },
          },
          {
            type: "topic",
            title: {
              zh: "专题 11：前沿论文专题 1",
              en: "Topic 11: Frontier Papers Session 1",
            },
            location: {
              zh: "二楼文澜厅A",
              en: "Wenlan Hall A, 2F",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 5：Application & System",
              en: "Paper Session 5: Application & System",
            },
            location: {
              zh: "三楼兰桥厅",
              en: "Lanqiao Hall, 3F",
            },
          },
        ],
      },
      {
        time: "15:00 - 15:15",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "茶歇",
              en: "Coffee Break",
            },
          },
        ],
      },
      {
        time: "15:15 - 16:45",
        sessions: [
          {
            type: "topic",
            title: {
              zh: "专题 12：可视化与文化记忆的艺术转化",
              en: "Topic 12: Artistic Transformation of Visualization and Cultural Memory",
            },
            location: {
              zh: "三楼文锦厅",
              en: "Wenjing Hall, 3F",
            },
          },
          {
            type: "topic",
            title: {
              zh: "专题 13：前沿论文专题 2",
              en: "Topic 13: Frontier Papers Session 2",
            },
            location: {
              zh: "二楼文澜厅A",
              en: "Wenlan Hall A, 2F",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 6：Design and Narrative Visualization",
              en: "Paper Session 6: Design and Narrative Visualization",
            },
            location: {
              zh: "三楼兰桥厅",
              en: "Lanqiao Hall, 3F",
            },
          },
        ],
      },
      {
        time: "13:30 - 16:45",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "校企面对面",
              en: "Industry Talks",
            },
            location: {
              zh: "二楼文澜厅B",
              en: "Wenlan Hall B, 2F",
            },
          },
        ],
      },
      {
        time: "13:30 - 16:45",
        sessions: [
          {
            type: "exhibition",
            title: {
              zh: "企业展、论文海报展、艺术展",
              en: "Industry, Poster, and Art Exhibition",
            },
            location: {
              zh: "三楼文悦厅",
              en: "Wenyue Hall, 3F",
            },
          },
        ],
      },
      {
        time: "19:30 - 20:30",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "家国情怀文化学习活动",
              en: "Cultural Learning",
            },
          },
        ],
      },
    ],
  },
  {
    date: {
      zh: "2025 年 7 月 22 日 上午",
      en: "July 22, 2025 - Morning",
    },
    timeslots: [
      {
        time: "8:30 - 9:30",
        sessions: [
          {
            id: "keynote-3",
            type: "keynote",
            title: {
              zh: "大会特邀报告 3：全局全频光照的实时神经绘制技术与流水线",
              en: "Keynote 3: Real-time Neural Rendering Technology and Pipeline for Global Full-spectrum Illumination",
            },
            location: {
              zh: "二楼文澜厅",
              en: "Wenlan Hall, 2F",
            },
            speakers: [
              {
                name: {
                  zh: "鲍虎军",
                  en: "Hujun Bao",
                },
                suffix: {
                  zh: "教授",
                  en: "(Professor)",
                },
                affiliation: {
                  zh: "浙江大学",
                  en: "Zhejiang University",
                },
                photo: PhotoBHJ,
                abstract: {
                  zh: "近年来，利用神经网络来表示和学习构建复杂对象或函数取得了极大的进展，有力推动了图形计算和空间计算的跨越式发展。本报告将介绍我们在神经图形绘制技术和架构方面的最新研究进展，该架构通过解耦场景的全局光能辐射传输过程，利用全连接超网络来学习得到以物体为插入单元的环境光能传输变化模型，以 Transformer 架构学习建立了以光源为插入单元的光能辐射传输增量模型，创建了全局全频光照的实时神经绘制流水线，研制通用照明大模型，有效突破了以英伟达 RTcore 为代表的 GPU 架构限制，在具有普通光栅化和 AI 推理能力的芯片上，即可实现全局全频光效的实时高质量绘制。报告最后将展望这一新技术框架的未来发展构想。",
                  en: "In recent years, significant progress has been made in using neural networks to represent and learn complex objects or functions, which has strongly promoted the leapfrog development of graphics computing and spatial computing. This talk will introduce our latest research progress in neural graphics rendering technology and architecture. The architecture decouples the global light energy radiation transmission process of the scene, using a fully connected hypernetwork to learn the environmental light energy transmission variation model with objects as insertion units, and establishes a light energy radiation transmission incremental model with light sources as insertion units using Transformer architecture. It creates a real-time neural rendering pipeline for global full-spectrum illumination and develops a universal lighting large model, effectively breaking through the GPU architecture limitations represented by NVIDIA's RTcore, enabling real-time high-quality rendering of global full-spectrum lighting effects on chips with ordinary rasterization and AI inference capabilities. The talk will conclude with a vision for the future development of this new technology framework.",
                },
                description: {
                  zh: "鲍虎军，长江学者特聘教授，浙江省特级专家。主要从事计算机图形学和混合现实的研究。曾获国家杰出青年基金和国家创新研究群体科学基金的资助，并作为首席科学家，先后承担了虚拟现实和混合现实两项 973 计划项目的研究。在混合现实的景物三维建模、移动三维注册融合、自适应高保真绘制呈现和自然数字化身交互等方面取得了重要创新突破，主持研发了端云协同的混合现实软件平台，成功实现产业化应用。有关研究成果分别获国家自然科学奖 1 项和省部级科技奖 4 项。",
                  en: "Hujun Bao, Distinguished Professor of Changjiang Scholars and Special Expert of Zhejiang Province, mainly engages in research in computer graphics and mixed reality. He has received funding from the National Outstanding Youth Fund and the National Innovation Research Group Science Fund, and as the chief scientist, he has undertaken research on virtual reality and mixed reality in two 973 Program projects. Significant innovative breakthroughs have been made in aspects such as three-dimensional modeling of mixed reality scenes, mobile three-dimensional registration and fusion, adaptive high-fidelity rendering, and natural digital avatar interaction. He has led the development of a cloud-edge collaborative mixed reality software platform, successfully achieving industrial application. His research achievements have won one National Natural Science Award and four provincial and ministerial level science and technology awards.",
                },
              },
            ],
            href: {
              zh: "/2025/zh/keynote/3",
              en: "/2025/en/keynote/3",
            },
          },
        ],
      },
      {
        time: "9:30 - 9:40",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "茶歇",
              en: "Coffee Break",
            },
          },
        ],
      },
      {
        time: "9:40 - 11:00",
        sessions: [
          {
            type: "panel",
            title: {
              zh: "圆桌论坛 3：可视化研究的时代浪潮：坚守与传承",
              en: "Panel 3: The Tide of the Times in Visualization Research: Adherence and Inheritance",
            },
            location: {
              zh: "二楼文澜厅",
              en: "Wenlan Hall, 2F",
            },
          },
        ],
      },
      {
        time: "11:00 - 12:00",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "闭幕式",
              en: "Closing Ceremony",
            },
            location: {
              zh: "二楼文澜厅",
              en: "Wenlan Hall, 2F",
            },
          },
        ],
      },
      {
        time: "9:00 - 12:00",
        sessions: [
          {
            type: "exhibition",
            title: {
              zh: "艺术展",
              en: "Art Exhibition",
            },
            location: {
              zh: "文悦厅",
              en: "Wenyue Hall",
            },
          },
        ],
      },
    ],
  },
];
