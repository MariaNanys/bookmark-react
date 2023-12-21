import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Scroll from 'react-scroll';

export function NavMenu({state, update}) {
    let scroller = Scroll.scroller;
    const navigate = useNavigate();
    const scrollTo = async (name) => {
        await navigate('/');
        await scroller.scrollTo(name, {
          duration: 1500,
          delay: 100,
          smooth: true,
          offset: 0
        });
      };
    const wasClicked = state ? 'NavMenu' : 'hidden';

    function syncAndScroll(event) {
        update(false);
        scrollTo(event);
    }

    return (
        <div className={wasClicked}>
            <ul className="menu-list">
              <li><NavLink
              className="menu__item"
              onClick={() => syncAndScroll('Features_content')}>Features</NavLink></li>
              <li><NavLink
              className="menu__item"
              onClick={() => syncAndScroll('Downloads_content')}>Pricing</NavLink></li>
              <li><NavLink
              className="menu__item"
              onClick={() => syncAndScroll('Newsletter_content')}>Contact</NavLink></li>
              <li className="nav_item_login"><NavLink className="menu__item_login" to="/" onClick={() => syncAndScroll('header_content')}>Login</NavLink></li>
        </ul>
        </div>
        
    )
}