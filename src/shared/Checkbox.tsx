"use client";

import React, { FC } from "react";



export interface CheckboxProps {
  label?: string;
  subLabel?: string;
  className?: string;
  name: string;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  slug?: string,
  // filters: FiltersType
}

const Checkbox: FC<CheckboxProps> = ({
  subLabel = "",
  label = "",
  name,
  className = "",
  defaultChecked,
  onChange = () => { },
  slug = "",
  // filters
}) => {


  return (
    <div className={`flex text-sm sm:text-base ${className}`}>
      <input
        id={name}
        name={name}
        type="checkbox"
        className="focus:ring-action-blue h-6 w-6 text-blue-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-blue-500 focus:ring-blue-500"
        defaultChecked={defaultChecked}
        value={slug}
        onChange={onChange}
      />
      {label && (
        <label
          htmlFor={name}
          className="ml-3.5 flex flex-col flex-1 justify-center"
        >
          <span className=" text-neutral-900 dark:text-neutral-100">
            {label}
          </span>
          {subLabel && (
            <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm font-light">
              {subLabel}
            </p>
          )}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
