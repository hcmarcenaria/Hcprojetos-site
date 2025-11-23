import Head from "next/head";

export const meta = {
  title: "Guia Rápido: Como Escolher um Bom Marceneiro",
  resumo:
    "Veja os pontos essenciais para avaliar antes de contratar um marceneiro e evitar problemas durante o projeto.",
  data: "2025-11-23",
};

export default function ArtigoMarceneiro() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.resumo} />
      </Head>

      <main
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          {meta.title}
        </h1>

        {/* Data */}
        <p style={{ color: "#555", marginBottom: "20px" }}>
          <strong>Publicado em:</strong> 23 de novembro de 2025
        </p>

        <article
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
          }}
        >
          <p>
            Escolher um bom marceneiro é uma das etapas mais importantes para
            garantir móveis planejados de qualidade. A decisão errada pode gerar
            atrasos, acabamentos ruins, prejuízos e retrabalho. A boa notícia é
            que alguns sinais simples já mostram se o profissional é confiável
            ou se deve ser evitado.
          </p>

          <hr style={{ margin: "25px 0" }} />

          <h2>1. Verifique a experiência e o tempo de atuação</h2>
          <p>
            Profissionais com mais tempo de mercado geralmente já enfrentaram
            diferentes situações e sabem lidar melhor com imprevistos. Mas
            atenção: experiência só conta se for comprovada.
          </p>
          <ul>
            <li>Peça anos de atuação.</li>
            <li>Pergunte onde aprendeu o ofício.</li>
            <li>Veja se já trabalhou com o estilo que você deseja.</li>
          </ul>

          <h2>2. Analise o portfólio de projetos recentes</h2>
          <p>
            Portfólio é o cartão de visitas do marceneiro. Ver fotos antigas não
            adianta — você precisa ver trabalhos recentes, para saber como ele
            está executando hoje.
          </p>
          <ul>
            <li>Procure fotos com boa iluminação.</li>
            <li>Compare acabamentos em portas e gavetas.</li>
            <li>
              Verifique se há depoimentos de clientes ligados a esses projetos.
            </li>
          </ul>

          <h2>3. Veja se ele faz medição no local antes do orçamento</h2>
          <p>
            Muitos problemas começam quando o orçamento é feito “de olho”, sem
            medição real. Um bom profissional só fecha valores finais após medir
            o ambiente.
          </p>
          <ul>
            <li>Ele mede paredes, tomadas, hidráulica e nível do piso.</li>
            <li>
              Usa trena a laser ou ferramentas que deixam a medição mais
              precisa.
            </li>
            <li>Identifica possíveis obstáculos antes de fabricar.</li>
          </ul>

          <h2>4. Exija um contrato claro e detalhado</h2>
          <p>
            Contrato não é burocracia — é segurança. Ele impede mal-entendidos e
            garante que tudo acordado seja cumprido.
          </p>
          <ul>
            <li>Descreva o material (MDF, MDP, espessura etc.).</li>
            <li>Detalhe corrediças, dobradiças e ferragens.</li>
            <li>Inclua prazos de entrega e instalação.</li>
            <li>Defina valor de entrada, parcelas e formas de pagamento.</li>
          </ul>

          <h2>5. Confirme a garantia e a assistência pós-venda</h2>
          <p>
            Marcenaria é um serviço que envolve ajustes. Sem garantia, você
            corre o risco de pagar de novo por consertos simples.
          </p>
          <ul>
            <li>Pergunte o prazo da garantia.</li>
            <li>Veja se ele volta para ajustes após a instalação.</li>
            <li>Desconfie de quem não oferece assistência.</li>
          </ul>

          <hr style={{ margin: "25px 0" }} />

          <h2>Conclusão</h2>
          <p>
            Avaliar um marceneiro não precisa ser complicado. Com esses cinco
            pontos, você já evita dores de cabeça e aumenta muito as chances de
            ter um móvel bonito, durável e bem instalado.
          </p>

          <p style={{ marginTop: "20px" }}>
            Se quiser uma experiência ainda mais segura, a HC Projetos cria todo
            o planejamento visual ou técnico para você comparar preços e evitar
            erros antes mesmo de contratar um profissional.
          </p>
        </article>
      </main>
    </>
  );
}
