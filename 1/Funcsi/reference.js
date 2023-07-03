//primitive

let isim = 'yunus';
let yeni = isim;
isim = 'Emre';

console.log(isim ,yeni);

//Reference types array object

let renkler = ['kırmızı','mavi']
let yenirenkler = renkler

renkler.push('sarı');
renkler.unshift("beyaz");
renkler[4] = 'siyah';

console.log(renkler,yenirenkler);

//array ve object aslında değerleri değil tutulan alanı işaret eder (adres)(pointer benzeri)

renkler = ['kırmızı','mavi']
console.log(renkler,yenirenkler);

//!!!tuttuğu alan değişti içeriklerin önemi yok yeni array eski adreste kaldı
