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

const introText = document.getElementById("introdução")
const introBg = document.getElementById("bgIntro")

const products = document.querySelector('.products')

const boxes = products.querySelectorAll('#productBox')

const box = document.getElementById("productBox")

const mobileBgIntro = document.getElementById("bgIntroMobile")
const introBgText = document.getElementById("introBgText")

/*
boxes.forEach(box => {
  console.log(window.getComputedStyle(box).getPropertyValue('opacity'))
})

*/
window.addEventListener("scroll", (e) => {

  posY = window.scrollY
  introText.style.opacity = posY / 4 + '%'

  if(posY < 350){
    introText.style.height = posY + 'px'
  } else {
    introText.style.height = '350px'
  }


  let value = posY / 80

  if(value > 5){
    value = 5
  } else {
    value = posY / 80
  }

  introText.style.clipPath = 'polygon(0%' + value + '%, 100% 0%, 100% 100%, 0% 100%)'
  introBg.style.clipPath = 'polygon(0%' + value + '%, 100% 0%, 100% 100%, 0% 100%)'


  let xCenter = screen.width / 2
  let yCenter = screen.height / 3

  let divs = []

  boxes.forEach((box, index) => {
    /*divs.push(box.getBoundingClientRect())
    console.log(window.getComputedStyle(focusElement).getPropertyValue('transform'))
    window.getComputedStyle(focusElement).setProperty('transform', 'matrix(1.03, 0, 0, 1.03, 0, 0)')*/
    divs.push(box)
  })

  // A way to know the scroll is in the middle and focus the middle objecto

  for(let i = 0 ; i < divs.length; i++) {

    let focusElement = divs[i]
    let pos = focusElement.getBoundingClientRect()
    let topBound = pos.top / focusElement.clientHeight * 100
    let bottomBound = pos.bottom / focusElement.clientHeight * 100
    let middle = (topBound + bottomBound) / 2

    if(Math.round(middle) > yCenter - 45 && Math.round(middle) < yCenter + 5){
      focusElement.style.setProperty('transform', 'matrix(1.05, 0, 0, 1.05, 0, 0)')
    } else {
      focusElement.style.setProperty('transform', 'matrix(1.00, 0, 0, 1.00, 0, 0)')
    }
  }

  // Trying a different way using IntersectionObserver API for a more precise focusing

  let numSteps = 20

  let ratio

  let textElement
  let prevRatio = 0.0
  let increasingOpacity = "ratio"
  let decreasingOpacity = "ratio"

  window.addEventListener("load", (event) => {
    textElement = document.querySelector("#introBgText")
    createObserver()
  }, false)

  function createObserver() {

    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    }

    observer = new IntersectionObserver(handleIntersect, options)
    observer.observe(textElement)

  }

  function buildThresholdList() {
    let thresholds = []
    let numSteps = 20

    for (let i = 1; i <= numSteps; i++) {
      let ratio = i / numSteps
      thresholds.push(ratio)
    }

    thresholds.push(0);
    return thresholds;
  }

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.style.setProperty('opacity', entry.intersectionRatio)

      } else {
        entry.target.style.setProperty('opacity', -entry.intersectionRatio)
      }

      prevRatio = entry.intersectionRatio;
    })
  }

  if(mobile){
    if(posY > 1) {
      document.getElementById("navbar").style.height = "60px";
    } else {
      document.getElementById("navbar").style.height = "100px";
    }
  }



})

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
