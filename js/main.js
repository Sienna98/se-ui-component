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
let _open = document.querySelector('.btn')
let _close = document.querySelector('.close');

// _open.onclick = function() {
//   open();
// }
// _close.onclick = function() {
//   close();
// }


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


/////////////////////////////////////////////////////////Alert 
let alr_btn_1 = document.querySelector('.alr_btn_1')
let alr_btn_2 = document.querySelector('.alr_btn_2')
let alert_wrap = document.querySelector('.alert_wrap')
let alert_box = document.querySelectorAll('.alert_box')

// alr_btn_1.addEventListener('click',function(el) {
//  alert_wrap.append(success());
//  remove_timeout()
// })
// alr_btn_2.addEventListener('click',function() {
//  alert_wrap.append(error());
//  remove_timeout()
// })

function success() {
  const div = document.createElement("div")
  const p = document.createElement("p")
  const _span = document.createElement("span")

  div.className = "alert_box success";
  _span.className = "close"
  _span.innerText = "&times;"
  p.innerText = "Success alert 입니다."
  div.append(p,_span);
  
  return div;
}
function error() {
  const div = document.createElement("div")
  const p = document.createElement("p")
  const span = document.createElement("span")

  div.className = "alert_box error";
  span.className = "close"
  span.innerText = "&times;"
  p.innerText = "Success alert 입니다."
  div.append(p,span);
  
  return div;
}

function remove_timeout() {
  setTimeout(function() {
    while ( alert_wrap.hasChildNodes() ) {
      alert_wrap.removeChild( alert_wrap.firstChild ); 
      }
  }, 2500);
} 


/////////////////////////////////////////Selector
let dropdown_btn = document.querySelector('.select_btn > .button')
let arrow = document.querySelector('.arrow > i')
  
dropdown_btn.addEventListener('focus', function() {
  document.querySelector('.dropdown').classList.add('focused')
  document.querySelector('.arrow > i').classList.add('green')
})
dropdown_btn.addEventListener('blur', function() {
  document.querySelector('.dropdown').classList.remove('focused')
  document.querySelector('.arrow > i').classList.remove('green')
})

let option = document.querySelectorAll('.dropdown > li')

option.forEach(function(op) {
  op.addEventListener('click',function() {
    const data_option = this.getAttribute('data-option');
    console.log(op.innerText)
  })
  // console.log(op.innerText)
  // console.dir(op)
})

// li.forEach(function(el){
//   el.addEventListener('click', function() {
//     const _src = this.getAttribute('data-cont');
//     frame.src = _src;    
//     removeOn();
//     el.classList.add("on");
//   })
// })