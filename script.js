 const plane = document.querySelector(".plane");
 const box = document.querySelector(".box")

let stepPlane = 0;
let widthWindow = window.innerWidth;
let isRight = true 
let boxY = 150;

function startPlane() {
     setInterval(() => {
        if(isRight) {
            stepPlane++;

            plane.style.left = stepPlane + 'px';

            if(stepPlane + 300  === widthWindow/2) {
                box.style.display = "block";
                dropBox()
            }

            if(stepPlane + 300 === widthWindow) {
                isRight = false;
                plane.style.transform = "scaleX(1)";
            }
        }else {
            stepPlane--;

            plane.style.left = stepPlane + 'px';
            
            if(stepPlane === 0) {
                isRight = true
                plane.style.transform = "scaleX(-1)";
                box.style.display = 'none'
            }
        }
    }, 1)
}

 function dropBox() {
    
     let a = setInterval(() => {
        boxY++
        box.style.top = boxY + 'px'
        
        if(boxY === 800) {
            clearInterval(a)
            boxY = 150

            // let timerId = setTimeout(a, 100000);
            // boxY = 150
            // clearTimeout(timerId)
        } 
    }, 1)
    
}


startPlane()

