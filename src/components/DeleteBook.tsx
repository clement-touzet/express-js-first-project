import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteBook from "../api/books/deleteBook";
import { booksQueryKey } from "../contants/queryKeys";

const DeleteBook = ({ idToDelete }: { idToDelete: string }) => {
  const queryClient = useQueryClient();

  const bookMutation = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [booksQueryKey] });
    },
    onError: (error) => {
      console.log(
        "une erreur est survenue lors de la suppression du livre. Message d'erreur :",
        error.message
      );
    },
  });

  const handleClick = () => {
    console.log("deleting book");

    bookMutation.mutate({
      idToDelete,
    });
  };
  return (
    <button
      style={{
        height: "32px",
        backgroundColor: "red",
        borderWidth: "0",
        borderRadius: "4px",
      }}
      onClick={handleClick}
    >
      Delete
    </button>
  );
};

export default DeleteBook;
