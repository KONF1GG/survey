import styles from "./style";

// Функция для рендеринга вопросов в зависимости от типа
export default function renderQuestion (question, responses, onChange) {
    const selectedAnswer = responses[question.id];
  
    switch (question.type) {
      case "single_choice":
        return (
          <div>
            {question.answers.map((answer) => (
              <label key={answer} style={styles.option}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={() => onChange(question.id, answer)}
                />
                {answer}
              </label>
            ))}
          </div>
        );
  
      case "multiple_choice":
        return (
          <div>
            {question.answers.map((answer) => (
              <label key={answer} style={styles.option}>
                <input
                  type="checkbox"
                  value={answer}
                  checked={(selectedAnswer || []).includes(answer)}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const updatedAnswers = isChecked
                      ? [...(selectedAnswer || []), answer]
                      : (selectedAnswer || []).filter((item) => item !== answer);
                    onChange(question.id, updatedAnswers);
                  }}
                />
                {answer}
              </label>
            ))}
          </div>
        );
  
      case "short_text":
        return (
          <input
            type="text"
            value={selectedAnswer || ""}
            onChange={(e) => onChange(question.id, e.target.value)}
            style={styles.textInput}
          />
        );
  
      case "rating":
        return (
          <div>
            {question.answers.map((answer) => (
              <label key={answer} style={styles.option}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={() => onChange(question.id, answer)}
                />
                {answer}
              </label>
            ))}
          </div>
        );
  
      default:
        return null;
    }
  };