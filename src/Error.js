import React from "react";
import "./Error.css";

export default function Error(props) {
  if (props.error) {
    return (
      <div className="Error">
        <section>
          <h3>{props.error}</h3>
        </section>
      </div>
    );
  }
}
