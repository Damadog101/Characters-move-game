let p1 = document.getElementById("p1")
let raul = document.getElementById("p2")

let moveBy = 10
let bigMoveBy = 100

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