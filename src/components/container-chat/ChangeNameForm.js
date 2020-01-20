import React from "react";
import {ChangeNameInputs} from "./ChangeNameInputs";
import {ChangeNameButton} from "./ChangeNameButton";

export function ChangeNameForm() {
    return (
        <div className="modal-window__form forms">
            <ChangeNameInputs/>
            <ChangeNameButton/>
        </div>
    )
}