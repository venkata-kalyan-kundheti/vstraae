import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: string;
  text: string;
}

const Button = ({ mode, text, ...props }: ButtonProps) => {
  return (
    <>
      {mode === "white" && (
        <button
          {...props}
          className="luxury-btn-outline text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          {text}
        </button>
      )}

      {mode === "brown" && (
        <button
          {...props}
          className="luxury-btn text-center text-xl font-semibold tracking-[0.8px] leading-[72px] w-full h-12 flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-0.5 max-md:text-base"
        >
          {text}
        </button>
      )}

      {mode === "transparent" && (
        <button
          {...props}
          className="luxury-btn-outline text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          {text}
        </button>
      )}

      {mode !== "white" && mode !== "brown" && mode !== "transparent" && (
        <p>No valid mode selected</p>
      )}
    </>
  );
};
export default Button;
