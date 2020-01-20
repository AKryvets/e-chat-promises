import React from "react";
import {EntryFormInputs} from "./EntryFormInputs";
import {FormButton} from "./EntryFormButton";
import {RegistrationFormInputs} from "./RegistrationFormInputs";
import {RegistrationFormButton} from "./RegistrationFormButton";

export function ModalRegistration(props) {
    return (
        <div className="container-entry__modal-reg-window modal-reg-window" id="modalRegWindow">
            <div className="modal-entry-window__label">РЕГИСТРАЦИЯ</div>
            <div className="modal-entry-window__form forms">
                <RegistrationFormInputs/>
                <RegistrationFormButton/>
            </div>
        </div>
    );
}