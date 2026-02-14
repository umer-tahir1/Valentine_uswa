/* ========================================
   💘 Valentine Proposal - Script
   ======================================== */

// ============ CUSTOMIZATION ============
// Change these to personalize! 💖
const girlfriendName = "❤️";
const yourName = "Forever Yours";
// =======================================

// --- State ---
let noClickCount = 0;
let musicPlaying = false;
let envelopeOpened = false;

// --- Elements ---
const cursorHeart = document.getElementById('cursor-heart');
const heartsBg = document.getElementById('hearts-bg');
const landing = document.getElementById('landing');
const proposal = document.getElementById('proposal');
const celebration = document.getElementById('celebration');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const emotionalMsg = document.getElementById('emotional-msg');
const scrollHint = document.getElementById('scroll-hint');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const proposalTitle = document.getElementById('proposal-title');
const proposalSubtitle = document.getElementById('proposal-subtitle');
const gfNameDisplay = document.getElementById('gf-name-display');

// --- Set Girlfriend Name ---
if (gfNameDisplay) {
    gfNameDisplay.textContent = girlfriendName;
}

// --- No Button Messages ---
const noMessages = [
    "Are you sure? 🥺",
    "Please soch lo… 💔",
    "Aisa na karo… main ro dunga 😭",
    "Mere baghair reh logi? 😔",
    "Dil toot raha hai 💔💔💔",
    "Ek baar aur soch lo... 🥺💕",
    "Main intezaar karunga... 😢",
    "Tumhare bina kuch nahi hai... 💔"
];

// --- Romantic Quotes ---
const romanticQuotes = [
    '"Every love story is beautiful, but ours is my favorite ❤️"',
    '"In all the world, there is no heart for me like yours 💕"',
    '"You are my today and all of my tomorrows 🌹"',
    '"I fell in love the way you fall asleep: slowly, then all at once 💖"',
    '"My heart is, and always will be, yours 💗"',
    '"You are the finest, loveliest, tenderest person I have ever known 🥰"',
    '"I love you more than yesterday, less than tomorrow 💝"',
    '"Tum ho toh sab kuch hai, tum nahi toh kuch nahi 💘"'
];

let currentQuoteIndex = 0;

// ========================================
// CUSTOM HEART CURSOR
// ========================================
document.addEventListener('mousemove', (e) => {
    if (cursorHeart) {
        cursorHeart.style.left = e.clientX + 'px';
        cursorHeart.style.top = e.clientY + 'px';
    }
});

// ========================================
// FLOATING HEARTS BACKGROUND
// ========================================
function createFloatingHeart() {
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '♥️', '🩷'];
    const heart = document.createElement('span');
    heart.classList.add('floating-heart');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 18 + 12) + 'px';
    heart.style.animationDuration = (Math.random() * 8 + 8) + 's';
    heart.style.animationDelay = (Math.random() * 3) + 's';
    // Add slight blur to faraway hearts for depth
    if (Math.random() > 0.6) {
        heart.style.filter = 'blur(1px)';
    }
    heartsBg.appendChild(heart);

    // Cleanup after animation
    const duration = parseFloat(heart.style.animationDuration) + parseFloat(heart.style.animationDelay);
    setTimeout(() => {
        if (heart.parentNode) heart.remove();
    }, duration * 1000 + 500);
}

// Start floating hearts
function startFloatingHearts() {
    // Initial batch
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createFloatingHeart(), i * 400);
    }
    // Continuous
    setInterval(createFloatingHeart, 2000);
}

startFloatingHearts();

// ========================================
// ENVELOPE OPEN
// ========================================
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    if (envelopeOpened) return;
    envelopeOpened = true;

    envelope.classList.add('opened');

    // Show scroll hint after envelope opens
    setTimeout(() => {
        if (scrollHint) {
            scrollHint.classList.add('visible');
        }
        // Auto scroll to proposal section
        setTimeout(() => {
            proposal.scrollIntoView({ behavior: 'smooth' });
        }, 800);
    }, 1000);
}

// ========================================
// YES BUTTON - CELEBRATION
// ========================================
function sayYes() {
    // Play music
    playMusic();

    // Show celebration
    celebration.classList.remove('hidden');
    celebration.classList.add('visible');

    // Heart explosion
    createHeartExplosion();

    // Create continuous celebration hearts
    startCelebrationHearts();

    // Create sparkles
    createSparkles();
}

function createHeartExplosion() {
    const hearts = ['❤️', '💖', '💗', '💕', '💝', '🩷', '💘', '😍', '🥰', '💞'];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const heart = document.createElement('span');
            heart.classList.add('explosion-heart');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = centerX + 'px';
            heart.style.top = centerY + 'px';
            heart.style.fontSize = (Math.random() * 25 + 15) + 'px';

            const angle = (Math.PI * 2 * i) / 40 + (Math.random() - 0.5);
            const distance = Math.random() * 400 + 150;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            const rot = (Math.random() - 0.5) * 720;
            const duration = Math.random() * 1.5 + 1;

            heart.style.setProperty('--tx', tx + 'px');
            heart.style.setProperty('--ty', ty + 'px');
            heart.style.setProperty('--rot', rot + 'deg');
            heart.style.setProperty('--duration', duration + 's');

            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), duration * 1000);
        }, i * 50);
    }
}

function startCelebrationHearts() {
    const container = document.getElementById('celebration-hearts');
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];

    function addHeart() {
        const heart = document.createElement('span');
        heart.classList.add('floating-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 14) + 'px';
        heart.style.animationDuration = (Math.random() * 6 + 5) + 's';
        container.appendChild(heart);

        setTimeout(() => {
            if (heart.parentNode) heart.remove();
        }, 11000);
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(addHeart, i * 300);
    }
    setInterval(addHeart, 1500);
}

function createSparkles() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.width = (Math.random() * 6 + 3) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparkle.style.background = Math.random() > 0.5 ? '#ff6b8a' : '#fff';
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 100);
    }
}

// ========================================
// NO BUTTON - EMOTIONAL SEQUENCE
// ========================================
function sayNo() {
    noClickCount++;

    // Show emotional message
    if (noClickCount <= noMessages.length) {
        emotionalMsg.textContent = noMessages[noClickCount - 1];
        emotionalMsg.style.animation = 'none';
        // Force reflow
        void emotionalMsg.offsetWidth;
        emotionalMsg.style.animation = 'shakeIn 0.5s ease-out';
    }

    // Make YES button grow progressively
    const yesScale = 1 + (noClickCount * 0.08);
    const yesPadding = 15 + (noClickCount * 3);
    const yesFontSize = 1.2 + (noClickCount * 0.08);
    btnYes.style.transform = `scale(${Math.min(yesScale, 1.6)})`;
    btnYes.style.padding = `${Math.min(yesPadding, 22)}px ${Math.min(yesPadding * 1.5, 60)}px`;
    btnYes.style.fontSize = `${Math.min(yesFontSize, 1.7)}rem`;

    // Make NO button shrink
    const noScale = 1 - (noClickCount * 0.08);
    const noFontSize = 1.2 - (noClickCount * 0.06);
    btnNo.style.transform = `scale(${Math.max(noScale, 0.5)})`;
    btnNo.style.fontSize = `${Math.max(noFontSize, 0.7)}rem`;
    btnNo.style.opacity = Math.max(1 - (noClickCount * 0.1), 0.35);

    // After 4 clicks, NO button starts running away on hover
    if (noClickCount >= 4) {
        enableRunAway();
    }

    // After all messages, the NO button becomes almost invisible
    if (noClickCount >= noMessages.length) {
        setTimeout(() => {
            btnNo.style.opacity = '0.2';
            btnNo.style.transform = 'scale(0.3)';
            emotionalMsg.textContent = "Bas YES bol do na… 🥺💖";
            emotionalMsg.style.animation = 'none';
            void emotionalMsg.offsetWidth;
            emotionalMsg.style.animation = 'shakeIn 0.5s ease-out';
        }, 300);
    }

    // Add screen shake effect
    document.body.style.animation = 'none';
    void document.body.offsetWidth;
    document.body.style.animation = 'screenShake 0.3s ease';
}

// Add screen shake keyframes dynamically
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes screenShake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-3px); }
        40% { transform: translateX(3px); }
        60% { transform: translateX(-2px); }
        80% { transform: translateX(2px); }
    }
`;
document.head.appendChild(shakeStyle);

// ========================================
// NO BUTTON RUN AWAY
// ========================================
function enableRunAway() {
    btnNo.addEventListener('mouseenter', runAway);
    btnNo.addEventListener('touchstart', runAway, { passive: true });
}

function runAway() {
    const container = document.getElementById('buttons-container');
    const containerRect = container.getBoundingClientRect();

    // Calculate random position within viewport bounds
    const maxX = Math.min(containerRect.width - btnNo.offsetWidth, 200);
    const maxY = 100;

    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;

    btnNo.style.position = 'relative';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
    btnNo.style.transition = 'left 0.3s ease, top 0.3s ease';
}

// ========================================
// ROMANTIC QUOTES ROTATION
// ========================================
function rotateQuotes() {
    const quoteEl = document.getElementById('romantic-quote');
    if (!quoteEl) return;

    setInterval(() => {
        quoteEl.style.opacity = '0';
        setTimeout(() => {
            currentQuoteIndex = (currentQuoteIndex + 1) % romanticQuotes.length;
            quoteEl.textContent = romanticQuotes[currentQuoteIndex];
            quoteEl.style.opacity = '0.8';
        }, 500);
    }, 5000);
}

rotateQuotes();

// ========================================
// BACKGROUND MUSIC
// ========================================
function playMusic() {
    if (bgMusic) {
        bgMusic.volume = 0.3;
        bgMusic.play().then(() => {
            musicPlaying = true;
            musicToggle.classList.add('playing');
            musicToggle.textContent = '🎵';
        }).catch(err => {
            console.log('Music autoplay blocked:', err);
        });
    }
}

function toggleMusic() {
    if (!bgMusic) return;

    if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
        musicToggle.classList.remove('playing');
        musicToggle.textContent = '🔇';
    } else {
        bgMusic.volume = 0.3;
        bgMusic.play().then(() => {
            musicPlaying = true;
            musicToggle.classList.add('playing');
            musicToggle.textContent = '🎵';
        }).catch(err => {
            console.log('Music play failed:', err);
        });
    }
}

// ========================================
// TRAIL HEARTS ON MOUSE MOVE (subtle)
// ========================================
let trailThrottle = 0;
document.addEventListener('mousemove', (e) => {
    trailThrottle++;
    if (trailThrottle % 8 !== 0) return; // Only every 8th move

    const trail = document.createElement('span');
    trail.textContent = '♥';
    trail.style.position = 'fixed';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '99998';
    trail.style.fontSize = (Math.random() * 10 + 8) + 'px';
    trail.style.color = `hsl(${340 + Math.random() * 30}, 100%, ${60 + Math.random() * 20}%)`;
    trail.style.transition = 'all 1s ease-out';
    trail.style.opacity = '0.8';
    document.body.appendChild(trail);

    requestAnimationFrame(() => {
        trail.style.transform = `translateY(-${30 + Math.random() * 30}px) scale(0)`;
        trail.style.opacity = '0';
    });

    setTimeout(() => trail.remove(), 1100);
});

// ========================================
// TOUCH HEARTS (for mobile)
// ========================================
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const heart = document.createElement('span');
            heart.textContent = ['❤️', '💕', '💖'][i];
            heart.style.position = 'fixed';
            heart.style.left = (touch.clientX + (Math.random() - 0.5) * 40) + 'px';
            heart.style.top = (touch.clientY + (Math.random() - 0.5) * 40) + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '99998';
            heart.style.fontSize = '18px';
            heart.style.transition = 'all 1s ease-out';
            heart.style.opacity = '1';
            document.body.appendChild(heart);

            requestAnimationFrame(() => {
                heart.style.transform = `translateY(-50px) scale(0)`;
                heart.style.opacity = '0';
            });

            setTimeout(() => heart.remove(), 1100);
        }, i * 100);
    }
}, { passive: true });

// ========================================
// PAGE LOAD ANIMATION
// ========================================
window.addEventListener('load', () => {
    // Small delay for dramatic effect
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
});

// Prevent page from being scrolled past proposal before envelope is opened
document.addEventListener('scroll', () => {
    if (!envelopeOpened) {
        const proposalTop = proposal.getBoundingClientRect().top;
        if (proposalTop < window.innerHeight * 0.5) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
});

// ========================================
// CONSOLE EASTER EGG 💝
// ========================================
console.log('%c💘 Made with love 💘', 'font-size: 20px; color: #ff1744;');
console.log('%cThis website was crafted to make someone special smile 😊', 'font-size: 14px; color: #ff6b8a;');
