import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(JSON.stringify(response.data));
    setResults(response.data);
    // console.log(response.data.meanings[0].definition);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "bf12f0ob06f7acf048dt44a41aadd939";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search Dictionary"
            class="form-control search-input"
            onChange={handleKeywordChange}
          />
        </form>
      </section>

      <Results results={results} />
    </div>
  );
}
