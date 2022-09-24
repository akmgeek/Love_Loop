var count = 0;
var count2 = 0;
const try_this = ["I love you because you have a beautiful eyes. <br>Now do you love me ?","I love you because you have a very cute smile. <br>Now do you love me ?", "I love you because you are awesome !<br>Now do you love me ? ", "I love you because I want to love you. <br>Now do you love me ?", "Yaar ! I love you n. <br>Lets accept it ki tum bhi karte ho. ", "Yes click kar hi do yaar.", "Are ab maan bhi jao ki tum bhi pyaar karte ho mujhse", "Dekho itni zid thik nhi, Click YES", "Are yaar ! ab maan bhi jao :)", "Ab tak to pyaar ho hi gya hoga. ?<br>Click Yes", "Bahut dil se keh raha hu ki tmse pyaar krta hu. <br>Tum bhi kar lo n.", "Yaha tak aa gye NO NO click kar ke. <br>Thak gaye hoge chalo ab maan bhi jao. CLICK YES", "Thik hai fir mai bhi thakunga nhi , sab dubara reapeat karunga jab tak tum maan nhi jaate ki mujhse pyaar karte ho varna YES dba ke maan lo ki pyaar karte ho."]
const emoji_ls = ["&#128566", "&#128579" , "&#128578"];

document.getElementById("question").innerHTML = "Do you love me ?";
document.getElementById("emoji").innerHTML = "&#128578";

function next_try(){
    if(count<try_this.length){
        document.getElementById("question").innerHTML = try_this[count];
        count = count+1;
    }
    else{
        count = 0;
    };
    if(count2<emoji_ls.length){
            document.getElementById("emoji").innerHTML = emoji_ls[count2];
            count2 = count2+1;
        }
    else{
            count2 = 0;
        }
    }

function on_yes_button(){
    document.getElementById("question").innerHTML = "I already know that ! Btw I love you too &#128151."
    document.getElementById("emoji").innerHTML = "&#128512";
}