"use client";

import { useState } from "react";
import Messages, { Message } from "./Messages";
import Button from "./Button";

function generateResponse() {
  return "Good question, bro!";
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { actor: "bot", text: "What would you like to chat about?" },
  ]);
  const queryFieldName = "query";

  function submitQuery(formData: FormData) {
    const userMessage = formData.get(queryFieldName);
    if (!userMessage) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { actor: "you", text: userMessage.toString() },
      { actor: "bot", text: generateResponse() },
    ]);
  }

  return (
    <div className="w-full p-5 flex flex-col gap-4">
      <div className="border border-fuchsia-500 p-3 md:p-6 h-[60vh] flex flex-col justify-end overflow-auto">
        <Messages messages={messages} />
      </div>
      <form action={submitQuery} className="flex gap-2">
        <input
          type="text"
          name={queryFieldName}
          autoComplete="off"
          className="block flex-1 border-0 bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
