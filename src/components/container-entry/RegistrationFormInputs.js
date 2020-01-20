import React from "react";
import {RegistrationButtonEntry} from "./RegistrationButtonEntry";

export function RegistrationFormInputs(props) {
    return (
        <div className="forms__input form">
            <input type="text" className="form__input" id="nicknameReg" placeholder="Введите имя" maxLength="12"
                   required/>
            <input type="password" className="form__input" id="passwordReg" placeholder="Введите пароль"
                   maxLength="12" required/>
            <div className="form__error" id="errorReg"></div>
            <RegistrationButtonEntry/>
        </div>
    );
}
