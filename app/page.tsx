import ButtonLink from "@/components/ButtonLink";
import Logo from "@/components/Logo";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <>
      <div className="center flex flex-col items-center">
        <Logo />
        <Title>QuantumGPT</Title>
      </div>
      <p className="text-xl text-center">
        You got the correct answer in some universe
      </p>
      <div className="flex justify-between flex-wrap gap-2">
        <ButtonLink href="/chat">Chat</ButtonLink>
        <ButtonLink href="/faq">FAQ</ButtonLink>
      </div>
    </>
  );
}
