// Interests.js
import React from 'react';
import './Interests.css';

const Interests = React.memo(({ interests, onRemove }) => {
    return (
        <div className="interests">
            {interests.map((interest, index) => (
                <div key={index} className="interest">
                    <span>{interest}</span>
                    <button className="interest-remove" onClick={() => onRemove(index)}>×</button>
                </div>
            ))}
        </div>
    );
});

export default Interests;
