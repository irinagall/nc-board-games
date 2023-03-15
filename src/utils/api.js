import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://ncboard-games.onrender.com/api",
});

export const getReviews = () => {
  return reviewsApi.get("/reviews").then(({ data }) => {
    return data;
  });
};

export const getReview = (reviewId) => {
  return reviewsApi.get(`/reviews/${reviewId}`).then(({ data }) => {
    return data;
  });
};
