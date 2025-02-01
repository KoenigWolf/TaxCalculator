"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md dark:bg-gray-900"
    >
      {/* ロゴ */}
      <Link href="/" className="text-xl font-bold text-primary dark:text-primary-foreground">
        💰 給与計算ツール
      </Link>

      {/* ナビゲーションリンク */}
      <div className="flex items-center space-x-4">
        <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary">
          📖 使い方
        </Link>
        <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary">
          📩 お問い合わせ
        </Link>

        {/* テーマ切り替えボタン */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
        </Button>
      </div>
    </motion.nav>
  );
}
