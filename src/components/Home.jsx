import React from "react";
import { Search, User } from "lucide-react";

function Home({ onSelectProduct }) {
  // Sample data for featured vendors and deals
  const vendors = [
    {
      id: 1,
      name: "Green Valley Farm",
      category: "Organic Produce",
      booth: "12",
      image: null,
    },
    {
      id: 2,
      name: "Sunshine Bakery",
      category: "Artisan Breads",
      booth: "23",
      image: null,
    },
  ];

  const deals = [
    {
      id: 1,
      name: "Strawberries",
      currentPrice: 4.99,
      originalPrice: 6.99,
      image: null,
      vendor: "Green Valley Farm",
      category: "Organic Produce",
      description:
        "Sweet, juicy organic strawberries freshly picked from our fields. Perfect for desserts, smoothies, or eating fresh.",
      unit: "lb",
    },
    {
      id: 2,
      name: "Honey Jar",
      currentPrice: 7.5,
      originalPrice: 9.0,
      image: null,
      vendor: "Happy Bee Farm",
      category: "Honey & Preserves",
      description:
        "Raw, unfiltered local honey. Collected from our hives and bottled fresh.",
      unit: "jar",
    },
    {
      id: 3,
      name: "Fresh Eggs",
      currentPrice: 5.0,
      originalPrice: 6.5,
      image: null,
      vendor: "Happy Hen Farm",
      category: "Eggs & Poultry",
      description:
        "Farm fresh eggs from free-range chickens. Rich yolks and great flavor.",
      unit: "dozen",
    },
  ];

  const handleProductSelect = (product) => {
    onSelectProduct(product);
  };

  return (
    <div>
      <header className="header">
        <h1 className="app-title">FreshMarket</h1>
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
      </div>

      <div className="featured-banner">
        <h2 className="featured-title">THIS WEEKEND</h2>
        <p className="featured-subtitle">Spring Harvest Festival</p>
        <p className="featured-subtitle">
          Live music, chef demos & kids activities
        </p>
        <button className="featured-button">Learn More</button>
      </div>

      <div className="section-header">
        <h2 className="section-title">Vendors Near You</h2>
        <span className="see-all">See All</span>
      </div>

      <div className="vendors-row">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <div className="product-name">{vendor.category}</div>
              <div className="vendor-booth">{`Booth #${vendor.booth}`}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-header">
        <h2 className="section-title">Today's Deals</h2>
        <span className="see-all">See All</span>
      </div>

      <div className="deals-row">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="product-card"
            onClick={() => handleProductSelect(deal)}
          >
            <div className="product-image"></div>
            <div className="product-info">
              <div className="product-name">{deal.name}</div>
              <div className="product-price">
                <span className="current-price">
                  ${deal.currentPrice.toFixed(2)}
                </span>
                <span className="original-price">
                  ${deal.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
