import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "../src/Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import ContactPage from "../src/Components/ContactPage/ContactPage";
import store from "../src/store/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contactus" element={<ContactPage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
