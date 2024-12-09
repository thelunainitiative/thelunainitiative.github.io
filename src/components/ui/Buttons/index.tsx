interface Props {
  text: string;
  className?: string;
  size?: "sm" | "lg" | "m";
}

export const LunaButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
> = ({ text, className, size = "lg", ...props }) => {
  const sizes = {
    lg: "min-w-10 min-h-3",
    sm: "min-w-8 min-h-2",
    m: "min-w-8 min-h-full",
  };

  return (
    <button
      {...props}
      className={`${className} ${sizes[size]} disabled:cursor-auto`}
    >
      {text}
    </button>
  );
};
