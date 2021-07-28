import { progress_bar } from "./progress-bar.js";
import { bookmark } from "./bookmark.js";
import { cards } from "./cards.js";
import { animation_btn } from "./cards.js";
import { responsive_card } from "./responsive.js";
import { nav_btn } from './responsive.js'
// import { unbookmark } from "./bookmark.js";

let d = document;

//Hay que poner .js para que funcione la importación:

bookmark();
progress_bar();
animation_btn();
cards();
nav_btn();
// responsive_card();