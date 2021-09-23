function showBannerIfNeeded() {
    let pathComponents = window.location.pathname.split('/').filter(String)
    if (pathComponents.length == 2) {
        let banner = document.getElementById("banner")
        let banner_label = document.getElementById("banner_text")
        let param = pathComponents[0]
        switch(param) {
        case "user":
            banner.style.display = "block";
            banner_label.innerText = "To view the requested user you must download the app."
            break;
        case "pod":
            banner.style.display = "block";
            banner_label.innerText = "To view the requested event you must download the app."
            break;
        default:
            // code block
        }
    }
}

showBannerIfNeeded()


/*-- ANIMATE GSAP --*/

/*TEXT*/ 
gsap.from('.home__title', {opacity: 0, duration: 1.5, delay: .5, y: 50})
gsap.from('.home__description', {opacity: 0, duration: 1.5, delay: .7, y: 50})
gsap.from('.home__actions', {opacity: 0, duration: 1.5, delay: .9, y: 50})

/*IMG*/
gsap.from('.iphone', {opacity: 0, duration: 2, delay: 1.2, y: -40})

/*NAV*/
gsap.from('.nav__btn', {opacity:0, duration: 2.5, delay: 1.7, y: 25});
gsap.from('.nav__item', {opacity: 0, duration: 2.5, delay: 1.9, y: 25, ease:'expo.out', stagger: .3})


/*DETAILS*/
animate
.from('.details__img', {opacity: 0, y: 25})
.from('.details__box', {opacity: 0, y: 25, duration: 1, ease:'expo.out', stagger: .4})

var scene = new ScrollMagic.Scene({
    triggerElement: ".details__box",
})

.setTween(animate)
.addTo(controller)

function updatePercentage(){
    animate.progress()
}

