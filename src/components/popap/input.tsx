import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "./form";
import { cn } from "../../lib/utils";

interface InputProps {
  placeholder: string;
  title: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
  error?: FieldError | undefined;
  type?: "email" | "tel";
  className?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  title,
  register,
  required,
  error,
  type,
}) => {
  let pattern = undefined;
  if (type === "email") {
    pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)/i;
  }
  if (type === "tel") {
    pattern = /^((\+7|7|8|9)+([0-9]){10})$/;
  }

  return (
    <div>
      <label
        htmlFor={label}
        className='font-medium text-fiolet text-sm tracking-tighter'
      >
        {title}
        {required && <span>*</span>}
      </label>
      <div className='w-full border-b border-lite/50'>
        <input
          id={label}
          {...register(label, { required, pattern })}
          placeholder={placeholder}
          className={cn(
            "w-full h-full py-2 placeholder:text-lg placeholder:text-lite/50 border-b focus:outline-none",
            error ? "focus:border-b-rose-500" : "focus:border-b-fiolet"
          )}
          type='text'
        />
      </div>
    </div>
  );
};

export default Input;
