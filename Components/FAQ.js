import React, { useState } from "react";
import QuestionsAndAnswer from "./QuestionsObj";

export function Faq() {
    const [showAnswer, setShowAnswer] = useState(true);

    function toogleAnswer(id) {
            setShowAnswer(current => !current);
            updateStateObj(id);         
    }
    function updateStateObj(id) {
        console.log(id);
        QuestionsAndAnswer.filter(a => {
            console.log(a);
            if(a.id === id){
                a.status = !a.status;
            } 
        })
    }

    return (
        <div className="Faq_content">
            <div className="faq_title__text">
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            </div>
            <ul className="faq_questions">
                {QuestionsAndAnswer.map((item) =>
                <li className= {`faq_question_answer faq_question_answer_${item.id}`} key={item.id} onClick={() => toogleAnswer(item.id)}>
                     <div className="faq_question">
                        <span>{item.question}</span>
                        <img alt="icon arrow down" className={`faq_icon ${item.status ? 'active' : ''}`} src="./assets/icon-arrow.svg" />
                    </div>
                    <p className={item.status ? 'faq_answer' : 'hidden_answer'}>{item.answer}</p>
                </li>)}
             </ul>
             <div>
                <button className="faq_btn btn">More Info</button>
             </div>
        </div>
    )
}