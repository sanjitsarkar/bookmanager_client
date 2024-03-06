import { useEffect } from "react";
import useBooks from "../hooks/book.hooks";

const Books = () => {
  const { books, checkoutBook, returnBook, fetchBooks } = useBooks();

  useEffect(() => {
    (async () => {
      await fetchBooks();
    })();
  }, []);

  return (
    <div className="bg-center">
      <h1 className="text-center">Books</h1>
      {books.loading ? (
        <h1 className="text-center">Loading books...</h1>
      ) : (
        <ul className="flex flex-col gap-1 justify-center items-center">
          {!books.data.length && <h1>No Books available</h1>}

          {books.data.map((book) => {
            return (
              <li key={book.BookID} className="shadow-lg p-4 w-1/2 ">
                <h1>{book.BookName}</h1>
                <h2>{book.NumberOfCopies} copies </h2>

                <div className="flex gap-4">
                  <button
                    disabled={!book.NumberOfCopies}
                    onClick={async () => {
                      await checkoutBook(book.BookID);
                    }}
                    className="bg-green-600 text-white p-2 border-r-2"
                  >
                    Checkout
                  </button>
                  <button
                    onClick={async () => {
                      await returnBook(book.BookID);
                    }}
                    className="bg-red-600 text-white p-2 border-r-2"
                  >
                    Return
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Books;
