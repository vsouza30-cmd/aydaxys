export default function ProjetosDigitais() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-white/50">
            AYDAXYS
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Projetos Digitais
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            Desenvolvemos estruturas digitais sob medida para fortalecer
            autoridade, transmitir confiança e gerar novas oportunidades
            de negócio.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Site Institucional Premium
            </h2>

            <p className="text-white/70">
              Ideal para empresas que precisam estabelecer presença
              digital profissional e transmitir credibilidade ao mercado.
            </p>

            <ul className="mt-6 space-y-3 text-white/70">
              <li>• Design personalizado</li>
              <li>• Responsivo para celular</li>
              <li>• Integração com WhatsApp</li>
              <li>• SEO técnico</li>
              <li>• Alta performance</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Site Empresarial Premium
            </h2>

            <p className="text-white/70">
              Estrutura mais robusta para empresas que desejam fortalecer
              posicionamento, autoridade e presença digital.
            </p>

            <ul className="mt-6 space-y-3 text-white/70">
              <li>• Múltiplas páginas</li>
              <li>• Estrutura de conversão</li>
              <li>• Analytics</li>
              <li>• SEO avançado</li>
              <li>• Performance otimizada</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Plataforma de Autoridade & Conversão
            </h2>

            <p className="text-white/70">
              Projeto estratégico para empresas que desejam crescimento,
              fortalecimento de marca e geração constante de oportunidades.
            </p>

            <ul className="mt-6 space-y-3 text-white/70">
              <li>• Posicionamento digital</li>
              <li>• Estratégia de autoridade</li>
              <li>• Estrutura completa de conversão</li>
              <li>• Analytics avançado</li>
              <li>• Crescimento sustentável</li>
            </ul>
          </div>

        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="text-3xl font-semibold">
            Seu negócio transmite a confiança que deveria?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Realizamos um diagnóstico estratégico para identificar
            oportunidades de posicionamento, presença digital e
            crescimento da sua empresa.
          </p>

          <a
            href="https://wa.me/5541999999999"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-medium text-black transition hover:opacity-90"
          >
            Solicitar Diagnóstico Estratégico
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="text-white/60 transition hover:text-white"
          >
            ← Voltar para página inicial
          </a>
        </div>
      </section>
    </main>
  );
}