// problem --1

let positiveNumber = 7;
function mindGame(positiveNumber) {
  let numberMultiplication = positiveNumber * 3;
  let numberAdd = numberMultiplication + 10;
  let numberDivision = numberAdd / 2;
  let numberSubtract = numberDivision - 5;
  return numberSubtract;
}

let resultMindGame = mindGame(positiveNumber);

// text: 1/ There is a function, where i took a positive Number with the function name of mindGame such as 5.
//       2/ Then i multiply the number by three , add 10 number with that ,  i divide the number by 2 and also subract 5.
//       3/ Conclution : if you want get the result or return value , you have to console example= console.log(result); .



// problem --2

let inputString = 'jaber al mamun';

function evenOdd(inputString) {
  if (inputString.length % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

let output = evenOdd(inputString);

// Text: 1/ This is actually a even /odd number finding function but there i am getting the odd or even number from a String;
//       2/ For getting the String number , i take the length strategy to count the characters from the String;
//       3/Final count: the number is even or odd , therefore i take condition strategy such as = divided the String number by 2 and if the number output remainder = 0 ,that is even but the remainder = 1 that will be odd; 


// problem --3

function isLGSeven(number){
    let subtractNumber= number -7;
    if(subtractNumber<7){
        return subtractNumber;
    }else{
        let multiply = subtractNumber*2;
        return multiply;
    }
  
  }
  
  let findResult = isLGSeven(6);
 

//   Text: 1/ Here i take number as 6 and subtract the Number by 7, after that i take conditional function and give a condition ,if the number is below the number 7 then return subtractNumber resutl otherwise show multiply the number subtractNumber by 2. 
  
// problem -- 4

function findingBadData(number) {
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] < 0) {
            count++;
        }
    }
    return count;
}
let input = [2, -5, -7, -13];
let resultBadData = findingBadData(input);


// Text: 1/ Here we just count the negative number from indexof zero to 3 and we found 3 negative number,
//        2/For getting the negative number we use for loop length stratigy , where will count from idex number 0 till last part of the Array and we fix condition if the number is below 0 than it will be negative number (we know every -2 number is negative number);
//        3/ However ,at last return the negative numbers.


// problem --5



function gemsToDiamond(gems1,gems2,gems3){
    let total = (gems1 * 21) + (gems2 * 32) + (gems3 * 43);
    if((total>2000)-200){
      return total;
    }
  }
  let result = gemsToDiamond(1,1,1);

  
  // Text: 1/ Here we take the value 1 gems =1 Diamond and we count it in total also multify with the 3 friends jems for getting the result ,how much Diamond there are getting , 2/ Then we count it or set a condition if it is more than 2000(1000*2) that it will be minimized 2000 from total . 3/ Finally what it dose exist , that will be the counted Diamond for friends,
  