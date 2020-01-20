import React from "react";
import {EntryButtonRegistration} from "./EntryButtonRegistration";

export function EntryFormInputs(props) {
    return (
        <div className="forms__input form">
            <input type="text" className="form__input" id="nicknameEntry" placeholder="Введите имя" maxLength="12"
                   required/>
            <input type="password" className="form__input" id="passwordEntry" placeholder="Введите пароль"
                   maxLength="12" required/>
            <div className="form__error" id="errorEntry">Пользователь с таким Именем и Паролем не найден</div>
            <EntryButtonRegistration/>
        </div>
    );
}
