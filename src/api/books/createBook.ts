import { NoIdBookSchema } from "../../../server/src/types/BookType";

const createBook = async ({
  formValues,
}: {
  formValues: { [k: string]: FormDataEntryValue };
}) => {
  const parsedFormValues = NoIdBookSchema.parse(formValues);

  await fetch("/api/books/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Indique que tu envoies du JSON
    },
    body: JSON.stringify(parsedFormValues),
  });
  return;
};
export default createBook;
