document.addEventListener('DOMContentLoaded', () => {
  // AOS
  AOS.init({
    once: false,
    duration: 1000,
  })

  // Mobile nav
  const navBtn = document.querySelector('.nav__toggle')
  const menuIcon = document.querySelector('.menu-icon')
  const nav = document.querySelector('.nav')

  navBtn.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon-active')
    nav.classList.toggle('nav--mobile')
    document.body.classList.toggle('no-scroll')
  })
})
