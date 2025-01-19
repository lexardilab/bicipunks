import "../globals.css";





export const metadata = {
  title: "Bicipunks",
  description: "All Cyclist Are Beautiful",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
