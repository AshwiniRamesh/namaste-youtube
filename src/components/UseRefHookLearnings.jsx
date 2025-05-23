import React, { useState, useRef, useEffect } from "react";

export default function UseRefHookLearnings() {
  const x = useRef(10);
  const [y, setY] = useState(10);
  let i ;

  console.log("X on re-render:", x.current);
  console.log("Y on re-render:", y);
  useEffect(() => {
     i = setInterval(() => {
      console.log("Random value ", Math.random());
    }, 1000);
  }, []);
  console.log('test')

  return (
    <>
      <h1 className="p-2 m-2">UseRef Hook Learnings</h1>
      <div className="p-2 m-4 w-96 h-96 border border-black">
        {/* X (useRef) */}
        <div className="flex items-center space-x-4 p-4">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300"
            onClick={() => {
              x.current += 1; // Update the ref correctly
              console.log("X button clicked:", x.current);
            }}
          >
            Increase X
          </button>
          <h1 className="text-xl font-bold">Ref: {x.current}</h1>
        </div>

        {/* Y (useState) */}
        <div className="flex items-center space-x-4 p-4">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300"
            onClick={() => {
              setY(y + 1);
              console.log("Y button clicked:", y + 1);
            }}
          >
            Increase Y
          </button>
          <h1 className="text-xl font-bold">State: {y}</h1>
        </div>
        <div className="flex items-center space-x-4 p-4">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300"
            onClick={() => {
              clearInterval(i)
            }}
          >
            Clear Interval
          </button>
        </div>
      </div>
    </>
  );
}
