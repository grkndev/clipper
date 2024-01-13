import { DM_Sans, Inter, Kanit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-tema px-32">
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  );
}