"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Diagnostico() {
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const data = {
      nome: (form.nome as HTMLInputElement).value,
      empresa: (form.empresa as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      telefone: (form.telefone as HTMLInputElement).value,
      segmento: (form.segmento as HTMLInputElement).value,
      faturamento: (form.faturamento as HTMLInputElement).value,
      desafio: (form.desafio as HTMLTextAreaElement).value,
    };

    const { error } = await supabase
    .from("diagnosticos")
    .insert([data]);

    setLoading(false);

    if (!error) {
      setEnviado(true);
      form.reset();
    } else {
      console.log(error)
      alert(JSON.stringify(error));
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-black">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-blue-600">
            AYDAXYS
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Diagnóstico Estratégico
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-black/70">
            Responda as perguntas abaixo e receba uma análise inicial
            sobre posicionamento, autoridade e oportunidades de crescimento.
          </p>
        </div>

        {enviado ? (
          <div className="mt-16 rounded-3xl border border-green-500/20 bg-green-500/10 p-10 text-center">
            <h2 className="text-3xl font-semibold">
              Diagnóstico enviado com sucesso.
            </h2>

            <p className="mt-4 text-black/70">
              Recebemos suas informações e entraremos em contato.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-16 space-y-6 rounded-3xl border border-black/10 bg-white p-10 shadow-lg"
          >
            <input
              name="nome"
              placeholder="Nome"
              required
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />

            <input
              name="empresa"
              placeholder="Empresa"
              required
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />

            <input
              name="email"
              type="email"
              placeholder="E-mail"
              required
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />

            <input
              name="telefone"
              placeholder="Telefone"
              required
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 text-black"
            />

            <input
              name="segmento"
              placeholder="Segmento"
              required
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 text-black"
            />

            <input
              name="faturamento"
              placeholder="Faturamento mensal"
              required
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-4"
            />

            <textarea
              name="desafio"
              rows={5}
              placeholder="Qual é o principal desafio da empresa atualmente?"
              required
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 text-black"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-blue-500 px-8 py-4 font-medium text-white transition hover:scale-105 shadow-[0_0_25px_rgba(59,130,246,0.35)]"
            >
              {loading
                ? "Enviando..."
                : "Receber Diagnóstico Estratégico"}
            </button>
          </form>
        )}

        <div className="mt-12 text-center">
          <a
            href="/"
            className="text-black/60 transition hover:text-black/80"
          >
            ← Voltar para página inicial
          </a>
        </div>
      </section>
    </main>
  );
}