import axios from "axios";

const boardGamesRequestMaker = axios.create({
  baseURL: "https://ncboard-games.onrender.com/api",
});

export const getReviews = () => {
  return boardGamesRequestMaker.get("/reviews").then(({ data }) => {
    return data;
  });
};

export const getReview = (reviewId) => {
  return boardGamesRequestMaker.get(`/reviews/${reviewId}`).then(({ data }) => {
    return data.review;
  });
};

export const getComments = (reviewId) => {
  return boardGamesRequestMaker
    .get(`/reviews/${reviewId}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const getVotes = (review_id) => {
  return boardGamesRequestMaker
    .get(`/reviews/${review_id}`)
    .then(({ data }) => {
      return data.review.votes;
    });
};

export const voteForReview = (review_id, changeVal) => {
  return boardGamesRequestMaker
    .patch(`/reviews/${review_id}`, { inc_votes: changeVal })
    .then(({ data }) => {
      return data.review.votes;
    });
};
