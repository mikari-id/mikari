import { twMerge } from "tailwind-merge";

export type TextAreaProps = {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
};

export default function TextArea({
  required = false,
  ...props
}: TextAreaProps) {
  return (
    <div className={twMerge("flex flex-col gap-4", props.className)}>
      <label
        htmlFor={props.name}
        className="font-sans text-lg font-semibold leading-7 tracking-[0.36px] text-black"
      >
        {props.label}
        {required && <span className="text-red">*</span>}
      </label>
      <textarea
        id={props.name}
        name={props.name}
        required={required}
        className="h-40 w-full grow resize-none rounded-xl bg-white-grey px-4 py-2.5 font-sans text-lg leading-7 tracking-[0.36px] text-black placeholder-grey outline-none"
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
}
