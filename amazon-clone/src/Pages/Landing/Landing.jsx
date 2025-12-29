import LayOut from "../../components/LayOut/LayOut";
import Carousel from "../../components/Carousel/ImageCarousel";
import Category from "../../components/Category/Category";
import Products from "../../components/Products/Products";

function Landing() {
  return (
    <LayOut>
      <div className="page">
        <Carousel />
        <Category />
        <Products />
      </div>
    </LayOut>
  );
}

export default Landing;
