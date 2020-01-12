import {hideWindow} from "./modal-window";

export function init_users_list() {
	const history = document.getElementById("history");
	const usersList = document.getElementById("usersList");
	if (usersList.style.display == "block") {
		hideWindow();
		usersList.style.display = "none";
		if (screen.width < 700) {
			usersList.style.width = "30%";
			history.style.display = "block";
		}
	} else {
		hideWindow();
		usersList.style.display = "block";
		if (screen.width < 700) {
			usersList.style.width = "100%";
			history.style.display = "none";
		}
	}
}