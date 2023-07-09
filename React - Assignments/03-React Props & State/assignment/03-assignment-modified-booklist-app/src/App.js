import logo from "./logo.svg";
import "./App.css";
import BookList from "./Components/BookList/BookList";
import WithLoggingComponent from "./Components/HOC/WithLoggingComponent";

function App() {
  const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
];

  const BookListWithLogging = WithLoggingComponent(BookList);
  

  
  return <div className="App">
   <BookListWithLogging books={books}/>
  </div>;
}

export default App;
