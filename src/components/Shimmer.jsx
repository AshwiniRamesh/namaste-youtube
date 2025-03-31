import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 mt-6"> {/* Added mt-8 for top margin */}
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="bg-gray-200 animate-pulse rounded-lg p-4">
            <div className="w-full h-40 bg-gray-300 rounded-md"></div>
            <div className="mt-2 h-4 w-3/4 bg-gray-300 rounded"></div>
            <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
