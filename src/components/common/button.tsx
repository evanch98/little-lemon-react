interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="flex items-center justify-center py-[16px] px-[32px] bg-[#F4CE14] text-[#333333] rounded-[16px]">
      {children}
    </button>
  );
};

export default Button;
