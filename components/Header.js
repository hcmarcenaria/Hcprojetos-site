import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #ddd",
      padding: "15px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>

      <h2 style={{ margin: 0, fontSize: "20px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
          HC Projetos
        </Link>
      </h2>

      <nav style={{ display: "flex", gap: "20px" }}>

        <Link href="/visualize" style={{ textDecoration: "none", color: "#333" }}>Visualize Seu Móvel</Link>
        <Link href="/tecnico" style={{ textDecoration: "none", color: "#333" }}>Projeto Técnico</Link>
	<Link href="/premium" style={{ textDecoration: "none", color: "#333" }}>Premium</Link>
        <Link href="/como-funciona" style={{ textDecoration: "none", color: "#333" }}>Como Funciona</Link>
        <Link href="/blog" style={{ textDecoration: "none", color: "#333" }}>Blog</Link>
        <Link href="/orcamento" style={{ textDecoration: "none", color: "#333" }}>Orçamento</Link>
	<Link href="/portfolio" style={{ textDecoration: "none", color: "#333" }}>Portfólio</Link>
	<Link href="/sobre" style={{ textDecoration: "none", color: "#333" }}>Sobre</Link>
	<Link href="/contato" style={{ textDecoration: "none", color: "#333" }}>Contato</Link>

      </nav>

    </header>
  );
}
