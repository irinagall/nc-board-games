import { Link } from "react-router-dom";
const ReviewCard = ({
  review_id,
  owner,
  title,
  category,
  review_img_url,
  review_body,
}) => {
  return (
    <article className="review-card">
      <Link to={"/reviews/" + review_id} className="review-title">
        {title}
      </Link>
      <img
        className="review-image"
        src={review_img_url}
        alt={"picture of " + title}
      />
      <div className="review-owner">{owner}</div>
      <div className="review-category">{category}</div>
      <p className="review-body">{review_body}</p>
    </article>
  );
};

export default ReviewCard;
