import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Cultivo - Agriculture Website",
  description: "Transform your farming with cutting-edge agricultural technology and sustainable practices. Join thousands of farmers using our platform to increase productivity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-manrope antialiased`}>
        {children}
      </body>
    </html>
  );
}
