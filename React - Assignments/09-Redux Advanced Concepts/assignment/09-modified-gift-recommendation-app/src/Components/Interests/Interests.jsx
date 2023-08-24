import React from 'react';
import './Interests.css';

function Interests({ interests, onRemove }) {
    return (
        <div className="Interests">
            {interests.map((interest, index) => (
                <>
                    <span key={index} className="interest">
                        {interest} {"  "}
                        <button className="interest-remove" onClick={() => onRemove(index)}>×</button>
                    </span>

                </>

            ))}
        </div>
    );
}

export default Interests;
