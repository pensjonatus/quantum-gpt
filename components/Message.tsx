"use client";
import clsx from "clsx";
import { Message } from "./Messages";
import { useEffect, useRef } from "react";

export default function Message({ actor, body }: Message) {
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageRef && messageRef.current && actor === "you") {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messageRef, actor]);
  return (
    <div
      ref={messageRef}
      className={clsx(
        actor === "you"
          ? "bg-white text-black self-end"
          : "bg-blue-400 text-black",
        "p-3 rounded-lg w-fit"
      )}
    >
      <div className="text-sm text-right">{actor}</div>
      <div>{body}</div>
    </div>
  );
}
