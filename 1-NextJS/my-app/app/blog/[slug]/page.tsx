import React from "react";
export default function page({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Post Blog</h1>
      <p>{params.slug}</p>
    </main>
  );
}
