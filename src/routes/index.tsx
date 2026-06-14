import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Wrench, Zap, ScanLine, Disc3, Car, Fuel, ShieldCheck, Flag,
  Timer, GraduationCap, BadgeCheck, Handshake, Instagram, MapPin,
} from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import logoFooterAsset from "@/assets/logo-footer.png.asset.json";
import mascoteAsset from "@/assets/mascote.png.asset.json";
import logoPromoAsset from "@/assets/logo-promo.png.asset.json";

const WHATSAPP_URL =
  "https://wa.me/5517996220268?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Eros%20Auto%20Center%20e%20quero%20um%20atendimento.";
const ADDRESS = "Rua João Urias Gomes 1776 - Vila Toninho - São José do Rio Preto/SP";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);
const ROUTE_URL = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS);
const REVIEWS_URL = "https://www.google.com/search?q=Eros+Auto+Center+S%C3%A3o+Jos%C3%A9+do+Rio+Preto";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Eros Auto Center",
  image: logoPromoAsset.url,
  url: "https://erosautocenter.com.br",
  telephone: "+5517996220268",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua João Urias Gomes, 1776",
    addressLocality: "São José do Rio Preto",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: "São José do Rio Preto",
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/eros.autocenter"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eros Auto Center | Mecânica e Elétrica Automotiva em São José do Rio Preto" },
      {
        name: "description",
        content:
          "A Eros Auto Center oferece mecânica em geral, auto elétrico e manutenção para veículos nacionais e importados em São José do Rio Preto. Fale pelo WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "oficina mecânica são josé do rio preto, auto center são josé do rio preto, mecânica vila toninho, auto elétrico são josé do rio preto, oficina carros importados, mecânica automotiva, eros auto center",
      },
      { name: "theme-color", content: "#0F2345" },
      { property: "og:title", content: "Eros Auto Center | Mecânica e Elétrica Automotiva" },
      {
        property: "og:description",
        content:
          "Mecânica em geral, auto elétrico e manutenção para veículos nacionais e importados em São José do Rio Preto.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: logoPromoAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: logoAsset.url },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: Home,
});

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

const servicos = [
  { Icon: Wrench, title: "Mecânica em geral", desc: "Reparos e manutenção completa do motor ao câmbio." },
  { Icon: Zap, title: "Auto elétrico", desc: "Diagnóstico e reparo elétrico com equipamentos modernos." },
  { Icon: ScanLine, title: "Diagnóstico automotivo", desc: "Scanner profissional para identificar falhas com precisão." },
  { Icon: Disc3, title: "Freios", desc: "Troca de pastilhas, discos e revisão completa do sistema." },
  { Icon: Car, title: "Suspensão", desc: "Amortecedores, molas e alinhamento para mais segurança." },
  { Icon: Fuel, title: "Injeção eletrônica", desc: "Limpeza, regulagem e reparo da injeção do seu veículo." },
  { Icon: ShieldCheck, title: "Manutenção preventiva", desc: "Revisões periódicas para evitar problemas maiores." },
  { Icon: Flag, title: "Nacionais e importados", desc: "Atendimento técnico especializado para todas as marcas." },
];

const diferenciais = [
  { Icon: Timer, title: "Rapidez no atendimento", desc: "Agilidade sem abrir mão da qualidade do serviço." },
  { Icon: GraduationCap, title: "Especialização técnica", desc: "Equipe qualificada e em constante atualização." },
  { Icon: BadgeCheck, title: "Garantia nos serviços", desc: "Trabalho garantido para sua total tranquilidade." },
  { Icon: Handshake, title: "Honestidade e transparência", desc: "Diagnóstico claro e orçamento sem surpresas." },
];

function Home() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="brand" aria-label="Eros Auto Center - Início">
            <img src={logoAsset.url} alt="Eros Auto Center" width={220} height={50} />
          </a>
          <nav className="nav-desktop" aria-label="Navegação principal">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <a className="btn-whatsapp-header header-cta" href={WHATSAPP_URL} target="_blank" rel="noopener">
            <WhatsAppIcon /> Chamar no WhatsApp
          </a>
          <button
            className={`menu-toggle ${open ? "active" : ""}`}
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
        <nav className={`nav-mobile ${open ? "open" : ""}`} aria-label="Navegação mobile">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" onClick={close} style={{ color: "var(--red)" }}>
            Chamar no WhatsApp
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1>Eros <span>Auto Center</span></h1>
              <p className="hero-sub">Mecânica e elétrica automotiva para veículos nacionais e importados.</p>
              <p className="hero-support">
                Atendimento técnico, rápido e transparente para cuidar do seu carro com segurança.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener">
                  <WhatsAppIcon /> Chamar no WhatsApp
                </a>
                <a className="btn btn-ghost" href="#localizacao">Ver localização</a>
              </div>
            </div>
            <div className="hero-mascote">
              <img src={mascoteAsset.url} alt="Mascote Eros Dog — mecânico oficial da Eros Auto Center" width={500} height={500} />
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">O que fazemos</span>
              <h2>Serviços de Mecânica e Elétrica</h2>
              <p>Soluções técnicas para manter seu carro rodando com segurança e desempenho.</p>
            </div>
            <div className="grid cols-4">
              {servicos.map((s) => (
                <article key={s.title} className="card">
                  <div className="card-icon" aria-hidden="true"><s.Icon size={28} strokeWidth={1.75} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="diferenciais">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Por que a Eros</span>
              <h2>Por que escolher a Eros Auto Center?</h2>
              <p>Aqui, seu carro recebe diagnóstico claro, serviço bem feito e atendimento de confiança.</p>
            </div>
            <div className="grid cols-4">
              {diferenciais.map((d) => (
                <article key={d.title} className="card">
                  <div className="card-icon" aria-hidden="true"><d.Icon size={28} strokeWidth={1.75} /></div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre">
          <div className="container sobre-inner">
            <div className="sobre-text">
              <span className="eyebrow">Sobre nós</span>
              <h2>O melhor amigo do seu carro</h2>
              <p>
                A Eros Auto Center nasceu com o propósito de oferecer serviços automotivos com qualidade,
                transparência e confiança. Atendemos veículos nacionais e importados com equipe técnica
                especializada, buscando sempre entregar segurança, agilidade e tranquilidade para cada cliente.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener">
                  <WhatsAppIcon /> Falar conosco
                </a>
              </div>
            </div>
            <div className="sobre-image">
              <img src={logoPromoAsset.url} alt="Mascote Eros Dog com logo Eros Auto Center" loading="lazy" width={380} height={380} />
            </div>
          </div>
        </section>

        {/* CTA MID */}
        <section className="cta-mid">
          <div className="container">
            <h2>Precisa de um diagnóstico para o seu carro?</h2>
            <p>Fale agora com a Eros Auto Center pelo WhatsApp.</p>
            <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener">
              <WhatsAppIcon /> Solicitar atendimento
            </a>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section id="avaliacoes">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Reputação</span>
              <h2>Avaliações dos nossos clientes</h2>
              <p>Confira a opinião de quem já confia na Eros Auto Center.</p>
              <div className="reviews-actions">
                <a className="btn btn-outline" href={REVIEWS_URL} target="_blank" rel="noopener">Ver avaliações no Google</a>
                <a className="btn btn-primary" href={REVIEWS_URL} target="_blank" rel="noopener">Avaliar no Google</a>
              </div>
            </div>
            <div className="reviews-placeholder">
              Área preparada para integração futura com as avaliações do Google Meu Negócio.
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="diferenciais">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Onde estamos</span>
              <h2>Estamos em São José do Rio Preto</h2>
              <p>{ADDRESS}</p>
            </div>
            <div className="map-wrap">
              <iframe
                title="Mapa - Eros Auto Center"
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="local-actions">
              <a className="btn btn-primary" href={ROUTE_URL} target="_blank" rel="noopener">Traçar rota</a>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="contato">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Contato</span>
              <h2>Fale com a Eros Auto Center</h2>
            </div>
            <div className="contato-grid">
              <div className="contato-item">
                <div className="card-icon" aria-hidden="true"><WhatsAppIcon /></div>
                <strong>WhatsApp</strong>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener">17 99622-0268</a>
              </div>
              <div className="contato-item">
                <div className="card-icon" aria-hidden="true"><Instagram size={26} strokeWidth={1.75} /></div>
                <strong>Instagram</strong>
                <a href="https://instagram.com/eros.autocenter" target="_blank" rel="noopener">@eros.autocenter</a>
              </div>
              <div className="contato-item">
                <div className="card-icon" aria-hidden="true"><MapPin size={26} strokeWidth={1.75} /></div>
                <strong>Endereço</strong>
                <a href={MAPS_URL} target="_blank" rel="noopener">{ADDRESS}</a>
              </div>
            </div>
            <div className="contato-cta">
              <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener">
                <WhatsAppIcon /> Chamar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src={logoFooterAsset.url} alt="Eros Auto Center" loading="lazy" width={720} height={270} />
              <p>O melhor amigo do seu carro</p>
            </div>
            <div className="footer-col">
              <h4>Links rápidos</h4>
              <ul>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#localizacao">Localização</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener">WhatsApp</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contato</h4>
              <ul>
                <li>17 99622-0268</li>
                <li>@eros.autocenter</li>
                <li>{ADDRESS}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Eros Auto Center. Todos os direitos reservados.<br />
            Criado por <a href="https://mundodigitalsolucoes.com.br" target="_blank" rel="noopener">Mundo Digital Soluções</a>
          </div>
        </div>
      </footer>

      <a className="fab-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">
        <WhatsAppIcon />
        <span className="label">Atendimento</span>
      </a>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
    </svg>
  );
}
