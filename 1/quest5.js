// 3 Sayı ortlama

var bir = parseInt(prompt("1. Sayı giriniz = ?"))
var iki = parseInt(prompt("2. Sayı giriniz = ?"))
var uc= parseInt(prompt("3. Sayı giriniz = ?"))

var ort = (bir+iki+uc)/3;

alert("Ortalama:" + ort.toFixed(2))