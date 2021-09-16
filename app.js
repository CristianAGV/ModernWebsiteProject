const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener("click", mobileMenu)

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const home = document.querySelector('#home-page')
    const about = document.querySelector('#about-page')
    const services = document.querySelector('#services-page')
    let scrollPos = window.scrollY

    if(window.innerWidth > 960 && scrollPos < 600){
        home.classList.add('highlight')
        about.classList.remove('highlight')
        services.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        about.classList.add('highlight')
        home.classList.remove('highlight')
        services.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345){
        services.classList.add('highlight')
        about.classList.remove('highlight')
        home.classList.remove('highlight')
        return
    }

    if (elem && window.innerWidth < 960 && scrollPos < 600){
        elem.classList.remove('highlight')
    }

}

window.addEventListener('scroll', highlightMenu)

const hideMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.remove('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMenu)
navLogo.addEventListener('click', hideMenu)