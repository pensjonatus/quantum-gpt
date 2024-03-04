import clsx from "clsx";

export default function Button({
  className,
  children,
  ...otherProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx("p-[3px] relative", className)} {...otherProps}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {children}
      </div>
    </button>
  );
}
