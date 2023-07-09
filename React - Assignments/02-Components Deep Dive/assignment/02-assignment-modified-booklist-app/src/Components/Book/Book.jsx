// src/Book.js
import React from 'react';

class Book extends React.PureComponent {
    render() {
        const { book } = this.props;
        return (
            <div>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Year: {book.year}</p>
            </div>
        );
    }
}

export default Book;
