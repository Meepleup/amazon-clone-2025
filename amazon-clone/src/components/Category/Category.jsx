import CategoryCard from "./CategoryCard";
import { categories } from "./categoryList";
import styles from "./CategoryCard.module.css";

function Category() {
  return (
    <section className={styles.card_container}>
      {categories.map((item, index) => (
        <CategoryCard key={index} data={item} />
      ))}
    </section>
  );
}

export default Category;
