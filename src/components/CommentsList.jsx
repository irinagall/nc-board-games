import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentListing from "./CommentListing";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams([]);
  useEffect(() => {
    getComments(review_id).then((comments) => {
      setComments(comments);
    });
  }, [review_id]);
  return (
    <>
      <h2>Comments</h2>
      <>
        <div className="comments-cards">
          {comments.map((comment) => {
            return <CommentListing {...comment} />;
          })}
        </div>
      </>
    </>
  );
};

export default CommentsList;
