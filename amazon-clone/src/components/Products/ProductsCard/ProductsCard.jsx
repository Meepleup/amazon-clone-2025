import React, { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import styles from "./ProductsCard.module.css";

function ProductsCard({
  product,
  showButton = true,
  showDescription = false,
}) {
  const [, dispatch] = useContext(DataContext);

  // ✅ SAFETY GUARD (prevents white screen)
  if (!product) {
    return <p style={{ padding: 20 }}>Loading product...</p>;
  }

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating?.rate || 0,
      },
    });
  };

  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.image}
      />

      <p className={styles.title}>{product.title}</p>

      {showDescription && (
        <p className={styles.description}>{product.description}</p>
      )}

      <strong>${product.price}</strong>

      {showButton && (
        <button onClick={addToBasket}>Add to cart</button>
      )}
    </div>
  );
}

export default ProductsCard;
