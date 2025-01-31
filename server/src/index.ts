import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { BookIdSchema, NoIdBookSchema } from "./types/BookType";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// variable qui joue le role de notre base de données
let books = [
  { id: "1", title: "Deep work" },
  { id: "2", title: "Atomic Habits" },
];

app.post("/api/books/create", (request, response) => {
  console.log("request body in post : ", request.body);
  const { success, data } = NoIdBookSchema.safeParse(request.body);

  if (!success) {
    response.sendStatus(400);
    return;
  }

  const { title } = data;
  const newBook = {
    id: uuidv4(),
    title,
  };
  console.log("new book: ", newBook);

  // ajoute un livre à la variable "books"
  books.push(newBook);
  response.sendStatus(201);
});

app.get("/api/books", (_, response) => {
  console.log("get method");
  response.status(200).send(books);
});

app.get("/api/books/:id", (request: Request, response: Response) => {
  const id = request.params.id;
  console.log("get [id] method");

  const bookFound = books.find((book) => book.id === id);
  response.status(200).send(bookFound);
});

app.delete("/api/books/:id", (request: Request, response: Response) => {
  const bookIdToDelete = request.params.id;

  const { success } = BookIdSchema.safeParse({ id: bookIdToDelete });
  if (!success) {
    response.sendStatus(400);
    return;
  }

  books = books.filter((book) => book.id !== bookIdToDelete);
  console.log("books deleted", books, bookIdToDelete);
  response.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
