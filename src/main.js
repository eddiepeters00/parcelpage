import anime from "animejs";
import { text } from "./modules/module";

console.log(text);


anime({
    targets: 'h1',
    rotate: 360,
    duration: 3000
});


const img = document.createElement('img');
document.body.appendChild(img);
console.log(import.meta);

const imgURL = new URL('./images/lasagne.jpg', import.meta.url);
img.src = imgURL;