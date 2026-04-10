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
       <>
      {/* TOP GREEN HERO */}
      <section className="top-hero">
        <div className="top-hero-container">
          {/* Left */}
          <h1> LMS
Made by educators,<br /> for educators</h1>
          <div className="top-hero-left">
           
          </div>

          {/* Right */}
          {/* Right */}
          <div className="top-hero-right">
            <img
              src="vv.jpg"
              alt="Students"
            />
          </div>
        </div>
      </section>
       

      {/* CONTENT SECTION */}
      <section className="hero-content-section">
        <div className="content-container">
          <div className="content-left">
            <h1>
              Learning Management System <span>(LMS)</span>
            </h1>

            <p>
             The Learning Management System (LMS) is a digital platform designed to plan, deliver, manage, and track learning and training programs in an efficient and organized manner. It enables users to access courses, learning materials, assessments, and progress reports online from anywhere at any time. LMS plays a key role in improving knowledge, skills, and capacity building by providing structured e-learning solutions. It supports digital education initiatives by making learning more accessible, transparent, and effective for individuals and organizations.
            </p>

            <p>
             A Learning Management System (LMS) is an online platform that helps manage and deliver training and educational content digitally. It allows learners to access courses, track progress, and improve skills efficiently through e-learning.
            </p>

            <button className="visit-btn">Courses</button>
          </div>

          <div className="content-right">
            <img
              src="l.png"
              alt="LMS Laptop"
            />
          </div>
        </div>
      </section>
    </>
 </div>


    
  )
}

export default Hero