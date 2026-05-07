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
        methodTitle: "Método AXYS",
        methodText:
          "Reposicionamento através de três eixos fundamentais: cultura, estratégia e identidade.",
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
        methodTitle: "AXYS Method",
        methodText:
          "Repositioning through three fundamental axes: culture, strategy and identity.",
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
          "Muchas empresas entregan mucho, pero siguen siendo percibidas como comunes. AYDAXYS trabaja el reposicionamiento para transformar claridad, presencia y percepción en crecimiento estructurado.",
        methodTitle: "Método AXYS",
        methodText:
          "Reposicionamiento a través de tres ejes fundamentales: cultura, estrategia e identidad.",
        servicesTitle: "Soluciones Estratégicas",
        forWhoTitle: "Para quién es",
        forWho:
          "Empresas B2B con buen servicio, visión de crecimiento y necesidad de fortalecer presencia, autoridad y demanda calificada.",
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
        methodTitle: "Metodo AXYS",
        methodText:
          "Riposizionamento attraverso tre assi fondamentali: cultura, strategia e identità.",
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
        methodTitle: "Méthode AXYS",
        methodText:
          "Repositionnement à travers trois axes fondamentaux : culture, stratégie et identité.",
        servicesTitle: "Solutions Stratégiques",
        forWhoTitle: "Pour qui",
        forWho:
          "Entreprises B2B avec une vraie expertise, une vision de croissance et le besoin de renforcer présence, autorité et demande qualifiée.",
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

  const axis = [
    {
      title: "Áxis I — Cultura",
      text: "Alinhamento interno, visão, direção e maturidade estratégica.",
    },
    {
      title: "Áxis II — Estratégia",
      text: "Diferenciação, modelo de crescimento e proposta de valor.",
    },
    {
      title: "Áxis III — Identidade",
      text: "Percepção de mercado, comunicação e presença de autoridade.",
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
    <main className={`${sans.className} bg-[#0B0B0C] text-[#EDEDED] overflow-x-hidden`}>
      <div
        className="pointer-events-none fixed z-0 hidden h-80 w-80 rounded-full bg-blue-500/10 blur-3xl md:block"
        style={{
          left: mouse.x - 160,
          top: mouse.y - 160,
        }}
      />

      <div className="fixed inset-0 -z-30 bg-[#0B0B0C]" />

      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_26%)]" />

      <div className="fixed inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.8)_50%,transparent_100%)]" />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[15%] top-[18%] h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
        <div className="absolute left-[75%] top-[28%] h-1 w-1 rounded-full bg-white animate-pulse" />
        <div className="absolute left-[48%] top-[72%] h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
        <div className="absolute left-[24%] top-[80%] h-1 w-1 rounded-full bg-white/80 animate-pulse" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0B0C]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-6">
          <h1 className={`${serif.className} text-xl tracking-wide`}>
            AYDAXYS
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="rounded-full border border-white/15 bg-[#0B0B0C] px-3 py-2 text-xs text-white md:px-4 md:text-sm"
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="it">Italiano</option>
              <option value="fr">Français</option>
            </select>

            <button className="rounded-full border border-white/15 px-3 py-2 text-xs hover:bg-white/10 transition md:px-4 md:text-sm">
              <Languages size={16} />
            </button>

            <button
              onClick={() => {
                setAyda(true);
                speakAyda();
              }}
              className="rounded-full border border-blue-400/40 px-3 py-2 text-xs hover:bg-blue-500/10 transition md:px-4 md:text-sm"
            >
              AYDA
            </button>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
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
          className={`${serif.className} max-w-5xl text-4xl leading-tight md:text-7xl`}
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
          className="mt-10 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-105 shadow-[0_0_25px_rgba(59,130,246,0.35)]"
        >
          {t.button}
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
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

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/70">
            Estrutura
          </p>

          <h3 className={`${serif.className} mt-4 text-4xl md:text-5xl`}>
            {t.methodTitle}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            {t.methodText}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {axis.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
            >
              <h4 className={`${serif.className} text-2xl`}>
                {item.title}
              </h4>
              <p className="mt-5 leading-7 text-white/65">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <h3 className={`${serif.className} text-4xl md:text-5xl`}>
            {t.servicesTitle}
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpenCard(openCard === i ? null : i)}
              className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-xl"
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

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className={`${serif.className} text-3xl`}>
            {t.forWhoTitle}
          </h3>
          <p className="mt-5 leading-7 text-white/70">{t.forWho}</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="rounded-3xl border border-blue-400/20 bg-blue-500/5 p-8 backdrop-blur-xl"
        >
          <h3 className={`${serif.className} text-3xl`}>
            {t.notForTitle}
          </h3>
          <p className="mt-5 leading-7 text-white/70">{t.notFor}</p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28 pt-10 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-14 backdrop-blur-xl">
          <h3 className={`${serif.className} text-4xl md:text-5xl`}>
            {t.finalTitle}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            {t.finalText}
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold text-white transition hover:scale-105 shadow-[0_0_25px_rgba(59,130,246,0.45)]"
          >
            {t.button}
          </a>
        </div>
      </section>

      <AnimatePresence>
        {ayda && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 35 }}
            className="fixed bottom-6 right-4 z-50 w-[calc(100%-2rem)] max-w-80 rounded-3xl border border-blue-400/20 bg-black/90 p-6 backdrop-blur-xl md:right-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h4 className="font-semibold">AYDA IA</h4>

              <button onClick={() => setAyda(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <button
                onClick={speakAyda}
                className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/10"
              >
                <Volume2 size={18} />
                Ler Página
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/10">
                <Accessibility size={18} />
                Libras
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Suporte
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/70">
        <p>AYDAXYS © 2026</p>
        <p className="mt-2 text-white/50">
          Posicionamento • Conversão • Autoridade
        </p>
      </footer>
    </main>
  );
}