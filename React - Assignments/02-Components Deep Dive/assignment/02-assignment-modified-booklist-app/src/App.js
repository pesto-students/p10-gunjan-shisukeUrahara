import logo from "./logo.svg";
import "./App.css";
import BookList from "./Components/BookList/BookList";
import WithLoggingComponent from "./Components/HOC/WithLoggingComponent";

function App() {
  const BookListWithLogging = WithLoggingComponent(BookList);
  

  
  return <div className="App">
   <BookListWithLogging />
  </div>;
}

export default App;
