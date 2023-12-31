import { cn } from "../../lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        className={cn(
          "w-full max-w-[1440px] flex flex-col md:px-[120px] px-[16px]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
