import useSWR from 'swr'

import { fetchBooks } from "../api/books";

const Books = () => {
  const { data: books, isLoading } = useSWR('/api/books', fetchBooks);

  if (isLoading) {
    return <p>Loading books...</p>;
  }

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.name}</li>
      ))}
    </ul>
  );
};

export default Books;