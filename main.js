import { fetchAdvice } from './api.js';
import { showToast } from './ui.js';

async function generateNotification() {
    let data = await fetchAdvice();
    showToast(data.advice);
}

generateNotification();
