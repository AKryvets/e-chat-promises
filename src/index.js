import "./js/modal-window";
import './styles/style.less';
import {sendName} from "./js/send-name";
import {signUpUser} from "./js/sign-up";
import {validation} from "./js/validation";
import {initFields} from "./js/checkButton";
import {getHistory} from "./js/get-history";
import {loadHistory} from "./js/load-history";
import {init_users_list} from "./js/users-list.js";
import {authenticateUser} from "./js/auth";
import {drawMessage, drawList, drawIp} from "./js/draw-message";
import {changeName, getNickname, setNickname} from "./js/change-name";
import {sendButton, hideWindow, toggleForWindow, variablesForModal, entryButton, signupButton} from "./js/modal-window";

const reg = document.getElementById("reg");
const enter = document.getElementById("enter");
const error = document.getElementById("error");
const hidden = document.querySelector('.header');
const history = document.getElementById("messageHistory");
const modalReg = document.getElementById("modalRegWindow");
const container = document.getElementById("containerEntry");
const nameBlock = document.getElementById("nickname");
const errorBlock = document.getElementById("errorReg");
const errorEntry = document.getElementById("errorEntry");
const modalEntry = document.getElementById("modalEntryWindow");
const menuUsersList = document.getElementById("menuUsersList");

reg.addEventListener("click", function () {
	modalEntry.style.display = "none";
	modalReg.style.display = "block";
});

enter.addEventListener("click", function () {
	modalEntry.style.display = "block";
	modalReg.style.display = "none";
});

history.addEventListener("scroll", async function () {
	const  history = document.getElementById("messageHistory");

	if (history.scrollTop == 0) {
			let name = getNickname();
			let response = await loadHistory();

			const scrollFromButton = history.scrollHeight;

			response.docs = response.docs.reverse();
			response.docs.map(message => {
				if (name != message.nickname) {
					drawMessage(false, message, true);
				} else {
					drawMessage(true, message, true);
				}
			});

			history.scrollTop = history.scrollHeight - scrollFromButton;
	}
});

entryButton.addEventListener('click', async function () {
	const name = document.getElementById("nicknameEntry").value;
	const password = document.getElementById("passwordEntry").value;

	if (validation(name, password, errorEntry)) {
		errorEntry.style.display = "none";
		const response = await authenticateUser(name,password);
			if(response.status){
				hidden.style.display = "flex";
				nameBlock.placeholder = name;
				container.style.display = "none";
				errorEntry.style.display = "none";

				getHistory(name);
				setNickname(name);

				setInterval(function () {
					sendName(getNickname());
				}, 5000)

			} else {
				errorEntry.style.display = "block";
				errorEntry.innerHTML = "Пользователь с таким именем и паролем не найден";
			}
	}
});

signupButton.addEventListener('click', async function () {
	const name = document.getElementById("nicknameReg").value;
	const password = document.getElementById("passwordReg").value;

	if (validation(name, password, errorBlock)) {
		errorBlock.style.display = "none";
			const response = await signUpUser();
			if(response.status){
				hidden.style.display = "flex";
				nameBlock.placeholder = name;
				container.style.display = "none";
				errorBlock.style.display = "none";

				setNickname(name);
				getHistory(name);

				setInterval(function () {
					sendName(getNickname());
				}, 5000)
			} else {
				errorBlock.style.display = "block";
				errorBlock.innerHTML = "Это имя занято другим пользователем: " + response.nickname;
			}
	}
});

menuUsersList.addEventListener("click", function () {
	init_users_list();
});

document.addEventListener("DOMContentLoaded", function () {
	initFields();
});

sendButton.sendButton.addEventListener('click', function () {
	sendMessage();
});

variablesForModal.overlay.addEventListener('click', function () {
	hideWindow();
});

variablesForModal.closeButton.addEventListener('click', function () {
	toggleForWindow();
});

variablesForModal.settingsButton.addEventListener('click', function () {
	toggleForWindow();
});

variablesForModal.setNickNameButton.addEventListener('click', async function () {
	const name = document.getElementById("nickname").value;
	const password = document.getElementById("passwordEntry").value;
	const password1 = document.getElementById("passwordReg").value;

	if (validation(name, password.length != 0 ? password:password1, errorBlock)) {
		error.style.display = "none";
			const response =await changeName(name);
			if (response.status) {
				nameBlock.placeholder = name;
				errorBlock.style.display = "none";

				hideWindow();
				setNickname(name);
			} else {
				errorBlock.style.display = "block";
				errorBlock.innerHTML = "*Это имя занято другим пользователем: " + response.name;
			}
	}
});

//const ws = new WebSocket('ws://e-chat-com.eu-4.evennode.com/');

const ws = new WebSocket('ws://localhost:3001');

const input = document.getElementById('inputField');

input.onkeypress = e => {
	if(e.keyCode == 13 && !e.shiftKey) {
		sendMessage();
	}
};

ws.onopen = () => {
};

ws.onclose = () => {
};

async function sendMessage() {
	let newMessage = sendButton.inputField.value;
	sendButton.inputField.value = "";
	if (newMessage === "" || !newMessage.replace(/\s/g, '').length) return -1;
	const data = {
		nickname: getNickname(),
		message: newMessage.trim(),
		createdAt: new Date().toUTCString()
	};
	await ws.send(JSON.stringify(data));
	drawMessage(true, data);

}

ws.onmessage = response => {
	try {
		const data = JSON.parse(response.data);
		if (data.forList == true) {
			drawList(data);
		} else if (data.forModal == true) {
			drawIp(data);
		} else {
			drawMessage(false, data);
		}
	} catch (e) {
		console.log("Ошибка: " + e)
	}
};