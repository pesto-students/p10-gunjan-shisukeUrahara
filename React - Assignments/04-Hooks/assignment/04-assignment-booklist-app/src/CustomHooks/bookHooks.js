import { useMemo } from "react";

export const useBookFilter = (books, searchTerm="title") => {
  const filteredBooks = useMemo(() => {
    if (!searchTerm) {
      return books;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        book.author.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [books, searchTerm]);

  return filteredBooks;
};

export const useBookSorter = (books, sortBy="title") => {
  const sortedBooks = useMemo(() => {
    const sorted = [...books];
    sorted.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    return sorted;
  }, [books, sortBy]);

  return sortedBooks;
};
