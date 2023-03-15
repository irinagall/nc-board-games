const CommentListing = (comment) => {
  return (
    <article className="comment-listing">
      <div className="comment-author">{comment.author}</div>
      <p className="comment-body">{comment.body}</p>
    </article>
  );
};

export default CommentListing;
