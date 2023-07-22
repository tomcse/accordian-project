import { useState } from "react";
import questions from "./data";
import Questions from "./components/Questions";

const App = () => {
  const [questionData, setQuestionData] = useState(questions);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions
        questionData={questionData}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
