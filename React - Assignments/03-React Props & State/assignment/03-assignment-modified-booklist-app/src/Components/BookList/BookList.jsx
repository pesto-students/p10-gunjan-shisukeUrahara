// src/BookList.js
import React from 'react';
import Book from '../Book/Book';
import './BookList.css';

const BookList = ({ books }) => {


    return (
        <div className="book-container">
            <h1 className="book-title">Book List</h1>
            <ul className="book-list">
                {books.map((book, index) => (
                    <li key={index}>
                        <Book book={book} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
