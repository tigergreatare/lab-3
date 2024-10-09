// src/Components/ColorBoxesContainer.jsx
import ColorBox from "./ColorBox";
import colors from "../Data/data.js";

const ColorBoxesContainer = () => {
    return (
      <div className="gridContainer" style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(5, 50px)",  
           
         
      }}>
        {colors.map((color, index) => (
          <ColorBox key={index} initialColor={color} />
        ))}
      </div>
    );
  };
  
  export default ColorBoxesContainer;

