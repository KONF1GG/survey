import React from "react";
import { useParams } from "react-router-dom";

const Survey1 = () => {
  const { surveyId } = useParams();

  return (
    <div>
      <h1>Survey Page</h1>
      <p>Survey ID: {surveyId}</p>
    </div>
  );
};

export default Survey1;