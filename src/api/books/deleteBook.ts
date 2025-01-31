import { BookIdSchema } from "../../../server/src/types/BookType";

const deleteBook = async ({ idToDelete }: { idToDelete: string }) => {
  console.log("deleting book :", idToDelete);

  const parsedId = BookIdSchema.parse({ id: idToDelete });
  console.log("parsed", parsedId);

  await fetch("/api/books/" + parsedId.id, {
    method: "DELETE",
  });
  return;
};

export default deleteBook;
