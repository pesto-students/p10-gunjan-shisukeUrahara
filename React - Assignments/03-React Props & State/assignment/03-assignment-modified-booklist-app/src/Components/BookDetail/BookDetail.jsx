import React, { useState } from "react";
import './BookDetail.css';

const BookDetail = ({ book }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <button onClick={handleToggleDetails}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
            {showDetails && (
                <div>
                    <p>Description: {book.description}</p>
                    <p>Genre: {book.genre}</p>
                </div>
            )}
        </div>
    );
};

export default BookDetail;
