//Main functionality script
const logo=document.getElementById('logo');//Get the logos' IDs as variables so we can use them later
const mainLogo=document.getElementById('mainLogo');
logo.addEventListener('keydown',function(e){if(e.keyCode===13){logo.click();}});//If enter is pressed while the top bar logo is focused, act like it's been clicked so we navigate back home
logo.addEventListener('mouseenter',animatePieIn);//When the mouse enters or leaves the pie logo area, start the associated animation
logo.addEventListener('mouseleave',animatePieOut);
mainLogo.addEventListener('mouseenter',animatePieIn);
mainLogo.addEventListener('mouseleave',animatePieOut);
function animatePieIn(){this.style.animation='lift 0.5s forwards';}
function animatePieOut(){this.style.animation='b-lift 0.5s forwards';}
document.querySelectorAll('.top-nav a').forEach(function(l){//For every top nav link...
  l.addEventListener('mouseenter',function(){//Add an event listener for mouse entry...
    l.classList.remove('leave');
    l.classList.add('hover');
  });
  l.addEventListener('mouseleave',function(){//...and mouse leaving.
    l.classList.remove('hover');
    l.classList.add('leave');
  });
});