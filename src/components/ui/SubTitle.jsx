import React from "react";

function SubTitle({ children }) {
  return (
    <h2 className="p-0 lg:text-2xl text-xl font-bold leading-tight text-gray-900 dark:text-slate-300">
      {children}
    </h2>
  );
}

export default SubTitle;
