// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Add fade-in animation to sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

// Observe all sections
document.querySelectorAll('.section, .intro').forEach(section => {
  observer.observe(section);
});

// Simple typing effect
const typingText = "IT Specialist, Web Developer & Tech Enthusiast";
const typingElement = document.querySelector('.intro-subtitle');
let i = 0;

function typeWriter() {
  if (i < typingText.length) {
    typingElement.textContent += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Start typing effect after 1 second
window.addEventListener('load', () => {
  typingElement.textContent = '';
  setTimeout(typeWriter, 1000);
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 10px 20px rgba(0, 170, 255, 0.2)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'none';
  });
});

// Add fade-in animation CSS
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    animation: fadeIn 0.8s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);