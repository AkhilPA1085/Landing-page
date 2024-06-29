"use client"
import React from "react";

const CustomInput = ({ id, label, options, textarea, ...rest }) => {

  if (textarea) {
    return (
      <div className="relative">
        <textarea
          id={id}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...rest}
          rows={5}
          placeholder={label}
        />
        <label
          htmlFor={id}
          className="text-xs -top-2 text-gray-400 absolute left-4 -top-3 text-gray-600 bg-white px-1"
        >
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        id={id}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        {...rest}
        placeholder={label}
      />
      <label
          htmlFor={id}
          className="text-xs -top-2 text-gray-400 absolute left-4 -top-3 text-gray-600 bg-white px-1"
        >
          {label}
        </label>
    </div>
  );
};

export { CustomInput };
