import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const ReviewsList = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviewsData) => {
      setReviewsList(reviewsData);
      setIsLoading(false);
    });
  }, []);

  console.log(reviewsList, "reviewList");

  return (
    <main>
      <h2>Reviews List</h2>
      {isLoading ? <p>Loading...</p> : <ul> map reviews here </ul>}
    </main>
  );
};

export default ReviewsList;
