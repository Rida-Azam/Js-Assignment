//Day 2 (Task 1) 1 April 2023  "Zakat Calculator"

// var zakatPercentage;
// zakatPercentage = 0.025;
// var userInput=+ prompt( "Please Enter Your Amount : " )
// var result= userInput * zakatPercentage;
// var message= "Your Zakat value is ";
// var end= message + result;
// alert(end)
// alert("Your Zakat value is " + result )




//Day 3 (Task no 2) 12 April 2023  "calculate the fitrah amount"

/* calculate the fitrah amount, first, ask the user to enter the total number of family
members using the prompt and store the value in a variable called
"familyMembers". Next, ask the user to choose a fitrah method by providing them
options using the prompt, and store the selected method and its price in variables.
Then, use an if-else block to check the user's input and calculate the fitrah amount
by multiplying the selected method's price with the number of family members.
Finally, display the calculated fitrah amount using an alert message.*/



// var familyMembers =+ prompt("Enter the total number of family member : ")

// var result= familyMembers * option;

// var wheat=250;
// var barley=450;
// var dates=2100;
// var raisins=2800;

// var option=+ prompt("Choose any fitrah method you want : ")

// if (option==1) {
//   console.log(result= familyMembers *wheat);

//     }
//     else if (option==2 ) {
//         console.log(result= familyMembers * barley);

//     }

//     else if (option==3 ) {
//         console.log(result= familyMembers * raisins);

//     }
//     else if (option==4 ) {
//         console.log(result= familyMembers * dates);

//     }
//     else {
//        console.log("Please select any option")
//     }

//     alert("Your Calculated  Fitrah Amount Is : " + result)







//Day 3 (Task no 3) 12 April 2023  "Guess Game"

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.


// var secretNumber= 7;

// var userInput = + prompt("Enter Your Secret Number Between 1 and 10: ")


// if (userInput == secretNumber) {
//     document.write("Congratulations! You Guessed the Secret Number");
// }
// else if (userInput > secretNumber) {
//     document.write("Guess too High Number")
// }

// else if (userInput < secretNumber) {
//     document.write("Guess too Low Number")
// }
// else {
//     document.write("Not matched, try again :");
// }





//Day 3 (Task no 4) 12 April 2023  "capatilized letter "

/* Create a program that asks the user to enter a name, and then prints out the name
 with the first letter capitalized (Make your name in capitalized case).*/


// var name=prompt("Emter your name in lowercase :")

// document.write(name[0].toUpperCase() + name.slice(1).toLowerCase());




//Day 3 (Task no 5) 12 April 2023  

/* In this task, you will be creating two empty arrays called "contactNumbers" and
"contactNames". Using the prompt, you will ask the user to enter a contact number
and contact name. You will then push these values into their respective arrays
using the push method. After adding all the contacts, you will display the contact
numbers and names in the console. To do this, you will need to use a for loop to
iterate through both arrays and log each element to the console.*/



// var contactNumber = [];
// var contactName = [];

// for (var i = 0; i < 3; i++) {
//   var number = prompt("Enter a contact number:");
//   var name = prompt("Enter a contact name:");
//   contactNumber.push(number);
//   contactName.push(name);
// }

// for (var i = 0; i < contactNumber.length; i++)
// {
//   console.log(`Contact ${i+1}: ${contactNumber[i]} (${contactName[i]})`);
//   alert(`Contact ${i+1}: ${contactNumber[i]} (${contactName[i]})`);
// }




//Day 3 (Task no 6) 12 April 2023


/* Create an Array that contains different products, and get input from the user in which you
ask your user to give the position of that element he/she wants. Now remove that Item
from your array and console the removed item, Also display the remaining items in the
array and total number of items remaining.
 */

//total 9 products

// var products=["lays" , "kurleez" , "bingo", "wavy" , "pringles" , "kurkure" , "cheetos" , "super crisp" , "cheese ball"];

// console.log(products);

// var inputUser=+ prompt("Which snacks position  do you want to eat?");

// var removedProduct=products.splice(inputUser,1);

//remaining item  8

// console.log("The removed item is:" +removedProduct);

// console.log(`The remaining items in the array are: ${products}`);

// console.log(`Total number of items remaining: ${products.length}`);




//Day 3 (Task no 7) 12 April 2023

/* Create a program that asks the user for their nationality, gender, and age using the prompt
function. The program should then use nested if-else statements to determine if the
person is eligible to vote.
First, the program should check if the person is Pakistani or Indian. If they are not, the
program should display a message saying they are not eligible to vote.
If they are Pakistani or Indian, the program should then check their gender. If the person is
male and over the age of 18, they are eligible to vote. If the person is female and over the
age of 18, the program should ask if they are married. If they are married, they are eligible
to vote. If they are not married, they are not eligible to vote.
If the person is under 18, the program should display a message saying they are not eligible
to vote.
  */


// if (nationality === 'Pakistani' || nationality === 'Indian') {  
//   console.log("You are eligible to vote");

//   if (age>= 18 && gender === 'male'){
//     console.logs("You are eligible to vote");
//           // Nested - if statement
//           // Will only be executed if statement above
//           // it is true
//           if ( age>= 18 && gender === 'female'){
//             var status=prompt("Are you married ")
//             if((status===yes &&age>= 18) ||( status===no && age>= 18 ))
//             console.logs("You are eligible to vote");
//           else
//           console.log("You are not eligible to vote");
//     }}
//   }



//Day 3 (Task no 8 ) 12 April 2023

/* You have an array of that contains the name of Pakistani Teams Player selected for
WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
India, So make an array of final team players (11 Players) that will be playing in tomorrows
match from the WorldCupSquad array.*/


// var WorldCupSquad= ["Player01",  "Player02",  "Player03",  "Player04",  "Player05",  "Player06",  "Player07",  "Player08",  "Player09",  "Player10", "Player11" , "Player12",  "Player13",  "Player14",  "Player15", ];

// var finalTeam = WorldCupSquad.slice(3,14)

// console.log(WorldCupSquad)
// console.log(finalTeam)


