const ReviewCard = ({
  owner,
  title,
  category,
  review_img_url,
  review_body,
}) => {
  return (
    <article className="review-card">
      <div className="review-title">{title}</div>
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
