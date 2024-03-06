
import { useState } from "react"
import { API_URL, DEFAULT_MEMBER_ID, INITIAL_DATA_STATE } from "../utils/constants"
import axios from "axios"

const useBooks = () => {

  const [books, setBooks] = useState(INITIAL_DATA_STATE);
  const [overDuedbooks, setOverDuedBooks] = useState(INITIAL_DATA_STATE);

  const checkoutBook = async (bookId: string) => {
    try {
      const data = await axios.post(`${API_URL}/books/${bookId}/checkout/`, {
        memberId: DEFAULT_MEMBER_ID,
      });
      if (data.data) {
        await fetchBooks();
      }
    } catch (err: any) { }
  };

  const returnBook = async (bookId: string) => {
    try {
      const data = await axios.post(`${API_URL}/books/${bookId}/return/`, {
        memberId: DEFAULT_MEMBER_ID,
      });

      if (data.data) {
        await fetchBooks();
      }
    } catch (err: any) { }
  };

  const fetchBooks = async () => {
    try {
      const data = await axios.get(API_URL + "/books");
      if (data) {
        setBooks({
          ...books,
          data: data.data,
          loading: false,
        });
      }
    } catch (err: any) {
      setBooks({
        ...books,
        error: err.mesage,
        loading: false,
      });
    }
  };

  const fetchOverDuedBooks = async () => {
    try {
      const data = await axios.get(
        `${API_URL}/books/overdued/${DEFAULT_MEMBER_ID}`
      );

      if (data) {
        setOverDuedBooks({
          ...overDuedbooks,
          data: data.data,
          loading: false,
        });
      }
    } catch (err: unknown) {
      setOverDuedBooks({
        ...overDuedbooks,
        error: err.mesage,
        loading: false,
      });
    }
  };


  return { fetchBooks, books, checkoutBook, returnBook, fetchOverDuedBooks, overDuedbooks }
}
export default useBooks;