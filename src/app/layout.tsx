import { Header } from "@/components/Header/Header";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="bg-theme-secondary text-white">
      <Header />
      <main className="max-w-5xl m-auto grid place-items-center h-screen">
        {children}
      </main>
    </body>
  );
}
