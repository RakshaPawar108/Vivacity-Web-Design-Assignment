import React from "react";
import { Home, Store, ShoppingCart, Map, User } from "lucide-react";

function BottomNavigation({ activeTab, onTabChange }) {
  return (
    <div className="bottom-navigation">
      <div
        className={`nav-item ${activeTab === "home" ? "active" : ""}`}
        onClick={() => onTabChange("home")}
      >
        <Home className="nav-icon" size={20} />
        <span className="nav-label">Home</span>
      </div>
      <div
        className={`nav-item ${activeTab === "vendors" ? "active" : ""}`}
        onClick={() => onTabChange("vendors")}
      >
        <Store className="nav-icon" size={20} />
        <span className="nav-label">Vendors</span>
      </div>
      <div
        className={`nav-item ${activeTab === "shopping" ? "active" : ""}`}
        onClick={() => onTabChange("shopping")}
      >
        <ShoppingCart className="nav-icon" size={20} />
        <span className="nav-label">List</span>
      </div>
      <div
        className={`nav-item ${activeTab === "map" ? "active" : ""}`}
        onClick={() => onTabChange("map")}
      >
        <Map className="nav-icon" size={20} />
        <span className="nav-label">Map</span>
      </div>
      <div
        className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
        // Profile doesn't navigate to a real tab
        onClick={() => {}}
      >
        <User className="nav-icon" size={20} />
        <span className="nav-label">Profile</span>
      </div>
    </div>
  );
}

export default BottomNavigation;
