import React from 'react';
import './University.css';

const University = (props) => {
    // console.log(props)
    const {countryRank, founded, name, studentEnrollment, type, img} = props.university;
    console.log(img)
    return (
        <div className="card">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p><b>Country Rank: {countryRank}</b></p>
            <p><strong>Founded: {founded}</strong></p>
            <p><strong>Student Enrollment: {studentEnrollment}</strong></p>
            <p><strong>Type: {type}</strong></p>
            <button 
            onClick={() => props.handleAddUniCount(props.university)}
            className="btn-regular">Add</button>
        </div>
    );
};

export default University;