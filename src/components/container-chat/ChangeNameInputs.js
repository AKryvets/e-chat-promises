import React from "react";

export function ChangeNameInputs() {
    return (
        <div className="forms__input form">
            <input type="text" className="form__input" id="nickname" placeholder="Введите имя" maxLength="12"
                   required/>
            <div className="form__error" id="error"></div>
        </div>
    )
}