function toggleMenu(menu) {
    menu.classList.toggle('show');
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // direction: Horizontal giver sig selv, at swiperen er horisontal og ikke vertical
    loop: true,
    // Den er i et "infinte" loop, altså den bliver ved med at køre uanset.
    slidesPerView: 4,
    // Dette er standarden for 1920px altså desktop her bliver der vist 4 slides uanset
    speed: 2000,
    // her er hastigheden på når den skifter mellem slides på 2sekunder
    autoplay: {
        delay: 5000,
    //     delay er hvor mange sekunder der går før den automatisk slider til højre. Her er den sat til 5sek
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
        //     slidesPerView viser hvor mange slides der skal vises
        //     i det pågældende breakpoint her skal der vises ét med et breakpoint på 375px
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },

        1366: {
            slidesPerView: 3,
        },

        1400: {
            slidesPerView: 4,

        }
    }
});

