import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Путь России",
  description: "Проект для Хакатона",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
