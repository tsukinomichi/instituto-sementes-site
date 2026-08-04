import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-editorial", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://instituto-sementes-designs.victorgabrielo964295.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Instituto Sementes da Sustentabilidade — Propostas visuais",
  description: "Duas propostas de Home para o Instituto Sementes da Sustentabilidade.",
  openGraph: {
    title: "Instituto Sementes da Sustentabilidade",
    description: "Cultivamos futuros que florescem juntos.",
    images: [{ url: `${siteUrl}/og.png`, width: 1733, height: 909, alt: "Instituto Sementes da Sustentabilidade" }],
  },
  twitter: { card: "summary_large_image", images: [`${siteUrl}/og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geist.variable} ${cormorant.variable}`}>{children}</body></html>;
}
