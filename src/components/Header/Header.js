import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="">
            <div className="header">
                <h2><small className="tomato-header">A to Z uniRank</small> of Bangladesh</h2>
                <p>uniRank tries to answer this question by publishing a comprehensive list of Universities following uniRank selection criteria</p>
                <h4>Total Listed Universities: <b className="tomato-header">138</b></h4>
            </div>   
        </div>
    );
};

export default Header;