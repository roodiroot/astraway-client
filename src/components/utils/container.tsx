import { cn } from "../../lib/utils";

const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-8xl mx-auto", className)}>
      <div className='px-4'>{children}</div>
    </div>
  );
};

export default Container;
