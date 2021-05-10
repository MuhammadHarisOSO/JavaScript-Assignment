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

    numfirstdigit = number[0];
  numlastdigit = number%10;

  if(number.length > 2){
      console.log('Entered Numbers are: ' + number);
    console.log('First digit is :' + numfirstdigit);
    console.log('Last digit is :' + numlastdigit);
      if(numfirstdigit == numlastdigit){
        console.log("The First and Last Digit are Same.");
      }
      else{
        console.log("The First and Last Digit are NoT Same.");
      }
  }
  else{
    console.log("InVaLiD OpeRaToR!! TrY Again");
  }

}

