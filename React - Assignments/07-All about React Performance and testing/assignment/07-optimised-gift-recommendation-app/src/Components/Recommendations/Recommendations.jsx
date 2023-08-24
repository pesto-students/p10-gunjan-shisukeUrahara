// Recommendations.js
import React from 'react';
import './Recommendations.css';

const Recommendations = React.memo(({ recommendations }) => {
    return (
        <div className="recommendations">
            {recommendations.map((recommendation, index) => (
                <div key={index} className="recommendation-card">
                    <div className="recommendation-number">{index + 1}</div>
                    <div className="recommendation-text">{recommendation}</div>
                </div>
            ))}
        </div>
    );
});

export default Recommendations;
