import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa3 tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="input"
        placeholder="Robot Friends"
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchBox;