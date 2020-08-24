const hambuger = document.getElementById('hamburger')
const navUl = document.getElementById('nav-ul')
hambuger.addEventListener('click', () => {
  navUl.classList.toggle('show')


})

// gsap.from('.navigation', { duration: 1, y: "-100%", ease: "power2" });
// gsap.from('.hero', { duration: 2, y: "-20%", ease: "power2", stagger: 0.1 })