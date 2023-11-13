import Link from "next/link";

const page = async () => {
  let products = await productList();
  console.log(products);

  return (
    <div>
      <h1>Server component data fetching</h1>
      <br />
      <button>
        <Link href="/">Go to Home</Link>
      </button>
    </div>
  );
};

export default page;

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}
