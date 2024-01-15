import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>
          <strong>Definition: </strong>
          {props.meaning.definition}
          {props.meaning.example && (
            <div>
              <strong>Example: </strong>
              <em> {props.meaning.example}</em>
            </div>
          )}
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </section>
    </div>
  );
}
