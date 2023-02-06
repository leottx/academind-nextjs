import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const { query } = useRouter();

  return (
    <div>
      <h1>{`The Projects of The Client: ${query.clientId}`}</h1>
    </div>
  );
}
