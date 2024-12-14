import { InputHTMLAttributes } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (value: string) => void;
}

const Input = ({ onChange, ...props }: InputProps) => {
  return (
    <input
      type="text"
      className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-main-500 focus:border-main-500"
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  );
};

export default Input;
