import React, { useEffect, useState } from "react";

export function BurgerButton({ onChange, update }) {
    const [opened, setOpened] = useState(false);
    const show = opened ? 'hide' : '';
    const hide = opened ? '' : 'hide';

    useEffect(() => {
        setOpened(update);
      }, [update]);

  

    function toggleMenu(value) {
        setOpened(value);
        onChange(!opened);
    }

    return (
        <div className="Burger_button">
            <button
            className={`Menu_close menu_burger ${hide}`}
            onClick={() => toggleMenu(false)}>
                <img alt="hamburger-menu" src="./assets/icon-close.svg" />
            </button>
            <button
            className={`Menu_open menu_burger ${show}`}
            onClick={() => toggleMenu(true)}>
                <img src="./assets/icon-hamburger.svg" />
            </button>
        </div>
    )
}