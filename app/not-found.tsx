export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FAFAFA] px-6">
      <div className="max-w-2xl text-center">
        <span className="text-sm uppercase tracking-[0.3em] text-blue-600">
          AYDAXYS
        </span>

        <h1 className="mt-6 text-7xl font-bold text-black">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-black">
          Página não encontrada
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-black/70">
          A página que você procura não existe, foi removida ou o endereço digitado está incorreto.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/"
            className="rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold text-white transition hover:scale-105"
          >
            Voltar para Home
          </a>

          <a
            href="/diagnostico"
            className="rounded-full border border-black/10 px-8 py-4 text-sm font-semibold text-black transition hover:bg-black/5"
          >
            Solicitar Diagnóstico
          </a>
        </div>
      </div>
    </main>
  );
}