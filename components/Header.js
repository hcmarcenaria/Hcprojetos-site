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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: "bold", color: "#FF780A", textDecoration: "none" }}>
          HC Projetos
        </Link>

        <nav style={{ display: "flex", gap: "20px" }}>
          {links.map((item, i) => (
            <Link key={i} href={item.href} style={{ color: "#fff", textDecoration: "none", fontSize: "16px" }}>
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/orcamento"
          style={{
            background: "#FF780A",
            padding: "10px 18px",
            borderRadius: "8px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Orçamento
        </Link>
      </div>

      {/* MOBILE */}
      <div className="mobile" style={{ display: "none" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Link href="/" style={{ fontSize: "20px", fontWeight: "bold", color: "#FF780A", textDecoration: "none" }}>
            HC Projetos
          </Link>

          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "28px",
              cursor: "pointer"
            }}
          >
            ☰
          </button>
        </div>

        {open && (
          <nav
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}
          >
            {links.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/orcamento"
              onClick={() => setOpen(false)}
              style={{
                background: "#FF780A",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "8px",
                textAlign: "center",
                color: "#fff",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "bold"
              }}
            >
              Orçamento
            </Link>
          </nav>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop { display: none; }
          .mobile { display: block; }
        }
        @media (min-width: 769px) {
          .desktop { display: flex; }
          .mobile { display: none; }
        }
      `}</style>
    </header>
  );
}