import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { generateChatbaseHash } from "@/lib/chatbase";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Lantai Tiga",
  description: "Lantai Tiga - Your Trusted Partner in IT Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // You can replace this with actual user ID from your auth system
  const userId = 'default-user';
  const verificationHash = generateChatbaseHash(userId);

  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-bg-primary text-text-primary">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <Script id="chatbase-config" strategy="afterInteractive">
          {`
            window.chatbaseConfig = {
              chatbotId: "4TpO8ufS6T1n7zQeJ-RUt",
              domain: "www.chatbase.co",
              userId: "${userId}",
              signature: "${verificationHash}"
            };
          `}
        </Script>
        <Script 
          src="https://www.chatbase.co/embed.min.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
