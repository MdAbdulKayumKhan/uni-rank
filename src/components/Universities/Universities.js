import React, { useEffect, useState } from 'react';
import University from '../University/University';
import './Universities.css';

const Universities = () => {
    const [universities, setUniversities] = useState([]);
    useEffect(() => {
        fetch('./generated.json')
        .then(res => res.json())
        .then(data => setUniversities(data))
    }, [])
    return (
        <div className="uni-container">
            <div className="card-container">
               {
                   universities.map(university =>  <University
                    key={university.id}
                    university={university}
                   ></University>)
               }
                
            </div>
            <div className="count-container">
            <h2>Count </h2>
            </div>
            
        </div>
    );
};

export default Universities;