import { useEffect } from "react";
import useBooks from "../hooks/book.hooks";

const OverDuedBooks = () => {
  const { fetchOverDuedBooks, overDuedbooks } = useBooks();
  useEffect(() => {
    (async () => {
      await fetchOverDuedBooks();
    })();
  }, []);
  return (
    <div className="bg-center">
      <h1 className="text-center">Overdued Books</h1>
      {overDuedbooks.loading ? (
        <h1 className="text-center">Loading books...</h1>
      ) : (
        <ul className="flex flex-col gap-1 justify-center items-center">
          {!overDuedbooks.data.length && <h1>No Overdued Books available</h1>}
          {overDuedbooks.data.map((book) => {
            return (
              <li key={book.BookID} className="shadow-lg p-4 w-1/2 ">
                <h1>{book.BookName}</h1>
                <h2>{book.NumberOfCopies} copies </h2>
                <h3>Fine: {book.fine}/-</h3>
                {/* <button
                  onClick={async () => {
                    await returnBook(book.BookID);
                  }}
                  className="bg-red-600 text-white p-2 border-r-2"
                >
                  Return
                </button> */}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default OverDuedBooks;
