import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LayOut from "../../components/LayOut/LayOut";
import ProductsCard from "../../components/Products/ProductsCard/ProductsCard";
import { categoryUrl } from "../../api/endPoint";

function Results() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${categoryUrl}/${categoryName}`)
      .then((res) => setProducts(res.data));
  }, [categoryName]);

  return (
    <Layout>
      <h2 style={{ padding: 20 }}>{categoryName}</h2>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 20,
          padding: 20,
        }}
      >
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </section>
    </Layout>
  );
}

export default Results;
