import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home">
            <div className="intro">
                <h1>John Doe</h1>
                <p>I am a full-stack blockchain developer with over 4 years of experience. I specialize in blockchain technologies, Node.js, React.js, Redux, Bitcoin, Ethereum, EVM compatible blockchains, and smart contract testing and development using Hardhat, Remix, Ganache, Chai, and Mocha.</p>
            </div>
            <div className="details">
                <p>I have been part of several successful blockchain projects, contributing to both the backend and frontend development. My expertise in EVM compatible blockchains and smart contract testing has been instrumental in these projects.</p>
                <p>My passion for blockchain technology is driven by the immense potential it has to revolutionize various industries. I am always looking for new challenges and opportunities to further develop my skills and contribute to exciting projects.</p>
            </div>
        </div>
    );
}

export default HomePage;
