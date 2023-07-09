import React, { useState } from "react";
import './Book.css';

const Book = ({ book, onDelete }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="book">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">By {book.author}</p>
            <p className="book-year">Year: {book.year}</p>
            <button className="toggle-details" onClick={handleToggleDetails}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
            {showDetails && (
                <div className="additional-details">
                    <p className="book-description">{book.description}</p>
                    <p className="book-genre">Genre: {book.genre}</p>
                </div>
            )}
            <button className="delete-button" onClick={onDelete}>
                Delete
            </button>
        </div>
    );
};

export default Book;
