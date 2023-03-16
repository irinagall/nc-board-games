import { getVotes } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { voteForReview } from "../utils/api";
import Cookies from "universal-cookie";

const IndividualReviewVotes = () => {
  const [votes, setVotes] = useState(null);
  const [isVotingInProgress, setIsVotingInProgress] = useState(false);
  const [isVotingError, setIsVotingError] = useState(false);
  let votesPriorToVoting = -1;
  const { review_id } = useParams([]);
  const cookies = new Cookies();
  const reviewsVotedOnCookieKey = "reviewsVotedOn";
  const reviewsVotedOn = cookies.get(reviewsVotedOnCookieKey) || [];

  useEffect(() => {
    getVotes(review_id).then((votes) => {
      setVotes(votes);
    });
  }, [review_id]);

  const onVoteClick = () => {
    setIsVotingInProgress(true);
    setIsVotingError(false);
    const isDownvote = reviewsVotedOn.includes(review_id);
    const voteChange = isDownvote ? -1 : 1;
    votesPriorToVoting = votes;
    setVotes(votes + voteChange);
    if (isDownvote) {
      const newReviewsVotedOn = reviewsVotedOn.filter((item) => {
        return item != review_id;
      });
      cookies.set(reviewsVotedOnCookieKey, newReviewsVotedOn);
    } else {
      const newReviewsVotedOn = reviewsVotedOn.concat([review_id]);
      cookies.set(reviewsVotedOnCookieKey, newReviewsVotedOn);
    }

    voteForReview(review_id, voteChange)
      .then((updatedVotes) => {
        setVotes(() => {
          return updatedVotes;
        });
        setIsVotingInProgress(false);
      })
      .catch(() => {
        setIsVotingError(true);
        setVotes(votesPriorToVoting);
        setIsVotingInProgress(false);
      });
  };
  return (
    <section className="individual-review-votes__votes-and-comments">
      <p className="individual-review--votes">Votes:{votes}</p>
      <button
        className="individual-review-votes__vote-button"
        onClick={onVoteClick}
        disabled={isVotingInProgress}
      >
        Vote
      </button>
      {isVotingError && (
        <p className="individual-review-votes__voting-error">
          😰 You were not able to vote this time
        </p>
      )}
    </section>
  );
};

export default IndividualReviewVotes;
