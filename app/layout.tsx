import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AYDAXYS",
  description:
    "Consultoria estratégica para empresas B2B que buscam presença, percepção de valor e demanda qualificada.",
  keywords: [
    "consultoria estratégica",
    "B2B",
    "posicionamento",
    "branding",
    "demanda qualificada",
    "AYDAXYS",
    "reposicionamento empresarial",
  ],
  authors: [{ name: "AYDAXYS" }],
  creator: "AYDAXYS",
  openGraph: {
    title: "AYDAXYS",
    description:
      "Onde a competência encontra valor real.",
    url: "https://north-signal-chi.vercel.app",
    siteName: "AYDAXYS",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white`}>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RXCC50JJSK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RXCC50JJSK');
          `}
        </Script>
      </body>
    </html>
  );
}