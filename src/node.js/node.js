
var aba2 = document.getElementById('aba2');

console.log(titulomenu);
console.log(rede);

rede.addEventListener('click', function(){

var aba1 = document.getElementById('aba1');    

if (titulomenu.style.display == "block") {
    titulomenu.style.display = "none";
} else {
    aba2.style.display = "block";
}
});