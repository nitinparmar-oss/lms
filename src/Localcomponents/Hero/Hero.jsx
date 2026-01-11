import React from 'react'
import "./style.css"
import { useState } from "react";
import { Link } from 'react-router-dom'
function Hero() {
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
    <div className='top'>💻 Tech & Online Learning  <br />

                       Smart Learning for a Digital World  ||

Transform the Way You Learn ||

AI-Powered Learning Platform ||

Modern Education for Modern Minds
||
Learn. Practice. Succeed   
    <section className="home">

    
  <div className="home-container">

    <div className="home-img">
      
    </div>

    <div className="home-content">
      <h1>
        <i>
          ENHANCE  YOUR SKILLS 
          WITH OUR ONLINE  COURSES.
        </i>
      </h1>

      <p>
        <i>
          Our Learning Management System (LMS) provides a complete solution for online education,
          training, and skill development. With structured courses, progress tracking,
          and interactive content, LMS ensures a seamless and engaging learning experience for
          both learners and educators.
        </i>
      </p>
      <Link to="/courses">
        <button className="btn">Courses</button>
      </Link>

    </div>

  </div>
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
</section>
 </div>


    
  )
}

export default Hero