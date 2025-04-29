import React, { useState } from "react";
//import Survey1 from "./Survey1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Survey1 from "./Survey1";
import Survey from "./Survey";
import ThankYouPage from "./ThankYouPage";
import AlreadyAnsweredPage from "./AlreadyAnsweredPage";
//import SurveyEndedPage from "./SurveyEndedPage";
import ErrorPage from "./ErrorPage";
import SurveyEndedPage from "./SurveyEndedPage";

// Основной компонент приложения
const App = () => {
  return (
    <Router>
    <Routes>
      {/* Основной маршрут для опроса */}
      <Route path="/survey/:surveyId" element={<Survey />} />

      {/* Страница благодарности */}
      <Route path="/thank-you" element={<ThankYouPage />} />

      {/* Страница "Вы уже отвечали" */}
      <Route path="/already-answered" element={<AlreadyAnsweredPage />} />

      {/* Страница "Опрос завершен" */}
      <Route path="/survey-ended" element={<SurveyEndedPage />} />

      {/* Страница ошибок */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  );
};

export default App;