import React, { useState } from "react";
import './BookForm.css';

const BookForm = ({ onAddBook }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            title,
            author,
            year: parseInt(year),
            description,
            genre,
        };
        onAddBook(newBook);
        setTitle("");
        setAuthor("");
        setYear("");
        setDescription("");
        setGenre("");
    };

    return (
        <form className="book-form" onSubmit={handleSubmit}>
            <h2>Add New Book</h2>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <label htmlFor="author">Author:</label>
            <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <label htmlFor="year">Year:</label>
            <input
                type="number"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
            />
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            ></textarea>
            <label htmlFor="genre">Genre:</label>
            <input
                type="text"
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookForm;
