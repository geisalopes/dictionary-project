import React, { useState } from "react";
import Error from "./Error";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [error, setError] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
    let imgApiKey = "bf12f0ob06f7acf048dt44a41aadd939";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
    axios.get(imgApiUrl).then(handleImageResponse);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleErrorResponse() {
    setError("Word not found. Try again.");
    setPhotos(null);
    setResults(null);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "bf12f0ob06f7acf048dt44a41aadd939";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse).catch(handleErrorResponse);
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
            placeholder="Search for a word"
            className="form-control search-input"
            onChange={handleKeywordChange}
          />
        </form>
      </section>
      <Error error={error} />
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
