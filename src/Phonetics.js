import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <h6>{props.phonetic}</h6>
    </div>
  );
}
