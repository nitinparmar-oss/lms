import React from 'react'
import "./Port.css"
import { Link } from 'react-router-dom'
const Portfolio = () => {
  return (
   
   <section className="heroi">
      <h1>
        Hi, I'm <span>NITIN PARMAR</span>
      </h1>
      <p>WEB Developer | React | UI/UX</p>
<br />
      <div className="heroi-buttons">
        <a href="#contact" className="btn-primary">Contact Me</a>
        <br />
        <br />
       

      </div><br />
      <section className="home">
      <h2>About Me</h2>
       <div className="home-text">
        
            <img src="pic.jpg" alt="" />
      <p>
         <i>I am an enthusiastic Bachelor of Computer Applications (BCA) student passionate about coding,
                technology, and modern software development. I enjoy exploring new tools, building innovative
                projects, and continuously improving my technical skills.</i>
            </p>

            <p>
               <i>My areas of interest include web development, database management, programming, and UI/UX design.
                I aim to become a skilled full-stack developer and contribute to impactful digital solutions.</i>
            </p>

            <p>
               <i> I believe in hard work, creativity, and constant learning. This portfolio showcases my journey,
                achievements, and projects as I grow in the world of technology.</i>
            
      </p>
      <button className='btn'>Known More</button>
      </div>
    </section> 
    <br />
 <div className="skills">
     <br />
            <div className="skill">
              <br />
              <h2>Skills</h2>
              <br />
            <ul>
               <li> <p> HTML & CSS</p></li>
                <br />
                <li><p> PYTHON PROGRAMING LANGUAGE</p> </li>
                <br />
                <li><p> C  PROGRAMMING LANGUAGE</p></li>
                <br />
                <li><p> C++  PROGRAMMING LANGUAGE</p></li> <br />
                 <li><p> MERN (MONGODB , EXPRESS JS , REACT JS , NODE JS)</p></li>
            </ul>
        </div>
        
       
    </div>
  <hr />
   
    <section id="contact">
  <h2>Contact Me</h2>
<br />
  <p><h3>Email:</h3> <br /> 
    <a href="mailto:nitinparmar78765.com">nitinparmar78765@email.com</a>
  </p>
<br />
  <p><h3>Phone:</h3><br />
    <a href="tel:+1234567890">+1 234 567 890</a>
  </p>
<br />
  <div class="social-links">
    <a href="https://www.linkedin.com/in/yourusername" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
    </a>

    <a href="https://github.com/yourusername" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
    </a>

    <a href="https://www.instagram.com/yourusername" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
    </a>
  </div>
</section>
    </section>
 

  )
}

export default Portfolio