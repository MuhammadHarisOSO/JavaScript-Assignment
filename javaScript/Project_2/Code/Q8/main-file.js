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

    console.log('Entered Numbers are: ' + arr);
    
    console.log('Reversed Numbers are: ' + arr.reverse());

    if(parseFloat(arr.reverse) == parseFloat(number)){
            console.log(" It's a PalinDrome Number ");
        }
        else{
            console.log("It's Not a PalinDrome Number");
        }
  }




