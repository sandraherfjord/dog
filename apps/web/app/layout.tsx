import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Web App",
  description: "Dog lab web app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
