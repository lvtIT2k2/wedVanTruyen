function thoigian(){
	const second = document.querySelector('#seconds')
	let d = new Date();
	second.innerHTML = d.getSeconds();
	let seconds = second.innerHTML;

	const min = document.querySelector('#min')
	min.innerHTML = d.getMinutes();
	let mins = min.innerHTML;

	const hours = document.querySelector('#hourss')
	hours.innerHTML = d.getHours();
	let hourss = hours.innerHTML;

	const day = document.querySelector('#number')
	day.innerHTML = d.getDays();
	let days = day.innerHTML;
}
setInterval(thoigian,1000);
const xoay = document.querySelectorAll('.img-studio');
