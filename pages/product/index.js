import React from "react";
import Link from "next/link";

const ProductList = () => {
  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <Link href="/">Home</Link>
      </div>
      <Link href="/product/1">
        <h1>Product 1</h1>
      </Link>
      <Link href="/product/2">
        <h1>Product 2</h1>
      </Link>
      <Link href="/product/3">
        <h1>Product 3</h1>
      </Link>
      <Link href="/product/4">
        <h1>Product 4</h1>
      </Link>
      <Link href="/product/5">
        <h1>Product 5</h1>
      </Link>
    </div>
  );
};

export default ProductList;
