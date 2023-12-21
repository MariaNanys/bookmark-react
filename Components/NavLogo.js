import React from "react";
import { Link } from "react-router-dom";

export function NavLogo({state}) {
    const wasClicked = state ? 'logo_img' : 'logo_img_closed';

    return (
       <Link className="logo" href="/">
            <img alt="logopyte" className={wasClicked} src="./assets/logo-bookmark.svg" />
        </Link>
    )
}