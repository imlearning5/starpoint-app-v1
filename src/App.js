
import { useState } from "react";

const students = [
  { name: "Liam" }, { name: "Emma" }, { name: "Noah" }, { name: "Sophia" },
  { name: "Jisoo" }, { name: "Daniel" }, { name: "Olivia" }, { name: "Mason" },
  { name: "Aiden" }, { name: "Chloe" },
];

const tasks = [
  { label: "Homework", points: 5 },
  { label: "Participation", points: 2 },
  { label: "Focus", points: 1 },
];

export default function StarPointApp() {
  const [scores, setScores] = useState(() =>
    Object.fromEntries(students.map((s) => [s.name, 0]))
  );

  const addPoints = (name, points) => {
    setScores((prev) => ({ ...prev, [name]: prev[name] + points }));
  };

  return (
    <div className="app">
      <h1>StarPoint</h1>
      <div className="student-row">
        {students.map((student) => (
          <div className="card" key={student.name}>
            <h2>{student.name}</h2>
            <p>{scores[student.name]} ⭐</p>
            {tasks.map((task) => (
              <button
                key={task.label}
                onClick={() => addPoints(student.name, task.points)}
              >
                {task.label} +{task.points}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
