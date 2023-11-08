import { cn } from "../../lib/utils";

const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "outline";
  className?: string;
}> = ({ children, variant, className, onClick, disabled }) => {
  const buttonClass = cn(
    "px-8 py-[18px]  whitespace-nowrap rounded-lg font-medium h-[58px] min-w-[200px] max-w-[200px] relative  transition cursor-pointer",
    variant === "outline"
      ? "bg-white text-accent hover:bg-accent/20 border-2 border-accent"
      : "bg-accent text-white hover:bg-accent/80",
    className,
    disabled && "bg-accent/80"
  );
  const childElement = (
    <span className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
      {children}
    </span>
  );

  if (onClick) {
    return (
      <button disabled={disabled} onClick={onClick} className={buttonClass}>
        {childElement}
      </button>
    );
  }

  return (
    <a href='tel:888005553535' className={buttonClass}>
      {childElement}
    </a>
  );
};

export default Button;
