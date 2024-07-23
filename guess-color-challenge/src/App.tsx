import { useState, useEffect } from "react";

const getRandomColor = () => {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const color = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");
  return `#${color}`;
};

function shuffle(array: string[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

enum Result {
  Correct,
  Wrong,
}

const App = () => {
  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result | null>(null);

  const pickColors = () => {
    const correctColor = getRandomColor();
    setColor(correctColor);
    const newAnswers = [correctColor];

    while (newAnswers.length < 3) {
      let randomColor = getRandomColor();
      while (newAnswers.includes(randomColor)) {
        randomColor = getRandomColor();
      }
      newAnswers.push(randomColor);
    }

    shuffle(newAnswers);
    setAnswers(newAnswers);
  };

  const handleClick = (answer: string) => {
    if (answer === color) {
      setResult(Result.Correct);
      pickColors();
    } else {
      setResult(Result.Wrong);
    }
  };

  useEffect(() => {
    pickColors();
  }, []);

  return (
    <main>
      <section>
        <div
          className="color-display"
          style={{
            backgroundColor: color,
          }}
        ></div>
        <div className="option-btn-wrapper">
          {answers.map((answer) => (
            <button
              className="option-btn"
              key={answer}
              onClick={() => handleClick(answer)}
            >
              {answer}
            </button>
          ))}
        </div>
        <p
          className="message"
          style={{ color: result === Result.Correct ? "green" : "red" }}
        >
          {result !== null &&
            (result === Result.Correct ? "Correct!" : "Wrong Answer")}
        </p>
      </section>
    </main>
  );
};

export default App;
