// components/ShortenUrlForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { shortenUrl } from '../../store/urlSlice';
import './ShortenUrlForm.css';

const ShortenUrlForm = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(shortenUrl(url));
        setUrl('');
    };

    return (
        <form onSubmit={handleSubmit} className="shorten-form">
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL to shorten"
                required
            />
            <button type="submit">Shorten</button>
        </form>
    );
}

export default ShortenUrlForm;
