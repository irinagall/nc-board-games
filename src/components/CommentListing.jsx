const CommentListing = (comment) => {
  return (
    <article className="comment-listing">
      <h4 className="comment-author">{comment.author}</h4>
      <p className="comment-body">{comment.body}</p>
    </article>
  );
};

export default CommentListing;
