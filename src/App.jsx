import React, { useState } from "react";
import Home from "./components/Home";
import Vendors from "./components/Vendors";
import ProductDetails from "./components/ProductDetails";
import ShoppingList from "./components/ShoppingList";
import MarketMap from "./components/MarketMap";
import BottomNavigation from "./components/BottomNavigation";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [shoppingList, setShoppingList] = useState([
    {
      id: 1,
      name: "Organic Strawberries",
      price: 4.99,
      quantity: 2,
      unit: "lb",
      vendor: "Green Valley Farm",
      booth: "12",
      checked: false,
    },
    {
      id: 2,
      name: "Fresh Herbs",
      price: 2.99,
      quantity: 1,
      unit: "bunch",
      vendor: "Green Valley Farm",
      booth: "12",
      checked: true,
    },
    {
      id: 3,
      name: "Sourdough Bread",
      price: 6.5,
      quantity: 2,
      unit: "loaf",
      vendor: "Sunshine Bakery",
      booth: "23",
      checked: false,
    },
  ]);

  const handleAddToCart = (product) => {
    // Check if product already exists in cart
    const existingProduct = shoppingList.find((item) => item.id === product.id);

    if (existingProduct) {
      // Update quantity if product exists
      setShoppingList(
        shoppingList.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new product to cart
      setShoppingList([
        ...shoppingList,
        {
          ...product,
          price: product.currentPrice,
          quantity: 1,
          checked: false,
        },
      ]);
    }

    // Navigate to shopping list after adding item
    setActiveTab("shopping");
  };

  // Function to render the current active tab
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <Home
            onSelectProduct={(product) => {
              setSelectedProduct(product);
              setActiveTab("product");
            }}
          />
        );
      case "vendors":
        return (
          <Vendors
            onSelectProduct={(product) => {
              setSelectedProduct(product);
              setActiveTab("product");
            }}
          />
        );
      case "product":
        return (
          <ProductDetails
            product={selectedProduct}
            onBack={() => setActiveTab("vendors")}
            onAddToCart={handleAddToCart}
          />
        );
      case "shopping":
        return (
          <ShoppingList items={shoppingList} updateItems={setShoppingList} />
        );
      case "map":
        return <MarketMap />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">{renderContent()}</div>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
