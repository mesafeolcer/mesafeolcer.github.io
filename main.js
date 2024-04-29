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

let degToRad = (x) => { return x * (Math.PI / 180) }
let radToDeg = (x) => { return x * (180 / Math.PI) }
let tandeg  = (x) => { return (Math.tan(degToRad(x))) };
let atandeg = (x) => { return radToDeg(Math.atan(x)) };	

let mesafeHesapla = () => {
	let sonuc = document.getElementById("sonuc");
	let aci   = parseInt(document.getElementById("deger").value);
		
	
	sonuc.value = Math.tan( (1/180) * Math.PI * (90 - 2 * Math.atan(aci/70)) ).toString();
	
	return false;
}
