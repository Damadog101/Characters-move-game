let p1 = document.getElementById("p1")
let raul = document.getElementById("p2")

let moveBy = 10
let bigMoveBy = 100

let title = document.getElementById("titleWrapper")
let startButton = document.getElementById("start")

let p1Select = document.getElementById("p1Select")
let p2Select = document.getElementById("p2Select")

const playerIcons = {
    "Amogus" : "/images/amogus.png",
    "Cowe" : "/images/cowe.png",
    "Shibe" : "/images/shibe.png",
    "Raul" : "/images/raul.png"
  };

startButton.addEventListener("click", () => {
    title.classList.add("noDisplay")
})

window.addEventListener("load", () => {
    p1.style.position = 'absolute'
    p1.style.left = '0'
    p1.style.top = '0'
    p2.style.position = 'absolute'
    p2.style.left = '0'
    p2.style.top = '0'

})


window.addEventListener("keyup", (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            p2.style.left = parseInt(p2.style.left) - bigMoveBy + 'px'
            break
        case 'ArrowRight':
            p2.style.left = parseInt(p2.style.left) + bigMoveBy + 'px'
            break
        case 'ArrowUp':
            p2.style.top = parseInt(p2.style.top) - bigMoveBy + 'px'
            break
        case 'ArrowDown':
            p2.style.top = parseInt(p2.style.top) + bigMoveBy + 'px'
            break
    }
})  


window.addEventListener("keyup", (e) => {
    switch(e.key) {
        case 'a':
            p1.style.left = parseInt(p1.style.left) - bigMoveBy + 'px'
            break
        case 'd':
            p1.style.left = parseInt(p1.style.left) + bigMoveBy + 'px'
            break
        case 'w':
            p1.style.top = parseInt(p1.style.top) - bigMoveBy + 'px'
            break
        case 's':
            p1.style.top = parseInt(p1.style.top) + bigMoveBy + 'px'
            break
    }

})

p1Select.addEventListener("change", () => {
    let p1SelectImg = document.getElementById("selectImgOne");
    let p1Img = document.getElementById("characterImgOne")
    let p1 = p1Select.value
    console.log()

    p1Img.src = playerIcons[p1]
    p1SelectImg.src = playerIcons[p1]
})
p2Select.addEventListener("change", () => {
    let p2SelectImg = document.getElementById("selectImgTwo");
    let p2Img = document.getElementById("characterImgTwo")
    let p2 = p2Select.value

    p2Img.src = playerIcons[p2]
    p2SelectImg.src = playerIcons[p2]
})

