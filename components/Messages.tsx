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
    <div className="flex flex-col gap-2">
      {messages.map(({ actor, text }, index) => (
        <div
          key={index}
          className={clsx(
            actor === "you" ? "bg-white text-black self-end" : "bg-blue-400 text-black",
            "p-3 rounded-lg w-fit"
          )}
        >
          <div className="text-sm text-right">{actor}</div>
          <div>{text}</div>
        </div>
      ))}
    </div>
  );
}
