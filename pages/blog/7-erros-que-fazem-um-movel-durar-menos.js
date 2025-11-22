import Head from "next/head";

export const meta = {
  title: "7 Erros que Fazem um Móvel Durar Menos — e Como Evitá-los",
  resumo: "Os erros mais comuns que reduzem a vida útil dos móveis e como evitá-los de forma simples e prática.",
  data: "2025-11-22"
};

export default function Artigo7Erros() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.resumo} />
      </Head>

      <main style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
        
        <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
          {meta.title}
        </h1>

        {/* Data */}
        <p style={{ color: "#555", marginBottom: "20px" }}>
          <strong>Publicado em:</strong> 22 de novembro de 2025
        </p>

        {/* Imagem */}
        <img
          src="/images/artigos/durabilidade-moveis.png"
          alt="Erros que reduzem a durabilidade de móveis planejados"
          style={{
            width: "100%",
            borderRadius: "10px",
            margin: "20px 0",
            objectFit: "cover",
          }}
        />

        <article style={{ lineHeight: "1.8", fontSize: "18px", color: "#333" }}>
          <p>
            Quando um móvel começa a empenar, inchar ou perder resistência, muita gente culpa a madeira. 
            Mas, na prática, os problemas quase sempre vêm de erros de projeto, montagem ou especificação.
          </p>

          <p>
            A seguir, listamos os 7 erros mais comuns que encurtam a vida útil dos móveis — 
            junto com soluções claras para evitar cada um.
          </p>

          <hr style={{ margin: "25px 0" }} />

          <h2>1. Escolher o material errado para o ambiente</h2>
          <p>Muita gente compra móveis baratos sem entender que MDF e MDP não são iguais.</p>
          <p><strong>MDF</strong>: melhor para portas, curvas e peças verticais.</p>
          <p><strong>MDP</strong>: mais resistente para caixas e prateleiras largas.</p>

          <p><strong>Problema:</strong> MDF usado em prateleiras longas sofre flexão; MDP mal usado em áreas úmidas pode inchar.</p>

          <p><strong>Como evitar:</strong></p>
          <ul>
            <li>Cozinhas e banheiros: MDF em portas + MDP nas caixas.</li>
            <li>Áreas úmidas: considerar compensado naval ou revestimentos especiais.</li>
          </ul>

          <h2>2. Dobradiças e corrediças de baixa qualidade</h2>
          <p><strong>Problema:</strong> portas descentralizam, gavetas travam, folgas aparecem.</p>
          <p><strong>Como evitar:</strong></p>
          <ul>
            <li>Häfele, Blum ou FGVTn</li>
            <li>Dobradiças com amortecimento</li>
            <li>Corrediças telescópicas de 45–50 kg</li>
          </ul>

          <h2>3. Projetar sem considerar peso real de uso</h2>
          <p><strong>Problema:</strong> empenamento e ruptura.</p>
          <p><strong>Como evitar:</strong></p>
          <ul>
            <li>Caixas acima de 80 cm → reforço.</li>
            <li>Prateleiras para livros → 25 mm ou reforço traseiro.</li>
          </ul>

          <h2>4. Folgas erradas entre portas e gavetas</h2>
          <p><strong>Problema:</strong> porta raspando e desgaste prematuro.</p>
          <p><strong>Como evitar:</strong> folga lateral padrão de 2–3 mm.</p>

          <h2>5. Fundo pregado ou sem reforço</h2>
          <p><strong>Problema:</strong> módulo perde esquadro e entorta.</p>
          <p><strong>Como evitar:</strong></p>
          <ul>
            <li>Fundos de 6 mm encaixados</li>
            <li>Ou 15 mm aparafusados</li>
          </ul>

          <h2>6. Instalação feita sem nivelamento</h2>
          <p><strong>Problema:</strong> portas tortas, gavetas duras.</p>
          <p><strong>Como evitar:</strong> régua laser + calços reguláveis.</p>

          <h2>7. Falta de manutenção básica</h2>
          <p><strong>Problema:</strong> umidade, ferragens frouxas, sujeira nos trilhos.</p>
          <p><strong>Como evitar:</strong></p>
          <ul>
            <li>Apertar parafusos a cada 6 meses</li>
            <li>Não deixar água parada</li>
            <li>Ajustar folgas assim que aparecerem</li>
          </ul>

          <hr style={{ margin: "30px 0" }} />

          <h2>Conclusão</h2>
          <p>
            Durabilidade não depende só do material — depende de projeto, técnica, ferragem e instalação.
            Evitando esses 7 erros, você garante móveis bonitos e funcionais por muitos anos.
          </p>

          <p>
            Se você quer um projeto que siga todos esses padrões com rigor, a equipe do HC Projetos está pronta para ajudar.
          </p>
        </article>
      </main>
    </>
  );
}