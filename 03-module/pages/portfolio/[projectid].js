import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const { query } = useRouter();

  return (
    <div>
      <h1>{`The Portfolio Project Page: ${query.projectid}`}</h1>
    </div>
  );
}
