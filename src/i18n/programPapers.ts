import { Paper } from "~/components/PaperInfo";

export const programPapers: Record<
  string,
  { title: { zh: string; en: string }; papers: Paper[] }
> = {
  "paper-1": {
    title: {
      zh: "论文报告 1：Graph and Network Analytics",
      en: "Paper Session 1: Graph and Network Analytics",
    },
    papers: [
      {
        title: "Visual Evaluation for Attribute Differences in Graph Sampling",
        authors: [
          "Yong Zhang",
          "Yuqi Zhou",
          "Jiajia Kou",
          "Yuhua Liu",
          "Yongheng Wang",
          "Xiangyang Wu",
          "Zhiguang Zhou",
        ],
        link: "/2025/papers/Visual Evaluation for Attribute Differences in Graph Sampling.pdf",
      },
      {
        title:
          "Industry Chain Visual Exploration Based on Heterogeneous Graphs Analysis",
        authors: [
          "Yi Wan",
          "Xiaowen Zhang",
          "Xiaoxu Chen",
          "Jiacheng Tang",
          "Siming Chen",
        ],
        link: "/2025/papers/Industry Chain Visual Exploration Based on Heterogeneous Graphs Analysis.pdf",
      },
      {
        title:
          "LSN-VA: A Visual Analysis System for Ancient Chinese Literati Social Network",
        authors: [
          "Yingping Yang",
          "Guangtao You",
          "JiaYi Chen",
          "Zhichao Zhang",
          "Jiazhou Chen",
          "Xinguo Xu",
        ],
        link: "/2025/papers/LSN-VA A Visual Analysis System for Ancient Chinese Literati Social Network.pdf",
      },
      {
        title:
          "CamouflageVis: A Visual Analytics Approach for Discovering Camouflaged Malicious Entities in E-Commerce",
        authors: ["Yanhong Wu", "Tan Tang", "Yuhong Li", "Yingcai Wu"],
        link: "/2025/papers/CamouflageVis A Visual Analytics Approach for Discovering Camouflaged Malicious Entities in E-Commerce.pdf",
      },
      {
        title:
          "RepoTale: A Visual Analytics Framework for Exploring Software Repository Evolution on Issue Tracking",
        authors: ["Yingying Huang", "Zhenglei Liu", "Yuxin Ma"],
        link: "/2025/papers/RepoTale A Visual Analytics Framework for Exploring Software Repository Evolution on Issue Tracking.pdf",
      },
    ],
  },
  "paper-2": {
    title: {
      zh: "论文报告 2：AI-Driven Visual Analytics",
      en: "Paper Session 2: AI-Driven Visual Analytics",
    },
    papers: [
      {
        title:
          "ZSLViz: Interactive Optimization of Class-Attribute Matrix for Zero-Shot Learning via Visual Analytics",
        authors: [
          "Zhen Liu",
          "Yi Ren",
          "Zhihao Zhu",
          "Gang Xu",
          "Xiangyang Wu",
        ],
        link: "/2025/papers/ZSLViz Interactive Optimization of Class-Attribute Matrix for Zero-Shot Learning via Visual Analytics.pdf",
      },
      {
        title:
          "Visual Analytics for Taxi Dispatching Based on Multi-Agent Reinforcement Learning",
        authors: [
          "Qiushi Xia",
          "Xinru Wang",
          "Huijie Zhang",
          "Yiming Lin",
          "Zhaohan Lv",
        ],
        link: "/2025/papers/Visual Analytics for Taxi Dispatching Based on Multi-Agent Reinforcement Learning.pdf",
      },
      {
        title:
          "Visual Analytics for Interpretable Food Safety Risk Prediction via Metapath-Driven Heterogeneous Graph Learning",
        authors: ["Ying Tang", "Kexin Lin", "Yu Han", "Weihua Zhou"],
        link: "/2025/papers/Visual Analytics for Interpretable Food Safety Risk Prediction via Metapath-Driven Heterogeneous Graph Learning.pdf",
      },
      {
        title:
          "QuantVisExplorer: Explainable Visual Analytics for Quantitative Investment Return Prediction Model",
        authors: [
          "Xi Huang",
          "Xinchi Luo",
          "Xuan He",
          "Baocheng Tang",
          "Hongxing Qin",
          "Haibo Hu",
        ],
        link: "/2025/papers/QuantVisExplorer Explainable Visual Analytics for Quantitative Investment Return Prediction Model.pdf",
      },
      {
        title:
          "A Hierarchical Electricity Consumption Forecasting Visualization System Based on Multi-scale LSTM-KAN Model",
        authors: [
          "Hang Yin",
          "Yize Li",
          "Ning Xu",
          "Ruiqi Yu",
          "Ningxin Li",
          "Wei Xu",
          "Xiangyang Wu",
          "Jie Xu",
          "Yongheng Wang",
          "Zhiguang Zhou",
        ],
        link: "/2025/papers/A Hierarchical Electricity Consumption Forecasting Visualization System Based on Multi-scale LSTM-KAN Model.pdf",
      },
    ],
  },
  "paper-3": {
    title: {
      zh: "论文报告 3：Theory, Evaluation, and Tools",
      en: "Paper Session 3: Theory, Evaluation, and Tools",
    },
    papers: [
      {
        title: "复杂认知：可视分析系统设计与和评估的新理论基础",
        authors: ["Xiaolong Zhang"],
        link: "/2025/papers/复杂认知：可视分析系统设计与和评估的新理论基础.pdf",
      },
      {
        title: "A Design Study Process Model for Medical Visualization",
        authors: ["Mengjie Fan", "Liang Zhou"],
        link: "/2025/papers/A Design Study Process Model for Medical Visualization.pdf",
      },
      {
        title:
          "A Survey of Visual Insight Mining: Connecting Data and Insights via Visualization",
        authors: ["Yijie Lian", "Jianing Hao", "Wei Zeng", "Qiong Luo"],
        link: "/2025/papers/A Survey of Visual Insight Mining Connecting Data and Insights via Visualization.pdf",
      },
      {
        title:
          "An Interactive Review on COVID-19 Visualization Dashboards in the Wild",
        authors: ["Guijuan Wang", "Yadong Wu", "Lijuan Peng"],
        link: "/2025/papers/An Interactive Review on COVID-19 Visualization Dashboards in the Wild.pdf",
      },
      {
        title: "HiVis: A Web-Based Library for Financial Data Visualizations",
        authors: [
          "Dongming Han",
          "Rufei Han",
          "Changju Zhou",
          "Ziyan Lin",
          "Yi Hu",
          "Yi Chai",
          "Tianyi Ma",
          "Haiyang Zhu",
          "Wei Chen",
        ],
        link: "/2025/papers/HiVis A Web-Based Library for Financial Data Visualizations.pdf",
      },
    ],
  },
  "paper-4": {
    title: {
      zh: "论文报告 4：Geospatial Data Visualization",
      en: "Paper Session 4: Geospatial Data Visualization",
    },

    papers: [
      {
        title:
          "Is My Route Well-Planned? A Visual Analytics Approach for Evaluating Planning Behaviors of Autonomous Driving",
        authors: [
          "Linbing Xiang",
          "Chunyuan Chen",
          "Yuqi Jin",
          "Yu Wang",
          "Chengshun Wang",
          "Dong Sun",
          "Siming Chen",
        ],
        link: "/2025/papers/Is My Route Well-Planned A Visual Analytics Approach for Evaluating Planning Behaviors of Autonomous Driving.pdf",
      },
      {
        title: "GoMA: A Grammar of Semantic Annotations on Maps",
        authors: ["Hanning Shao", "Haoyu Xu", "Xiaoru Yuan"],
        link: "/2025/papers/GoMA A Grammar of Semantic Annotations on Maps.pdf",
      },
      {
        title:
          "Evaluating Information Synchronization Methods in Large Display-Centered Multi-Device Collaboration",
        authors: ["Qiuyao Cheng", "Lingyun Yu", "Yu Liu"],
        link: "/2025/papers/Evaluating Information Synchronization Methods in Large Display-Centered Multi-Device Collaboration.pdf",
      },
      {
        title: "GeoAnimation: A Grammar for Animated Geographic Visualization",
        authors: ["Jie Yu", "Zhenning Chen", "Di Weng", "Yingcai Wu"],
        link: "/2025/papers/GeoAnimation A Grammar for Animated Geographic Visualization.pdf",
      },
    ],
  },
  "paper-5": {
    title: {
      zh: "论文报告 5：Application & System",
      en: "Paper Session 5: Application & System",
    },
    papers: [
      {
        title:
          "TemporalFlowViz: Parameter-Aware Visual Analytics for Interpreting Scramjet Combustion Evolution",
        authors: [
          "Yifei Jia",
          "Shiyu Cheng",
          "Yu Dong",
          "Guan Li",
          "Yu Wang",
          "Wei Yao",
          "Guihua Shan",
        ],
        link: "/2025/papers/TemporalFlowViz Parameter-Aware Visual Analytics for Interpreting Scramjet Combustion Evolution.pdf",
      },
      {
        title: "可视化增强的火电机组控制策略交互探索分析",
        authors: [
          "Wenbo Wang",
          "Xinyuan Zhang",
          "Xi Zhang",
          "Jianfeng Wang",
          "Huikai Wang",
          "Lianen Ji",
        ],
        link: "/2025/papers/可视化增强的火电机组控制策略交互探索分析.pdf",
      },
      {
        title: "基于代理模型的锅炉燃烧优化不确定性可视分析",
        authors: [
          "Xi Zhang",
          "Zitong Liu",
          "Jinlei Shi",
          "Jianfeng Wang",
          "Bin Tian",
          "Lianen Ji",
        ],
        link: "/2025/papers/基于代理模型的锅炉燃烧优化不确定性可视分析.pdf",
      },
      {
        title:
          "A Visualization Retrieval Framework for 3D Wheel Models with User-selected Geometric Features Regions",
        authors: [
          "Dongliang Guo",
          "Lisha Zhou",
          "Jiaqi Zhang",
          "Ji Wang",
          "Tianxiao Yuan",
          "Yanfen Wang",
        ],
        link: "/2025/papers/A Visualization Retrieval Framework for 3D Wheel Models with User-selected Geometric Features Regions.pdf",
      },
      {
        title:
          "GazeSport: A Visual Analytics Framework for Visual Attention and Action Correlation in Sports Videos",
        authors: ["Yuxi Li", "Dufei Huang", "Zhuo Yang"],
        link: "/2025/papers/GazeSport A Visual Analytics Framework for Visual Attention and Action Correlation in Sports Videos.pdf",
      },
    ],
  },
  "paper-6": {
    title: {
      zh: "论文报告 6：Design and Narrative Visualization",
      en: "Paper Session 6: Design and Narrative Visualization",
    },

    papers: [
      {
        title:
          "Teasers That Speak: Exploring the Visual Design of Teaser Images in Visualization Publications",
        authors: [
          "Xiaoke Jia",
          "Zexi Li",
          "Zijian Yin",
          "Ya Pei",
          "Jifan Yang",
          "Lingyun Yu",
        ],
        link: "/2025/papers/Teasers That Speak Exploring the Visual Design of Teaser Images in Visualization Publications.pdf",
      },
      {
        title: `科普数据视频中的可视化设计及叙事研究——以"星球研究所"为例`,
        authors: ["Wenyue Huang", "Xingyu Lan"],
        link: "/2025/papers/科普数据视频中的可视化设计及叙事研究——以“星球研究所”为例.pdf",
      },
      {
        title:
          "Scroller: A WYSIWYG System for Creating Expressive Scrollytelling",
        authors: [
          "Renzhong Li",
          "Weiwei Cui",
          "Yuchen Yang",
          "Xinyu Mao",
          "Di Weng",
          "Haidong Zhang",
          "Yingcai Wu",
        ],
        link: "/2025/papers/Scroller A WYSIWYG System for Creating Expressive Scrollytelling.pdf",
      },
      {
        title:
          "An Age-based Study into Interactive Narrative Visualization Engagement",
        authors: [
          "Nina Errey",
          "Yi Chen",
          "Yu Dong",
          "Quang Vinh Nguyen",
          "Xiaoru Yuan",
          "Tuck Wah Leong",
          "Christy Jie Liang",
        ],
        link: "/2025/papers/An Age-based Study into Interactive Narrative Visualization Engagement.pdf",
      },
    ],
  },
};
