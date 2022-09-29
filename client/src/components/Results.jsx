import React from "react";

const Results = (props) => {
    console.log(typeof props.movies)
    console.log(props.movies[0])
    // convert the object (which has 0:data, 1:data, 2:data as k:v pairs) to an array that can be mapped
    var tableRows = Object.values(props.movies);

    var components = tableRows.filter(item => (item.title.toLowerCase().includes(props.searchTerm.toLowerCase()) || item.year.toString().includes(props.searchTerm) || item.adjectives.toLowerCase().includes(props.searchTerm.toLowerCase()))).map(row => {
        return <tr>
        <td>{row.title}</td>
        <td>{row.year}</td>
        <td>{row.adjectives}</td>
    </tr>
    })

return <table>
    <thead>
        <tr>
        <td>title</td>
        <td>year</td>
        <td>keywords</td>
        </tr>
    </thead>
    <tbody>
        {components}
    </tbody>
  </table>
}

export default Results;