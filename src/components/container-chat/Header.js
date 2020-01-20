import React from "react";
import {HeaderLogo} from "./HeaderLogo";
import {HeaderMenu} from "./HeaderMenu";

export function HeaderWithComponents(props) {
    return (
        <Header>
            <HeaderLogo/>
            <HeaderMenu/>
        </Header>
    )
}

function Header(props) {
    return (
        <div className="container__header header hidden">
            {props.children}
        </div>
    );
}