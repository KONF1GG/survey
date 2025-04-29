import React from "react";

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <h1>Что-то пошло не так...</h1>
      <p>Пожалуйста, попробуйте снова позже или обратитесь в поддержку.</p>
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

export default ErrorPage;