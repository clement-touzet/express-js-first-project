import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent } from "react";
import createBook from "../api/books/createBook";

const CreateBook = () => {
  const queryClient = useQueryClient();

  const bookMutation = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(form);
    console.log("valeurs du formulaire ", formValues);
    bookMutation.mutate({ formValues });
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
