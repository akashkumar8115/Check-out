
let pers = Math.floor(Math.random() * 20) + 80;
let lo = Math.floor(Math.random() * 100) + 0;
let ri = Math.floor(Math.random() * 20) + 80;
let wi = Math.floor(Math.random() * 30) + 70;
let an = Math.floor(Math.random() * 50) + 50;
let ca = Math.floor(Math.random() * 70) + 30;
let love = Math.floor(Math.random() * 50) + 50;
function getRandomInt() {
    document.getElementById("pers").innerHTML = pers + "% 🥰";
    document.getElementById("lo").innerHTML = lo + "% 😎";
    document.getElementById("ri").innerHTML = ri + "% ☺  ";
    document.getElementById("wi").innerHTML = wi + "% 🤗";
    document.getElementById("an").innerHTML = an + "% 😡";
    document.getElementById("ca").innerHTML = ca + "% ☺";
    document.getElementById("love").innerHTML = love + "% ❤";
    document.getElementById("kundli").style.display = "block";
}
if (window.outerWidth<489)
{
function login() {
document.getElementById("ss").style.display ="block";
document.getElementById("ss").style.position ="relative";
document.getElementById("ss").style.top ="14px";
document.getElementById("ss").style.width ="100%";
document.getElementById("ss").style.right ="0px";
document.getElementById("box").style.top ="120px";
document.getElementById("kundli").style.top ="120px";
document.getElementById("navf").style.display ="none";
}
}
else{
document.getElementById("btn").style ="disable";
}

if (window.outerWidth<489) {
function homem(){
    document.getElementById("navf").style.display="none";
    document.getElementById("hidebox").style.display="block";
    document.getElementsByClassName("aa").style.width="100%";
    document.getElementsByClassName("aa").style.Height="28px";
    document.getElementsByClassName("aa").style.position ="relative";
    document.getElementById("hidebox").style.position="relative";
    document.getElementById("btn").style.display ="none";

}
}
