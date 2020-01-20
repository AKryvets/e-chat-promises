import React from "react";
import {BodyHistory} from "./BodyHistory.js";

export function Body() {
    return (
        <div className="container__body body">
            <BodyHistory/>
            <div className="body__users-list" id="usersList"></div>
        </div>
    )
}
