
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
const accordianBody = document.querySelectorAll('.accordion-body')
const heroSection = document.querySelector('.hero') //hero section
const cardBody = document.querySelectorAll('.card-body') // Project card body
const cardimages = document.querySelectorAll('.card-img-top')
const bio = document.querySelector('.brif-bio')
const scrollingP = document.querySelector('.scrolling-p')
const btnCloseBtm =document.querySelector('.btn-bottom')

const handleMode = () => {
    if(slider.checked){
        body.classList.add('light-background') //body background
        navbar.classList.add('bg-light') //nav-bar background
        navbutton.classList.add('light-border') // nav button 
        brandName.classList.add('dark-text') //navbar brand color
        offcanvasNav.classList.add('bg-light') //offcanvas menue
        offcanvasBottom.classList.add('light-background') //bottom offcanvas

        navItems.forEach(item => {// Each nav item
            item.style.backgroundColor = 'transparent'
            item.style.borderColor = "#000"
        })

        accordionButtons.forEach(button => { // Each accordian button
            button.style.backgroundColor = 'transparent'
        })

        heroSection.style.backgroundImage = 'none' //hero section

        bottomHeader.classList.add('light-background') //bottom offcanvas header

        cardBody.forEach(item =>{
            item.style.backgroundColor = '#fff'
            item.style.color = '#000'
        })

        cardimages.forEach((card, index) =>{
            card.src = `/img/project-${index + 1}-lightmode.jpg`
        })

        bio.classList.add('dark-text')

        scrollingP.classList.add('dark-text');
        scrollingP.style.border = "none"

        btnCloseBtm.classList.remove('btn-close-white')

    }else if(!slider.checked){
        body.classList.remove('light-background') // body background
        navbar.classList.remove('bg-light') // naav-bar background
        navbutton.classList.remove('light-border')
        brandName.classList.remove('dark-text') //navbar brand color
        offcanvasNav.classList.remove('bg-light') //offcanvas menue
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

        cardBody.forEach(item =>{
            item.style.backgroundColor = '#000'
            item.style.color = '#fff'
        })

        cardimages.forEach((card, index) =>{
            card.src = `/img/project-${index + 1}-darkmode.jpg`
        })

        bio.classList.remove('dark-text')

        btnCloseBtm.classList.add('btn-close-white');


    }
}
