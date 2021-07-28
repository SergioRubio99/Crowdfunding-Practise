import { progress_bar } from "./progress-bar.js";
import { bookmark } from "./bookmark.js";
import { cards } from "./cards.js";
import { animation_btn } from "./cards.js";
import { responsive_card } from "./responsive.js";
import { nav_btn } from './responsive.js'
import { noScroll } from './responsive.js'

// import { unbookmark } from "./bookmark.js";

let d = document;

//Hay que poner .js para que funcione la importación:

bookmark();
progress_bar();
animation_btn();
cards();
nav_btn();
// responsive_card();

// window.addEventListener('scroll', noScroll);
// // Remove listener to re-enable scroll
// // window.removeEventListener('scroll', noScroll);
// if (window.innerWidth < 500) {
//     // alert('Removing scrolling event!')
//     // window.removeEventListener('scroll', noScroll);

// }

window.addEventListener('load', noScroll);

setInterval(() => {
    if (window.innerWidth < 769) {
        console.log('Scrolling function!')
            // window.scrollTo(-200, -200);
    }
}, 1);