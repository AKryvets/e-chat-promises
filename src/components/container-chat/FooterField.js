import React from "react";

export function FooterField() {
    return (
        <div className="footer__field field">
            <textarea className="field__input" id="inputField" placeholder="Введите сообщение" maxLength="500"></textarea>
            <div className="field__button" id="sendButton" title="Отправить"></div>
        </div>
    )
}
