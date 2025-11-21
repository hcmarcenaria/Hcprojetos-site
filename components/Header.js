import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Visualize Seu Móvel", href: "/visualize" },
    { name: "Projeto Técnico", href: "/tecnico" },
    { name: "Premium", href: "/premium" },
    { name: "Como Funciona", href: "/como-funciona" },
    { name: "Blog", href: "/blog" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Orçamento", href: "/orcamento" },
  ];

  return (
    <header
      style={{
        backgroundColor: "#083344",
        padding: "15px 20px",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* DESKTOP */}
      <div
        className="desktop-menu"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>
          <Link href="/" style={{ color: "#FF780A", textDecoration: "none" }}>
            HC Projetos
          </Link>
        </h2>

        <nav
          className="desktop-nav"
          style={{ display: "flex", gap: "20px" }}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#ffffff",
                fontSize: "15px",
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Botão orçamento destaque */}
        <Link
          href="/orcamento"
          style={{
            padding: "10px 16px",
            backgroundColor: "#FF780A",
            borderRadius: "8px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Orçamento
        </Link>
      </div>

      {/* MOBILE */}
      <div className="mobile-menu" style={{ display: "none" }}>
        {/* TOP BAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>
            <Link href="/" style={{ color: "#FF780A", textDecoration: "none" }}>
              HC Projetos
            </Link>
          </h2>

          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </div>

        {/* MENU ABERTO */}
        {open && (
          <nav
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  fontSize: "18px",
                  padding: "10px 0",
                }}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}