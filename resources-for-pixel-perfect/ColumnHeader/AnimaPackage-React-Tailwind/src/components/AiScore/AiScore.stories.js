import { AiScore } from ".";

export default {
  title: "Components/AiScore",
  component: AiScore,
  argTypes: {
    property1: {
      options: [
        "top-to-bottom",
        "bottom-to-top",
        "top-to-bottom-hover",
        "default",
        "bottom-to-top-hover",
        "hover",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "top-to-bottom",
    downArrowClassName: {},
    downArrow: "/img/down-arrow.svg",
  },
};
