// 페이지가 완전히 로드된 후 차트 생성
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('participantChart');
    if (ctx && typeof Chart !== 'undefined') {
        const participantChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2021', '2022', '2023', '2024', '2025'],
            datasets: [{
                label: '참가자 수',
                data: [6650, 8663, 10043, 10112, 9735],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7
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
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + '명';
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

// 실시간 대시보드 업데이트 시뮬레이션
function updateDashboard() {
    // 현재 날짜 기준으로 Day 계산 (데모용)
    const now = new Date();
    const startDate = new Date('2025-07-01'); // 가상의 대회 시작일
    const daysDiff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    
    let currentDay = Math.min(Math.max(1, daysDiff + 1), 10);
    
    // 카메라 상태 업데이트
    const cameraCount = document.querySelector('.camera-count');
    const cameraTotal = document.querySelector('.camera-total');
    if (currentDay < 5) {
        cameraCount.textContent = '30';
        cameraTotal.textContent = '30';
    } else {
        cameraCount.textContent = '20';
        cameraTotal.textContent = '20';
    }
    
    // 크루 상태 업데이트
    const crewCount = document.querySelector('.crew-count');
    crewCount.textContent = currentDay < 5 ? '5' : '20';
    
    // 카운트다운 업데이트
    const countdown = document.querySelector('.countdown');
    if (currentDay < 5) {
        countdown.textContent = `D-${5 - currentDay}`;
    } else {
        countdown.textContent = '진행 중';
    }
}

// DOM 로드 후 대시보드 업데이트
document.addEventListener('DOMContentLoaded', function() {
    updateDashboard();
});

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