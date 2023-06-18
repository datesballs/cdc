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


// Båd animationen

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    }); {rootMargin: "0px 0px -500px 0px"}
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//<<<<<<< HEAD
// kode for maps
 
// erklæring af variabel - henter geografiske koordinater + zoomniveau
let map = L.map('maps').setView([57.07099, 9.94716], 19);

// henter URL, for at kortet kan blive vist ift. open sours 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    // angivelse af maxzoom
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    // hvor langt der er fra kanten af
    tileSize: 512,
    zoomOffset: -1,
    // access token til at bruge maps 
    accessToken: 'pk.eyJ1IjoibWVsaXNhbWFzbGljIiwiYSI6ImNsMzhuMHNmeTAxZ2wzY21rZWpqaDBsdHEifQ.okesO0TuRF4HcdpOFAWJkQ'
}).addTo(map);
