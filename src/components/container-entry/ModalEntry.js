import React from "react";
import {EntryFormInputs} from "./EntryFormInputs";
import {FormButton} from "./EntryFormButton";

export function ModalEntry(props) {
    return (
        <div className="container-entry__modal-entry-window modal-entry-window" id="modalEntryWindow">
            <div className="modal-entry-window__label">ДОБРО ПОЖАЛОВАТЬ!</div>
            <div className="modal-entry-window__form forms">
                <EntryFormInputs/>
                <FormButton/>
            </div>
        </div>
        );
}