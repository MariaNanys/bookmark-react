import React, { useState } from "react";

export function FeaturesSlider() {
    const [active, setActive] = useState(1);

    function activation(id) {
        setActive(id);
    }

    return (
        <div>
            <ul className="features_list__nav">
                <li id="1" className={`features_list__item ${active === 1 ? 'features_list__item_active' : ''}`} onClick={() => {activation(1)}}>Simple Bookmarking</li>
                <li id="2"
                className={`features_list__item ${active === 2 ? 'features_list__item_active' : ''}`} onClick={() => {activation(2)}}>Speedy Searching</li>
                <li id="3"
                className={`features_list__item ${active === 3 ? 'features_list__item_active' : ''}`} onClick={() => {activation(3)}}>Easy Sharing</li>
            </ul>
            <div id="1"
            className={active === 1 ? 'features_figure__title' : 'hidden_feature'}>
                <div className="features-figure">
                    <img alt="monitor-picture" className="features-img-monitor img-monitor" src="../assets/illustration-features-tab-1.svg" />
                </div>
                <div className="features_subtitle__text">
                    <h2>Bookmark in one click</h2>
                    <p>
                    Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites. 
                    </p>
                    <button className="features_more_btn btn">More Info</button>
                </div>
            </div>
            <div id="2"
            className={active === 2 ? 'features_figure__title' : 'hidden_feature'}>
                <div className="features-figure">
                    <img alt="monitor-search-picture" className="features-img-search" src="../assets/illustration-features-tab-2.svg" />
                </div>
                <div className="features_subtitle__text">
                    <h2>Intelligent search</h2>
                    <p>
                    Our powerful search feature will help you find saved sites in no time at all. No needs to trawl through all of your bookmarks.
                    </p>
                    <button className="features_more_btn btn">More Info</button>
                </div>
            </div>
            <div id="3"
            className={active === 3 ? 'features_figure__title' : 'hidden_feature'}>
                <div className="features-figure">
                    <img alt="picture with person and gigant article near table." className="features-img-person_article" src="../assets/illustration-features-tab-3.svg" />
                </div>
                <div className="features_subtitle__text">
                    <h2>Share your bookmarks</h2>
                    <p>
                    Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                    </p>
                    <button className="features_more_btn btn">More Info</button>
                </div>
            </div>
        </div>
    )
}