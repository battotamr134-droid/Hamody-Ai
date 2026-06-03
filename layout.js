import "./globals.css";

export const metadata = {
  title: "Hamody AI",
  description: "Programming Educational Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        {children}
      </body>
    </html>
  );
}