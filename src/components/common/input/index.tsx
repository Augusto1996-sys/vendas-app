import React, { HtmlHTMLAttributes } from "react";

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  onChange?: (value: any) => void;
  label: string;
  columnsClasses?: string;
  value: string;
  id: string;
  type?: string;
}
export const Input: React.FC<InputProps> = ({
  onChange,
  label,
  columnsClasses,
  value,
  id,
  type,
  ...otherprops
}: InputProps) => {
  return (
    <div className={`field column ${columnsClasses}`}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <div className="control">
        <input
          onChange={(event) => {
            if (onChange) {
              onChange(event.target.value);
            }
          }}
          value={value}
          id={id}
          type={type}
          className="input"
          {...otherprops}
        />
      </div>
    </div>
  );
};
