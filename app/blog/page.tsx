export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-blue-300/70">
            AYDAXYS
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Blog Tático para empresas que buscam crescimento sustentável
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            Insights sobre posicionamento, autoridade, percepção de valor,
            demanda qualificada e crescimento empresarial para líderes que buscam resultados reais.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <a
            href="/blog/como-sair-da-guerra-de-precos"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-400/40"
          >
            <h2 className="text-2xl font-semibold">
              Como sair da guerra de preços e aumentar a percepção de valor
            </h2>

            <p className="mt-4 text-white/70">
              Empresas excelentes continuam perdendo margem porque o mercado
              não percebe o valor que entregam. Entenda como sair dessa armadilha.
            </p>
          </a>

          <a
            href="/blog/autoridade-empresarial"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-400/40"
          >
            <h2 className="text-2xl font-semibold">
              Autoridade empresarial não é marketing
            </h2>

            <p className="mt-4 text-white/70">
              Entenda por que empresas fortes são percebidas de forma
              diferente pelo mercado. Autoridade é a chave para reduzir objeções e fortalecer negociações.
            </p>
          </a>

        </div>
      </section>
    </main>
  );
}