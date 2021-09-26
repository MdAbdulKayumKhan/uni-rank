import React from 'react';
import './AddedUniversity.css';

const AddedUniversity = (props) => {
    // console.log(props);
    const { addedUniversityName } = props;

    return (
        <div className="shumari-university-card">
            <h6>{ addedUniversityName.name } </h6>
        </div>
    );
};

export default AddedUniversity;