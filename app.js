const toggle = document.getElementById('changes');
const body = document.querySelector('body');
const headingBG = document.getElementById("head-background");
const colorBlue = document.querySelectorAll(".color-blue");
const colorAshBlue = document.querySelectorAll(".color-ash-blue");
const followers1 = document.querySelector('.followers-1');
const overflow1 = document.querySelectorAll('.overflow-1');
const followers2 = document.querySelector('.followers-2');
const followers3 = document.querySelector('.followers-3');
const followers4 = document.querySelector('.followers-4');

const confirm =()=>{
    toggle.classList.toggle('toggle')
    for (let index = 0; index < 8; index++) {
        overflow1[index].classList.toggle('before');
    }
    followers1.classList.toggle('before');
    followers2.classList.toggle('before');
    followers3.classList.toggle('before');
    followers4.classList.toggle('before');

    if (toggle.className === "ms-3 toggle"){
        headingBG.style.backgroundColor = "hsl(232, 19%, 15%)"
        body.style.backgroundColor = "hsl(230, 17%, 14%)"
        followers1.style.backgroundColor = "hsl(228, 28%, 20%)"
        followers2.style.backgroundColor = "hsl(228, 28%, 20%)"
        followers3.style.backgroundColor = "hsl(228, 28%, 20%)"
        followers4.style.backgroundColor = "hsl(228, 28%, 20%)"
        for (let index = 0; index < 8; index++) {
            overflow1[index].style.backgroundColor = "hsl(228, 28%, 20%)"
        }
        for (let index = 0; index < colorBlue.length; index++) {
            colorBlue[index].style.color = "hsl(0, 0%, 100%)"
        }
        for (let index = 0; index < colorAshBlue.length; index++) {
            colorAshBlue[index].style.color = "hsl(228, 34%, 66%)"
        }
    }else{
        headingBG.style.backgroundColor = "hsl(225, 100%, 98%)"
        body.style.backgroundColor = "hsl(0, 0%, 100%)"
        followers1.style.backgroundColor = "hsl(227, 47%, 96%)"
        for (let index = 0; index < 8; index++) {
            overflow1[index].style.backgroundColor = "hsl(227, 47%, 96%)"
        }
        for (let index = 0; index < colorBlue.length; index++) {
            colorBlue[index].style.color = "hsl(230, 17%, 14%)"
        }
        for (let index = 0; index < colorAshBlue.length; index++) {
            colorAshBlue[index].style.color = "hsl(228, 12%, 44%)"
        }
        followers2.style.backgroundColor = "hsl(227, 47%, 96%)"
        followers3.style.backgroundColor = "hsl(227, 47%, 96%)"
        followers4.style.backgroundColor = "hsl(227, 47%, 96%)"
    }

}
toggle.addEventListener('click' , ()=>{
    confirm()
})