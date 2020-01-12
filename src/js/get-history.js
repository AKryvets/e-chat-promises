import {drawIp, drawMessage} from "./draw-message";

export function getHistory(name) {
	const xhr = new XMLHttpRequest();
	let response;
	xhr.open("GET", "/history", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onload = function () {
		if (xhr.status != 200) {
			alert(`Error ${xhr.status}: ${xhr.statusText}`);
		}
	};

	xhr.send();

	xhr.onload = function () {
		response = JSON.parse(xhr.responseText);
		drawIp(response.ip);
		response.docs.map(message => {
			if (name != message.nickname) {
				drawMessage(false, message);
			} else {
				drawMessage(true, message);
			}
		})
	};
}