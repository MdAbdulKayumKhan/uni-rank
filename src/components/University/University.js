import React from 'react';
import './University.css';

const University = (props) => {
    console.log(props.university)
    const {countryRank, founded, name, studentEnrollment, type, url} = props.university;
    return (
        <div className="card">
            <img src={url} alt="" />
            <h4>{name}</h4>
            <p>Country Rank: {countryRank}</p>
            <p><small>Founded: {founded}</small></p>
            <p>Student Enrollment: {studentEnrollment}</p>
            <p><strong>Type: {type}</strong></p>
            <button className="btn-regular">Add</button>
        </div>
    );
};

export default University;