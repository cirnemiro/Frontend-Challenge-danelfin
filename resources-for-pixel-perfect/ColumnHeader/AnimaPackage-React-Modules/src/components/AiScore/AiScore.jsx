import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import * as classes from "./style.module.css";

export const AiScore = ({
  property1,
  downArrowClassName,
  downArrow = "/img/down-arrow.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={classes["AI-score"]}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`${classes.div} ${state.property1}`}>
        <div className={classes["text-wrapper"]}>AI Score</div>

        <div className={classes["info-ico"]} />
      </div>

      <img
        className={`${classes["down-arrow"]} ${classes[`property-1-${state.property1}`]} ${downArrowClassName}`}
        alt="Down arrow"
        src={
          state.property1 === "default"
            ? downArrow
            : state.property1 === "hover"
              ? "/img/down-arrow-2.svg"
              : state.property1 === "top-to-bottom"
                ? "/img/image.svg"
                : state.property1 === "top-to-bottom-hover"
                  ? "/img/down-arrow-1.svg"
                  : "/img/down-arrow-3.svg"
        }
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hover",
        };
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "click":
        return {
          property1: "top-to-bottom",
        };
    }
  }

  if (state.property1 === "top-to-bottom") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "top-to-bottom-hover",
        };
    }
  }

  if (state.property1 === "top-to-bottom-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "top-to-bottom",
        };

      case "click":
        return {
          property1: "bottom-to-top",
        };
    }
  }

  if (state.property1 === "bottom-to-top") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "bottom-to-top-hover",
        };
    }
  }

  if (state.property1 === "bottom-to-top-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "bottom-to-top",
        };

      case "click":
        return {
          property1: "top-to-bottom",
        };
    }
  }

  return state;
}

AiScore.propTypes = {
  property1: PropTypes.oneOf([
    "top-to-bottom",
    "bottom-to-top",
    "top-to-bottom-hover",
    "default",
    "bottom-to-top-hover",
    "hover",
  ]),
  downArrow: PropTypes.string,
};
