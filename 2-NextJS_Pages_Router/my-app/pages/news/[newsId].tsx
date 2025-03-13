import { useRouter } from "next/router";
import React from "react";

export default function DetailsPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  return (
    <div>
      <p>The Details Page</p>
      <p>{newsId}</p>
    </div>
  );
}
