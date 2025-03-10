import React from "react";
import { Plus, User, Minus } from "lucide-react";

function ShoppingList({ items, updateItems }) {
  // Group items by vendor
  const groupedItems = items.reduce((acc, item) => {
    const vendor = item.vendor;
    if (!acc[vendor]) {
      acc[vendor] = {
        items: [],
        booth: item.booth,
      };
    }
    acc[vendor].items.push(item);
    return acc;
  }, {});

  // Calculate total
  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // Handle quantity change
  const handleQuantityChange = (itemId, change) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    updateItems(updatedItems);
  };

  // Toggle item checked state
  const toggleItemChecked = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    updateItems(updatedItems);
  };

  return (
    <div>
      <header className="header">
        <h1 className="app-title">My Shopping List</h1>
        <div className="profile-icon">
          <User size={20} />
        </div>
      </header>

      <div className="shopping-list-container">
        <div className="total-container">
          <div className="total-amount">${calculateTotal().toFixed(2)}</div>
          <div className="total-items">
            {items.length} items from {Object.keys(groupedItems).length} vendors
          </div>
        </div>

        {Object.entries(groupedItems).map(([vendorName, vendorData]) => (
          <div
            key={vendorName}
            className="vendor-group"
            style={{ marginBottom: "1.5rem" }}
          >
            <div className="vendor-section">
              <h3 className="vendor-name">{vendorName}</h3>
              <div style={{ fontSize: "14px" }}>Booth #{vendorData.booth}</div>
            </div>

            {vendorData.items.map((item) => (
              <div key={item.id} className="item-card">
                <input
                  type="checkbox"
                  className="item-check"
                  checked={item.checked}
                  onChange={() => toggleItemChecked(item.id)}
                />
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">
                    ${item.price.toFixed(2)}/{item.unit}
                  </div>
                </div>
                <div className="quantity-controls">
                  <button
                    className="quantity-button"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        ))}

        <button className="add-item-button">
          <Plus className="add-item-icon" />
          <span>Add Item</span>
        </button>

        <div className="action-buttons">
          <button className="action-button">Share</button>
          <button className="action-button">Clear Checked</button>
          <button className="action-button">Delete All</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
