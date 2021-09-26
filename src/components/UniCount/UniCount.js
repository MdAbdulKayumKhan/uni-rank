import React from 'react';
import './UniCount.css';

const UniCount = (props) => {
    console.log(props.universityCount)
    const { universityCount } = props;
    console.log(universityCount.length)
    let totalStudent = 0;
    for(const studentCount of universityCount){
        totalStudent = totalStudent + studentCount.studentEnrollment;
        
    }
    return (
        <div className="shumari-card">
            <h3>University Student Shumari</h3>
            <h5>University Added: {universityCount.length}</h5>
            <h6>Total Student: {totalStudent}</h6>
            <h4>Added Universities Name</h4>
            <p></p>
        </div>
    );
};

export default UniCount;