import "./App.css";
import BookList from "./Components/BookList/BookList";
// import WithLoggingComponent from "./Components/HOC/WithLoggingComponent";

function App() {
  return (
    <div className="container">
      <h1>My Book Library</h1>
      <BookList />
    </div>
  );
}

export default App;
