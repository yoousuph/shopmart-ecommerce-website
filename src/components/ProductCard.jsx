// import { Link } from "react-router-dom";
// import { useCart } from "./context/CartContext";

export default function ProductCard() {
  return (
    <div className="product-card">
      <img className="product-card-image" src="https://pixabay.com/get/g1f07e0455c379c53808edbd2f6d40f3706e9ec1ed79a6cfc0db9bb07415db749513d5cb3a4d14eb13d00e709d1fabdbf7699afdd9a19b1651adf5a3a39fb32f3_1920.jpg" alt="" />
      <div className="product-card-content">
          <h3 className="product-card-name">Chees</h3>
          <p className="product-card-description">
              A brief description of the product.
          </p>
          <p className="product-card-price">$19.99</p>
      </div>
    </div>
  );
}
