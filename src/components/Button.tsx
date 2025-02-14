interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  theme?: "filled" | "bordered" | "outlined";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({ children, theme = "filled", size = "md" }) => {
  const themeClasses = {
    filled: "bg-green-500 text-white hover:bg-green-400",
    bordered: "border border-green-600 text-green-600 hover:border-green-500 hover:text-green-500",
    outlined: "text-green-500 hover-text-green-600 px-0 py-0",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-2",
    md: "text-md px-4 py-2",
    lg: "text-lg px-6 py-3",
  };
  return <button className={`cursor-pointer rounded-lg transition-colors duration-200 ease-in-out  ${themeClasses[theme]} ${sizeClasses[size]}`}>{children}</button>;
};

export default Button;
