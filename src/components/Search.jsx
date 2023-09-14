import React, { useState } from "react";

const Search = ({ setQueryInput }) => {
  const handleSearch = (e) => {
    const query = e.target.value;
    setQueryInput(query); // Update the search query in the parent component
  };

  return (
    <>
      <div class="fixed top-0 left-0 w-full h-16   select-none">
        <div class="w-5/6 z-50 relative mx-auto ">
          <div class=" w-full h-16 rounded-xl mb-3 shadow-lg p-2">
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearch}
              class="w-full h-full text-2xl rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
