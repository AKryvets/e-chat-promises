import React from "react";
import {Body} from "./container-chat/Body";
import {ModalEntry} from "./container-entry/ModalEntry";
import {ChangeNameModal} from "./container-chat/ChangeNameModal";
import {ModalRegistration} from "./container-entry/ModalRegistration";
import {HeaderWithComponents} from "./container-chat/Header";
import {HeaderEntryWithComponents} from "./container-entry/Header";

function Containers(props) {
    return (
        <div className="containers">
            {props.left}
            {props.right}
        </div>
    );
}

function ContainerChat() {
    return (
        <div className="containers__container container">
            <HeaderWithComponents/>
            <div className="container__overlay overlay" id="overlay"></div>
            <Body/>
            <ChangeNameModal/>
        </div>
    )
}

function ContainerEntry() {
    return (
        <div className="container-entry" id="containerEntry">
            <HeaderEntryWithComponents/>
            <ModalEntry/>
            <ModalRegistration/>
        </div>
    )
}

export function ContainersWithComponents(props) {
    return (
        <Containers left={<ContainerChat/>} right={<ContainerEntry/>}/>
    );
}


