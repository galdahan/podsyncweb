function showBannerIfNeeded() {
    let pathComponents = window.location.pathname.split('/').filter(String)
    if (pathComponents.length == 2) {
        let banner = document.getElementById("banner")
        let banner_label = document.getElementById("banner-text")
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
            // Invalid path.
        }
    }
}

showBannerIfNeeded()