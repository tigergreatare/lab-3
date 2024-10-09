// Import React if needed (not necessary in newer versions of React)
import React from "react";

// Import the ColorBoxesContainer component
import ColorBoxesContainer from "./Components/ColorBoxesContainer";

// Import any other components you might need (e.g., Counter, EmojiStore, Toggle)
import Counter from "./Components/Counter";
import EmojiStore from "./Components/EmojiStore";
import Toggle from "./Components/Toggle";



function App() {
  return (
    <div 
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",              
        justifyContent: "center",      
        alignItems: "center",        
        height: "100vh",      
      }}
    >
      <ColorBoxesContainer />
    </div>
  );
}

export default App;




