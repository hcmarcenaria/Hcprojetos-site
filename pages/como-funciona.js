export default function ComoFunciona() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>

      {/* TÍTULO */}
      <section style={{ marginTop: "20px", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "15px", fontWeight: "bold" }}>
          Como Funciona a HC Projetos
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "32px", color: "#444" }}>
          Trabalhamos de forma simples, clara e 100% online — ideal para quem quer
          móveis planejados mas não sabe por onde começar.
        </p>
      </section>


      {/* ETAPA 1 */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>1. Você envia suas informações</h2>

        <p style={{ fontSize: "18px", color: "#555", lineHeight: "28px" }}>
          Envie fotos, plantas, medidas e inspirações do Pinterest ou Instagram.
          Tudo isso pode ser feito pelo formulário do site ou pelo WhatsApp.
        </p>
      </section>


      {/* ETAPA 2 */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>2. Conversamos sobre seu estilo</h2>

        <p style={{ fontSize: "18px", color: "#555", lineHeight: "28px" }}>
          Entendemos o que você gosta: cores, estilos, referências e suas necessidades.
          Sem tecnicidade, sem complicações — simples e direto.
        </p>
      </section>


      {/* ETAPA 3 */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>3. Criamos seu projeto</h2>

        <p style={{ fontSize: "18px", color: "#555", lineHeight: "28px" }}>
          Dependendo do que você escolher, pode ser:
        </p>

        <ul style={{ fontSize: "18px", color: "#555", lineHeight: "28px" }}>
          <li><strong>Visualize Seu Móvel:</strong> 5 a 6 imagens renderizadas do ambiente.</li>
          <li><strong>Projeto Técnico Completo:</strong> medidas, cortes, vistas e PDF organizado.</li>
          <li><strong>Ambiente Completo / Premium:</strong> vários cômodos com todos os detalhes.</li>
        </ul>
      </section>


      {/* ETAPA 4 */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>4. Você recebe tudo por WhatsApp e PDF</h2>

        <p style={{ fontSize: "18px", color: "#555", lineHeight: "28px" }}>
          Você recebe tudo direto no seu WhatsApp e em PDF organizado.
          Fácil de visualizar, compartilhar e guardar.
        </p>
      </section>


      {/* ETAPA 5 */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>5. Agora você pode pedir orçamento</h2>

        <p style={{ fontSize: "18px", color: "#555", lineHeight: "28px" }}>
          Com tudo pronto, basta enviar os arquivos para qualquer marceneiro e
          pedir orçamento com segurança e confiança.
        </p>
      </section>


      {/* CTA FINAL */}
      <section style={{ textAlign: "center", marginBottom: "100px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
          Pronto para começar seu projeto?
        </h2>

        <a 
          href="/orcamento"
          style={{
            padding: "14px 28px",
            backgroundColor: "#FF780A",
            color: "#fff",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "20px"
          }}
        >
          Enviar Informações
        </a>
      </section>

    </div>
  );
}
