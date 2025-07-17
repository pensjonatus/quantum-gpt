"use client";
import { generateResponse } from "@/app/actions";
import Link from "next/link";
import { FormEvent, SyntheticEvent, useState } from "react";
import Button from "./Button";
import Messages, { MessageProps } from "./Messages";
import Logo from "./Logo";

export default function Chat() {
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      actor: "bot",
      body: [<p key="chat=up">What would you like to chat about?</p>],
    },
  ]);
  const [query, setQuery] = useState("");

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setQuery(event.currentTarget.value);
  }

  async function submitQuery(event: SyntheticEvent) {
    event.preventDefault();
    if (!query) {
      return;
    }

    const botResponse = await generateResponse();

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        actor: "you",
        body: [<p key={new Date().getMilliseconds()}>{query.toString()}</p>],
      },
      { actor: "bot", body: botResponse },
    ]);
    setQuery("");
  }

  return (
    <div className="w-full p-5 flex flex-col gap-4 items-center md:max-w-[800px]">
      <Logo />
      <Messages messages={messages} />
      <form onSubmit={submitQuery} className="flex gap-2 w-full">
        <input
          type="text"
          autoComplete="off"
          className="block flex-1 border-0 bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg"
          value={query}
          onChange={handleChange}
        />
        <Button type="submit" aria-label="Send">
          <svg
            className="h-8 w-8 text-fuchsia-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />{" "}
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </Button>
      </form>
      {messages.length > 1 && (
        <div className="relative w-full">
          <div className="absolute top-0 left-0">
            The answer does not seem correct? Don&apos;t worry! According to the
            many worlds interpretation, there is a universe where the bot
            generated the correct response.{" "}
            <Link href="/faq" className="link">
              Learn more in our FAQ
            </Link>
            .
          </div>
        </div>
      )}
    </div>
  );
}
