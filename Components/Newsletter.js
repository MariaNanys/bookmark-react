import React, { useState, useEffect } from "react";
import numeral from "numeral";

export function Newsletter() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [number, setNumber] = useState(35000);

    useEffect(() => {
        const interval = setInterval(() => {
            if(number<=175) {
                setNumber(0);
                clearInterval(interval)
            } else {
                setNumber(number => number - 175);
            }
        }, 100);
        return () => clearInterval(interval);
      }, [number]);

    const showError = error ? 'newsletter_inputs_error' : 'hideError';
    const moveBtn = error ? 'move_btn' : '';
    

    function validationEmail(mail) {
        setEmail(mail.target.value)
    }
    function checkValidation() {
        const regExp =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(regExp.test(email)) {
            setError(false);
        } else {
            setError(true);
        }
    }
    return (
        <div className="Newsletter_content">
            <div className="Newsletter_content_info">
                <p>{numeral(number).format('0,0')}+ already joined</p>
            </div>
            <h2>Stay up-to-date with what we're doing</h2>
            <form className="newsletter_input_btn">
                <div className={showError}>    
                    <img className="icon_error" alt="icon error" src="./assets/icon-error.svg" />
                    <p className="newsletter_error_text">Whoops, make sure it's an email</p>
                </div>
                <input
                className="newsletter_input"
                type="email"
                name="email"
                value={email}
                onChange={validationEmail}
                placeholder="Enter your email address"></input>
                <button className={`newsletter_btn ${moveBtn}`}type="button" onClick={checkValidation}>Contact Us</button>
            </form>
        </div>
    )
}