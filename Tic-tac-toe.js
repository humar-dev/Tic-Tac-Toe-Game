let buttons = document.querySelectorAll('.button-option');
let popup = document.querySelector('.popup');
let game = document.querySelector('.game');
let message = document.querySelector('.message');
let restart = document.querySelector('.restart');

// winning pattern 
let winningpattern =
    [
        [0, 1, 2],
        [0, 3, 6],
        [2, 5, 8],
        [6, 7, 8],
        [3, 4, 5],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 6]
    ]

let xturn = true;
let count = 0;



let enablefunction=()=>{

    buttons.forEach((element)=>{

        element.innerHTML = "";
        element.disabled = false;
    })
    popup.classList.add("hide");
}


restart.addEventListener('click' ,function()
{
    enablefunction();
})

game.addEventListener('click' ,function()
{
    enablefunction();
})







let WinCheck = (letter) => {

    disablefunction()
    if (letter=="X"){
        message.innerHTML = " &#x1F389  <br>  X WINS"
    }
    else{
         message.innerHTML = " &#x1F389 <br>  O WINS"
    }
}

const disablefunction = () => {

    buttons.forEach((element) => {

        element.disabled = "true";
    }

    )
    popup.classList.remove("hide");
}


const WinningFunction = () => {

    for (const i of winningpattern) {
        let [element1, element2, element3] = [buttons[i[0]].innerText, buttons[i[1]].innerText, buttons[i[2]].innerText];

        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3) {

                WinCheck(element1);

            }
        }

    }
}


let drawfunction =()=>
{
    
    disablefunction()
    message.innerHTML = " &#x1F60E  <br>  It's a D"
}




buttons.forEach((element) => {
    element.addEventListener(('click'), function () {
        if (xturn) {
            xturn = false;
            element.innerHTML = "X";
            element.disabled = true;

        }
        else {
            xturn = true;
            element.innerHTML = "O";
            element.disabled = true
        }
        count += 1;

        if (count === 9) {

            drawfunction();
        } 

        WinningFunction();

    })
})

