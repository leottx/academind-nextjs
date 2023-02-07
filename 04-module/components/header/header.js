import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">NextEvents</Link>
      <Link href="/events">Browse All Events</Link>
    </header>
  );
}
