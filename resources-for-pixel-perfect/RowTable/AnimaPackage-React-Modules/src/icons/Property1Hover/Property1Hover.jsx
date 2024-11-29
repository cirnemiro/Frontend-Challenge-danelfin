import React from "react";

export const Property1Hover = ({ className }) => {
  return (
    <svg
      className={`property-1-hover ${className}`}
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="11" cy="11" fill="#0282CC" r="11" />

      <path
        className="path"
        d="M11.0001 16.2964V5.70379"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />

      <path
        className="path"
        d="M16.2963 11.0001H5.70374"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
};
