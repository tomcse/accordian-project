import React, { useState } from "react";

const SingleQuestion = ({ id, info, title, activeId, toggleQuestion }) => {
  const isActive = id === activeId;

  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="btn question-btn"
          onClick={() => {
            toggleQuestion(id);
          }}
        >
          {isActive ? "-" : "+"}
        </button>
      </header>
      <p>{isActive ? info : ""}</p>
    </div>
  );
};

export default SingleQuestion;
