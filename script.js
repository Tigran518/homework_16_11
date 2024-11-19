//Task1
var grade, score;
do {
    score = prompt("Enter user's score");
} while (score < 0 || score > 100);

if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score <= 89) {
    grade = 'B';
} else if (score >= 70 && score <= 79) {
    grade = 'C';
} else if (score >= 60 && score <= 69) {
    grade = 'D';
} else if (score >= 0 && score <= 59){
    grade = 'F';
}
console.log(grade);

//Task2
// var num;

// do {
//     num = prompt("Enter the number");
// } while (num < 1);

// if (num % 2 == 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

//Task3
// var num_of_month, season_of_year;
// do {
//     num_of_month = prompt("Enter the number of the month");
// } while (num_of_month < 1 || num_of_month > 12);

// if (num_of_month == 12 || num_of_month == 1 || num_of_month == 2) {
//     season_of_year = "Winter";
// } else if (num_of_month >= 3 && num_of_month <= 5) {
//     season_of_year = "Spring";
// } else if (num_of_month >= 6 && num_of_month <= 8) {
//     season_of_year = "Summer";
// } else if (num_of_month >= 9 && num_of_month <= 11) {
//     season_of_year = "Autumn";
// } 
// console.log(season_of_year);

//Task4
// var day_of_the_week = prompt("Enter the day of the week");

// switch (day_of_the_week) {
//     case "Monday":
//         console.log("Երկուշաբթի");
//         break;
//     case "Tuesday":
//         console.log("Երեքշաբթի");
//         break;
//     case "Wednesday":
//         console.log("Չորեքշաբթի");
//         break;
//     case "Thursday":
//         console.log("Հինգշաբթի");
//         break;
//     case "Friday":
//         console.log("Ուրբաթ");
//         break;
//     case "Saturday":
//         console.log("Շաբաթ");
//         break;
//     case "Sunday":
//         console.log("Կիրակի");
//         break;
//     default:
//         console.log("Ներմուծեք շաբաթվա օրերի անվանումները");
// }

//Task5
// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operation = prompt("Choose the operation (+, -, *, /):");
// var result;

// switch (operation) {
//     case "+":
//         result = num1 + num2;
//         break;
//     case "-":
//         result = num1 - num2;
//         break;
//     case "*":
//         result = num1 * num2;
//         break;
//     case "/":
//         result = num1 / num2;
//         break;
//     default:
//         console.log("Choose the operation (+, -, *, /)");
// }

// console.log("Output:" + result);