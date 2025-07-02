import type { Metadata } from "next";
import { Roboto, Poppins, Open_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

// Police pour les titres
const roboto = Roboto({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

// Police pour les textes d'affichage
const poppins = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Police pour le corps du texte
const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Police monospace pour le code
const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sébastien Petaccia Portfolio",
  description: "Portfolio professionnel de Sébastien Petaccia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${roboto.variable} ${poppins.variable} ${openSans.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </html>
  );
}
