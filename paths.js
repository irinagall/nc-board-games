
let endPoints=[ 
  {CATEGORIES:{ "/api/categories": fetchAllCategories},

    },
  {REVIEWS: {"GET/api/reviews":reviewsEndpoint},
  {"GET/api/reviews/:review_id": fetchReviewById},
  {"GET/api/reviews/:review_id/comments":fetchAllCommentsbyReviewId },
            {"":},

    },
  {COMMENTS: {"DELETE/api/comments/:comment_id": deleteCommentById},
  }
  
]

  
  



