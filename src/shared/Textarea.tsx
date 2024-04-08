import React, { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

// eslint-disable-next-line react/display-name
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", children, ...args }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`block w-full text-sm rounded-2xl border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-blue-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${className}`}
        rows={4}
        {...args}
      >
        {children}
      </textarea>
    );
  }
);

export default Textarea;
