"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
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
  "https://wa.me/5541987268822?text=Olá,%20quero%20entender%20como%20melhorar%20meu%20posicionamento%20com%20a%20North%20Signal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<Lang>("pt");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [ayda, setAyda] = useState(false);
  const [openCard, setOpenCard] = useState<number | null>(null);

  useEffect(() => {
    const audio = new Audio("/intro.mp3");
    audio.volume = 0.45;
    audio.play().catch(() => {});

    const timer = setTimeout(() => setLoading(false), 2200);

    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  const texts = useMemo(
    () => ({
      pt: {
        pain:
          "Empresas boas perdem clientes todos os dias por não parecerem valiosas.",
        title: "Onde autoridade encontra crescimento.",
        desc:
          "Transformamos competência real em valor percebido, presença premium e demanda qualificada.",
        button: "Quero meu diagnóstico estratégico",
        servicesTitle: "Soluções Estratégicas",
        forWhoTitle: "Para quem é",
        forWho:
          "Empresas B2B que têm um bom serviço, querem crescer, sabem que poderiam vender mais e ainda não conseguem gerar demanda consistente.",
        notForTitle: "Não é para",
        notFor:
          "Quem busca fórmula mágica, seguidores vazios, compara apenas preço ou não está disposto a executar com consistência.",
        finalTitle: "Sua próxima fase começa agora.",
        finalText:
          "Se sua empresa entrega muito, mas ainda não parece valer o que merece, você está perdendo mercado todos os dias.",
      },
      en: {
        pain:
          "Great companies lose clients every day because they do not look valuable enough.",
        title: "Where authority meets growth.",
        desc:
          "We transform real competence into perceived value, premium presence and qualified demand.",
        button: "Request strategic diagnosis",
        servicesTitle: "Strategic Solutions",
        forWhoTitle: "Who it is for",
        forWho:
          "B2B companies with strong delivery, growth ambition and the need to generate consistent demand.",
        notForTitle: "Who it is not for",
        notFor:
          "Those looking for magic formulas, empty followers, price-only comparisons or no execution.",
        finalTitle: "Your next phase starts now.",
        finalText:
          "If your company delivers real value but does not look as valuable as it should, you are losing market every day.",
      },
      es: {
        pain:
          "Buenas empresas pierden clientes todos los días por no parecer valiosas.",
        title: "Donde la autoridad encuentra crecimiento.",
        desc:
          "Transformamos competencia real en valor percibido, presencia premium y demanda calificada.",
        button: "Quiero mi diagnóstico estratégico",
        servicesTitle: "Soluciones Estratégicas",
        forWhoTitle: "Para quién es",
        forWho:
          "Empresas B2B con buen servicio, deseo de crecer y necesidad de generar demanda consistente.",
        notForTitle: "No es para",
        notFor:
          "Quien busca fórmulas mágicas, seguidores vacíos, compara solo precio o no ejecuta.",
        finalTitle: "Tu próxima fase empieza ahora.",
        finalText:
          "Si tu empresa entrega mucho, pero no parece valer lo que merece, pierde mercado todos los días.",
      },
      it: {
        pain:
          "Le buone aziende perdono clienti ogni giorno perché non sembrano abbastanza preziose.",
        title: "Dove l'autorità incontra la crescita.",
        desc:
          "Trasformiamo competenza reale in valore percepito, presenza premium e domanda qualificata.",
        button: "Richiedi diagnosi strategica",
        servicesTitle: "Soluzioni Strategiche",
        forWhoTitle: "Per chi è",
        forWho:
          "Aziende B2B con un buon servizio, ambizione di crescita e bisogno di domanda consistente.",
        notForTitle: "Non è per",
        notFor:
          "Chi cerca formule magiche, follower vuoti, confronta solo il prezzo o non esegue.",
        finalTitle: "La tua prossima fase inizia ora.",
        finalText:
          "Se la tua azienda offre molto, ma non sembra valere ciò che merita, perde mercato ogni giorno.",
      },
      fr: {
        pain:
          "De bonnes entreprises perdent des clients chaque jour parce qu'elles ne semblent pas assez précieuses.",
        title: "Là où l'autorité rencontre la croissance.",
        desc:
          "Nous transformons la compétence réelle en valeur perçue, présence premium et demande qualifiée.",
        button: "Demander un diagnostic stratégique",
        servicesTitle: "Solutions Stratégiques",
        forWhoTitle: "Pour qui",
        forWho:
          "Entreprises B2B avec une vraie expertise, une ambition de croissance et un besoin de demande régulière.",
        notForTitle: "Ce n'est pas pour",
        notFor:
          "Ceux qui cherchent des formules magiques, des abonnés vides, comparent seulement le prix ou n'exécutent pas.",
        finalTitle: "Votre prochaine phase commence maintenant.",
        finalText:
          "Si votre entreprise livre beaucoup, mais ne paraît pas valoir ce qu'elle mérite, elle perd du marché chaque jour.",
      },
    }),
    []
  );

  const t = texts[lang];

  const services = [
    {
      title: "Diagnóstico",
      content: "Clareza total sobre por que você não vende mais.",
    },
    {
      title: "Áxis",
      content:
        "Base estratégica para posicionamento premium e autoridade real.",
    },
    {
      title: "Áxis +",
      content:
        "Transformação da presença em geração de leads qualificados.",
    },
    {
      title: "Áxis Vanguard",
      content:
        "Crescimento estruturado com percepção de alto valor e escala.",
    },
  ];

  const speakAyda = () => {
    const synth = window.speechSynthesis;
    synth.cancel();

    const utter = new SpeechSynthesisUtterance(
      "Olá visitante, bem vindo à North Signal. Onde autoridade encontra crescimento. Transformamos competência real em valor percebido, presença premium e demanda qualificada."
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
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              className={`${serif.className} text-5xl md:text-7xl tracking-wide text-white`}
            >
              North Signal
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`${sans.className} bg-black text-white overflow-x-hidden`}>
        <div
          className="pointer-events-none fixed z-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
          style={{
            left: mouse.x - 160,
            top: mouse.y - 160,
          }}
        />

        <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]" />

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[15%] top-[18%] h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          <div className="absolute left-[75%] top-[28%] h-1 w-1 rounded-full bg-white animate-pulse" />
          <div className="absolute left-[48%] top-[72%] h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <div className="absolute left-[24%] top-[80%] h-1 w-1 rounded-full bg-white/80 animate-pulse" />
        </div>

        <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <h1 className={`${serif.className} text-xl`}>North Signal</h1>

            <div className="flex items-center gap-3">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Lang)}
                className="rounded-full border border-white/15 bg-black px-4 py-2 text-sm"
              >
                <option value="pt">Português</option>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="it">Italiano</option>
                <option value="fr">Français</option>
              </select>

              <button className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 transition">
                <Languages size={16} />
              </button>

              <button
                onClick={() => {
                  setAyda(true);
                  speakAyda();
                }}
                className="rounded-full border border-blue-400/40 px-4 py-2 text-sm hover:bg-blue-500/10 transition"
              >
                AYDA
              </button>
            </div>
          </div>
        </header>

        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mb-5 max-w-2xl text-sm uppercase tracking-[0.22em] text-blue-300/80"
          >
            {t.pain}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${serif.className} max-w-5xl text-5xl leading-tight md:text-7xl`}
          >
            {t.title}
          </motion.h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
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

        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/70">
            Jornada da Marca
          </p>

          <h3 className={`${serif.className} mt-4 text-4xl md:text-5xl`}>
            4 meses construindo algo raro.
          </h3>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              "Mês 1 — Estrutura estratégica da marca",
              "Mês 2 — Serviços, nomes e valor percebido",
              "Mês 3 — Posicionamento e narrativa",
              "Mês 4 — Site premium e expansão",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                {item}
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
              className="fixed bottom-6 right-6 z-50 w-80 rounded-3xl border border-blue-400/20 bg-black/90 p-6 backdrop-blur-xl"
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

        <footer className="border-t border-white/10 py-10 text-center text-sm text-white/45">
          <p>North Signal © 2026</p>
          <p className="mt-2 text-white/35">
            Posicionamento • Conversão • Autoridade
          </p>
        </footer>
      </main>
    </>
  );
}