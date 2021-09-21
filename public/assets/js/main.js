const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*-- ANIMATE GSAP --*/

/*TEXT*/ 
gsap.from('.home__title', {opacity: 0, duration: 1.5, delay: .5, y: 50})
gsap.from('.home__description', {opacity: 0, duration: 1.5, delay: .7, y: 50})
gsap.from('.home__actions', {opacity: 0, duration: 1.5, delay: .9, y: 50})

/*IMG*/
gsap.from('.screenshot', {opacity: 0, duration: 2, delay: 1.2, y: -40})

/*NAV*/
gsap.from('.nav__logo', {opacity:0, duration: 2.5, delay: 1.5, y: 25});
gsap.from('.nav__toggle', {opacity:0, duration: 2.5, delay: 1.7, y: 25});
gsap.from('.nav__item', {opacity: 0, duration: 2.5, delay: 1.9, y: 25, ease:'expo.out', stagger: .3})
gsap.from('.nav__btn', {opacity:0, duration: 2.5, delay: 2, y: 25});
