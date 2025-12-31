// MBA学习推进看板 - 核心应用逻辑

// 数据模型
class LearningData {
    constructor() {
        this.subjects = {
            logic: {
                name: "逻辑",
                color: "#A7C7E7",
                currentStage: "认识结构",
                modules: this.getLogicModules()
            },
            math: {
                name: "数学",
                color: "#FFEAA7",
                currentStage: "认识结构",
                modules: this.getMathModules()
            },
            english: {
                name: "英语",
                color: "#C1E1C1",
                currentStage: "认识结构",
                modules: this.getEnglishModules()
            },
            writing: {
                name: "写作",
                color: "#F8C8DC",
                currentStage: "认识结构",
                modules: this.getWritingModules()
            }
        };
        this.recentUpdates = [];
        this.initializeData();
    }

    // 从localStorage初始化数据
    initializeData() {
        const saved = localStorage.getItem('mba-learning-data');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // 合并保存的数据
                Object.keys(parsed.subjects || {}).forEach(subjectId => {
                    if (this.subjects[subjectId]) {
                        this.subjects[subjectId].currentStage = parsed.subjects[subjectId].currentStage || "认识结构";
                        // 合并模块数据
                        (parsed.subjects[subjectId].modules || []).forEach(savedModule => {
                            const targetModule = this.subjects[subjectId].modules.find(m => m.name === savedModule.name);
                            if (targetModule) {
                                savedModule.units.forEach(savedUnit => {
                                    const targetUnit = targetModule.units.find(u => u.name === savedUnit.name);
                                    if (targetUnit) {
                                        Object.assign(targetUnit, savedUnit);
                                    }
                                });
                            }
                        });
                    }
                });
                this.recentUpdates = parsed.recentUpdates || [];
            } catch (e) {
                console.warn('无法解析保存的数据，使用默认数据', e);
            }
        }
    }

    // 保存数据到localStorage
    saveData() {
        const data = {
            subjects: this.subjects,
            recentUpdates: this.recentUpdates,
            lastSaved: new Date().toISOString()
        };
        localStorage.setItem('mba-learning-data', JSON.stringify(data));
    }

    // 更新单元状态
    updateUnitStatus(subjectId, moduleIndex, unitIndex, status, note = '', extraField = null, extraValue = '') {
        const unit = this.subjects[subjectId].modules[moduleIndex].units[unitIndex];
        unit.status = status;
        if (note !== null) unit.note = note;
        if (extraField && extraValue !== null) unit[extraField] = extraValue;
        
        // 记录更新
        this.recentUpdates.unshift({
            subject: subjectId,
            subjectName: this.subjects[subjectId].name,
            moduleName: this.subjects[subjectId].modules[moduleIndex].name,
            unitName: unit.name,
            note: note || status,
            timestamp: new Date().toLocaleString('zh-CN'),
            time: new Date().toISOString()
        });
        
        // 保持最近记录最多10条
        if (this.recentUpdates.length > 10) {
            this.recentUpdates = this.recentUpdates.slice(0, 10);
        }
        
        // 更新学科阶段（简化逻辑：根据完成度）
        this.updateSubjectStage(subjectId);
        
        // 保存数据
        this.saveData();
        
        return unit;
    }

    // 更新学科阶段（简化版）
    updateSubjectStage(subjectId) {
        const subject = this.subjects[subjectId];
        const allUnits = subject.modules.flatMap(m => m.units);
        const completedUnits = allUnits.filter(u => 
            (subjectId === 'logic' && u.status !== '未接触') ||
            (subjectId === 'math' && u.status !== '陌生') ||
            (subjectId === 'english' && u.status !== '未接触') ||
            (subjectId === 'writing' && u.status !== '未接触')
        ).length;
        
        const completionRate = completedUnits / allUnits.length;
        
        if (completionRate < 0.3) {
            subject.currentStage = "认识结构";
        } else if (completionRate < 0.7) {
            subject.currentStage = "流程熟悉";
        } else {
            subject.currentStage = "稳定刷题";
        }
        
        this.saveData();
    }

    // 获取今日学习状态
    getTodayStatus() {
        const today = new Date().toDateString();
        const todayUpdates = this.recentUpdates.filter(update => {
            const updateDate = new Date(update.time).toDateString();
            return updateDate === today;
        });
        
        const learnedSubjects = new Set(todayUpdates.map(update => update.subject));
        
        return {
            logic: learnedSubjects.has('logic'),
            math: learnedSubjects.has('math'),
            english: learnedSubjects.has('english'),
            writing: learnedSubjects.has('writing'),
            updates: todayUpdates
        };
    }

    // 获取逻辑模块数据
    getLogicModules() {
        return [
            {
                name: "第一章 逻辑导学",
                units: [
                    { name: "逻辑考什么", purpose: "了解逻辑科目考查的核心能力与题型", status: "未接触", note: "", stuckPoint: "" },
                    { name: "逻辑考试的本质", purpose: "理解逻辑考试是对思维过程的评估，而非知识记忆", status: "未接触", note: "", stuckPoint: "" },
                    { name: "逻辑备考战略与战术", purpose: "建立宏观备考计划和微观学习技巧", status: "未接触", note: "", stuckPoint: "" }
                ]
            },
            {
                name: "第二章 逻辑基础",
                units: [
                    { name: "培养审题习惯", purpose: "掌握快速准确理解题意的技巧", status: "未接触", note: "", stuckPoint: "" },
                    { name: "掌握解题方法", purpose: "学习不同类型题目的解题思路", status: "未接触", note: "", stuckPoint: "" },
                    { name: "具备真题经验", purpose: "通过真题熟悉考试风格和难度", status: "未接触", note: "", stuckPoint: "" }
                ]
            },
            {
                name: "第三章 概念",
                units: [
                    { name: "概念的种类", purpose: "理解概念的不同分类方式", status: "未接触", note: "", stuckPoint: "" },
                    { name: "概念的定义与划分", purpose: "掌握概念定义和划分的逻辑规则", status: "未接触", note: "", stuckPoint: "" },
                    { name: "概念外延之间的关系", purpose: "理解概念间的逻辑关系", status: "未接触", note: "", stuckPoint: "" },
                    { name: "逻辑三大定律", purpose: "掌握同一律、矛盾律、排中律", status: "未接触", note: "", stuckPoint: "" }
                ]
            },
            {
                name: "第四章 联言命题和选言命题",
                units: [
                    { name: "联言命题", purpose: "理解'且'关系的逻辑表达", status: "未接触", note: "", stuckPoint: "" },
                    { name: "相容选言命题", purpose: "理解'或'关系的逻辑表达", status: "未接触", note: "", stuckPoint: "" },
                    { name: "不相容选言命题", purpose: "理解'要么...要么...'的逻辑表达", status: "未接触", note: "", stuckPoint: "" }
                ]
            },
            {
                name: "第五章 假言命题",
                units: [
                    { name: "假言命题的分类", purpose: "区分充分条件、必要条件、充要条件", status: "未接触", note: "", stuckPoint: "" },
                    { name: "假言命题的刻画", purpose: "掌握'如果...那么...'的逻辑表达", status: "未接触", note: "", stuckPoint: "" },
                    { name: "假言命题的'支点策略'", purpose: "学习假言命题的解题技巧", status: "未接触", note: "", stuckPoint: "" }
                ]
            },
            {
                name: "第六章 直言命题和模态命题",
                units: [
                    { name: "直言命题及其对当关系", purpose: "掌握A、E、I、O命题及其关系", status: "未接触", note: "", stuckPoint: "" },
                    { name: "直言命题的推理规则", purpose: "学习直言命题的推理方法", status: "未接触", note: "", stuckPoint: "" },
                    { name: "直言三段论", purpose: "掌握三段论的结构和规则", status: "未接触", note: "", stuckPoint: "" },
                    { name: "模态命题", purpose: "理解'必然'、'可能'的逻辑表达", status: "未接触", note: "", stuckPoint: "" }
                ]
            },
            {
                name: "第七章 论证逻辑解题方法",
                units: [
                    { name: "三个考点", purpose: "识别论证逻辑的核心考查点", status: "未接触", note: "", stuckPoint: "" },
                    { name: "论据的'看'与'不看'", purpose: "学习筛选关键信息的方法", status: "未接触", note: "", stuckPoint: "" },
                    { name: "四种考法", purpose: "熟悉论证逻辑的常见题型", status: "未接触", note: "", stuckPoint: "" },
                    { name: "真题经验", purpose: "通过真题掌握解题节奏", status: "未接触", note: "", stuckPoint: "" }
                ]
            },
            {
                name: "第八章 论证逻辑解题补充",
                units: [
                    { name: "知识点补充", purpose: "补充论证逻辑的相关知识", status: "未接触", note: "", stuckPoint: "" },
                    { name: "题型补充", purpose: "学习特殊题型的解法", status: "未接触", note: "", stuckPoint: "" }
                ]
            },
            {
                name: "第九章 综合推理",
                units: [
                    { name: "综合推理综述", purpose: "了解综合推理的特点和要求", status: "未接触", note: "", stuckPoint: "" },
                    { name: "综合推理解题技术", purpose: "掌握综合推理的解题技巧", status: "未接触", note: "", stuckPoint: "" }
                ]
            }
        ];
    }

    // 获取数学模块数据
    getMathModules() {
        return [
            {
                name: "第一章 算术",
                units: [
                    { name: "有理数无理数", purpose: "区分有理数与无理数，掌握其性质与运算", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "整除及余数", purpose: "理解整除规则，掌握带余除法及其应用", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "公约数与公倍数", purpose: "求解最大公约数和最小公倍数", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "比例定理", purpose: "掌握比例的基本性质和定理", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "绝对值的基本概念与几何意义", purpose: "理解绝对值的定义和几何解释", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "绝对值三角不等式", purpose: "掌握绝对值不等式的性质和应用", status: "陌生", coreMemoryPoint: "", stuckPoint: "" }
                ]
            },
            {
                name: "第二章 应用题",
                units: [
                    { name: "商品利润", purpose: "掌握成本、售价、利润、利润率的关系与计算", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "直线路程", purpose: "解决相遇、追及等基本行程问题", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "水中行船", purpose: "掌握顺水、逆水速度的计算", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "相对速度+火车过桥+跑圈+图像", purpose: "掌握相对运动问题的解法", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "工程问题", purpose: "掌握工作效率、工作时间的计算", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "交叉法", purpose: "学习交叉法解决浓度、比例问题", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "浓度问题", purpose: "掌握溶液浓度计算和混合问题", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "分段计费", purpose: "解决分段函数计费问题", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "几何问题", purpose: "掌握几何图形的性质和计算", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "不定方程", purpose: "学习不定方程的解法", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "线性规划", purpose: "掌握线性规划的基本方法", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "至少至多", purpose: "解决'至少'、'至多'类问题", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "最值问题", purpose: "掌握求最大值、最小值的方法", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "植树+年龄+鸡兔同笼", purpose: "掌握经典应用题的解法", status: "陌生", coreMemoryPoint: "", stuckPoint: "" }
                ]
            },
            {
                name: "第三章 代数式与函数",
                units: [
                    { name: "整式、分式与函数", purpose: "掌握代数式的基本概念和运算", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "整式加减乘除", purpose: "掌握整式的基本运算", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "分式运算", purpose: "掌握分式的化简和运算", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "一元二次函数", purpose: "掌握二次函数的性质和应用", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "集合", purpose: "理解集合的基本概念和运算", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "指数函数与对数函数", purpose: "掌握指数和对数的性质和运算", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "幂函数", purpose: "掌握幂函数的性质和应用", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "特殊函数", purpose: "学习特殊函数的性质和应用", status: "陌生", coreMemoryPoint: "", stuckPoint: "" }
                ]
            },
            {
                name: "第四章 方程与不等式",
                units: [
                    { name: "一次方程组", purpose: "掌握一次方程组的解法", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "一元二次方程", purpose: "掌握一元二次方程的解法", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "一次不等式组+一元二次不等式", purpose: "掌握不等式的解法", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "特殊方程", purpose: "学习特殊类型方程的解法", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "均值不等式", purpose: "掌握均值不等式的应用", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "特殊不等式", purpose: "学习特殊不等式的解法", status: "陌生", coreMemoryPoint: "", stuckPoint: "" }
                ]
            },
            {
                name: "第五章 数列",
                units: [
                    { name: "数列定义", purpose: "理解数列的基本概念", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "等差数列1", purpose: "掌握等差数列的基本性质", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "等差数列2", purpose: "掌握等差数列的应用", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "等比数列", purpose: "掌握等比数列的性质和应用", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "递推公式", purpose: "学习数列递推关系的建立和求解", status: "陌生", coreMemoryPoint: "", stuckPoint: "" },
                    { name: "数列应用题及常见错误", purpose: "掌握数列应用题的解法，避免常见错误", status: "陌生", coreMemoryPoint: "", stuckPoint: "" }
                ]
            }
        ];
    }

    // 获取英语模块数据
    getEnglishModules() {
        return [
            {
                name: "高频词群",
                units: [
                    { name: "转折关系词群", purpose: "掌握however, but, yet等转折词", status: "未接触", note: "" },
                    { name: "因果关系词群", purpose: "掌握because, therefore, thus等因果词", status: "未接触", note: "" },
                    { name: "对比关系词群", purpose: "掌握while, whereas, in contrast等对比词", status: "未接触", note: "" },
                    { name: "递进关系词群", purpose: "掌握furthermore, moreover, additionally等递进词", status: "未接触", note: "" },
                    { name: "举例关系词群", purpose: "掌握for example, such as, namely等举例词", status: "未接触", note: "" }
                ]
            },
            {
                name: "阅读关键句",
                units: [
                    { name: "主旨句识别", purpose: "学习识别文章主旨句", status: "未接触", note: "" },
                    { name: "转折句理解", purpose: "掌握转折句的阅读理解", status: "未接触", note: "" },
                    { name: "因果句分析", purpose: "分析因果关系句", status: "未接触", note: "" },
                    { name: "例证句理解", purpose: "理解例证与观点的关系", status: "未接触", note: "" }
                ]
            },
            {
                name: "写作模板",
                units: [
                    { name: "议论文开头模板", purpose: "掌握议论文开头的写法", status: "未接触", note: "" },
                    { name: "论证段模板", purpose: "学习论证段的展开方式", status: "未接触", note: "" },
                    { name: "结尾段模板", purpose: "掌握议论文结尾的写法", status: "未接触", note: "" },
                    { name: "图表描述模板", purpose: "学习图表描述的常用表达", status: "未接触", note: "" }
                ]
            }
        ];
    }

    // 获取写作模块数据
    getWritingModules() {
        return [
            {
                name: "论证有效性分析",
                units: [
                    { name: "论证结构识别", purpose: "识别论证的基本结构", status: "未接触", note: "" },
                    { name: "逻辑谬误识别", purpose: "掌握常见逻辑谬误的类型", status: "未接触", note: "" },
                    { name: "分析框架构建", purpose: "构建有效性分析的基本框架", status: "未接触", note: "" },
                    { name: "语言表达模板", purpose: "学习分析性语言的表达", status: "未接触", note: "" }
                ]
            },
            {
                name: "论说文",
                units: [
                    { name: "审题立意", purpose: "准确把握题目要求，确立中心论点", status: "未接触", note: "" },
                    { name: "结构布局", purpose: "设计文章的整体结构", status: "未接触", note: "" },
                    { name: "论证方法", purpose: "学习多种论证方法的应用", status: "未接触", note: "" },
                    { name: "素材积累", purpose: "积累论证所需的事实和理论素材", status: "未接触", note: "" },
                    { name: "语言表达", purpose: "提升论证语言的准确性和说服力", status: "未接触", note: "" }
                ]
            },
            {
                name: "模板积累",
                units: [
                    { name: "开头段模板", purpose: "积累多种开头方式", status: "未接触", note: "" },
                    { name: "过渡句模板", purpose: "学习段落间的过渡技巧", status: "未接触", note: "" },
                    { name: "结尾段模板", purpose: "掌握有力结尾的写法", status: "未接触", note: "" },
                    { name: "常用论证句式", purpose: "积累论证常用句式", status: "未接触", note: "" }
                ]
            }
        ];
    }
}

// 应用控制器
class AppController {
    constructor() {
        this.data = new LearningData();
        this.currentPage = 'dashboard';
        this.expandedModules = new Set(); // 记录展开的模块
        
        this.initializeApp();
    }

    initializeApp() {
        this.bindEvents();
        this.renderDashboard();
        this.setupPageTransitions();
    }

    bindEvents() {
        // 导航按钮点击事件
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const page = e.target.dataset.page;
                this.switchPage(page);
            });
        });

        // 模块展开/收起事件委托
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('module-toggle')) {
                const moduleHeader = e.target.closest('.module-header');
                const moduleCard = moduleHeader.closest('.module-card');
                const moduleIndex = Array.from(moduleCard.parentElement.children).indexOf(moduleCard);
                
                this.toggleModule(moduleHeader.dataset.subject, moduleIndex);
            }
        });

        // 状态选择器事件委托
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('status-option')) {
                const unitCard = e.target.closest('.unit-card');
                if (!unitCard) return;
                
                const subjectId = unitCard.dataset.subject;
                const moduleIndex = parseInt(unitCard.dataset.moduleIndex);
                const unitIndex = parseInt(unitCard.dataset.unitIndex);
                const status = e.target.dataset.value;
                
                this.updateUnitStatus(subjectId, moduleIndex, unitIndex, status);
            }
        });

        // 输入框输入事件委托
        document.addEventListener('input', (e) => {
            if (e.target.classList.contains('note-input') || e.target.classList.contains('memory-input') || e.target.classList.contains('stuck-input')) {
                const unitCard = e.target.closest('.unit-card');
                if (!unitCard) return;
                
                const subjectId = unitCard.dataset.subject;
                const moduleIndex = parseInt(unitCard.dataset.moduleIndex);
                const unitIndex = parseInt(unitCard.dataset.unitIndex);
                const value = e.target.value;
                const field = e.target.classList.contains('note-input') ? 'note' : 
                            e.target.classList.contains('memory-input') ? 'coreMemoryPoint' : 'stuckPoint';
                
                this.updateUnitField(subjectId, moduleIndex, unitIndex, field, value);
            }
        });
    }

    setupPageTransitions() {
        // 页面切换动画
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            if (page.id !== this.currentPage) {
                page.style.display = 'none';
            }
        });
    }

    switchPage(pageId) {
        // 更新导航按钮状态
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.page === pageId);
        });

        // 隐藏所有页面
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
            setTimeout(() => {
                page.style.display = 'none';
            }, 50);
        });

        // 显示目标页面
        const targetPage = document.getElementById(pageId);
        setTimeout(() => {
            targetPage.style.display = 'block';
            setTimeout(() => {
                targetPage.classList.add('active');
            }, 10);
        }, 100);

        // 渲染页面内容
        this.currentPage = pageId;
        switch(pageId) {
            case 'dashboard':
                this.renderDashboard();
                break;
            case 'logic':
                this.renderSubjectPage('logic');
                break;
            case 'math':
                this.renderSubjectPage('math');
                break;
            case 'english':
                this.renderSubjectPage('english');
                break;
            case 'writing':
                this.renderSubjectPage('writing');
                break;
        }
    }

    renderDashboard() {
        this.renderTodayStatus();
        this.renderStageOverview();
        this.renderRecentActivity();
    }

    renderTodayStatus() {
        const container = document.querySelector('.subject-today-cards');
        if (!container) return;
        
        const todayStatus = this.data.getTodayStatus();
        const subjects = ['logic', 'math', 'english', 'writing'];
        
        const html = subjects.map(subjectId => {
            const subject = this.data.subjects[subjectId];
            const learned = todayStatus[subjectId];
            
            return `
                <div class="subject-today-card ${learned ? 'learned' : 'not-learned'}">
                    <i class="fas ${this.getSubjectIcon(subjectId)}"></i>
                    <h4>${subject.name}</h4>
                    <p>${learned ? '今日已学习' : '今日未学习'}</p>
                </div>
            `;
        }).join('');
        
        container.innerHTML = html;
    }

    renderStageOverview() {
        const container = document.querySelector('.stage-cards');
        if (!container) return;
        
        const html = Object.entries(this.data.subjects).map(([id, subject]) => {
            // 计算进度
            const allUnits = subject.modules.flatMap(m => m.units);
            const completedUnits = allUnits.filter(u => {
                if (id === 'logic' || id === 'english' || id === 'writing') {
                    return u.status !== '未接触';
                } else if (id === 'math') {
                    return u.status !== '陌生';
                }
                return false;
            }).length;
            
            const progress = (completedUnits / allUnits.length) * 100;
            
            return `
                <div class="stage-card">
                    <div class="stage-icon" style="background-color: ${subject.color}">
                        <i class="fas ${this.getSubjectIcon(id)}"></i>
                    </div>
                    <div class="stage-info">
                        <h4>${subject.name}</h4>
                        <p>当前阶段：${subject.currentStage}</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%; background-color: ${subject.color}"></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = html;
    }

    renderRecentActivity() {
        const container = document.querySelector('.recent-list');
        if (!container) return;
        
        const recent = this.data.recentUpdates.slice(0, 5);
        
        if (recent.length === 0) {
            container.innerHTML = `
                <div class="recent-item" style="border-left-color: #ddd">
                    <p style="color: var(--color-text-light); text-align: center;">暂无学习记录，开始你的第一次学习吧！</p>
                </div>
            `;
            return;
        }
        
        const html = recent.map(update => {
            const subjectColor = this.data.subjects[update.subject]?.color || '#A7C7E7';
            return `
                <div class="recent-item" style="border-left-color: ${subjectColor}">
                    <div class="recent-header">
                        <span class="recent-subject" style="color: ${subjectColor}">
                            ${update.subjectName} · ${update.unitName}
                        </span>
                        <span class="recent-time">${update.timestamp}</span>
                    </div>
                    <div class="recent-note">${update.note}</div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = html;
    }

    renderSubjectPage(subjectId) {
        const subject = this.data.subjects[subjectId];
        const container = document.querySelector(`#${subjectId} .modules-container`);
        if (!container) return;
        
        // 更新阶段徽章
        const stageBadge = document.querySelector(`#${subjectId} .stage-badge`);
        if (stageBadge) {
            stageBadge.textContent = subject.currentStage;
            stageBadge.className = `stage-badge ${subjectId}-color`;
        }
        
        // 渲染模块
        const html = subject.modules.map((module, moduleIndex) => {
            const isExpanded = this.expandedModules.has(`${subjectId}-${moduleIndex}`);
            
            return `
                <div class="module-card">
                    <div class="module-header" data-subject="${subjectId}" data-module-index="${moduleIndex}">
                        <div class="module-title">
                            <h3>${module.name}</h3>
                            <span class="module-count">${module.units.length}个单元</span>
                        </div>
                        <button class="module-toggle">
                            <i class="fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}"></i>
                        </button>
                    </div>
                    <div class="units-container" style="display: ${isExpanded ? 'grid' : 'none'}">
                        ${this.renderUnits(subjectId, moduleIndex, module.units)}
                    </div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = html;
    }

    renderUnits(subjectId, moduleIndex, units) {
        return units.map((unit, unitIndex) => {
            const statusOptions = this.getStatusOptions(subjectId);
            const statusHtml = statusOptions.map(option => `
                <button class="status-option ${unit.status === option.value ? 'active' : ''}" 
                        data-value="${option.value}"
                        style="${option.value === unit.status ? `color: ${this.data.subjects[subjectId].color}; border-color: ${this.data.subjects[subjectId].color}` : ''}">
                    ${option.label}
                </button>
            `).join('');
            
            // 根据不同学科渲染不同的输入字段
            let extraFields = '';
            if (subjectId === 'logic') {
                extraFields = `
                    <div class="input-group">
                        <label class="input-label">一句话记录</label>
                        <input type="text" class="text-input note-input" 
                               value="${unit.note || ''}" 
                               placeholder="记录学习心得或疑问...">
                    </div>
                    <div class="input-group">
                        <label class="input-label">卡点分析</label>
                        <input type="text" class="text-input stuck-input" 
                               value="${unit.stuckPoint || ''}" 
                               placeholder="记录遇到的困难点...">
                    </div>
                `;
            } else if (subjectId === 'math') {
                extraFields = `
                    <div class="input-group">
                        <label class="input-label">核心记忆点</label>
                        <input type="text" class="text-input memory-input" 
                               value="${unit.coreMemoryPoint || ''}" 
                               placeholder="记录关键公式或技巧...">
                    </div>
                    <div class="input-group">
                        <label class="input-label">卡点分析</label>
                        <input type="text" class="text-input stuck-input" 
                               value="${unit.stuckPoint || ''}" 
                               placeholder="记录解题难点...">
                    </div>
                `;
            } else {
                extraFields = `
                    <div class="input-group">
                        <label class="input-label">学习记录</label>
                        <input type="text" class="text-input note-input" 
                               value="${unit.note || ''}" 
                               placeholder="记录学习心得...">
                    </div>
                `;
            }
            
            return `
                <div class="unit-card" 
                     data-subject="${subjectId}" 
                     data-module-index="${moduleIndex}" 
                     data-unit-index="${unitIndex}">
                    <div class="unit-header">
                        <div>
                            <div class="unit-name">${unit.name}</div>
                            <div class="unit-purpose">${unit.purpose}</div>
                        </div>
                        <span class="current-status" style="color: ${this.data.subjects[subjectId].color}">
                            ${this.getStatusLabel(subjectId, unit.status)}
                        </span>
                    </div>
                    
                    <div class="status-selector">
                        <label class="status-label">更新状态</label>
                        <div class="status-options">
                            ${statusHtml}
                        </div>
                    </div>
                    
                    ${extraFields}
                </div>
            `;
        }).join('');
    }

    toggleModule(subjectId, moduleIndex) {
        const key = `${subjectId}-${moduleIndex}`;
        const moduleCard = document.querySelector(`[data-subject="${subjectId}"][data-module-index="${moduleIndex}"]`).closest('.module-card');
        const unitsContainer = moduleCard.querySelector('.units-container');
        const toggleIcon = moduleCard.querySelector('.module-toggle i');
        
        if (this.expandedModules.has(key)) {
            this.expandedModules.delete(key);
            unitsContainer.style.display = 'none';
            toggleIcon.className = 'fas fa-chevron-down';
        } else {
            this.expandedModules.add(key);
            unitsContainer.style.display = 'grid';
            toggleIcon.className = 'fas fa-chevron-up';
        }
    }

    updateUnitStatus(subjectId, moduleIndex, unitIndex, status) {
        const unit = this.data.updateUnitStatus(subjectId, moduleIndex, unitIndex, status);
        
        // 更新UI
        const unitCard = document.querySelector(`[data-subject="${subjectId}"][data-module-index="${moduleIndex}"][data-unit-index="${unitIndex}"]`);
        if (unitCard) {
            // 更新状态按钮
            unitCard.querySelectorAll('.status-option').forEach(btn => {
                const isActive = btn.dataset.value === status;
                btn.classList.toggle('active', isActive);
                if (isActive) {
                    btn.style.color = this.data.subjects[subjectId].color;
                    btn.style.borderColor = this.data.subjects[subjectId].color;
                } else {
                    btn.style.color = '';
                    btn.style.borderColor = '';
                }
            });
            
            // 更新当前状态显示
            const currentStatusSpan = unitCard.querySelector('.current-status');
            if (currentStatusSpan) {
                currentStatusSpan.textContent = this.getStatusLabel(subjectId, status);
            }
        }
        
        // 如果当前在首页，更新首页数据
        if (this.currentPage === 'dashboard') {
            this.renderTodayStatus();
            this.renderStageOverview();
            this.renderRecentActivity();
        }
    }

    updateUnitField(subjectId, moduleIndex, unitIndex, field, value) {
        const unit = this.data.subjects[subjectId].modules[moduleIndex].units[unitIndex];
        unit[field] = value;
        this.data.saveData();
    }

    getStatusOptions(subjectId) {
        switch(subjectId) {
            case 'logic':
                return [
                    { value: '未接触', label: '未接触' },
                    { value: '已听课', label: '已听课' },
                    { value: '已做题', label: '已做题' },
                    { value: '可识别题型', label: '可识别题型' }
                ];
            case 'math':
                return [
                    { value: '陌生', label: '陌生' },
                    { value: '见过', label: '见过' },
                    { value: '熟脸', label: '熟脸' },
                    { value: '可操作', label: '可操作' }
                ];
            case 'english':
            case 'writing':
                return [
                    { value: '未接触', label: '未接触' },
                    { value: '已接触', label: '已接触' },
                    { value: '能猜意/能替换', label: subjectId === 'english' ? '能猜意' : '能替换' }
                ];
            default:
                return [];
        }
    }

    getStatusLabel(subjectId, status) {
        const options = this.getStatusOptions(subjectId);
        const option = options.find(opt => opt.value === status);
        return option ? option.label : status;
    }

    getSubjectIcon(subjectId) {
        switch(subjectId) {
            case 'logic': return 'fa-brain';
            case 'math': return 'fa-calculator';
            case 'english': return 'fa-language';
            case 'writing': return 'fa-pen-fancy';
            default: return 'fa-book';
        }
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AppController();
    
    // 添加欢迎提示
    setTimeout(() => {
        if (!localStorage.getItem('mba-learning-welcome')) {
            alert('欢迎使用MBA学习推进看板！\n\n📚 使用说明：\n1. 点击学科标签切换页面\n2. 点击模块标题展开/收起单元\n3. 点击状态按钮更新学习进度\n4. 数据自动保存在浏览器中\n\n开始你的学习推进之旅吧！');
            localStorage.setItem('mba-learning-welcome', 'true');
        }
    }, 1000);
});