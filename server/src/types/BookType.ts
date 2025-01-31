import { z } from "zod";

export const BookSchema = z.object({
  title: z.string(),
  id: z.string(),
});
export const BooksSchema = z.array(BookSchema);
export const NoIdBookSchema = BookSchema.omit({ id: true });
export const BookIdSchema = BookSchema.pick({ id: true });

export type BookType = z.infer<typeof BookSchema>;
export type CreateBookType = z.infer<typeof NoIdBookSchema>;
