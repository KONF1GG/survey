import React from "react";

const AlreadyAnsweredPage = () => {
  return (
    <div style={styles.container}>
      <h1>Вы уже участвовали в этом опросе.</h1>
      <p>Спасибо за ваше участие!</p>
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

export default AlreadyAnsweredPage;