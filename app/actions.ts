"use server";

export async function generateResponse(): Promise<string> {
  return new Promise((resolve) => {
    resolve("Whoa, I didn't see that one coming");
  });
}
