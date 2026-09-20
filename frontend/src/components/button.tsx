interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  onclick?: () => void;
}
const Button = ({ text, variant, onclick }: ButtonProps) => {
  return (
    <button
      className="!bg-[#341c2e] cursor-pointer py-2 px-4 m-2 rounded-xl !text-white"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
