import React from "react";
import Question3 from "./Question3";
import Question6 from "./Question6";

export default function App() {

    return (
        <div className="space-y-4">
            <div>
                <span>Question 3:</span>
                <Question3/>
            </div>
            <div>
                <span>Question 6:</span>
                <Question6/>
            </div>
        </div>
    )
}