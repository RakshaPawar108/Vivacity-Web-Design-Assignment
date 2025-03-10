import React, { useState } from "react";
import { Search, Plus, Minus, User } from "lucide-react";

function MarketMap() {
  const [viewMode, setViewMode] = useState("map"); // 'map' or 'list'

  // Sample booth data
  const boothData = [
    { id: "01", x: 1, y: 1 },
    { id: "12", x: 2, y: 4 },
    { id: "15", x: 6, y: 3 },
    { id: "19", x: 1, y: 5 },
    { id: "23", x: 5, y: 1 },
    { id: "23", x: 4, y: 5 },
  ];

  return (
    <div>
      <header className="header">
        <h1 className="app-title">Market Map</h1>
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

      <div className="map-toggle">
        <button
          className={`toggle-button ${viewMode === "map" ? "active" : ""}`}
          onClick={() => setViewMode("map")}
        >
          Map
        </button>
        <button
          className={`toggle-button ${viewMode === "list" ? "active" : ""}`}
          onClick={() => setViewMode("list")}
        >
          List
        </button>
      </div>

      {viewMode === "map" && (
        <div className="map-container">
          <div className="market-map">
            {/* Create a 6x6 grid */}
            {Array.from({ length: 36 }).map((_, index) => {
              const row = Math.floor(index / 6) + 1;
              const col = (index % 6) + 1;

              // Check if there's a booth at this position
              const booth = boothData.find((b) => b.x === col && b.y === row);

              if (booth) {
                return (
                  <div
                    key={index}
                    className="grid-cell booth"
                    style={{
                      gridColumn: col,
                      gridRow: row,
                    }}
                  >
                    {booth.id}
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="grid-cell"
                  style={{
                    gridColumn: col,
                    gridRow: row,
                  }}
                ></div>
              );
            })}

            {/* User location marker */}
            <div className="user-location"></div>

            {/* Zoom controls */}
            <div className="zoom-controls">
              <button className="zoom-button">
                <Plus size={20} />
              </button>
              <button className="zoom-button">
                <Minus size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {viewMode === "list" && (
        <div className="map-container">
          <p style={{ padding: "1rem", fontSize: "16px", color: "#666" }}>
            Nearby vendors list view would go here
          </p>
        </div>
      )}
    </div>
  );
}

export default MarketMap;
