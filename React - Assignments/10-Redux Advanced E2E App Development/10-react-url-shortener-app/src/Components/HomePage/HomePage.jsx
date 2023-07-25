// components/HomePage.js
import React from 'react';
import ShortenUrlForm from '../ShortenUrlForm/ShortenUrlForm';
import UrlList from '../UrlList/UrlList';

const HomePage = () => {
    return (
        <div>
            <ShortenUrlForm />
            <UrlList />
        </div>
    );
}

export default HomePage;
