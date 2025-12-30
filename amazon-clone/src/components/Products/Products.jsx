import { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard/ProductsCard";
import styles from "./Products.module.css";
import { productsUrl } from "../../api/endPoint";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(productsUrl);
        setProducts(res.data);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className={styles.status}>Loading products...</p>;
  }

  if (error) {
    return <p className={styles.status}>{error}</p>;
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