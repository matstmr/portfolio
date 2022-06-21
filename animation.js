/* SCROLL UP */

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/* SCROLL HOME */

function showMouse() {
    const showMouse = document.getElementById('home-scroll');
    if (this.scrollY >= 200) showMouse.classList.add('show-mouse'); else showMouse.classList.remove('show-mouse')
}
window.addEventListener('scroll', showMouse)

/*ANIMATION AU DEBUT*/
const nav = document.querySelectorAll('.nav');
const homeContainer = document.querySelector('.home-container');

window.addEventListener('load', () => {

  const TL = gsap.timeline({paused : true})

  TL
  .staggerFrom(nav, 1, {top : -50, opacity : 0, ease :"power2.out"}, 0.2)
  .staggerFrom(homeContainer,1, {top : -60, opacity : 0, ease : "power2.out"}, 0.2, '-=1')

  TL.play();
})