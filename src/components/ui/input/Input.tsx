import React from "react";

const Input: React.FC = () => {
  return (
    <div>
      <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">
        Input Name
      </label>
      <div className="mt-2">
        <input
          type="text"
          name="inputname"
          id="inputname"
          className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
        />
      </div>
      <label className="pt-1 block text-gray-500 text-sm">Some Description</label>
    </div>
  );
};

export default Input;
