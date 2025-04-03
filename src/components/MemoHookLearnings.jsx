import React, { useState, useMemo, useCallback } from "react";
import { findNthPrime } from "../utils/prime";

export default function MemoHookLearnings() {
  const [text, setText] = useState(5);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Memoize the function to prevent re-execution unless 'text' changes
  const prime = useMemo(() => findNthPrime(Number(text)), [text]);

  // useCallback ensures these functions are not recreated unnecessarily
  const changeInput = useCallback((event) => {
    setText(event.target.value);
    console.log("Input changed");
  }, []);

  const changeTheme = useCallback(() => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    console.log("Theme changed");
  }, []);

  return (
    <div className={isDarkTheme ? "bg-gray-900 text-white" : ""}>
      <div className="m-4 p-4 w-96 h-96 border border-black rounded-lg shadow-lg">
        <h1 className="text-lg font-bold mb-2">Memo Hook Learnings</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={changeTheme}
        >
          Theme
        </button>
        <label htmlFor="memo-input" className="block text-gray-700 mb-1">
          Enter text:
        </label>
        <input
          id="memo-input"
          value={text}
          type="number"
          onChange={changeInput}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <h3> Prime: {prime}</h3>
      </div>
    </div>
  );
}
