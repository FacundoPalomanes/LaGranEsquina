import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); // esto es para cambiar la fuente, se puede cargar cualquiera del google fonts

export const metadata: Metadata = {
  title: "La Gran Esquina",
  description: "here should be a description",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body className={inter.className}>
        <header className="inline-flex m-5 ">
          <h1 className="inline-flex m-5 ">Home</h1>
          <h1 className="inline-flex m-5 ">Cotizador</h1>
          <h1 className="inline-flex m-5 ">Servicios</h1>
          <h1 className="inline-flex m-5 ">Contactenos</h1>
        </header>
        {children}
        <footer>
          <p>&copy; 2023 La Gran Esquina Company</p>
        </footer>
      </body>
    </html>
  );
}
