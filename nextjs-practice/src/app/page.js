import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      Hello from Home Page
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/services">Services</Link>
      </div>
    </div>
  );
}
