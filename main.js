function yayinSec() {
	return Math.floor(Math.random() * 16);
}

function yayinDegistir() {
	var img = document.getElementById("yayin");
	
	img.src = "resimler/".concat(yayinSec().toString().concat(".jpg"));
	
	return false;
}
