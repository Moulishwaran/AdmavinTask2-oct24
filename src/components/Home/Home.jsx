import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(true);
    navigate("/element-page");
  };
  const NestedHandleClick = () => {
    setClicked(true);
    navigate("/nested-list");
  };

  const InfiniteHandleClick = () => {
    setClicked(true);
    navigate("/infinite-scroll");
  };

  const GameHandleClick = () => {
    setClicked(true);
    navigate("/game-hit");
  };
  const BoxHandleClick = () => {
    setClicked(true);
    navigate("/box-split");
  };

  return (
    <div className="home">
      <button className="element" onClick={handleClick}>
        ElementTransfer
      </button>
      <button className="nested" onClick={NestedHandleClick}>
        NestedList
      </button>

      <button className="infinite" onClick={InfiniteHandleClick}>
        InfiniteScroll
      </button>
      <button className="infinite" onClick={GameHandleClick}>
        Game Hit
      </button>
      <button className="infinite" onClick={BoxHandleClick}>
        Box Split
      </button>
    </div>
  );
};

export default Home;
