const MIN = 8;
const MAX = 24;

const input = document.getElementById("numOfChars");
input.min = MIN;
input.max = MAX;
input.value = MIN;

function genPassword(){
    const numOfChars = Number(document.getElementById("numOfChars").value);


    if(!Number.isInteger || numOfChars < MIN || numOfChars > MAX){
        document.getElementById("result").textContent = `Invalid number of character selected. Try again.`;
        return;
    }

    const uppercase = document.getElementById("upperCheck").checked;
    const number = document.getElementById("numberCheck").checked;
    const symbols = document.getElementById("symbolCheck").checked;

    const lettersArr = [..."abcdefghijklmnopqrstuvwxyz"];
    const symbolsArr = [..."!@#$%^&*()_+-="];

    let result = "";

    for(let i = 0; i < numOfChars; i++){
        let newChar = lettersArr.at(Math.floor(Math.random() * lettersArr.length));
       
        //  Math for random chars
        if(uppercase && Math.floor(Math.random() * 3) > 1){
            newChar = newChar.toUpperCase();
        }

        if(number && Math.floor(Math.random() * 10) > 6){
            newChar = Math.floor(Math.random() * 10);
        }

        if(symbols && Math.floor(Math.random() * 10) > 6){
            newChar = symbolsArr.at(Math.floor(Math.random() * symbolsArr.length));
        }

        result += String(newChar);
    }

    document.getElementById("result").textContent = `Your password is: ${result}`;

}