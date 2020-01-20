import React from "react";
import {ChangeNameForm} from "./ChangeNameForm";

export function ChangeNameModal() {
    return (
        <div className="container__modal-window modal-window" id="modalWindow">
            <span className="modal-window__close" id="closeButton">✖</span>
            <div className="modal-window__label">ИЗМЕНИТЬ ИМЯ</div>
            <ChangeNameForm/>
        </div>
    )
}