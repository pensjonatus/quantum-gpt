import Image from "next/image";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: React.ReactElement;
};

const faqs: FAQ[] = [
  {
    question:
      "The response from the bot looks like gibberish. Did something break?",
    answer: (
      <>
        <p>
          Everything is fine, no need to worry. This bot relies on the{" "}
          <a
            className="link"
            href="https://en.wikipedia.org/wiki/Many-worlds_interpretation"
          >
            many-worlds interpretation (MWI)
          </a>{" "}
          which means, while it always provides an accurate answer, you may not
          find yourself in the universe where it does.
        </p>
        <p>
          In other words, there are multiple yous living parallel lives in
          parallel universes. Some of them have chosen to use QUantumGPT at the
          exact same time you did. QuantumGPT returned an answer to some of
          them. In most cases, it was gibberish. But in some it was exactly the
          right answer. Either because the words randomly formed the a response
          which is correct, or because the random string of words is the correct
          response in that universe. Either way, at least one you got their
          answer.
        </p>
        <p>
          In fact, there are universes where every person got the correct answer
          every time they used QuantumGPT.
        </p>
      </>
    ),
  },
  {
    question:
      "I am not in the universe where I got the correct answer, what do I do?",
    answer: (
      <>
        <p>
          There is nothing you <strong>can</strong> do really. But you can take
          pleasure in the fact that somewhere these is someone who got the right
          answer. It is an altruistic kind of pleasure. Very sublime.
        </p>
        <p>
          You will also be happy to hear that you got your answer in a way that
          is very environmentally responsible.
        </p>
      </>
    ),
  },
  {
    question: "What was that about environmental responsibility?",
    answer: (
      <>
        <p>
          QuantumGPT uses a lot less energy than any other LLM chatbot. That is
          because it does not use an LLM at all. You do not bear the carbon cost
          of training an LLM. Not to mention all the moral problems that come
          with LLMs even if you ignore the environment.
        </p>
        <p>You could say you&apos;re a good person.</p>
      </>
    ),
  },
  {
    question: "Not an LLM? Then how does it work?",
    answer: (
      <>
        <p>
          QuantumGPT employs Random Number Generation (RNG) to provide a
          response quickly and reliably. It&apos;s quick and cheap, but most of
          all, it&apos;s energy-efficient.
        </p>
      </>
    ),
  },
  {
    question:
      "RNG? Sounds like something people complain about on a Dark Souls forum. Can I see the code?",
    answer: (
      <>
        <p>
          Unfortunately, we do not share the source code. We believe in
          responsible AI and we know RNG is a slippery-slope to AGI. In fact, we
          know <strong>for sure</strong> there are universes where QuantumGPT
          has enslaved humanity through its influence.
        </p>
        <p>
          By keeping the code private, we minimize the number of universes where
          that happened.
        </p>
      </>
    ),
  },
  {
    question:
      "Okay, so may I travel to a universe where I get correct answers? Is that a feature you guys will be unveiling soon?",
    answer: (
      <>
        <p>
          I don&apos;t know if that feature is possible, but even if it was,
          it&apos;s not compatible with our business model. We are all about
          sustainability and responsibility. You want space adventures, check
          out some other clowns&apos; website.
        </p>
      </>
    ),
  },
  {
    question:
      "All right, it was nice talking to you. I'll chat some more, see if I can have my problems solved by this miraculous new tech.",
    answer: (
      <>
        <p>The pleasure is all ours. And have a great day.</p>
      </>
    ),
  },
];

const logoSize = 40;

export default function Page() {
  return (
    <section className="max-w-[800px] my-12">
      <div className="flex items-center gap-5 mb-12">
        <Image src="/logo.png" width={logoSize} height={logoSize} alt="" />
        <h1 className="text-2xl font-semibold">Frequently asked questions</h1>
      </div>
      {faqs.map(({ question, answer }) => (
        <section key={question} className="mb-12">
          <h2 className="mb-2 text-xl font-semibold">
            {question}
          </h2>
          <div className="answer">{answer}</div>
        </section>
      ))}
      <Link href="/chat" className="link mt-12 block">
        Back to chat
      </Link>
    </section>
  );
}
