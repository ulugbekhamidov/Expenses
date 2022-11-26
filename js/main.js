alert ("Hello welcome")
var d = 750;
var У = 120;
var dkurs = 10966.96 * d;
var Уkurs = 11181.36 * У;
var summa = dkurs + Уkurs; 
var money = Number(prompt("Pulingiz qancha?"));
var hText = document.querySelector(".headen");
if (money >= summa) {
    hText.textContent = "Oq yul";
}else {
    hText.textContent = "Uyda o'tir"
}