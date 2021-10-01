import React from "react";
import { useRouter } from "next/router";

const ReviewDetails = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h1>
        review {reviewId} of product {productId}
      </h1>
    </div>
  );
};

export default ReviewDetails;
