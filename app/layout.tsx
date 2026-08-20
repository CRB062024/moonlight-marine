import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moonlight Marine",
  description: "Made for life on the water.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
