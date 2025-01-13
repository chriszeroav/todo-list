import { SVGProps } from "react";

export function AnalyticIcon(props: SVGProps<SVGSVGElement>) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M3 3v18h18"></path>
        <rect width="12" height="4" x="7" y="5" rx="1"></rect>
        <rect width="7" height="4" x="7" y="13" rx="1"></rect>
      </g>
    </svg>
  );
}
