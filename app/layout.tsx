import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "給与計算ツール",
  description: "月給から税金や保険料を計算するツール",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="flex items-center justify-center min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="w-full max-w-3xl p-6 shadow-lg bg-card rounded-2xl">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
