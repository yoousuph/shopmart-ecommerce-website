// import ProductCard from "./components/ProductCard";
// import { getProducts } from "./data/Products";

export default function Home() {

    return (
        <>
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">Welcome to ShopMart</h1>
                <p className="home-subtitle">
                    Shop for your favourite items everytime, everyday
                </p>
            </div>
            <div className="container">
                <h2 className="page-title">Our Products</h2>
                <div className="product-grid">
                    {/* <ProductCard /> */}
                </div>
            </div>
        </div>
        
        </>
    )
}