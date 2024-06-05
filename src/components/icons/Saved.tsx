import { SVGProps } from "react";

export default function TablerBookmarks(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M15 10v11l-5-3l-5 3V10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3"></path>
        <path d="M11 3h5a3 3 0 0 1 3 3v11"></path>
      </g>
    </svg>
  );
}
