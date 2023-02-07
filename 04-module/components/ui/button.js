import Link from "next/link";

export default function Button({ link, children }) {
  return <Link href={link}>{children}</Link>;
}
