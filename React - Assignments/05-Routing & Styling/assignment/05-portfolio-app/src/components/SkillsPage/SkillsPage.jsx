import React from 'react';
import './SkillsPage.css';
import SkillCard from '../SkillCard/SkillCard';

function SkillsPage() {
    const skills = [
        { name: 'HTML', image: 'https://brandeps.com/logo-download/H/HTML-5-logo-vector-01.svg' },
        { name: 'CSS', image: 'https://brandeps.com/logo-download/C/CSS-3-logo-vector-01.svg' },
        { name: 'JavaScript', image: 'https://brandeps.com/logo-download/J/JavaScript-logo-vector-01.svg' },
        { name: 'Ethereum', image: 'https://brandeps.com/icon-download/E/Ethereum-icon-vector-03.svg' },
        { name: 'Bitcoin', image: 'https://brandeps.com/icon-download/B/Bitcoin-icon-vector-06.svg' },
        { name: 'Smart Contracts', image: 'https://image.shutterstock.com/display_pic_with_logo/1151018/2035860167/stock-vector-flat-d-isometric-smart-contract-in-the-center-of-blockchain-technology-blockchain-smart-contract-2035860167.jpg' },
    ];

    return (
        <div className="skills">
            <h1>My Skills</h1>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
}

export default SkillsPage;
