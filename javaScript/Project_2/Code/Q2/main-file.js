// ignore this code completely
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input:not(input[type=submit])");
    const refresh_values = () => {
      for (const input of inputs) {
        window[input.name] = input.value;
      }
    };
    
  
    document.getElementById("submit").onclick = () => {
      refresh_values();
      main();
    };
  });
  
   function main() {
      
    arrNum = number.split("");
    arrLen = arrNum.length/2
    
    if (arrLen%1!==0) {
        arrLen = Math.floor(arrLen);
        console.log("Central element is " + arrNum[arrLen]);
        if((arrNum[arrLen]%2) == 0){
            console.log(`${arrNum[arrLen]} is an even number`);
        }
        else{
            console.log(`${arrNum[arrLen]} is an odd number`);
        }
    }
    else{
        const central = parseFloat(arrNum[arrLen]) + parseFloat(arrNum[arrLen-1]);
        console.log("Central element is " + central);
    
        if((central%2) == 0){
            console.log(`The sum of both central numbers ${central} is an even number`);
        }
        else{
            console.log(`The sum of both central numbers ${central} is an odd number`);
        }
    }
  }


