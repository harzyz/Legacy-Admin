import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Sidebar from "@/components/sidebar/sidebar";
import {LevelProvider} from "@/context/LevelContext";

const inter = Inter({
  weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Legacy Admin | Drills, Exercise And Moves",
  description: "Drills, Exercise And Moves",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LevelProvider>
          <div className="layout">
            <div className="container">{children}</div>
          </div>
        </LevelProvider>
      </body>
    </html>
  );
}
