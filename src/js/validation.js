export function validation(name, password, errorBlock) {
	if(name.length < 1 || password.length < 1){
		errorBlock.style.display = "block";
		errorBlock.innerHTML = "Заполните поля";
		return false;
	}

	if(password.length < 6 ){
		errorBlock.style.display = "block";
		errorBlock.innerHTML = "Длина пароля должна быть не менее 6 символов";
		return false;
	}

	if(password.indexOf(" ") != -1){
		errorBlock.style.display = "block";
		errorBlock.innerHTML = "Пароль не может содержать пробелы";
		return false;
	}

	if (!/[a-zа-яёії]/i.test(name)){
		errorBlock.style.display = "block";
		errorBlock.innerHTML = "Имя должно содержать как минимум одну букву";
		return false;
	}

	return true;
}