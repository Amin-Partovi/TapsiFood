import React, { InputHTMLAttributes } from "react";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  onChange: (checked: boolean) => void;
}

const Checkbox = ({ label, checked, onChange, ...props }: CheckboxProps) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer select-none">
      <input
        type="checkbox"
        className="w-5 h-5 border-gray-300"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        {...props}
      />
      <span className="text-white">{label}</span>
    </label>
  );
};

export default Checkbox;
