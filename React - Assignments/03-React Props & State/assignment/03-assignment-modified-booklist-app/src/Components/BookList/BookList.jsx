import React, { useState } from "react";
import Book from "../Book/Book";
import BookForm from "../BookForm/BookForm";
import './BookList.css';

const BookList = () => {
    const [books, setBooks] = useState([]);

    const addBook = (newBook) => {
        setBooks([...books, newBook]);
    };

    const deleteBook = (index) => {
        const updatedBooks = [...books];
        updatedBooks.splice(index, 1);
        setBooks(updatedBooks);
    };

    return (
        <div className="book-list">
            <BookForm onAddBook={addBook} />
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p className="empty-message">No books available.</p>
            ) : (
                <ul className="book-items">
                    {books.map((book, index) => (
                        <li className="book-item" key={index}>
                            <Book book={book} onDelete={() => deleteBook(index)} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
