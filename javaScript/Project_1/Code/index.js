//Q#12//
var randomnum1 = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
console.log(randomnum1);    

var randomnum2 = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
console.log(randomnum2);    
//Q#12 => END//


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
  // write all your code here
  console.log(`My name is ${name} and I am ${age} years old`);

  //Q#1//

if(no1 % 2 ==0){
  console.log('Number is Even');
  }
  else{
    console.log('Number is Odd!');
  }



  //Q#2//
  if(num > 0 ){
    console.log('Number is Positive');
    }
    else if(num < 0){
      console.log('Number is Negative');
    }
    else if(num % 1 == float){
      console.log('Number is Float');
    }
    else{
      console.log('Faultyy Operator');
    }



    //Q#3//
    var Fahr = (9/5)*temp + 32;
    console.log(Fahr);



    //Q#4//
    var YEN;
    var EUROS;

    var YEN = 109.64*dRate;
    var EUROS = 0.83*dRate;

    console.log('Dollar converted into YEN is ' + YEN);
    console.log('Dollar converted into EUROS is ' + EUROS);
    


    //Q#5//
    var avg = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
    console.log('Average is ' + avg);



    //Q#6//
    if(InputNum >= 90 && InputNum <= 100){
      console.log('You Got A');
    }
    else if(InputNum >= 80 && InputNum <= 89){
      console.log('You Got B');
    }
    else if(InputNum >= 70 && InputNum <= 79){
      console.log('You Got C');
    }
    else if(InputNum >=60 && InputNum <= 69){
      console.log('You Got D');
    }
    else{
      console.log('You are FAIL!!');
    }

    console.log(InputNum);    


    //Q#7//
    if(InputNum1 == InputNum2){
      console.log('Both Numbers are Equal');
    }
    else if(InputNum1 > InputNum2){
      console.log(InputNum1 + ' is larger');
      console.log(InputNum2 + ' is smallar');
    }
    else if(InputNum2 > InputNum1){
      console.log(InputNum2 + ' is larger');
      console.log(InputNum1 + ' is smallar');
    }
    else{
      console.log('509_ERROR');
    }



    //Q#8//
    if(Inum > 0 && Inum <= 10){
      switch(Inum%10){
        case 1:
          console.log('The Roman numeral is I');
        break;

        case 2:
          console.log('The Roman numeral is II');
        break;

        case 3:
          console.log('The Roman numeral is III');
        break;

        case 4:
          console.log('The Roman numeral is IV');
        break;

        case 5:
          console.log('The Roman numeral is V');
        break;

        case 6:
          console.log('The Roman numeral is VI');
        break;

        case 7:
          console.log('The Roman numeral is VII');
        break;

        case 8:
          console.log('The Roman numeral is VIII');
        break;

        case 9:
          console.log('The Roman numeral is IX');
        break;

        case 10:
          console.log('The Roman numeral is X');
        break;
        default:
          console.log('InValid NumBer');
      }
    }

    
      //Q#9//
      var area1 = L1*W1;
      var area2 = L2*W2;

      console.log(area1);
      console.log(area2);

      if(area1 > area2){
        console.log(area1 +  ' is Larger');
      }
    else{ 
      console.log(area2 + ' is Larger'); 
    }
    


      //Q#10//
      if(month >0 && month <=12 && date >0 && date <=30){
      console.log('Entered Date is: ' + date+ '/' + month + '/' + year );
      }
      else{
        console.log('InVaLiD FoRmaT');
      }



    //Q#11//
    var weight;
    weight = InputMass * 9.8;

    if(weight > 1000){
    console.log('It is to Heavy ' + weight);
  }
  else if(weight < 10){
    console.log('This object is too Light ' + weight);
  }
    else{
      console.log('weight');
    }



   //Q#12//
   const correctAnswer = randomnum1 + randomnum2; 
   if(answer == correctAnswer){
     console.log('Congratulations!! Your Answer is Correct: ');
   }
   else{
   console.log('Answer is Not Correct');
   console.log('Correct Answer is: ' + correctAnswer);
 }
 //Q#12--END//


     //Q#13//
    var resultInMinute = InputSecond/60;     
    if(InputSecond <= 3600 && InputSecond >=60){
      console.log('Number of Second: ' + resultInMinute);
    } 
    else{
      console.log('InVaLiD NumBeR');
    } 
    
    var resultInHours = InputSecond/3600;
    if(InputSecond <= 86400 && InputSecond >=3600){
      console.log('Number of Hours: ' + resultInHours);
    }
    else{
      console.log('InVaLiD NumBeR');
    }
    
    var resultInDays = InputSecond/86400;
    if(InputSecond <= 86400 && InputSecond >=3600){
      console.log('Number of Days: ' + resultInDays);
    }
    else{
      console.log('InVaLiD NumBeR');
    }


    //Q#14//
    var price=99;
    var p1discount = price - (price*20/100);
    var p2discount = price - (price*30/100);
    var p3discount = price - (price*40/100);
    var p4discount = price - (price*50/100);

    if(InputItmes >=10 && InputItmes <=19){
      console.log('Your 20% Discount is: ' +p1discount);
    }
    else if(InputItmes >=20 && InputItmes <=49){
      console.log('Your 30% Discount is: ' +p2discount);
    }
    else if(InputItmes >=50 && InputItmes <=99){
      console.log('Your 40% Discount is: ' +p3discount);
    }
    else if(InputItmes >100){
      console.log('Your 50% Discount is :' +p4discount);
    }
    else{
      console.log('InVaLiD');
    }
 

     //Q#15//
    var c1charges = 10*checks;
    var c2charges = 8*checks;
    var c3charges = 6*checks;
    var c4charges = 4*checks;

    console.log(checks);
    console.log(c1charges);

    if(checks >=1 && checks <=20){
      console.log('Monthly Banks fee for a month: $' +c1charges);
    }
    else if(checks >=20 && checks <=39){
      console.log('Monthly Banks fee for a month : $' +c2charges);
    }
    else if(checks >=40 && checks <=59){
      console.log('Monthly Banks fee for a month: $' +c3charges);
    }
    else{
      console.log('Monthly Banks fee for a month: $' +c4charges);
    }
   

    // //Q#16//
    var AoC = 3.14159*checks*checks;
    var AoR = Length*Width;
    var AoT = InputLength*InputBase*InputHeight;

      console.log('Area of Circle: '+AoC);
      console.log('Area of Rectangular: '+AoR);
      console.log('Area of Triangle: '+AoT);



    //Q#17//
    var caloriesfromfat = fats*9;
    var caloriesPercentage = (caloriesfromfat/calories)*100;
    
    if(caloriesPercentage >30 && caloriesPercentage <100){
      console.log('Calories Percentage: '+caloriesPercentage+'% Calories are too High.');
    }

   else if(caloriesPercentage <30){
    console.log('Calories Percentage: '+caloriesPercentage+'% Calories are too Low.');
  }
  else if(caloriesfromfat === fats){
    console.log('InVaLiD EnTerY');
  }
  else{
    console.log('InVaLiD EnteRy');
  }


  // //Q#19//
  const monthlyChargesA = 9.95;
  const monthlyChargesB = 14.95;
  const monthlyChargesC = 19.95;  

  if(package == "A" || package == "a" && numOfHour > 0 && numOfHour <= 10){
    console.log('Your Monthly Bill is: $'+monthlyChargesA);
  }
  else if(package == "A" || package == "a" && numOfHour > 10){
    const additionalHours = numOfHour - 10;
    const bill = monthlyChargesA + (additionalHours*2);
    console.log('Your Monthly Bill is: $'+bill);
  }

  if(package == "B" || package == "b" && numOfHour > 10 && numOfHour <= 20){
    console.log('Hello Mr/Mrs '+name + ' Your Monthly Bill is: $'+monthlyChargesB);
  }
  else if(package == "A" || package == "a" && numOfHour > 20){
    const additionalHours = numOfHour - 20;
    const bill = monthlyChargesB + (additionalHours*1);
    console.log('Hello Mr/Mrs '+name+'Your Monthly Bill is: $'+bill);
  }

  if(package == "C" || package == "c"){
    console.log('Hello Mr/Mrs '+name+'Your Monthly Bill is: $'+monthlyChargesC);
  }


  // //Q#20//
  if(hours> 0 && hours <7){
    const rpm = 12;
    const bill = numOfMin * rpm;
    console.log('Rate per Minute: $'+rpm);
    console.log('Call starts at '+hours+':'+min+ 'Your Total Cost is: '+ bill );

  }
  else if(hours> 7 && hours <19){
    const Rpm = 55;
    const bill = numOfMin * Rpm;
    console.log('Rate per Minute: '+Rpm);
    console.log('Call starts at '+hours+':'+min+ 'Your Total Cost is: '+ bill );
    
  }
  else if(hours> 19 && hours <24){
    const RpM = 35;
    const bill = numOfMin * RpM;
    console.log('Rate per Minute: '+RpM);
    console.log('Call starts at '+hours+':'+min+ 'Your Total Cost is: '+ bill );

  }

   
  }
