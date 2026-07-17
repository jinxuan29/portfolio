import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { TerminalProvider } from "../components/TerminalContext";
import TerminalHistory from "../components/TerminalHistory";
import TerminalBar from "../components/TerminalBar";


const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yen Jin Xuan Portfolio",
  description: "Cybersecurity portfolio, CTF write-ups, and vulnerability research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} h-screen w-screen flex flex-col`}>
        <TerminalProvider>
          <main className="grow overflow-y-auto p-8 border-b border-nord-3 pb-32 custom-scrollbar">
            {children}
            <TerminalHistory />
          </main>
          <TerminalBar />
        </TerminalProvider>
      </body>
    </html>
  );
}