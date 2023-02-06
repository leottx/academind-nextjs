import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
  const { query } = useRouter();

  return (
    <div>
      <h1>{`The Project Page for a Specific Project for a Selected Client: ${query.clientProjectsId}`}</h1>
    </div>
  );
}
