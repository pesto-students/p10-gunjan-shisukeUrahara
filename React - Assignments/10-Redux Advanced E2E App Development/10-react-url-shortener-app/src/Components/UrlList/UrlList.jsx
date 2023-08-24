import React from 'react';
import { useSelector } from 'react-redux';
import './UrlList.css';

function UrlList() {
    const urls = useSelector((state) => state.urls);

    return (
        <div className="url-list-container">
            <h2 className="url-list-header">Url List</h2>
            {urls.length === 0 ? (
                <p className="url-list-empty-message">You have no shortened URLs available.</p>
            ) : (
                <ul className="url-list">
                    {urls.map((url, index) => (
                        <li key={index} className="url-list-item">
                            <a href={url.shortUrl} target="_blank" rel="noreferrer" className="url-list-link">
                                {url.shortUrl}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UrlList;
