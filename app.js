// MBA学习系统 - 完整版（含数学学习记录模块）

// 全局变量
let userData = {
    profile: {
        background: "",
        mathLevel: "",
        englishLevel: "",
        examDate: "",
        targetScore: 200,
        dailyStudyTime: 2
    },
    studyProgress: {
        completedUnits: 0,
        totalUnits: 32,
        todayStudyTime: 0,
        streakDays: 0,
        lastStudyDate: null,
        subjectProgress: {
            logic: { completed: 3, total: 12 },
            math: { completed: 1, total: 8 },
            english: { completed: 2, total: 12 },
            writing: { completed: 0, total: 4 }
        }
    },
    studyHistory: [],
    currentStudySession: null,
    // 新增：数学学习记录数据
    mathLearningRecords: {}
};

let currentPage = "dashboard";
let studyTimer = null;
let studyStartTime = null;
let studyElapsedTime = 0;
let studyTimerRunning = false;

// 数学知识数据 - 基于Excel表格
const mathKnowledgeData = {
    "第一章": [
        { id: 6, name: "有理数无理数", difficulty: "重难点" },
        { id: 7, name: "整除及余数", difficulty: "" },
        { id: 8, name: "公约数与公倍数", difficulty: "" },
        { id: 9, name: "比例定理", difficulty: "" },
        { id: 10, name: "绝对值的基本概念与几何意义", difficulty: "" },
        { id: 11, name: "绝对值三角不等式", difficulty: "" }
    ],
    "第二章": [
        { id: 12, name: "商品利润", difficulty: "" },
        { id: 13, name: "直线路程", difficulty: "" },
        { id: 14, name: "水中行船", difficulty: "" },
        { id: 15, name: "相对速度+火车过桥+跑圈+图像", difficulty: "" },
        { id: 16, name: "工程问题", difficulty: "" },
        { id: 17, name: "交叉法", difficulty: "" },
        { id: 18, name: "浓度问题", difficulty: "" },
        { id: 19, name: "分段计费", difficulty: "" },
        { id: 20, name: "几何问题", difficulty: "" },
        { id: 21, name: "不定方程", difficulty: "" },
        { id: 22, name: "线性规划", difficulty: "" },
        { id: 23, name: "至少至多", difficulty: "" },
        { id: 24, name: "最值问题", difficulty: "" },
        { id: 25, name: "植树+年龄+鸡兔同笼", difficulty: "" }
    ],
    "第三章": [
        { id: 26, name: "整式、分式与函数", difficulty: "" },
        { id: 27, name: "整式加减乘除", difficulty: "" },
        { id: 28, name: "分式运算", difficulty: "" },
        { id: 29, name: "一元二次函数", difficulty: "" },
        { id: 30, name: "集合", difficulty: "" },
        { id: 31, name: "指数函数与对数函数", difficulty: "" },
        { id: 32, name: "幂函数", difficulty: "" },
        { id: 33, name: "特殊函数", difficulty: "" }
    ],
    "第四章": [
        { id: 34, name: "一次方程组", difficulty: "" },
        { id: 35, name: "一元二次方程", difficulty: "" },
        { id: 36, name: "一次不等式组+一元二次不等式", difficulty: "" },
        { id: 37, name: "特殊方程", difficulty: "" },
        { id: 38, name: "均值不等式", difficulty: "" },
        { id: 39, name: "特殊不等式", difficulty: "" }
    ],
    "第五章": [
        { id: 40, name: "数列定义", difficulty: "" },
        { id: 41, name: "等差数列1", difficulty: "" },
        { id: 42, name: "等差数列2", difficulty: "" },
        { id: 43, name: "等比数列", difficulty: "" },
        { id: 44, name: "递推公式", difficulty: "" },
        { id: 45, name: "数列应用题及常见错误", difficulty: "" }
    ],
    "第六章": [
        { id: 46, name: "平行直线", difficulty: "" },
        { id: 47, name: "三角形-角与边", difficulty: "" },
        { id: 48, name: "三角形面积", difficulty: "" },
        { id: 49, name: "形状判断与全等相似", difficulty: "" },
        { id: 50, name: "四边形", difficulty: "" },
        { id: 51, name: "三角形", difficulty: "" },
        { id: 52, name: "圆与扇形", difficulty: "" },
        { id: 53, name: "综合题-相关定理", difficulty: "" }
    ],
    "第七章": [
        { id: 54, name: "平面直角坐标系", difficulty: "" },
        { id: 55, name: "直线-斜率", difficulty: "" },
        { id: 56, name: "直线-位置关系", difficulty: "" },
        { id: 57, name: "圆", difficulty: "" },
        { id: 58, name: "对称", difficulty: "" },
        { id: 59, name: "直线与坐标轴围成面积计算", difficulty: "" },
        { id: 60, name: "坐标轴中最值问题", difficulty: "" }
    ],
    "第八章": [
        { id: 61, name: "长方体", difficulty: "" },
        { id: 62, name: "柱体", difficulty: "" },
        { id: 63, name: "椎体", difficulty: "" },
        { id: 64, name: "球体", difficulty: "" },
        { id: 65, name: "内切球与外切球", difficulty: "" },
        { id: 66, name: "综合题", difficulty: "" }
    ],
    "第九章": [
        { id: 67, name: "两个基本原理", difficulty: "" },
        { id: 68, name: "排列与组合", difficulty: "" },
        { id: 69, name: "基本原理拓展", difficulty: "" },
        { id: 70, name: "列举法", difficulty: "" },
        { id: 71, name: "相邻与不相邻+插空", difficulty: "" },
        { id: 72, name: "隔板+方幂+对号", difficulty: "" },
        { id: 73, name: "排座位+数字+分组+涂色", difficulty: "" },
        { id: 74, name: "全能+配对+定序", difficulty: "" }
    ],
    "第十章": [
        { id: 75, name: "古典概率", difficulty: "" },
        { id: 76, name: "独立事件", difficulty: "" },
        { id: 77, name: "常考古典概率", difficulty: "" },
        { id: 78, name: "伯努利", difficulty: "" }
    ],
    "第十一章": [
        { id: 79, name: "第二节", difficulty: "" },
        { id: 80, name: "第三节2", difficulty: "" },
        { id: 81, name: "第三节3", difficulty: "" }
    ]
};

// 学习阶段定义
const learningStages = [
    { id: "example", name: "例题", color: "#e3f2fd", icon: "fa-file-alt" },
    { id: "example_video", name: "例题网课", color: "#bbdefb", icon: "fa-video" },
    { id: "basic", name: "基础题", color: "#f3e5f5", icon: "fa-pencil-alt" },
    { id: "basic_video", name: "基础题网课", color: "#e1bee7", icon: "fa-video" },
    { id: "review", name: "复盘知识点总结", color: "#fff3e0", icon: "fa-redo" },
    { id: "advanced", name: "提高题", color: "#e8f5e9", icon: "fa-chart-line" },
    { id: "advanced_video", name: "提高题网课", color: "#c8e6c9", icon: "fa-video" },
    { id: "summary", name: "总结+思维导图", color: "#fce4ec", icon: "fa-sitemap" },
    { id: "conclusion", name: "二级结论总结", color: "#f3e5f5", icon: "fa-lightbulb" }
];// 页面加载初始化
document.addEventListener('DOMContentLoaded', function() {
    // 等待DOM完全加载
    setTimeout(function() {
        // 加载用户数据
        loadUserData();
        
        // 检查关键元素是否存在
        if (!document.getElementById('overall-progress-bar')) {
            console.error('Critical dashboard elements missing');
            return;
        }
        
        updateDashboard();
        
        // 初始化导航按钮
        initNavigation();
        
        // 初始化数学学习记录系统
        initMathLearningSystem();
        
        // 初始化模块控制按钮
        initModuleControls();
        
        // 初始化知识地图控制
        initKnowledgeMap();
        
        // 初始化设置按钮
        document.getElementById('settings-btn').addEventListener('click', openSettings);
        
        // 初始化主题切换
        initThemeSwitcher();
        
        // 初始化数学学习记录
        initMathLearningRecords();
    }, 100); // 延迟100ms确保DOM完全加载
});

// 初始化导航
function initNavigation() {
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.id === 'settings-btn') return;
            
            const pageId = this.getAttribute('data-page');
            switchPage(pageId);
        });
    });
    
    // 学科卡片点击事件
    document.querySelectorAll('.subject-card').forEach(card => {
        card.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            switchPage(subject);
        });
    });
}

// 切换页面
function switchPage(pageId) {
    // 更新导航按钮状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeNavBtn = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
    if (activeNavBtn) {
        activeNavBtn.classList.add('active');
    }
    
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    document.getElementById(pageId).classList.add('active');
    
    // 更新当前页面
    currentPage = pageId;
    
    // 如果切换到学科页面，显示模块概述
    if (['logic', 'math', 'english', 'writing'].includes(pageId)) {
        showModuleOverview(pageId);
    }
}

// 初始化模块控制
function initModuleControls() {
    document.querySelectorAll('.module-control-btn').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const module = currentPage;
            
            // 隐藏所有内容
            document.querySelectorAll('.module-overview, .module-structure, .module-exercises').forEach(section => {
                section.classList.add('hidden');
            });
            
            // 显示对应内容
            if (action === 'show-overview') {
                document.querySelector('.module-overview').classList.remove('hidden');
            } else if (action === 'show-structure') {
                document.querySelector('.module-structure').classList.remove('hidden');
            } else if (action === 'show-exercises') {
                showExercises(module, 'default');
            }
        });
    });
    
    // 结构标签切换
    document.querySelectorAll('.structure-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            
            // 更新标签状态
            document.querySelectorAll('.structure-tab').forEach(t => {
                t.classList.remove('active');
            });
            this.classList.add('active');
            
            // 显示对应部分
            document.querySelectorAll('.structure-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// 初始化数学学习记录系统
function initMathLearningSystem() {
    // 修改数学模块的控制按钮
    document.querySelectorAll('.module-control-btn').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const module = currentPage;
            
            if (module === 'math') {
                // 数学模块特殊处理
                if (action === 'show-overview') {
                    showMathOverview();
                } else if (action === 'show-structure') {
                    showMathStructure();
                } else if (action === 'show-exercises') {
                    showMathLearningRecords();
                }
            } else {
                // 其他模块保持原有逻辑
                document.querySelectorAll('.module-overview, .module-structure, .module-exercises').forEach(section => {
                    section.classList.add('hidden');
                });
                
                if (action === 'show-overview') {
                    document.querySelector('.module-overview').classList.remove('hidden');
                } else if (action === 'show-structure') {
                    document.querySelector('.module-structure').classList.remove('hidden');
                } else if (action === 'show-exercises') {
                    showExercises(module, 'default');
                }
            }
        });
    });
}

// 显示模块概述
function showModuleOverview(module) {
    // 确保模块概述可见
    document.querySelector('.module-overview').classList.remove('hidden');
    document.querySelector('.module-structure').classList.add('hidden');
    document.querySelector('.module-exercises').classList.add('hidden');
}

// 开始学习
function startStudying(subject, topic) {
    // 设置当前学习主题
    document.getElementById('current-topic').textContent = `${subject} - ${topic}`;
    
    // 重置计时器
    studyStartTime = new Date();
    studyElapsedTime = 0;
    studyTimerRunning = true;
    
    // 更新计时器显示
    document.getElementById('time-elapsed').textContent = '00:00:00';
    
    // 显示计时器
    document.getElementById('study-timer').classList.remove('hidden');
    
    // 开始计时
    startStudyTimer();
    
    // 记录学习开始
    userData.currentStudySession = {
        subject: subject,
        topic: topic,
        startTime: studyStartTime,
        notes: ''
    };
}

// 开始学习计时器
function startStudyTimer() {
    if (studyTimer) clearInterval(studyTimer);
    
    studyTimer = setInterval(function() {
        if (studyTimerRunning) {
            studyElapsedTime += 1;
            
            // 格式化时间显示
            const hours = Math.floor(studyElapsedTime / 3600).toString().padStart(2, '0');
            const minutes = Math.floor((studyElapsedTime % 3600) / 60).toString().padStart(2, '0');
            const seconds = (studyElapsedTime % 60).toString().padStart(2, '0');
            
            document.getElementById('time-elapsed').textContent = `${hours}:${minutes}:${seconds}`;
        }
    }, 1000);
}

// 切换计时器状态
function toggleTimer() {
    studyTimerRunning = !studyTimerRunning;
    
    const pauseBtn = document.getElementById('pause-btn');
    if (studyTimerRunning) {
        pauseBtn.innerHTML = '<i class="fas fa-pause"></i> 暂停';
        pauseBtn.style.backgroundColor = '#ff9800';
    } else {
        pauseBtn.innerHTML = '<i class="fas fa-play"></i> 继续';
        pauseBtn.style.backgroundColor = '#4caf50';
    }
}

// 完成学习
function finishStudying() {
    // 停止计时器
    studyTimerRunning = false;
    if (studyTimer) clearInterval(studyTimer);
    
    // 保存学习笔记
    const notes = document.getElementById('study-notes').value;
    if (userData.currentStudySession) {
        userData.currentStudySession.notes = notes;
        userData.currentStudySession.endTime = new Date();
        userData.currentStudySession.duration = studyElapsedTime;
        
        // 添加到学习历史
        userData.studyHistory.push(userData.currentStudySession);
        
        // 更新今日学习时间
        userData.studyProgress.todayStudyTime += studyElapsedTime;
        
        // 更新连续学习天数
        updateStreakDays();
        
        // 保存数据
        saveUserData();
        
        // 更新仪表盘
        updateDashboard();
    }
    
    // 隐藏计时器
    document.getElementById('study-timer').classList.add('hidden');
    
    // 清空笔记
    document.getElementById('study-notes').value = '';
    
    // 显示完成消息
    const minutes = Math.floor(studyElapsedTime / 60);
    showNotification(`学习完成！本次学习了 ${minutes} 分钟`, 'success');
}

// 停止学习
function stopStudying() {
    if (confirm('确定要结束本次学习吗？笔记将不会被保存。')) {
        studyTimerRunning = false;
        if (studyTimer) clearInterval(studyTimer);
        document.getElementById('study-timer').classList.add('hidden');
        document.getElementById('study-notes').value = '';
        userData.currentStudySession = null;
    }
}

// 更新连续学习天数
function updateStreakDays() {
    const today = new Date().toDateString();
    const lastStudyDate = userData.studyProgress.lastStudyDate;
    
    if (!lastStudyDate) {
        // 第一次学习
        userData.studyProgress.streakDays = 1;
    } else {
        const lastDate = new Date(lastStudyDate);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastDate.toDateString() === yesterday.toDateString() || 
            lastDate.toDateString() === today) {
            // 连续学习
            userData.studyProgress.streakDays++;
        } else {
            // 中断后重新开始
            userData.studyProgress.streakDays = 1;
        }
    }
    
    // 更新最后学习日期
    userData.studyProgress.lastStudyDate = today;
}

// 显示练习（修改为仅对非数学模块有效）
function showExercises(subject, topic) {
    // 数学模块不再使用这个函数
    if (subject === '数学') {
        return;
    }
    
    // 隐藏其他内容，显示练习区域
    document.querySelector('.module-overview').classList.add('hidden');
    document.querySelector('.module-structure').classList.add('hidden');
    document.querySelector('.module-exercises').classList.remove('hidden');
    
    // 根据科目和主题生成练习
    let exerciseHTML = '';
    
    if (subject === '逻辑' && topic === '命题与联结词') {
        exerciseHTML = `
            <div class="exercise-question">
                <h4>1. 下列哪个选项不是命题？</h4>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="A">
                        <div class="option-letter">A</div>
                        <div class="option-text">北京是中国的首都</div>
                    </div>
                    <div class="exercise-option" data-option="B">
                        <div class="option-letter">B</div>
                        <div class="option-text">2+3=5</div>
                    </div>
                    <div class="exercise-option" data-option="C">
                        <div class="option-letter">C</div>
                        <div class="option-text">请把门关上</div>
                    </div>
                    <div class="exercise-option" data-option="D">
                        <div class="option-letter">D</div>
                        <div class="option-text">三角形内角和为180度</div>
                    </div>
                </div>
            </div>
            
            <div class="exercise-actions">
                <button class="submit-exercise-btn" onclick="submitExercise()">
                    <i class="fas fa-paper-plane"></i> 提交答案
                </button>
                <button class="next-exercise-btn" onclick="nextExercise()">
                    <i class="fas fa-forward"></i> 下一题
                </button>
            </div>
            
            <div class="exercise-explanation" id="exercise-explanation">
                <div class="explanation-header">
                    <i class="fas fa-lightbulb"></i> 题目解析
                </div>
                <div class="explanation-content" id="explanation-content">
                    <!-- 解析内容将动态填充 -->
                </div>
            </div>
        `;
    } else if (subject === '英语') {
        exerciseHTML = `
            <div class="exercise-question">
                <h4>该模块的基础练习功能正在开发中</h4>
                <p>英语模块的练习功能将在后续版本中开放。</p>
            </div>
        `;
    } else if (subject === '写作') {
        exerciseHTML = `
            <div class="exercise-question">
                <h4>该模块的基础练习功能正在开发中</h4>
                <p>写作模块的练习功能将在后续版本中开放。</p>
            </div>
        `;
    }
    
    // 获取正确的练习容器
    let exerciseContainer;
    switch(subject) {
        case '逻辑': exerciseContainer = document.getElementById('exercise-container'); break;
        case '英语': exerciseContainer = document.getElementById('english-exercise-container'); break;
        case '写作': exerciseContainer = document.getElementById('writing-exercise-container'); break;
    }
    
    if (exerciseContainer) {
        exerciseContainer.innerHTML = exerciseHTML;
        
        // 添加选项点击事件
        exerciseContainer.querySelectorAll('.exercise-option').forEach(option => {
            option.addEventListener('click', function() {
                // 清除其他选项的选择状态
                this.parentElement.querySelectorAll('.exercise-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // 选中当前选项
                this.classList.add('selected');
                
                // 启用提交按钮
                exerciseContainer.querySelector('.submit-exercise-btn').disabled = false;
            });
        });
        
        // 初始禁用提交按钮
        const submitBtn = exerciseContainer.querySelector('.submit-exercise-btn');
        if (submitBtn) {
            submitBtn.disabled = true;
        }
    }
}

// 提交练习（简化版）
function submitExercise() {
    showNotification('练习功能正在开发中', 'info');
}

// 显示练习反馈（简化版）
function showExerciseFeedback(isCorrect) {
    showNotification('练习反馈功能正在开发中', 'info');
}

// 关闭反馈
function closeFeedback() {
    document.getElementById('exercise-feedback').classList.add('hidden');
}

// 复习错题
function reviewMistakes() {
    closeFeedback();
    showNotification('错题复习功能将在后续版本中开放', 'info');
}

// 下一题
function nextExercise() {
    showNotification('更多题目将在后续版本中开放', 'info');
}

// 返回知识结构
function backToStructure() {
    document.querySelector('.module-exercises').classList.add('hidden');
    document.querySelector('.module-structure').classList.remove('hidden');
}

// 初始化知识地图
function initKnowledgeMap() {
    document.querySelectorAll('.map-control-btn').forEach(button => {
        button.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            
            // 更新按钮状态
            document.querySelectorAll('.map-control-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // 显示对应视图
            document.querySelectorAll('.map-container').forEach(container => {
                container.classList.add('hidden');
            });
            document.getElementById(`map-${view}`).classList.remove('hidden');
        });
    });
    
    // 学习路径选项
    document.querySelectorAll('.path-option').forEach(option => {
        option.addEventListener('click', function() {
            const path = this.getAttribute('data-path');
            
            // 更新选项状态
            document.querySelectorAll('.path-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
            
            // 更新路径可视化
            updatePathVisualization(path);
        });
    });
}

// 更新路径可视化
function updatePathVisualization(path) {
    // 这里可以根据不同路径更新可视化内容
    // 简化处理：显示对应路径的描述
    console.log(`切换到路径: ${path}`);
}

// 生成每日计划
function generateDailyPlan() {
    const dailyPlanContainer = document.getElementById('daily-plan');
    
    // 基于用户进度生成计划
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0=周日, 1=周一...
    
    let planHTML = '';
    
    // 周一、三、五：逻辑+数学
    if ([1, 3, 5].includes(dayOfWeek)) {
        planHTML = `
            <div class="plan-item">
                <div class="plan-header">
                    <div class="plan-title">逻辑学习</div>
                    <div class="plan-time">30分钟</div>
                </div>
                <div class="plan-desc">学习形式逻辑的推理规则，完成基础练习</div>
                <div class="plan-tags">
                    <span class="plan-tag">逻辑</span>
                    <span class="plan-tag">基础</span>
                </div>
            </div>
            
            <div class="plan-item">
                <div class="plan-header">
                    <div class="plan-title">数学练习</div>
                    <div class="plan-time">30分钟</div>
                </div>
                <div class="plan-desc">复习整数与分数运算，完成10道练习题</div>
                <div class="plan-tags">
                    <span class="plan-tag">数学</span>
                    <span class="plan-tag">练习</span>
                </div>
            </div>
        `;
    }
    // 周二、四、六：英语+写作
    else if ([2, 4, 6].includes(dayOfWeek)) {
        planHTML = `
            <div class="plan-item">
                <div class="plan-header">
                    <div class="plan-title">英语词汇</div>
                    <div class="plan-time">20分钟</div>
                </div>
                <div class="plan-desc">学习转折关系词群，掌握10个高频词汇</div>
                <div class="plan-tags">
                    <span class="plan-tag">英语</span>
                    <span class="plan-tag">词汇</span>
                </div>
            </div>
            
            <div class="plan-item">
                <div class="plan-header">
                    <div class="plan-title">写作练习</div>
                    <div class="plan-time">40分钟</div>
                </div>
                <div class="plan-desc">学习引言段落写法，模仿范文写作</div>
                <div class="plan-tags">
                    <span class="plan-tag">写作</span>
                    <span class="plan-tag">模仿</span>
                </div>
            </div>
        `;
    }
    // 周日：复习+自测
    else {
        planHTML = `
            <div class="plan-item">
                <div class="plan-header">
                    <div class="plan-title">本周复习</div>
                    <div class="plan-time">40分钟</div>
                </div>
                <div class="plan-desc">复习本周学习的所有知识点，整理笔记</div>
                <div class="plan-tags">
                    <span class="plan-tag">复习</span>
                    <span class="plan-tag">整理</span>
                </div>
            </div>
            
            <div class="plan-item">
                <div class="plan-header">
                    <div class="plan-title">自我测试</div>
                    <div class="plan-time">20分钟</div>
                </div>
                <div class="plan-desc">完成10道综合测试题，检验学习效果</div>
                <div class="plan-tags">
                    <span class="plan-tag">测试</span>
                    <span class="plan-tag">评估</span>
                </div>
            </div>
        `;
    }
    
    dailyPlanContainer.innerHTML = planHTML;
    
    // 为计划项添加点击事件
    dailyPlanContainer.querySelectorAll('.plan-item').forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.plan-title').textContent;
            showNotification(`开始执行: ${title}`, 'info');
            
            // 标记为已完成
            this.classList.add('completed');
        });
    });
}

// 更新仪表盘
function updateDashboard() {
    // 检查关键元素是否存在
    const overallProgressBar = document.getElementById('overall-progress-bar');
    if (!overallProgressBar) {
        console.warn('Dashboard elements not found, retrying...');
        setTimeout(updateDashboard, 100); // 100ms后重试
        return;
    }
    
    // 计算总体进度
    const totalCompleted = 
        userData.studyProgress.subjectProgress.logic.completed +
        userData.studyProgress.subjectProgress.math.completed +
        userData.studyProgress.subjectProgress.english.completed +
        userData.studyProgress.subjectProgress.writing.completed;
    
    const totalUnits = 
        userData.studyProgress.subjectProgress.logic.total +
        userData.studyProgress.subjectProgress.math.total +
        userData.studyProgress.subjectProgress.english.total +
        userData.studyProgress.subjectProgress.writing.total;
    
    const overallProgress = totalUnits > 0 ? Math.round((totalCompleted / totalUnits) * 100) : 0;
    
    // 更新显示
    document.getElementById('completed-units').textContent = `${totalCompleted}个`;
    document.getElementById('total-units').textContent = totalUnits;
    document.getElementById('overall-progress').textContent = `${overallProgress}%`;
    overallProgressBar.style.width = `${overallProgress}%`;
    
    // 更新今日学习时间
    const todayMinutes = Math.floor(userData.studyProgress.todayStudyTime / 60);
    document.getElementById('today-study').textContent = `${todayMinutes}分钟`;
    
    // 更新连续学习天数
    document.getElementById('streak-days').textContent = `${userData.studyProgress.streakDays}天`;
    
    // 更新考试倒计时
    if (userData.profile.examDate) {
        const examDate = new Date(userData.profile.examDate);
        const today = new Date();
        const timeDiff = examDate.getTime() - today.getTime();
        const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        document.getElementById('days-remaining').innerHTML = 
            `距离考试还有 <strong>${daysRemaining}</strong> 天`;
    }
    
    // 更新各科进度条
    updateSubjectProgress('logic', 
        userData.studyProgress.subjectProgress.logic.completed,
        userData.studyProgress.subjectProgress.logic.total);
    
    updateSubjectProgress('math',
        userData.studyProgress.subjectProgress.math.completed,
        userData.studyProgress.subjectProgress.math.total);
    
    updateSubjectProgress('english',
        userData.studyProgress.subjectProgress.english.completed,
        userData.studyProgress.subjectProgress.english.total);
    
    updateSubjectProgress('writing',
        userData.studyProgress.subjectProgress.writing.completed,
        userData.studyProgress.subjectProgress.writing.total);
    
    // 生成学习建议
    generateLearningSuggestions();
    
    // 生成每日计划
    generateDailyPlan();
}

// 更新学科进度
function updateSubjectProgress(subjectId, completed, total) {
    const subjectCard = document.querySelector(`.subject-card[data-subject="${subjectId}"]`);
    if (subjectCard) {
        const progressBar = subjectCard.querySelector('.progress-fill');
        const progressText = subjectCard.querySelector('.progress-text');
        
        const progressPercent = Math.round((completed / total) * 100);
        
        if (progressBar) {
            progressBar.style.width = `${progressPercent}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${completed}/${total}单元`;
        }
    }
}

// 生成学习建议
function generateLearningSuggestions() {
    const suggestionsContainer = document.getElementById('learning-suggestions');
    
    let suggestionsHTML = '';
    
    // 基于用户数据生成建议
    const logicProgress = userData.studyProgress.subjectProgress.logic.completed;
    const mathProgress = userData.studyProgress.subjectProgress.math.completed;
    const englishProgress = userData.studyProgress.subjectProgress.english.completed;
    
    // 建议1：如果某科目进度滞后
    if (mathProgress === 0 && logicProgress > 0) {
        suggestionsHTML += `
            <div class="suggestion-item important">
                <div class="suggestion-header">
                    <i class="fas fa-exclamation-circle suggestion-icon"></i>
                    <div class="suggestion-title">数学学习建议</div>
                </div>
                <div class="suggestion-desc">
                    检测到您还未开始数学学习。建议从"整数与分数"开始，每天投入20-30分钟，逐步建立信心。
                </div>
            </div>
        `;
    }
    
    // 建议2：学习时间建议
    suggestionsHTML += `
        <div class="suggestion-item tip">
            <div class="suggestion-header">
                <i class="fas fa-lightbulb suggestion-icon"></i>
                <div class="suggestion-title">高效学习技巧</div>
            </div>
            <div class="suggestion-desc">
                建议采用"番茄工作法"：学习25分钟，休息5分钟。每个学习周期专注于一个知识点。
            </div>
        </div>
    `;
    
    // 建议3：复习建议
    if (userData.studyProgress.streakDays >= 3) {
        suggestionsHTML += `
            <div class="suggestion-item">
                <div class="suggestion-header">
                    <i class="fas fa-trophy suggestion-icon"></i>
                    <div class="suggestion-title">连续学习奖励</div>
                </div>
                <div class="suggestion-desc">
                    您已经连续学习了${userData.studyProgress.streakDays}天！保持这个势头，每周可以安排一天进行复习巩固。
                </div>
            </div>
        `;
    }
    
    // 建议4：基于用户背景
    if (userData.profile.mathLevel === 'weak') {
        suggestionsHTML += `
            <div class="suggestion-item warning">
                <div class="suggestion-header">
                    <i class="fas fa-hand-paper suggestion-icon"></i>
                    <div class="suggestion-title">数学基础加强</div>
                </div>
                <div class="suggestion-desc">
                    检测到您的数学基础较薄弱。建议：1. 从最基础的概念开始 2. 多做例题理解思路 3. 不要急于求成，每天进步一点点。
                </div>
            </div>
        `;
    }
    
    suggestionsContainer.innerHTML = suggestionsHTML;
}

// 初始化主题切换
function initThemeSwitcher() {
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            // 更新选项状态
            document.querySelectorAll('.theme-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
            
            // 应用主题
            document.documentElement.setAttribute('data-theme', theme);
            
            // 保存主题偏好
            userData.profile.theme = theme;
            saveUserData();
            
            showNotification(`已切换到${this.textContent}`, 'info');
        });
    });
    
    // 应用保存的主题
    if (userData.profile.theme) {
        document.documentElement.setAttribute('data-theme', userData.profile.theme);
        
        // 更新选项状态
        document.querySelectorAll('.theme-option').forEach(option => {
            if (option.getAttribute('data-theme') === userData.profile.theme) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
}

// 打开设置
function openSettings() {
    document.getElementById('settings-panel').classList.remove('hidden');
}

// 关闭设置
function closeSettings() {
    document.getElementById('settings-panel').classList.add('hidden');
}

// 编辑个人资料
function editProfile() {
    closeSettings();
    showNotification('个人资料编辑功能将在后续版本中开放', 'info');
}

// 导出数据
function exportData() {
    const dataStr = JSON.stringify(userData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `mba-learning-data-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('数据已导出', 'success');
}

// 导入数据
function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                userData = importedData;
                saveUserData();
                updateDashboard();
                showNotification('数据导入成功', 'success');
            } catch (error) {
                showNotification('导入失败，文件格式不正确', 'danger');
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

// 重置数据
function resetData() {
    if (confirm('确定要重置所有学习数据吗？此操作不可撤销。')) {
        localStorage.removeItem('mbaLearningData');
        userData = {
            profile: {
                background: "",
                mathLevel: "",
                englishLevel: "",
                examDate: "",
                targetScore: 200,
                dailyStudyTime: 2
            },
            studyProgress: {
                completedUnits: 0,
                totalUnits: 32,
                todayStudyTime: 0,
                streakDays: 0,
                lastStudyDate: null,
                subjectProgress: {
                    logic: { completed: 3, total: 12 },
                    math: { completed: 1, total: 8 },
                    english: { completed: 2, total: 12 },
                    writing: { completed: 0, total: 4 }
                }
            },
            studyHistory: [],
            currentStudySession: null,
            mathLearningRecords: {}
        };
        
        updateDashboard();
        showNotification('数据已重置', 'success');
    }
}

// 保存用户数据
function saveUserData() {
    localStorage.setItem('mbaLearningData', JSON.stringify(userData));
}

// 加载用户数据
function loadUserData() {
    const savedData = localStorage.getItem('mbaLearningData');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        userData = parsedData;
        
        // 确保数学记录存在
        if (!userData.mathLearningRecords) {
            userData.mathLearningRecords = {};
        }
    }
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 300px;
        max-width: 400px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    // 添加动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            margin-left: 10px;
        }
    `;
    document.head.appendChild(style);
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 自动消失
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// 获取通知图标
function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'warning': return 'exclamation-triangle';
        case 'danger': return 'times-circle';
        default: return 'info-circle';
    }
}

// 获取通知颜色
function getNotificationColor(type) {
    switch(type) {
        case 'success': return '#4caf50';
        case 'warning': return '#ff9800';
        case 'danger': return '#f44336';
        default: return '#2196f3';
    }
}

// 页面卸载前保存数据
window.addEventListener('beforeunload', function() {
    saveUserData();
});

// ==================== 数学学习记录系统函数 ====================

// 初始化数学学习记录数据
function initMathLearningRecords() {
    if (!userData.mathLearningRecords) {
        userData.mathLearningRecords = {};
    }
    
    // 为每个知识点初始化学习记录
    Object.keys(mathKnowledgeData).forEach(chapter => {
        mathKnowledgeData[chapter].forEach(section => {
            const key = `${chapter}_${section.id}`;
            if (!userData.mathLearningRecords[key]) {
                userData.mathLearningRecords[key] = {
                    stages: {}
                };
                
                // 初始化每个阶段的状态
                learningStages.forEach(stage => {
                    userData.mathLearningRecords[key].stages[stage.id] = {
                        status: 'pending', // pending, in-progress, completed
                        note: '',
                        date: null,
                        timeSpent: 0
                    };
                });
            }
        });
    });
}

// 显示数学模块概述
function showMathOverview() {
    document.querySelector('.module-overview').classList.remove('hidden');
    document.querySelector('.module-structure').classList.add('hidden');
    document.querySelector('.module-exercises').classList.add('hidden');
}

// 显示数学知识结构
function showMathStructure() {
    document.querySelector('.module-overview').classList.add('hidden');
    document.querySelector('.module-structure').classList.remove('hidden');
    document.querySelector('.module-exercises').classList.add('hidden');
    
    // 加载数学知识结构
    loadMathStructure();
}

// 显示数学学习记录
function showMathLearningRecords() {
    document.querySelector('.module-overview').classList.add('hidden');
    document.querySelector('.module-structure').classList.add('hidden');
    document.querySelector('.module-exercises').classList.remove('hidden');
    
    // 加载学习记录视图
    loadMathLearningRecordsView();
}

// 加载数学知识结构
function loadMathStructure() {
    const structureContainer = document.querySelector('.module-structure .knowledge-cards');
    if (!structureContainer) return;
    
    let html = '';
    
    Object.keys(mathKnowledgeData).forEach(chapter => {
        html += `
            <div class="chapter-section">
                <h4 class="chapter-title">${chapter}</h4>
                <div class="chapter-sections">
        `;
        
        mathKnowledgeData[chapter].forEach(section => {
            const key = `${chapter}_${section.id}`;
            const records = userData.mathLearningRecords[key];
            let completedCount = 0;
            let totalStages = learningStages.length;
            
            if (records && records.stages) {
                completedCount = Object.values(records.stages).filter(stage => stage.status === 'completed').length;
            }
            
            const progressPercent = Math.round((completedCount / totalStages) * 100);
            const isImportant = section.difficulty === '重难点';
            
            html += `
                <div class="section-card" data-key="${key}">
                    <div class="section-header">
                        <div class="section-info">
                            <div class="section-id">${section.id}</div>
                            <h5>${section.name}</h5>
                            ${isImportant ? '<span class="important-badge">重难点</span>' : ''}
                        </div>
                        <div class="section-progress">
                            <div class="progress-text">${completedCount}/${totalStages}</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progressPercent}%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="section-actions">
                        <button class="study-btn" onclick="openLearningRecord('${key}')">
                            <i class="fas fa-edit"></i> 记录学习
                        </button>
                        <button class="view-btn" onclick="viewLearningRecord('${key}')">
                            <i class="fas fa-eye"></i> 查看详情
                        </button>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    structureContainer.innerHTML = html;
    
    // 更新数学模块的进度统计
    updateMathProgressStats();
}

// 更新数学模块进度统计
function updateMathProgressStats() {
    let totalSections = 0;
    let totalCompletedStages = 0;
    let totalStages = 0;
    
    Object.keys(mathKnowledgeData).forEach(chapter => {
        mathKnowledgeData[chapter].forEach(section => {
            const key = `${chapter}_${section.id}`;
            const records = userData.mathLearningRecords[key];
            totalSections++;
            
            if (records && records.stages) {
                totalStages += learningStages.length;
                totalCompletedStages += Object.values(records.stages).filter(stage => stage.status === 'completed').length;
            }
        });
    });
    
    const overallProgress = totalStages > 0 ? Math.round((totalCompletedStages / totalStages) * 100) : 0;
    
    // 更新数学模块的进度显示
    const mathCard = document.querySelector('.subject-card[data-subject="math"] .progress-fill');
    const mathText = document.querySelector('.subject-card[data-subject="math"] .progress-text');
    
    if (mathCard) {
        mathCard.style.width = `${overallProgress}%`;
    }
    
    if (mathText) {
        mathText.textContent = `${totalCompletedStages}/${totalStages}阶段`;
    }
    
    // 更新用户数据中的数学进度
    userData.studyProgress.subjectProgress.math.completed = totalCompletedStages;
    userData.studyProgress.subjectProgress.math.total = totalStages;
    
    saveUserData();
}

// 加载数学学习记录视图
function loadMathLearningRecordsView() {
    const exercisesContainer = document.querySelector('.module-exercises');
    if (!exercisesContainer) return;
    
    let html = `
        <div class="learning-records-header">
            <h3><i class="fas fa-clipboard-list"></i> 数学学习记录</h3>
            <div class="record-controls">
                <button class="record-btn" onclick="exportMathRecords()">
                    <i class="fas fa-download"></i> 导出记录
                </button>
                <button class="record-btn" onclick="showMathStatistics()">
                    <i class="fas fa-chart-bar"></i> 学习统计
                </button>
            </div>
        </div>
        
        <div class="learning-records-container">
            <div class="records-overview">
                <div class="overview-stats">
                    <div class="stat-card">
                        <div class="stat-icon" style="background-color: #e3f2fd;">
                            <i class="fas fa-check-circle" style="color: #1976d2;"></i>
                        </div>
                        <div class="stat-content">
                            <h4>已完成阶段</h4>
                            <div class="stat-value" id="completed-stages">0</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon" style="background-color: #f3e5f5;">
                            <i class="fas fa-clock" style="color: #7b1fa2;"></i>
                        </div>
                        <div class="stat-content">
                            <h4>总学习时间</h4>
                            <div class="stat-value" id="total-study-time">0小时</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon" style="background-color: #e8f5e9;">
                            <i class="fas fa-tasks" style="color: #388e3c;"></i>
                        </div>
                        <div class="stat-content">
                            <h4>学习进度</h4>
                            <div class="stat-value" id="learning-progress">0%</div>
                        </div>
                    </div>
                </div>
                
                <div class="recent-activity">
                    <h4><i class="fas fa-history"></i> 最近学习活动</h4>
                    <div class="activity-list" id="recent-activities">
                        <!-- 最近学习活动将动态生成 -->
                    </div>
                </div>
            </div>
            
            <div class="records-detail">
                <div class="detail-header">
                    <h4><i class="fas fa-search"></i> 查看学习记录</h4>
                    <div class="filter-controls">
                        <select id="chapter-filter" onchange="filterLearningRecords()">
                            <option value="">所有章节</option>
                            ${Object.keys(mathKnowledgeData).map(chapter => 
                                `<option value="${chapter}">${chapter}</option>`
                            ).join('')}
                        </select>
                        <select id="status-filter" onchange="filterLearningRecords()">
                            <option value="">所有状态</option>
                            <option value="completed">已完成</option>
                            <option value="in-progress">进行中</option>
                            <option value="pending">未开始</option>
                        </select>
                    </div>
                </div>
                
                <div class="detail-content" id="learning-records-list">
                    <!-- 学习记录列表将动态生成 -->
                </div>
            </div>
        </div>
    `;
    
    exercisesContainer.innerHTML = html;
    
    // 更新统计数据
    updateMathRecordsStats();
    
    // 加载学习记录列表
    loadLearningRecordsList();
}

// 更新数学记录统计
function updateMathRecordsStats() {
    let completedStages = 0;
    let totalStages = 0;
    let totalTimeSpent = 0;
    let recentActivities = [];
    
    Object.keys(mathKnowledgeData).forEach(chapter => {
        mathKnowledgeData[chapter].forEach(section => {
            const key = `${chapter}_${section.id}`;
            const records = userData.mathLearningRecords[key];
            
            if (records && records.stages) {
                totalStages += learningStages.length;
                
                Object.values(records.stages).forEach(stage => {
                    if (stage.status === 'completed') {
                        completedStages++;
                    }
                    if (stage.timeSpent) {
                        totalTimeSpent += stage.timeSpent;
                    }
                    if (stage.date) {
                        recentActivities.push({
                            date: stage.date,
                            section: section.name,
                            stage: learningStages.find(s => s.id === Object.keys(records.stages).find(k => records.stages[k] === stage))?.name || '未知阶段'
                        });
                    }
                });
            }
        });
    });
    
    const progressPercent = totalStages > 0 ? Math.round((completedStages / totalStages) * 100) : 0;
    const totalHours = Math.round(totalTimeSpent / 60);
    
    // 更新统计显示
    document.getElementById('completed-stages').textContent = completedStages;
    document.getElementById('total-study-time').textContent = `${totalHours}小时`;
    document.getElementById('learning-progress').textContent = `${progressPercent}%`;
    
    // 更新最近活动
    updateRecentActivities(recentActivities);
}

// 更新最近活动
function updateRecentActivities(activities) {
    const container = document.getElementById('recent-activities');
    if (!container) return;
    
    // 按日期排序
    activities.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let html = '';
    activities.slice(0, 5).forEach(activity => {
        const date = new Date(activity.date).toLocaleDateString('zh-CN');
        html += `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-title">完成了 "${activity.section}"</div>
                    <div class="activity-desc">${activity.stage} · ${date}</div>
                </div>
            </div>
        `;
    });
    
    if (html === '') {
        html = '<div class="no-activity">暂无学习记录</div>';
    }
    
    container.innerHTML = html;
}

// 加载学习记录列表
function loadLearningRecordsList(filterChapter = '', filterStatus = '') {
    const container = document.getElementById('learning-records-list');
    if (!container) return;
    
    let html = '';
    let hasRecords = false;
    
    Object.keys(mathKnowledgeData).forEach(chapter => {
        // 应用章节过滤
        if (filterChapter && filterChapter !== chapter) return;
        
        let chapterSections = '';
        
        mathKnowledgeData[chapter].forEach(section => {
            const key = `${chapter}_${section.id}`;
            const records = userData.mathLearningRecords[key];
            
            if (!records || !records.stages) return;
            
            // 计算该知识点的进度
            const completedCount = Object.values(records.stages).filter(stage => stage.status === 'completed').length;
            const totalCount = learningStages.length;
            const progressPercent = Math.round((completedCount / totalCount) * 100);
            
            // 应用状态过滤
            let status = 'pending';
            if (completedCount === totalCount) {
                status = 'completed';
            } else if (completedCount > 0) {
                status = 'in-progress';
            }
            
            if (filterStatus && filterStatus !== status) return;
            
            hasRecords = true;
            
            chapterSections += `
                <div class="record-item" data-key="${key}" onclick="viewLearningRecord('${key}')">
                    <div class="record-header">
                        <div class="record-title">
                            <span class="section-id">${section.id}</span>
                            <h5>${section.name}</h5>
                            ${section.difficulty === '重难点' ? '<span class="important-badge">重难点</span>' : ''}
                        </div>
                        <div class="record-status ${status}">
                            <span>${status === 'completed' ? '已完成' : status === 'in-progress' ? '进行中' : '未开始'}</span>
                        </div>
                    </div>
                    <div class="record-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                        <div class="progress-text">${completedCount}/${totalCount}阶段</div>
                    </div>
                    <div class="record-stages">
                        ${learningStages.map(stage => {
                            const stageRecord = records.stages[stage.id];
                            const stageStatus = stageRecord ? stageRecord.status : 'pending';
                            return `
                                <div class="stage-indicator ${stageStatus}" title="${stage.name}: ${stageStatus === 'completed' ? '已完成' : stageStatus === 'in-progress' ? '进行中' : '未开始'}">
                                    <i class="fas fa-${stage.icon}"></i>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        });
        
        if (chapterSections) {
            html += `
                <div class="chapter-group">
                    <h5 class="chapter-name">${chapter}</h5>
                    <div class="chapter-records">
                        ${chapterSections}
                    </div>
                </div>
            `;
        }
    });
    
    if (!hasRecords) {
        html = `
            <div class="no-records">
                <i class="fas fa-clipboard-list"></i>
                <p>暂无学习记录</p>
                <button class="start-learning-btn" onclick="showMathStructure()">
                    开始记录学习
                </button>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// 过滤学习记录
function filterLearningRecords() {
    const chapterFilter = document.getElementById('chapter-filter').value;
    const statusFilter = document.getElementById('status-filter').value;
    loadLearningRecordsList(chapterFilter, statusFilter);
}

// 打开学习记录
function openLearningRecord(key) {
    // 解析key
    const [chapter, id] = key.split('_');
    const section = mathKnowledgeData[chapter]?.find(s => s.id == id);
    
    if (!section) return;
    
    showLearningRecordModal(chapter, section);
}

// 查看学习记录详情
function viewLearningRecord(key) {
    const [chapter, id] = key.split('_');
    const section = mathKnowledgeData[chapter]?.find(s => s.id == id);
    
    if (!section) return;
    
    showLearningRecordDetail(chapter, section);
}

// 显示学习记录模态框
function showLearningRecordModal(chapter, section) {
    const key = `${chapter}_${section.id}`;
    const records = userData.mathLearningRecords[key];
    
    let modalHTML = `
        <div class="learning-record-modal">
            <div class="modal-header">
                <h3><i class="fas fa-edit"></i> 记录学习进度</h3>
                <button class="close-modal" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="record-info">
                    <h4>${chapter} · ${section.name}</h4>
                    ${section.difficulty === '重难点' ? '<span class="important-badge">重难点</span>' : ''}
                </div>
                
                <div class="learning-stages">
                    ${learningStages.map(stage => {
                        const stageRecord = records?.stages[stage.id];
                        const stageStatus = stageRecord?.status || 'pending';
                        const stageNote = stageRecord?.note || '';
                        
                        return `
                            <div class="stage-item ${stageStatus}" data-stage="${stage.id}">
                                <div class="stage-header">
                                    <div class="stage-icon" style="background-color: ${stage.color};">
                                        <i class="fas ${stage.icon}"></i>
                                    </div>
                                    <div class="stage-info">
                                        <h5>${stage.name}</h5>
                                        <div class="stage-status">
                                            <span class="status-badge ${stageStatus}">
                                                ${stageStatus === 'completed' ? '已完成' : stageStatus === 'in-progress' ? '进行中' : '未开始'}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="stage-actions">
                                        <button class="status-btn" onclick="toggleStageStatus('${key}', '${stage.id}')">
                                            ${stageStatus === 'completed' ? '标记为未完成' : '标记为完成'}
                                        </button>
                                    </div>
                                </div>
                                <div class="stage-note">
                                    <textarea 
                                        placeholder="记录学习心得、笔记或链接..."
                                        onchange="updateStageNote('${key}', '${stage.id}', this.value)"
                                    >${stageNote}</textarea>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            <div class="modal-footer">
                <button class="save-btn" onclick="saveLearningRecord('${key}')">
                    <i class="fas fa-save"></i> 保存记录
                </button>
                <button class="cancel-btn" onclick="closeModal()">
                    取消
                </button>
            </div>
        </div>
        <div class="modal-overlay" onclick="closeModal()"></div>
    `;
    
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal-container';
    modal.innerHTML = modalHTML;
    document.body.appendChild(modal);
}

// 显示学习记录详情
function showLearningRecordDetail(chapter, section) {
    const key = `${chapter}_${section.id}`;
    const records = userData.mathLearningRecords[key];
    
    let detailHTML = `
        <div class="record-detail-modal">
            <div class="modal-header">
                <h3><i class="fas fa-eye"></i> 学习记录详情</h3>
                <button class="close-modal" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="detail-header">
                    <h4>${chapter} · ${section.name}</h4>
                    ${section.difficulty === '重难点' ? '<span class="important-badge">重难点</span>' : ''}
                </div>
                
                <div class="progress-summary">
                    <div class="summary-stats">
                        ${learningStages.map(stage => {
                            const stageRecord = records?.stages[stage.id];
                            const stageStatus = stageRecord?.status || 'pending';
                            const completedCount = stageStatus === 'completed' ? 1 : 0;
                            
                            return `
                                <div class="summary-item ${stageStatus}">
                                    <div class="summary-icon" style="background-color: ${stage.color};">
                                        <i class="fas ${stage.icon}"></i>
                                    </div>
                                    <div class="summary-content">
                                        <div class="summary-title">${stage.name}</div>
                                        <div class="summary-status">${stageStatus === 'completed' ? '已完成' : stageStatus === 'in-progress' ? '进行中' : '未开始'}</div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="detailed-notes">
                    <h5><i class="fas fa-sticky-note"></i> 学习笔记</h5>
                    <div class="notes-list">
                        ${learningStages.map(stage => {
                            const stageRecord = records?.stages[stage.id];
                            const stageNote = stageRecord?.note || '';
                            
                            if (!stageNote) return '';
                            
                            return `
                                <div class="note-item">
                                    <div class="note-header">
                                        <div class="note-icon" style="background-color: ${stage.color};">
                                            <i class="fas ${stage.icon}"></i>
                                        </div>
                                        <div class="note-title">${stage.name}</div>
                                    </div>
                                    <div class="note-content">${stageNote}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="edit-btn" onclick="openLearningRecord('${key}')">
                    <i class="fas fa-edit"></i> 编辑记录
                </button>
                <button class="close-btn" onclick="closeModal()">
                    关闭
                </button>
            </div>
        </div>
        <div class="modal-overlay" onclick="closeModal()"></div>
    `;
    
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal-container';
    modal.innerHTML = detailHTML;
    document.body.appendChild(modal);
}

// 切换阶段状态
function toggleStageStatus(key, stageId) {
    if (!userData.mathLearningRecords[key]) {
        userData.mathLearningRecords[key] = { stages: {} };
    }
    
    if (!userData.mathLearningRecords[key].stages[stageId]) {
        userData.mathLearningRecords[key].stages[stageId] = {
            status: 'pending',
            note: '',
            date: null,
            timeSpent: 0
        };
    }
    
    const currentStatus = userData.mathLearningRecords[key].stages[stageId].status;
    const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';
    
    userData.mathLearningRecords[key].stages[stageId].status = newStatus;
    
    if (newStatus === 'completed') {
        userData.mathLearningRecords[key].stages[stageId].date = new Date().toISOString();
    }
    
    // 更新UI
    const stageElement = document.querySelector(`.stage-item[data-stage="${stageId}"]`);
    if (stageElement) {
        stageElement.className = `stage-item ${newStatus}`;
        const statusBtn = stageElement.querySelector('.status-btn');
        if (statusBtn) {
            statusBtn.textContent = newStatus === 'completed' ? '标记为未完成' : '标记为完成';
        }
    }
    
    saveUserData();
    updateMathProgressStats();
}

// 更新阶段笔记
function updateStageNote(key, stageId, note) {
    if (!userData.mathLearningRecords[key]) {
        userData.mathLearningRecords[key] = { stages: {} };
    }
    
    if (!userData.mathLearningRecords[key].stages[stageId]) {
        userData.mathLearningRecords[key].stages[stageId] = {
            status: 'pending',
            note: '',
            date: null,
            timeSpent: 0
        };
    }
    
    userData.mathLearningRecords[key].stages[stageId].note = note;
    saveUserData();
}

// 保存学习记录
function saveLearningRecord(key) {
    saveUserData();
    showNotification('学习记录已保存', 'success');
    closeModal();
    
    // 重新加载列表
    if (currentPage === 'math') {
        loadMathLearningRecordsView();
    }
}

// 关闭模态框
function closeModal() {
    const modal = document.querySelector('.modal-container');
    if (modal) {
        modal.remove();
    }
}

// 显示数学统计
function showMathStatistics() {
    let html = `
        <div class="statistics-modal">
            <div class="modal-header">
                <h3><i class="fas fa-chart-bar"></i> 数学学习统计</h3>
                <button class="close-modal" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="stats-grid">
                    <div class="stat-chart">
                        <h4>各章节完成情况</h4>
                        <div class="chart-container" id="chapter-chart"></div>
                    </div>
                    
                    <div class="stat-chart">
                        <h4>学习阶段分布</h4>
                        <div class="chart-container" id="stage-chart"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-overlay" onclick="closeModal()"></div>
    `;
    
    const modal = document.createElement('div');
    modal.className = 'modal-container';
    modal.innerHTML = html;
    document.body.appendChild(modal);
    
    // 渲染统计图表
    renderMathStatistics();
}

// 渲染数学统计
function renderMathStatistics() {
    // 各章节完成情况
    const chapterData = [];
    Object.keys(mathKnowledgeData).forEach(chapter => {
        let completedCount = 0;
        let totalCount = 0;
        
        mathKnowledgeData[chapter].forEach(section => {
            const key = `${chapter}_${section.id}`;
            const records = userData.mathLearningRecords[key];
            
            if (records && records.stages) {
                totalCount += learningStages.length;
                completedCount += Object.values(records.stages).filter(stage => stage.status === 'completed').length;
            }
        });
        
        if (totalCount > 0) {
            chapterData.push({
                chapter: chapter,
                progress: Math.round((completedCount / totalCount) * 100)
            });
        }
    });
    
    // 学习阶段分布
    const stageData = [];
    learningStages.forEach(stage => {
        let completedCount = 0;
        let totalCount = 0;
        
        Object.keys(mathKnowledgeData).forEach(chapter => {
            mathKnowledgeData[chapter].forEach(section => {
                const key = `${chapter}_${section.id}`;
                const records = userData.mathLearningRecords[key];
                
                if (records && records.stages && records.stages[stage.id]) {
                    totalCount++;
                    if (records.stages[stage.id].status === 'completed') {
                        completedCount++;
                    }
                }
            });
        });
        
        stageData.push({
            stage: stage.name,
            completed: completedCount,
            total: totalCount
        });
    });
    
    // 这里可以添加图表渲染逻辑，使用Chart.js等库
    // 简化版：显示文本统计
    const chapterChart = document.getElementById('chapter-chart');
    const stageChart = document.getElementById('stage-chart');
    
    if (chapterChart) {
        chapterChart.innerHTML = `
            <div class="text-stats">
                ${chapterData.map(item => `
                    <div class="stat-item">
                        <span class="stat-label">${item.chapter}</span>
                        <div class="stat-bar">
                            <div class="stat-bar-fill" style="width: ${item.progress}%"></div>
                        </div>
                        <span class="stat-value">${item.progress}%</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (stageChart) {
        stageChart.innerHTML = `
            <div class="text-stats">
                ${stageData.map(item => {
                    const percent = item.total > 0 ? Math.round((item.completed / item.total) * 100) : 0;
                    return `
                        <div class="stat-item">
                            <span class="stat-label">${item.stage}</span>
                            <div class="stat-bar">
                                <div class="stat-bar-fill" style="width: ${percent}%"></div>
                            </div>
                            <span class="stat-value">${item.completed}/${item.total}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }
}

// 导出数学记录
function exportMathRecords() {
    const exportData = {
        timestamp: new Date().toISOString(),
        userProfile: userData.profile,
        mathRecords: userData.mathLearningRecords,
        summary: {
            totalSections: Object.keys(mathKnowledgeData).reduce((sum, chapter) => 
                sum + mathKnowledgeData[chapter].length, 0),
            completedStages: Object.keys(userData.mathLearningRecords).reduce((sum, key) => {
                const stages = userData.mathLearningRecords[key]?.stages || {};
                return sum + Object.values(stages).filter(stage => stage.status === 'completed').length;
            }, 0),
            totalStages: Object.keys(mathKnowledgeData).reduce((sum, chapter) => 
                sum + mathKnowledgeData[chapter].length * learningStages.length, 0)
        }
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `math-learning-records-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('数学学习记录已导出', 'success');
}