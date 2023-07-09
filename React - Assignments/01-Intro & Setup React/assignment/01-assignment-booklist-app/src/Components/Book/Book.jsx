// src/Book.js
import React from 'react';

const Book = ({ book }) => {
    return (
        <div>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
        </div>
    );
};

export default Book;
