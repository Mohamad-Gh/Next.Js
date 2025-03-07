import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main>
      <h1>The Blog</h1>
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="blog/post-2">Post 1</Link>
      </p>
    </main>
  );
}
