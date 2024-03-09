"use server";

import { Message } from "@/components/Messages";
import { words } from "@/utils/words";

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
  const words = getNumberOfThings(1, 25, getWord);
  const sentence = words.join(" ") + ".";
  const capitalized =
    sentence.slice(0, 1).toLocaleUpperCase() + sentence.slice(1);

  return capitalized;
}

function getParagraph(): string {
  return getNumberOfThings(1, 5, getSentence).join(" ");
}

function getParagraphs(max: number): Message["body"] {
  const paragraphs = getNumberOfThings(2, max, getParagraph);
  return paragraphs.map((paragraph, idx) => (
    <p key={idx} className="mb-6">
      {paragraph}
    </p>
  ));
}

export async function generateResponse(): Promise<Message["body"]> {
  const result = getParagraphs(5);
  return new Promise((resolve) => {
    resolve(result);
  });
}
