import { useState } from "react";
import "./App.css";

function App() {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [dbHost, setDbHost] = useState("");

  return (
    <div className="App">
      <h1>Noon FBP Integration Platform</h1>
      <h2>Webhook</h2>
      <input placeholder="Webhook URL" value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} />
      <h2>Database</h2>
      <input placeholder="DB Host" value={dbHost} onChange={(e) => setDbHost(e.target.value)} />
    </div>
  );
}

export default App;
