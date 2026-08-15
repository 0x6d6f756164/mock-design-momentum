import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://momentum.example.com"),
  title: "Momentum | Growth Marketing Agency",
  description:
    "Momentum — a growth marketing agency that turns spend into revenue.",
  openGraph: {
    title: "Momentum | Growth Marketing Agency",
    description:
      "Momentum — a growth marketing agency that turns spend into revenue.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentum | Growth Marketing Agency",
    description:
      "Momentum — a growth marketing agency that turns spend into revenue.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
