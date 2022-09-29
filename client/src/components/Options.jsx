import React from "react";

const Options = (props) => {
  return <form>
    <label>
      <input type="text" name="search-title" id="search-title" placeholder="what do you wish for?" onChange={e => props.setSearchTerm(e.target.value)} />
    </label>
    <input type="submit" value="✨ find some magic ✨" id="search-button" />
  </form>
}

export default Options;