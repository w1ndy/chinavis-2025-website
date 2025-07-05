import { Speaker } from "~/components/SpeakerInfo";

import PhotoTJR from "~/assets/program/tjr.avif?inline";
import PhotoKLM from "~/assets/program/klm.avif?inline";
import PhotoBHJ from "~/assets/program/bhj.avif?inline";

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
  speaker?: Speaker;
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
              zh: "会议签到以及现场注册",
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
              zh: "文轩厅",
              en: "Wenxuan Hall",
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
              zh: "清河坊厅",
              en: "Qinghefang Hall",
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
              zh: "兰桥厅",
              en: "Lanqiao Hall",
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
              zh: "青芝坞厅",
              en: "Qingzhuwu Hall",
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
              zh: "文锦厅",
              en: "Wenjing Hall",
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
              zh: "文澜厅",
              en: "Wenlan Hall",
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
              zh: "会议签到以及现场注册",
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
              zh: "文澜厅 + 文锦厅",
              en: "Wenlan Hall + Wenjing Hall",
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
              zh: "文澜厅",
              en: "Wenlan Hall",
            },
            speaker: {
              name: {
                zh: "谭建荣",
                en: "Jianrong Tan",
              },
              suffix: {
                zh: "院士",
                en: "(Fellow)",
              },
              affiliation: {
                zh: "浙江大学",
                en: "Zhejiang University",
              },
              photo: PhotoTJR,
            },
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
              en: "Keynote 2: Are We on the Verge of a Revolution in Visualization?",
            },
            location: {
              zh: "文澜厅",
              en: "Wenlan Hall",
            },
            speaker: {
              name: {
                zh: "Kwan-Liu Ma",
                en: "Kwan-Liu Ma",
              },
              suffix: {
                zh: "教授",
                en: "(Distinguished Professor)",
              },
              affiliation: {
                zh: "加州大学戴维斯分校",
                en: "University of California, Davis",
              },
              photo: PhotoKLM,
            },
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
              zh: "文澜厅",
              en: "Wenlan Hall",
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
              zh: "论文速览",
              en: "Paper Fastforward",
            },
            location: {
              zh: "文澜厅",
              en: "Wenlan Hall",
            },
          },
        ],
      },
      {
        time: "9:00 - 12:20",
        sessions: [
          {
            type: "exhibition",
            title: {
              zh: "企业与竞赛展",
              en: "Industry and Challenge Exhibition",
            },
            location: {
              zh: "文澜厅门口",
              en: "Wenlan Hall Entrance",
            },
          },
          {
            type: "exhibition",
            title: {
              zh: "海报展",
              en: "Poster Exhibition",
            },
            location: {
              zh: "文锦厅门口",
              en: "Wenjing Hall Entrance",
            },
          },
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
            type: "topic",
            title: {
              zh: "专题 1：大模型与可视分析",
              en: "Topic 1: Large Models and Visual Analytics",
            },
            location: {
              zh: "文锦厅",
              en: "Wenjing Hall",
            },
          },
          {
            type: "activity",
            title: {
              zh: "艺术项目开幕和艺术家讲座",
              en: "Art Program Opening and Artist Talks",
            },
            location: {
              zh: "文澜厅A",
              en: "Wenlan Hall A",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 1：Graph and Network Analytics",
              en: "Paper Session 1: Graph and Network Analytics",
            },
            location: {
              zh: "兰桥厅",
              en: "Lanqiao Hall",
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
              zh: "专题 2：面向工业制造的高性能科学可视化",
              en: "Topic 2: High-Performance Scientific Visualization for Industrial Manufacturing",
            },
            location: {
              zh: "文锦厅",
              en: "Wenjing Hall",
            },
          },
          {
            type: "topic",
            title: {
              zh: "专题 3: 文化遗产可视化",
              en: "Topic 3: Cultural Heritage Visualization",
            },
            location: {
              zh: "文澜厅A",
              en: "Wenlan Hall A",
            },
          },
        ],
      },
      {
        time: "15:55 - 18:25",
        sessions: [
          {
            type: "topic",
            title: {
              zh: "专题 4：可视化叙事",
              en: "Topic 4: Visual Storytelling",
            },
            location: {
              zh: "文锦厅",
              en: "Wenjing Hall",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 2：AI-Driven Visual Analytics",
              en: "Paper Session 2: AI-Driven Visual Analytics",
            },
            location: {
              zh: "文澜厅A",
              en: "Wenlan Hall A",
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
              zh: "文澜厅B",
              en: "Wenlan Hall B",
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
              zh: "企业与竞赛展",
              en: "Industry and Challenge Exhibition",
            },
            location: {
              zh: "文澜厅门口",
              en: "Wenlan Hall Entrance",
            },
          },
          {
            type: "exhibition",
            title: {
              zh: "海报展",
              en: "Poster Exhibition",
            },
            location: {
              zh: "文锦厅门口",
              en: "Wenjing Hall Entrance",
            },
          },
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
              zh: "会议签到以及现场注册",
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
              zh: "文锦厅",
              en: "Wenjing Hall",
            },
          },
          {
            type: "topic",
            title: {
              zh: "专题 6：青年学者经验分享",
              en: "Topic 6: Experience Sharing by Young Scholars",
            },
            location: {
              zh: "文澜厅A",
              en: "Wenlan Hall A",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 3：Theory, Evaluation, and Tools",
              en: "Paper Session 3: Theory, Evaluation, and Tools",
            },
            location: {
              zh: "兰桥厅",
              en: "Lanqiao Hall",
            },
          },
          {
            type: "panel",
            title: {
              zh: "圆桌论坛 2：青年可视化学者的机遇与挑战",
              en: "Panel 2: Opportunities and Challenges for Young Visualization Scholars",
            },
            location: {
              zh: "文澜厅B",
              en: "Wenlan Hall B",
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
              zh: "文锦厅",
              en: "Wenjing Hall",
            },
          },
          {
            type: "topic",
            title: {
              zh: "专题 8：数据驱动艺术可视化",
              en: "Topic 8: Data-Driven Art Visualization",
            },
            location: {
              zh: "文澜厅A",
              en: "Wenlan Hall A",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 4：Geospatial Data Visualization",
              en: "Paper Session 4: Geospatial Data Visualization",
            },
            location: {
              zh: "兰桥厅",
              en: "Lanqiao Hall",
            },
          },
          {
            type: "topic",
            title: {
              zh: "专题 9：工业界可视化应用",
              en: "Topic 9: Industrial Visualization Applications",
            },
            location: {
              zh: "文澜厅B",
              en: "Wenlan Hall B",
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
              zh: "企业与竞赛展",
              en: "Industry and Challenge Exhibition",
            },
            location: {
              zh: "文澜厅门口",
              en: "Wenlan Hall Entrance",
            },
          },
          {
            type: "exhibition",
            title: {
              zh: "海报展",
              en: "Poster Exhibition",
            },
            location: {
              zh: "文锦厅门口",
              en: "Wenjing Hall Entrance",
            },
          },
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
              zh: "文锦厅",
              en: "Wenjing Hall",
            },
          },
          {
            type: "topic",
            title: {
              zh: "专题 11：前沿论文专题 1",
              en: "Topic 11: Frontier Papers Session 1",
            },
            location: {
              zh: "文澜厅A",
              en: "Wenlan Hall A",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 5：Application & System",
              en: "Paper Session 5: Application & System",
            },
            location: {
              zh: "兰桥厅",
              en: "Lanqiao Hall",
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
              zh: "文锦厅",
              en: "Wenjing Hall",
            },
          },
          {
            type: "topic",
            title: {
              zh: "专题 13：前沿论文专题 2",
              en: "Topic 13: Frontier Papers Session 2",
            },
            location: {
              zh: "文澜厅A",
              en: "Wenlan Hall A",
            },
          },
          {
            type: "paper",
            title: {
              zh: "论文报告 6：Design and Narrative Visualization",
              en: "Paper Session 6: Design and Narrative Visualization",
            },
            location: {
              zh: "兰桥厅",
              en: "Lanqiao Hall",
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
              zh: "文澜厅B",
              en: "Wenlan Hall B",
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
              zh: "企业与竞赛展",
              en: "Industry and Challenge Exhibition",
            },
            location: {
              zh: "文澜厅门口",
              en: "Wenlan Hall Entrance",
            },
          },
          {
            type: "exhibition",
            title: {
              zh: "海报展",
              en: "Poster Exhibition",
            },
            location: {
              zh: "文锦厅门口",
              en: "Wenjing Hall Entrance",
            },
          },
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
      {
        time: "19:30 - 20:30",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "家国情怀文化学习活动",
              en: "Cultural Learning",
            },
            location: {
              zh: "待定",
              en: "TBD",
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
              zh: "文澜厅",
              en: "Wenlan Hall",
            },
            speaker: {
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
            },
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
              zh: "文澜厅",
              en: "Wenlan Hall",
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
              zh: "文澜厅",
              en: "Wenlan Hall",
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
