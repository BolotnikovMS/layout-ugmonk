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

  // Fixing navigation on scroll
  const headerFixed = (selectorHeader, selectorNextSection, classFixed) => {
    const header = document.querySelector(selectorHeader)
    const nextSection = document.querySelector(selectorNextSection)
    let scrollTop = window.scrollY

    if (scrollTop > header.offsetHeight) {
      header.classList.add(classFixed)
      nextSection.style.marginTop = `${header.offsetHeight}px`
    } else {
      header.classList.remove(classFixed)
      nextSection.style.marginTop = `0px`
    }
  }

  headerFixed('.header', '.home', 'header-fixed')
  window.addEventListener('scroll', () => {
    headerFixed('.header', '.home', 'header-fixed')
  })
})
