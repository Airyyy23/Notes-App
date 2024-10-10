const CustomButton = ({ content, type, className, onClick }) => {
  return (
    <button
    onClick={onClick}
      type={type}
      className={`${className} px-10 py-3 max-md:px-8 max-md:text-sm bg-zinc-800 hover:bg-zinc-700 transition duration-150 ease-in-out rounded-full font-medium text-white`}
    >
      {content}
    </button>
  );
};

export default CustomButton;
