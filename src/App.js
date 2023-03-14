import { Routes, Route } from "react-router-dom";
import "./App.css";
import ReviewsList from "./components/ReviewsList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/reviews" element={<ReviewsList />} />
      </Routes>
    </div>
  );
}

export default App;
