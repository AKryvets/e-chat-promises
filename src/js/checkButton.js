const entry = document.getElementById("entry");
const nickname = document.getElementById("nickname");
const setNickname = document.getElementById("setNickname");
const passwordReg = document.getElementById("passwordReg");
const nicknameReg = document.getElementById("nicknameReg");
const registration = document.getElementById("registration");
const passwordEntry = document.getElementById("passwordEntry");
const nicknameEntry = document.getElementById("nicknameEntry");

export function initFields() {
    nickname.addEventListener("keyup", function () {
        checkFieldForChangeName(nickname, setNickname);
    });
    passwordReg.addEventListener("keyup", function () {
        checkFields(nicknameReg, passwordReg, registration);
    });
    nicknameReg.addEventListener("keyup", function () {
        checkFields(nicknameReg, passwordReg, registration);
    });
    passwordEntry.addEventListener("keyup", function () {
        checkFields(nicknameEntry, passwordEntry, entry);
    });
    nicknameEntry.addEventListener("keyup", function () {
        checkFields(nicknameEntry, passwordEntry, entry);
    });
}

function checkFields(name, password, enter) {
    if (name.value == "" || password.value == "") {
        enter.setAttribute("disabled", "disabled");
    } else {
        enter.removeAttribute('disabled');
    }
}

function checkFieldForChangeName(name, entry) {
    if (name.value == "") {
        entry.setAttribute("disabled", "disabled");
    } else {
        entry.removeAttribute('disabled');
    }
}