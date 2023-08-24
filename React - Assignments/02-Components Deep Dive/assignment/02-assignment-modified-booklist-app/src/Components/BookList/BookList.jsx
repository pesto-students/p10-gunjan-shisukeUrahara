// src/BookList.js
import React from 'react';
import Book from '../Book/Book';
import './BookList.css';

const BookList = () => {
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
    ];

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
