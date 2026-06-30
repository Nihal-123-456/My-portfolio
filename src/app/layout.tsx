import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kazi Nihal Ahmed — Backend-Focused Web Developer | Django & REST API Specialist",
  description:
    "Kazi Nihal Ahmed is a backend-focused web developer specializing in Django, REST APIs, SQL database design, and modern web technologies. Currently building production SaaS at Recentriq LLC.",
  keywords: [
    "Kazi Nihal Ahmed",
    "Backend Developer",
    "Django Developer",
    "REST API",
    "Web Developer Dhaka",
    "Next.js Developer Bangladesh",
    "Software Engineer Portfolio",
    "Recentriq",
  ],
  authors: [{ name: "Kazi Nihal Ahmed" }],
  creator: "Kazi Nihal Ahmed",
  openGraph: {
    title: "Kazi Nihal Ahmed — Backend-Focused Web Developer",
    description:
      "Backend-focused web developer specializing in Django, REST APIs, and scalable full-stack applications.",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kazi Nihal Ahmed — Backend-Focused Web Developer",
    description:
      "Backend-focused web developer specializing in Django, REST APIs, and scalable full-stack applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
