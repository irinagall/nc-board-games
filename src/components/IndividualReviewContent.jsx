import { Link } from "react-router-dom";

const IndividualReviewContent = ({
  owner,
  title,
  category,
  review_img_url,
  review_body,
}) => {
  return (
    <article className="review-content">
      <h2 className="review-title">{title}</h2>
      <img
        className="review-image"
        src={review_img_url}
        alt={"picture of " + title}
      />
      <div className="review-owner">{owner}</div>
      <Link to={"/category/" + category} className="review-category">
        {category}
      </Link>
      <p className="review-body">{review_body}</p>
    </article>
  );
};

export default IndividualReviewContent;
