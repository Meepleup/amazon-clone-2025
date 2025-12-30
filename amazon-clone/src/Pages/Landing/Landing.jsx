import Carousel from "../../components/Carousel/ImageCarousel";
import Category from "../../components/Category/Category";
import Products from "../../components/Products/Products";

function Landing() {
  return (
    <div className="page">
      <Carousel />
      <Category />
      <Products />
    </div>
  );
}

export default Landing;
