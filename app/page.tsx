"use client";

import { useEffect, useState } from "react";

const projects = [
  { tag: "Educação", title: "Raízes do Amanhã", text: "Educação ambiental e cidadania para crianças e jovens de comunidades locais.", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85" },
  { tag: "Território", title: "Hortas que Aproximam", text: "Cultivo coletivo, alimentação saudável e geração de renda em espaços urbanos.", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=85" },
  { tag: "Comunidade", title: "Mulheres que Semeiam", text: "Formação, autonomia e redes de apoio para mulheres empreendedoras.", image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=85" },
];

function Mark({ light = false }: { light?: boolean }) {
  return <a href="#inicio" className={`mark ${light ? "mark-light" : ""}`} aria-label="Instituto Sementes da Sustentabilidade — início"><span className="seed-dot" /> <span>Instituto Sementes<br />da Sustentabilidade</span></a>;
}

function Minimal() {
  return <main className="minimal" id="inicio">
    <header className="min-header"><Mark /><nav aria-label="Navegação principal"><a href="#sobre">O Instituto</a><a href="#projetos">Projetos</a><a href="#noticias">Posts</a><a href="#transparencia">Transparência</a><a href="#contato">Contato</a></nav><a className="min-contact" href="#contato">Fale conosco <span>↗</span></a></header>
    <section className="min-hero">
      <div className="min-hero-copy"><p className="eyebrow">Impacto social e sustentabilidade</p><h1>Cultivamos futuros que florescem juntos.</h1><p className="lead">Fortalecemos pessoas e territórios por meio da educação, da sustentabilidade e da ação comunitária.</p><a className="button button-green" href="#projetos">Conheça nossos projetos <span>↗</span></a></div>
      <figure className="min-hero-image"><img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=90" alt="Voluntários reunidos em uma ação comunitária" /><figcaption><span>01</span> Comunidades fortes transformam territórios.</figcaption></figure>
    </section>
    <section className="min-intro" id="sobre"><p className="section-index">01 — Quem somos</p><div><h2>Transformação que começa de dentro para fora.</h2><p>O Instituto Sementes da Sustentabilidade nasce da crença de que toda comunidade carrega o potencial de criar suas próprias soluções. Conectamos conhecimento, cuidado e oportunidades para que esse potencial cresça.</p><a className="text-link" href="#">Conheça nossa história <span>→</span></a></div></section>
    <section className="min-stats" aria-label="Indicadores de impacto"><div><strong>12</strong><span>comunidades<br />atendidas</span></div><div><strong>2.4k</strong><span>pessoas<br />impactadas</span></div><div><strong>18</strong><span>projetos<br />realizados</span></div><div><strong>86%</strong><span>dos recursos na<br />atividade-fim</span></div></section>
    <section className="min-projects" id="projetos"><div className="section-heading"><div><p className="section-index">02 — Nossa atuação</p><h2>Projetos que deixam raízes.</h2></div><a className="text-link" href="#">Ver todos os projetos <span>→</span></a></div><div className="project-grid">{projects.map((p, i) => <article className="min-card" key={p.title}><a href="#"><div className="card-image"><img src={p.image} alt="" /><span>0{i + 1}</span></div><p className="eyebrow">{p.tag}</p><h3>{p.title}</h3><p>{p.text}</p><span className="circle-arrow">↗</span></a></article>)}</div></section>
    <section className="min-news" id="noticias"><div><p className="section-index">03 — Histórias e notícias</p><h2>O que estamos<br />cultivando agora.</h2><a className="text-link" href="#">Ver todos os posts <span>→</span></a></div><article><img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=85" alt="Grupo de voluntários sorrindo" /><div><p className="eyebrow">Histórias de impacto · 12 jun 2026</p><h3>Quando uma horta vira ponto de encontro, renda e esperança</h3><p>Conheça as pessoas que estão transformando um terreno ocioso em alimento, autonomia e convivência.</p><a className="text-link" href="#">Ler história <span>→</span></a></div></article></section>
    <section className="min-transparency" id="transparencia"><div><p className="section-index">04 — Transparência</p><h2>Confiança também se cultiva.</h2></div><div><p>Resultados, documentos e informações acessíveis para quem acredita e caminha ao nosso lado.</p><a className="button button-outline" href="#">Acessar portal da transparência <span>↗</span></a></div></section>
    <footer className="min-footer" id="contato"><div className="footer-main"><Mark light /><div><p className="eyebrow">Vamos conversar</p><a className="mail" href="mailto:contato@sementesdasustentabilidade.org.br">contato@sementesdasustentabilidade.org.br</a></div></div><div className="footer-bottom"><span>© 2026 Instituto Sementes da Sustentabilidade</span><div><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="#">Política de privacidade</a></div></div></footer>
  </main>;
}

function Wild() {
  return <main className="wild" id="inicio-wild">
    <header className="wild-header"><Mark light /><nav aria-label="Navegação principal"><a href="#manifesto">Instituto</a><a href="#wild-projects">Projetos</a><a href="#wild-news">Posts</a><a href="#wild-transparency">Transparência</a></nav><a className="wild-pill" href="#wild-contact">Vamos conversar ↗</a></header>
    <section className="wild-hero">
      <div className="orb orb-one"/><div className="orb orb-two"/><span className="vertical-note">DESDE 2019 · BRASIL</span>
      <p className="wild-kicker">Impacto social que cria raízes</p><h1>Semeamos <em>hoje</em><br />as comunidades<br /><span>sustentáveis</span> de amanhã.</h1>
      <div className="wild-hero-photo"><img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=90" alt="Pessoas reunidas em ação voluntária" /><span className="photo-sticker">impacto<br />que cresce ✦</span></div>
      <a className="wild-cta" href="#wild-projects">Conheça nossos projetos <b>↘</b></a><p className="wild-side-copy">Educação, sustentabilidade e ação comunitária para transformar pessoas e territórios.</p>
    </section>
    <section className="wild-manifesto" id="manifesto"><div className="marquee"><span>GENTE ✦ TERRA ✦ FUTURO ✦ GENTE ✦ TERRA ✦ FUTURO ✦</span></div><div className="manifesto-grid"><p>(NOSSO JEITO DE FAZER)</p><h2>Não chegamos com respostas prontas.<br /><i>Plantamos perguntas</i>, escutamos o território e construímos junto.</h2><div className="manifesto-seal">ISS<br /><span>✦</span><br />2026</div></div></section>
    <section className="wild-projects" id="wild-projects"><div className="wild-title"><p>PROJETOS / 2026</p><h2>Onde nossas<br />sementes <i>viram</i><br /><span>movimento.</span></h2></div><div className="wild-cards">{projects.map((p, i) => <article className={`wild-card wild-card-${i + 1}`} key={p.title}><img src={p.image} alt="" /><div><span>0{i + 1} / {p.tag}</span><h3>{p.title}</h3><p>{p.text}</p><a href="#">descobrir projeto ↗</a></div></article>)}</div></section>
    <section className="wild-impact"><div className="impact-intro"><p>IMPACTO EM MOVIMENTO</p><h2>Números contam histórias.<br />As nossas estão <i>vivas.</i></h2></div><div className="impact-numbers"><div><strong>2.4<span>k</span></strong><p>pessoas caminharam<br />com a gente</p></div><div><strong>12</strong><p>comunidades<br />fortalecidas</p></div><div><strong>18</strong><p>projetos que<br />deixaram raízes</p></div></div></section>
    <section className="wild-news" id="wild-news"><div className="news-photo"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=85" alt="Mãos segurando uma jovem planta"/><span>LER EM 4 MIN ↗</span></div><div className="news-copy"><p>DIÁRIO DE CAMPO · 12.06.26</p><h2>Uma semente,<br />muitas mãos<br />e um bairro<br /><i>inteiro.</i></h2><p>Como um terreno esquecido se tornou ponto de encontro, alimento e renda.</p><a href="#">LER ESSA HISTÓRIA <span>→</span></a></div><div className="sun-shape">✦</div></section>
    <section className="wild-transparency" id="wild-transparency"><div><span>TRANSPARÊNCIA</span><h2>Tudo aberto.<br />Tudo às claras.</h2></div><p>Porque confiança não é discurso — é prática. Acompanhe nossos resultados, documentos e a aplicação de cada recurso.</p><a href="#">ABRIR PORTAL <b>↗</b></a></section>
    <footer className="wild-footer" id="wild-contact"><div className="footer-burst">VAMOS<br /><i>cultivar</i><br />JUNTOS?</div><a className="wild-email" href="mailto:contato@sementesdasustentabilidade.org.br">contato@sementesdasustentabilidade.org.br ↗</a><div className="wild-footer-bottom"><Mark light/><div><a href="#">Instagram ↗</a><a href="#">LinkedIn ↗</a></div><span>BRASIL · 2026</span></div></footer>
  </main>;
}

export default function Home() {
  const [design, setDesign] = useState<"minimal" | "wild">("minimal");
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [design]);
  return <><div className="design-switcher" role="group" aria-label="Alternar proposta visual"><span>Escolha o design</span><button onClick={() => setDesign("minimal")} className={design === "minimal" ? "active" : ""} aria-pressed={design === "minimal"}>01 Minimalista</button><button onClick={() => setDesign("wild")} className={design === "wild" ? "active" : ""} aria-pressed={design === "wild"}>02 Extravagante</button></div>{design === "minimal" ? <Minimal /> : <Wild />}</>;
}
