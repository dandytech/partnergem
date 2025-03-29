import React from "react";

export default function InputBox({ placeholder, type, name }) {
  return (
    <div>
      <p>
        <input
          className="px-5 py-3 w-full bg-white rounded-lg uppercase placeholder:font-Marcellus-SC"
          placeholder={placeholder}
          type={type}
          name={name}
        />
      </p>
    </div>
  );
}
