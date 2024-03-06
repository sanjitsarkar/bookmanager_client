import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-slate-600 w-screen h-screen">
      <h1 className="text-center text-white">Books Management</h1>
      <div className="flex gap-2 text-green-600 justify-center">
        <Link to="/books">Books</Link>
        <Link to="/overduedbooks">Overdued Books</Link>
      </div>
    </div>
  );
};

export default App;
