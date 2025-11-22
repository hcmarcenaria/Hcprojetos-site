import Link from "next/link";

// Função para importar automaticamente todos os posts da pasta
function importPosts() {
  const context = require.context(".", false, /\.js$/);

  const posts = context
    .keys()
    .filter((key) => key !== "./index.js") // remove o próprio index
    .map((key) => {
      const post = context(key);
      const slug = key.replace("./", "").replace(".js", "");

      return {
        slug,
        title: post.meta?.title || "Artigo sem título",
        resumo: post.meta?.resumo || "Clique para ler o artigo.",
        data: post.meta?.data || "2000-01-01",
      };
    });

  // Ordenar do mais novo para o mais antigo
  posts.sort((a, b) => new Date(b.data) - new Date(a.data));

  return posts;
}

export default function Blog() {
  const posts = importPosts();

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