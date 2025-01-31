import { BooksSchema } from "../../../server/src/types/BookType";

const getBooks = async () => {
  const response = await fetch("/api/books");
  const data = await response.json();
  const parsedData = BooksSchema.parse(data);

  return parsedData;
};

export default getBooks;
