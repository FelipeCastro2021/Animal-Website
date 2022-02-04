const wrapper = document.querySelector('#wrapper')
const anuncios = document.querySelector('#anuncios')
const sidenav = document.querySelector('#sidenav')

const lightMode = document.querySelector('#light')
const darkMode = document.querySelector('#dark')

const mode = document.querySelectorAll('.mode')
const itemsSideNav = document.querySelectorAll('#sidenav ul li a')
const paragraphs = document.querySelectorAll('.paragraph')
const labels = document.querySelectorAll('.label')
const menuItems = document.querySelectorAll('.menu-item')

darkMode.addEventListener('click', function () {
  wrapper.classList.add('dark')
  anuncios.classList.add('dark')
  sidenav.classList.add('dark')

  for (let i = 0; i < itemsSideNav.length; i++) {
    itemsSideNav[i].classList.add('dark')
  }

  for (let p = 0; p < paragraphs.length; p++) {
    paragraphs[p].classList.add('dark')
  }

  for (let l = 0; l < labels.length; l++) {
    labels[l].classList.add('dark')
  }

  for (let m = 0; m < menuItems.length; m++) {
    menuItems[m].classList.add('dark')
  }
})

lightMode.addEventListener('click', function () {
  wrapper.classList.remove('dark')
  anuncios.classList.remove('dark')
  sidenav.classList.remove('dark')

  for (let i = 0; i < itemsSideNav.length; i++) {
    itemsSideNav[i].classList.remove('dark')
  }

  for (let p = 0; p < paragraphs.length; p++) {
    paragraphs[p].classList.remove('dark')
  }

  for (let l = 0; l < labels.length; l++) {
    labels[l].classList.remove('dark')
  }

  for (let m = 0; m < menuItems.length; m++) {
    menuItems[m].classList.remove('dark')
  }
})

/* ScrollReveal - Elementos da página aparece conforme rola-se a tela */
const scrollReveal = ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 900,
  reset: false
})

scrollReveal.reveal(
  `
  #sidenav ul li, 
  #content #titulo, #content #characteristics, 
  #content #attributes,
  #content p, #content img, aside#anuncios,
  #footer
`,
  { reveal: 100 }
)
