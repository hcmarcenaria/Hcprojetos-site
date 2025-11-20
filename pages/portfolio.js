export default function Portfolio() {
  const projetos = [
    {
      titulo: "Cozinha Planejada Clara",
      imagem: "https://placehold.co/600x400?text=Cozinha+Clara"
    },
    {
      titulo: "Quarto Aconchegante",
      imagem: "https://placehold.co/600x400?text=Quarto"
    },
    {
      titulo: "Sala Moderna",
      imagem: "https://placehold.co/600x400?text=Sala+Moderna"
    },
    {
      titulo: "Lavanderia Compacta",
      imagem: "https://placehold.co/600x400?text=Lavanderia"
    }
  ];

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Portfólio – Exemplos de Projetos
      </h1>

      <p style={{ fontSize: "20px", color: "#444", marginBottom: "40px" }}>
        Alguns exemplos de renders criados para clientes.  
        Use como referência de estilo e qualidade visual.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px"
        }}
      >
        {projetos.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#fff"
            }}
          >
            <img src={item.imagem} alt={item.titulo} style={{ width: "100%" }} />

            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "0 0 5px 0" }}>{item.titulo}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
