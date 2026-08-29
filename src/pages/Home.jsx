import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";

function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to GameStop</h1>
        <p>A stop for all gamers to get products.</p>
      </div>
      <div className="container">
        <h2 className="page-title"></h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
