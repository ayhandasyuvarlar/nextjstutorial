import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Link href={"/about"}>about</Link>
      <br />
      <Link href={"/docs/post-1"}>post 1 </Link>
      <br />
      <Link href={"/docs/post-1/post-2"}>post 2</Link>
      <br />
      <Link
        href={{
          pathname: "/about",
          query: {
            firstName: "Ayhan",
            lastName: "Dasyuvarlar",
          },
        }}
      >
        About or Object
      </Link>
    </div>
  );
};

export default Home;
