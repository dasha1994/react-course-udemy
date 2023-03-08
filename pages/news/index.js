import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is">NextJS IS</Link>
        </li>
        <li>Frame IS</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
