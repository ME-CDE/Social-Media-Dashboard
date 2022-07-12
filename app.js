const toggle = document.getElementById('changes');
const body = document.querySelector('body');
const headingBG = document.querySelector(".head-background");
const colorBlue = document.querySelectorAll(".color-blue");
const colorAshBlue = document.querySelectorAll(".color-ash-blue");
const colorAshBluedif = document.querySelectorAll(".color-ash-dif");
const followers1 = document.querySelector('.followers-1');
const overflow1 = document.querySelectorAll('.overflow-1');
const followers2 = document.querySelector('.followers-2');
const followers3 = document.querySelector('.followers-3');
const followers4 = document.querySelector('.followers-4');

const confirm = () => {
    toggle.classList.toggle('toggle');
    body.classList.toggle('body-after');
    headingBG.classList.toggle('head-BG-after');

    followers1.classList.toggle('before');
    followers2.classList.toggle('before');
    followers3.classList.toggle('before');
    followers4.classList.toggle('before');

    for (let index = 0; index < colorAshBluedif.length; index++) {
        colorAshBluedif[index].classList.toggle('color-new-blue');
    }
    for (let index = 0; index < 8; index++) {
        overflow1[index].classList.toggle('before');
    }
    for (let index = 0; index < colorBlue.length; index++) {
        colorBlue[index].classList.toggle('color-new-blue');
    }
    for (let index = 0; index < colorAshBlue.length; index++) {
        colorAshBlue[index].classList.toggle('color-new-Ash-blue');
    }
}
toggle.addEventListener('click', () => {
    confirm()
})