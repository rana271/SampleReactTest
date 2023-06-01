import React, { useEffect, useState } from "react";
interface Props {
  category: string;
}
const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Reading Products from Server" + category);
    setProducts(["abc", "xyz"]);
  }, [category]);
  return <div>Product List</div>;
};

export default ProductList;
