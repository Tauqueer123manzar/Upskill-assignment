import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <div className='content'>
      <p><i class="fa-solid fa-graduation-cap"></i>An<span style={{ fontWeight: "bold" }}> IIT Delhi</span> Alumni Initiative</p>
      <h1 className='header'>Become an Expert in the field of<span> Data Science with 6 Courses</span></h1>
      <span className='paragraph'>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</span>
      <div class="grid-container">
        <div class="grid-item"><i class="fa-solid fa-star"></i>Personal Mentorship</div>
        <div class="grid-item"><i class="fa-solid fa-star"></i>Internship Assistance</div>
        <div class="grid-item"><i class="fa-solid fa-star"></i>Industry Certified Courses</div>
      </div>
      <div className='Button'>
       <button type='button' className='btn'>Enroll Now <i class="fa-regular fa-paper-plane"></i></button>
       <div className='Query'>Know More <i class="fa-regular fa-circle-question"></i></div>
      </div>
    </div>
  )
}

export default Main
