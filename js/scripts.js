
window.addEventListener('scroll', function(e) {

  let value = window.scrollY

  if (value > 80 ) {
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.height = "100px";
    document.querySelector(".links").style.top = "20px";
    document.querySelector(".logo").style.top = "25px";
    document.querySelector(".social-media").style.top = "35px";
  } else {
    document.getElementById("navbar").style.backgroundColor = "initial";
    document.getElementById("navbar").style.height = "130px";
    document.querySelector(".links").style.top = "35px";
    document.querySelector(".logo").style.top = "40px";
    document.querySelector(".social-media").style.top = "50px";
  }

})

// function has to be separated because the listener is listening to when it's scrolled, but not when page refreshes, so it needs a function that loads the y position when refreshing

function scrollFunction() {
  
  let value = window.scrollY

  if (value > 80 ) {
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.height = "100px";
    document.querySelector(".links").style.top = "20px";
    document.querySelector(".logo").style.top = "25px";
    document.querySelector(".social-media").style.top = "35px";
  } else {
    document.getElementById("navbar").style.backgroundColor = "initial";
    document.getElementById("navbar").style.height = "130px";
    document.querySelector(".links").style.top = "35px";
    document.querySelector(".logo").style.top = "40px";
    document.querySelector(".social-media").style.top = "50px";
  }
}

scrollFunction()