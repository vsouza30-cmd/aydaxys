"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accessibility,
  Volume2,
  Languages,
  MessageCircle,
  X,
} from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Lang = "pt" | "en" | "es" | "it" | "fr";

const whatsappLink =
  "https://wa.me/5541987268822?text=Olá,%20quero%20entender%20como%20melhorar%20meu%20posicionamento%20com%20a%20AYDAXYS";

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [ayda, setAyda] = useState(false);
  const [openCard, setOpenCard] = useState<number | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  const texts = useMemo(
    () => ({
      pt: {
        label: "Consultoria Estratégica B2B",
        title: "Onde a competência encontra valor real.",
        desc:
          "Empresas B2B que saem da guerra de preços e constroem presença com demanda qualificada.",
        button: "Solicitar Diagnóstico Estratégico",
        problemTitle: "Competência sem percepção continua invisível.",
        problemText:
          "Muitas empresas entregam muito, mas ainda são percebidas como comuns. A AYDAXYS atua no reposicionamento para transformar clareza, presença e percepção em crescimento estruturado.",
        servicesTitle: "Soluções Estratégicas",
        forWhoTitle: "Para quem é",
        forWho:
          "Empresas B2B com bom serviço, visão de crescimento e necessidade de fortalecer presença, autoridade e demanda qualificada.",
        notForTitle: "Não é para",
        notFor:
          "Quem busca fórmula mágica, volume sem estratégia, seguidores vazios ou não está disposto a executar com consistência.",
        finalTitle: "Sua próxima fase começa pelo reposicionamento.",
        finalText:
          "Se sua empresa entrega valor, mas o mercado ainda não percebe, você está competindo por preço quando poderia competir por autoridade.",
      },
      en: {
        label: "Strategic B2B Consultancy",
        title: "Where competence meets real value.",
        desc:
          "B2B companies leaving price wars and building presence with qualified demand.",
        button: "Request Strategic Diagnosis",
        problemTitle: "Competence without perception remains invisible.",
        problemText:
          "Many companies deliver real value but are still perceived as ordinary. AYDAXYS works on repositioning to transform clarity, presence and perception into structured growth.",
        servicesTitle: "Strategic Solutions",
        forWhoTitle: "Who it is for",
        forWho:
          "B2B companies with strong delivery, growth vision and the need to strengthen presence, authority and qualified demand.",
        notForTitle: "Who it is not for",
        notFor:
          "Those looking for magic formulas, volume without strategy, empty followers or no consistent execution.",
        finalTitle: "Your next phase starts with repositioning.",
        finalText:
          "If your company delivers value but the market does not perceive it yet, you are competing on price when you could compete on authority.",
      },
      es: {
        label: "Consultoría Estratégica B2B",
        title: "Donde la competencia encuentra valor real.",
        desc:
          "Empresas B2B que salen de la guerra de precios y construyen presencia con demanda calificada.",
        button: "Solicitar Diagnóstico Estratégico",
        problemTitle: "Competencia sin percepción sigue invisible.",
        problemText:
          "Muchas empresas entregan mucho, pero siguen siendo percibidas como comunes. AYDAXYS trabaja el reposicionamiento para transformar claridad, presencia y percepción en crecimiento estruturado.",
        servicesTitle: "Soluciones Estratégicas",
        forWhoTitle: "Para quién es",
        forWho:
          "Empresas B2B con buen servicio, visión de crescimento e necessidade de fortalecer presença, autoridade e demanda qualificada.",
        notForTitle: "No es para",
        notFor:
          "Quien busca fórmulas mágicas, volumen sin estrategia, seguidores vacíos o no ejecuta con consistencia.",
        finalTitle: "Tu próxima fase empieza con reposicionamiento.",
        finalText:
          "Si tu empresa entrega valor, pero el mercado aún no lo percibe, compites por precio cuando podrías competir por autoridad.",
      },
      it: {
        label: "Consulenza Strategica B2B",
        title: "Dove la competenza incontra valore reale.",
        desc:
          "Aziende B2B che escono dalla guerra dei prezzi e costruiscono presenza con domanda qualificata.",
        button: "Richiedi Diagnosi Strategica",
        problemTitle: "Competenza senza percezione resta invisibile.",
        problemText:
          "Molte aziende offrono valore reale, ma vengono ancora percepite come comuni. AYDAXYS lavora sul riposizionamento per trasformare chiarezza, presenza e percezione in crescita strutturata.",
        servicesTitle: "Soluzioni Strategiche",
        forWhoTitle: "Per chi è",
        forWho:
          "Aziende B2B con un buon servizio, visione di crescita e necessità di rafforzare presenza, autorità e domanda qualificata.",
        notForTitle: "Non è per",
        notFor:
          "Chi cerca formule magiche, volume senza strategia, follower vuoti o non esegue con costanza.",
        finalTitle: "La tua prossima fase inizia dal riposizionamento.",
        finalText:
          "Se la tua azienda offre valore, ma il mercato non lo percepisce ancora, stai competendo sul prezzo quando potresti competere sull'autorità.",
      },
      fr: {
        label: "Conseil Stratégique B2B",
        title: "Là où la compétence rencontre sa vraie valeur.",
        desc:
          "Entreprises B2B qui sortent de la guerre des prix et construisent une présence avec une demande qualifiée.",
        button: "Demander un Diagnostic Stratégique",
        problemTitle: "La compétence sans perception reste invisible.",
        problemText:
          "Beaucoup d’entreprises livrent une vraie valeur, mais restent perçues comme ordinaires. AYDAXYS travaille le repositionnement pour transformer clarté, présence et perception en croissance structurée.",
        servicesTitle: "Solutions Stratégiques",
        forWhoTitle: "Pour qui",
        forWho:
          "Entreprises B2B avec uma vraie expertise, une vision de croissance et le besoin de renforcer présence, autorité et demande qualifiée.",
        notForTitle: "Ce n'est pas pour",
        notFor:
          "Ceux qui cherchent des formules magiques, du volume sans stratégie, des abonnés vides ou aucune exécution constante.",
        finalTitle: "Votre prochaine phase commence par le repositionnement.",
        finalText:
          "Si votre entreprise livre de la valeur, mais que le marché ne la perçoit pas encore, vous êtes en concurrence par le prix au lieu de l’autorité.",
      },
    }),
    []
  );

  const t = texts[lang];

  const services = [
    {
      title: "Diagnóstico",
      content:
        "Análise estratégica da presença, percepção de valor, gargalos invisíveis e oportunidades imediatas de reposicionamento.",
    },
    {
      title: "Áxis",
      content:
        "Estruturação base de posicionamento, clareza estratégica e fortalecimento de presença.",
    },
    {
      title: "Áxis +",
      content:
        "Reposicionamento comercial, geração de demanda qualificada e estrutura inicial de conversão.",
    },
    {
      title: "Áxis Vanguard",
      content:
        "Camada executiva de crescimento, refinamento de percepção e expansão estratégica.",
    },
  ];

  const speakAyda = () => {
    const synth = window.speechSynthesis;
    synth.cancel();

    const utter = new SpeechSynthesisUtterance(
      "Olá visitante, bem vindo à AYDAXYS. Onde a competência encontra valor real. Empresas B2B que saem da guerra de preços e constroem presença com demanda qualificada."
    );

    const voices = synth.getVoices();

    const female =
      voices.find((v) =>
        /female|zira|maria|helena|google português/i.test(v.name)
      ) ||
      voices.find((v) => v.lang.includes("pt")) ||
      voices[0];

    if (female) utter.voice = female;

    utter.lang = "pt-BR";
    utter.rate = 1.02;
    utter.pitch = 1.18;
    utter.volume = 1;

    synth.speak(utter);
  };

  return (
    <main className={`${sans.className} bg-[#0B0B0C] text-[#EDEDED] overflow-x-hidden relative`}>
      
      {/* Grid Tecnológico Sutil */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`, 
          backgroundSize: '48px 48px' 
        }} 
      />

      {/* Mouse Glow Interativo */}
      <div
        className="pointer-events-none fixed z-10 hidden h-80 w-80 rounded-full bg-blue-500/10 blur-3xl md:block"
        style={{
          left: mouse.x - 160,
          top: mouse.y - 160,
        }}
      />

      <div className="fixed inset-0 -z-30 bg-[#0B0B0C]" />

      {/* Glow Azul Profundo Ampliado (Estilo OpenAI, Linear, Stripe) */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {/* Grande esfera central superior */}
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 h-162.5 w-237.5 rounded-full bg-blue-600/15 blur-[140px]" />
        
        {/* Glow assimétrico intermediário */}
        <div className="absolute top-[35%] right-[-15%] h-137.5 w-137.5 rounded-full bg-indigo-500/10 blur-[130px]" />

        {/* Brilho profundo inferior na CTA */}
        <div className="absolute bottom-[8%] left-[5%] h-150 w-175 rounded-full bg-blue-500/12 blur-[150px]" />
      </div>

      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.8)_50%,transparent_100%)]" />

      {/* Partículas sutis */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[15%] top-[18%] h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
        <div className="absolute left-[75%] top-[28%] h-1 w-1 rounded-full bg-white animate-pulse" />
        <div className="absolute left-[48%] top-[72%] h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
        <div className="absolute left-[24%] top-[80%] h-1 w-1 rounded-full bg-white/80 animate-pulse" />
      </div>

      {/* Menu Flutuante com Glassmorphism Real e Brilho Interno */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-full border border-white/8 bg-black/40 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]">
        <div className="mx-auto flex items-center justify-between gap-3 px-6 py-3.5">
          <h1 className={`${serif.className} text-xl tracking-wide bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent`}>
            AYDAXYS
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-md outline-none md:px-4 md:text-sm"
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="it">Italiano</option>
              <option value="fr">Français</option>
            </select>

            <button className="rounded-full border border-white/10 px-3 py-1.5 text-xs hover:bg-white/5 transition md:px-4 md:text-sm">
              <Languages size={16} />
            </button>

            <button
              onClick={() => {
                setAyda(true);
                speakAyda();
              }}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300 hover:bg-blue-500/20 transition md:px-4 md:text-sm font-medium tracking-wide"
            >
              AYDA
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-36 pb-24 text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-5 max-w-2xl text-xs uppercase tracking-[0.24em] text-blue-300/80 md:text-sm"
        >
          {t.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`${serif.className} max-w-5xl text-4xl leading-tight md:text-7xl bg-linear-to-b from-white via-[#EDEDED] to-white/50 bg-clip-text text-transparent`}
        >
          {t.title}
        </motion.h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {t.desc}
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          {t.button}
        </a>

        {/* Elemento 3D / Painel Holográfico Flutuante Interativo */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 15, rotateY: -8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 12, rotateY: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative mx-auto mt-20 w-full max-w-md rounded-2xl border border-blue-500/20 bg-blue-950/5 p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_40px_rgba(59,130,246,0.15),inset_0_1px_1px_rgba(255,255,255,0.05)] text-left"
        >
          {/* Brilho interno na extremidade superior */}
          <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-blue-400/40 to-transparent" />

          <div className="mb-5 flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400/80">AYDAXYS ENGINE // PLATFORM_STATUS</span>
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6] animate-pulse" />
          </div>

          <div className="space-y-4 font-sans">
            <div className="flex justify-between border-b border-white/4 pb-3 items-center">
              <span className="text-white/50 text-xs tracking-wide">Demanda Média</span>
              <span className="font-mono text-blue-400 font-semibold text-sm tracking-wider">+43 Leads Qualificados</span>
            </div>
            <div className="flex justify-between border-b border-white/4 pb-3 items-center">
              <span className="text-white/50 text-xs tracking-wide">Performance Comercial</span>
              <span className="font-mono text-blue-400 font-semibold text-sm tracking-wider">+12 Diagnósticos</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-xs tracking-wide">Operações Ativas</span>
              <span className="font-mono text-blue-400 font-semibold text-sm tracking-wider">+4 Empresas em análise</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION REPOSICIONAMENTO */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center relative z-10">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-300/70">
          Reposicionamento
        </p>

        <h3 className={`${serif.className} mt-4 text-4xl md:text-5xl`}>
          {t.problemTitle}
        </h3>

        <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/70">
          {t.problemText}
        </p>
      </section>

      {/* SECTION SOLUÇÕES ESTRATÉGICAS */}
      <section className="mx-auto max-w-7xl px-6 py-24 relative z-10">
        <div className="mb-14 text-center">
          <h3 className={`${serif.className} text-4xl md:text-5xl`}>
            {t.servicesTitle}
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpenCard(openCard === i ? null : i)}
              className="cursor-pointer rounded-3xl border border-white/5 bg-white/2 p-7 shadow-2xl backdrop-blur-xl hover:border-white/10 transition-colors duration-300"
            >
              <h4 className="text-xl font-semibold">{item.title}</h4>

              <AnimatePresence>
                {openCard === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 overflow-hidden text-sm leading-7 text-white/70"
                  >
                    {item.content}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION PARA QUEM É / NÃO É */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 relative z-10">
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          className="rounded-3xl border border-white/5 bg-white/2 p-8 backdrop-blur-xl"
        >
          <h3 className={`${serif.className} text-3xl`}>
            {t.forWhoTitle}
          </h3>
          <p className="mt-5 leading-7 text-white/70">{t.forWho}</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          className="rounded-3xl border border-blue-500/10 bg-blue-500/2 p-8 backdrop-blur-xl"
        >
          <h3 className={`${serif.className} text-3xl`}>
            {t.notForTitle}
          </h3>
          <p className="mt-5 leading-7 text-white/70">{t.notFor}</p>
        </motion.div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-5xl px-6 py-24 relative z-10">
        <div className="rounded-3xl border border-white/5 bg-white/2 px-8 py-16 text-center backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_50px_rgba(59,130,246,0.1),inset_0_1px_1px_rgba(255,255,255,0.02)]">
          <h2 className={`${serif.className} text-4xl md:text-5xl`}>
            {t.finalTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            {t.finalText}
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition hover:scale-105 shadow-[0_0_35px_rgba(59,130,246,0.45)]"
          >
            {t.button}
          </a>
        </div>
      </section>

      {/* ASSISTENTE AYDA IA */}
      <AnimatePresence>
        {ayda && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 35 }}
            className="fixed bottom-6 right-4 z-50 w-[calc(100%-2rem)] max-w-80 rounded-3xl border border-blue-500/20 bg-black/90 p-6 backdrop-blur-xl md:right-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <h4 className="font-semibold tracking-wide text-sm text-blue-400">AYDA IA</h4>

              <button onClick={() => setAyda(false)} className="text-white/70 hover:text-white transition">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <button
                onClick={speakAyda}
                className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5 transition text-white/80 hover:text-white"
              >
                <Volume2 size={18} className="text-blue-400" />
                Ler Página
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5 transition text-white/80 hover:text-white">
                <Accessibility size={18} className="text-blue-400" />
                Libras
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5 transition text-white/80 hover:text-white"
              >
                <MessageCircle size={18} className="text-blue-400" />
                Suporte
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center relative z-10 text-sm text-white/60">
        <p>AYDAXYS © 2026</p>
        <p className="mt-2 text-white/40">
          Posicionamento • Conversão • Autoridade
        </p>
      </footer>
    </main>
  );
}