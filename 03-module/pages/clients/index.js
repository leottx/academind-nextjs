import Link from "next/link";

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Leonardo Teixeira",
    },
    {
      id: 3,
      name: "Manuel",
    },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      {clients.map((client) => (
        <li key={client.id}>
          <Link href={`clients/${client.id}`}>{client.name}</Link>
        </li>
      ))}
    </div>
  );
}
