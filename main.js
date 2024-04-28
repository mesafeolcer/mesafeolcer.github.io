var kanal = 0;

function yayinSec() {
	kanal += 1;
	if (kanal >= 17) kanal = kanal % 17;
	return kanal;
}

function yayinDegistir() {
	var img = document.getElementById("yayin");
	
	img.src = "resimler/".concat(yayinSec().toString().concat(".jpg"));
	
	return false;
}
