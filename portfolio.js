// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');

    // Function to enable dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
        console.log('Dark mode enabled'); // Debug log
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'disabled');
        console.log('Dark mode disabled'); // Debug log
    }

    // Initialize dark mode based on system preference or saved setting
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');

    if (savedMode === 'enabled') {
        enableDarkMode();
    } else if (savedMode === null && prefersDark) {
        enableDarkMode();
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent any default button behavior
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
        console.log('Button clicked, dark mode:', body.classList.contains('dark-mode')); // Debug log
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('darkMode') === null) {
            if (e.matches) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        }
    });

    // Debug log to verify script initialization
    console.log('Dark mode script initialized');

    function animateElements() {
        // Animate headings
        const headings = document.querySelectorAll('h1, h2');
        headings.forEach((heading, index) => {
            heading.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        });

        // Animate table rows
        const tableRows = document.querySelectorAll('tr');
        tableRows.forEach((row, index) => {
            row.style.animation = `fadeInLeft 0.5s ease forwards ${index * 0.05}s`;
        });

        // Animate images and iframes
        const media = document.querySelectorAll('img, iframe');
        media.forEach((item, index) => {
            item.style.animation = `fadeInScale 0.5s ease forwards ${index * 0.1}s`;
        });
    }

    // Add these animation keyframes to your CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);

    // Add smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effects for table rows
    const tableRows = document.querySelectorAll('table tr:not(:first-child)');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'scale(1.02)';
            row.style.transition = 'transform 0.3s ease';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'scale(1)';
        });
    });
}); 