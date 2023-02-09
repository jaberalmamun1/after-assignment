// var name = 'jaber';
// console.log(typeof name);

// var number = 33;
// console.log(typeof number);

// var isMyFriend = true;
// console.log(typeof isMyFriend);

// const nani = 'tor ki';
// console.log(nani);

// let heMani = 34;
// console.log(heMani);

// +++++++++++

// let num1 = 44;
// let num2 = 65;

// let total = num1+num2;
// console.log(total);

// -------

// let num1 = 34;
// let num2 = 23;
// let total = num1 - num2;
// console.log(total);

// *********

// let pen = 20;
// let more = 4;
// let qountity = pen * more;
// console.log(qountity);

//division

// let kola = 20;
// let person = 4;
// let divisionResult  =  kola / person;
// console.log(divisionResult);


//   comparision

// let num1 = 33;
// let num2 = 35;
// if(num1>num2){
//    console.log(33);
// }
// else{
//    console.log(35);
// };

// with function

// function isBig(num1,num2){
//     if(num1>num2){
//         return 'is big num1';
//     }
//     else{
//         return 'is big num2';
//     }
// }
// let comparision = isBig(33,45);
// console.log(comparision);

// function isQual(num1,num2){
//     if(num1!== num2){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let comparision = isQual(33,45);
// console.log(comparision);


// sortooo

// let babyNai = true;
// let availableTime = 8;
// let notMaried = false;
// if(babyNai==true&& availableTime==8 || notMaried==true){
//     console.log('confirm');
// }else{
//     console.log('not confirm');
// }

// let i=1 
// while (i<=18){
//   if(i%2==0){
//   console.log(i)
//   }
//   i++
// }


// for(let i=1; i<20; i++){
//     if(i%2 !==0){
//         console.log(i);
//     }
// }

// const scores = [22, 54, 76, 92, 43, 33];
// let length = scores.length;
// scores.includes('333', 4);
// console.log(scores);

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// console.log(cars.length);
// for (let i = 0; i < cars.length; i++) {
//     var car= cars[i];
//  console.log(car);
// }


// . তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

// let myMoney = 50000;
// let mac = 80000;
// let gamingLaptop = 60000;
// let lenovo = 40000;
// let oldLaptop = 20000;


// if(myMoney>myMoney){
//     console.log('mac kinbo');
// }else if(myMoney>gamingLaptop){
//     console.log('gaming laptop kinbo');
// }else if(myMoney>lenovo){
//     console.log('lenovo kinbo');

// }else if (myMoney>oldLaptop){
//     console.log('old ekta laptop kinbo');
// }else{
//     console.log('ja amer mobile ay valo');
// }


// আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

// way 1

// for(let i=0; i<10; i++){
//     console.log('আসকে আমার মন ভালো নেই ');
// }

// way2
// let count = 0;
// while(count<10){
//     console.log('আসকে আমার মন ভালো নেই ');
//     count++;
// }

// way 3
// console.log('node prblm-js\n'.repeat(10));

// একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 

// for(let i=58; i<98; i++){
//     console.log(i);
// }

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

//  for(let i=412; i<456; i++){
//         if(i%2 ==0){
//             console.log(i);
//         }
//     }


//  for(let i=411; i<456; i++){
//         if(i%2 !==0){
//             console.log(i);
//         }
//     }



// greaterthan  
// function greaterThenFive(numbers){
//     let count = 0;
//     for(let i=0; i<numbers.length; i++){
//         const element = numbers[i];
//         if(element>5){
//             count++;
//         }
//     }
//     return count;
// }
// let result = greaterThenFive([-1,2,3,4,5,6,-7,8,-9,10]);
// console.log(result);

// let sum2=(n*(n+1))/2;
// console.log('sum1',sum2);


// একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 


// function thirteenMultiplication(a){
//     for(i=1; i<=10; i++){
//         console.log(a,'*',i, '=', i*a);
//     }
// }
// console.log(thirteenMultiplication(13));





// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

// solved




// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

// function fullName(part,part2){
//     let result =part+' '+part2;
//     return result; 
// }
// let name = fullName('jaber','almamun');
// console.log(name);


// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  

// function squareIt(number) {
//     return number ** 2;
//   }
  
//   console.log(squareIt(5));


// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :


// const pizza = {

//  toppings: ['cheese', 'sauce', 'pepperoni'],

//  crust: 'deep dish',

//  serves: 2

// }
// console.log(pizza.toppings[2]);

// এবং pepperoni প্রিন্ট করবা।


// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 
// var name = 'John';
// var age = 30;
// var isStudent = false;


// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
// for(let i=0; i<=100; i++){
//     console.log(i);
// }

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 
// above 

// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 
// above 

// তুমি যদি ঠেকে ঠুকে কষ্টে মষ্টে জোড়াতালি দিয়ে হলেও করতে পারো। সেই লেভেলে যেতে হবে। জিনিসগুলা ১০০% হলে তো অবশ্যই ভালো। কোন কারণে ১০০% না হলেও ৮০% বুঝে নিতে হবে। দরকার হলে সময় দাও। শেখার জন্য ঘাম ঝরাতে হলে এখন ঝরাও। 


// বেসিক জাভাস্ক্রিপ্ট চেকলিস্ট 

// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 

// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 


// তুমি যদি ঠেকে ঠুকে কষ্টে মষ্টে জোড়াতালি দিয়ে হলেও করতে পারো। সেই লেভেলে যেতে হবে। জিনিসগুলা ১০০% হলে তো অবশ্যই ভালো। কোন কারণে ১০০% না হলেও ৮০% বুঝে নিতে হবে। দরকার হলে সময় দাও। শেখার জন্য ঘাম ঝরাতে হলে এখন ঝরাও। 

// .
// ১. variable: variable একটি গ্লাস, যেখানে আমরা পানি Store করি। এবং যদি প্রয়োজন পড়ে সেই পানি ফেলে দিয়ে নতুন পানি রাখি। প্রোগ্রামিং এর ক্ষেত্রেও ভেরিয়েবল ব্যাপারটা সেরকম। আমরা একটা ভেরিয়েবল ডিক্লার করে, সেখানে কোনো Number, Array, String, Object রাখতে পারি। তা প্রয়োজনে পরিবর্তন করে দিতে পারি। যে ভেরিয়েবলের মান পরিবর্তন হবে, সেই ভেরিয়েবলকে আমরা let দিয়ে ডিক্লেয়ার করব। তাছাড়া আমরা ভেরিয়েবলকে const দিয়ে ডিক্লেয়ার করব।

// ২. loop: loop মানে একটা ফাঁদ। যেখানে ঢুকে পড়লে নিজের ইচ্ছায় বের হওয়া যায় না। ৩৩ বার চেষ্টার পর বের হওয়া যায় লুপ থেকে। মজা করলাম, ১ বারের চেষ্টাও এই ফাঁদ থেকে বের হওয়া যায়, আবার হাজার বার চেষ্টা করেও বের হওয়া যায় না।

// ৩. array: অনেকগুলো মেয়ের সাথে প্রেম করিস। ১ম জন যে ছিল তার মেরিনা, তারপরের জনের নাম বিথী, তারপরের জনের নাম সুমি। অর্থাৎ ১নম্বরে ছিল মেরিনা, ২নম্বরে ছিল বিথী, ৩ নম্বরের ছিল সুমি। তাহলে লিখতে পারি- myPremikaList = Merina, Bithy, Sumi.

// myPremikaList এর মধ্যে কয়টি উপাদান আছে বের করব- girls.length দিয়ে। আবার, Merina মেয়েটির index নাম্বার কত? array এর 3 নম্বর পজিশনে কে আছে কিভাবে বের করব? arr[2] দিয়ে।

// ৪. object: আমাদের আশেপাশে যা কিছু দেখি সবকিছুই অবজেক্ট। বিজ্ঞানের ভাষায় যার জীবন নাই, তা অবজেক্ট। কিন্তু প্রোগ্রামিং এর ভাষায় জীব, জড় সবি অবজেক্ট। প্রত্যেকটা অবজেক্টের নির্দিষ্ট কিছু বৈশিষ্ট্য থাকে। ধর, তোর গার্লফ্রেন্ড একটা অবজেক্ট। তার বৈশিষ্ট্য গুলো লিখে একটা খামের রাখাই প্রোগ্রামিং এ অবজেক্ট ডিক্লার করা।


// ফাংশন আর অবজেক্ট একটু রিভিশন দিয়ে দাও  

// ১. ফাংশন কি জিনিস। এইটা কি কাজে লাগে এবং কিভাবে ফাংশন ডিক্লেয়ার করতে হয় 

// যেকোন প্রোগ্রামিং ল্যাংগুয়েজ শিখতে যান ফাংশন হচ্ছে তার মুল জিনিসগুলির মধ্যে একটা। সব ল্যাংগুয়েজেই ফাংশন আছে আর সবখানেই ফাংশনের মুল কনসেপ্ট টা একই।তবে সহজ। ফাংশন আর কিছুই না শুধু একটা কোডব্লক কে নাম দেয়া। পরে কোডের যেকোন জায়গায় সেই নাম ধরে ডাকলে কোডব্লকটি এক্সিকিউট হবে। যেমন নিচে একটা ছোট ফাংশন লিখেছি আর নাম দিয়েছি popup() এবং ইনপুট ট্যাগের ভিতর এই নাম ধরে ডাক দিয়েছি (এটাকে বলে ফাংশন কল করা)। 


// ২. ফাংশনে কেন প্যারামিটার ব্যবহার করা হয় 

// ফাংশন এর কাছে আমরা যা পাঠিয়ে দেই তাই প্যারামিটার। আর ফাংশন তখন এর উপর অপারেশন চালিয়ে একটি ফলাফল ফেরত দেয়। তাই, প্যারামিটার যার কাছে পাঠাচ্ছি, সেই ফাংশন , যে একটা কোন অপারেশন চালিয়ে একটি ফলাফল দিতে পারে।

// ৩. কেন ফাংশন থেকে রিটার্ন করা হয় 

// একটা ফাংশন তার কাজ শেষ হয়ে গেলে তাকে যে কল করেছে তার কাছে কোন একটা মান ফেরত পাঠাতে পারে। এটাই হচ্ছে ফাংশনটার রিটার্ন ভ্যালু। এটা int, char, double বা কোন ইউজার ডিফাইনড ডাটা টাইপ হতে পারে। এটা পয়েন্টারও হতে পারে। আবার যদি এমন হয় যে ফাংশনটা কোন ভ্যালু রিটার্ন করবে না, কেবল কিছু স্টেটমেন্ট এক্সিকিউট করবে তাহলে রিটার্ন টাইপ হবে void। সেক্ষেত্রে ফাংশনের শেষে return স্টেটমেন্ট না লেখলেও কোন অসুবিধা নেই। লেখলেও শুধু return; লেখতে হবে যেহেতু এর কোন রিটার্ন ভ্যালু নেই।

// ৪. রিটার্ন এর পর কিছু না লিখলে কি হয় 

// ৫. রিটার্ন এর পর কি কি জিনিস লেখা যায় 

// ৬. এইটা আমরা বলিনি--তারপরেও গুগলে সার্চ দিয়ে দেখো: function declaration vs function expression এই দুইটা মধ্যে ডিফারেন্স কি 

// Function declarations are when you create a function and give it a name. You declare the name of the function when you write the function keyword, followed by the function name.

// Function expressions are when you create a function and assign it to a variable. The function is anonymous, which means it doesn’t have a name

// ৭. Arrow function নিয়ে আমরা ফিউচারে শিখবো। এই কোর্স এ ই শিখবো। তারপরেও গুগলে সার্চ দাও: regular function vs arrow function

// ৮. ফাংশন এবং লুপ এর মধ্যে পার্থক্য কি 

// While এবং do while লুপের মধ্যে একটি পার্থক্য হলো while loop এ প্রথমে কন্ডিশন চেক করবে তারপর স্টেটমেন্ট এক্সিকিউট হব, do while loop এ স্টেটমেন্ট একবার প্রথমে এক্সিকিউট হবে তারপর কন্ডিশন চেক করবে। do while loop এ কন্ডিশন মিথ্যা হলেও স্টেটমেন্ট অন্তত একবার এক্সিকিউট করব।

// ৯. অবজেক্ট এবং array এর মধ্যে ডিফারেন্স কি  


// ১০. কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান পাওয়া যেতে পারে? 

// ১১. ১০. কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান বের করা যেতে পারে? 

// ১২. (এডভান্সড) একটু কোড লিখে অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও। 
// const car = {
//     type:"Fiat",
//      model:"500",
//       color:"white"
//     }
//     const properties = Object.values(car);
//     const keys = Object.keys(car);
//     console.log(properties, keys);

// প্রাকটিস প্রব্লেম- জাস্ট ২ টা।

// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 

// function triarea(side1, side2, side3){
//     let p =(side1+side2+side3)/2;
//     let a =Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
//     return a;
// }
// let result = triarea(11,9,9);
// let fixing = result.toFixed(3);
// console.log(fixing);


// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 

// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) return false;
//     }
//     return true;
//   }
//   let result = isPrime();
//   console.log(result);

// reverse way 

// var num =10;
// while(num>=1){
//     console.log(num);
//     num --;
// }

// for(let i=10; i>=1; i--){
//     console.log(i);
// }


// miles to km 
// function milesToKm(kms){
//     const mile = kms /
// }

// function getodd (number){
//     for(let i=0; i<number.length; i++){
//         const index = i;
//         const element = number[index];
//         console.log(index,element);
       
//     }
// }
// const myNumber = [13, 24, 43, 33, 45,];
// getodd(myNumber);


// function sumOfNum(number){
//     let sum =0;
//     for(let i=1; i<number; i++){
//         sum = sum +i;
//         console.log(i,sum);


// }
// return sum;
// }
// sumOfNum(33);


// multification 

// function multiNum(num){
//     let result = 1;
//     for(let i=1; i<=num; i++){
//         result = result *i;
//     }
//     return result;
// }
// const result = multiNum(7);
// console.log(result);


// reverse string 

// way 1
// function reverseString(str) {
//     return str.split('').reverse().join('');
// //   }
//   
// way 2
// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }

//   var originalString = "Hello, World!";
//   var reversedString = reverseString(originalString);
//   console.log("The reversed string is: " + reversedString);


// redian degreee
// let redian1 = 180;
// function redianToDegree(redian){
//     const pi =  3.14159;
//     const degree = (redian*(redian1/pi)).toFixed(2);
//     return degree;
// }
// let result = redianToDegree(199);
// console.log(result);

// how many pages need 
    
// function pageRequirement(book1, book2, book3) {
//     let total = book1 + book2 + book3;
//     return total;
// }

// console.log(pageRequirement(100, 200, 300));


// return only positiv nunber

// function positiveNumbers(numbers) {
//     let positive = [];
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] < 0) {
//         break;
//       }
//       positive.push(numbers[i]);
//     }
//     return positive;
//   }
  
//   console.log(positiveNumbers([12, 34, 16, 33, -76, 77, 77]));

// function mindGame(num) {
//     return ((num ** 3 + 10) / 2 - 5);
//   }



//   function mindGame(num) {
//     let result = num ** 3; // raise the input number to the power of 3
//     result += 10; // add 10 to the result
//     result /= 2; // divide the result by 2
//     result -= 5; // subtract 5 from the result
//     return result; // return the final result
//   }

// function isLGSeven(number){
//   let subtractNumber= number -7;
//   if(subtractNumber<7){
//       return subtractNumber;
//   }else{
//       let multiply = subtractNumber*2;
//       return multiply;
//   }

// }



// function gemsToDiamond(gems1,gems2,gems3){
//   let total = (gems1 * 21) + (gems2 * 32) + (gems3 * 43);
//   if((total>2000)-200){
//     return total;
//   }
// }
// let result = gemsToDiamond(1,1,1);
// console.log(result);


// Text: 1/ Here we take the value 1 gems =1 Diamond and we count it in total also multify with the 3 friends jems for getting the result ,how much Diamond there are getting , 2/ Then we count it or set a condition if it is more than 2000(1000*2) that it will be minimized 2000 from total . 3/ Finally what it dose exist , that will be the counted Diamond for friends,


// function compare(a, b) {

//   if (a == b) {
 
//   return true;
 
//   } else {
 
//   return false;
 
//   }
 
//  }
 
//  const result = compare(15, "15");
 
//  console.log(result);

What will be the output of the following JavaScript code? (Hey , Read Carefully)


function compare(a, b) {

 if (a.toString() === b) {

 return true;

 } else {

 return false;

 }

}

const result = compare(25, 25);

console.log(result)




  
