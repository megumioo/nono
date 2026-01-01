// 全局数据存储
const appState = {
    todayStudied: false,
    lastStudyDate: null
};

// 数学数据 - 来自Excel《高分指南》
const mathData = [
    {
        chapter: "第一章 算术",
        units: [
            { id: 6, name: "有理数无理数", purpose: "有理数无理数" },
            { id: 7, name: "整除及余数", purpose: "整除及余数" },
            { id: 8, name: "公约数与公倍数", purpose: "公约数与公倍数" },
            { id: 9, name: "比例定理", purpose: "比例定理" },
            { id: 10, name: "绝对值的基本概念与几何意义", purpose: "绝对值的基本概念与几何意义" },
            { id: 11, name: "绝对值三角不等式", purpose: "绝对值三角不等式" }
        ]
    },
    {
        chapter: "第二章 应用题",
        units: [
            { id: 12, name: "商品利润", purpose: "商品利润" },
            { id: 13, name: "直线路程", purpose: "直线路程" },
            { id: 14, name: "水中行船", purpose: "水中行船" },
            { id: 15, name: "相对速度+火车过桥+跑圈+图像", purpose: "相对速度+火车过桥+跑圈+图像" },
            { id: 16, name: "工程问题", purpose: "工程问题" },
            { id: 17, name: "交叉法", purpose: "交叉法" },
            { id: 18, name: "浓度问题", purpose: "浓度问题" },
            { id: 19, name: "分段计费", purpose: "分段计费" },
            { id: 20, name: "几何问题", purpose: "几何问题" },
            { id: 21, name: "不定方程", purpose: "不定方程" },
            { id: 22, name: "线性规划", purpose: "线性规划" },
            { id: 23, name: "至少至多", purpose: "至少至多" },
            { id: 24, name: "最值问题", purpose: "最值问题" },
            { id: 25, name: "植树+年龄+鸡兔同笼", purpose: "植树+年龄+鸡兔同笼" }
        ]
    },
    {
        chapter: "第三章 整式与函数",
        units: [
            { id: 26, name: "整式、分式与函数", purpose: "整式、分式与函数" },
            { id: 27, name: "整式加减乘除", purpose: "整式加减乘除" },
            { id: 28, name: "分式运算", purpose: "分式运算" },
            { id: 29, name: "一元二次函数", purpose: "一元二次函数" },
            { id: 30, name: "集合", purpose: "集合" },
            { id: 31, name: "指数函数与对数函数", purpose: "指数函数与对数函数" },
            { id: 32, name: "幂函数", purpose: "幂函数" },
            { id: 33, name: "特殊函数", purpose: "特殊函数" }
        ]
    },
    {
        chapter: "第四章 方程与不等式",
        units: [
            { id: 34, name: "一次方程组", purpose: "一次方程组" },
            { id: 35, name: "一元二次方程", purpose: "一元二次方程" },
            { id: 36, name: "一次不等式组+一元二次不等式", purpose: "一次不等式组+一元二次不等式" },
            { id: 37, name: "特殊方程", purpose: "特殊方程" },
            { id: 38, name: "均值不等式", purpose: "均值不等式" },
            { id: 39, name: "特殊不等式", purpose: "特殊不等式" }
        ]
    },
    {
        chapter: "第五章 数列",
        units: [
            { id: 40, name: "数列定义", purpose: "数列定义" },
            { id: 41, name: "等差数列1", purpose: "等差数列1" },
            { id: 42, name: "等差数列2", purpose: "等差数列2" },
            { id: 43, name: "等比数列", purpose: "等比数列" },
            { id: 44, name: "递推公式", purpose: "递推公式" },
            { id: 45, name: "数列应用题及常见错误", purpose: "数列应用题及常见错误" }
        ]
    },
    {
        chapter: "第六章 平面几何",
        units: [
            { id: 46, name: "平行直线", purpose: "平行直线" },
            { id: 47, name: "三角形-角与边", purpose: "三角形-角与边" },
            { id: 48, name: "三角形面积", purpose: "三角形面积" },
            { id: 49, name: "形状判断与全等相似", purpose: "形状判断与全等相似" },
            { id: 50, name: "四边形", purpose: "四边形" },
            { id: 51, name: "三角形", purpose: "三角形" },
            { id: 52, name: "圆与扇形", purpose: "圆与扇形" },
            { id: 53, name: "综合题-相关定理", purpose: "综合题-相关定理" }
        ]
    },
    {
        chapter: "第七章 解析几何",
        units: [
            { id: 54, name: "平面直角坐标系", purpose: "平面直角坐标系" },
            { id: 55, name: "直线-斜率", purpose: "直线-斜率" },
            { id: 56, name: "直线-位置关系", purpose: "直线-位置关系" },
            { id: 57, name: "圆", purpose: "圆" },
            { id: 58, name: "对称", purpose: "对称" },
            { id: 59, name: "直线与坐标轴围成面积计算", purpose: "直线与坐标轴围成面积计算" },
            { id: 60, name: "坐标轴中最值问题", purpose: "坐标轴中最值问题" }
        ]
    },
    {
        chapter: "第八章 立体几何",
        units: [
            { id: 61, name: "长方体", purpose: "长方体" },
            { id: 62, name: "柱体", purpose: "柱体" },
            { id: 63, name: "椎体", purpose: "椎体" },
            { id: 64, name: "球体", purpose: "球体" },
            { id: 65, name: "内切球与外切球", purpose: "内切球与外切球" },
            { id: 66, name: "综合题", purpose: "综合题" }
        ]
    },
    {
        chapter: "第九章 排列组合",
        units: [
            { id: 67, name: "两个基本原理", purpose: "两个基本原理" },
            { id: 68, name: "排列与组合", purpose: "排列与组合" },
            { id: 69, name: "基本原理拓展", purpose: "基本原理拓展" },
            { id: 70, name: "列举法", purpose: "列举法" },
            { id: 71, name: "相邻与不相邻+插空", purpose: "相邻与不相邻+插空" },
            { id: 72, name: "隔板+方幂+对号", purpose: "隔板+方幂+对号" },
            { id: 73, name: "排座位+数字+分组+涂色", purpose: "排座位+数字+分组+涂色" },
            { id: 74, name: "全能+配对+定序", purpose: "全能+配对+定序" }
        ]
    },
    {
        chapter: "第十章 概率",
        units: [
            { id: 75, name: "古典概率", purpose: "古典概率" },
            { id: 76, name: "独立事件", purpose: "独立事件" },
            { id: 77, name: "常考古典概率", purpose: "常考古典概率" },
            { id: 78, name: "伯努利", purpose: "伯努利" }
        ]
    },
    {
        chapter: "第十一章 其他",
        units: [
            { id: 79, name: "第二节", purpose: "第二节" },
            { id: 80, name: "第三节2", purpose: "第三节2" },
            { id: 81, name: "第三节3", purpose: "第三节3" }
        ]
    }
];

// 逻辑数据 - 来自Excel《逻辑攻略》
const logicData = [
    {
        chapter: "第一章 逻辑导学",
        units: [
            { id: 1, name: "逻辑考什么", purpose: "逻辑考什么" },
            { id: 2, name: "逻辑考试的本质", purpose: "逻辑考试的本质" },
            { id: 3, name: "逻辑备考战略与战术", purpose: "逻辑备考战略与战术" }
        ]
    },
    {
        chapter: "第二章 逻辑基础",
        units: [
            { id: 4, name: "培养审题习惯", purpose: "培养审题习惯" },
            { id: 5, name: "掌握解题方法", purpose: "掌握解题方法" },
            { id: 6, name: "具备真题经验", purpose: "具备真题经验" }
        ]
    },
    {
        chapter: "第三章 概念",
        units: [
            { id: 7, name: "概念的种类", purpose: "概念的种类" },
            { id: 8, name: "概念的定义与划分", purpose: "概念的定义与划分" },
            { id: 9, name: "概念外延之间的关系", purpose: "概念外延之间的关系" },
            { id: 10, name: "逻辑三大定律", purpose: "逻辑三大定律" }
        ]
    },
    {
        chapter: "第四章 联言命题和选言命题",
        units: [
            { id: 11, name: "联言命题", purpose: "联言命题" },
            { id: 12, name: "相容选言命题", purpose: "相容选言命题" },
            { id: 13, name: "不相容选言命题", purpose: "不相容选言命题" }
        ]
    },
{
        chapter: "第五章 假言命题",
        units: [
            { id: 14, name: "假言命题的分类", purpose: "假言命题的分类" },
            { id: 15, name: "假言命题的刻画", purpose: "假言命题的刻画" },
            { id: 16, name: "假言命题的'支点策略'", purpose: "假言命题的'支点策略'" }
        ]
    },
    {
        chapter: "第六章 直言命题和模态命题",
        units: [
            { id: 17, name: "直言命题及其对当关系", purpose: "直言命题及其对当关系" },
            { id: 18, name: "直言命题的推理规则", purpose: "直言命题的推理规则" },
            { id: 19, name: "直言三段论", purpose: "直言三段论" },
            { id: 20, name: "模态命题", purpose: "模态命题" }
        ]
    },
    {
        chapter: "第七章 论证逻辑解题方法",
        units: [
            { id: 21, name: "三个考点", purpose: "三个考点" },
            { id: 22, name: "论据的'看'与'不看'", purpose: "论据的'看'与'不看'" },
            { id: 23, name: "四种考法", purpose: "四种考法" },
            { id: 24, name: "真题经验", purpose: "真题经验" }
        ]
    },
    {
        chapter: "第八章 论证逻辑解题补充",
        units: [
            { id: 25, name: "知识点补充", purpose: "知识点补充" },
            { id: 26, name: "题型补充", purpose: "题型补充" }
        ]
    },
    {
        chapter: "第九章 综合推理",
        units: [
            { id: 27, name: "综合推理综述", purpose: "综合推理综述" },
            { id: 28, name: "综合推理解题技术", purpose: "综合推理解题技术" }
        ]
    }
];

// 英语数据 - 重构后的结构
const englishData = {
    // 单词课（14讲）和单词带背课（12节）- 共26个单元
    vocabularyLessons: [
        // 单词课 1-14
        { id: 1, type: "单词课", name: "单词课第1讲", studied: false, notes: false, memorized: false },
        { id: 2, type: "单词课", name: "单词课第2讲", studied: false, notes: false, memorized: false },
        { id: 3, type: "单词课", name: "单词课第3讲", studied: false, notes: false, memorized: false },
        { id: 4, type: "单词课", name: "单词课第4讲", studied: false, notes: false, memorized: false },
        { id: 5, type: "单词课", name: "单词课第5讲", studied: false, notes: false, memorized: false },
        { id: 6, type: "单词课", name: "单词课第6讲", studied: false, notes: false, memorized: false },
        { id: 7, type: "单词课", name: "单词课第7讲", studied: false, notes: false, memorized: false },
        { id: 8, type: "单词课", name: "单词课第8讲", studied: false, notes: false, memorized: false },
        { id: 9, type: "单词课", name: "单词课第9讲", studied: false, notes: false, memorized: false },
        { id: 10, type: "单词课", name: "单词课第10讲", studied: false, notes: false, memorized: false },
        { id: 11, type: "单词课", name: "单词课第11讲", studied: false, notes: false, memorized: false },
        { id: 12, type: "单词课", name: "单词课第12讲", studied: false, notes: false, memorized: false },
        { id: 13, type: "单词课", name: "单词课第13讲", studied: false, notes: false, memorized: false },
        { id: 14, type: "单词课", name: "单词课第14讲", studied: false, notes: false, memorized: false },
        // 单词带背课 1-12
        { id: 15, type: "单词带背课", name: "单词带背课第1节", studied: false, notes: false, memorized: false },
        { id: 16, type: "单词带背课", name: "单词带背课第2节", studied: false, notes: false, memorized: false },
        { id: 17, type: "单词带背课", name: "单词带背课第3节", studied: false, notes: false, memorized: false },
        { id: 18, type: "单词带背课", name: "单词带背课第4节", studied: false, notes: false, memorized: false },
        { id: 19, type: "单词带背课", name: "单词带背课第5节", studied: false, notes: false, memorized: false },
        { id: 20, type: "单词带背课", name: "单词带背课第6节", studied: false, notes: false, memorized: false },
        { id: 21, type: "单词带背课", name: "单词带背课第7节", studied: false, notes: false, memorized: false },
        { id: 22, type: "单词带背课", name: "单词带背课第8节", studied: false, notes: false, memorized: false },
        { id: 23, type: "单词带背课", name: "单词带背课第9节", studied: false, notes: false, memorized: false },
        { id: 24, type: "单词带背课", name: "单词带背课第10节", studied: false, notes: false, memorized: false },
        { id: 25, type: "单词带背课", name: "单词带背课第11节", studied: false, notes: false, memorized: false },
        { id: 26, type: "单词带背课", name: "单词带背课第12节", studied: false, notes: false, memorized: false }
    ],
    // 词库管理
    wordCategories: [
        // 用户可自定义分类，至少包含一个固定分类
        { 
            id: 1, 
            name: "长难句生词",  // 固定分类，不可删除
            custom: false,
            words: []  // 每个单词：{id, word, meaning, addedDate, reviewDates: []}
        }
        // 用户可添加自定义分类：{id: 2, name: "自定义分类名", custom: true, words: []}
    ],
    // 长难句库
    longSentences: [
        // 每个长难句：{id, content, analysis, words: [], createdAt}
    ],
    // 作文模板库
    essayTemplates: [
        // 按段落分组
        { id: 1, paragraph: 1, name: "开头段模板1", content: "", tags: [] },
        { id: 2, paragraph: 2, name: "论证段模板1", content: "", tags: [] },
        { id: 3, paragraph: 3, name: "结尾段模板1", content: "", tags: [] }
    ],
    // 遗忘曲线复习间隔（天）
    reviewIntervals: [1, 3, 7, 14, 30],
    // 下一个ID
    nextWordId: 1,
    nextSentenceId: 1,
    nextTemplateId: 4
};

// 写作数据
const writingData = [
    {
        chapter: "论证有效性分析",
        units: [
            { id: 1, name: "结构识别", purpose: "识别论证结构" },
            { id: 2, name: "逻辑谬误", purpose: "识别常见逻辑谬误" },
            { id: 3, name: "分析框架", purpose: "掌握分析框架" },
            { id: 4, name: "语言表达", purpose: "掌握论证有效性分析的语言表达" }
        ]
    },
    {
        chapter: "论说文",
        units: [
            { id: 5, name: "审题立意", purpose: "准确把握题目要求，确立中心论点" },
            { id: 6, name: "结构布局", purpose: "掌握论说文结构布局" },
            { id: 7, name: "论证方法", purpose: "掌握多种论证方法" },
            { id: 8, name: "素材积累", purpose: "积累论证素材" },
            { id: 9, name: "语言表达", purpose: "掌握论说文语言表达" }
        ]
    },
    {
        chapter: "模板积累",
        units: [
            { id: 10, name: "开头段", purpose: "开头段模板" },
            { id: 11, name: "过渡句", purpose: "过渡句模板" },
            { id: 12, name: "结尾段", purpose: "结尾段模板" },
            { id: 13, name: "常用论证句式", purpose: "常用论证句式模板" }
        ]
    }
];

// 学习状态定义
const mathStatuses = [
    { id: "unknown", name: "未接触", icon: "fas fa-question-circle" },
    { id: "seen", name: "已听课", icon: "fas fa-eye" },
    { id: "familiar", name: "已做题", icon: "fas fa-pen" },
    { id: "mastered", name: "可拆解题型并迁移", icon: "fas fa-check-double" }
];

const logicStatuses = [
    { id: "unknown", name: "未接触", icon: "fas fa-question-circle" },
    { id: "seen", name: "已听课", icon: "fas fa-eye" },
    { id: "familiar", name: "已做题", icon: "fas fa-pen" },
    { id: "mastered", name: "可识别题型并按流程作答", icon: "fas fa-check-double" }
];

// 学习阶段字段
const mathStageFields = [
    "例题", "例题网课", "基础题", "基础题网课", "复盘知识点总结", 
    "提高题", "提高题网课", "总结+思维导图", "二级结论总结"
];

const logicStageFields = [
    "内容看书", "内容网课", "补充习题", "补充习题网课"
];

// 习题本数据结构
const exerciseBookData = {
    math: [],
    logic: [],
    nextId: 1
};

// 数学考点标签
const mathTopics = [
    "算术", "代数", "几何", "数列", "排列组合", "概率", 
    "方程", "不等式", "函数", "解析几何", "立体几何"
];

// 逻辑考点标签
const logicTopics = [
    "形式逻辑", "论证逻辑", "综合推理", "概念", "命题", "推理"
];

// 通用错因标签
const errorReasons = [
    "审题错误", "思路错误", "计算错误", "概念模糊", 
    "记忆错误", "粗心大意", "时间不足", "心理因素"
];

// 初始化数据存储
function initDataStorage() {
    if (!localStorage.getItem('mbaStudyData')) {
        const initialData = {
            math: {},
            logic: {},
            english: englishData, // 使用新的英语数据结构
            writing: {},
            exerciseBook: exerciseBookData,
            todayStudied: false,
            lastStudyDate: null,
            recentActivities: [],
            strategyData: {
                currentStage: "基础构建期",
                weeklyFocus: [],
                milestones: [
                    { title: "阶段模拟考", date: "2026-04-15", completed: false },
                    { title: "真题模考训练", date: "2026-04-30", completed: false },
                    { title: "正式考试", date: "2026-06-30", completed: false }
                ],
                suggestions: []
            }
        };
        
        // 初始化数学数据
        mathData.forEach(chapter => {
            chapter.units.forEach(unit => {
                initialData.math[unit.id] = {
                    status: "unknown",
                    stages: mathStageFields.reduce((obj, field) => {
                        obj[field] = false;
                        return obj;
                    }, {}),
                    note: "",
                    lastUpdated: null
                };
            });
        });
        
        // 初始化逻辑数据
        logicData.forEach(chapter => {
            chapter.units.forEach(unit => {
                initialData.logic[unit.id] = {
                    status: "unknown",
                    stages: logicStageFields.reduce((obj, field) => {
                        obj[field] = false;
                        return obj;
                    }, {}),
                    note: "",
                    lastUpdated: null
                };
            });
        });
        
        // 初始化写作数据
        writingData.forEach(chapter => {
            chapter.units.forEach(unit => {
                initialData.writing[unit.id] = {
                    seen: false,
                    replace: false,
                    note: "",
                    lastUpdated: null
                };
            });
        });
        
        // 初始化战略数据
        initialData.strategyData.weeklyFocus = [
            { text: "完成数学第一章算术模块学习", completed: false, priority: 1 },
            { text: "复习逻辑论证方法部分", completed: false, priority: 2 },
            { text: "英语高频词群第一组记忆", completed: false, priority: 3 }
        ];
        
        localStorage.setItem('mbaStudyData', JSON.stringify(initialData));
    } else {
        // 迁移旧数据到新结构
        const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
        if (!storedData.english || !storedData.english.vocabularyLessons) {
            // 如果英语数据是旧结构，迁移到新结构
            storedData.english = englishData;
            localStorage.setItem('mbaStudyData', JSON.stringify(storedData));
        }
    }
    
    // 加载应用状态
    const data = JSON.parse(localStorage.getItem('mbaStudyData'));
    appState.todayStudied = data.todayStudied || false;
    appState.lastStudyDate = data.lastStudyDate || null;
    
    // 检查是否需要重置今日学习状态
    const today = new Date().toDateString();
    if (appState.lastStudyDate !== today) {
        appState.todayStudied = false;
        data.todayStudied = false;
        localStorage.setItem('mbaStudyData', JSON.stringify(data));
    }
}

// 保存英语数据
function saveEnglishData() {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    storedData.english = englishData;
    localStorage.setItem('mbaStudyData', JSON.stringify(storedData));
    
    // 更新备考战略
    updateStrategyData();
    
    // 更新首页进度
    updateProgress();
    
    return true;
}

// 保存数据
function saveData(subject, id, data) {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    if (!storedData[subject]) storedData[subject] = {};
    
    storedData[subject][id] = {
        ...storedData[subject][id],
        ...data,
        lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem('mbaStudyData', JSON.stringify(storedData));
    
    // 更新备考战略
    updateStrategyData();
    
    // 更新首页进度
    updateProgress();
    
    return true;
}

// 保存习题本数据
function saveExerciseBook() {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    storedData.exerciseBook = exerciseBookData;
    localStorage.setItem('mbaStudyData', JSON.stringify(storedData));
    
    // 更新备考战略
    updateStrategyData();
    
    return true;
}

// 获取数据
function getData(subject, id) {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    return storedData[subject] ? storedData[subject][id] : null;
}

// 更新备考战略数据
function updateStrategyData() {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    const strategyData = storedData.strategyData;
    
    // 计算各科进度百分比
    let mathProgress = calculateSubjectProgress('math');
    let logicProgress = calculateSubjectProgress('logic');
    let englishProgress = calculateSubjectProgress('english');
    let writingProgress = calculateSubjectProgress('writing');
    
    // 根据进度确定当前阶段
    let totalProgress = (mathProgress + logicProgress + englishProgress + writingProgress) / 4;
    
    if (totalProgress >= 80) {
        strategyData.currentStage = "冲刺提升期";
    } else if (totalProgress >= 50) {
        strategyData.currentStage = "强化训练期";
    } else {
        strategyData.currentStage = "基础构建期";
    }
    
    // 基于错题生成智能建议
    strategyData.suggestions = generateIntelligentSuggestions();
    
    // 更新每周聚焦任务
    updateWeeklyFocus();
    
    localStorage.setItem('mbaStudyData', JSON.stringify(storedData));
    
    // 更新首页显示
    updateStrategyDisplay();
}

// 计算科目进度百分比
function calculateSubjectProgress(subject) {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    let completed = 0;
    let total = 0;
    
    if (subject === 'math') {
        mathData.forEach(chapter => {
            total += chapter.units.length;
            chapter.units.forEach(unit => {
                const unitData = storedData.math[unit.id];
                if (unitData && unitData.status !== "unknown") {
                    completed++;
                }
            });
        });
    } else if (subject === 'logic') {
        logicData.forEach(chapter => {
            total += chapter.units.length;
            chapter.units.forEach(unit => {
                const unitData = storedData.logic[unit.id];
                if (unitData && unitData.status !== "unknown") {
                    completed++;
                }
            });
        });
    } else if (subject === 'english') {
        // 计算词汇学习进度
        const englishData = storedData.english;
        total = englishData.vocabularyLessons.length;
        englishData.vocabularyLessons.forEach(lesson => {
            if (lesson.studied) {
                completed++;
            }
        });
    } else if (subject === 'writing') {
        writingData.forEach(chapter => {
            total += chapter.units.length;
            chapter.units.forEach(unit => {
                const unitData = storedData.writing[unit.id];
                if (unitData && (unitData.seen || unitData.replace)) {
                    completed++;
                }
            });
        });
    }
    
    return total > 0 ? Math.round((completed / total) * 100) : 0;
}

// 基于错题生成智能建议
function generateIntelligentSuggestions() {
    const suggestions = [];
    
    // 分析数学错题
    const mathErrors = exerciseBookData.math.filter(q => q.status === 'unreviewed' || q.status === 'reviewed');
    if (mathErrors.length > 0) {
        const topicCounts = {};
        mathErrors.forEach(question => {
            if (question.topic) {
                topicCounts[question.topic] = (topicCounts[question.topic] || 0) + 1;
            }
        });
        
        // 找出错误最多的知识点
        let maxTopic = '';
        let maxCount = 0;
        for (const [topic, count] of Object.entries(topicCounts)) {
            if (count > maxCount) {
                maxCount = count;
                maxTopic = topic;
            }
        }
        
        if (maxTopic) {
            suggestions.push({
                text: `根据${maxCount}道错题分析，建议重点复习${maxTopic}`,
                priority: 1,
                subject: 'math'
            });
        }
    }
    
    // 分析逻辑错题
    const logicErrors = exerciseBookData.logic.filter(q => q.status === 'unreviewed' || q.status === 'reviewed');
    if (logicErrors.length > 0) {
        suggestions.push({
            text: `逻辑有${logicErrors.length}道错题待复习，建议安排专项训练`,
            priority: 2,
            subject: 'logic'
        });
    }
    
    // 基于进度生成建议
    const mathProgress = calculateSubjectProgress('math');
    const logicProgress = calculateSubjectProgress('logic');
    
    if (mathProgress - logicProgress > 20) {
        suggestions.push({
            text: "数学进度领先逻辑较多，建议增加逻辑学习时间",
            priority: 3,
            subject: 'logic'
        });
    } else if (logicProgress - mathProgress > 20) {
        suggestions.push({
            text: "逻辑进度领先数学较多，建议增加数学学习时间",
            priority: 3,
            subject: 'math'
        });
    }
    
    return suggestions;
}

// 更新每周聚焦任务
function updateWeeklyFocus() {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    const strategyData = storedData.strategyData;
    
    // 清空现有任务
    strategyData.weeklyFocus = [];
    
    // 根据错题生成任务
    const mathErrors = exerciseBookData.math.filter(q => q.status === 'unreviewed');
    const logicErrors = exerciseBookData.logic.filter(q => q.status === 'unreviewed');
    
    if (mathErrors.length > 0) {
        strategyData.weeklyFocus.push({
            text: `复习数学错题（${mathErrors.length}道）`,
            completed: false,
            priority: 1
        });
    }
    
    if (logicErrors.length > 0) {
        strategyData.weeklyFocus.push({
            text: `复习逻辑错题（${logicErrors.length}道）`,
            completed: false,
            priority: 2
        });
    }
    
    // 基于学习进度生成任务
    const mathProgress = calculateSubjectProgress('math');
    const logicProgress = calculateSubjectProgress('logic');
    
    if (mathProgress < 30) {
        strategyData.weeklyFocus.push({
            text: "完成数学基础章节学习（第一章至第三章）",
            completed: false,
            priority: 3
        });
    } else if (mathProgress < 60) {
        strategyData.weeklyFocus.push({
            text: "完成数学中等难度章节学习",
            completed: false,
            priority: 2
        });
    }
    
    if (logicProgress < 40) {
        strategyData.weeklyFocus.push({
            text: "完成逻辑基础概念学习",
            completed: false,
            priority: 3
        });
    }
    
    localStorage.setItem('mbaStudyData', JSON.stringify(storedData));
}

// 更新备考战略显示
function updateStrategyDisplay() {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    
    // 确保数据存在
    if (!storedData) {
        // 如果数据不存在，初始化它
        initDataStorage();
        return;
    }
    
    // 确保 strategyData 存在
    if (!storedData.strategyData) {
        storedData.strategyData = {
            currentStage: "基础构建期",
            weeklyFocus: [
                { text: "完成数学第一章算术模块学习", completed: false, priority: 1 },
                { text: "复习逻辑论证方法部分", completed: false, priority: 2 },
                { text: "英语高频词群第一组记忆", completed: false, priority: 3 }
            ],
            milestones: [
                { title: "阶段模拟考", date: "2026-04-15", completed: false },
                { title: "真题模考训练", date: "2026-04-30", completed: false },
                { title: "正式考试", date: "2026-06-30", completed: false }
            ],
            suggestions: []
        };
        localStorage.setItem('mbaStudyData', JSON.stringify(storedData));
    }
    
    const strategyData = storedData.strategyData;
    
    // 更新当前阶段
    const currentStageElement = document.getElementById('current-stage');
    if (currentStageElement) {
        currentStageElement.textContent = strategyData.currentStage || "基础构建期";
    }
    
    // 更新本周聚焦
    const weeklyFocusContainer = document.getElementById('weekly-focus');
    if (weeklyFocusContainer) {
        const weeklyFocus = strategyData.weeklyFocus || [];
        weeklyFocusContainer.innerHTML = weeklyFocus.map(task => `
            <div class="task-item">
                <i class="${task.completed ? 'fas' : 'far'} fa-circle"></i>
                <span class="task-text">${task.text || ''}</span>
            </div>
        `).join('');
    }
    
    // 更新智能建议
    const suggestionsContainer = document.getElementById('intelligent-suggestions');
    if (suggestionsContainer) {
        const suggestions = strategyData.suggestions || [];
        suggestionsContainer.innerHTML = suggestions.map(suggestion => `
            <div class="suggestion-item">
                <i class="fas fa-lightbulb"></i>
                <span class="suggestion-text">${suggestion.text || ''}</span>
            </div>
        `).join('');
    }
    
    // 更新倒计时
    updateCountdowns();
}

// 更新倒计时
function updateCountdowns() {
    document.querySelectorAll('.countdown').forEach(element => {
        const dateStr = element.getAttribute('data-date');
        if (dateStr) {
            const targetDate = new Date(dateStr);
            const today = new Date();
            
            // 清除时间部分，只比较日期
            targetDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            
            const timeDiff = targetDate.getTime() - today.getTime();
            const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            
            if (daysDiff > 0) {
                element.textContent = `${daysDiff} 天`;
                element.style.color = "";
            } else if (daysDiff === 0) {
                element.textContent = "今天";
                element.style.color = "#FF6961";
            } else {
                element.textContent = "已过期";
                element.style.color = "#FF6961";
            }
        }
    });
}

// 更新首页进度
function updateProgress() {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    
    // 计算数学进度
    let mathCompleted = 0;
    let mathTotal = 0;
    let mathStage = "认识结构";
    
    mathData.forEach(chapter => {
        mathTotal += chapter.units.length;
        chapter.units.forEach(unit => {
            const unitData = storedData.math[unit.id];
            if (unitData && unitData.status !== "unknown") {
                mathCompleted++;
            }
        });
    });
    
    const mathPercent = mathTotal > 0 ? Math.round((mathCompleted / mathTotal) * 100) : 0;
    
    // 确定数学阶段
    if (mathPercent >= 80) mathStage = "稳定刷题";
    else if (mathPercent >= 50) mathStage = "流程熟悉";
    else if (mathPercent > 0) mathStage = "认识结构";
    
    // 更新数学进度显示
    document.getElementById('math-percent').textContent = `${mathPercent}%`;
    document.getElementById('math-progress').style.width = `${mathPercent}%`;
    document.getElementById('math-completed').textContent = mathCompleted;
    document.getElementById('math-stage').textContent = mathStage;
    
    // 计算逻辑进度
    let logicCompleted = 0;
    let logicTotal = 0;
    let logicStage = "认识结构";
    
    logicData.forEach(chapter => {
        logicTotal += chapter.units.length;
        chapter.units.forEach(unit => {
            const unitData = storedData.logic[unit.id];
            if (unitData && unitData.status !== "unknown") {
                logicCompleted++;
            }
        });
    });
    
    const logicPercent = logicTotal > 0 ? Math.round((logicCompleted / logicTotal) * 100) : 0;
    
    // 确定逻辑阶段
    if (logicPercent >= 80) logicStage = "稳定刷题";
    else if (logicPercent >= 50) logicStage = "流程熟悉";
    else if (logicPercent > 0) logicStage = "认识结构";
    
    // 更新逻辑进度显示
    document.getElementById('logic-percent').textContent = `${logicPercent}%`;
    document.getElementById('logic-progress').style.width = `${logicPercent}%`;
    document.getElementById('logic-completed').textContent = logicCompleted;
    document.getElementById('logic-stage').textContent = logicStage;
    
    // 计算英语进度
const englishData = storedData.english || { vocabularyLessons: [] };
let englishCompleted = 0;
let englishTotal = englishData.vocabularyLessons ? englishData.vocabularyLessons.length : 0;
let englishStage = "认识结构";

if (englishData.vocabularyLessons) {
    englishData.vocabularyLessons.forEach(lesson => {
        if (lesson.studied) {
            englishCompleted++;
        }
    });
}

const englishPercent = englishTotal > 0 ? Math.round((englishCompleted / englishTotal) * 100) : 0;

// 确定英语阶段
if (englishPercent >= 80) englishStage = "稳定刷题";
else if (englishPercent >= 50) englishStage = "流程熟悉";
else if (englishPercent > 0) englishStage = "认识结构";

// 更新英语进度显示
document.getElementById('english-percent').textContent = `${englishPercent}%`;
document.getElementById('english-progress').style.width = `${englishPercent}%`;
document.getElementById('english-completed').textContent = englishCompleted;
document.getElementById('english-stage').textContent = englishStage;
    
    // 计算写作进度
    let writingCompleted = 0;
    let writingTotal = 0;
    let writingStage = "认识结构";
    
    writingData.forEach(chapter => {
        writingTotal += chapter.units.length;
        chapter.units.forEach(unit => {
            const unitData = storedData.writing[unit.id];
            if (unitData && (unitData.seen || unitData.replace)) {
                writingCompleted++;
            }
        });
    });
    
    const writingPercent = writingTotal > 0 ? Math.round((writingCompleted / writingTotal) * 100) : 0;
    
    // 确定写作阶段
    if (writingPercent >= 80) writingStage = "稳定刷题";
    else if (writingPercent >= 50) writingStage = "流程熟悉";
    else if (writingPercent > 0) writingStage = "认识结构";
    
    // 更新写作进度显示
    document.getElementById('writing-percent').textContent = `${writingPercent}%`;
    document.getElementById('writing-progress').style.width = `${writingPercent}%`;
    document.getElementById('writing-completed').textContent = writingCompleted;
    document.getElementById('writing-stage').textContent = writingStage;
    
    // 更新习题本统计
    updateExerciseStats();
}

// 更新习题本统计
function updateExerciseStats() {
    const totalQuestions = exerciseBookData.math.length + exerciseBookData.logic.length;
    const errorQuestions = exerciseBookData.math.filter(q => q.status !== 'mastered').length + 
                          exerciseBookData.logic.filter(q => q.status !== 'mastered').length;
    
    document.getElementById('exercise-count').textContent = `${totalQuestions} 道题`;
    document.getElementById('error-count').textContent = `${errorQuestions} 道错题`;
}

// 标记今日已学习
function markTodayStudied() {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    const today = new Date().toDateString();
    
    storedData.todayStudied = true;
    storedData.lastStudyDate = today;
    
    localStorage.setItem('mbaStudyData', JSON.stringify(storedData));
    
    appState.todayStudied = true;
    appState.lastStudyDate = today;
    
    updateTodayStatus();
    
    // 显示确认消息
    showNotification("今日学习状态已更新！");
}

// 更新今日状态显示
function updateTodayStatus() {
    const studyStatusElement = document.getElementById('today-study-status');
    
    if (appState.todayStudied) {
        studyStatusElement.textContent = "已学习";
        studyStatusElement.style.color = "#7BCCB5";
    } else {
        studyStatusElement.textContent = "未开始";
        studyStatusElement.style.color = "#FF6961";
    }
}

// 绑定模块展开/收起事件
function bindModuleToggleEvents() {
    // 移除现有的事件监听器
    document.querySelectorAll('.module-header').forEach(header => {
        header.removeEventListener('click', handleModuleToggle);
    });
    
    // 添加新的事件监听器
    document.querySelectorAll('.module-header').forEach(header => {
        header.addEventListener('click', handleModuleToggle);
    });
    
    // 绑定小节展开/收起事件
    bindSectionToggleEvents();
}

// 绑定小节展开/收起事件
function bindSectionToggleEvents() {
    // 移除现有的事件监听器
    document.querySelectorAll('.section-header').forEach(header => {
        header.removeEventListener('click', handleSectionToggle);
    });
    
    // 添加新的事件监听器
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', handleSectionToggle);
    });
}

// 处理模块展开/收起
function handleModuleToggle(e) {
    const header = e.currentTarget;
    const content = header.nextElementSibling;
    const icon = header.querySelector('.module-title i');
    
    header.classList.toggle('active');
    
    if (header.classList.contains('active')) {
        content.classList.add('expanded');
        icon.style.transform = 'rotate(90deg)';
    } else {
        content.classList.remove('expanded');
        icon.style.transform = 'rotate(0deg)';
        
        // 收起所有小节内容
        const sections = content.querySelectorAll('.section-content');
        const sectionIcons = content.querySelectorAll('.section-title i');
        sections.forEach(section => {
            section.classList.remove('expanded');
        });
        sectionIcons.forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
        content.querySelectorAll('.section-header').forEach(h => {
            h.classList.remove('active');
        });
    }
}

// 处理小节展开/收起
function handleSectionToggle(e) {
    e.stopPropagation(); // 阻止事件冒泡，避免触发模块的点击事件
    
    const header = e.currentTarget;
    const content = header.nextElementSibling;
    const icon = header.querySelector('.section-title i');
    
    header.classList.toggle('active');
    
    if (header.classList.contains('active')) {
        content.classList.add('expanded');
        icon.style.transform = 'rotate(90deg)';
    } else {
        content.classList.remove('expanded');
        icon.style.transform = 'rotate(0deg)';
    }
}

// 保存单元卡状态
function saveUnitCard(subject, id) {
    const section = document.querySelector(`.section[data-subject="${subject}"][data-id="${id}"]`);
    if (!section) return false;
    
    const unitCard = section.querySelector('.unit-card');
    if (!unitCard) return false;
    
    let dataToSave = {};
    
    // 根据学科类型处理数据
    if (subject === 'math' || subject === 'logic') {
        // 获取学习阶段记录
        const stages = {};
        const checkboxes = unitCard.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            const field = checkbox.getAttribute('data-field');
            stages[field] = checkbox.checked;
        });
        
        // 获取状态选择
        const selectedStatus = unitCard.querySelector('.status-option.selected');
        const status = selectedStatus ? selectedStatus.getAttribute('data-status') : 'unknown';
        
        // 获取笔记
        const noteInput = unitCard.querySelector('.note-input');
        const note = noteInput ? noteInput.value : '';
        
        dataToSave = {
            stages,
            status,
            note
        };
    } else if (subject === 'writing') {
        // 获取状态选择
        const selectedOptions = unitCard.querySelectorAll('.status-option.selected');
        const seen = Array.from(selectedOptions).some(option => option.getAttribute('data-type') === 'seen');
        const guessOrReplace = Array.from(selectedOptions).some(option => 
            option.getAttribute('data-type') === 'guess' || option.getAttribute('data-type') === 'replace'
        );
        
        // 获取笔记
        const noteInput = unitCard.querySelector('.note-input');
        const note = noteInput ? noteInput.value : '';
        
        dataToSave = {
            note
        };
        
        dataToSave.seen = seen;
        dataToSave.replace = guessOrReplace;
    }
    
    // 保存数据
    const success = saveData(subject, id, dataToSave);
    
    if (success) {
        showNotification('状态已保存成功！');
        
        // 更新小节标题的显示
        updateSectionHeader(subject, id, dataToSave);
        
        // 更新模块的完成计数
        updateModuleStats(subject, id);
        
        return true;
    } else {
        showNotification('保存失败，请重试！', 'error');
        return false;
    }
}

// 更新小节标题显示
function updateSectionHeader(subject, id, data) {
    const section = document.querySelector(`.section[data-subject="${subject}"][data-id="${id}"]`);
    if (!section) return;
    
    const header = section.querySelector('.section-header');
    const stats = section.querySelector('.section-stats');
    
    if (subject === 'math') {
        const stageCount = Object.values(data.stages || {}).filter(v => v).length;
        const totalStages = mathStageFields.length;
        const statusName = mathStatuses.find(s => s.id === data.status)?.name || "未接触";
        if (stats) {
            stats.innerHTML = `<span>${stageCount}/${totalStages} 阶段 | ${statusName}</span>`;
        }
    } else if (subject === 'logic') {
        const stageCount = Object.values(data.stages || {}).filter(v => v).length;
        const totalStages = logicStageFields.length;
        const statusName = logicStatuses.find(s => s.id === data.status)?.name || "未接触";
        if (stats) {
            stats.innerHTML = `<span>${stageCount}/${totalStages} 阶段 | ${statusName}</span>`;
        }
    } else if (subject === 'writing') {
        const statusText = data.seen ? (data.replace ? "已见过且能替换" : "已见过") : "未见过";
        if (stats) {
            stats.innerHTML = `<span>${statusText}</span>`;
        }
    }
}

// 更新模块统计
function updateModuleStats(subject, unitId) {
    let chapterData, stageFields;
    
    // 确定所属章节
    if (subject === 'math') {
        chapterData = mathData;
        stageFields = mathStageFields;
    } else if (subject === 'logic') {
        chapterData = logicData;
        stageFields = logicStageFields;
    } else if (subject === 'writing') {
        chapterData = writingData;
    } else {
        return;
    }
    
    // 找到单元所在的章节
    for (let i = 0; i < chapterData.length; i++) {
        const chapter = chapterData[i];
        const unit = chapter.units.find(u => u.id === unitId);
        
        if (unit) {
            // 重新计算本章节完成情况
            const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
            let completedCount = 0;
            
            chapter.units.forEach(u => {
                const unitData = storedData[subject][u.id];
                if (subject === 'math' || subject === 'logic') {
                    if (unitData && unitData.status !== "unknown") {
                        completedCount++;
                    }
                } else if (subject === 'writing') {
                    if (unitData && (unitData.seen || unitData.replace)) {
                        completedCount++;
                    }
                }
            });
            
            // 更新模块统计显示
            const moduleHeader = document.querySelector(`.module[data-chapter-index="${i}"] .module-stats`);
            if (moduleHeader) {
                moduleHeader.innerHTML = `<span>${completedCount}/${chapter.units.length} 完成</span>`;
            }
            break;
        }
    }
}

// 更新日期和时间
function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
    
    const dateString = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    
    const timeString = now.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    dateElement.textContent = dateString;
    timeElement.textContent = timeString;
}

// 显示通知
function showNotification(message, type = "success") {
    // 移除现有的通知
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 创建新通知
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.getElementById('notification-container').appendChild(notification);
    
    // 显示通知
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 3秒后隐藏通知
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 创建数学模块
function createMathModules() {
    const container = document.getElementById('math-modules-container');
    container.innerHTML = '';
    
    mathData.forEach((chapter, chapterIndex) => {
        const moduleElement = document.createElement('div');
        moduleElement.className = 'module math-module';
        
        // 计算本章节完成情况
        const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
        let completedCount = 0;
        chapter.units.forEach(unit => {
            const unitData = storedData.math[unit.id];
            if (unitData && unitData.status !== "unknown") {
                completedCount++;
            }
        });
        
        moduleElement.innerHTML = `
            <div class="module-header" data-chapter-index="${chapterIndex}">
                <div class="module-title">
                    <i class="fas fa-chevron-right"></i>
                    <span>${chapter.chapter}</span>
                </div>
                <div class="module-stats">
                    <span>${completedCount}/${chapter.units.length} 完成</span>
                </div>
            </div>
            <div class="module-content">
                ${chapter.units.map(unit => createMathUnitHeader(unit)).join('')}
            </div>
        `;
        
        container.appendChild(moduleElement);
    });
    
    // 绑定模块展开/收起事件
    bindModuleToggleEvents();
}

// 创建数学小节标题
function createMathUnitHeader(unit) {
    const unitData = getData('math', unit.id) || {
        status: "unknown",
        stages: mathStageFields.reduce((obj, field) => {
            obj[field] = false;
            return obj;
        }, {}),
        note: ""
    };
    
    // 计算阶段完成数量
    const stageCount = Object.values(unitData.stages).filter(v => v).length;
    const statusName = mathStatuses.find(s => s.id === unitData.status)?.name || "未接触";
    
    return `
        <div class="section" data-subject="math" data-id="${unit.id}">
            <div class="section-header">
                <div class="section-title">
                    <i class="fas fa-chevron-right"></i>
                    <span>${unit.id}. ${unit.name}</span>
                </div>
                <div class="section-stats">
                    <span>${stageCount}/${mathStageFields.length} 阶段 | ${statusName}</span>
                </div>
            </div>
            <div class="section-content">
                ${createMathUnitCard(unit, unitData)}
            </div>
        </div>
    `;
}

// 创建数学单元卡
function createMathUnitCard(unit, unitData) {
    // 计算阶段完成数量
    const stageCount = Object.values(unitData.stages).filter(v => v).length;
    
    return `
        <div class="unit-card">
            <div class="unit-header">
                <div class="unit-name">${unit.id}. ${unit.name}</div>
            </div>
            
            <div class="stage-fields">
                <h4>学习阶段记录 (${stageCount}/${mathStageFields.length})</h4>
                <div class="checkbox-grid">
                    ${mathStageFields.map(field => `
                        <div class="checkbox-item">
                            <input type="checkbox" id="math-${unit.id}-${field}" 
                                   data-field="${field}"
                                   ${unitData.stages[field] ? 'checked' : ''}>
                            <label for="math-${unit.id}-${field}">${field}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="status-section">
                <h4>学习状态选择</h4>
                <div class="status-options">
                    ${mathStatuses.map(status => `
                        <div class="status-option ${status.id} ${unitData.status === status.id ? 'selected' : ''}" 
                             data-status="${status.id}">
                            <i class="${status.icon}"></i>
                            ${status.name}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="notes-section">
                <label for="math-note-${unit.id}">一句话记录：</label>
                <textarea class="note-input" id="math-note-${unit.id}" 
                          placeholder="记录学习心得、卡点或核心记忆点...">${unitData.note || ''}</textarea>
            </div>
            
            <div class="save-section">
                <button class="save-btn" data-subject="math" data-id="${unit.id}">
                    <i class="fas fa-save"></i> 保存状态
                </button>
            </div>
        </div>
    `;
}

// 创建逻辑模块
function createLogicModules() {
    const container = document.getElementById('logic-modules-container');
    container.innerHTML = '';
    
    logicData.forEach((chapter, chapterIndex) => {
        const moduleElement = document.createElement('div');
        moduleElement.className = 'module logic-module';
        
        // 计算本章节完成情况
        const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
        let completedCount = 0;
        chapter.units.forEach(unit => {
            const unitData = storedData.logic[unit.id];
            if (unitData && unitData.status !== "unknown") {
                completedCount++;
            }
        });
        
        moduleElement.innerHTML = `
            <div class="module-header" data-chapter-index="${chapterIndex}">
                <div class="module-title">
                    <i class="fas fa-chevron-right"></i>
                    <span>${chapter.chapter}</span>
                </div>
                <div class="module-stats">
                    <span>${completedCount}/${chapter.units.length} 完成</span>
                </div>
            </div>
            <div class="module-content">
                ${chapter.units.map(unit => createLogicUnitHeader(unit)).join('')}
            </div>
        `;
        
        container.appendChild(moduleElement);
    });
    
    // 绑定模块展开/收起事件
    bindModuleToggleEvents();
}

// 创建逻辑小节标题
function createLogicUnitHeader(unit) {
    const unitData = getData('logic', unit.id) || {
        status: "unknown",
        stages: logicStageFields.reduce((obj, field) => {
            obj[field] = false;
            return obj;
        }, {}),
        note: ""
    };
    
    // 计算阶段完成数量
    const stageCount = Object.values(unitData.stages).filter(v => v).length;
    const statusName = logicStatuses.find(s => s.id === unitData.status)?.name || "未接触";
    
    return `
        <div class="section" data-subject="logic" data-id="${unit.id}">
            <div class="section-header">
                <div class="section-title">
                    <i class="fas fa-chevron-right"></i>
                    <span>${unit.id}. ${unit.name}</span>
                </div>
                <div class="section-stats">
                    <span>${stageCount}/${logicStageFields.length} 阶段 | ${statusName}</span>
                </div>
            </div>
            <div class="section-content">
                ${createLogicUnitCard(unit, unitData)}
            </div>
        </div>
    `;
}

// 创建逻辑单元卡
function createLogicUnitCard(unit, unitData) {
    // 计算阶段完成数量
    const stageCount = Object.values(unitData.stages).filter(v => v).length;
    
    return `
        <div class="unit-card">
            <div class="unit-header">
                <div class="unit-name">${unit.id}. ${unit.name}</div>
            </div>
            
            <div class="stage-fields">
                <h4>学习阶段记录 (${stageCount}/${logicStageFields.length})</h4>
                <div class="checkbox-grid">
                    ${logicStageFields.map(field => `
                        <div class="checkbox-item">
                            <input type="checkbox" id="logic-${unit.id}-${field}" 
                                   data-field="${field}"
                                   ${unitData.stages[field] ? 'checked' : ''}>
                            <label for="logic-${unit.id}-${field}">${field}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="status-section">
                <h4>学习状态选择</h4>
                <div class="status-options">
                    ${logicStatuses.map(status => `
                        <div class="status-option ${status.id} ${unitData.status === status.id ? 'selected' : ''}" 
                             data-status="${status.id}">
                            <i class="${status.icon}"></i>
                            ${status.name}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="notes-section">
                <label for="logic-note-${unit.id}">一句话记录与卡点：</label>
                <textarea class="note-input" id="logic-note-${unit.id}" 
                          placeholder="记录学习心得、卡点...">${unitData.note || ''}</textarea>
            </div>
            
            <div class="save-section">
                <button class="save-btn" data-subject="logic" data-id="${unit.id}">
                    <i class="fas fa-save"></i> 保存状态
                </button>
            </div>
        </div>
    `;
}

// 创建写作模块
function createWritingModules() {
    const container = document.getElementById('writing-modules-container');
    container.innerHTML = '';
    
    writingData.forEach((chapter, chapterIndex) => {
        const moduleElement = document.createElement('div');
        moduleElement.className = 'module writing-module';
        
        // 计算本章节完成情况
        const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
        let completedCount = 0;
        chapter.units.forEach(unit => {
            const unitData = storedData.writing[unit.id];
            if (unitData && (unitData.seen || unitData.replace)) {
                completedCount++;
            }
        });
        
        moduleElement.innerHTML = `
            <div class="module-header" data-chapter-index="${chapterIndex}">
                <div class="module-title">
                    <i class="fas fa-chevron-right"></i>
                    <span>${chapter.chapter}</span>
                </div>
                <div class="module-stats">
                    <span>${completedCount}/${chapter.units.length} 完成</span>
                </div>
            </div>
            <div class="module-content">
                ${chapter.units.map(unit => createWritingUnitHeader(unit)).join('')}
            </div>
        `;
        
        container.appendChild(moduleElement);
    });
    
    // 绑定模块展开/收起事件
    bindModuleToggleEvents();
}

// 创建写作小节标题
function createWritingUnitHeader(unit) {
    const unitData = getData('writing', unit.id) || {
        seen: false,
        replace: false,
        note: ""
    };
    
    const statusText = unitData.seen ? (unitData.replace ? "已见过且能替换" : "已见过") : "未见过";
    
    return `
        <div class="section" data-subject="writing" data-id="${unit.id}">
            <div class="section-header">
                <div class="section-title">
                    <i class="fas fa-chevron-right"></i>
                    <span>${unit.id}. ${unit.name}</span>
                </div>
                <div class="section-stats">
                    <span>${statusText}</span>
                </div>
            </div>
            <div class="section-content">
                ${createWritingUnitCard(unit, unitData)}
            </div>
        </div>
    `;
}

// 创建写作单元卡
function createWritingUnitCard(unit, unitData) {
    return `
        <div class="unit-card">
            <div class="unit-header">
                <div class="unit-name">${unit.id}. ${unit.name}</div>
            </div>
            
            <div class="status-section">
                <h4>学习状态选择</h4>
                <div class="status-options">
                    <div class="status-option writing-seen ${unitData.seen ? 'selected' : ''}" 
                         data-type="seen">
                        <i class="fas ${unitData.seen ? 'fa-file-alt' : 'fa-file'}"></i>
                        ${unitData.seen ? '见过模板' : '未见过'}
                    </div>
                    <div class="status-option writing-replace ${unitData.replace ? 'selected' : ''}" 
                         data-type="replace">
                        <i class="fas ${unitData.replace ? 'fa-exchange-alt' : 'fa-times'}"></i>
                        ${unitData.replace ? '能替换' : '不能替换'}
                    </div>
                </div>
            </div>
            
            <div class="notes-section">
                <label for="writing-note-${unit.id}">一句话记录：</label>
                <textarea class="note-input" id="writing-note-${unit.id}" 
                          placeholder="记录学习心得...">${unitData.note || ''}</textarea>
            </div>
            
            <div class="save-section">
                <button class="save-btn" data-subject="writing" data-id="${unit.id}">
                    <i class="fas fa-save"></i> 保存状态
                </button>
            </div>
        </div>
    `;
}

// 英语模块功能
// 初始化英语模块
function initEnglishModule() {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    englishData = storedData.english || englishData;
    
    // 加载词汇学习模块
    loadVocabularyLessons();
    
    // 加载词库管理
    loadWordCategories();
    loadTodayReview();
    
    // 加载长难句
    loadLongSentences();
    
    // 加载作文模板
    loadEssayTemplates();
}

// 加载词汇学习模块
function loadVocabularyLessons() {
    const container = document.getElementById('vocabulary-lessons');
    if (!container) return;
    
    const lessons = englishData.vocabularyLessons;
    
    container.innerHTML = '';
    
    lessons.forEach(lesson => {
        const lessonElement = document.createElement('div');
        lessonElement.className = 'vocabulary-lesson';
        lessonElement.dataset.id = lesson.id;
        
        lessonElement.innerHTML = `
            <div class="lesson-header">
                <div class="lesson-title">
                    <span>${lesson.name}</span>
                    <span class="lesson-type">${lesson.type}</span>
                </div>
            </div>
            <div class="lesson-checkboxes">
                <div class="checkbox-item">
                    <input type="checkbox" id="lesson-${lesson.id}-studied" ${lesson.studied ? 'checked' : ''}>
                    <label for="lesson-${lesson.id}-studied">已学习</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="lesson-${lesson.id}-notes" ${lesson.notes ? 'checked' : ''}>
                    <label for="lesson-${lesson.id}-notes">有笔记</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="lesson-${lesson.id}-memorized" ${lesson.memorized ? 'checked' : ''}>
                    <label for="lesson-${lesson.id}-memorized">已掌握</label>
                </div>
            </div>
        `;
        
        container.appendChild(lessonElement);
    });
    
    // 绑定复选框事件
    container.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const id = parseInt(this.closest('.vocabulary-lesson').dataset.id);
            const type = this.id.split('-')[2];
            const lesson = englishData.vocabularyLessons.find(l => l.id === id);
            
            if (lesson) {
                lesson[type] = this.checked;
                saveEnglishData();
                updateProgress();
            }
        });
    });
}

// 加载词库管理
function loadWordCategories() {
    const container = document.getElementById('word-categories-list');
    const wordListContainer = document.getElementById('word-list');
    if (!container || !wordListContainer) return;
    
    const categories = englishData.wordCategories;
    
    // 更新分类列表
    container.innerHTML = '';
    
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = `word-category ${category.id === 1 ? 'fixed' : ''}`;
        categoryElement.dataset.id = category.id;
        
        categoryElement.innerHTML = `
            <div class="category-header">
                <span class="category-name">${category.name}</span>
                <span class="word-count">${category.words.length} 词</span>
            </div>
            <div class="category-actions">
                ${category.custom ? `
                    <button class="action-btn edit-category" title="编辑分类">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete-category" title="删除分类">
                        <i class="fas fa-trash"></i>
                    </button>
                ` : ''}
            </div>
        `;
        
        container.appendChild(categoryElement);
    });
    
    // 绑定分类点击事件
    container.querySelectorAll('.word-category').forEach(category => {
        category.addEventListener('click', function() {
            const categoryId = parseInt(this.dataset.id);
            selectWordCategory(categoryId);
        });
    });
    
    // 绑定编辑和删除按钮事件
    container.querySelectorAll('.edit-category').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const categoryId = parseInt(this.closest('.word-category').dataset.id);
            editWordCategory(categoryId);
        });
    });
    
    container.querySelectorAll('.delete-category').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const categoryId = parseInt(this.closest('.word-category').dataset.id);
            deleteWordCategory(categoryId);
        });
    });
    
    // 默认选择第一个分类
    if (categories.length > 0) {
        selectWordCategory(categories[0].id);
    }
}

// 选择词库分类
function selectWordCategory(categoryId) {
    const category = englishData.wordCategories.find(c => c.id === categoryId);
    if (!category) return;
    
    // 更新选中状态
    document.querySelectorAll('.word-category').forEach(cat => {
        cat.classList.remove('selected');
    });
    document.querySelector(`.word-category[data-id="${categoryId}"]`).classList.add('selected');
    
    // 更新单词列表
    loadWordList(categoryId);
    
    // 更新当前分类名称
    document.getElementById('current-category-name').textContent = category.name;
}

// 加载单词列表
function loadWordList(categoryId) {
    const container = document.getElementById('word-list');
    if (!container) return;
    
    const category = englishData.wordCategories.find(c => c.id === categoryId);
    if (!category) return;
    
    container.innerHTML = '';
    
    if (category.words.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-book"></i>
                <p>暂无单词，点击"添加单词"按钮开始记录</p>
            </div>
        `;
        return;
    }
    
    category.words.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.className = 'word-item';
        wordElement.dataset.id = word.id;
        
        // 检查是否需要复习
        const needsReview = checkWordReview(word);
        
        wordElement.innerHTML = `
            <div class="word-content">
                <div class="word-text">
                    <strong>${word.word}</strong>
                    <span class="word-meaning">${word.meaning}</span>
                </div>
                <div class="word-meta">
                    <span class="word-date">添加: ${formatDateShort(word.addedDate)}</span>
                    <span class="word-review-count">复习: ${word.reviewDates?.length || 0}次</span>
                    ${needsReview ? '<span class="review-badge">需复习</span>' : ''}
                </div>
            </div>
            <div class="word-actions">
                <button class="action-btn review-word" title="标记为已复习">
                    <i class="fas fa-check-circle"></i>
                </button>
                <button class="action-btn delete-word" title="删除单词">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        container.appendChild(wordElement);
    });
    
    // 绑定单词操作事件
    container.querySelectorAll('.review-word').forEach(btn => {
        btn.addEventListener('click', function() {
            const wordId = parseInt(this.closest('.word-item').dataset.id);
            markWordAsReviewed(categoryId, wordId);
        });
    });
    
    container.querySelectorAll('.delete-word').forEach(btn => {
        btn.addEventListener('click', function() {
            const wordId = parseInt(this.closest('.word-item').dataset.id);
            deleteWord(categoryId, wordId);
        });
    });
}

// 检查单词是否需要复习
function checkWordReview(word) {
    if (!word.reviewDates || word.reviewDates.length === 0) {
        // 从未复习过，按添加日期计算
        const addedDate = new Date(word.addedDate);
        const today = new Date();
        const daysSinceAdded = Math.floor((today - addedDate) / (1000 * 60 * 60 * 24));
        
        // 检查是否达到第一个复习间隔
        return daysSinceAdded >= englishData.reviewIntervals[0];
    }
    
    // 获取最后一次复习日期
    const lastReview = new Date(word.reviewDates[word.reviewDates.length - 1]);
    const today = new Date();
    const daysSinceLastReview = Math.floor((today - lastReview) / (1000 * 60 * 60 * 24));
    
    // 根据复习次数确定下一个间隔
    const reviewIndex = Math.min(word.reviewDates.length, englishData.reviewIntervals.length - 1);
    const nextInterval = englishData.reviewIntervals[reviewIndex];
    
    return daysSinceLastReview >= nextInterval;
}

// 标记单词为已复习
function markWordAsReviewed(categoryId, wordId) {
    const category = englishData.wordCategories.find(c => c.id === categoryId);
    if (!category) return;
    
    const word = category.words.find(w => w.id === wordId);
    if (!word) return;
    
    if (!word.reviewDates) {
        word.reviewDates = [];
    }
    
    word.reviewDates.push(new Date().toISOString());
    saveEnglishData();
    loadWordList(categoryId);
    loadTodayReview();
    
    showNotification('单词已标记为已复习！');
}

// 删除单词
function deleteWord(categoryId, wordId) {
    if (!confirm('确定要删除这个单词吗？')) return;
    
    const category = englishData.wordCategories.find(c => c.id === categoryId);
    if (!category) return;
    
    const wordIndex = category.words.findIndex(w => w.id === wordId);
    if (wordIndex !== -1) {
        category.words.splice(wordIndex, 1);
        saveEnglishData();
        loadWordList(categoryId);
        loadWordCategories();
        
        showNotification('单词已删除！');
    }
}

// 添加新单词
function addNewWord() {
    const wordInput = document.getElementById('new-word');
    const meaningInput = document.getElementById('new-meaning');
    const categorySelect = document.getElementById('add-word-category');
    
    const word = wordInput.value.trim();
    const meaning = meaningInput.value.trim();
    const categoryId = parseInt(categorySelect.value);
    
    if (!word || !meaning) {
        showNotification('请填写单词和释义！', 'error');
        return;
    }
    
    const category = englishData.wordCategories.find(c => c.id === categoryId);
    if (!category) {
        showNotification('未找到分类！', 'error');
        return;
    }
    
    const newWord = {
        id: englishData.nextWordId++,
        word: word,
        meaning: meaning,
        addedDate: new Date().toISOString(),
        reviewDates: []
    };
    
    category.words.push(newWord);
    saveEnglishData();
    
    // 清空输入框
    wordInput.value = '';
    meaningInput.value = '';
    
    // 重新加载
    loadWordList(categoryId);
    loadWordCategories();
    loadTodayReview();
    
    showNotification('单词添加成功！');
}

// 添加新分类
function addNewCategory() {
    const categoryNameInput = document.getElementById('new-category-name');
    const name = categoryNameInput.value.trim();
    
    if (!name) {
        showNotification('请输入分类名称！', 'error');
        return;
    }
    
    // 检查是否已存在同名分类
    const exists = englishData.wordCategories.some(c => c.name === name);
    if (exists) {
        showNotification('分类名称已存在！', 'error');
        return;
    }
    
    const newCategory = {
        id: Date.now(), // 简单起见，使用时间戳作为ID
        name: name,
        custom: true,
        words: []
    };
    
    englishData.wordCategories.push(newCategory);
    saveEnglishData();
    
    // 清空输入框
    categoryNameInput.value = '';
    
    // 重新加载
    loadWordCategories();
    selectWordCategory(newCategory.id);
    
    // 更新添加单词的分类选项
    updateAddWordCategoryOptions();
    
    showNotification('分类添加成功！');
}

// 编辑分类
function editWordCategory(categoryId) {
    const category = englishData.wordCategories.find(c => c.id === categoryId);
    if (!category || !category.custom) return;
    
    const newName = prompt('请输入新的分类名称：', category.name);
    if (!newName || newName.trim() === '') return;
    
    category.name = newName.trim();
    saveEnglishData();
    loadWordCategories();
    
    // 更新添加单词的分类选项
    updateAddWordCategoryOptions();
    
    showNotification('分类名称已更新！');
}

// 删除分类
function deleteWordCategory(categoryId) {
    const category = englishData.wordCategories.find(c => c.id === categoryId);
    if (!category || !category.custom) return;
    
    if (category.words.length > 0) {
        if (!confirm(`分类"${category.name}"中包含${category.words.length}个单词，确定要删除吗？`)) {
            return;
        }
    }
    
    const categoryIndex = englishData.wordCategories.findIndex(c => c.id === categoryId);
    if (categoryIndex !== -1) {
        englishData.wordCategories.splice(categoryIndex, 1);
        saveEnglishData();
        loadWordCategories();
        
        // 更新添加单词的分类选项
        updateAddWordCategoryOptions();
        
        showNotification('分类已删除！');
    }
}

// 更新添加单词的分类选项
function updateAddWordCategoryOptions() {
    const select = document.getElementById('add-word-category');
    if (!select) return;
    
    select.innerHTML = '';
    
    englishData.wordCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        select.appendChild(option);
    });
}

// 加载今日复习
function loadTodayReview() {
    const container = document.getElementById('today-review');
    if (!container) return;
    
    const today = new Date().toISOString().split('T')[0];
    const wordsToReview = [];
    
    // 收集所有需要复习的单词
    englishData.wordCategories.forEach(category => {
        category.words.forEach(word => {
            if (checkWordReview(word)) {
                wordsToReview.push({
                    ...word,
                    categoryName: category.name,
                    categoryId: category.id
                });
            }
        });
    });
    
    container.innerHTML = '';
    
    if (wordsToReview.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-check-circle"></i>
                <p>今日没有需要复习的单词</p>
            </div>
        `;
        return;
    }
    
    wordsToReview.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.className = 'review-item';
        wordElement.dataset.id = word.id;
        wordElement.dataset.categoryId = word.categoryId;
        
        wordElement.innerHTML = `
            <div class="review-word-content">
                <strong>${word.word}</strong>
                <span class="review-meaning">${word.meaning}</span>
                <span class="review-category">${word.categoryName}</span>
            </div>
            <button class="action-btn review-now">
                <i class="fas fa-check-circle"></i> 已复习
            </button>
        `;
        
        container.appendChild(wordElement);
    });
    
    // 绑定复习按钮事件
    container.querySelectorAll('.review-now').forEach(btn => {
        btn.addEventListener('click', function() {
            const wordId = parseInt(this.closest('.review-item').dataset.id);
            const categoryId = parseInt(this.closest('.review-item').dataset.categoryId);
            markWordAsReviewed(categoryId, wordId);
        });
    });
}

// 加载长难句
function loadLongSentences() {
    const container = document.getElementById('long-sentences-list');
    if (!container) return;
    
    const sentences = englishData.longSentences;
    
    container.innerHTML = '';
    
    if (sentences.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-quote-right"></i>
                <p>暂无长难句，点击"添加长难句"按钮开始记录</p>
            </div>
        `;
        return;
    }
    
    sentences.forEach(sentence => {
        const sentenceElement = document.createElement('div');
        sentenceElement.className = 'long-sentence';
        sentenceElement.dataset.id = sentence.id;
        
        sentenceElement.innerHTML = `
            <div class="sentence-header">
                <div class="sentence-content">
                    ${sentence.content.substring(0, 100)}${sentence.content.length > 100 ? '...' : ''}
                </div>
                <div class="sentence-actions">
                    <button class="action-btn expand-sentence" title="展开/收起">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <button class="action-btn delete-sentence" title="删除">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="sentence-details" style="display: none;">
                <div class="sentence-full">
                    <strong>原文：</strong>
                    <p>${sentence.content}</p>
                </div>
                <div class="sentence-analysis">
                    <strong>解析：</strong>
                    <p>${sentence.analysis || '暂无解析'}</p>
                </div>
                ${sentence.words && sentence.words.length > 0 ? `
                    <div class="sentence-words">
                        <strong>生词：</strong>
                        <div class="word-tags">
                            ${sentence.words.map(word => `<span class="word-tag">${word}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
        
        container.appendChild(sentenceElement);
    });
    
    // 绑定长难句事件
    container.querySelectorAll('.expand-sentence').forEach(btn => {
        btn.addEventListener('click', function() {
            const details = this.closest('.long-sentence').querySelector('.sentence-details');
            const icon = this.querySelector('i');
            
            if (details.style.display === 'none') {
                details.style.display = 'block';
                icon.className = 'fas fa-chevron-up';
            } else {
                details.style.display = 'none';
                icon.className = 'fas fa-chevron-down';
            }
        });
    });
    
    container.querySelectorAll('.delete-sentence').forEach(btn => {
        btn.addEventListener('click', function() {
            const sentenceId = parseInt(this.closest('.long-sentence').dataset.id);
            deleteLongSentence(sentenceId);
        });
    });
}

// 添加长难句
function addLongSentence() {
    const contentInput = document.getElementById('sentence-content');
    const analysisInput = document.getElementById('sentence-analysis');
    
    const content = contentInput.value.trim();
    const analysis = analysisInput.value.trim();
    
    if (!content) {
        showNotification('请输入长难句内容！', 'error');
        return;
    }
    
    const newSentence = {
        id: englishData.nextSentenceId++,
        content: content,
        analysis: analysis,
        words: [],
        createdAt: new Date().toISOString()
    };
    
    englishData.longSentences.push(newSentence);
    saveEnglishData();
    
    // 清空输入框
    contentInput.value = '';
    analysisInput.value = '';
    
    // 重新加载
    loadLongSentences();
    
    showNotification('长难句添加成功！');
}

// 删除长难句
function deleteLongSentence(sentenceId) {
    if (!confirm('确定要删除这个长难句吗？')) return;
    
    const sentenceIndex = englishData.longSentences.findIndex(s => s.id === sentenceId);
    if (sentenceIndex !== -1) {
        englishData.longSentences.splice(sentenceIndex, 1);
        saveEnglishData();
        loadLongSentences();
        
        showNotification('长难句已删除！');
    }
}

// 从长难句中提取生词
function extractWordFromSentence() {
    const contentInput = document.getElementById('sentence-content');
    const selectedText = window.getSelection().toString().trim();
    
    if (!selectedText) {
        showNotification('请先选择文本！', 'error');
        return;
    }
    
    // 弹出添加生词对话框
    const meaning = prompt(`为"${selectedText}"添加释义：`);
    if (!meaning || meaning.trim() === '') return;
    
    // 添加到"长难句生词"分类
    const longSentenceCategory = englishData.wordCategories.find(c => c.id === 1);
    if (!longSentenceCategory) return;
    
    // 检查是否已存在相同单词
    const existingWord = longSentenceCategory.words.find(w => w.word.toLowerCase() === selectedText.toLowerCase());
    if (existingWord) {
        showNotification('该单词已存在！', 'error');
        return;
    }
    
    const newWord = {
        id: englishData.nextWordId++,
        word: selectedText,
        meaning: meaning.trim(),
        addedDate: new Date().toISOString(),
        reviewDates: []
    };
    
    longSentenceCategory.words.push(newWord);
    saveEnglishData();
    
    // 重新加载词库
    loadWordCategories();
    loadWordList(1);
    loadTodayReview();
    
    showNotification('生词已添加到"长难句生词"分类！');
}

// 加载作文模板
function loadEssayTemplates() {
    const container = document.getElementById('essay-templates-list');
    const paragraphSelect = document.getElementById('template-paragraph');
    if (!container || !paragraphSelect) return;
    
    const selectedParagraph = parseInt(paragraphSelect.value);
    const templates = englishData.essayTemplates.filter(t => t.paragraph === selectedParagraph);
    
    container.innerHTML = '';
    
    if (templates.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-file-alt"></i>
                <p>暂无模板，点击"添加模板"按钮开始创建</p>
            </div>
        `;
        return;
    }
    
    templates.forEach(template => {
        const templateElement = document.createElement('div');
        templateElement.className = 'essay-template';
        templateElement.dataset.id = template.id;
        
        templateElement.innerHTML = `
            <div class="template-header">
                <div class="template-name">${template.name}</div>
                <div class="template-actions">
                    <button class="action-btn edit-template" title="编辑">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete-template" title="删除">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="template-content">
                ${template.content.substring(0, 150)}${template.content.length > 150 ? '...' : ''}
            </div>
            ${template.tags && template.tags.length > 0 ? `
                <div class="template-tags">
                    ${template.tags.map(tag => `<span class="template-tag">${tag}</span>`).join('')}
                </div>
            ` : ''}
        `;
        
        container.appendChild(templateElement);
    });
    
    // 绑定模板事件
    container.querySelectorAll('.edit-template').forEach(btn => {
        btn.addEventListener('click', function() {
            const templateId = parseInt(this.closest('.essay-template').dataset.id);
            editEssayTemplate(templateId);
        });
    });
    
    container.querySelectorAll('.delete-template').forEach(btn => {
        btn.addEventListener('click', function() {
            const templateId = parseInt(this.closest('.essay-template').dataset.id);
            deleteEssayTemplate(templateId);
        });
    });
}

// 添加作文模板
function addEssayTemplate() {
    const nameInput = document.getElementById('template-name');
    const contentInput = document.getElementById('template-content');
    const paragraphSelect = document.getElementById('template-paragraph');
    const tagsInput = document.getElementById('template-tags');
    
    const name = nameInput.value.trim();
    const content = contentInput.value.trim();
    const paragraph = parseInt(paragraphSelect.value);
    const tags = tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag);
    
    if (!name || !content) {
        showNotification('请填写模板名称和内容！', 'error');
        return;
    }
    
    const newTemplate = {
        id: englishData.nextTemplateId++,
        name: name,
        content: content,
        paragraph: paragraph,
        tags: tags
    };
    
    englishData.essayTemplates.push(newTemplate);
    saveEnglishData();
    
    // 清空输入框
    nameInput.value = '';
    contentInput.value = '';
    tagsInput.value = '';
    
    // 重新加载
    loadEssayTemplates();
    
    showNotification('模板添加成功！');
}

// 编辑作文模板
function editEssayTemplate(templateId) {
    const template = englishData.essayTemplates.find(t => t.id === templateId);
    if (!template) return;
    
    // 使用弹出窗口编辑
    const newName = prompt('请输入模板名称：', template.name);
    if (!newName || newName.trim() === '') return;
    
    const newContent = prompt('请输入模板内容：', template.content);
    if (newContent === null) return;
    
    const newTags = prompt('请输入标签（用逗号分隔）：', template.tags.join(','));
    if (newTags === null) return;
    
    template.name = newName.trim();
    template.content = newContent.trim();
    template.tags = newTags.split(',').map(tag => tag.trim()).filter(tag => tag);
    
    saveEnglishData();
    loadEssayTemplates();
    
    showNotification('模板已更新！');
}

// 删除作文模板
function deleteEssayTemplate(templateId) {
    if (!confirm('确定要删除这个模板吗？')) return;
    
    const templateIndex = englishData.essayTemplates.findIndex(t => t.id === templateId);
    if (templateIndex !== -1) {
        englishData.essayTemplates.splice(templateIndex, 1);
        saveEnglishData();
        loadEssayTemplates();
        
        showNotification('模板已删除！');
    }
}

// 格式化日期（短格式）
function formatDateShort(dateString) {
    if (!dateString) return '未知日期';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN');
}

// 习题本功能
// 初始化习题本
function initExerciseBook() {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    if (storedData && storedData.exerciseBook) {
        exerciseBookData.math = storedData.exerciseBook.math || [];
        exerciseBookData.logic = storedData.exerciseBook.logic || [];
        exerciseBookData.nextId = storedData.exerciseBook.nextId || 1;
    }
    
    // 更新统计
    updateExerciseStats();
    
    // 默认加载数学题目
    loadQuestions('math');
}

// 加载题目列表
function loadQuestions(subject = 'math', filters = {}) {
    const container = document.getElementById('question-list');
    
    // 获取过滤后的题目
    let questions = exerciseBookData[subject] || [];
    
    // 应用过滤器
    if (filters.type && filters.type !== 'all') {
        questions = questions.filter(q => q.type === filters.type);
    }
    
    if (filters.topic) {
        questions = questions.filter(q => q.topic === filters.topic);
    }
    
    if (filters.error) {
        questions = questions.filter(q => q.error === filters.error);
    }
    
    if (filters.status && filters.status !== 'all') {
        questions = questions.filter(q => q.status === filters.status);
    }
    
    if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        questions = questions.filter(q => 
            q.content.toLowerCase().includes(searchLower) ||
            (q.answer && q.answer.toLowerCase().includes(searchLower)) ||
            (q.topic && q.topic.toLowerCase().includes(searchLower))
        );
    }
    
    // 清空容器
    container.innerHTML = '';
    
    if (questions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-clipboard-list"></i>
                <h3>暂无题目</h3>
                <p>点击"添加题目"按钮开始记录错题</p>
            </div>
        `;
        return;
    }
    
    // 渲染题目列表
    questions.forEach(question => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question-item';
        questionElement.dataset.id = question.id;
        
        // 根据状态设置样式
        let statusClass = '';
        switch(question.status) {
            case 'mastered':
                statusClass = 'status-mastered';
                break;
            case 'reviewed':
                statusClass = 'status-reviewed';
                break;
            default:
                statusClass = 'status-unreviewed';
        }
        
        // 题型显示文本
        let typeText = '';
        let typeClass = '';
        if (question.type === 'problem-solving') {
            typeText = '问题求解';
            typeClass = 'problem-solving';
        } else if (question.type === 'condition-sufficiency') {
            typeText = '条件充分性判断';
            typeClass = 'condition-sufficiency';
        } else if (question.type === 'reasoning') {
            typeText = '逻辑推理';
            typeClass = 'reasoning';
        }
        
        // 标签HTML
        const topicTag = question.topic ? `<span class="question-tag topic">${question.topic}</span>` : '';
        const errorTag = question.error ? `<span class="question-tag error">${question.error}</span>` : '';
        
        questionElement.innerHTML = `
            <div class="question-header">
                <span class="question-type ${typeClass}">${typeText}</span>
                <div class="question-status ${statusClass}">${getStatusText(question.status)}</div>
            </div>
            <div class="question-content">${question.content || ''}</div>
            <div class="question-tags">
                ${topicTag}
                ${errorTag}
            </div>
            <div class="question-footer">
                <span class="question-date">${formatDate(question.createdAt)}</span>
                <div class="question-actions">
                    <button class="action-btn edit-btn" onclick="editQuestion(${question.id})">编辑</button>
                    <button class="action-btn delete-btn" onclick="deleteQuestion(${question.id})">删除</button>
                </div>
            </div>
        `;
        
        container.appendChild(questionElement);
    });
}

// 获取状态文本
function getStatusText(status) {
    switch(status) {
        case 'mastered':
            return '已掌握';
        case 'reviewed':
            return '已复习';
        default:
            return '未复习';
    }
}

// 格式化日期
function formatDate(dateString) {
    if (!dateString) return '未知日期';
    
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        return '今天';
    } else if (diffDays === 1) {
        return '昨天';
    } else if (diffDays < 7) {
        return `${diffDays}天前`;
    } else {
        return date.toLocaleDateString('zh-CN');
    }
}

// 添加题目
function addQuestion(questionData) {
    const question = {
        id: exerciseBookData.nextId++,
        ...questionData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    exerciseBookData[question.subject].push(question);
    saveExerciseBook();
    loadQuestions(question.subject);
    updateExerciseStats();
    updateStrategyData();
    
    showNotification('题目已添加成功！');
    return question.id;
}

// 编辑题目
function editQuestion(questionId) {
    let question = null;
    let subject = null;
    
    // 在数学题目中查找
    question = exerciseBookData.math.find(q => q.id === questionId);
    if (question) {
        subject = 'math';
    }
    
    // 在逻辑题目中查找
    if (!question) {
        question = exerciseBookData.logic.find(q => q.id === questionId);
        if (question) {
            subject = 'logic';
        }
    }
    
    if (!question) {
        showNotification('未找到题目', 'error');
        return;
    }
    
    // 打开编辑弹窗
    openQuestionModal(subject, question);
}

// 删除题目
function deleteQuestion(questionId) {
    if (!confirm('确定要删除这道题目吗？')) {
        return;
    }
    
    // 在数学题目中查找并删除
    const mathIndex = exerciseBookData.math.findIndex(q => q.id === questionId);
    if (mathIndex !== -1) {
        exerciseBookData.math.splice(mathIndex, 1);
    }
    
    // 在逻辑题目中查找并删除
    const logicIndex = exerciseBookData.logic.findIndex(q => q.id === questionId);
    if (logicIndex !== -1) {
        exerciseBookData.logic.splice(logicIndex, 1);
    }
    
    saveExerciseBook();
    
    // 重新加载当前科目题目
    const currentSubject = document.querySelector('.tab.active').dataset.subject;
    loadQuestions(currentSubject);
    updateExerciseStats();
    updateStrategyData();
    
    showNotification('题目已删除');
}

// 打开题目编辑弹窗
function openQuestionModal(subject = 'math', question = null) {
    const modal = document.getElementById('question-modal');
    const form = document.getElementById('question-form');
    
    // 重置表单
    form.reset();
    
    // 设置默认科目
    document.querySelector(`input[name="subject"][value="${subject}"]`).checked = true;
    
    // 如果是编辑模式，填充数据
    if (question) {
        document.getElementById('question-id').value = question.id;
        document.getElementById('question-type').value = question.type;
        document.getElementById('question-content').value = question.content;
        document.getElementById('question-answer').value = question.answer || '';
        document.getElementById('selected-topic').value = question.topic || '';
        document.getElementById('selected-error').value = question.error || '';
        document.getElementById('difficulty-level').value = question.difficulty || '3';
        document.querySelector(`select[name="status"]`).value = question.status || 'unreviewed';
        
        // 选中标签
        document.querySelectorAll('.tag').forEach(tag => {
            tag.classList.remove('selected');
        });
        
        if (question.topic) {
            const topicTag = document.querySelector(`.tag[data-value="${question.topic}"]`);
            if (topicTag) topicTag.classList.add('selected');
        }
        
        if (question.error) {
            const errorTag = document.querySelector(`.tag[data-value="${question.error}"]`);
            if (errorTag) errorTag.classList.add('selected');
        }
        
        // 设置难度
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const difficultyBtn = document.querySelector(`.difficulty-btn[data-level="${question.difficulty || '3'}"]`);
        if (difficultyBtn) difficultyBtn.classList.add('active');
        
        // 显示删除按钮
        document.getElementById('delete-question-btn').style.display = 'block';
    } else {
        document.getElementById('question-id').value = '';
        document.getElementById('selected-topic').value = '';
        document.getElementById('selected-error').value = '';
        document.getElementById('delete-question-btn').style.display = 'none';
    }
    
    // 根据科目更新题型选项
    updateQuestionTypeOptions(subject);
    
    // 显示弹窗
    modal.classList.add('active');
}

// 关闭题目编辑弹窗
function closeQuestionModal() {
    const modal = document.getElementById('question-modal');
    modal.classList.remove('active');
}

// 更新题型选项
function updateQuestionTypeOptions(subject) {
    const typeSelect = document.getElementById('question-type');
    typeSelect.innerHTML = '';
    
    if (subject === 'math') {
        typeSelect.innerHTML = `
            <option value="problem-solving">问题求解</option>
            <option value="condition-sufficiency">条件充分性判断</option>
        `;
    } else if (subject === 'logic') {
        typeSelect.innerHTML = `
            <option value="reasoning">逻辑推理</option>
        `;
    }
}

// 保存题目
function saveQuestion() {
    const form = document.getElementById('question-form');
    const formData = new FormData(form);
    
    const questionData = {
        subject: formData.get('subject'),
        type: formData.get('type'),
        content: formData.get('content'),
        answer: formData.get('answer'),
        topic: formData.get('topic') || '',
        error: formData.get('error') || '',
        difficulty: parseInt(formData.get('difficulty')) || 3,
        status: formData.get('status') || 'unreviewed'
    };
    
    const questionId = formData.get('id');
    
    if (questionId) {
        // 编辑模式
        let question = null;
        let subject = null;
        
        // 查找题目
        question = exerciseBookData.math.find(q => q.id === parseInt(questionId));
        if (question) {
            subject = 'math';
        }
        
        if (!question) {
            question = exerciseBookData.logic.find(q => q.id === parseInt(questionId));
            if (question) {
                subject = 'logic';
            }
        }
        
        if (question) {
            // 如果更换了科目，需要移动到新的科目列表
            if (question.subject !== questionData.subject) {
                // 从原科目删除
                const oldSubject = question.subject;
                const oldIndex = exerciseBookData[oldSubject].findIndex(q => q.id === question.id);
                if (oldIndex !== -1) {
                    exerciseBookData[oldSubject].splice(oldIndex, 1);
                }
                
                // 添加到新科目
                questionData.id = question.id;
                questionData.createdAt = question.createdAt;
                questionData.updatedAt = new Date().toISOString();
                exerciseBookData[questionData.subject].push(questionData);
            } else {
                // 更新题目
                Object.assign(question, questionData);
                question.updatedAt = new Date().toISOString();
            }
            
            showNotification('题目已更新成功！');
        }
    } else {
        // 新增模式
        addQuestion(questionData);
    }
    
    saveExerciseBook();
    
    // 重新加载题目列表
    const currentSubject = document.querySelector('.tab.active').dataset.subject;
    loadQuestions(currentSubject);
    
    // 关闭弹窗
    closeQuestionModal();
}

// 初始化习题本事件监听
function initExerciseBookListeners() {
    // 科目标签切换
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const subject = this.dataset.subject;
            
            // 更新标签状态
            document.querySelectorAll('.tab').forEach(t => {
                t.classList.remove('active');
            });
            this.classList.add('active');
            
            // 更新题型选择器
            updateTypeSelector(subject);
            
            // 更新考点筛选选项
            updateTopicFilter(subject);
            
            // 加载该科目的题目
            loadQuestions(subject);
        });
    });
    
    // 题型选择器
    document.querySelectorAll('.type-option').forEach(option => {
        option.addEventListener('click', function() {
            const type = this.dataset.type;
            
            // 更新选中状态
            document.querySelectorAll('.type-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
            
            // 重新加载题目
            applyFilters();
        });
    });
    
    // 搜索框
    const searchInput = document.getElementById('question-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            applyFilters();
        });
    }
    
    // 筛选器
    const topicFilter = document.getElementById('topic-filter');
    const errorFilter = document.getElementById('error-filter');
    const statusFilter = document.getElementById('status-filter');
    
    if (topicFilter) topicFilter.addEventListener('change', applyFilters);
    if (errorFilter) errorFilter.addEventListener('change', applyFilters);
    if (statusFilter) statusFilter.addEventListener('change', applyFilters);
    
    // 添加题目按钮
    const addQuestionBtn = document.getElementById('add-question-btn');
    if (addQuestionBtn) {
        addQuestionBtn.addEventListener('click', function() {
            const currentSubject = document.querySelector('.tab.active').dataset.subject;
            openQuestionModal(currentSubject);
        });
    }
    
    // 标签选择
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const container = this.closest('.tag-selector');
            const type = container.id === 'topic-tags' ? 'topic' : 'error';
            const inputId = type === 'topic' ? 'selected-topic' : 'selected-error';
            
            // 如果是单选（核心考点），移除其他选中
            if (type === 'topic') {
                container.querySelectorAll('.tag').forEach(t => {
                    t.classList.remove('selected');
                });
            }
            
            // 切换选中状态
            this.classList.toggle('selected');
            
            // 更新隐藏输入框
            const selectedTags = Array.from(container.querySelectorAll('.tag.selected'))
                .map(t => t.dataset.value)
                .join(',');
            
            document.getElementById(inputId).value = selectedTags;
        });
    });
    
    // 难度选择
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const level = this.dataset.level;
            
            // 更新选中状态
            document.querySelectorAll('.difficulty-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            
            // 更新隐藏输入框
            document.getElementById('difficulty-level').value = level;
        });
    });
    
    // 科目切换（在弹窗内）
    document.querySelectorAll('input[name="subject"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                const subject = this.value;
                updateQuestionTypeOptions(subject);
                updateTopicTags(subject);
            }
        });
    });
    
    // 保存题目按钮
    const saveQuestionBtn = document.getElementById('save-question-btn');
    if (saveQuestionBtn) {
        saveQuestionBtn.addEventListener('click', saveQuestion);
    }
    
    // 删除题目按钮
    const deleteQuestionBtn = document.getElementById('delete-question-btn');
    if (deleteQuestionBtn) {
        deleteQuestionBtn.addEventListener('click', function() {
            const questionId = document.getElementById('question-id').value;
            if (questionId) {
                deleteQuestion(parseInt(questionId));
                closeQuestionModal();
            }
        });
    }
    
    // 关闭弹窗按钮
    const closeModalBtn = document.querySelector('.close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeQuestionModal);
    }
    
    const modal = document.getElementById('question-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeQuestionModal();
            }
        });
    }
    
    // 图片上传按钮
    const uploadBtn = document.getElementById('upload-btn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', function() {
            document.getElementById('image-upload').click();
        });
    }
    
    const imageUpload = document.getElementById('image-upload');
    if (imageUpload) {
        imageUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // 这里可以添加图片上传逻辑
                // 由于没有后端，我们只显示文件名
                const preview = document.getElementById('image-preview');
                preview.innerHTML = `
                    <div class="preview-image">
                        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f0f0f0;">
                            <i class="fas fa-image" style="font-size: 24px; color: #ccc;"></i>
                        </div>
                        <button class="remove-image">&times;</button>
                    </div>
                `;
                
                // 添加移除图片事件
                preview.querySelector('.remove-image').addEventListener('click', function() {
                    preview.innerHTML = '';
                    document.getElementById('image-upload').value = '';
                });
            }
        });
    }
}

// 更新题型选择器
function updateTypeSelector(subject) {
    const typeOptions = document.querySelectorAll('.type-option');
    typeOptions.forEach(option => {
        const type = option.dataset.type;
        
        if (subject === 'math') {
            if (type === 'reasoning') {
                option.style.display = 'none';
            } else {
                option.style.display = 'inline-block';
            }
        } else if (subject === 'logic') {
            if (type === 'problem-solving' || type === 'condition-sufficiency') {
                option.style.display = 'none';
            } else {
                option.style.display = 'inline-block';
            }
        }
    });
    
    // 重置为全部题型
    typeOptions.forEach(opt => opt.classList.remove('active'));
    const allOption = document.querySelector('.type-option[data-type="all"]');
    if (allOption) allOption.classList.add('active');
}

// 更新考点筛选选项
function updateTopicFilter(subject) {
    const topicFilter = document.getElementById('topic-filter');
    if (!topicFilter) return;
    
    const mathOptions = topicFilter.querySelector('.math-options');
    const logicOptions = topicFilter.querySelector('.logic-options');
    
    if (subject === 'math') {
        if (mathOptions) mathOptions.style.display = 'block';
        if (logicOptions) logicOptions.style.display = 'none';
    } else if (subject === 'logic') {
        if (mathOptions) mathOptions.style.display = 'none';
        if (logicOptions) logicOptions.style.display = 'block';
    }
    
    // 重置选择
    topicFilter.value = '';
}

// 更新标签显示
function updateTopicTags(subject) {
    const mathTags = document.querySelector('.math-tags');
    const logicTags = document.querySelector('.logic-tags');
    
    if (subject === 'math') {
        if (mathTags) mathTags.style.display = 'flex';
        if (logicTags) logicTags.style.display = 'none';
    } else if (subject === 'logic') {
        if (mathTags) mathTags.style.display = 'none';
        if (logicTags) logicTags.style.display = 'flex';
    }
}

// 应用筛选器
function applyFilters() {
    const currentSubject = document.querySelector('.tab.active').dataset.subject;
    const typeOption = document.querySelector('.type-option.active');
    const type = typeOption ? typeOption.dataset.type : 'all';
    
    const filters = {
        type: type === 'all' ? '' : type,
        topic: document.getElementById('topic-filter')?.value || '',
        error: document.getElementById('error-filter')?.value || '',
        status: document.getElementById('status-filter')?.value || '',
        search: document.getElementById('question-search')?.value || ''
    };
    
    loadQuestions(currentSubject, filters);
}

// 初始化英语模块事件监听
function initEnglishListeners() {
    // 英语选项卡切换
    const englishTabs = document.querySelectorAll('.english-tab');
    if (englishTabs.length > 0) {
        englishTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // 更新选项卡状态
                englishTabs.forEach(t => {
                    t.classList.remove('active');
                });
                this.classList.add('active');
                
                // 显示对应内容
                document.querySelectorAll('.english-tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(`${tabId}-tab`).classList.add('active');
                
                // 如果是词汇学习选项卡，重新加载今日复习
                if (tabId === 'vocabulary') {
                    loadTodayReview();
                }
            });
        });
    }
    
    // 添加单词按钮
    const addWordBtn = document.getElementById('add-word-btn');
    if (addWordBtn) {
        addWordBtn.addEventListener('click', addNewWord);
    }
    
    // 添加分类按钮
    const addCategoryBtn = document.getElementById('add-category-btn');
    if (addCategoryBtn) {
        addCategoryBtn.addEventListener('click', addNewCategory);
    }
    
    // 添加长难句按钮
    const addSentenceBtn = document.getElementById('add-sentence-btn');
    if (addSentenceBtn) {
        addSentenceBtn.addEventListener('click', addLongSentence);
    }
    
    // 添加模板按钮
    const addTemplateBtn = document.getElementById('add-template-btn');
    if (addTemplateBtn) {
        addTemplateBtn.addEventListener('click', addEssayTemplate);
    }
    
    // 作文模板段落选择
    const templateParagraphSelect = document.getElementById('template-paragraph');
    if (templateParagraphSelect) {
        templateParagraphSelect.addEventListener('change', loadEssayTemplates);
    }
    
    // 长难句生词提取（文本选择事件）
    const sentenceContentInput = document.getElementById('sentence-content');
    if (sentenceContentInput) {
        sentenceContentInput.addEventListener('mouseup', function() {
            // 延迟检查是否有选中文本
            setTimeout(() => {
                const selectedText = window.getSelection().toString().trim();
                if (selectedText && selectedText.length > 1) {
                    // 显示提取生词按钮
                    const extractBtn = document.getElementById('extract-word-btn');
                    if (extractBtn) {
                        extractBtn.style.display = 'inline-block';
                        extractBtn.onclick = extractWordFromSentence;
                    }
                }
            }, 100);
        });
    }
    
    // 更新添加单词的分类选项
    updateAddWordCategoryOptions();
}

// 初始化事件监听
function initEventListeners() {
    // 导航菜单点击事件
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            
            // 更新导航状态
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            this.classList.add('active');
            
            // 显示对应页面
            document.querySelectorAll('.page').forEach(p => {
                p.classList.remove('active');
            });
            document.getElementById(page).classList.add('active');
            
            // 更新页面标题
            document.title = `MBA备考 - ${this.querySelector('span').textContent}`;
            
            // 如果切换到学科页面，重新绑定模块事件
            if (page === 'math' || page === 'logic' || page === 'writing') {
                setTimeout(() => {
                    bindModuleToggleEvents();
                }, 100);
            }
            
            // 如果切换到英语页面，初始化英语模块
            if (page === 'english') {
                setTimeout(() => {
                    initEnglishModule();
                }, 100);
            }
            
            // 如果切换到习题本页面，重新加载题目
            if (page === 'exercise-book') {
                const currentSubject = document.querySelector('.tab.active').dataset.subject;
                loadQuestions(currentSubject);
            }
        });
    });
    
    // 标记今日已学习按钮
    const markStudiedBtn = document.getElementById('mark-studied-btn');
    if (markStudiedBtn) {
        markStudiedBtn.addEventListener('click', markTodayStudied);
    }
    
    // 状态选项点击事件（单选）
    document.addEventListener('click', function(e) {
        // 数学和逻辑状态选项（单选）
        if (e.target.closest('.status-option.unknown, .status-option.seen, .status-option.familiar, .status-option.mastered')) {
            const option = e.target.closest('.status-option');
            const unitCard = option.closest('.unit-card');
            
            // 移除同一组中其他选项的选中状态
            const statusOptions = unitCard.querySelectorAll('.status-option.unknown, .status-option.seen, .status-option.familiar, .status-option.mastered');
            statusOptions.forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // 选中当前选项
            option.classList.add('selected');
        }
        
        // 写作状态选项（可以多选）
        if (e.target.closest('.status-option.writing-seen, .status-option.writing-replace')) {
            const option = e.target.closest('.status-option');
            option.classList.toggle('selected');
        }
        
        // 保存按钮点击事件
        if (e.target.closest('.save-btn')) {
            const saveBtn = e.target.closest('.save-btn');
            const subject = saveBtn.getAttribute('data-subject');
            const id = parseInt(saveBtn.getAttribute('data-id'));
            
            saveUnitCard(subject, id);
        }
    });
    
    // 习题本事件监听
    initExerciseBookListeners();
    
    // 英语模块事件监听
    initEnglishListeners();
}

// 初始化应用
function initApp() {
    // 初始化数据存储
    initDataStorage();
    
    // 更新日期和时间
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // 更新今日状态
    updateTodayStatus();
    
    // 更新倒计时
    updateCountdowns();
    
    // 创建各科模块
    createMathModules();
    createLogicModules();
    createWritingModules();
    
    // 初始化习题本
    initExerciseBook();
    
    // 更新首页进度
    updateProgress();
    
    // 更新备考战略显示
    updateStrategyDisplay();
    
    // 初始化事件监听
    initEventListeners();
    
    // 显示欢迎消息
    setTimeout(() => {
        showNotification('MBA备考学习系统已加载完成！');
    }, 1000);
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', initApp);