let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');
let body = document.querySelector('body');


window.onload = function () {
    if (window.navigator.onLine) {
        online();
    } else {
        offline();
    }
}

window.addEventListener("online", function () {
    online();
});

window.addEventListener("online", function () {
    offline();
});

reload.onclick = function () {
    window.location.reload();
}

function online() {
    title.innerHTML = 'Online Now';
    body.style.background = '#2be63e';
    title.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}

function offline() {
    title.innerHTML = 'Offline Now';
    body.style.background = '#f34747';
    title.style.color = '#9f1515';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}