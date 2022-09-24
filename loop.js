
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

var count = 0;
// const try_this = ["Putting Question 19", "Putting Question 9"]
const try_this = ["I love you because you have a beautiful eyes. <br>Now do you love me ?","I love you because you have a very cute smile. <br>Now do you love me ?", "I love you because you awesome !<br>Now do you love me ? ", "I love you because I want to love you. <br>Now do you love me ?", "Yaar ! I love you n. <br>Lets accept it ki tum bhi karte ho. ", "Yes click kar hi do yaar.", "Are ab maan bhi jao ki tum bhi pyaar karte ho mujhse", "Dekho itni zid thik nhi, Click YES", "Are yaar ! ab maan bhi jao :)", "Ab tak to pyaar ho hi gya hoga. ?<br>Click Yes", "Bahut dil se keh raha hu ki tmse pyaar krta hu. <br>Tum bhi kar lo n.", "Yaha tak aa gye NO NO click kar ke. <br>Thak gaye hoge chalo ab maan bhi jao. CLICK YES", "Thik hai fir mai bhi thakunga nhi , sab dubara reapeat karunga jab tak tum maan nhi jaate ki mujhse pyaar karte ho varna YES dba ke maan lo ki pyaar karte ho."]
document.getElementById("question").innerHTML = "Do you love me ? &#128578";
// document.getElementsByTagName().innerHTML = "jflskjdl0";
function next_try(){
    if(count<try_this.length){
        document.getElementById("question").innerHTML = try_this[count];
        count = count+1;
    }
    else{
        count = 0;
    }

}
function on_yes_button(){
    document.getElementById("question").innerHTML = "I know that ! I love you too."
}