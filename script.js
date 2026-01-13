document.addEventListener('DOMContentLoaded', function() {
    // Audio setup
    const audio = document.getElementById('backgroundMusic');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const volumeUp = document.getElementById('volumeUp');
    const volumeDown = document.getElementById('volumeDown');
    const volumeLevel = document.getElementById('volumeLevel');
    
    // Set initial volume
    audio.volume = 0.5;
    updateVolumeDisplay();
    
    // Play music
    playBtn.addEventListener('click', function() {
        audio.play().catch(e => {
            console.log("Autoplay prevented. User interaction required.");
            alert("Please click 'Play Music' to start the audio.");
        });
        this.innerHTML = '<i class="fas fa-play"></i> Playing...';
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-play"></i> Play Music';
        }, 1500);
    });
    
    // Pause music
    pauseBtn.addEventListener('click', function() {
        audio.pause();
        this.innerHTML = '<i class="fas fa-pause"></i> Paused';
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-pause"></i> Pause';
        }, 1500);
    });
    
    // Increase volume
    volumeUp.addEventListener('click', function() {
        if (audio.volume < 1) {
            audio.volume = Math.min(1, audio.volume + 0.1);
            updateVolumeDisplay();
        }
    });
    
    // Decrease volume
    volumeDown.addEventListener('click', function() {
        if (audio.volume > 0) {
            audio.volume = Math.max(0, audio.volume - 0.1);
            updateVolumeDisplay();
        }
    });
    
    // Update volume display
    function updateVolumeDisplay() {
        volumeLevel.textContent = `${Math.round(audio.volume * 100)}%`;
    }
    
    // Create hearts
    function createHearts() {
        const heartsContainer = document.querySelector('.hearts-container');
        const heartCount = 50;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            
            // Random size for hearts
            const sizes = ['small', 'medium', 'large'];
            const size = sizes[Math.floor(Math.random() * sizes.length)];
            
            // Set heart class based on size
            if (size === 'small') {
                heart.classList.add('heart', 'small');
            } else if (size === 'medium') {
                heart.classList.add('heart', 'medium');
            } else {
                heart.classList.add('heart');
            }
            
            // Random position
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            
            heart.style.left = `${left}%`;
            heart.style.top = `${top}%`;
            
            // Random color
            const colors = ['#ff0080', '#ff3333', '#ff6b9d', '#ff9a3d', '#ffd166'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.backgroundColor = color;
            
            // Random animation delay
            const delay = Math.random() * 5;
            heart.style.animationDelay = `${delay}s`;
            
            heartsContainer.appendChild(heart);
            
            // Make hearts move
            animateHeart(heart);
        }
    }
    
    // Animate heart movement
    function animateHeart(heart) {
        let posX = parseFloat(heart.style.left);
        let posY = parseFloat(heart.style.top);
        let speedX = (Math.random() - 0.5) * 0.5;
        let speedY = (Math.random() - 0.5) * 0.5;
        
        function moveHeart() {
            posX += speedX;
            posY += speedY;
            
            // Bounce off edges
            if (posX <= 0 || posX >= 100) speedX *= -1;
            if (posY <= 0 || posY >= 100) speedY *= -1;
            
            heart.style.left = `${posX}%`;
            heart.style.top = `${posY}%`;
            
            requestAnimationFrame(moveHeart);
        }
        
        moveHeart();
    }
    
    // Create floating hearts
    createHearts();
    
    // Add more hearts every 10 seconds
    setInterval(() => {
        const heartsContainer = document.querySelector('.hearts-container');
        if (heartsContainer.children.length < 100) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Random size
            if (Math.random() > 0.7) {
                heart.classList.add('medium');
            } else if (Math.random() > 0.5) {
                heart.classList.add('small');
            }
            
            // Random position
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            
            // Random color
            const colors = ['#ff0080', '#ff3333', '#ff6b9d', '#ff9a3d'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.backgroundColor = color;
            
            // Random animation delay
            const delay = Math.random() * 5;
            heart.style.animationDelay = `${delay}s`;
            
            heartsContainer.appendChild(heart);
            animateHeart(heart);
        }
    }, 10000);
    
    // Text animation enhancement
    const words = document.querySelectorAll('.word');
    words.forEach(word => {
        word.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.3) translateY(-15px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        word.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
    
    // Background lighting effect
    const container = document.querySelector('.container');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        container.style.background = `
            radial-gradient(
                circle at ${x * 100}% ${y * 100}%,
                rgba(255, 0, 128, 0.1) 0%,
                rgba(26, 26, 46, 0.8) 40%,
                #0c0c0c 70%
            )
        `;
    });
});
