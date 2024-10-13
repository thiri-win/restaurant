const toggle = document.querySelector("#toggle")
const menu = document.querySelector("#menu")

toggle.onclick = () => {
    toggle.querySelector("i").classList.toggle("fa-xmark")
    menu.classList.toggle('hidden')
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        'items': 4,
        'margin': 30,
        'autoplay': true,
        'autoplayTimeout': 3000,
        'autoplayHoverPause': true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1100: {
                items: 4
            }
        }
    });
});


const up = document.querySelector("#up");
up.onclick = () => {
    window.scrollTo(0,0)
}

window.onscroll = () => {
    if(window.scrollY > 1000) {
        up.classList.remove('hidden')
    } else {
        up.classList.add('hidden')
    }
}