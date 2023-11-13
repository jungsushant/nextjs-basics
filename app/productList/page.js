import Product from "./product";
const page = async () => {
  let products = await productList();

  return (
    <>
      <Product products={products} />
    </>
  );
};

export default page;

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}
