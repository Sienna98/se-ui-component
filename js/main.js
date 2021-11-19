let li = document.querySelectorAll(".list > li");
let frame = document.getElementById("cont_frame");

li.forEach(function(el){
  el.addEventListener('click', function() {
    const _src = this.getAttribute('data-cont');
    frame.src = _src;    
    removeOn();
    el.classList.add("on");
  })
})
function removeOn() {
  li.forEach(function (el) {
    if (el.classList.contains("on")) {
      el.classList.remove("on")
    }
  })
}

//////////////////////////////////////////////input
const input = document.querySelectorAll(".input");

input.forEach(function(ev){
  ev.addEventListener('focus',function(ev){
    ev.target.classList.add('focused')
  })
  ev.addEventListener('blur', function(ev){
    ev.target.classList.remove('focused')
  })
})

/////////////////////////////////////////////card
const tabBtn1 = document.querySelector('.tab1');
const tabBtn2 = document.querySelector('.tab2');
const tabCont1 = document.querySelector('.cont1')
const tabCont2 = document.querySelector('.cont2')

function tabMenu1() {
  tabBtn1.classList.add('active')
  tabBtn2.classList.remove('active')
  tabCont1.style.display = "block";
  tabCont2.style.display = "none";
}
function tabMenu2() {
  tabBtn2.classList.add('active')
  tabBtn1.classList.remove('active')
  tabCont2.style.display = "block";
  tabCont1.style.display = "none";
}


/////////////////////////////////////////Modal
let modal = document.querySelector('.modal')
let back = document.getElementById("myModal");
let btn = document.querySelector('.btn')
let span = document.querySelector(".close");

btn.onclick = function() {
  open();
}
span.onclick = function() {
  close();
}
window.onclick = function(ev) {
  if(ev.target == back) {
    close(); 
  }
}
function open(){
  modal.classList.add('fade');
  back.classList.add('show');
}
function close() {
  modal.classList.remove('fade');
  back.classList.remove('show');
}
