import "../globals.css";
import Header from "@/components/Header"
export const metadata = {
  title: "All Cyclist Are Beautiful",
  description: "All Cyclist Are Beautiful",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
