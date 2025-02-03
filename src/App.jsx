import { useState } from "react";
import { Mnemonic } from "@hashgraph/sdk";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  const generateMnemonic = async () => {
    try {
      const newMnemonic = await Mnemonic.generate();
      setMnemonic(newMnemonic.toString());
    } catch (error) {
      console.error("Error generating mnemonic:", error);
      setMnemonic("Failed to generate mnemonic. Check console for details.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hedera Mnemonic Generator</h1>
      <button onClick={generateMnemonic} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Create Mnemonic
      </button>
      {mnemonic && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
          <h3>Your 24-Word Mnemonic:</h3>
          <p style={{ wordBreak: "break-word" }}>{mnemonic}</p>
        </div>
      )}
    </div>
  );
}

export default App;
