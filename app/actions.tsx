"use server";

import { Message } from "@/components/Messages";
import { words } from "@/utils/words";

const templates = ["just-paragraphs", "bullets-in-the-middle"];

function getRandomInt(min = 1, max = 10) {
  return min + Math.floor(Math.random() * max);
}

function getWord(): string {
  const wordIndex = getRandomInt(0, words.length - 1);
  return words[wordIndex];
}

function getNumberOfThings(
  minThings: number,
  maxThings: number,
  generatorFunction: () => string
): string[] {
  const howManyThings = getRandomInt(minThings, maxThings);
  const things: string[] = [];
  for (let i = 0; i < howManyThings; i++) {
    things.push(generatorFunction());
  }
  return things;
}

function getSentence(): string {
  const sentence = getNumberOfThings(1, 50, getWord).join(" ") + ".";
  const capitalized =
    sentence.slice(0, 1).toLocaleUpperCase() + sentence.slice(1);

  return capitalized;
}

function getParagraph(): string {
  return getNumberOfThings(1, 10, getSentence).join(" ");
}

function getParagraphs(): Message["body"] {
  const paragraphs = getNumberOfThings(2, 10, getParagraph);
  return paragraphs.map((paragraph, idx) => (
    <p key={idx} className="mb-6">
      {paragraph}
    </p>
  ));
}

export async function generateResponse(): Promise<Message["body"]> {
  const template = templates[getRandomInt(0, 1)];

  const result = getParagraphs();
  return new Promise((resolve) => {
    resolve(result);
  });
}
