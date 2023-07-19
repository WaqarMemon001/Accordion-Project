import React, { useState } from "react";
import data from "./data";

import "./App.css";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>Frequently Asked Questions</h3>
        <secton className="info">
          {questions.map((question) => {
            return (
            <SingleQuestion key={question.key} {...question}></SingleQuestion>
            );
          })}
        </secton>
      </section>
    </main>
  );
}

export default App;
