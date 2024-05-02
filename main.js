let kanal = 0;

let yayinSec = () => {	
	if (kanal >= 15) 
		kanal = kanal % 15;
	else
		kanal += 1;
	
	return kanal;
}

let yayinDegistir = () => {
	let img = document.getElementById("yayin");

	img.src = "resimler/".concat(yayinSec().toString().concat(".jpg"));
	
	return false;
}

let degToRad = (x) => { return x * (Math.PI / 180); }
let radToDeg = (x) => { return x * (180 / Math.PI); }

let tan  = (x) => { return Math.tan(degToRad(x)); }
let atan = (x) => { return (Math.atan(degToRad(x))); }
let cot  = (x) => { return 1/tan(x); }

let mesafeHesapla = () => {
	let sonuc = document.getElementById("sonuc");
	let aci   = parseInt(document.getElementById("deger").value);
	
	sonuc.value =(635040000 - (aci ** 2))/(50400 * aci);
	
	return false;
}
