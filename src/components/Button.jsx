import React from 'react';

const Button = ({ type, text, onClick, disabled }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`}
  >
    {text}
  </button>
);

export default Button;
