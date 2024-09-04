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
        d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"
      />
    </svg>
  );
}
