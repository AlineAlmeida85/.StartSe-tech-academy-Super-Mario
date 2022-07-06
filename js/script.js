const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const inicio = document.querySelector(".inicio");
const coopa = document.querySelector(".coopa-game");

const buttonStart = () => {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".start").style.display = "none";
    document.querySelector(".pipe-game").style.display = "inline";
    document.querySelector(".super-mario").style.display = "inline";
    document.querySelector(".coopa-game").style.display = "inline";

    

    const jump = () => {
        mario.classList.add("jump-mario");

        setTimeout(() => {
            mario.classList.remove("jump-mario");
        }, 500);
    }

    const loopGame = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window
            .getComputedStyle(mario)
            .bottom.replace("px", "");

        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) {
        
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./Images/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px";
        
        
        document.querySelector(".game-over").style.display = "inline";
        document.querySelector(".start").style.display = "inline";
        clearInterval(loopGame)
        }
    }, 10);
    document.addEventListener("keydown", jump);
}




