const toggle = document.getElementById('changes');
const body = document.querySelector('body');
const headingBG = document.getElementById("head-background");
const headingh3 = document.querySelector('#heading h3');
const headingh6 = document.querySelector('#heading h6');
const darkmodeH6 = document.querySelector('#darkmode h6');
const followers1 = document.querySelector('.followers-1');
const followers1h1 = document.querySelector('.followers-1 h1');
const followers1p = document.querySelector('.followers-1 p');
const followers1h6 = document.querySelector('.followers-1 h6');
const overflow = document.querySelector('#overflow h3');
const overflow1 = document.querySelectorAll('.overflow-1');
const overflow1h2 = document.querySelectorAll('.overflow-1-h2');
const overflow1h6 = document.querySelectorAll('.overflow-1-h6');
const followers2 = document.querySelector('.followers-2');
const followers2h1 = document.querySelector('.followers-2 h1');
const followers2h6 = document.querySelector('.followers-2 h6');
const followers2p = document.querySelector('.followers-2 p');
const followers3 = document.querySelector('.followers-3');
const followers3h1 = document.querySelector('.followers-3 h1');
const followers3h6 = document.querySelector('.followers-3 h6');
const followers3p = document.querySelector('.followers-3 p');
const followers4 = document.querySelector('.followers-4');
const followers4h1 = document.querySelector('.followers-4 h1');
const followers4h6 = document.querySelector('.followers-4 h6');
const followers4p = document.querySelector('.followers-4 p');
const confirm =()=>{
    if (toggle.className === "ms-3 toggle"){
        headingBG.style.backgroundColor = "hsl(232, 19%, 15%)"
        body.style.backgroundColor = "hsl(230, 17%, 14%)"
        darkmodeH6.style.color = "hsl(0, 0%, 100%)"
        followers1.style.backgroundColor = "hsl(228, 28%, 20%)"
        headingh3.style.color = "hsl(0, 0%, 100%)"
        headingh6.style.color = "hsl(228, 34%, 66%)"
        followers1h6.style.color = "hsl(228, 34%, 66%)"
        followers2h6.style.color = "hsl(228, 34%, 66%)"
        followers3h6.style.color = "hsl(228, 34%, 66%)"
        followers4h6.style.color = "hsl(228, 34%, 66%)"
        followers1p.style.color = "hsl(228, 34%, 66%)"
        followers2p.style.color = "hsl(228, 34%, 66%)"
        followers3p.style.color = "hsl(228, 34%, 66%)"
        followers4p.style.color = "hsl(228, 34%, 66%)"
        followers1h1.style.color = "hsl(0, 0%, 100%)"
        overflow.style.color = "hsl(0, 0%, 100%)"
        followers2h1.style.color = "hsl(0, 0%, 100%)"
        followers3h1.style.color = "hsl(0, 0%, 100%)"
        followers4h1.style.color = "hsl(0, 0%, 100%)"
        followers2.style.backgroundColor = "hsl(228, 28%, 20%)"
        followers3.style.backgroundColor = "hsl(228, 28%, 20%)"
        followers4.style.backgroundColor = "hsl(228, 28%, 20%)"
        for (let index = 0; index < 8; index++) {
            overflow1[index].style.backgroundColor = "hsl(228, 28%, 20%)"
            overflow1h2[index].style.color = "hsl(0, 0%, 100%)"
            overflow1h6[index].style.color = "hsl(228, 34%, 66%)"
        }
    }else{
        headingBG.style.backgroundColor = "hsl(225, 100%, 98%)"
        body.style.backgroundColor = "hsl(0, 0%, 100%)"
        darkmodeH6.style.color = "hsl(228, 12%, 44%)"
        followers1.style.backgroundColor = "hsl(227, 47%, 96%)"
        for (let index = 0; index < 8; index++) {
            overflow1[index].style.backgroundColor = "hsl(227, 47%, 96%)"
            overflow1h2[index].style.color = "hsl(230, 17%, 14%)"
            overflow1h6[index].style.color = "hsl(228, 12%, 44%)"
        }
        headingh3.style.color = "hsl(230, 17%, 14%)"
        headingh6.style.color = "hsl(228, 12%, 44%)"
        followers1h6.style.color = "hsl(228, 12%, 44%)"
        followers2h6.style.color = "hsl(228, 12%, 44%)"
        followers3h6.style.color = "hsl(228, 12%, 44%)"
        followers4h6.style.color = "hsl(228, 12%, 44%)"
        followers1p.style.color = "hsl(228, 12%, 44%)"
        followers2p.style.color = "hsl(228, 12%, 44%)"
        followers3p.style.color = "hsl(228, 12%, 44%)"
        followers4p.style.color = "hsl(228, 12%, 44%)"
        followers1h1.style.color = "hsl(230, 17%, 14%)"
        overflow.style.color = "hsl(228, 12%, 44%)"
        followers2h1.style.color = "hsl(230, 17%, 14%)"
        followers3h1.style.color = "hsl(230, 17%, 14%)"
        followers4h1.style.color = "hsl(230, 17%, 14%)"
        followers2.style.backgroundColor = "hsl(227, 47%, 96%)"
        followers3.style.backgroundColor = "hsl(227, 47%, 96%)"
        followers4.style.backgroundColor = "hsl(227, 47%, 96%)"
    }
}
toggle.addEventListener('click' , ()=>{
    toggle.classList.toggle('toggle')
    for (let index = 0; index < 8; index++) {
        overflow1[index].classList.toggle('before');
    }
    followers1.classList.toggle('before');
    followers2.classList.toggle('before');
    followers3.classList.toggle('before');
    followers4.classList.toggle('before');
    confirm()
})