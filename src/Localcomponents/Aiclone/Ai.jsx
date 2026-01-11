import { useState } from "react";
import "./Ai.css";
import React from 'react'
import { Link } from 'react-router-dom'

function AI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = () => {
    if (question === "") return;

    setLoading(true);

    fetch("http://localhost:5000/api/ai/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: question })
    })
      .then(res => res.json())
      .then(data => {
        setAnswer(data.reply);
        setLoading(false);
      })
      .catch(() => {
        setAnswer("Error talking to AI");
        setLoading(false);
      });
  };

  return (
    <div className="ai-container">
      <h2 className="ai-title">AI Assistant</h2>

      <div className="ai-input-group">
        <input
          type="text"
          className="ai-input"
          placeholder="Ask something..."
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
        <button className="ai-button" onClick={askAI}>
          Ask
        </button>
      </div>

      <div className="ai-response">
        {loading ? (
          <p className="ai-loading">AI is thinking...</p>
        ) : (
          <p>{answer}</p>
        )}
      </div>
    </div>
  );
}

export default AI;