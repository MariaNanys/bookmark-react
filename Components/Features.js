import React from "react";
import { FeaturesSlider } from "./FeaturesSlider";

export function Features() {
    return (
        <div className="Features_content">
            <div className="features_title__text">
                <h2>Features</h2>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            <FeaturesSlider />
        </div>
    )
}