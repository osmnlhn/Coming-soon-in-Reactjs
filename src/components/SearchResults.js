import React, { useState, useEffect } from "react";

import axios from "axios";

function SearchResults() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://hn.algolia.com/api/v1/search?query=" + query)
        .then((res) => setData(res.data));
    };

    fetchData();
  }, [query]);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchResults