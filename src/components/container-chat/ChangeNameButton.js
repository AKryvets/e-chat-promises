import React from "react";
import {ChangeNameError} from "./ChangeNameError";

export function ChangeNameButton() {
    return (
        <div className="forms__label label">
            <ChangeNameError/>
            <button className="label__submit" id="setNickname" disabled="disabled">OK</button>
        </div>
    )
}