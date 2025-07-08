import * as React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ ...props }, ref) => (
    <input
      ref={ref}
      className="border px-3 py-2 rounded outline-none"
      {...props}
    />
  )
);

Input.displayName = "Input";
