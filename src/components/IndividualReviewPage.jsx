import IndividualReviewContent from "./IndividualReviewContent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getReview } from "../utils/api";

const IndividualReviewPage = () => {
  const [review, setReview] = useState(null);
  const { review_id } = useParams();
  useEffect(() => {
    getReview(review_id).then((reviewData) => {
      setReview(reviewData.review);
    });
  }, [review_id]);

  return (
    <main>
      {review ? (
        <IndividualReviewContent key={review.review_id} {...review} />
      ) : (
        "Loading.."
      )}
    </main>
  );
};

export default IndividualReviewPage;
