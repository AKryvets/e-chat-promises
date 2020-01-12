export const variablesForModal = {
	overlay: document.getElementById('overlay'),
	closeButton: document.getElementById('closeButton'),
	modalWindow: document.getElementById('modalWindow'),
	settingsButton: document.getElementById('gear-button'),
	modalRegWindow: document.getElementById('modalRegWindow'),
	setNickNameButton: document.getElementById('setNickname')
};

export const sendButton = {
	sendButton: document.getElementById('sendButton'),
	inputField: document.getElementById('inputField')
}

export function toggleForWindow() {
	variablesForModal.overlay.classList.toggle('show');
	variablesForModal.modalWindow.classList.toggle('show');
}

export function hideWindow() {
	variablesForModal.overlay.classList.remove("show");
	variablesForModal.modalWindow.classList.remove("show");
}

export function hideRegWindow() {
	variablesForModal.modalRegWindow.classList.remove("show");
	variablesForModal.overlay.classList.remove("show");
}

export const entryButton =  document.getElementById("entry");
export const signupButton =  document.getElementById("registration");