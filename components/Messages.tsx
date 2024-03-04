import clsx from "clsx";

export type Message = {
  actor: "you" | "bot";
  text: string;
};

type MessagesProps = {
  messages: Message[];
};

export default function Messages({ messages }: MessagesProps) {
  return (
    <div className="border border-fuchsia-500 p-3 md:p-6 h-[60vh] overflow-y-auto w-full rounded-lg">
      <div className="flex flex-col justify-end scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 lg:supports-scrollbars:pr-2">
        {messages.map(({ actor, text }, index) => (
          <div
            key={index}
            className={clsx(
              actor === "you"
                ? "bg-white text-black self-end"
                : "bg-blue-400 text-black",
              "p-3 rounded-lg w-fit"
            )}
          >
            <div className="text-sm text-right">{actor}</div>
            <div>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
