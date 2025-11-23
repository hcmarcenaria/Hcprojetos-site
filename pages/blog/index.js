import fs from "fs";
import path from "path";
import Link from "next/link";

// Carrega todos os posts da pasta /pages/blog
export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "pages", "blog");

  const files = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".js") && file !== "index.js");

  const posts = files.map((filename) => {
    const slug = filename.replace(".js", "");
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");

    // extrair meta
    const metaMatch = fileContent.match(/export const meta = ({[\s\S]*?});/);

    let meta = {
      title: "Sem título",
      resumo: "Sem resumo",
      data: "2000-01-01",
    };

    if (metaMatch) {
      try {
        meta = eval("(" + metaMatch[1] + ")");
      } catch (e) {}
    }

    return {
      slug,
      ...meta,
    };
  });

  // ordenar do mais novo para o mais antigo
  posts.sort((a, b) => new Date(b.data) - new Date(a.data));

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
          <div
            key={post.slug}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "24px" }}>{post.title}</h2>
            <p style={{ marginTop: "10px", fontSize: "16px" }}>{post.resumo}</p>

            <Link
              href={`/blog/${post.slug}`}
              style={{
                marginTop: "10px",
                display: "inline-block",
                fontSize: "16px",
                color: "#FF780A",
              }}
            >
              Ler artigo →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
