import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

import ReviewCard from "./ReviewCard";

const ReviewsList = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviewsData) => {
      setReviewsList(reviewsData);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <h2>Reviews List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Link to="/reviews/">View All Reviews</Link>
          <div className="reviews-cards">
            {reviewsList.map((review) => {
              return <ReviewCard key={review.review_id} {...review} />;
            })}
          </div>
        </>
      )}
    </main>
  );
};

export default ReviewsList;
