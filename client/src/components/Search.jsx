import React from "react";
import Options from "./Options.jsx";
import Results from "./Results.jsx";

const Search = (props) => {
  return (
    <div id="search">
        <Options setSearchTerm={props.setSearchTerm} />
        <Results movies={props.movies} searchTerm={props.searchTerm} />
    </div>
    )
}

export default Search;