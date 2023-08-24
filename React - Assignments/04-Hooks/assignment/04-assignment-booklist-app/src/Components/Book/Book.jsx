import React, { useState, useContext } from "react";
import "./Book.css";
import { ThemeContext } from "../../Context/ThemeContext";

const Book = ({ book, onDelete }) => {
    const [showDetails, setShowDetails] = useState(false);
    const { theme } = useContext(ThemeContext);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={`book-card ${theme}`}>
            <div className="book-header">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">By {book.author}</p>
            </div>
            <div className="book-content">
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
            </div>
            <button className="delete-button" onClick={onDelete}>
                Delete
            </button>
        </div>
    );
};

export default Book;
