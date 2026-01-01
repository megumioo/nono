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

// 英语数据
const englishData = [
    {
        chapter: "高频词群",
        units: [
            { id: 1, name: "转折关系词群", purpose: "掌握however, but, yet等转折词" },
            { id: 2, name: "因果关系词群", purpose: "掌握because, therefore, thus等因果词" },
            { id: 3, name: "对比关系词群", purpose: "掌握while, whereas, on the contrary等对比词" },
            { id: 4, name: "递进关系词群", purpose: "掌握furthermore, moreover, in addition等递进词" },
            { id: 5, name: "举例关系词群", purpose: "掌握for example, such as, for instance等举例词" }
        ]
    },
    {
        chapter: "阅读关键句",
        units: [
            { id: 6, name: "主旨句", purpose: "识别文章主旨句" },
            { id: 7, name: "转折句", purpose: "识别but, however等转折句" },
            { id: 8, name: "因果句", purpose: "识别because, therefore等因果句" },
            { id: 9, name: "例证句", purpose: "识别for example, for instance等例证句" },
            { id: 10, name: "结论句", purpose: "识别in conclusion, to sum up等结论句" }
        ]
    },
    {
        chapter: "写作模板",
        units: [
            { id: 11, name: "议论文开头", purpose: "议论文开头模板" },
            { id: 12, name: "论证段", purpose: "论证段模板" },
            { id: 13, name: "结尾段", purpose: "议论文结尾模板" },
            { id: 14, name: "图表描述模板", purpose: "图表描述模板" }
        ]
    }
];

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

// 初始化数据存储
function initDataStorage() {
    if (!localStorage.getItem('mbaStudyData')) {
        const initialData = {
            math: {},
            logic: {},
            english: {},
            writing: {},
            todayStudied: false,
            lastStudyDate: null,
            recentActivities: []
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
        
        // 初始化英语数据
        englishData.forEach(chapter => {
            chapter.units.forEach(unit => {
                initialData.english[unit.id] = {
                    seen: false,
                    guess: false,
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
        
        localStorage.setItem('mbaStudyData', JSON.stringify(initialData));
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
    
    // 添加学习活动记录
    addActivityRecord(subject, id);
    
    // 更新首页进度
    updateProgress();
    
    return true;
}

// 获取数据
function getData(subject, id) {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    return storedData[subject] ? storedData[subject][id] : null;
}

// 添加学习活动记录
function addActivityRecord(subject, id) {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    const now = new Date();
    const timeString = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    
    // 获取单元名称
    let unitName = "";
    switch(subject) {
        case "math":
            mathData.forEach(chapter => {
                const unit = chapter.units.find(u => u.id === id);
                if (unit) unitName = unit.name;
            });
            break;
        case "logic":
            logicData.forEach(chapter => {
                const unit = chapter.units.find(u => u.id === id);
                if (unit) unitName = unit.name;
            });
            break;
        case "english":
            englishData.forEach(chapter => {
                const unit = chapter.units.find(u => u.id === id);
                if (unit) unitName = unit.name;
            });
            break;
        case "writing":
            writingData.forEach(chapter => {
                const unit = chapter.units.find(u => u.id === id);
                if (unit) unitName = unit.name;
            });
            break;
    }
    
    const activity = {
        subject,
        unitId: id,
        unitName,
        time: timeString,
        timestamp: now.getTime()
    };
    
    if (!storedData.recentActivities) storedData.recentActivities = [];
    storedData.recentActivities.unshift(activity);
    
    // 只保留最近的10条记录
    if (storedData.recentActivities.length > 10) {
        storedData.recentActivities = storedData.recentActivities.slice(0, 10);
    }
    
    localStorage.setItem('mbaStudyData', JSON.stringify(storedData));
    
    // 更新活动显示
    updateRecentActivities();
}

// 更新最近活动显示
function updateRecentActivities() {
    const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
    const activities = storedData.recentActivities || [];
    const container = document.getElementById('recent-activities');
    
    if (activities.length === 0) {
        container.innerHTML = `
            <div class="activity-item">
                <i class="fas fa-info-circle"></i>
                <p>暂无学习记录，开始你的第一项学习吧！</p>
                <span class="activity-time">--:--</span>
            </div>
        `;
        return;
    }
    
    container.innerHTML = activities.map(activity => {
        let subjectIcon, subjectColor;
        
        switch(activity.subject) {
            case "math":
                subjectIcon = "fas fa-calculator";
                subjectColor = "#87CEEB";
                break;
            case "logic":
                subjectIcon = "fas fa-brain";
                subjectColor = "#FFB6C1";
                break;
            case "english":
                subjectIcon = "fas fa-language";
                subjectColor = "#98FB98";
                break;
            case "writing":
                subjectIcon = "fas fa-pen-fancy";
                subjectColor = "#DDA0DD";
                break;
            default:
                subjectIcon = "fas fa-book";
                subjectColor = "#cccccc";
        }
        
        return `
            <div class="activity-item">
                <i class="${subjectIcon}" style="color: ${subjectColor}"></i>
                <p>更新了 ${activity.unitName}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        `;
    }).join('');
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
    let englishCompleted = 0;
    let englishTotal = 0;
    let englishStage = "认识结构";
    
    englishData.forEach(chapter => {
        englishTotal += chapter.units.length;
        chapter.units.forEach(unit => {
            const unitData = storedData.english[unit.id];
            if (unitData && (unitData.seen || unitData.guess)) {
                englishCompleted++;
            }
        });
    });
    
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

// 标记今日已学习（从首页移除，但在其他地方可能需要）
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
            if (page !== 'dashboard' && page !== 'exercise-book') {
                setTimeout(() => {
                    bindModuleToggleEvents();
                }, 100);
            }
            
            // 如果切换到习题本页面，重新加载题目
            if (page === 'exercise-book') {
                const currentSubject = document.querySelector('.tab.active').dataset.subject;
                loadQuestions(currentSubject);
            }
        });
    });
    
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
        
        // 英语和写作状态选项（可以多选）
        if (e.target.closest('.status-option.english-seen, .status-option.english-guess, .status-option.writing-seen, .status-option.writing-replace')) {
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

// 创建英语模块
function createEnglishModules() {
    const container = document.getElementById('english-modules-container');
    container.innerHTML = '';
    
    englishData.forEach((chapter, chapterIndex) => {
        const moduleElement = document.createElement('div');
        moduleElement.className = 'module english-module';
        
        // 计算本章节完成情况
        const storedData = JSON.parse(localStorage.getItem('mbaStudyData'));
        let completedCount = 0;
        chapter.units.forEach(unit => {
            const unitData = storedData.english[unit.id];
            if (unitData && (unitData.seen || unitData.guess)) {
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
                ${chapter.units.map(unit => createEnglishUnitHeader(unit)).join('')}
            </div>
        `;
        
        container.appendChild(moduleElement);
    });
    
    // 绑定模块展开/收起事件
    bindModuleToggleEvents();
}

// 创建英语小节标题
function createEnglishUnitHeader(unit) {
    const unitData = getData('english', unit.id) || {
        seen: false,
        guess: false,
        note: ""
    };
    
    const statusText = unitData.seen ? (unitData.guess ? "已见过且能猜意思" : "已见过") : "未见过";
    
    return `
        <div class="section" data-subject="english" data-id="${unit.id}">
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
                ${createEnglishUnitCard(unit, unitData)}
            </div>
        </div>
    `;
}

// 创建英语单元卡
function createEnglishUnitCard(unit, unitData) {
    return `
        <div class="unit-card">
            <div class="unit-header">
                <div class="unit-name">${unit.id}. ${unit.name}</div>
            </div>
            
            <div class="status-section">
                <h4>学习状态选择</h4>
                <div class="status-options">
                    <div class="status-option english-seen ${unitData.seen ? 'selected' : ''}" 
                         data-type="seen">
                        <i class="fas ${unitData.seen ? 'fa-eye' : 'fa-eye-slash'}"></i>
                        ${unitData.seen ? '已见过' : '未见过'}
                    </div>
                    <div class="status-option english-guess ${unitData.guess ? 'selected' : ''}" 
                         data-type="guess">
                        <i class="fas ${unitData.guess ? 'fa-lightbulb' : 'fa-question'}"></i>
                        ${unitData.guess ? '能猜意思' : '不能猜'}
                    </div>
                </div>
            </div>
            
            <div class="notes-section">
                <label for="english-note-${unit.id}">一句话记录：</label>
                <textarea class="note-input" id="english-note-${unit.id}" 
                          placeholder="记录学习心得...">${unitData.note || ''}</textarea>
            </div>
            
            <div class="save-section">
                <button class="save-btn" data-subject="english" data-id="${unit.id}">
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
    } else if (subject === 'english' || subject === 'writing') {
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
        
        if (subject === 'english') {
            dataToSave.seen = seen;
            dataToSave.guess = guessOrReplace;
        } else if (subject === 'writing') {
            dataToSave.seen = seen;
            dataToSave.replace = guessOrReplace;
        }
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
    } else if (subject === 'english') {
        const statusText = data.seen ? (data.guess ? "已见过且能猜意思" : "已见过") : "未见过";
        if (stats) {
            stats.innerHTML = `<span>${statusText}</span>`;
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
    } else if (subject === 'english') {
        chapterData = englishData;
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
                } else if (subject === 'english' || subject === 'writing') {
                    if (unitData && (unitData.seen || unitData.guess || unitData.replace)) {
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

// 更新每日提示
function updateDailyTip() {
    const tips = [
        "每天坚持学习一小节，积少成多，效果显著！",
        "理解比记忆更重要，尝试用自己的话复述知识点。",
        "遇到难题不要怕，记录下来，反复思考必有突破。",
        "学习要注重系统性，建立知识框架比零散记忆更有效。",
        "适当休息是为了更好地学习，劳逸结合效果更佳。",
        "定期回顾已学内容，巩固记忆，防止遗忘。",
        "模拟考试环境进行练习，提前适应考试节奏。"
    ];
    
    const tipIndex = new Date().getDate() % tips.length;
    document.getElementById('daily-tip').textContent = tips[tipIndex];
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
            if (page !== 'dashboard') {
                setTimeout(() => {
                    bindModuleToggleEvents();
                }, 100);
            }
        });
    });
    
    // 标记今日已学习按钮
    document.getElementById('mark-studied-btn').addEventListener('click', markTodayStudied);
    
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
        
        // 英语和写作状态选项（可以多选）
        if (e.target.closest('.status-option.english-seen, .status-option.english-guess, .status-option.writing-seen, .status-option.writing-replace')) {
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
}

// 初始化应用
function initApp() {
    // 初始化数据存储
    initDataStorage();
    
    // 更新日期和时间
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // 更新每日提示
    updateDailyTip();
    
    // 更新今日状态
    updateTodayStatus();
    
    // 创建各科模块
    createMathModules();
    createLogicModules();
    createEnglishModules();
    createWritingModules();
    
    // 更新首页进度
    updateProgress();
    
    // 更新最近活动
    updateRecentActivities();
    
    // 初始化事件监听
    initEventListeners();
    
    // 显示欢迎消息
    setTimeout(() => {
        showNotification('MBA备考学习系统已加载完成！');
    }, 1000);
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', initApp);

