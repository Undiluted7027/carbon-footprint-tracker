import React, { useState } from "react";

const SliderInput = ({ min, max, onChange }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <span className="text-gray-600">{value}</span>{" "}
      {/* Display the current value of the slider */}
    </div>
  );
};

export default SliderInput;
