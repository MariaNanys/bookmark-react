import React, { useEffect, useState } from 'react';
import Popup from "reactjs-popup";
import { FeaturesSlider } from "./FeaturesSlider";

export function PopupFeatures({ onChange, state, width }) {
    const [open, setOpen] = useState(false);
    const [closed, setClosed] = useState(false);

    useEffect(() => {
        setOpen(state);
        if(width>=1440) {
            const timeout = setTimeout(() => {
                if(!closed && !open) {
                    setOpen(true);
                    clearTimeout(timeout);
                }
            }, 30000);
        }
    }, [state, width]);

    function closeModal() {
        setClosed(true);
        setOpen(false);
        onChange(false);
    };

    return (
        <div className="Popup_modal_features">
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                <a className="close" onClick={closeModal}>
                    &times;
                </a>
                <FeaturesSlider></FeaturesSlider>
                </div>
            </Popup>
        </div>
    );
}