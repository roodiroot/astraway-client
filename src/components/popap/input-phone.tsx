import { Control, Path } from "react-hook-form";
import { IFormValues } from "./form";
import { cn } from "../../lib/utils";
import { z } from "zod";
import { Controller } from "react-hook-form";
import { formSchema } from "../../schema";
import InputPhoneMask from "../ui/input-phone-mask";

interface InputProps {
  title: string;
  label: Path<IFormValues>;
  control: Control<z.infer<typeof formSchema>>;
  error?: string | undefined;
  className?: string;
}

const InputPhone: React.FC<InputProps> = ({ label, title, error, control }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="font-medium text-fiolet text-sm tracking-tighter"
      >
        {title}
        <span className="text-rose-500">*</span>
      </label>
      <div className="w-full border-b border-lite/50">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <InputPhoneMask
              value={field.value}
              setValue={field.onChange}
              className={cn(
                "w-full h-full py-2 placeholder:text-lg placeholder:text-lite/50 border-b focus:outline-none",
                error ? "focus:border-b-rose-500" : "focus:border-b-fiolet",
                error && "text-rose-500"
              )}
            />
          )}
        />
      </div>
      <span className="text-sm text-rose-500">{error}</span>
    </div>
  );
};

export default InputPhone;
