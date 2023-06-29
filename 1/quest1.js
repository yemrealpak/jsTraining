// time calculator
var userTime = prompt("Zaman Değeri Giriniz ?");
console.log(userTime);

var minutes=0;
var hours=0;

while(userTime >= 60){
    userTime -= 60;
    minutes++;
}

while(minutes >= 60){
    minutes -= 60;
    hours++;
}

alert(hours + "Saat" + minutes + " Dakika" + userTime + "Saniye")