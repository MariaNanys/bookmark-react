import React from "react";
import { Features } from "./Features";
import { Downloads } from "./Downloads";
import { Faq } from "./FAQ";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";
import { PopupFeatures } from "./PopupFeatures";

export function MainPage() {
    return (
        <>
        <div className="header_content">
            <div className="content-figure">
                <img alt="monitor-picture" className="content-img-monitor" src="../assets/illustration-hero.svg" />
            </div> 
            <div className="header_content__text">
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="header_content__buttons">
                    <a className="btn">Get it on Chrome</a>
                    <a>Get it on Firefox</a>
                </div>
            </div>
        </div>
        <Features />
        <Downloads />
        <Faq />
        <Newsletter />
        <Footer />
        <div id="popup-root" />
        </>
        
    )
}