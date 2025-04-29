import { useEffect, useState } from "react";
import styles from "./style";
import renderQuestion from "./RenderQuestion";
//import config from "../config/config"; // Импортируем конфигурацию
import { Navigate, useNavigate, useParams } from "react-router-dom"; // Для работы с параметрами URL
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import config from "../config/config";


const surveyData1 = {
    title: "Ожидайте...",
    description: "Опрос подгружается",
    questions: [
      {
       
      },
    ],
  };

function Survey  () {
  // Состояние для хранения ответов пользователя
  const { surveyId } = useParams(); // Получаем параметры из URL
  const [surveyData, setSurveyData] = useState(surveyData1); // Данные опроса
  const [responses, setResponses] = useState({}); // Ответы пользователя
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Ошибка загрузки
  const navigate = useNavigate();

    // Загрузка данных опроса через API
    useEffect(() => {
        const fetchSurveyData = async () => {
          try {
            const url = `${config.apiBaseUrl}/surveys?surveyId=${surveyId}`;
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error("Не удалось загрузить данные опроса");
            }
            const data = await response.json();

            // Проверяем статус опроса
            if (data.status === "ended") {
                navigate("/survey-ended");
                return;
            }

            // Проверяем, отвечал ли пользователь ранее
            if (data.alreadyAnswered) {
                navigate("/already-answered");
                return;
            }

            setSurveyData(data);
            setLoading(false);
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        };
    
        fetchSurveyData();
      }, [surveyId, navigate]);

  // Обработчик изменения ответов
  const handleAnswerChange = (questionId, answer) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: answer,
    }));
  };

  // Отправка ответов на сервер
  const handleSubmit = async () => {
    try {
      // Формируем JSON с ответами
      const surveyResponse = {
        surveyTitle: surveyData.title,
        surveyId: surveyId,
        responses: Object.keys(responses).map((questionId) => ({
          questionId: questionId,
          answer: responses[questionId],
        })),
      };

      console.log("Отправляемые данные:", surveyResponse);

      // Отправляем POST-запрос на сервер
      const url = `${config.apiBaseUrl}/survey`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(surveyResponse),
      });

      if (response.ok) {
        navigate("/thank-you");
      } else {
        setError("Ошибка при отправке данных.");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      alert("Не удалось отправить ответы. Проверьте подключение к интернету.");
    }
  };

  return (
    <div style={styles.container}>
      <h1>{surveyData.title}</h1>
      <p>{surveyData.description}</p>

      {/* Рендеринг вопросов */}
      {surveyData.questions.map((question) => (
        <div key={question.id} style={styles.questionContainer}>
          <h3>{question.question}</h3>
          {renderQuestion(question, responses, handleAnswerChange)}
        </div>
      ))}

      {/* Кнопка отправки */}
      <button onClick={handleSubmit} style={styles.submitButton}>
        Отправить ответы
      </button>
    </div>
  );
};

export default Survey