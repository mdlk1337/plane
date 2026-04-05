const plane = document.querySelector(".plane");
const box = document.querySelector(".box")
const button = document.querySelector(".startplane")

let stepPlane = 0;
let widthWindow = window.innerWidth;
let isRight = true 
let boxY = 150;

let planeTimer = null;
let boxTimer = null;

function startPlane() {
      planeTimer = setInterval(() => {
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
    
    boxTimer = setInterval(() => {
        boxY++
        box.style.top = boxY + 'px'
        
        if(boxY === 800) {
            clearInterval(boxTimer);
            boxY = 150;
        } 
    }, 1)
    
}



let isStart = false;

button.addEventListener('click', () => {
    if(!isStart) {
        button.textContent = "Stop";
        isStart = true;
        startPlane()
    }else {
        isStart = false;
        button.textContent = "Start";
        stepPlane = 0;
        plane.style.left = stepPlane;
        clearInterval(planeTimer);
        clearInterval(boxTimer);
        boxY = 150;
        box.style.display = 'none';
        plane.style.transform = "scaleX(-1)";
        isRight = true;
    }
})

