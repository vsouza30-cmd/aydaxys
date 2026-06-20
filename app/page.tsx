"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accessibility,
  Volume2,
  MessageCircle,
  X, Search, 
} from "lucide-react";
import { Syne, Inter } from "next/font/google";

const heading = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const whatsappLink =
  "https://wa.me/5541987268822?text=Olá,%20quero%20entender%20como%20melhorar%20meu%20posicionamento%20com%20a%20AYDAXYS";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [ayda, setAyda] = useState(false);
 const [openCard, setOpenCard] =
  useState<number | null>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener(
        "mousemove",
        move
      );
    };
  }, []);

  const t = {
    label: "Consultoria Estratégica B2B",

    title:
      "Onde a competência encontra valor real.",

    desc:
      "A evolução do B2B: como romper o ciclo da guerra de preços e consolidar sua presença com demanda qualificada de alto valor.",

    button:
      "Solicitar Diagnóstico Estratégico",

    problemTitle:
      "Competência sem percepção continua invisível.",

    problemText:
      "Muitas empresas entregam muito, mas ainda são percebidas como comuns. A AYDAXYS atua no reposicionamento para transformar clareza, presença e percepção em crescimento estruturado.",

    servicesTitle:
      "Soluções Estratégicas",

    forWhoTitle:
  "Para quem é",

forWho:
  "• Escritórios de advocacia\n• Consultorias especializadas\n• Clínicas odontológicas\n• Clínicas e hospitais veterinários\n• Empresas do agronegócio\n• Indústrias e negócios B2B\n• Empresas de tecnologia\n• Concessionárias e revendas de veículos\n• Empresas exportadoras\n• Negócios que buscam reconhecimento nacional ou internacional",

notForTitle:
  "Não é para",

notFor:
  "Empresas que procuram fórmulas mágicas, crescimento sem estratégia, seguidores sem relevância, resultados imediatos sem execução ou ações isoladas sem visão de longo prazo. A AYDAXYS não trabalha com métricas de vaidade, mas com posicionamento, autoridade, diferenciação e construção de valor real.",

    finalTitle:
      "Da autoridade local ao reconhecimento internacional.",

    finalText:
      "Posicionamos empresas para serem percebidas pelo mercado, por investidores, parceiros estratégicos e novas oportunidades de expansão.",
  };

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
      "Olá visitante, bem vindo à EYDAXIS. Onde a competência encontra valor real. Empresas B2B que saem da guerra de preços e constroem presença com demanda qualificada."
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
    <main className={`${sans.className} bg-[#FAFAFA] text-[#111111] overflow-x-hidden`}>

      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-6">
          <h1  className={`${heading.className} text-xl tracking-[0.25em]`}>
            A Y D A X Y S
          </h1>

          <div className="flex flex-wrap items-center gap-2">

  <a
    href="/"
    className="rounded-full border border-black/15 px-4 py-2 text-xs hover:bg-black/10 transition md:text-sm"
  >

    AYDA
  </a>
  <a
  href="https://www.linkedin.com/in/aydaxys?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-black/15 px-4 py-2 text-xs hover:bg-black/10 transition md:text-sm"
>
  LinkedIn
</a>
<a
  href="/blog"
  className="rounded-full border border-black/15 px-4 py-2 text-xs hover:bg-black/10 transition md:text-sm"
>
  Blog
</a>
         </div>
        </div>
      </header>

  <section className="relative overflow-hidden flex flex-col items-center justify-center px-6 py-16 text-center">

  <motion.p
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    className="mb-5 max-w-2xl text-xs uppercase tracking-[0.24em] text-blue-600 md:text-sm"
  >
    {t.label}
  </motion.p>

  <motion.h2
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className={`${heading.className} max-w-5xl text-4xl leading-tight md:text-7xl`}
  >
    {t.title}
  </motion.h2>

  <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
    {t.desc}
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-6">
  <a
    href="/diagnostico"
    className="rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold text-white transition hover:scale-105"
  >
    Solicitar Diagnóstico Gratuito
  </a>

  <a
    href="/projetos-digitais"
    className="rounded-full border border-black/10 px-8 py-4 text-sm font-semibold text-black transition hover:bg-black/5"
  >
    Conhecer Projetos Digitais
  </a>
</div>

</section>
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-300/70">
          Reposicionamento
        </p>

        <h3 className={`${heading.className} mt-4 text-4xl md:text-5xl`}>
          {t.problemTitle}
        </h3>

        <p className="mx-auto mt-4 max-w-3xl leading-8 text-black/70">
          {t.problemText}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16                                                   ">
        <div className="mb-14 text-center">
          <h3 className={`${heading.className} text-4xl md:text-5xl`}>
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
              className="cursor-pointer rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <h4 className="text-xl font-semibold">{item.title}</h4>

              <AnimatePresence>
                {openCard === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 overflow-hidden text-sm leading-7 text-black/70"
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
          className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
        >
          <h3 className={`${heading.className} text-3xl`}>
            {t.forWhoTitle}
          </h3>
          <p className="mt-5 leading-7 text-black/70">{t.forWho}</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
        >
          <h3 className={`${heading.className} text-3xl`}>
            {t.notForTitle}
          </h3>
          <p className="mt-5 leading-7 text-black/70">{t.notFor}</p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28 pt-10 text-center">
        <div className="rounded-[32px] border border-black/5 bg-white px-10 py-16 shadow-xl">
          <h3 className={`${heading.className} text-4xl md:text-5xl`}>
            {t.finalTitle}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-black/70">
            {t.finalText}
          </p>

          <a
  href="/diagnostico"
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
            className="fixed bottom-6 right-4 z-50 w-[calc(100%-2rem)] max-w-80 rounded-3xl border border-black/10 bg-white p-6 shadow-2xl"
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
                className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-gray-100"
              >
                <Volume2 size={18} />
                Ler Página
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-gray-100">
                <Accessibility size={18} />
                Libras
              </button>

              <a
                href="/diagnostico"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-gray-100"
              >
                <MessageCircle size={18} />
                Suporte
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-black/10 py-10 text-center text-sm text-black/70">
        <p>AYDAXYS © 2026</p>
        <p className="mt-2 text-black/50">
          Posicionamento • Conversão • Autoridade
        </p>
      </footer>
    </main>
  );
}
