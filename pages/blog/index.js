import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      slug: "como-medir-seu-ambiente",
      title: "Como medir seu ambiente para pedir planejado",
      resumo: "Aprenda a tirar medidas de forma simples, sem ferramentas profissionais.",
    },
    {
      slug: "cozinha-pequena",
      title: "5 ideias para aproveitar uma cozinha pequena",
      resumo: "Inspirações práticas que cabem em qualquer orçamento.",
    },
    {
      slug: "contratar-marceneiro",
      title: "Guia rápido: como escolher um bom marceneiro",
      resumo: "Veja o que analisar antes de fechar serviço.",
    },
  ];

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
