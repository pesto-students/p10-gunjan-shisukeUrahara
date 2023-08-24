import React from 'react';
import './Recommendations.css';

function Recommendations({ recommendations }) {


    return (
        <div className="Recommendations">
            {recommendations.map((recommendation, index) => {
                if (recommendation.trim() !== '') {
                    return (
                        <div key={index} className="recommendation-card">
                            {/* <div className="recommendation-number">{index + 1}</div> */}
                            <div className="recommendation-text">{recommendation}</div>
                        </div>
                    );
                }
                return null;
            })}

        </div>
    );
}

export default Recommendations;
