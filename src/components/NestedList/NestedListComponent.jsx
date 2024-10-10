import React, { useState } from "react";
import "./NestedList.css";

function NestedListComponent() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Applications",
      children: [
        { id: 2, name: "adam" },
        { id: 3, name: "ghost" },
        { id: 4, name: "Guest" },
      ],
    },
    {
      id: 5,
      name: "Library",
      children: [
        { id: 6, name: "System" },
        { id: 7, name: "Shared" },
        { id: 8, name: "Users" },
      ],
    },
    {
      id: 9,
      name: "Desktop",
      children: [
        { id: 10, name: "Documents" },
        { id: 11, name: "Downloads" },
        { id: 12, name: "Movies" },
      ],
    },
  ]);

  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (id) => {
    setExpandedItems((prevExpanded) => {
      if (prevExpanded.includes(id)) {
        return prevExpanded.filter((item) => item !== id);
      } else {
        return [...prevExpanded, id];
      }
    });
  };

  const renderListItems = (items, level = 0) => {
    return items.map((item) => {
      const isExpanded = expandedItems.includes(item.id);
      const indentation = "  ".repeat(level);

      return (
        <li key={item.id}>
          {indentation}
          {item.name}
          {item.children && (
            <button
              className="expand-button"
              onClick={() => toggleExpand(item.id)}
            >
              {isExpanded ? "-" : "+"}
            </button>
          )}
          {isExpanded && <ul>{renderListItems(item.children, level + 1)}</ul>}
        </li>
      );
    });
  };

  return <ul className="nested-list">{renderListItems(data)}</ul>;
}

export default NestedListComponent;
