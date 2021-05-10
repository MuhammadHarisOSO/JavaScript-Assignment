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
     arr = number.split("");
        halfDigitSum = number.length/2;
       halfDigitSum = Math.floor(halfDigitSum);
    console.log(number.length);
    console.log(halfDigitSum);
    
    let result = 0;
    for (let index = 0; index < halfDigitSum; index++) {
      result = result + parseFloat(arr[index]);
    }
    console.log('Sum is: ' + result);
  }


