function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function showToast(advice, fromCache) {
    let container = document.getElementById('toast-container');

    let toast = document.createElement('div');
    if (fromCache) {
        toast.className = 'toast from-cache';
    } else {
        toast.className = 'toast fresh';
    }

    let label = document.createElement('span');
    label.className = 'toast-label';
    label.textContent = fromCache ? 'Z archivu' : 'Cerstve';

    let text = document.createElement('p');
    text.textContent = advice;

    let closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.textContent = 'X';
    closeBtn.onclick = function() {
        toast.remove();
    };

    toast.appendChild(label);
    toast.appendChild(text);
    toast.appendChild(closeBtn);
    container.appendChild(toast);

    let closeTime = randomBetween(3000, 7000);
    setTimeout(function() {
        toast.remove();
    }, closeTime);
}
