export default function Orcamento() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>

      {/* TÍTULO */}
      <section style={{ marginTop: "20px", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "15px", fontWeight: "bold" }}>
          Solicitar Orçamento
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "32px", color: "#444" }}>
          Preencha suas informações e envie fotos, plantas e inspirações.
          Responderemos o mais rápido possível!
        </p>
      </section>


      {/* FORMULÁRIO */}
      <form
        action="https://formspree.io/f/mnnajprp"  
        method="POST"
        encType="multipart/form-data"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "600px"
        }}
      >

        {/* Nome */}
        <div>
          <label style={{ fontSize: "18px" }}>Nome:</label>
          <input 
            type="text"
            name="nome"
            required
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        {/* Telefone */}
        <div>
          <label style={{ fontSize: "18px" }}>Telefone / WhatsApp:</label>
          <input 
            type="text"
            name="telefone"
            required
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        {/* Cidade */}
        <div>
          <label style={{ fontSize: "18px" }}>Cidade:</label>
          <input 
            type="text"
            name="cidade"
            defaultValue="Jacareí - SP"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        {/* Tipo de ambiente */}
        <div>
          <label style={{ fontSize: "18px" }}>Ambiente desejado:</label>
          <select 
            name="ambiente"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          >
            <option>Cozinha</option>
            <option>Quarto</option>
            <option>Sala</option>
            <option>Área de Serviço</option>
            <option>Banheiro</option>
            <option>Home Office</option>
            <option>Ambiente Completo</option>
          </select>
        </div>

        {/* Descrição */}
        <div>
          <label style={{ fontSize: "18px" }}>Descreva o que você deseja:</label>
          <textarea 
            name="descricao"
            rows="5"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          ></textarea>
        </div>

        {/* Upload */}
        <div>
          <label style={{ fontSize: "18px" }}>Enviar arquivos (fotos, plantas, inspirações):</label>
          <input 
            type="file"
            name="arquivos"
            multiple
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px"
            }}
          />
        </div>

        {/* Botão */}
        <button 
          type="submit"
          style={{
            backgroundColor: "#FF780A",
            color: "#fff",
            padding: "14px 20px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Enviar Orçamento
        </button>

      </form>


      {/* WHATSAPP */}
      <section style={{ marginTop: "40px", textAlign: "center", marginBottom: "100px" }}>
        <p style={{ fontSize: "18px" }}>Prefere falar pelo WhatsApp?</p>

        <a
          href="https://wa.me/5512991831380"
          target="_blank"
          style={{
            padding: "14px 28px",
            backgroundColor: "#25D366",
            color: "#fff",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "20px"
          }}
        >
          Enviar Mensagem
        </a>
      </section>

    </div>
  );
}
