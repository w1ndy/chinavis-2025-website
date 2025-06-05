import PhotoCW from "~/assets/committee/cw.avif?inline";
import PhotoQHM from "~/assets/committee/qhm.avif?inline";
import PhotoQHX from "~/assets/committee/qhx.avif?inline";
import PhotoWYC from "~/assets/committee/wyc.avif?inline";
import PhotoSGD from "~/assets/committee/sgd.avif?inline";
import PhotoLCH from "~/assets/committee/lch.avif?inline";
import PhotoCSM from "~/assets/committee/csm.avif?inline";
import PhotoZJW from "~/assets/committee/zjw.avif?inline";
import PhotoWCB from "~/assets/committee/wcb.avif?inline";
import PhotoGWJ from "~/assets/committee/gwj.avif?inline";
import PhotoJC from "~/assets/committee/jc.avif?inline";
import PhotoLJ from "~/assets/committee/lj.avif?inline";
import PhotoSXH from "~/assets/committee/sxh.avif?inline";
import PhotoLYH from "~/assets/committee/lyh.avif?inline";
import PhotoCWP from "~/assets/committee/cwp.avif?inline";
import PhotoMX from "~/assets/committee/mx.avif?inline";
import PhotoYZQ from "~/assets/committee/yzq.avif?inline";
import PhotoTT from "~/assets/committee/tt.avif?inline";
import PhotoZJJ from "~/assets/committee/zjj.avif?inline";
import PhotoWGY from "~/assets/committee/wgy.avif?inline";
import PhotoLF from "~/assets/committee/lf.avif?inline";
import PhotoLTM from "~/assets/committee/ltm.avif?inline";
import PhotoLXL from "~/assets/committee/lxl.avif?inline";
import PhotoCSJ from "~/assets/committee/csj.avif?inline";
import PhotoZHJ from "~/assets/committee/zhj.avif?inline";
import PhotoCJ from "~/assets/committee/cj.avif?inline";
import PhotoXJ from "~/assets/committee/xj.avif?inline";
import PhotoZZG from "~/assets/committee/zzg.avif?inline";
import PhotoCJZ from "~/assets/committee/cjz.avif?inline";
import PhotoXCQ from "~/assets/committee/xcq.avif?inline";
import PhotoYWW from "~/assets/committee/yww.avif?inline";
import PhotoCWF from "~/assets/committee/cwf.avif?inline";
import PhotoYSN from "~/assets/committee/ysn.avif?inline";
import PhotoDXJ from "~/assets/committee/dxj.avif?inline";
import PhotoDJF from "~/assets/committee/djf.avif?inline";
import PhotoZF from "~/assets/committee/zf.avif?inline";
import PhotoZYH from "~/assets/committee/zyh.avif?inline";
import PhotoZQ from "~/assets/committee/zq.avif?inline";
import PhotoHS from "~/assets/committee/hs.avif?inline";
import PhotoLRC from "~/assets/committee/lrc.avif?inline";
import PhotoWXM from "~/assets/committee/wxm.avif?inline";
import PhotoWXH from "~/assets/committee/wxh.avif?inline";
import PhotoLM from "~/assets/committee/lm.avif?inline";
import PhotoLGZ from "~/assets/committee/lgz.avif?inline";
import PhotoXX from "~/assets/committee/xx.avif?inline";
import PhotoSXY from "~/assets/committee/sxy.avif?inline";
import PhotoLLY from "~/assets/committee/lly.avif?inline";
import PhotoTYB from "~/assets/committee/tyb.avif?inline";
import PhotoLQ from "~/assets/committee/lq.avif?inline";
import PhotoLJing from "~/assets/committee/ljing.avif?inline";
import PhotoWD from "~/assets/committee/wd.avif?inline";
import PhotoLXJ from "~/assets/committee/lxj.avif?inline";
import PhotoWJC from "~/assets/committee/wjc.avif?inline";
import PhotoHHB from "~/assets/committee/hhb.avif?inline";
import PhotoDDZ from "~/assets/committee/ddz.avif?inline";
import PhotoWX from "~/assets/committee/wx.avif?inline";
import PhotoDZY from "~/assets/committee/dzy.avif?inline";
import PhotoWZC from "~/assets/committee/wzc.avif?inline";
import PhotoWJH from "~/assets/committee/wjh.avif?inline";
import PhotoTXB from "~/assets/committee/txb.avif?inline";
import PhotoLYUH from "~/assets/committee/lyuh.avif?inline";
import PhotoJYB from "~/assets/committee/jyb.avif?inline";
import PhotoZJM from "~/assets/committee/zjm.avif?inline";
import PhotoLZ from "~/assets/committee/lz.avif?inline";
import PhotoYXR from "~/assets/committee/yxr.avif?inline";
import PhotoCBQ from "~/assets/committee/cbq.avif?inline";
import PhotoLSX from "~/assets/committee/lsx.avif?inline";
import PhotoXRG from "~/assets/committee/xrg.avif?inline";
import PhotoWJJ from "~/assets/committee/wjj.avif?inline";
import PhotoZHY from "~/assets/committee/zhy.avif?inline";

import PhotoUndefined from "~/assets/committee/undefined.avif?inline";

export const zh = {
  PageTitle: "委员会成员 - ChinaVis 2025",
};

export const en = {
  PageTitle: "Committee Members - ChinaVis 2025",
};

export const committee: {
  role: { zh: string; en: string };
  members: {
    name: { zh: string; en: string };
    affiliation: { zh: string; en: string };
    photo: string;
  }[];
}[] = [
  {
    role: { zh: "大会主席", en: "General Chairs" },
    members: [
      {
        name: { zh: "陈为", en: "Wei Chen" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoCW,
      },
      {
        name: { zh: "屈华民", en: "Huamin Qu" },
        affiliation: {
          zh: "香港科技大学",
          en: "Hong Kong University of Science and Technology",
        },
        photo: PhotoQHM,
      },
    ],
  },
  {
    role: { zh: "程序委员会主席", en: "Program Committee Chairs" },
    members: [
      {
        name: { zh: "秦红星", en: "Hongxing Qin" },
        affiliation: { zh: "重庆大学", en: "Chongqing University" },
        photo: PhotoQHX,
      },
      {
        name: { zh: "巫英才", en: "Yingcai Wu" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoWYC,
      },
    ],
  },
  {
    role: { zh: "论文主席", en: "Paper Chairs" },
    members: [
      {
        name: { zh: "孙国道", en: "Guodao Sun" },
        affiliation: {
          zh: "浙江工业大学",
          en: "Zhejiang University of Technology",
        },
        photo: PhotoSGD,
      },
      {
        name: { zh: "李晨辉", en: "Chenhui Li" },
        affiliation: { zh: "华东师范大学", en: "East China Normal University" },
        photo: PhotoLCH,
      },
      {
        name: { zh: "陈思明", en: "Siming Chen" },
        affiliation: { zh: "复旦大学", en: "Fudan University" },
        photo: PhotoCSM,
      },
    ],
  },
  {
    role: { zh: "课程主席", en: "Course Chairs" },
    members: [
      {
        name: { zh: "张加万", en: "Jiawan Zhang" },
        affiliation: { zh: "天津大学", en: "Tianjin University" },
        photo: PhotoZJW,
      },
      {
        name: { zh: "王长波", en: "Changbo Wang" },
        affiliation: { zh: "华东师范大学", en: "East China Normal University" },
        photo: PhotoWCB,
      },
      {
        name: { zh: "顾文佳", en: "Wenjia Gu" },
        affiliation: { zh: "中国美术学院", en: "China Academy of Art" },
        photo: PhotoGWJ,
      },
    ],
  },
  {
    role: { zh: "Fast Forward主席", en: "Fast Forward Chairs" },
    members: [
      {
        name: { zh: "解翠", en: "Cui Xie" },
        affiliation: { zh: "中国海洋大学", en: "Ocean University of China" },
        photo: PhotoJC,
      },
      {
        name: { zh: "李杰", en: "Jie Li" },
        affiliation: { zh: "天津大学", en: "Tianjin University" },
        photo: PhotoLJ,
      },
    ],
  },
  {
    role: { zh: "艺术项目委员会主席", en: "Art Program Chairs" },
    members: [
      {
        name: { zh: "孙效华", en: "Xiaohua Sun" },
        affiliation: { zh: "同济大学", en: "Tongji University" },
        photo: PhotoSXH,
      },
      {
        name: { zh: "刘益红", en: "Yihong Liu" },
        affiliation: { zh: "中国美术学院", en: "China Academy of Art" },
        photo: PhotoLYH,
      },
      {
        name: { zh: "陈慰平", en: "Weiping Chen" },
        affiliation: { zh: "中央美术学院", en: "Central Academy of Fine Arts" },
        photo: PhotoCWP,
      },
    ],
  },
  {
    role: { zh: "艺术项目委员会委员", en: "Art Program Committee Members" },
    members: [
      {
        name: { zh: "毛雪", en: "Xue Mao" },
        affiliation: { zh: "中国美术学院", en: "China Academy of Art" },
        photo: PhotoMX,
      },
      {
        name: { zh: "阳芷倩", en: "Zhiqian Yang" },
        affiliation: { zh: "湖北美术学院", en: "Hubei Institute of Fine Arts" },
        photo: PhotoYZQ,
      },
      {
        name: { zh: "唐谈", en: "Tan Tang" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoTT,
      },
      {
        name: { zh: "张俊杰", en: "Junjie Zhang" },
        affiliation: {
          zh: "香港科技大学（广州）",
          en: "Hong Kong University of Science and Technology (Guangzhou)",
        },
        photo: PhotoZJJ,
      },
      {
        name: { zh: "王冠云", en: "Guanyun Wang" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoWGY,
      },
      {
        name: { zh: "梁芳", en: "Fang Liang" },
        affiliation: { zh: "云南艺术学院", en: "Yunnan Arts University" },
        photo: PhotoLF,
      },
      {
        name: { zh: "李铁萌", en: "Tiemeng Li" },
        affiliation: {
          zh: "北京邮电大学",
          en: "Beijing University of Posts and Telecommunications",
        },
        photo: PhotoLTM,
      },
      {
        name: { zh: "顾文佳", en: "Wenjia Gu" },
        affiliation: { zh: "中国美术学院", en: "China Academy of Art" },
        photo: PhotoGWJ,
      },
      {
        name: { zh: "李雪亮", en: "Xueliang Li" },
        affiliation: {
          zh: "南方科技大学",
          en: "Southern University of Science and Technology",
        },
        photo: PhotoLXL,
      },
      {
        name: { zh: "蔡淑娟", en: "Shujuan Cai" },
        affiliation: {
          zh: "南京艺术学院",
          en: "Nanjing University of the Arts",
        },
        photo: PhotoCSJ,
      },
      {
        name: { zh: "魏婧婧", en: "Jingjing Wei" },
        affiliation: {
          zh: "南京艺术学院",
          en: "Nanjing University of the Arts",
        },
        photo: PhotoWJJ,
      },
    ],
  },
  {
    role: { zh: "可视分析竞赛主席", en: "Data Challenge Chairs" },
    members: [
      {
        name: { zh: "张慧杰", en: "Huijie Zhang" },
        affiliation: { zh: "东北师范大学", en: "Northeast Normal University" },
        photo: PhotoZHJ,
      },
      {
        name: { zh: "陈静", en: "Jing Chen" },
        affiliation: { zh: "南京大学", en: "Nanjing University" },
        photo: PhotoCJ,
      },
      {
        name: { zh: "张俊杰", en: "Junjie Zhang" },
        affiliation: {
          zh: "香港科技大学（广州）",
          en: "Hong Kong University of Science and Technology (Guangzhou)",
        },
        photo: PhotoZJJ,
      },
      {
        name: { zh: "徐进", en: "Jin Xu" },
        affiliation: { zh: "杭州师范大学", en: "Hangzhou Normal University" },
        photo: PhotoXJ,
      },
    ],
  },
  {
    role: { zh: "组织委员会主席", en: "Organizing Committee Chair" },
    members: [
      {
        name: { zh: "周志光", en: "Zhiguang Zhou" },
        affiliation: {
          zh: "杭州电子科技大学",
          en: "Hangzhou Dianzi University",
        },
        photo: PhotoZZG,
      },
    ],
  },
  {
    role: { zh: "组织委员会委员", en: "Organizing Committee Members" },
    members: [
      {
        name: { zh: "姜燕冰", en: "Yanbing Jiang" },
        affiliation: {
          zh: "浙江传媒学院",
          en: "Communication University of Zhejiang",
        },
        photo: PhotoJYB,
      },
      {
        name: { zh: "陈佳舟", en: "Jiazhou Chen" },
        affiliation: {
          zh: "浙江工业大学",
          en: "Zhejiang University of Technology",
        },
        photo: PhotoCJZ,
      },
      {
        name: { zh: "徐超清", en: "Chaoqing Xu" },
        affiliation: { zh: "浙大城市学院", en: "Hangzhou City University" },
        photo: PhotoXCQ,
      },
      {
        name: { zh: "朱海洋", en: "Haiyang Zhu" },
        affiliation: {
          zh: "物产中大集团股份有限公司",
          en: "Wuchan Zhongda Group",
        },
        photo: PhotoZHY,
      },
      {
        name: { zh: "杨文武", en: "Wenwu Yang" },
        affiliation: {
          zh: "浙江工商大学",
          en: "Zhejiang GongShang University",
        },
        photo: PhotoYWW,
      },
      {
        name: { zh: "陈伟锋", en: "Weifeng Chen" },
        affiliation: {
          zh: "浙江财经大学",
          en: "Zhejiang University of Finance and Economics",
        },
        photo: PhotoCWF,
      },
      {
        name: { zh: "刘玉华", en: "Yuhua Liu" },
        affiliation: {
          zh: "杭州电子科技大学",
          en: "Hangzhou Dianzi University",
        },
        photo: PhotoLYUH,
      },
      {
        name: { zh: "叶帅男", en: "Shuainan Ye" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoYSN,
      },
    ],
  },
  {
    role: { zh: "赞助主席", en: "Sponsor Chairs" },
    members: [
      {
        name: { zh: "董笑菊", en: "Xiaojv Dong" },
        affiliation: {
          zh: "上海交通大学",
          en: "Shanghai Jiao Tong University",
        },
        photo: PhotoDXJ,
      },
      {
        name: { zh: "董建锋", en: "Jianfeng Dong" },
        affiliation: {
          zh: "浙江工商大学",
          en: "Zhejiang GongShang University",
        },
        photo: PhotoDJF,
      },
    ],
  },
  {
    role: { zh: "宣传主席", en: "Publicity Chair" },
    members: [
      {
        name: { zh: "赵凡", en: "Fan Zhao" },
        affiliation: {
          zh: "中国科学院新疆理化技术研究所",
          en: "Xinjiang Technical Institute of Physics and Chemistry",
        },
        photo: PhotoZF,
      },
    ],
  },
  {
    role: { zh: "宣传委员会委员", en: "Publicity Committee Members" },
    members: [
      {
        name: { zh: "张雨禾", en: "Yuhe Zhang" },
        affiliation: { zh: "西北大学", en: "Northwest University" },
        photo: PhotoZYH,
      },
      {
        name: { zh: "曾琼", en: "Qiong Zeng" },
        affiliation: { zh: "山东大学", en: "Shandong University" },
        photo: PhotoZQ,
      },
      {
        name: { zh: "黄嵩", en: "Song Huang" },
        affiliation: { zh: "新格科技（TGD）", en: "Thinkgo Technology" },
        photo: PhotoHS,
      },
      {
        name: { zh: "刘日晨", en: "Richen Liu" },
        affiliation: { zh: "南京师范大学", en: "Nanjing Normal University" },
        photo: PhotoLRC,
      },
      {
        name: { zh: "王叙萌", en: "Xumeng Wang" },
        affiliation: { zh: "南开大学", en: "Nankai University" },
        photo: PhotoWXM,
      },
      {
        name: { zh: "王晓慧", en: "Xiaohui Wang" },
        affiliation: {
          zh: "北京科技大学",
          en: "University of Science and Technology Beijing",
        },
        photo: PhotoWXH,
      },
      {
        name: { zh: "陆旻", en: "Min Lu" },
        affiliation: { zh: "深圳大学", en: "Shenzhen University" },
        photo: PhotoLM,
      },
      {
        name: { zh: "李国政", en: "Guozheng Li" },
        affiliation: {
          zh: "北京理工大学",
          en: "Beijing Institute of Technology",
        },
        photo: PhotoLGZ,
      },
      {
        name: { zh: "刘真", en: "Zhen Liu" },
        affiliation: {
          zh: "杭州电子科技大学",
          en: "Hangzhou Dianzi University",
        },
        photo: PhotoLZ,
      },
      {
        name: { zh: "谢潇", en: "Xiao Xie" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoXX,
      },
      {
        name: { zh: "史晓颖", en: "Xiaoying Shi" },
        affiliation: {
          zh: "杭州电子科技大学",
          en: "Hangzhou Dianzi University",
        },
        photo: PhotoSXY,
      },
      {
        name: { zh: "张锦明", en: "Jinming Zhang" },
        affiliation: {
          zh: "信息工程大学",
          en: "Information Engineering University",
        },
        photo: PhotoZJM,
      },
      {
        name: { zh: "刘丽艳", en: "Liyan Liu" },
        affiliation: {
          zh: "湖南工商大学",
          en: "Hunan University of Technology and Business",
        },
        photo: PhotoLLY,
      },
    ],
  },
  {
    role: { zh: "博士生论坛主席", en: "Doctoral Colloquium Chairs" },
    members: [
      {
        name: { zh: "陶煜波", en: "Yubo Tao" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoTYB,
      },
      {
        name: { zh: "李权", en: "Quan Li" },
        affiliation: { zh: "上海科技大学", en: "ShanghaiTech University" },
        photo: PhotoLQ,
      },
    ],
  },
  {
    role: { zh: "网站主席", en: "Website Chairs" },
    members: [
      {
        name: { zh: "翁荻", en: "Di Weng" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoWD,
      },
      {
        name: { zh: "廖竞", en: "Jing Liao" },
        affiliation: {
          zh: "西南科技大学",
          en: "Southwest University of Science and Technology",
        },
        photo: PhotoLJing,
      },
    ],
  },
  {
    role: { zh: "志愿者主席", en: "Volunteer Chairs" },
    members: [
      {
        name: { zh: "王伽臣", en: "Jiachen Wang" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoWJC,
      },
      {
        name: { zh: "谢潇", en: "Xiao Xie" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoXX,
      },
      {
        name: { zh: "刘晓静", en: "Xiaojing Liu" },
        affiliation: { zh: "青海大学", en: "Qinghai University" },
        photo: PhotoLXJ,
      },
    ],
  },
  {
    role: { zh: "形象设计主席", en: "Image Design Chair" },
    members: [
      {
        name: { zh: "毛雪", en: "Xue Mao" },
        affiliation: { zh: "中国美术学院", en: "China Academy of Art" },
        photo: PhotoMX,
      },
    ],
  },
  {
    role: {
      zh: "工业与行业应用委员会主席",
      en: "Industry and Industrial Application Committee Chair",
    },
    members: [
      {
        name: { zh: "胡海波", en: "Haibo Hu" },
        affiliation: { zh: "重庆大学", en: "Chongqing University" },
        photo: PhotoHHB,
      },
    ],
  },
  {
    role: {
      zh: "工业与行业应用委员会委员",
      en: "Industry and Industrial Application Committee Member",
    },
    members: [
      {
        name: { zh: "闻啸", en: "Xiao Wen" },
        affiliation: {
          zh: "阿里云计算有限公司",
          en: "Alibaba Cloud Computing Co., Ltd.",
        },
        photo: PhotoWX,
      },
      {
        name: { zh: "丁治宇", en: "Zhiyu Ding" },
        affiliation: {
          zh: "华为技术有限公司",
          en: "Huawei Technologies Co., Ltd.",
        },
        photo: PhotoDZY,
      },
      {
        name: { zh: "王祖超", en: "Zuchao Wang" },
        affiliation: { zh: "奇虎360有限公司", en: "Qihoo 360 Co., Ltd." },
        photo: PhotoWZC,
      },
      {
        name: { zh: "伍景辉", en: "Jinghui Wu" },
        affiliation: {
          zh: "中科院苏州先进技术研究院 / 中科示云鸿图（广州）网络开发有限公司",
          en: "Suzhou Institute of Advanced Technology / Zhongke Shiyun Hongtu",
        },
        photo: PhotoWJH,
      },
      {
        name: { zh: "唐兴波", en: "Xingbo Tang" },
        affiliation: { zh: "艾迪普科技股份有限公司", en: "Ideapool" },
        photo: PhotoTXB,
      },
      {
        name: { zh: "刘玉华", en: "Yuhua Liu" },
        affiliation: {
          zh: "杭州电子科技大学",
          en: "Hangzhou Dianzi University",
        },
        photo: PhotoLYUH,
      },
    ],
  },
  {
    role: { zh: "财务主席", en: "Finance Chairs" },
    members: [
      {
        name: { zh: "唐谈", en: "Tan Tang" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoTT,
      },
      {
        name: { zh: "邓达臻", en: "Dazhen Deng" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoDDZ,
      },
    ],
  },
  {
    role: { zh: "指导委员会", en: "Steering Committee" },
    members: [
      {
        name: { zh: "袁晓如", en: "Xiaoru Yuan" },
        affiliation: { zh: "北京大学", en: "Peking University" },
        photo: PhotoYXR,
      },
      {
        name: { zh: "陈宝权", en: "Baoquan Chen" },
        affiliation: { zh: "北京大学", en: "Peking University" },
        photo: PhotoCBQ,
      },
      {
        name: { zh: "陈为", en: "Wei Chen" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoCW,
      },
      {
        name: { zh: "刘世霞", en: "Shixia Liu" },
        affiliation: { zh: "清华大学", en: "Tsinghua University" },
        photo: PhotoLSX,
      },
      {
        name: { zh: "屈华民", en: "Huamin Qu" },
        affiliation: {
          zh: "香港科技大学",
          en: "Hong Kong University of Science and Technology",
        },
        photo: PhotoQHM,
      },
      {
        name: { zh: "张加万", en: "Jiawan Zhang" },
        affiliation: { zh: "天津大学", en: "Tianjin University" },
        photo: PhotoZJW,
      },
      {
        name: { zh: "徐瑞鸽", en: "Ruige Xu" },
        affiliation: { zh: "雪城大学", en: "Syracuse University" },
        photo: PhotoXRG,
      },
    ],
  },
];
