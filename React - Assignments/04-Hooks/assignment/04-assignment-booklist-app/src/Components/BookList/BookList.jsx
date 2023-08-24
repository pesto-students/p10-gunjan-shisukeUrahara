import React, { useState, useContext } from "react";
import Book from "../Book/Book";
import BookForm from "../BookForm/BookForm";
import { ThemeContext } from "../../Context/ThemeContext";
import { useBookFilter } from "../../CustomHooks/bookHooks";
import { useBookSorter } from "../../CustomHooks/bookHooks";
import './BookList.css';

const BookList = ({ books, setBooks }) => {
    const { theme } = useContext(ThemeContext);
    // const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    const filteredBooks = useBookFilter(books, searchTerm);
    const sortedBooks = useBookSorter(filteredBooks);

    const addBook = (newBook) => {
        setBooks([...books, newBook]);
    };

    const deleteBook = (index) => {
        const updatedBooks = [...books];
        updatedBooks.splice(index, 1);
        setBooks(updatedBooks);
    };

    return (
        <div className={`book-list ${theme}`}>
            <BookForm onAddBook={addBook} />
            {books.length === 0 ? (
                <p className="empty-message">No books available.</p>
            ) : (
                <div>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by title or author"
                    />
                    <ul className="book-items">
                        {sortedBooks.map((book) => (
                            <li className="book-item" key={book.id}>
                                <Book book={book} onDelete={() => deleteBook(book.id)} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BookList;
