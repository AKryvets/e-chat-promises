import {getNickname} from "./change-name";

export function drawIp(data) {
	const ipAddress = document.getElementById('ip');
	ipAddress.innerHTML = data;
}

export const dateFormat = require('dateformat');

export function drawList(data) {

	const usersList = document.getElementById('usersList');
	while (usersList.firstChild) {
		usersList.removeChild(usersList.firstChild)
	}
	const menuUsersList = document.getElementById('menuUsersList');
	menuUsersList.innerText = `${data.users.length}`;

	for(let el of data.users) {

		const imageForList = document.createElement("div");
		const userIdForList = document.createElement("span");
		const containerForItem = document.createElement("div");

		imageForList.className = "container-for-item__image-for-list";
		userIdForList.className = "container-for-item__user-id-text";
		containerForItem.className = "container-for-item";

		usersList.appendChild(containerForItem);
		containerForItem.appendChild(imageForList);
		containerForItem.appendChild(userIdForList);
		if (el == "") {
			imageForList.innerHTML = "IP";
			userIdForList.innerHTML = el.userIp;
		} else {
			imageForList.innerHTML = el.trim()[0];
			userIdForList.innerHTML = el;
			if(el == getNickname()){
				userIdForList.style.color = "#5A80DB ";
			}
		}
	}
}

function drawUserMessage(message, data, position) {
	const history = document.getElementById("messageHistory");
	const timeBlock = document.createElement("span");
	const ownMessage = document.createElement("div");
	const messageBody = document.createElement("div");
	const messageText = document.createElement("span");
	const messageBlock = document.createElement("div");

	timeBlock.className = "message-body-own__time";
	ownMessage.className = "massages__message own-messages";
	messageBody.className = "own-messages__message-body message-body-own";
	messageText.className = "message-block-own__massage";
	messageBlock.className = "message-body-own__message-block message-block-own";

	messageText.innerHTML = message;
	timeBlock.innerHTML = `${dateFormat(new Date(data.createdAt), 'dd/mm/yy HH:MM')}`;

	if (position) {
		history.prepend(ownMessage);
	} else {
		history.appendChild(ownMessage);
	}
	ownMessage.appendChild(messageBody);
	messageBody.appendChild(messageBlock);
	messageBody.appendChild(timeBlock);
	messageBlock.appendChild(messageText);

	history.scrollTop = history.scrollHeight;
}

export function drawMessage(author, data, position) {
	if (author) {
		drawUserMessage(data.message, data, position);
	} else {
		drawAnotherMessage(data.message, data, position);
	}
}

function drawAnotherMessage(message, data, position) {

	const image = document.createElement("div");
	const history = document.getElementById("messageHistory");
	const timeBlock = document.createElement("span");
	const nameBlock = document.createElement("span");
	const ownMessage = document.createElement("div");
	const imageBlock = document.createElement("div");
	const messageBody = document.createElement("div");
	const messageText = document.createElement("span");
	const messageBlock = document.createElement("div");

	image.className = "image-block__image";
	nameBlock.className = "message-body__nickname";
	timeBlock.className = "message-body__time";
	ownMessage.className = "massages__message other-messages";
	imageBlock.className = "other-message__image-block";
	messageBody.className = "other-messages__message-body message-body";
	messageText.className = "message-block__massage";
	messageBlock.className = "message-body__message-block message-block";

	try {
		if (data.nickname == "") {
			image.innerHTML = "IP";
			nameBlock.innerHTML = data.userIp;
		} else {
			image.innerHTML = data.nickname.trim()[0];
			nameBlock.innerHTML = data.nickname;
		}
	} catch (e) {
		image.innerHTML = "IP";
		nameBlock.innerHTML = data.userIp;
	}
	messageText.innerHTML = message;
	timeBlock.innerHTML = `${dateFormat(new Date(data.createdAt), 'dd/mm/yy HH:MM')}`;

	if (position) {
		history.prepend(ownMessage);
	} else {
		history.appendChild(ownMessage);
	}
	imageBlock.appendChild(image);
	ownMessage.appendChild(imageBlock);
	ownMessage.appendChild(messageBody);
	messageBody.appendChild(nameBlock);
	messageBody.appendChild(messageBlock);
	messageBody.appendChild(timeBlock);
	messageBlock.appendChild(messageText);

	history.scrollTop = history.scrollHeight;
}
