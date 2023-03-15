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
