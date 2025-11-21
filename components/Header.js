import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Visualize Seu Móvel", href: "/visualize" },
    { name: "Projeto Técnico", href: "/tecnico" },
    { name: "Premium", href: "/premium" },
    { name: "Como Funciona", href: "/como-funciona" },
    { name: "Blog", href: "/blog" },
    { name: "Portfólio", href: "/portfolio" },
  ];

  return (
    <header style={{
      width: "100%",
      background: "#083344",
      color: "#fff",
      padding: "15px 20px",
      position: "sticky",
      top: 0,
      zIndex: 999
    }}>
      
      {/* DESKTOP */}
      <div className="desktop" style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Link href="/" style={{ fontSize: "20px", color: "#FF780A", textDecoration: "none", fontWeight: "bold" }}>
            HC Projetos
          </Link>

          <nav style={{ display: "flex", gap: "20px" }}>
            {links.map((item, i) => (
              <Link key={i} href={item.href} style={{ color: "#fff", textDecoration: "none" }}>
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/orcamento"
            style={{
              background: "#FF780A",
              padding: "10px 16px",
              borderRadius: "8px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Orçamento
          </Link>
        </div>
      </div>

      {/* MOBILE */}
      <div className="mobile">
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Link href="/" style={{ fontSize: "20px", color: "#FF780A", textDecoration: "none", fontWeight: "bold" }}>
            HC Projetos
          </Link>

          <button
            onClick={() => setOpen(!open)}
            style={{
              fontSize: "28px",
              background: "none",
              border: "none",
              color: "#fff"
            }}
          >
            ☰
          </button>
        </div>

        {open && (
          <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "15px" }}>
            {links.map((item, i) => (
              <Link key={i} href={item.href} onClick={() => setOpen(false)} style={{
                color: "#fff",
                fontSize: "18px",
                textDecoration: "none"
              }}>
                {item.name}
              </Link>
            ))}

            <Link href="/orcamento" style={{
              background: "#FF780A",
              padding: "10px",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
              textAlign: "center"
            }}>
              Orçamento
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}