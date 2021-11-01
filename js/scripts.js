const dino = document.querySelector(".dino");
let isJump = false;

console.log(dino);

document.addEventListener('keyup',(event)=>{
    if(event.keyCode === 32)
    jump();
});

function jump (){
    let position = 0;
    let UpInterval = setInterval(()=>{

        if(position >=150){
            clearInterval(UpInterval);
            let downInterval = setInterval (()=>{
                if(position <= 0 ){
                clearInterval(downInterval);
                }else {
                    position -= 20;
                    dino.style.bottom = position + `px`;    
                }
               
            },20) 
        }else {
            position += 20;
            dino.style.bottom = position + `px`;
        }

      

    }, 20)
}