import { HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = {
  label: string;
  name: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (newValue: string) => void;
};

export default function Input({
  required = false,
  type = "text",
  ...props
}: InputProps) {
  return (
    <div className={twMerge("flex flex-col gap-4", props.className)}>
      <label
        htmlFor={props.name}
        className="font-sans text-lg font-semibold leading-7 tracking-[0.36px] text-black"
      >
        {props.label}
        {required && <span className="text-red">*</span>}
      </label>
      <input
        id={props.name}
        name={props.name}
        required={required}
        type={type}
        className="h-16 w-full rounded-xl bg-white-grey px-4 py-2.5 font-sans text-lg leading-7 tracking-[0.36px] text-black placeholder-grey outline-none"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
    </div>
  );
}
