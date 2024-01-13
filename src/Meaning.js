import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>
          <strong>Definition: </strong>
          {props.meaning.definition}
          <br />
          <strong>Example: </strong>
          <em> {props.meaning.example}</em>
          <br />
          <strong>Synonyms: </strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </section>
    </div>
  );
}
