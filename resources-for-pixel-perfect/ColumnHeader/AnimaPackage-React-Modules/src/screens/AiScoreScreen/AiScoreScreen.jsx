import React from "react";
import { AiScore } from "../../components/AiScore";
import * as classes from "./style.module.css";

export const AiScoreScreen = () => {
  return (
    <AiScore
      downArrow="/img/down-arrow-4.svg"
      downArrowClassName={classes["AI-score-instance"]}
      property1="default"
    />
  );
};
