import React from "react";
import {HeaderLogo} from "../container-chat/HeaderLogo";

export function HeaderEntryWithComponents(props) {
    return (
        <HeaderEntry>
            <HeaderLogo/>
        </HeaderEntry>
    )
}

function HeaderEntry(props) {
    return (
        <div className="container__header header hidden">
            {props.children}
        </div>
    );
}