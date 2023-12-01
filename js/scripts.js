// Check if user is using mobile phone

let mobile

if(screen.width <= 430){
  mobile = true
} else {
  mobile = false
}

/*

window.addEventListener('scroll', function(e) {

  let value = window.scrollY

  if(!mobile){
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

})

// function has to be separated because the listener is listening to when it's scrolled, but not when page refreshes, so it needs a function that loads the y position when refreshing

function scrollFunction() {

  let value = window.scrollY

  if(!mobile){
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
}

scrollFunction()

*/



const carousel = document.getElementById("carousel")

const firstButton = document.getElementById("first")
const secondButton = document.getElementById("second")
const thirdButton = document.getElementById("third")

const firstImg = document.getElementById("slide-1")
const secondImg = document.getElementById("slide-2")
const thirdImg = document.getElementById("slide-3")

let pos = {

  left: 0,
  x: 0

}


document.getElementById("carousel").addEventListener("mousedown", (e) => {

  pos = {

    left: carousel.scrollLeft,
    x: e.clientX

  }

  carousel.style.cursor = 'grabbing'
  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)

})

const mouseMoveHandler = function (e) {

    const dx = e.clientX - pos.x
    carousel.scrollLeft = pos.left - dx

}

const mouseUpHandler = function () {

    carousel.style.cursor = 'grab'
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)

}



let timer = 1000
let fadeIn = 0


function fade(img) {

  if(fadeIn < 1){
    fadeIn = fadeIn += 0.04
  }

  img.style.opacity = fadeIn

}

function fadeOut(img) {

  let fadeO = 1

  if(fadeO > 0){
    fadeO = fadeO -= 0.04
  }

  img.style.opacity = fadeO

}


let opacity = 1

let menuOpen = false

function openMenu() {
  if(!menuOpen){
    document.getElementById("slideMenu").style.width = "100%";
    document.getElementById("menu-content").style.opacity = "100%";
    menuOpen = true
  } else {
    document.getElementById("slideMenu").style.width = "0%";
    document.getElementById("menu-content").style.opacity = "0%";
    menuOpen = false
  }

}


function loop() {
  fade(firstImg)
  requestAnimationFrame(loop)
}

loop()


/*

let bannerState = {
  first: true,
  second: false,
  third: false
}

const mouseUpHandler = function () {

    if(carousel.scrollLeft < 1000){

      carousel.scrollLeft = 0
      firstButton.style.opacity = '100%'
      secondButton.style.opacity = '30%'
      thirdButton.style.opacity = '30%'

      bannerState = {
        first: true,
        second: false,
        third: false
      }



    } else if(carousel.scrollLeft > 1000 && carousel.scrollLeft < 2500){

      carousel.scrollLeft = 1920

      firstButton.style.opacity = '30%'
      secondButton.style.opacity = '100%'
      thirdButton.style.opacity = '30%'

      bannerState = {
        first: false,
        second: true,
        third: false
      }

    } else if(carousel.scrollLeft > 2500 && carousel.scrollLeft < 3840){

      carousel.scrollLeft = 3840
      firstButton.style.opacity = '30%'
      secondButton.style.opacity = '30%'
      thirdButton.style.opacity = '100%'
      bannerState = {
        first: false,
        second: false,
        third: true
      }

    }


    carousel.style.cursor = 'grab'
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)

}

function buttonBanner() {
  carousel.scrollLeft = 0
  firstButton.style.opacity = '100%'
  secondButton.style.opacity = '30%'
  thirdButton.style.opacity = '30%'

  bannerState = {
    first: true,
    second: false,
    third: false
  }

}

function buttonBanner1() {
  carousel.scrollLeft = 1920
  firstButton.style.opacity = '30%'
  secondButton.style.opacity = '100%'
  thirdButton.style.opacity = '30%'

  bannerState = {
    first: false,
    second: true,
    third: false
  }
}

function buttonBanner2() {
  carousel.scrollLeft = 3840
  firstButton.style.opacity = '30%'
  secondButton.style.opacity = '30%'
  thirdButton.style.opacity = '100%'
  bannerState = {
    first: false,
    second: false,
    third: true
  }

}
function changingBanner() {
  timer--
  if(timer <= 0){
    if(bannerState.second == false & bannerState.third == false){
      buttonBanner1()
      timer = 1000
    } else if(bannerState.first == false & bannerState.third == false){
      buttonBanner2()
      timer = 1000
    } else if(bannerState.second == false & bannerState.first == false){
      buttonBanner()
      timer = 1000
    }
  }
}
  changingBanner()
  */
