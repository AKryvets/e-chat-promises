import React from "react";

export function HeaderMenu() {
    return (
        <div className="header__menu menu">
            <ButtonSetting/>
            <div className="menu__users-list button" id="menuUsersList" title="Список пользователей online">0</div>
        </div>
    )
}

function ButtonSetting() {
    return (
        <div className="menu__settings button" title="Изменить имя пользователя">
            <div className="button__img" id="gear-button"></div>
        </div>
    )
}