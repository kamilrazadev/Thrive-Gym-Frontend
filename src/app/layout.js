import { Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Thrive Fitness — Where Champions Are Made",
  description:
    "Join Thrive Fitness and transform your body, mind, and life. World-class trainers, premium equipment, and a community that pushes you to your limits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${bebasNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
