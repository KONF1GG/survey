import React from "react";

const SurveyEndedPage = () => {
  return (
    <div style={styles.container}>
      <h1>Извините, но этот опрос уже завершен.</h1>
      <p>Спасибо за интерес к нашему сервису.</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
};

export default SurveyEndedPage;