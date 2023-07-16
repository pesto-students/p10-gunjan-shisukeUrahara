import React, { useEffect, useState } from "react";

const BookDataLoader = ({ onLoaded }) => {
    useEffect(() => {
        // Simulating data fetching
        setTimeout(() => {
            const initialBooks = [
                { id: 1, title: "Book 1", author: "Author 1", year: 2020 },
                { id: 2, title: "Book 2", author: "Author 2", year: 2018 },
                { id: 3, title: "Book 3", author: "Author 3", year: 2022 },
            ];
            onLoaded(initialBooks);
        }, 2000);
    }, [onLoaded]);

    return <div className="loader">Loading books...</div>;
};

export default BookDataLoader;
