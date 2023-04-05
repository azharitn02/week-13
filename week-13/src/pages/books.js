import React, { useState, useEffect } from "react";
import { getBooks } from "../api";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
