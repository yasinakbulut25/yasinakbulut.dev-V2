import React from "react";

function Title({ children }) {
  return (
    <h1 className="p-0 lg:text-4xl text-3xl font-bold leading-tight text-gray-900 dark:text-slate-300">
      {children}
    </h1>
  );
}

export default Title;
