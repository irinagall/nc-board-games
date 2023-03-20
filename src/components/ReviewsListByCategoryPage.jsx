import { useEffect, useState } from "react";
import { getReviewsForCategory } from "../utils/api";
import { useParams } from "react-router";
import ReviewCard from "./ReviewCard";

const ReviewsListByCategoryPage = () => {
  const [reviewsByCategory, setReviewsByCategory] = useState([]);
  //const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { categoryName } = useParams([]);

  useEffect(() => {
    getReviewsForCategory(categoryName).then((reviews) => {
      setReviewsByCategory(reviews);
      setIsLoading(false);
    });
  }, [categoryName]);
  return (
    <main>
      <h2>{`${categoryName} reviews`}</h2>
      {isLoading ? (
        <p>`Loading ${categoryName} reviews`</p>
      ) : (
        <div className="reviews-cards">
          {reviewsByCategory.map((review) => {
            return <ReviewCard key={review.review_id} {...review} />;
          })}
        </div>
      )}
    </main>
  );
};

export default ReviewsListByCategoryPage;
