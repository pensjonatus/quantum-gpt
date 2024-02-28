import Image from "next/image";

export default function Logo() {
  const size = 200;
  return (
    <Image
      src="/logo.png"
      alt="Next.js Logo"
      width={size}
      height={size}
      priority
    />
  );
}
