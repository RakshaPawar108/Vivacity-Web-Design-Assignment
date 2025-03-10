import React, { useState } from "react";
import { Search, Filter, Star, User } from "lucide-react";

function Vendors({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState("produce");

  // Sample data for vendors
  const vendors = [
    {
      id: 1,
      name: "Green Valley Farm",
      category: "Organic Produce",
      booth: "12",
      image: null,
      favorite: true,
      products: [
        {
          id: 101,
          name: "Organic Strawberries",
          currentPrice: 4.99,
          originalPrice: 6.99,
          image: null,
          description:
            "Sweet, juicy organic strawberries freshly picked from our fields. Perfect for desserts, smoothies, or eating fresh. Our berries are grown without pesticide and are harvested at peak ripeness for maximum flavor.",
          unit: "lb",
          vendor: "Green Valley Farm",
        },
      ],
    },
    {
      id: 2,
      name: "Sunshine Bakery",
      category: "Artisan Breads",
      booth: "23",
      image: null,
      favorite: true,
      products: [],
    },
    {
      id: 3,
      name: "Happy Hen Farm",
      category: "Eggs & Poultry",
      booth: "08",
      image: null,
      favorite: true,
      products: [],
    },
    {
      id: 4,
      name: "Valley Cheesery",
      category: "Artisan Cheese",
      booth: "15",
      image: null,
      favorite: true,
      products: [],
    },
  ];

  // Categories for the filter pills
  const categories = [
    { id: "produce", name: "Produce" },
    { id: "bakery", name: "Bakery" },
    { id: "dairy", name: "Dairy" },
  ];

  const handleVendorProductSelect = (product) => {
    onSelectProduct(product);
  };

  const handleToggleFavorite = (e, vendorId) => {
    e.stopPropagation();
    // In a real app, this would update the vendor's favorite status
    console.log(`Toggle favorite for vendor ${vendorId}`);
  };

  return (
    <div>
      <header className="header">
        <h1 className="app-title">Vendors</h1>
        <div className="profile-icon">
          <User size={20} />
        </div>
      </header>

      <div className="search-bar">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          className="search-input"
          placeholder="Search vendors, products..."
        />
        <Filter className="filter-button" size={20} />
      </div>

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-pill ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
        <button
          className="category-pill"
          style={{ width: "40px", display: "flex", justifyContent: "center" }}
        >
          +
        </button>
      </div>

      <div className="vendors-list">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="vendor-card"
            onClick={() => {
              if (vendor.products.length > 0) {
                handleVendorProductSelect(vendor.products[0]);
              }
            }}
          >
            <div className="vendor-image"></div>
            <div className="vendor-info">
              <h3 className="vendor-name">{vendor.name}</h3>
              <p className="vendor-category">{vendor.category}</p>
              <div className="vendor-booth">Booth #{vendor.booth}</div>
            </div>
            <Star
              className="favorite-icon"
              fill={vendor.favorite ? "#FFC107" : "none"}
              color={vendor.favorite ? "#FFC107" : "#9E9E9E"}
              onClick={(e) => handleToggleFavorite(e, vendor.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vendors;
