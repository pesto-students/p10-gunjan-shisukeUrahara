import "./App.css";
import React ,{useState,useContext} from 'react';
import BookList from "./Components/BookList/BookList";
import { ThemeProvider ,ThemeContext} from "./Context/ThemeContext";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";
import BookDataLoader from "./Components/BookDataLoader/BookDataLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const { theme } = useContext(ThemeContext);
  console.log("**@ THEME APP IS , ",theme)


  const handleLoaded = (initialBooks) => {
    setIsLoading(false);
  };

  return (
    <div className={`container ${theme}`}>
      <h1>My Book Library</h1>
      <ThemeSwitcher />
      {isLoading ? (
        <BookDataLoader onLoaded={handleLoaded} />
      ) : (
        <BookList books={books} setBooks={setBooks} />
      )}
    </div>
  );
}

export default App;
