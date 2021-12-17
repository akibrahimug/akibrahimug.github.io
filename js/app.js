
// page elements
const body = document.getElementById('home'); //body
const navbar = document.querySelector('.navbar') //navbar
const slider = document.getElementById('slider') //dark and light mode toggle
const navbutton = document.querySelector('.navbar-toggler') //navigation button
const brandName = document.querySelector('.navbar-brand') //navbar brand
const offcanvasNav = document.querySelector('.offcanvas-body') //offcanvas menue
const offcanvasBottom = document.querySelector('.bottom-offcanvas') // bottom offcanvas
const bottomHeader = document.querySelector('.bottom-header') //bottom offcanvas header
const navItems = document.querySelectorAll('.accordion-header') // nav item
const accordionButtons =document.querySelectorAll('a.nav-link.accordion-button') // accordian button
const heroSection = document.querySelector('.hero') //hero section

const handleMode = () => {
    if(slider.checked){
        body.classList.add('light-background') //body background
        navbar.classList.add('bg-light') //nav-bar background
        navbutton.classList.add('light-border') // nav button 
        brandName.classList.add('dark-text') //navbar brand color
        offcanvasNav.classList.add('light-background') //offcanvas menue
        offcanvasBottom.classList.add('light-background') //bottom offcanvas

        navItems.forEach(item => {// Each nav item
            item.style.backgroundColor = '#fff'
            item.style.borderColor = 'black'
        })

        accordionButtons.forEach(button => { // Each accordian button
            button.style.backgroundColor = '#fff'
        })

        heroSection.style.backgroundImage = 'none' //hero section

        bottomHeader.style.backgroundColor = 'rgb(97, 192, 255)' //bottom offcanvas header

    }else if(!slider.checked){
        body.classList.remove('light-background') // body background
        navbar.classList.remove('bg-light') // naav-bar background
        navbutton.classList.remove('light-border')
        brandName.classList.remove('dark-text') //navbar brand color
        offcanvasNav.classList.remove('light-background') //offcanvas menue
        offcanvasBottom.classList.remove('light-background') //bottom offcanvas

        accordionButtons.forEach(button => { //Each accordian button
            button.style.backgroundColor = 'rgb(97, 192, 255)'
        })

        navItems.forEach(item => { // Each nav items
            item.style.backgroundColor = 'rgb(97, 192, 255)'
            item.style.borderColor = 'none'
        })

        heroSection.style.backgroundImage = "url('/css/dark-mode.jpg')" //hero section


        bottomHeader.style.backgroundColor = 'black' //bottom offcanvas header
    }
}

handleModeO()