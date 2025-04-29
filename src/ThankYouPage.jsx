import React from "react";

const ThankYouPage = () => {
  return (
    <div style={styles.container}>
      <h1>Спасибо за участие в опросе!</h1>
      <p>Ваши ответы успешно отправлены.</p>
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

export default ThankYouPage;