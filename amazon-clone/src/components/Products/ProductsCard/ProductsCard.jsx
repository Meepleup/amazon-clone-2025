import { useContext } from "react";
import styles from "./ProductsCard.module.css";
import Rating from "../../Rating/Rating";
import { DataContext } from "../../DataProvider/DataProvider";

function ProductsCard({ product }) {
  const [, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: product,
    });
  };

  return (
    <article className={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.image}
      />

      <h4 className={styles.title}>{product.title}</h4>

      <Rating
        value={product.rating?.rate}
        count={product.rating?.count}
      />

      <p className={styles.price}>${product.price}</p>

      <button onClick={addToCart} className={styles.button}>
        Add to Cart
      </button>
    </article>
  );
}

export default ProductsCard;