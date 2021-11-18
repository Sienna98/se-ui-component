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
