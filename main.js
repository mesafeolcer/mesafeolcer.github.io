let stream = 0;
const changeStream = () => {	
	if (stream >= 15) 
		stream = stream % 15;
	else
		stream += 1;

	return stream;
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#remote').addEventListener('click', () => {
		let stream = document.querySelector("#stream");
	
		stream.src = "img/".concat(changeStream().toString().concat(".jpg"));
		
		return false;
	})
	
	document.querySelector('#degrees').addEventListener('click', (ev) => {
		const inputValue = parseInt(ev.target.value);
		const outputBox  = document.querySelector("#result");
		
		outputBox.value  = (635040000 - (inputValue ** 2)) / (50400 * inputValue);
		
		return false;
	})
})