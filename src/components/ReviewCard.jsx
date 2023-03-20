import { Link } from "react-router-dom";
const ReviewCard = ({
  review_id,
  owner,
  title,
  category,
  review_img_url,
  review_body,
  comment_count,
  votes,
}) => {
  return (
    <div>
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
        <Link to={"/category/" + category} className="review-category">
          {category}
        </Link>
        <p className="review-body">{review_body}</p>
      </article>

      <section className="reviews__votes-and-comments">
        <p className="reviews-votes">Votes:{votes}</p>
        {comment_count !== undefined && (
          <p className="reviews-comments">Comments: {comment_count}</p>
        )}
      </section>
    </div>
  );
};

export default ReviewCard;
