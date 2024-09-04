import { twMerge } from "tailwind-merge";

export default function ({ className, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={twMerge("", className)}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"
      />
    </svg>
  );
}
