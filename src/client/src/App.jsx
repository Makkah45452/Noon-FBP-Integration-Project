import { useState } from "react";
import axios from "axios";

function App() {
  const [orderNumber, setOrderNumber] = useState("");
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.post("/api/noon/order-items", {
        order_nr: orderNumber,
      });
      setItems(res.data.items || []);
    } catch (err) {
      console.error("Error fetching items:", err);
    }
  };

  return (
    <div className="App">
      <h1>Noon FBP Integration Platform</h1>
      <input
        placeholder="Enter Order Number"
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
      />
      <button onClick={fetchItems}>Fetch Items</button>

      {items.map((item, idx) => (
        <div key={idx} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>SKU:</strong> {item.partner_sku}</p>
          <p><strong>Status:</strong> {item.status}</p>
          <p><strong>Auto Cancelled:</strong> {item.is_auto_cancelled ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
