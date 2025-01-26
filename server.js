import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// variable qui joue le role de notre base de données
const books = [
  { id: "1", title: "Deep work" },
  { id: "2", title: "Atomic Habits" },
];

app.post("/api/books/create", (request, response) => {
  console.log("request body in post : ", request.body);
  const { title } = request.body;
  console.log("titre: ", title);

  if (!title) {
    return response.status(400).json({
      error: "Bad request",
      message: "Le champ 'title' est requis",
    });
  }

  const newBook = {
    id: uuidv4(),
    title,
  };
  console.log("new book: ", newBook);

  // ajoute un livre à la variable "books"
  books.push(newBook);

  response.sendStatus(201);
});

app.get("/api/books", (request, response) => {
  console.log("books", books);
  response.send(books);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
