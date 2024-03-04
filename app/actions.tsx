"use server";

import { Message } from "@/components/Messages";
import { paragraph } from "txtgen";

const templates = ["just-paragraphs", "bullets-in-the-middle"];

function getRandomInt(min = 1, max = 10) {
  return min + Math.floor(Math.random() * max);
}

function getParagraphs(count: number): Message["body"] {
  return Array.from(Array(count)).map((item, idx) => (
    <p key={idx}>{paragraph()}</p>
  ));
}

export async function generateResponse(): Promise<Message["body"]> {
  const template = templates[getRandomInt(0, 1)];

  const result = getParagraphs(getRandomInt(5, 15));
  return new Promise((resolve) => {
    resolve(result);
  });
}
