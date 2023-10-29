import React from "react";
import PropTypes from "prop-types";
import "./SearchInput.css";

function SearchInput({textChange}) {  
  const handleChange = (event) => {      
    textChange(event)
  };

  return (
    <div className="component-search-input">
      <div>
        <input onChange={handleChange} />
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  textChange: PropTypes.func,
};

export default SearchInput;