import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ElementTransfer from "./components/ElementTransfer/ElementTransfer";
import NestedListComponent from "./components/NestedList/NestedListComponent";
import InfiniteScrollComponent from "./components/InfiniteScroll/InfiniteScrollComponent";
import GameComponent from "./components/Game/Game";
import BoxSplit from "./components/Boxsplit/BoxSplit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/element-page" element={<ElementTransfer />} />
        <Route path="/nested-list" element={<NestedListComponent />} />
        <Route path="/infinite-scroll" element={<InfiniteScrollComponent />} />
        <Route path="/game-hit" element={<GameComponent />} />
        <Route path="/box-split" element={<BoxSplit />} />
      </Routes>
    </>
  );
}

export default App;
