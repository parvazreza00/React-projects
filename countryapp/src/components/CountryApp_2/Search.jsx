import React, { useEffect, useState } from 'react'

const Search = (props) => {
  const [searchCountry, setSearchCountry] = useState("");

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  }

  useEffect(()=>{
    props.onSearchCountry(searchCountry)
  },[searchCountry]);

  return (
    <div className="m-auto w-25 mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search country..."
        value={searchCountry}
        onChange={handleSearchCountry}
      />
    </div>
  )
}

export default Search
