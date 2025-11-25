import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Salient — AI agents for US consumer lenders",
  description:
    "Salient builds compliance-first AI agents that automate collections, customer service, disputes, and total-loss workflows for US consumer lenders.",
  metadataBase: new URL("https://salient.com"),
  openGraph: {
    title: "Salient — AI agents for US consumer lenders",
    description:
      "Compliance-first AI agents for collections, customer service, disputes, and total-loss built for US consumer lenders.",
    url: "https://salient.com",
    siteName: "Salient",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salient — AI agents for US consumer lenders",
    description:
      "Compliance-first AI agents for collections, customer service, disputes, and total-loss built for US consumer lenders.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen antialiased text-neutral-900 bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
