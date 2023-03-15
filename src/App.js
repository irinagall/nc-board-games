import "./App.css";
import IndividualReviewPage from "./components/IndividualReviewPage";
import { Routes, Route } from "react-router-dom";
import ReviewsList from "./components/ReviewsList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ReviewsList />} />
        <Route path="/reviews" element={<ReviewsList />} />
        <Route path="/reviews/:review_id" element={<IndividualReviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
