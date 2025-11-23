import fs from "fs";
import path from "path";
import Link from "next/link";

export function getStaticProps() {
  const postsDir = path.join(process.cwd(), "pages", "blog");
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((file) => file !== "index.js")
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, "utf-8");

      // Extrai o objeto meta usando regex
      const metaMatch = content.match(/export const meta = ({[\s\S]*?});/);

      let meta = {};
      if (metaMatch) {
        meta = eval("(" + metaMatch[1] + ")");
      }

      return {
        slug: file.replace(".js", ""),
        title: meta.title || "Artigo sem título",
        resumo: meta.resumo || "",
        data: meta.data || "2000-01-01"
      };
    })
    .sort((a, b) => new Date(b.data) - new Date(a.data));

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Blog – HC Projetos
      </h1>

      <p style={{ fontSize: "20px", color: "#444", marginBottom: "40px" }}>
        Artigos simples e diretos para ajudar você a entender, planejar e transformar seu ambiente.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {posts.map((post) => (
          <div key={post.slug} style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h2 style={{ margin: 0, fontSize: "24px" }}>{post.title}</h2>
            <p style={{ marginTop: "10px", fontSize: "16px" }}>{post.resumo}</p>
            <Link href={`/blog/${post.slug}`} style={{ marginTop: "10px", display: "inline-block", fontSize: "16px", color: "#FF780A" }}>
              Ler artigo →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
