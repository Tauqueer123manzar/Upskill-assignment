import React from 'react';
import './Learner.css';

const Learner = () => {
    return (
        <div className="course">
            <div className='item'><i className="fa fa-object-group"></i> 24 <span>Courses</span></div>
            <div className='item'><i className="fa fa-user-nurse"></i> 30K+ <span>Learners</span></div>
            <div className='item'><i className="fa fa-circle-question"></i> 100K+ <span>Doubts Solved</span></div>
            <div className='item'><i className="fa fa-circle-check"></i> 10K+ <span>Student Projects</span></div>
        </div>
    );
}

export default Learner;
