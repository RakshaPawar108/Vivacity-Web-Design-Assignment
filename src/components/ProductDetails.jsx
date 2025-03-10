import React from "react";
import { ChevronLeft, Star, User } from "lucide-react";

function ProductDetails({ product, onBack, onAddToCart }) {
  if (!product) {
    // Fallback if no product is passed
    product = {
      id: 101,
      name: "Organic Strawberries",
      currentPrice: 4.99,
      originalPrice: 6.99,
      image: null,
      vendor: "Green Valley Farm",
      category: "Organic Produce",
      booth: "12",
      description:
        "Sweet, juicy organic strawberries freshly picked from our fields. Perfect for desserts, smoothies, or eating fresh.\n\nOur berries are grown without pesticide and are harvested at peak ripeness for maximum flavor.",
      unit: "lb",
    };
  }

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const toggleFavorite = () => {
    // In a real app, this would toggle the favorite status of the product
    console.log("Toggle favorite status");
  };

  return (
    <div>
      <header className="header">
        <button className="back-button" onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <h1 className="app-title">Product Details</h1>
        <div className="profile-icon">
          <User size={20} />
        </div>
      </header>

      <div className="product-details">
        <div className="product-image-gallery"></div>

        <div className="image-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 className="product-title">{product.name}</h2>
          <Star
            style={{ marginLeft: "8px", cursor: "pointer" }}
            size={24}
            color="#FFC107"
            fill="none"
            onClick={toggleFavorite}
          />
        </div>

        <div className="vendor-info" style={{ marginBottom: "12px" }}>
          <p className="vendor-category">{product.vendor}</p>
        </div>

        <div className="price-container">
          <div>
            <span className="current-price" style={{ fontSize: "18px" }}>
              ${product.currentPrice.toFixed(2)}/{product.unit}
            </span>{" "}
            <span className="original-price">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>

          <div className="stock-indicator">
            <div className="stock-dot"></div>
            <span>In Stock</span>
          </div>
        </div>

        <div className="divider"></div>

        <h3 className="section-label">Description</h3>
        <p className="description-text">
          {product.description.split("\n\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              {index < product.description.split("\n\n").length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </p>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Shopping List
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
