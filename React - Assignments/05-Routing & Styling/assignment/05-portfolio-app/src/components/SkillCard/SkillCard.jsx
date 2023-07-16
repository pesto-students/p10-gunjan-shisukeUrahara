import React from 'react';
import './SkillCard.css';

function SkillCard({ skill }) {
    return (
        <div className="skill-card">
            <img src={skill.image} alt={skill.name} />
            <h2>{skill.name}</h2>
        </div>
    );
}

export default SkillCard;
