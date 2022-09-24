
let Q1 = "Putting Question 1";
let Q2 = "Putting Question 2";
let Q3 = "Putting Question 3";
let Q4 = "Putting Question 4";
let Q5 = "Putting Question 5";
let Q6 = "Putting Question 6";
let Q7 = "Putting Question 7";
let Q8 = "Putting Question 8";
let Q9 = "Putting Question 9";
let Q10 = "Putting Question 10";
let Q11 = "Putting Question 11";
let Q12 = "Putting Question 12";
let Q13 = "Putting Question 13";
let Q14 = "Putting Question 14";
let Q15 = "Putting Question 15";
let Q16 = "Putting Question 16";
let Q17 = "Putting Question 17";
let Q18 = "Putting Question 18";
let Q19 = "Putting Question 19";

// const try_this = ["Putting Question 19", "Putting Question 9"]
const try_this = [Q1, Q2, Q3]
document.getElementById("question").innerHTML = "True";
// document.getElementsByTagName().innerHTML = "jflskjdl0";
function next_try(){
    document.getElementById("question").innerHTML = try_this[1];
}