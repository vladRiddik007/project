import React from "react";
import './search-panel.css'

const SearchPanel = () => {
  const searchStyle = {
    fontSize: "30px"
  };
  return <input style={searchStyle}
  placeholder="Search"
  className="search-input"
  />;
};

export default SearchPanel;
