let p1 = document.getElementById("p1")
let raul = document.getElementById("p2")
let tacobell = document.getElementById("taco")
let bomb = document.getElementById("kaboom")

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
    p1.style.width = "150px"
    p1.style.left = '100px'
    p1.style.top = '100px'
    p2.style.position = 'absolute'
    p2.style.width = "150px"
    p2.style.left = '1000px'
    p2.style.top = '100px'
    tacobell.style.position = 'absolute'
    tacobell.style.width = "150px"
    tacobell.style.left = '500px'
    tacobell.style.top = '300px'

})
function playSound(sound) {
    let soundPlayed = new Audio(sound)
    soundPlayed.play();
}



function checkPlayerCollisions() {
    if (p1.style.left + p1.style.width >= p2.style.left &&
        p2.style.left + p2.style.width >= p1.style.left &&
        p1.style.top + p1.style.height >= p2.style.top &&
        p2.style.top + p2.style.height >= p1.style.top) {
            playSound("/sounds/vine-boom.mp3")
    }
}

function checkTacoCollisions() {
    if (p1.style.left + p1.style.width >= tacobell.style.left &&
        tacobell.style.left + tacobell.style.width >= p1.style.left &&
        p1.style.top + p1.style.height >= tacobell.style.top &&
        tacobell.style.top + tacobell.style.height >= p1.style.top) {
            playSound("/sounds/tacobell.mp3")
    } else if (p2.style.left + p2.style.width >= tacobell.style.left &&
        tacobell.style.left + tacobell.style.width >= p2.style.left &&
        p2.style.top + p2.style.height >= tacobell.style.top &&
        tacobell.style.top + tacobell.style.height >= p2.style.top) {
            playSound("/sounds/tacobell.mp3")

    }
}




// Player One
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
        case 'q':
            if (p1.classList.contains("flipped")) {
                p1.classList.remove("flipped")
            } else {
                p1.classList.add("flipped")
            }
            break
        case 'e':
            let i = document.getElementById("characterImgOne")
            console.log(i.getAttribute("alt"))
            switch (i.getAttribute("alt")) {
                case "/images/raul.png":
                    playSound("/sounds/gabe.mp3")
                    break
                case "/images/amogus.png":
                    playSound("/sounds/amogus.mp3")
                    break
                case "/images/cowe.png":
                    playSound("/sounds/cow.mp3")
                    break
                case "/images/shibe.png":
                    playSound("/sounds/bork.mp3")
                    break
                }
            break
        
    }
    checkPlayerCollisions()
    checkTacoCollisions()
})  

// Player 2
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
        case 'l':
            if (p2.classList.contains("flipped")) {
                p2.classList.remove("flipped")
            } else {
                p2.classList.add("flipped")
            }
            break
         case 'l':
            if (p2.classList.contains("flipped")) {
                p2.classList.remove("flipped")
            } else {
                p2.classList.add("flipped")
            }
            break
        case 'p':
            let j = document.getElementById("characterImgTwo")
            console.log(j.getAttribute("alt"))
            switch (j.getAttribute("alt")) {
                case "/images/raul.png":
                    playSound("/sounds/gabe.mp3")
                    break
                case "/images/amogus.png":
                    playSound("/sounds/amogus.mp3")
                    break
                case "/images/cowe.png":
                    playSound("/sounds/cow.mp3")
                    break
                case "/images/shibe.png":
                    playSound("/sounds/bork.mp3")
                    break
                }
            break
        
        
    }
    checkPlayerCollisions()
    checkTacoCollisions()
}) 


// Special 
window.addEventListener("keyup", (e) => {
    switch(e.key) {

            case 'h':
                function randNum() {
                    let num = Math.ceil(Math.random() * 750)
                    return num
                }

                function setDisplayNone(thingy) {
                    thingy.classList.add("noDisplay")
                }
                bomb.style.left = `${randNum()}px`;
                bomb.style.top = `${randNum()}px`;
                bomb.classList.remove("noDisplay");
                playSound("/sounds/kaboom.mp3");
                setTimeout(() => {
                    setDisplayNone(bomb);
                }, 1000)
    }
})





p1Select.addEventListener("change", () => {
    let p1SelectImg = document.getElementById("selectImgOne");
    let p1Img = document.getElementById("characterImgOne")
    let p1 = p1Select.value

    p1Img.setAttribute("alt", playerIcons[p1])
    p1Img.src = playerIcons[p1]
    p1SelectImg.src = playerIcons[p1]
})
p2Select.addEventListener("change", () => {
    let p2SelectImg = document.getElementById("selectImgTwo");
    let p2Img = document.getElementById("characterImgTwo")
    let p2 = p2Select.value

    p2Img.setAttribute("alt", playerIcons[p2])
    p2Img.src = playerIcons[p2]
    p2SelectImg.src = playerIcons[p2]
})



