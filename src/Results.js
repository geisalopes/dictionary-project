import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (!props.results) {
    return null; // Avoid trying to access 'map' on something that is 'undefined' or 'null'
  }

  return (
    <div className="Results">
      <section>
        <h2>{props.results.word}</h2>
        <Phonetics phonetic={props.results.phonetic} />
      </section>
      {props.results.meanings &&
        props.results.meanings.map((meaning, index) => (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        ))}
    </div>
  );
}
