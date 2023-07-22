import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questionData, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <div className="title">
        <h1>Questions</h1>
      </div>
      <div>
        {questionData.map((question) => {
          return (
            <SingleQuestion
              key={question.id}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
              {...question}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Questions;
