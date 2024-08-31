import { TablerIcon } from "@tabler/icons-react";
import { twJoin, twMerge } from "tailwind-merge";

export type ButtonProps = {
  type?: "solid" | "text only";
  size?: "medium";
  onClick?: () => void;
  text: string;
  className?: string;
  iconTrailing?: TablerIcon;
};

export default function Button({
  type = "solid",
  size = "medium",
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex w-fit items-center justify-center rounded-xl outline-none transition-transform duration-150 active:scale-110",
        type === "solid" && "bg-brand",
        type === "text only" && "bg-inherit",
        size === "medium" && "gap-2.5 px-6 py-4",
        props.className,
      )}
      onClick={props.onClick}
    >
      <p
        className={twJoin(
          "font-sans font-semibold",
          type === "solid" && "text-white",
          type === "text only" && "text-brand",
          size === "medium" && "text-lg leading-[27px] tracking-[0.36px]",
        )}
      >
        {props.text}
      </p>
      {props.iconTrailing && (
        <props.iconTrailing
          className={twJoin(
            size === "medium" && "size-6",
            type === "solid" && "text-white",
            type === "text only" && "text-brand",
          )}
        />
      )}
    </button>
  );
}
