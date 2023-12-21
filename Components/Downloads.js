import React from "react";

export function Downloads() {
    return (
        <div className="Downloads_content">
            <div className="downloads__title_text">
                <h2>Download the extension</h2>
                <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like ud to prioritize.</p>
            </div>
            <ul className="downloads__versions_list">
                <li className="downloads__version_chrome download_item">
                    <img alt="icon chrome" className="icon_chrome icon" src="./assets/logo-chrome.svg"/>
                    <h3>Add to Chrome</h3>
                    <p>Minimum version 62</p>
                    <img alt="grey dots" className="download_img_dots" src="./assets/bg-dots.svg"/>
                    <button className="downloads_btn">Add & Install Extension</button>
                </li>
                <li className="downloads__version_firefox download_item">
                    <img alt="icon firefox" className="icon_firefox icon" src="./assets/logo-firefox.svg"/>
                    <h3>Add to Firefox</h3>
                    <p>Minimum version 55</p>
                    <img alt="grey dots"  className="download_img_dots" src="./assets/bg-dots.svg"/>
                    <button className="downloads_btn">Add & Install Extension</button>
                </li>
                <li className="downloads__version_opera download_item">
                    <img alt="icon opera" className="icon_opera icon" src="./assets/logo-opera.svg"/>
                    <h3>Add to Opera</h3>
                    <p>Minimum version 46</p>
                    <img alt="grey dots"  className="download_img_dots" src="./assets/bg-dots.svg"/>
                    <button className="downloads_btn btn">Add & Install Extension</button>
                </li>
            </ul>
        </div>
    )
}