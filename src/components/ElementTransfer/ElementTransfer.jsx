import React, { useState } from "react";
import "./Element.css";

const ElementTransfer = () => {
  const [bucket1Items, setBucket1Items] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [bucket2Items, setBucket2Items] = useState([]);

  const handleAddItem = (item) => {
    setBucket1Items(bucket1Items.filter((i) => i !== item));
    setBucket2Items([...bucket2Items, item]);
  };

  const handleRemoveItem = (item) => {
    setBucket2Items(bucket2Items.filter((i) => i !== item));
    setBucket1Items([...bucket1Items, item]);
  };

  const handleAddAll = () => {
    setBucket2Items([...bucket2Items, ...bucket1Items]);
    setBucket1Items([]);
  };

  const handleRemoveAll = () => {
    setBucket1Items([...bucket1Items, ...bucket2Items]);
    setBucket2Items([]);
  };

  return (
    <div className="element-transfer">
      <div className="bucket bucket-left">
        <h2>Bucket 1</h2>
        <ul>
          {bucket1Items.map((item) => (
            <li key={item}>
              <button onClick={() => handleAddItem(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="button-container">
        <button className="btns" onClick={handleAddAll}>
          Add All
        </button>
        <button className="btns-Remove" onClick={handleRemoveAll}>
          Remove All
        </button>
      </div>
      <div className="bucket bucket-right">
        <h2>Bucket 2</h2>
        <ul>
          {bucket2Items.map((item) => (
            <li key={item}>
              <button onClick={() => handleRemoveItem(item)}> {item}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ElementTransfer;
