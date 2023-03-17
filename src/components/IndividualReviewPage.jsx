import IndividualReviewContent from "./IndividualReviewContent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IndividualReviewVotes from "./IndividualReviewVotes";

import { getReview } from "../utils/api";
import CommentsSection from "./CommentsSection";

const IndividualReviewPage = () => {
  const [review, setReview] = useState(null);
  const { review_id } = useParams([]);
  useEffect(() => {
    getReview(review_id).then((review) => {
      setReview(review);
    });
  }, [review_id]);

  return (
    <main>
      {review ? (
        <IndividualReviewContent key={review.review_id} {...review} />
      ) : (
        "Loading.."
      )}
      <IndividualReviewVotes />
      <CommentsSection />
    </main>
  );
};

export default IndividualReviewPage;
