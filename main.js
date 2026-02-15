import { fetchAdvice } from './api.js';
import { showToast } from './ui.js';

let cache = [];
let counter = 0;

async function generateNotification() {
    counter++;

    if (counter % 3 == 0 && cache.length > 0) {
        let random = Math.floor(Math.random() * cache.length);
        showToast(cache[random], true);
    } else {
        let data = await fetchAdvice();
        cache.push(data.advice);
        showToast(data.advice, false);
    }
}

generateNotification();
setInterval(generateNotification, 6000);
