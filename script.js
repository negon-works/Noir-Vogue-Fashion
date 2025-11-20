// Smooth scroll
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>{
  if(window.scrollY>50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// GSAP ScrollTrigger for Collections sliding over Hero
gsap.to(".collections",{
  y: "-100%",
  ease: "none",
  scrollTrigger:{
    trigger:".collections",
    start:"top bottom",
    end:"top top",
    scrub:true
  }
});
