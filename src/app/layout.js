
import { Geist, Geist_Mono } from "next/font/google";

import NavBar from "@/components/NavBar";
import StoreProvider from "./StoreProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Expense Tracker",
  description: "User can track their daily expenses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        <StoreProvider>
        <NavBar />
          {children}
          </StoreProvider>
        
      </body>
    </html>
  );
}
