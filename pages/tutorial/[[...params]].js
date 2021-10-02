import { useRouter } from "next/router";
import React from "react";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 3) {
    return (
      <h1>
        viewing topic {params[2]} of chapter {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return (
      <h1>
        Language page, with Language into and all chapter links for language:
        {params[0]}
      </h1>
    );
  }
  return (
    <div>
      <h1>Tutorial page</h1>
    </div>
  );
};

export default Doc;
