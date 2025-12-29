import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import LayOut from "../../components/LayOut/LayOut";
import ProductsCard from "../../components/Products/ProductsCard/ProductsCard";
import { productsUrl } from "../../api/endPoint";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${productsUrl}/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  return (
    <LayOut>
      <div style={{ padding: 40 }}>
        <ProductsCard
          product={product}
          showDescription
          showButton
        />
      </div>
    </LayOut>
  );
}

export default ProductDetail;
