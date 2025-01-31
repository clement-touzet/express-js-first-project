import { useQuery } from "@tanstack/react-query";
import { booksQueryKey } from "../contants/queryKeys";
import getBooks from "../api/books/getbooks";
import DeleteBook from "./DeleteBook";

const Books = () => {
  const { data } = useQuery({
    queryKey: [booksQueryKey],
    queryFn: getBooks,
  });

  if (!data) {
    return <p>No books found</p>;
  }

  return (
    <div>
      <ul>
        {data?.map((book) => (
          <li
            key={book.id}
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <p>{book.title}</p>
            <DeleteBook idToDelete={book.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
