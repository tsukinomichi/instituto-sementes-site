"use client";

import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projects = [
  { tag: "Agricultura familiar", title: "Da Terra à Mesa", text: "Fortalecimento de famílias agricultoras, produção sustentável e acesso a mercados locais.", image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=85" },
  { tag: "Capacitação", title: "Capacita Campo", text: "Formação prática em gestão, produção agroecológica e comercialização para quem vive da terra.", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85" },
  { tag: "Comunidade", title: "Hortas que Aproximam", text: "Cultivo coletivo, alimentação saudável e geração de renda em espaços urbanos e rurais.", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=85" },
  { tag: "Inclusão produtiva", title: "Criando Oportunidades", text: "Capacitação, orientação e caminhos para ampliar renda, autonomia e oportunidades nas comunidades.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85" },
  { tag: "Segurança alimentar", title: "Ceará sem Fome", text: "Ações de mobilização e apoio voltadas ao acesso à alimentação e ao fortalecimento das famílias cearenses.", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85" },
];

function moveCarousel(id: string, direction: number) {
  document.getElementById(id)?.scrollBy({ left: direction * 420, behavior: "smooth" });
}

function getInstagramPosts() {
  return [
    { id: "demo-1", image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=900&q=85", date: "2 dias", caption: "Dia de campo com famílias agricultoras: troca de saberes, cuidado com o solo e novas possibilidades para a produção local.", likes: 184 },
    { id: "demo-2", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85", date: "5 dias", caption: "Mais uma turma do Capacita Campo concluída. Conhecimento compartilhado é oportunidade que permanece no território.", likes: 231 },
    { id: "demo-3", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=85", date: "1 semana", caption: "Mobilização, alimento e cuidado: seguimos juntos fortalecendo ações de segurança alimentar no Ceará.", likes: 297 },
    { id: "demo-4", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=85", date: "2 semanas", caption: "Quando a comunidade cultiva junto, crescem vínculos, renda, autonomia e esperança.", likes: 156 },
  ];
}

function InstagramFeed({ variant }: { variant: "minimal" | "wild" }) {
  const posts = getInstagramPosts();
  return <section className={`instagram-feed instagram-${variant}`} id={variant === "minimal" ? "instagram" : "wild-instagram"}>
    <div className="instagram-heading"><div><span className="demo-label">Demonstração · conteúdo fictício</span><p>ACOMPANHE NO INSTAGRAM</p><h2>@sementesdasustentabilidade</h2></div><a href="#" aria-label="Abrir perfil demonstrativo no Instagram">Seguir perfil <span>↗</span></a></div>
    <div className="instagram-grid">{posts.map((post) => <article className="instagram-card" key={post.id}><div className="instagram-image"><img src={post.image} alt="Publicação demonstrativa sobre ações do Instituto" /><span aria-hidden="true">◎</span></div><div className="instagram-meta"><span>♥ {post.likes}</span><span>{post.date}</span></div><p><strong>@sementesdasustentabilidade</strong> {post.caption}</p></article>)}</div>
  </section>;
}

function Mark({ light = false }: { light?: boolean }) {
  return <a href="#inicio" className={`mark ${light ? "mark-light" : ""}`} aria-label="Instituto Sementes da Sustentabilidade — início"><img className="brand-logo" src={`${basePath}/logo-iss-raster.png`} alt="Instituto Sementes da Sustentabilidade" /></a>;
}

function Minimal() {
  return <main className="minimal" id="inicio">
    <header className="min-header"><Mark /><nav aria-label="Navegação principal"><a href="#sobre">O Instituto</a><a href="#projetos">Projetos</a><a href="#noticias">Posts</a><a href="#transparencia">Transparência</a><a href="#contato">Contato</a></nav><a className="min-contact" href="#contato">Fale conosco <span>↗</span></a></header>
    <section className="min-hero">
      <div className="min-hero-copy"><p className="eyebrow">Impacto social · agricultura familiar · sustentabilidade</p><h1>Cultivamos futuros que florescem juntos.</h1><p className="lead">Fortalecemos pessoas e territórios por meio da agricultura familiar, da educação e da ação comunitária.</p><a className="button button-green" href="#projetos">Conheça nossos projetos <span>↗</span></a></div>
      <figure className="min-hero-image"><img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=90" alt="Agricultor familiar caminhando em uma plantação" /><figcaption><span>01</span> Conhecimento e terra cultivam autonomia.</figcaption></figure>
    </section>
    <section className="min-intro" id="sobre"><p className="section-index">01 — Quem somos</p><div><h2>Transformação que nasce da terra e cresce em comunidade.</h2><p>O Instituto acredita na agricultura familiar como força de desenvolvimento local. Conectamos conhecimento, cuidado e oportunidades para valorizar quem produz, proteger o território e fazer esse potencial crescer.</p><a className="text-link" href="#">Conheça nossa história <span>→</span></a></div></section>
    <section className="min-pillars" aria-label="Eixos de atuação"><article><span>01</span><h3>Agricultura familiar</h3><p>Assistência, fortalecimento produtivo e acesso a mercados para famílias do campo.</p></article><article><span>02</span><h3>Capacitação</h3><p>Conhecimento prático para ampliar autonomia, renda e protagonismo comunitário.</p></article><article><span>03</span><h3>Sustentabilidade</h3><p>Produção responsável que protege o solo, a água e as próximas gerações.</p></article></section>
    <section className="min-stats" aria-label="Indicadores de impacto"><div><strong>320</strong><span>famílias agricultoras<br />acompanhadas</span></div><div><strong>680</strong><span>pessoas<br />capacitadas</span></div><div><strong>12</strong><span>comunidades<br />fortalecidas</span></div><div><strong>86%</strong><span>dos recursos na<br />atividade-fim</span></div></section>
    <section className="min-projects" id="projetos"><div className="section-heading"><div><p className="section-index">02 — Nossa atuação</p><h2>Projetos que deixam raízes.</h2></div><div className="carousel-actions"><span>Explore os projetos</span><button type="button" onClick={() => moveCarousel("min-project-carousel", -1)} aria-label="Projetos anteriores">←</button><button type="button" onClick={() => moveCarousel("min-project-carousel", 1)} aria-label="Próximos projetos">→</button></div></div><div className="project-grid" id="min-project-carousel" role="region" aria-label="Carrossel de projetos" tabIndex={0}>{projects.map((p, i) => <article className="min-card" key={p.title}><a href="#"><div className="card-image"><img src={p.image} alt="" /><span>0{i + 1}</span></div><p className="eyebrow">{p.tag}</p><h3>{p.title}</h3><p>{p.text}</p><span className="circle-arrow">↗</span></a></article>)}</div></section>
    <section className="min-news" id="noticias"><div><p className="section-index">03 — Histórias e notícias</p><h2>O que estamos<br />cultivando agora.</h2><a className="text-link" href="#">Ver todos os posts <span>→</span></a></div><article><img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=85" alt="Grupo de voluntários sorrindo" /><div><p className="eyebrow">Histórias de impacto · 12 jun 2026</p><h3>Quando uma horta vira ponto de encontro, renda e esperança</h3><p>Conheça as pessoas que estão transformando um terreno ocioso em alimento, autonomia e convivência.</p><a className="text-link" href="#">Ler história <span>→</span></a></div></article></section>
    <InstagramFeed variant="minimal" />
    <section className="min-transparency" id="transparencia"><div><p className="section-index">04 — Transparência</p><h2>Confiança também se cultiva.</h2></div><div><p>Resultados, documentos e informações acessíveis para quem acredita e caminha ao nosso lado.</p><a className="button button-outline" href="#">Acessar portal da transparência <span>↗</span></a></div></section>
    <footer className="min-footer" id="contato"><div className="footer-main"><Mark light /><div><p className="eyebrow">Vamos conversar</p><a className="mail" href="mailto:contato@sementesdasustentabilidade.org.br">contato@sementesdasustentabilidade.org.br</a></div></div><div className="footer-bottom"><span>© 2026 Instituto Sementes da Sustentabilidade</span><div><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="#">Política de privacidade</a></div></div></footer>
  </main>;
}

function Wild() {
  return <main className="wild" id="inicio-wild">
    <header className="wild-header"><Mark light /><nav aria-label="Navegação principal"><a href="#manifesto">Instituto</a><a href="#wild-projects">Projetos</a><a href="#wild-news">Posts</a><a href="#wild-transparency">Transparência</a></nav><a className="wild-pill" href="#wild-contact">Vamos conversar ↗</a></header>
    <section className="wild-hero">
      <div className="orb orb-one"/><div className="orb orb-two"/><span className="vertical-note">DESDE 2019 · BRASIL</span>
      <p className="wild-kicker">Agricultura familiar · impacto social que cria raízes</p><h1>Semeamos <em>hoje</em><br />as comunidades<br /><span>sustentáveis</span> de amanhã.</h1>
      <div className="wild-hero-photo"><img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=90" alt="Agricultor familiar em uma área de cultivo" /><span className="photo-sticker">saber que<br />floresce ✦</span></div>
      <a className="wild-cta" href="#wild-projects">Conheça nossos projetos <b>↘</b></a><p className="wild-side-copy">Agricultura familiar, educação e ação comunitária para transformar pessoas e territórios.</p><span className="family-seal">AGRICULTURA<br /><b>FAMILIAR</b><br />✦</span>
    </section>
    <section className="wild-manifesto" id="manifesto"><div className="marquee"><span>GENTE ✦ TERRA ✦ AGRICULTURA FAMILIAR ✦ FUTURO ✦ GENTE ✦ TERRA ✦</span></div><div className="manifesto-grid"><p>(NOSSO JEITO DE FAZER)</p><h2>Valorizamos quem vive da terra.<br /><i>Plantamos caminhos</i>, escutamos famílias agricultoras e construímos junto.</h2><div className="manifesto-seal">ISS<br /><span>✦</span><br />2026</div></div></section>
    <section className="wild-projects" id="wild-projects"><div className="wild-title"><p>PROJETOS / 2026</p><h2>Onde nossas<br />sementes <i>viram</i><br /><span>movimento.</span></h2><div className="wild-carousel-actions"><button type="button" onClick={() => moveCarousel("wild-project-carousel", -1)} aria-label="Projetos anteriores">←</button><button type="button" onClick={() => moveCarousel("wild-project-carousel", 1)} aria-label="Próximos projetos">→</button></div></div><div className="wild-cards" id="wild-project-carousel" role="region" aria-label="Carrossel de projetos" tabIndex={0}>{projects.map((p, i) => <article className={`wild-card wild-card-${i + 1}`} key={p.title}><img src={p.image} alt="" /><div><span>0{i + 1} / {p.tag}</span><h3>{p.title}</h3><p>{p.text}</p><a href="#">descobrir projeto ↗</a></div></article>)}</div></section>
    <section className="wild-impact"><div className="impact-intro"><p>IMPACTO EM MOVIMENTO</p><h2>Conhecimento no campo.<br />Autonomia que fica <i>viva.</i></h2></div><div className="impact-numbers"><div><strong>320</strong><p>famílias agricultoras<br />acompanhadas</p></div><div><strong>680</strong><p>pessoas<br />capacitadas</p></div><div><strong>12</strong><p>comunidades<br />fortalecidas</p></div></div></section>
    <section className="wild-news" id="wild-news"><div className="news-photo"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=85" alt="Mãos segurando uma jovem planta"/><span>LER EM 4 MIN ↗</span></div><div className="news-copy"><p>DIÁRIO DE CAMPO · 12.06.26</p><h2>Uma semente,<br />muitas mãos<br />e um município<br /><i>inteiro.</i></h2><p>Como a agricultura familiar e a capacitação fortalecem o território, gerando alimento, renda e desenvolvimento local.</p><a href="#">LER ESSA HISTÓRIA <span>→</span></a></div><div className="sun-shape">✦</div></section>
    <InstagramFeed variant="wild" />
    <section className="wild-transparency" id="wild-transparency"><div><span>TRANSPARÊNCIA</span><h2>Tudo aberto.<br />Tudo às claras.</h2></div><p>Porque confiança não é discurso — é prática. Acompanhe nossos resultados, documentos e a aplicação de cada recurso.</p><a href="#">ABRIR PORTAL <b>↗</b></a></section>
    <footer className="wild-footer" id="wild-contact"><div className="footer-burst">VAMOS<br /><i>cultivar</i><br />JUNTOS?</div><a className="wild-email" href="mailto:contato@sementesdasustentabilidade.org.br">contato@sementesdasustentabilidade.org.br ↗</a><div className="wild-footer-bottom"><Mark light/><div><a href="#">Instagram ↗</a><a href="#">LinkedIn ↗</a></div><span>BRASIL · 2026</span></div></footer>
  </main>;
}

export default function Home() {
  const [design, setDesign] = useState<"minimal" | "wild">("minimal");
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [design]);
  return <><div className="design-switcher" role="group" aria-label="Alternar proposta visual"><span>Escolha o design</span><button onClick={() => setDesign("minimal")} className={design === "minimal" ? "active" : ""} aria-pressed={design === "minimal"}>01 Minimalista</button><button onClick={() => setDesign("wild")} className={design === "wild" ? "active" : ""} aria-pressed={design === "wild"}>02 Extravagante</button></div>{design === "minimal" ? <Minimal /> : <Wild />}</>;
}
