let pl, co;
pl = 0;
co = 0;

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function playRound(e) {
    if (pl<5 && co<5) {
        let player;
        let comp = getComputerChoice();
        if (e.target.classList[0] === "rock") {
            player = 0;
            document.getElementById("pchoice").textContent = "Rock";
        } else if (e.target.classList[0] === "paper") {
            player = 1;
            document.getElementById("pchoice").textContent = "Paper";
        } else {
            player = 2;
            document.getElementById("pchoice").textContent = "Scissors";
        }

        if (comp===0) {
            document.getElementById("cchoice").textContent = "Rock";
        } else if (comp===1) {
            document.getElementById("cchoice").textContent = "Paper";
        } else {
            document.getElementById("cchoice").textContent = "Scissors";
        }

        if (player == comp) {
            document.getElementById("desc").textContent = "Draw!";      
        } else if (player == 0) {
            if (comp == 1) {
                document.getElementById("desc").textContent = "You lost the round!";
                co++;
            } else {
                document.getElementById("desc").textContent = "You won the round";
                pl++;
            }
        } else if (player == 1) {
            if (comp == 0) {  
                document.getElementById("desc").textContent = "You won the round";
                pl++;
            } else {
                document.getElementById("desc").textContent = "You lost the round!";
                co++;
            }
        } else if (player == 2) {
            if (comp == 0) {  
                document.getElementById("desc").textContent = "You lost the round!";
                co++;
            } else {
                document.getElementById("desc").textContent = "You won the round";
                pl++;
            }
        }

        if (pl===5 || co===5) {
            if (pl===5) {
                document.getElementById("desc").textContent = "You won the game!";
            } else {
                document.getElementById("desc").textContent = "You lost the game!";
            }
            let cont = document.querySelector(".result");
            let elem = document.createElement("button");
            elem.textContent = "Play again";
            cont.appendChild(elem);
            elem = document.querySelector(".result button");
            elem.addEventListener('click', resetgame);
        }
    }

    document.querySelector(".player .score").textContent = pl;
    document.querySelector(".computer .score").textContent = co;
}

function resetgame(e) {
    pl = 0;
    co = 0;
    document.getElementById("desc").textContent = "";
    document.getElementById("pchoice").textContent = "";
    document.getElementById("cchoice").textContent = "";
    this.remove();
    document.querySelector(".player .score").textContent = pl;
    document.querySelector(".computer .score").textContent = co;
}

let btn = document.querySelectorAll('.select button');
btn.forEach(b => b.addEventListener('click', playRound));

// let player, input, pscore=0, cscore=0;

// while (true) {
//     while (true) {
//     input = prompt("Please choose either rock, paper, or scissors!");
//     if (input.toLowerCase() == "rock") {
//         player = 0;  
//         break; 
//     } else if (input.toLowerCase() == "paper") {
//         player = 1;
//         break;
//     } else if (input.toLowerCase() == "scissors") {
//         player = 2;
//         break;
//     }
//     alert("Error: your input cannot be recognized! Please check for typos and reenter your choice");
//     }
//     alert(playRound(player, getComputerChoice()));
// }