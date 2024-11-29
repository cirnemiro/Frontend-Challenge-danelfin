/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

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
      className="inline-flex flex-col items-center h-[54px] relative"
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
      <div
        className={`border-gray-separator-line-table w-full flex self-stretch border-l items-center gap-1 pl-[5px] pr-1 py-1 h-12 [border-left-style:solid] justify-center relative ${["bottom-to-top-hover", "hover", "top-to-bottom-hover"].includes(state.property1) ? "bg-gray-hover-table" : "bg-gray-table"}`}
      >
        <div className="[font-family:'Roboto',Helvetica] w-[45px] mt-[-1.00px] tracking-[0] text-xs text-white h-10 font-normal text-center leading-[14px] relative">
          AI Score
        </div>

        <div className="w-3.5 bg-[100%_100%] h-3.5 bg-[url(/img/shape-5.svg)] relative" />
      </div>

      <img
        className={`w-3 h-1.5 ${["bottom-to-top-hover", "bottom-to-top"].includes(state.property1) ? "left-[30px]" : ""} ${state.property1 === "default" ? "mt-[-288.00px]" : (state.property1 === "hover") ? "mt-[-362.00px]" : ""} ${["bottom-to-top-hover", "bottom-to-top"].includes(state.property1) ? "top-[42px]" : ""} ${["bottom-to-top-hover", "bottom-to-top"].includes(state.property1) ? "absolute" : "relative"} ${downArrowClassName}`}
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
