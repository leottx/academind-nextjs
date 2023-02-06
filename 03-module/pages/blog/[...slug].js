import { useRouter } from "next/router";

export default function BlogPostsPage() {
  const { query } = useRouter();

  console.log(query);

  return (
    <div>
      <h1>Blog Posts</h1>
    </div>
  );
}
