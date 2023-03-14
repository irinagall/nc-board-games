import "./App.css";
import Header from "./components/Header";
import IndividualReviewPage from "./components/IndividualReviewPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/reviews/:review_id" element={<IndividualReviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
