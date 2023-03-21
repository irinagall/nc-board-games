import { useEffect, useState } from "react";
import {
  getOrderedReviewsByCategory,
  getReviewsForCategory,
} from "../utils/api";
import { useParams } from "react-router";
import ReviewCard from "./ReviewCard";

const ReviewsListByCategoryPage = () => {
  const [reviewsByCategory, setReviewsByCategory] = useState([]);
  const [fieldToSortBy, setFieldToSortBy] = useState("created_at");
  const [isAscending, setIsAscending] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const { categoryName } = useParams([]);

  useEffect(() => {
    setIsLoading(true);
    getOrderedReviewsByCategory(fieldToSortBy, isAscending, categoryName).then(
      (reviews) => {
        setReviewsByCategory(reviews);
        setIsLoading(false);
      }
    );
  }, [fieldToSortBy, isAscending, categoryName]);

  const onSortFieldSelected = (event) => {
    setFieldToSortBy(event.target.value);
  };

  const onSortOrderSelected = (event) => {
    setIsAscending(event.target.value === "true");
  };

  return (
    <main>
      <h2>{`${categoryName} reviews`}</h2>
      {isLoading ? (
        <p>`Loading ${categoryName} reviews`</p>
      ) : (
        <>
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
            {reviewsByCategory.map((review) => {
              return <ReviewCard key={review.review_id} {...review} />;
            })}
          </div>
        </>
      )}
    </main>
  );
};

export default ReviewsListByCategoryPage;
