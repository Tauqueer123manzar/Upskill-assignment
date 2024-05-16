import React from 'react'
import './Course.css'
const Course = () => {
    return (
        <div className='hero_section'>
            <div className='container'>
                <p className='headeing'>DATASCIENCE COURSE LEARNING PATH</p>
                <p style={{ color: "violet" }}>-----------------------------------------------------------------------</p>
                <h1 className='text'>Data Science <span>Course Curriculum</span></h1>
                <div className='broucher'>
                     <div class="item">
                      <p>C++
                      <span>Learn C++ for Strong programming fundamentals.</span></p>
                    </div>
                    <hr></hr>
                    <div class="item">
                      <p>MERN Stack
                      <span>Master the MERN stack for for higher-demand projects.</span></p>
                    </div>
                    <hr></hr>
                    <div class="item">
                      <p>Data Structure and Algorithm
                      <span>Excel in Data Structure and Algorithms for interview succuess.</span></p>
                    </div>
                    <hr></hr>
                    <div class="item">
                       <p>Competitve Programming
                       <span>Excel in Data Structure and Algorithms for interview succuess.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course
