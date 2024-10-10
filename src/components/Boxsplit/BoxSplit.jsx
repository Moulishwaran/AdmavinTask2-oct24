import React, { useState } from "react";
import "./BoxSplit.css";

function BoxSplit() {
  const [boxes, setBoxes] = useState([{ x: 0, y: 0, size: 200 }]);

  const handleClick = (x, y, size) => {
    const newBoxes = [...boxes];
    const index = newBoxes.findIndex(
      (box) => box.x === x && box.y === y && box.size === size
    );

    if (index !== -1) {
      newBoxes.splice(index, 1);

      // Create four new smaller boxes
      const newSize = size / 2;
      newBoxes.push(
        { x: x, y: y, size: newSize },
        { x: x + newSize, y: y, size: newSize },
        { x: x, y: y + newSize, size: newSize },
        { x: x + newSize, y: y + newSize, size: newSize }
      );

      setBoxes(newBoxes);
    }
  };

  return (
    <div className="box-container">
      {boxes.map((box) => (
        <div
          key={`${box.x}-${box.y}-${box.size}`}
          className="box"
          style={{
            left: `${box.x}px`,
            top: `${box.y}px`,
            width: `${box.size}px`,
            height: `${box.size}px`,
          }}
          onClick={() => handleClick(box.x, box.y, box.size)}
        ></div>
      ))}
    </div>
  );
}

export default BoxSplit;
