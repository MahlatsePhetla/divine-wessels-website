
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});



 AOS.init({
    duration: 2000, 
    once: true,     
  });


  const slides = document.querySelectorAll('.testimonial-slide');
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  const offset = -currentIndex * 100;
  slides.forEach(slide => {
    slide.style.transform = `translateX(${offset}%)`;
  });
}

// Slide every 4 seconds
setInterval(showNextSlide, 3000);


// Form content 

  (function(){
    emailjs.init("5_xi_p4XBgvcFGh1g"); 
  })();

  document.getElementById("quoteForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_41g6kvl", "template_npyr6fl", this)
      .then(function() {
        alert(" Request sent successfully! We’ll contact you soon.");
      }, function(error) {
        alert(" Failed to send. Please try again.");
        console.log(error);
      });
  });