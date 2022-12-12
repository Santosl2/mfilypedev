import { Header } from "@/components/Header/Header";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="bg-theme-secondary text-white">
      <Header />
      <main>{children}</main>
    </body>
  );
}
