import React from 'react';
import AddedUniversity from '../AddedUniversity/AddedUniversity';
import './UniCount.css';

const UniCount = (props) => {
    // console.log(props.universityCount)
    const { universityCount } = props;
    // console.log(universityCount.length)
    let totalStudent = 0;
    for(const studentCount of universityCount){
        totalStudent = totalStudent + studentCount.studentEnrollment;
        
    }
    return (
        <div>
            <div className="shumari-card">
            <h3>University Student Shumari</h3>
            <h5>University Added: {universityCount.length}</h5>
            <h6>Total Student: {totalStudent}</h6>
            </div>
            {
                universityCount.map(universityName => <AddedUniversity 
                    key={universityName.id}
                    addedUniversityName={universityName}></AddedUniversity>)
            }
            
        </div>
    );
};

export default UniCount;