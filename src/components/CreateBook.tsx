import { FormEvent } from "react";

const CreateBook = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(form);
    console.log("valeurs du formulaire ", formValues);

    fetch("/api/books/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Indique que tu envoies du JSON
      },
      body: JSON.stringify(formValues),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="titre">Titre du livre</label>
      <input type="text" placeholder="Titre" name="title"></input>

      <button type="submit">Créer un nouveau livre</button>
    </form>
  );
};

export default CreateBook;
