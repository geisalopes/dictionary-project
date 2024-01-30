import React from "react";

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
