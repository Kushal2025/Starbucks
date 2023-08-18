function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function colorCh(color)
{
const c = document.querySelector('.circle');
c.style.background= color;
const s = document.getElementById('sb');
s.style.color = color;
const l = document.getElementById('lm');
l.style.background = color;

}
function menu(){
    let menuT = document.querySelector('.toggle');
    let navg = document.querySelector('.navigation');
    menuT.classList.toggle('active');
    navg.classList.toggle('active');
}
