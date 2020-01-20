import React from "react";
import {HistoryFooter} from "./HistoryFooter";

export function BodyHistory() {
    return (
        <div className="body__history history" id="history">
            <div className="history__messages" id="messageHistory"></div>
            <HistoryFooter/>
        </div>
    )
}
