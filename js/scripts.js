const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJump = false;

console.log(dino);
console.log(background);

document.addEventListener('keyup',(event)=>{
    if(event.keyCode === 32)
    if(!isJump){
        jump();
    }
});

function jump (){
    let position = 0;
    let UpInterval = setInterval(()=>{
        isJump = true
        if(position >=150){
            clearInterval(UpInterval);
            let downInterval = setInterval (()=>{
                if(position <= 0 ){
                clearInterval(downInterval);
                isJump = false
                }else {
                    position -= 20;
                    dino.style.bottom = position + `px`;    
                }
               
            },20) 
        }else {
            position += 19
            20;
            dino.style.bottom = position + `px`;
        }

      

    }, 20)
}


function createCactus (){
    const cactus = document.createElement('div');
    let positionCactus = 1000;


    let cactusRandon = Math.random() * 6000;

    cactus.classList.add('cactus')
    cactus.style.left = positionCactus +  `px`
    background.appendChild(cactus)


    let leftInterval = setInterval(() => {
      
        if(positionCactus < 60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else {
            positionCactus -= 10;
            cactus.style.left = positionCactus + `px`;
        }
    }, 20);

    setTimeout( createCactus , cactusRandon);
}

createCactus();     
