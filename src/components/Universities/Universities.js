import React, { useEffect, useState } from 'react';
import UniCount from '../UniCount/UniCount';
import University from '../University/University';
import './Universities.css';

const Universities = () => {
    const [universities, setUniversities] = useState([]);
    const [uniCount, setUniCount] = useState([]);
    useEffect(() => {
        fetch('./generated.json')
        .then(res => res.json())
        .then(data => setUniversities(data))
    }, [])
    const handleAddUniCount = (university) =>{
        // console.log(university)
        const newUniCount = [...uniCount, university];
        // console.log(newUniCount)
        setUniCount(newUniCount);
    }
    return (
        // here is the parent 'uni-container' component of two childs one is card-container and other is count-container
        <div className="uni-container">
            <div className="card-container">
               {
                   universities.map(university =>  <University
                    key={university.id}
                    university={university}
                    handleAddUniCount ={handleAddUniCount}
                   ></University>)
               }
                
            </div>
            <div className="count-container">
               <UniCount universityCount={uniCount}></UniCount>
            </div>
            
        </div>
    );
};

export default Universities;