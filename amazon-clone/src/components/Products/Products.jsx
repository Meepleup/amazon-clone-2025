import { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard/ProductsCard";
import styles from "./Products.module.css";
import { productsUrl } from "../../api/endPoint";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(productsUrl).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p style={{ padding: 20 }}>Loading products...</p>;
  }

  return (
    <section className={styles.grid}>
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Products;
