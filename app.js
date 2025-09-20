let currentUser = null;
let currentRole = 'teacher';
let currentChart = null;
let currentSubject = 'mathematics';
let currentChartType = 'performance';

// Chart data for different subjects and chart types
const chartData = {
    mathematics: {
        performance: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Class Average (%)',
                data: [78, 82, 85, 79, 88, 91],
                borderColor: '#14b8a6',
                backgroundColor: 'rgba(20, 184, 166, 0.1)',
                tension: 0.4,
                fill: true
            }, {
                label: 'Top Performers (%)',
                data: [92, 94, 96, 91, 98, 99],
                borderColor: '#06b6d4',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                tension: 0.4,
                fill: false
            }]
        },
        attendance: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Present',
                data: [28, 30, 27, 29, 31],
                backgroundColor: '#10b981'
            }, {
                label: 'Absent',
                data: [2, 0, 3, 1, 1],
                backgroundColor: '#ef4444'
            }]
        },
        assignments: {
            labels: ['Assignment 1', 'Assignment 2', 'Quiz 1', 'Assignment 3', 'Mid-term', 'Quiz 2'],
            datasets: [{
                label: 'Submission Rate (%)',
                data: [95, 88, 92, 87, 96, 94],
                backgroundColor: ['#14b8a6', '#06b6d4', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444']
            }]
        }
    },
    physics: {
        performance: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Class Average (%)',
                data: [72, 75, 78, 81, 83, 87],
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        attendance: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Present',
                data: [26, 28, 25, 27, 29],
                backgroundColor: '#8b5cf6'
            }, {
                label: 'Absent',
                data: [4, 2, 5, 3, 1],
                backgroundColor: '#ef4444'
            }]
        },
        assignments: {
            labels: ['Lab Report 1', 'Problem Set 1', 'Lab Report 2', 'Quiz 1', 'Problem Set 2'],
            datasets: [{
                label: 'Submission Rate (%)',
                data: [89, 92, 85, 88, 91],
                backgroundColor: ['#8b5cf6', '#14b8a6', '#f59e0b', '#06b6d4', '#10b981']
            }]
        }
    },
    chemistry: {
        performance: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Class Average (%)',
                data: [76, 79, 82, 78, 85, 89],
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        attendance: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Present',
                data: [27, 29, 26, 28, 30],
                backgroundColor: '#f59e0b'
            }, {
                label: 'Absent',
                data: [3, 1, 4, 2, 0],
                backgroundColor: '#ef4444'
            }]
        },
        assignments: {
            labels: ['Experiment 1', 'Theory Quiz', 'Experiment 2', 'Problem Set', 'Mid-term'],
            datasets: [{
                label: 'Submission Rate (%)',
                data: [93, 87, 90, 85, 94],
                backgroundColor: ['#f59e0b', '#14b8a6', '#8b5cf6', '#06b6d4', '#10b981']
            }]
        }
    },
    biology: {
        performance: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Class Average (%)',
                data: [81, 84, 87, 85, 90, 93],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        attendance: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Present',
                data: [29, 31, 28, 30, 32],
                backgroundColor: '#10b981'
            }, {
                label: 'Absent',
                data: [1, 0, 2, 0, 0],
                backgroundColor: '#ef4444'
            }]
        },
        assignments: {
            labels: ['Lab Report', 'Research Paper', 'Field Study', 'Quiz 1', 'Project'],
            datasets: [{
                label: 'Submission Rate (%)',
                data: [96, 89, 92, 94, 88],
                backgroundColor: ['#10b981', '#14b8a6', '#f59e0b', '#8b5cf6', '#06b6d4']
            }]
        }
    },
    english: {
        performance: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Class Average (%)',
                data: [83, 86, 84, 88, 91, 89],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        attendance: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Present',
                data: [31, 29, 30, 32, 30],
                backgroundColor: '#ef4444'
            }, {
                label: 'Absent',
                data: [1, 3, 2, 0, 2],
                backgroundColor: '#6b7280'
            }]
        },
        assignments: {
            labels: ['Essay 1', 'Reading Quiz', 'Poetry Analysis', 'Essay 2', 'Presentation'],
            datasets: [{
                label: 'Submission Rate (%)',
                data: [91, 95, 88, 93, 87],
                backgroundColor: ['#ef4444', '#14b8a6', '#8b5cf6', '#f59e0b', '#06b6d4']
            }]
        }
    },
    computer: {
        performance: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Class Average (%)',
                data: [75, 79, 83, 86, 89, 92],
                borderColor: '#06b6d4',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        attendance: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Present',
                data: [24, 26, 23, 25, 27],
                backgroundColor: '#06b6d4'
            }, {
                label: 'Absent',
                data: [4, 2, 5, 3, 1],
                backgroundColor: '#ef4444'
            }]
        },
        assignments: {
            labels: ['Coding Project 1', 'Algorithm Quiz', 'Database Design', 'Web Project', 'Final Project'],
            datasets: [{
                label: 'Submission Rate (%)',
                data: [87, 92, 89, 85, 94],
                backgroundColor: ['#06b6d4', '#14b8a6', '#8b5cf6', '#f59e0b', '#10b981']
            }]
        }
    }
};

function createChart() {
    const canvas = document.getElementById('performanceChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (currentChart) {
        currentChart.destroy();
    }
    
    const data = chartData[currentSubject][currentChartType];
    let chartType = 'line';
    
    if (currentChartType === 'attendance') {
        chartType = 'bar';
    } else if (currentChartType === 'assignments') {
        chartType = 'doughnut';
    }
    
    try {
        currentChart = new Chart(ctx, {
            type: chartType,
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff',
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                scales: chartType !== 'doughnut' ? {
                    x: {
                        ticks: {
                            color: '#9ca3af'
                        },
                        grid: {
                            color: 'rgba(156, 163, 175, 0.1)'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#9ca3af'
                        },
                        grid: {
                            color: 'rgba(156, 163, 175, 0.1)'
                        }
                    }
                } : {}
            }
        });
    } catch (error) {
        console.log('Chart initialization error:', error);
        // Fallback display if Chart.js fails
        const container = document.querySelector('.chart-container');
        container.innerHTML = `
            <div style="color: #14b8a6; text-align: center; padding: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📊</div>
                <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">Interactive ${currentChartType.charAt(0).toUpperCase() + currentChartType.slice(1)} Chart</div>
                <div style="font-size: 0.9rem; color: #9ca3af;">Subject: ${currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)}</div>
                <div style="margin-top: 1rem; font-size: 0.8rem; color: #6b7280;">Chart data loading...</div>
            </div>
        `;
    }
}

// Initialize chart when Chart.js is loaded
function initializeChart() {
    if (typeof Chart !== 'undefined') {
        createChart();
    } else {
        setTimeout(initializeChart, 100);
    }
}

// Role selection
document.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentRole = this.dataset.role;
    });
});

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Subject tabs
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('subject-tab')) {
        document.querySelectorAll('.subject-tab').forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active');
        currentSubject = e.target.dataset.subject;
        createChart();
    }
});

// Chart tabs
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('chart-tab')) {
        document.querySelectorAll('.chart-tab').forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active');
        currentChartType = e.target.dataset.chart;
        createChart();
    }
});

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }
    
    // Simulate login
    currentUser = {
        name: username,
        role: currentRole
    };
    
    // Update dashboard based on role
    updateDashboard();
    
    // Hide login, show dashboard
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('dashboard').classList.add('active');
    
    // Initialize chart after a short delay to ensure DOM is ready
    setTimeout(() => {
        initializeChart();
    }, 300);
}

function updateDashboard() {
    const dashboardTitle = document.getElementById('dashboardTitle');
    const userName = document.getElementById('userName');
    const userAvatar = document.getElementById('userAvatar');
    
    dashboardTitle.textContent = `${currentRole.charAt(0).toUpperCase() + currentRole.slice(1)} Dashboard`;
    userName.textContent = currentUser.name;
    userAvatar.textContent = currentUser.name.substring(0, 2).toUpperCase();
}

function logout() {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('dashboard').classList.remove('active');
    currentUser = null;
}

// Chat functionality
function sendMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const messageText = input.value.trim();
    
    if (!messageText) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = messageText;
    messages.appendChild(userMessage);
    
    // Simulate AI response
    setTimeout(() => {
        const aiMessage = document.createElement('div');
        aiMessage.className = 'chat-message ai';
        aiMessage.textContent = getAIResponse(messageText);
        messages.appendChild(aiMessage);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
    
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
}

function getAIResponse(message) {
    const responses = [
        "I can help you with attendance tracking, assignment management, and resource booking.",
        "Would you like me to generate a performance report for your class?",
        "I can assist with creating interactive quizzes and managing classroom resources.",
        "Let me help you analyze student engagement patterns and suggest improvements.",
        "I can provide insights on optimal resource allocation for your lessons.",
        "Based on the data, I notice some students might need additional support. Would you like specific recommendations?",
        "I can help you schedule makeup sessions for students who missed classes.",
        "The current assignment completion rate is excellent! Would you like to create a new assignment?",
        "I can generate detailed analytics for parent-teacher conferences.",
        "Would you like me to send automated reminders to students about upcoming deadlines?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Allow Enter key for chat
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Allow Enter key for login
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                login();
            }
        });
    }
});