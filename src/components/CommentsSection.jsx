import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentListing from "./CommentListing";
import NewCommentForm from "./NewCommentForm";

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams([]);
  useEffect(() => {
    getComments(review_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);
  return (
    <>
      <h2>Comments</h2>
      {isLoading ? (
        <p>Loading comments...</p>
      ) : (
        <>
          <div className="comments-cards">
            {comments.map((comment) => {
              return <CommentListing {...comment} />;
            })}
          </div>
        </>
      )}
      <NewCommentForm />
    </>
  );
};

export default CommentsSection;
