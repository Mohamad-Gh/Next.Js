import Link from "next/link";
import React from "react";

export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            nextjs is a great framework
          </Link>
        </li>
        <li>
          <Link href="/news/somethingElse">Something Else</Link>
        </li>
      </ul>
    </>
  );
}
