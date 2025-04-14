window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.animated-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleFAQ(element) {
    element.classList.toggle('open');
    const icon = element.querySelector('.faq-icon');
    icon.textContent = element.classList.contains('open') ? '—' : '+';
}

// $(document).ready(function () {
//     $("#hero-carousel").owlCarousel({
//         items: 1,
//         loop: true,
//         stagePadding: 0,
//         margin: 0,
//         autoplay: true,
//         autoPlayTimeout: 4000,
//         smartSpeed: 800,
//         dots: true,
//         nav: false
//     });
// });

$(document).ready(function(){
    var owl = $("#hero-carousel");

    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 2000,
        nav: false,
        dots: true,
    });

    $(".slider-button.prev").click(function(){
        owl.trigger("prev.owl.carousel");
    });

    $(".slider-button.next").click(function(){
        owl.trigger("next.owl.carousel");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const openBtn = document.getElementById("openSidebar");
    const closeBtn = document.getElementById("closeSidebar");

    function toggleCloseButton() {
        if (window.innerWidth >= 992) {
            closeBtn.style.display = "none";
            sidebar.classList.remove("show-sidebar"); 
            overlay.classList.remove("show-overlay");
        } else {
            closeBtn.style.display = "block"; 
        }
    }

    // Jalankan saat halaman dimuat
    toggleCloseButton();

    // Jalankan saat layar di-resize
    window.addEventListener("resize", toggleCloseButton);

    openBtn.addEventListener("click", function () {
        if (window.innerWidth < 992) { // Pastikan sidebar hanya bisa dibuka di mobile
            sidebar.classList.add("show-sidebar");
            overlay.classList.add("show-overlay");
        }
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("show-sidebar");
        overlay.classList.remove("show-overlay");
    });

    overlay.addEventListener("click", function () {
        sidebar.classList.remove("show-sidebar");
        overlay.classList.remove("show-overlay");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 1; // Mulai dari testimonial pertama
    const totalTestimonials = 5; // Jumlah total testimonial
    const intervalTime = 3000; // Waktu per slide (ms)

    function nextSlide() {
        document.getElementById(`t-${currentIndex}`).checked = true;
        currentIndex = (currentIndex % totalTestimonials) + 1; // Loop kembali ke awal
    }

    if (window.innerWidth <= 375) {
        setInterval(nextSlide, intervalTime);
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     let currentIndex = 1; 
//     const totalTestimonials = 5;
//     const intervalTime = 2000;

//     function nextSlide() {
//         document.getElementById(t-${currentIndex}).checked = true;
//         currentIndex = (currentIndex % totalTestimonials) + 1;
//     }

//     if (window.innerWidth <= 375) {
//         setInterval(nextSlide, intervalTime);
//     }
// });