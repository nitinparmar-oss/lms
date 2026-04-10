import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
const Courses = () => {
  return (
       <div className="projects-section" id="courses" >
    <h3>Courses </h3>

    <div className="projects-container">

        <div className="card">
            
              <a href="https://youtu.be/RGKi6LSPDLU?si=FyNcZL4vTAdYeoM2">
              <img 
      src="react.jpg"
      alt="react language"
    />
    
    </a>
            <p className="title">Complete React.js Course for Beginners</p>
            <a href="https://youtu.be/RGKi6LSPDLU?si=FyNcZL4vTAdYeoM2" className="b">Watch Now</a>
            
          
        </div>

        <div className="card">
            
             <a href="https://youtu.be/hKB-YGF14SY?si=XKzlDn7dIqf4oExT" >
              <img 
      src="js.jpg"
      alt="js language"
    />
    </a>
            <p className="title">Complete Javascript  Course for Beginners</p>
           <a href="https://youtu.be/hKB-YGF14SY?si=XKzlDn7dIqf4oExT" className="b">Watch Now</a>
    
        </div>

        <div className="card">
            
            <a href="https://youtu.be/bm0OyhwFDuY?si=RIatheUfchSZw43z">
              <img 
      src="java.png"
      alt="java language"
    />
    </a>
            <p className="title">Complete Java  Course for Beginners</p>
             <a href="https://youtu.be/bm0OyhwFDuY?si=RIatheUfchSZw43z" className="b">Watch Now</a>
    
        </div>

    </div>
     <div className="projects-section" >
    <h3>Explore  </h3>

    <div className="projects-container">

        <div className="card">
           
              <a href="https://youtu.be/UrsmFxEIp5k?si=Bev_8gD-rk_HgJlB">
              <img 
      src="python.jpg"
      alt="Python language"
    />
    </a>
        
            <p className="title"> Complete Python  Course for Beginners</p>
          
        </div>

        <div className="card">
            
            <a href="https://youtu.be/irqbmMNs2Bo?si=eI4JGYOGSLcm8zVK">
              <img 
      src="c languagr.jpg"
      alt="c language"
    />
    </a>
            <p className="title"> Complete C Language  Course for Beginners</p>
           
    <p></p>
        </div>

        <div className="card">

            <a href="https://youtu.be/mlIUKyZIUUU?si=gbbC2NyDjykSSoLc">
              <img 
      src="https://i.ytimg.com/vi/irqbmMNs2Bo/maxresdefault.jpg"
      alt="Apna College C++ Course"
    />
    </a>
  
      
            <p className="title"> Complete C++  Course for Beginners</p>
            
    
        </div>

    </div>
    </div>
    <div className="projects-section" >
    <h3>Database </h3>

    <div className="projects-container">

        <div className="card">
           
               <a href="https://www.youtube.com/live/aDd4HiGQSIU?si=OcLmT7Mn45kzldG2">
              <img 
      src="MONGODB.jpg"
      alt="mangoDB"
    />
    </a>
            <p className="title">Complete MongoDB  Course for Beginners</p>
          
        </div>

        <div className="card">
            
             <a href="https://youtu.be/7S_tz1z_5bA?si=ApE6Yi9z8O7WEJeP">
              <img 
      src="sql.jpg"
      alt="sql"
    />
    </a>
            <p className="title">Complete My SQL Course for Beginners</p>
           
    <p></p>
        </div>

        <div className="card">
              <a href="https://youtu.be/a_LxqJWhp5A?si=yUW4I1FaTrH6CEx-">
              <img 
      src="img2.jpg"
      alt="sql"
    />
    </a>
            
            <p className="title">Complete DynamoDB Course for Beginners</p>
            
    <p></p>
        </div>

    </div>
    </div>
    <div className="projects-section" >
    <h3>Playlist of Courses </h3>

    <div className="projects-container">

        <div className="card">
            <a href="https://youtu.be/VTLCoHnyACE?si=vF69eqXns5N43By9">
              <img 
      src="dsa.jpg"
      alt="dsa"
    />
    </a>
            
            <p className="title">Complete DSA playlist for Beginners</p>
          
        </div>

        <div className="card">
            
                 <a href="https://youtu.be/HVjjoMvutj4?si=Hd4BzAQd4lAWPGNH">
              <img 
      src="full.jpg"
      alt="stack"
    />
    </a>
            <p className="title">Complete Full Stack playlist for Beginners</p>
           
    <p></p>
        </div>

        <div className="card">
            
                <a href="https://youtu.be/Vi9bxu-M-ag?si=GifYOBRg8NV_k4GU">
              <img 
      src="mern.jpg"
      alt="mern"
    />
    </a>
            <p className="title">Complete MERN playlist for Beginners</p>
            
    <p></p>
        </div>

    </div>
    </div>
    </div>
     
  )
}

export default Courses