import { useEffect, useState } from "react";
import { getOrderedReviews } from "../utils/api";
import { Link } from "react-router-dom";

import ReviewCard from "./ReviewCard";

const ReviewsList = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fieldToSortBy, setFieldToSortBy] = useState("created_at");
  const [isAscending, setIsAscending] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getOrderedReviews(fieldToSortBy, isAscending).then((reviews) => {
      setReviewsList(reviews);
      setIsLoading(false);
    });
  }, [fieldToSortBy, isAscending]);

  const onSortFieldSelected = (event) => {
    setFieldToSortBy(event.target.value);
  };

  const onSortOrderSelected = (event) => {
    setIsAscending(event.target.value === "true");
  };

  return (
    <main>
      <h2>Reviews List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Link to="/reviews/">View All Reviews</Link>
          <select value={fieldToSortBy} onChange={onSortFieldSelected}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <select value={isAscending} onChange={onSortOrderSelected}>
            <option value="true">Ascending</option>
            <option value="false">Descending</option>
          </select>
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
