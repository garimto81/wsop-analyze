// 페이지가 완전히 로드된 후 차트 생성
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('participantChart');
    if (ctx && typeof Chart !== 'undefined') {
        const participantChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6-9', 'Day 10'],
            datasets: [{
                label: '참가자 수',
                data: [10000, 5000, 1500, 500, 150, 50, 9],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: function(context) {
                    const index = context.dataIndex;
                    return index === 4 ? '#e74c3c' : '#3498db'; // Day 5를 빨간색으로
                },
                pointBorderColor: function(context) {
                    const index = context.dataIndex;
                    return index === 4 ? '#e74c3c' : '#3498db';
                },
                pointBorderWidth: function(context) {
                    const index = context.dataIndex;
                    return index === 4 ? 3 : 2;
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    type: 'logarithmic',
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + '명';
                        }
                    }
                }
            },
            plugins: {
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            xMin: 4,
                            xMax: 4,
                            borderColor: 'rgb(255, 99, 132)',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            label: {
                                enabled: true,
                                content: 'Day 5 전환점',
                                position: 'start'
                            }
                        }
                    }
                }
            }
        }
    });
    }
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 체크리스트 저장/로드 기능
const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
checkboxes.forEach((checkbox, index) => {
    // 로컬 스토리지에서 상태 로드
    const savedState = localStorage.getItem(`checkbox-${index}`);
    if (savedState === 'true') {
        checkbox.checked = true;
    }
    
    // 체크박스 상태 변경 시 저장
    checkbox.addEventListener('change', function() {
        localStorage.setItem(`checkbox-${index}`, this.checked);
    });
});

// 페이지 로드 완료 이벤트

// 타임라인 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
});

// 네비게이션 활성화 표시
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});