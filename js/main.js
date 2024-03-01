const logo=document.getElementById('logo');
const mainLogo=document.getElementById('mainLogo');
logo.addEventListener('keydown',function(e){if(e.keyCode===13){logo.click();}});
logo.addEventListener('mouseenter',animatePieIn);
logo.addEventListener('mouseleave',animatePieOut);
mainLogo.addEventListener('mouseenter',animatePieIn);
mainLogo.addEventListener('mouseleave',animatePieOut);
function animatePieIn(){this.style.animation='lift 0.5s forwards';}
function animatePieOut(){this.style.animation='b-lift 0.5s forwards';}
document.querySelectorAll('.top-nav a').forEach(function(l){
  l.addEventListener('mouseenter',function(){
    l.classList.remove('leave');
    l.classList.add('hover');
  });
  l.addEventListener('mouseleave',function(){
    l.classList.remove('hover');
    l.classList.add('leave');
  });
});