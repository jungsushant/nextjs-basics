"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Product = ({ products }) => {
  const router = useRouter();

  return (
    <div>
      <h1>Server component data fetching</h1>
      <br />
      <button>
        <Link href="/">Go to Home</Link>
      </button>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1> <br />{" "}
          <button onClick={() => router.push(product.thumbnail)}>
            {product.thumbnail}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
