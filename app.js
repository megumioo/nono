// MBA学习系统 - 完整版应用脚本

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
    currentStudySession: null
};

let currentPage = "dashboard";
let studyTimer = null;
let studyStartTime = null;
let studyElapsedTime = 0;
let studyTimerRunning = false;

// 页面加载初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否第一次使用
    if (!localStorage.getItem('mbaLearningData')) {
        showNewbieGuide();
    } else {
        loadUserData();
        updateDashboard();
    }
    
    // 初始化导航按钮
    initNavigation();
    
    // 初始化模块控制按钮
    initModuleControls();
    
    // 初始化知识地图控制
    initKnowledgeMap();
    
    // 初始化设置按钮
    document.getElementById('settings-btn').addEventListener('click', openSettings);
    
    // 初始化主题切换
    initThemeSwitcher();
    
    // 更新每日名言
    updateMotivationQuote();
});

// 显示新手引导
function showNewbieGuide() {
    document.getElementById('newbie-guide').style.display = 'flex';
}

// 下一步引导
function nextGuideStep(step) {
    // 验证当前步骤数据
    if (step === 2) {
        const background = document.getElementById('background-select').value;
        const mathLevel = document.querySelector('input[name="math-level"]:checked');
        const englishLevel = document.querySelector('input[name="english-level"]:checked');
        
        if (!background || !mathLevel || !englishLevel) {
            alert('请完成所有选项');
            return;
        }
        
        // 保存用户背景数据
        userData.profile.background = background;
        userData.profile.mathLevel = mathLevel.value;
        userData.profile.englishLevel = englishLevel.value;
    }
    
    if (step === 3) {
        const examDate = document.getElementById('exam-date').value;
        const targetScore = document.getElementById('target-score').value;
        const studyTime = document.getElementById('study-time').value;
        
        if (!examDate) {
            alert('请选择考试日期');
            return;
        }
        
        // 保存目标数据
        userData.profile.examDate = examDate;
        userData.profile.targetScore = parseInt(targetScore);
        userData.profile.dailyStudyTime = parseInt(studyTime);
        
        // 生成个性化计划
        generatePersonalizedPlan();
    }
    
    // 切换到下一步
    document.querySelectorAll('.guide-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step-${step}`).classList.add('active');
}

// 上一步引导
function prevGuideStep(step) {
    document.querySelectorAll('.guide-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step-${step}`).classList.add('active');
}

// 完成引导
function finishGuide() {
    document.getElementById('newbie-guide').style.display = 'none';
    
    // 保存用户数据
    saveUserData();
    
    // 更新仪表盘
    updateDashboard();
    
    // 显示欢迎消息
    showNotification('欢迎使用MBA学习伙伴！已为您生成个性化学习计划。', 'success');
}

// 生成个性化学习计划
function generatePersonalizedPlan() {
    const planContainer = document.getElementById('personalized-plan');
    const background = userData.profile.background;
    const mathLevel = userData.profile.mathLevel;
    const englishLevel = userData.profile.englishLevel;
    
    let planHTML = '<div class="plan-summary">';
    
    // 根据背景推荐学习重点
    if (background === 'liberal-arts') {
        planHTML += `
            <h4><i class="fas fa-user-graduate"></i> 文科背景学习方案</h4>
            <p>检测到您是文科背景，建议学习重点：</p>
            <ul>
                <li><strong>数学：</strong>从基础概念开始，逐步建立信心，预计投入40%学习时间</li>
                <li><strong>逻辑：</strong>发挥文科思维优势，重点掌握论证逻辑，预计投入25%学习时间</li>
                <li><strong>英语：</strong>保持优势，重点提高阅读速度和写作，预计投入25%学习时间</li>
                <li><strong>写作：</strong>结合逻辑训练，提高论证能力，预计投入10%学习时间</li>
            </ul>
        `;
    } else if (background === 'science-engineering') {
        planHTML += `
            <h4><i class="fas fa-flask"></i> 理工科背景学习方案</h4>
            <p>检测到您是理工科背景，建议学习重点：</p>
            <ul>
                <li><strong>数学：</strong>发挥量化分析优势，重点提高解题速度，预计投入20%学习时间</li>
                <li><strong>逻辑：</strong>形式逻辑有优势，重点学习综合推理，预计投入25%学习时间</li>
                <li><strong>英语：</strong>重点突破词汇和长难句，预计投入35%学习时间</li>
                <li><strong>写作：</strong>学习商务写作规范，提高表达能力，预计投入20%学习时间</li>
            </ul>
        `;
    } else {
        planHTML += `
            <h4><i class="fas fa-chart-line"></i> 通用学习方案</h4>
            <p>为您推荐均衡发展学习方案：</p>
            <ul>
                <li><strong>数学：</strong>25%学习时间</li>
                <li><strong>逻辑：</strong>25%学习时间</li>
                <li><strong>英语：</strong>30%学习时间</li>
                <li><strong>写作：</strong>20%学习时间</li>
            </ul>
        `;
    }
    
    // 根据数学水平调整建议
    if (mathLevel === 'weak') {
        planHTML += `<p class="highlight"><i class="fas fa-exclamation-triangle"></i> 检测到数学基础薄弱，建议每天额外增加15分钟数学基础练习</p>`;
    }
    
    // 根据英语水平调整建议
    if (englishLevel === 'cet4') {
        planHTML += `<p class="highlight"><i class="fas fa-exclamation-triangle"></i> 检测到英语需要加强，建议每天坚持背诵30个高频词汇</p>`;
    }
    
    planHTML += '</div>';
    
    planContainer.innerHTML = planHTML;
}

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

// 显示练习
function showExercises(subject, topic) {
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
            
            <div class="exercise-question">
                <h4>2. "如果下雨，那么地上会湿"的逆否命题是：</h4>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="A">
                        <div class="option-letter">A</div>
                        <div class="option-text">如果地上湿，那么下雨了</div>
                    </div>
                    <div class="exercise-option" data-option="B">
                        <div class="option-letter">B</div>
                        <div class="option-text">如果地上不湿，那么没下雨</div>
                    </div>
                    <div class="exercise-option" data-option="C">
                        <div class="option-letter">C</div>
                        <div class="option-text">如果没下雨，那么地上不湿</div>
                    </div>
                    <div class="exercise-option" data-option="D">
                        <div class="option-letter">D</div>
                        <div class="option-text">只有下雨，地上才会湿</div>
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
    } else if (subject === '数学' && topic === '整数与分数') {
        exerciseHTML = `
            <div class="exercise-question">
                <h4>1. 计算：3/5 + 2/3 = ?</h4>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="A">
                        <div class="option-letter">A</div>
                        <div class="option-text">5/8</div>
                    </div>
                    <div class="exercise-option" data-option="B">
                        <div class="option-letter">B</div>
                        <div class="option-text">19/15</div>
                    </div>
                    <div class="exercise-option" data-option="C">
                        <div class="option-letter">C</div>
                        <div class="option-text">6/15</div>
                    </div>
                    <div class="exercise-option" data-option="D">
                        <div class="option-letter">D</div>
                        <div class="option-text">1</div>
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
        `;
    }
    
    // 获取正确的练习容器
    let exerciseContainer;
    switch(subject) {
        case '逻辑': exerciseContainer = document.getElementById('exercise-container'); break;
        case '数学': exerciseContainer = document.getElementById('math-exercise-container'); break;
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
        exerciseContainer.querySelector('.submit-exercise-btn').disabled = true;
    }
}

// 提交练习
function submitExercise() {
    const exerciseContainer = document.querySelector('.exercise-container');
    const selectedOption = exerciseContainer.querySelector('.exercise-option.selected');
    
    if (!selectedOption) {
        showNotification('请先选择一个答案', 'warning');
        return;
    }
    
    const userAnswer = selectedOption.getAttribute('data-option');
    
    // 根据题目判断正确答案（这里简化处理，实际应该根据题目ID判断）
    let correctAnswer = 'C'; // 第一题正确答案
    const questionText = exerciseContainer.querySelector('.exercise-question h4').textContent;
    
    if (questionText.includes('不是命题')) {
        correctAnswer = 'C'; // 祈使句不是命题
    } else if (questionText.includes('逆否命题')) {
        correctAnswer = 'B'; // 逆否命题
    } else if (questionText.includes('3/5 + 2/3')) {
        correctAnswer = 'B'; // 19/15
    }
    
    // 标记正确和错误选项
    exerciseContainer.querySelectorAll('.exercise-option').forEach(option => {
        const optionLetter = option.getAttribute('data-option');
        option.classList.remove('selected');
        
        if (optionLetter === correctAnswer) {
            option.classList.add('correct');
        } else if (optionLetter === userAnswer && userAnswer !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });
    
    // 显示解析
    const explanation = document.getElementById('exercise-explanation');
    const explanationContent = document.getElementById('explanation-content');
    
    if (explanation && explanationContent) {
        let explanationText = '';
        
        if (questionText.includes('不是命题')) {
            explanationText = `
                <p><strong>解析：</strong>命题是能够判断真假的陈述句。</p>
                <p>A、B、D都是可以判断真假的陈述句，因此是命题。</p>
                <p>C是祈使句，表示请求或命令，不能判断真假，因此不是命题。</p>
                <p><strong>考点：</strong>命题的定义和识别</p>
            `;
        } else if (questionText.includes('逆否命题')) {
            explanationText = `
                <p><strong>解析：</strong>原命题"如果P，那么Q"的逆否命题是"如果非Q，那么非P"。</p>
                <p>原命题：如果下雨(P)，那么地上会湿(Q)</p>
                <p>逆否命题：如果地上不湿(非Q)，那么没下雨(非P)</p>
                <p>因此正确答案是B。</p>
                <p><strong>常见错误：</strong>将逆命题或否命题误认为逆否命题</p>
            `;
        } else if (questionText.includes('3/5 + 2/3')) {
            explanationText = `
                <p><strong>解析：</strong>分数加法需要先通分，然后分子相加。</p>
                <p>3/5 = 9/15，2/3 = 10/15</p>
                <p>9/15 + 10/15 = 19/15</p>
                <p>因此正确答案是B。</p>
                <p><strong>易错点：</strong>直接分子加分子，分母加分母得到5/8是错误的</p>
            `;
        }
        
        explanationContent.innerHTML = explanationText;
        explanation.classList.add('show');
    }
    
    // 显示反馈
    const isCorrect = userAnswer === correctAnswer;
    showExerciseFeedback(isCorrect);
}

// 显示练习反馈
function showExerciseFeedback(isCorrect) {
    const feedbackOverlay = document.getElementById('exercise-feedback');
    const feedbackMessage = document.getElementById('feedback-message');
    const scoreDisplay = document.getElementById('exercise-score');
    
    if (isCorrect) {
        scoreDisplay.textContent = '10';
        feedbackMessage.innerHTML = `
            <p><strong>太棒了！</strong>您答对了！</p>
            <p>您已经掌握了这个知识点的基础概念。</p>
            <p>建议继续学习下一个知识点，巩固学习成果。</p>
        `;
    } else {
        scoreDisplay.textContent = '0';
        feedbackMessage.innerHTML = `
            <p><strong>还需要加强练习哦！</strong></p>
            <p>这个知识点可能还没完全掌握。</p>
            <p>建议：</p>
            <ol>
                <li>重新学习相关知识卡片</li>
                <li>完成更多类似题目</li>
                <li>记录错题原因，定期复习</li>
            </ol>
        `;
    }
    
    feedbackOverlay.classList.remove('hidden');
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
    
    const overallProgress = Math.round((totalCompleted / totalUnits) * 100);
    
    // 更新显示
    document.getElementById('completed-units').textContent = `${totalCompleted}个`;
    document.getElementById('total-units').textContent = totalUnits;
    document.getElementById('overall-progress').textContent = `${overallProgress}%`;
    document.getElementById('overall-progress-bar').style.width = `${overallProgress}%`;
    
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
    showNewbieGuide();
    closeSettings();
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
            currentStudySession: null
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
        userData = JSON.parse(savedData);
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

// 更新每日名言
function updateMotivationQuote() {
    const quotes = [
        '"今日学习，明日领袖"',
        '"坚持是成功的关键"',
        '"每天进步一点点，考试高分不是梦"',
        '"逻辑思维是商业决策的基础"',
        '"数学是量化分析的工具"',
        '"英语打开国际视野"',
        '"写作表达思想深度"'
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('motivation-quote').textContent = randomQuote;
}

// 页面卸载前保存数据
window.addEventListener('beforeunload', function() {
    saveUserData();
});