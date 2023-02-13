// Utils
import path from "path";
import fs from "fs/promises";

function HomePage({ products }) {
  const { products: productsList } = products;
  return (
    <ul>
      {productsList.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data,
    },
  };
}

export default HomePage;
