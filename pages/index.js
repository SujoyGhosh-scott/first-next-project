import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <Link href="/blog">Blog</Link>&nbsp;&nbsp;&nbsp;
        <Link href="/product">Product</Link>
      </div>
      <h1>hello form Home</h1>
      <br />
      <button onClick={handleClick}>Place order</button>
    </div>
  );
};

export default Home;
