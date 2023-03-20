import { postNewComment } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewCommentForm = () => {
  const [newCommentText, setNewCommentText] = useState("");
  const [isPostingInProgress, setIsPostingInProgress] = useState(false);
  const [isPostingError, setIsPostingError] = useState(false);

  const { review_id } = useParams([]);

  useEffect(() => {
    console.log(newCommentText);
  }, [newCommentText]);

  const onClickCommentSubmit = () => {
    setIsPostingInProgress(true);
    setIsPostingError(false);
    postNewComment(review_id, {
      username: "anonymous",
      body: newCommentText,
    })
      .then((newComment) => {
        setIsPostingInProgress(false);
      })
      .catch(() => {
        setIsPostingInProgress(false);
        setIsPostingError(true);
      });
  };

  return (
    <form className="new-comment-form">
      {isPostingError && (
        <p className="individual-review-comments__posting-error">
          😰 You were not able to post this time
        </p>
      )}

      <textarea
        onChange={(event) => {
          return setNewCommentText(event.target.value);
        }}
        placeholder="Add a comment..."
      ></textarea>
      <button
        onClick={(event) => {
          event.preventDefault();
          onClickCommentSubmit();
        }}
        disabled={isPostingInProgress}
      >
        Comment
      </button>
    </form>
  );
};

export default NewCommentForm;
