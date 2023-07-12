// Scroll to top

let scrolltotop = () => {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 150) {
        document.querySelector(".scrolltotop").classList.add("scrolltotop_2");
    }
    else {
        document.querySelector(".scrolltotop").classList.remove("scrolltotop_2");
    }
});


// Menubar

let showmenubar = () => {
    document.querySelector("nav").classList.toggle("nav_2");
    document.querySelector(".menubar").classList.toggle("menubar_2");
}

// Animation

let properties = document.querySelectorAll(".properties_types a");

window.addEventListener('scroll', () => {
    for (i = 0; i < properties.length; i++) {
        if (pageYOffset > 250) {
            properties[i].style.transform = 'scaleY(1)';
            properties[i].style.opacity = '1';
        }
        else {
            properties[i].style.transform = 'scaleY(0)';
            properties[i].style.opacity = '0';
        }
    }
});

let hotels = document.querySelectorAll(".homes a");
window.addEventListener('scroll', () => {
    for (i = 0; i < hotels.length; i++) {
        if (pageYOffset > 650) {
            hotels[i].style.transform = 'scaleX(1)';
            hotels[i].style.opacity = '1';
        }
        else {
            hotels[i].style.transform = 'scaleX(0)';
            hotels[i].style.opacity = '0';
        }
    }

});
let subscribe = document.querySelector(".subscribe");
window.addEventListener('scroll', () => {
    if (pageYOffset > 1200) {
        subscribe.style.transform = "scale(1)";
        subscribe.style.opacity = '1';
    }
    else {
        subscribe.style.transform = "scale(0)";
        subscribe.style.opacity = '0';
    }
})



// Dark Mode

let darkmode = () => {
    document.querySelector('body').classList.toggle("body_2");
    document.querySelector('.darkmode').classList.toggle("darkmode_2");
    document.querySelector('.darkmode span').classList.toggle("span_2");
    document.querySelector(".scrolltotop").classList.toggle("scrolltotop_black");
    document.querySelector(".properties_heading").classList.toggle("colors_2");
    document.querySelector(".homes_heading").classList.toggle("colors_2");

    let footer = document.querySelectorAll("footer a");
    for (i = 0; i < footer.length; i++) {
        footer[i].classList.toggle("colors_2");
    }

    let homesHeading = document.querySelectorAll(".homes .homes_info");
    for (i = 0; i < homesHeading.length; i++) {
        homesHeading[i].classList.toggle("colors_2");
    }

    let properties_heading = document.querySelectorAll(".hotels_heading");
    for (i = 0; i < properties_heading.length; i++) {
        properties_heading[i].classList.toggle("colors_2");
    }
}